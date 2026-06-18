export interface ContribDay {
  contributionCount: number;
  date: string;
  color: string;
}

export interface ContribWeek {
  contributionDays: ContribDay[];
}

export interface GitHubData {
  username: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  profileUrl: string;
  contributions: {
    total: number;
    commits: number;
    pullRequests: number;
    issues: number;
    repos: number;
    calendar: ContribWeek[];
  };
  streaks: {
    currentStreak: number;
    longestStreak: number;
    longestStart: string;
    longestEnd: string;
  };
  languages: {
    name: string;
    color: string;
    percentage: number;
  }[];
  error?: string;
}
