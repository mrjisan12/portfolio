"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const categoryColor: Record<Project["category"], string> = {
  enterprise: "#00E5FF",
  ai: "#818CF8",
  frontend: "#38BDF8",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const color = categoryColor[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/5 bg-[#0F172A] transition-all duration-300",
          "hover:border-white/10 hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
        )}
        style={{
          boxShadow: project.featured ? `0 0 30px ${color}12` : undefined,
        }}
      >
        {/* Top accent line */}
        <div
          className="h-[2px] w-full opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ color, background: `${color}15` }}
                >
                  {project.year}
                </span>
                <span className="text-xs text-slate-500 capitalize">{project.category}</span>
                {project.featured && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    Featured
                  </span>
                )}
                {project.isNDA && (
                  <span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                    <Lock className="w-2.5 h-2.5" />
                    NDA
                  </span>
                )}
              </div>
              <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {project.liveDemo && !project.isNDA && (
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              {project.github && !project.isNDA && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Expand toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
          >
            {expanded ? (
              <>Less details <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>More details <ChevronDown className="w-3 h-3" /></>
            )}
          </button>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-3 border-t border-white/5 mt-4">
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Challenge</div>
                <p className="text-slate-400 text-sm">{project.challenges}</p>
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Impact</div>
                <p className="text-slate-400 text-sm">{project.impact}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
