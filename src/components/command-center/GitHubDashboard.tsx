"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import type { GitHubData } from "@/types/github";
import ContribHeatmap from "./ContribHeatmap";
import {
  GitCommitHorizontal, GitPullRequest, AlertCircle,
  Star, GitFork, Users, Flame, Zap, ExternalLink, Loader2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function GitHubDashboard() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d: GitHubData) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load GitHub data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 gap-3 text-slate-500">
        <Loader2 className="w-5 h-5 animate-spin text-cyan-400" />
        <span className="text-sm">Loading GitHub data…</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 text-center">
        <p className="text-amber-400 text-sm font-medium mb-1">GitHub data unavailable</p>
        <p className="text-slate-500 text-xs">{error || "Add GITHUB_TOKEN to .env.local"}</p>
      </div>
    );
  }

  const { contributions, streaks, languages } = data;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaGithub className="w-5 h-5 text-white" />
          <span className="text-white font-semibold">{data.name}&apos;s GitHub Analytics</span>
        </div>
        <a
          href={data.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
        >
          @{data.username} <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { icon: Star, label: "Total Stars", value: data.totalStars, color: "#F59E0B" },
          { icon: GitCommitHorizontal, label: "Commits (yr)", value: contributions.commits, color: "#00E5FF" },
          { icon: GitPullRequest, label: "Pull Requests", value: contributions.pullRequests, color: "#38BDF8" },
          { icon: AlertCircle, label: "Issues", value: contributions.issues, color: "#818CF8" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div
            key={label}
            className="p-4 rounded-xl border border-white/5 bg-[#0d1117] flex items-center gap-3"
          >
            <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
            <div>
              <div className="text-lg font-bold text-white leading-none">{value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="p-5 rounded-2xl border border-white/5 bg-[#0d1117]">
        {contributions.calendar.length > 0 ? (
          <ContribHeatmap weeks={contributions.calendar} total={contributions.total} />
        ) : (
          <p className="text-slate-500 text-sm text-center py-4">No contribution data</p>
        )}
      </div>

      {/* Streak + Language row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Streaks */}
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0d1117]">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white">Contribution Streaks</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-xl bg-white/3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-slate-500">Current</span>
              </div>
              <div className="text-3xl font-bold text-cyan-400">{streaks.currentStreak}</div>
              <div className="text-xs text-slate-500 mt-0.5">days</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/3">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Flame className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs text-slate-500">Longest</span>
              </div>
              <div className="text-3xl font-bold text-orange-400">{streaks.longestStreak}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                {streaks.longestStart && streaks.longestEnd
                  ? `${formatDate(streaks.longestStart)} – ${formatDate(streaks.longestEnd)}`
                  : "days"}
              </div>
            </div>
          </div>

          {/* Quick profile stats */}
          <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-3 gap-2 text-center">
            {[
              { icon: Users, value: data.followers, label: "Followers" },
              { icon: GitFork, value: data.totalForks, label: "Forks" },
              { icon: FaGithub, value: data.publicRepos, label: "Repos" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <div className="text-sm font-bold text-white">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="p-5 rounded-2xl border border-white/5 bg-[#0d1117]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-sm font-medium text-white">Most Used Languages</span>
          </div>

          {/* Combined bar */}
          <div className="flex h-2 rounded-full overflow-hidden mb-4 gap-[1px]">
            {languages.map((l) => (
              <div
                key={l.name}
                style={{ width: `${l.percentage}%`, background: l.color }}
                title={`${l.name} ${l.percentage}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {languages.map((l) => (
              <div key={l.name} className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: l.color }}
                />
                <span className="text-xs text-slate-300 truncate">{l.name}</span>
                <span className="text-xs text-slate-500 ml-auto">{l.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
