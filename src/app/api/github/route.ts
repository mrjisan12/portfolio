import { NextResponse } from "next/server";

const GRAPHQL_QUERY = `
query($username: String!) {
  user(login: $username) {
    name
    login
    avatarUrl
    followers { totalCount }
    following { totalCount }
    repositories(ownerAffiliations: OWNER, first: 100, isFork: false) {
      totalCount
      nodes {
        stargazerCount
        forkCount
        languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalRepositoryContributions
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}
`;

interface LangMap {
  [name: string]: { size: number; color: string };
}

interface ContribDay {
  contributionCount: number;
  date: string;
  color: string;
}

function calcStreak(weeks: { contributionDays: ContribDay[] }[]) {
  const days = weeks.flatMap((w) => w.contributionDays).reverse();
  let current = 0;
  let longest = 0;
  let streak = 0;
  let longestStart = "";
  let longestEnd = "";

  for (let i = 0; i < days.length; i++) {
    if (days[i].contributionCount > 0) {
      streak++;
      if (i === 0 || days[i - 1].contributionCount === 0) {
        // streak start (going backwards)
      }
    } else {
      if (streak > longest) {
        longest = streak;
        longestEnd = days[i - 1]?.date ?? "";
        longestStart = days[i - streak]?.date ?? "";
      }
      if (i === 0 || days[i - 1].contributionCount > 0) current = 0;
      streak = 0;
    }
  }
  // edge: still in a streak
  if (streak > longest) {
    longest = streak;
    longestEnd = days[0]?.date ?? "";
    longestStart = days[streak - 1]?.date ?? "";
  }
  // current streak = streak from today going back
  let cur = 0;
  for (const d of days) {
    if (d.contributionCount > 0) cur++;
    else break;
  }

  return {
    currentStreak: cur,
    longestStreak: longest,
    longestStart,
    longestEnd,
  };
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "mrjisan12";
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return NextResponse.json({ error: "No token — add GITHUB_TOKEN to .env.local" }, { status: 401 });
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: GRAPHQL_QUERY, variables: { username } }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);

    const u = json.data.user;
    const repos = u.repositories.nodes as {
      stargazerCount: number;
      forkCount: number;
      languages: { edges: { size: number; node: { name: string; color: string } }[] };
    }[];

    const totalStars = repos.reduce((s, r) => s + r.stargazerCount, 0);
    const totalForks = repos.reduce((s, r) => s + r.forkCount, 0);

    // Language aggregation
    const langMap: LangMap = {};
    repos.forEach((r) => {
      r.languages.edges.forEach(({ size, node }) => {
        if (!langMap[node.name]) langMap[node.name] = { size: 0, color: node.color };
        langMap[node.name].size += size;
      });
    });
    const totalLangSize = Object.values(langMap).reduce((s, l) => s + l.size, 0);
    const languages = Object.entries(langMap)
      .sort(([, a], [, b]) => b.size - a.size)
      .slice(0, 6)
      .map(([name, { size, color }]) => ({
        name,
        color: color || "#8b949e",
        percentage: Math.round((size / totalLangSize) * 10000) / 100,
      }));

    const cc = u.contributionsCollection;
    const { currentStreak, longestStreak, longestStart, longestEnd } =
      calcStreak(cc.contributionCalendar.weeks);

    return NextResponse.json({
      username: u.login,
      name: u.name,
      avatar: u.avatarUrl,
      followers: u.followers.totalCount,
      following: u.following.totalCount,
      publicRepos: u.repositories.totalCount,
      totalStars,
      totalForks,
      profileUrl: `https://github.com/${u.login}`,
      contributions: {
        total: cc.contributionCalendar.totalContributions,
        commits: cc.totalCommitContributions,
        pullRequests: cc.totalPullRequestContributions,
        issues: cc.totalIssueContributions,
        repos: cc.totalRepositoryContributions,
        calendar: cc.contributionCalendar.weeks,
      },
      streaks: { currentStreak, longestStreak, longestStart, longestEnd },
      languages,
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
