"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const categories: { key: "all" | Project["category"]; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "enterprise", label: "Enterprise" },
  { key: "ai", label: "AI Systems" },
  { key: "frontend", label: "Frontend" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | Project["category"]>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Production-Grade Work"
          description="Real systems built for real businesses — from travel-tech GDS integrations to AI platforms."
        />

        {/* Filter tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeCategory === cat.key
                  ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                  : "text-slate-400 border border-white/5 hover:text-white hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
