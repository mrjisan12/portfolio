"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { skillCategories } from "@/data/skills";
import {
  Server, Monitor, Database, Cpu, Wrench, Code2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  monitor: Monitor,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
  code: Code2,
};

const categoryColors: Record<string, string> = {
  backend: "#00E5FF",
  frontend: "#38BDF8",
  database: "#60A5FA",
  ai: "#818CF8",
  tools: "#A78BFA",
  languages: "#34D399",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 bg-[#030712]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Technologies I use to build production-grade systems, from APIs to AI pipelines."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            const color = categoryColors[cat.id] || "#00E5FF";

            return (
              <motion.div key={cat.id} variants={fadeInUp}>
                <GlowCard glowColor={color} className="h-full p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <h3 className="text-white font-semibold">{cat.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 cursor-default"
                        style={{
                          color: `${color}cc`,
                          borderColor: `${color}20`,
                          background: `${color}08`,
                        }}
                        whileHover={{
                          borderColor: `${color}60`,
                          background: `${color}15`,
                          scale: 1.05,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
