"use client";

import { motion } from "framer-motion";
import type { ContribWeek } from "@/types/github";

interface Props {
  weeks: ContribWeek[];
  total: number;
}

const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getMonthLabels(weeks: ContribWeek[]) {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, i) => {
    const date = new Date(week.contributionDays[0]?.date ?? "");
    const month = date.getMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], col: i });
      lastMonth = month;
    }
  });
  return labels;
}

function getColor(count: number): string {
  if (count === 0) return "#161b22";
  if (count <= 3) return "#0e4429";
  if (count <= 6) return "#006d32";
  if (count <= 9) return "#26a641";
  return "#39d353";
}

export default function ContribHeatmap({ weeks, total }: Props) {
  const monthLabels = getMonthLabels(weeks);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-slate-300 font-medium">
          {total} contributions in the last year
        </span>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          Less
          {[0, 3, 6, 9, 12].map((v) => (
            <div
              key={v}
              className="w-2.5 h-2.5 rounded-sm"
              style={{ background: getColor(v) }}
            />
          ))}
          More
        </div>
      </div>

      <div className="overflow-x-auto">
        <div style={{ minWidth: "max-content" }}>
          {/* Month labels */}
          <div className="flex ml-8 mb-1">
            {monthLabels.map(({ label, col }) => (
              <div
                key={`${label}-${col}`}
                className="text-xs text-slate-500 absolute"
                style={{ marginLeft: col * 13 }}
              >
                {label}
              </div>
            ))}
            <div className="h-4" />
          </div>

          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-[3px] mr-1">
              {DAYS.map((d, i) => (
                <div key={i} className="h-[11px] text-[9px] text-slate-600 text-right w-6 leading-[11px]">
                  {d}
                </div>
              ))}
            </div>

            {/* Grid */}
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.contributionDays.map((day, di) => (
                  <motion.div
                    key={day.date}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                    className="w-[11px] h-[11px] rounded-sm cursor-pointer"
                    style={{ background: getColor(day.contributionCount) }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, delay: (wi * 7 + di) * 0.002 }}
                    whileHover={{ scale: 1.5, zIndex: 10 }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
