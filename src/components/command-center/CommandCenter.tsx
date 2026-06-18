"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { BookOpen, FlaskConical, Terminal, Cpu } from "lucide-react";
import GitHubDashboard from "./GitHubDashboard";

const techStack = [
  { name: "Laravel", level: "Expert", color: "#FF2D20" },
  { name: "Django", level: "Expert", color: "#16a34a" },
  { name: "React", level: "Advanced", color: "#61DAFB" },
  { name: "PostgreSQL", level: "Advanced", color: "#336791" },
  { name: "Python", level: "Advanced", color: "#3572A5" },
  { name: "Next.js", level: "Intermediate", color: "#e2e8f0" },
];

const researchInterests = [
  "Large Language Models & RAG Architecture",
  "Vector Databases & Semantic Search",
  "Scalable API Design Patterns",
  "AI-Powered Document Processing",
  "Backend Performance Optimization",
];

const currentLearning = [
  { topic: "Machine Learning & Deep Learning", platform: "Phitron AI/ML Batch", progress: 60 },
  { topic: "System Design", platform: "Self Study", progress: 75 },
  { topic: "Kubernetes & Docker", platform: "Hands-on Practice", progress: 40 },
];

export default function CommandCenter() {
  return (
    <section id="command-center" className="relative py-32 bg-[#030712]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Command Center"
          title="Explore My Engineering World"
          description="Live GitHub analytics, tech stack, research interests, and what I&apos;m learning."
        />

        <div className="space-y-6">
          {/* ── GitHub Dashboard (full width) ── */}
          <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]">
            <GitHubDashboard />
          </div>

          {/* ── Bottom grid ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Research Interests */}
            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="#818CF8" className="p-6 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <FlaskConical className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-semibold">Research Interests</h3>
                </div>
                <ul className="space-y-3">
                  {researchInterests.map((interest) => (
                    <li key={interest} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>

            {/* Currently Learning */}
            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="#38BDF8" className="p-6 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-semibold">Currently Learning</h3>
                </div>
                <div className="space-y-5">
                  {currentLearning.map((item) => (
                    <div key={item.topic}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300">{item.topic}</span>
                        <span className="text-xs text-slate-500">{item.progress}%</span>
                      </div>
                      <div className="text-xs text-slate-500 mb-2">{item.platform}</div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-linear-to-r from-blue-400 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Competitive Programming */}
            <motion.div variants={fadeInUp}>
              <GlowCard glowColor="#34D399" className="p-6 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <h3 className="text-white font-semibold">Competitive Programming</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { platform: "Codeforces", solved: "270+", rank: "Active" },
                    { platform: "Other Platforms", solved: "30+", rank: "Solved" },
                    { platform: "IUPC 2023", solved: "Top 30", rank: "Contest" },
                    { platform: "CTF Contest", solved: "Champion", rank: "Winner" },
                  ].map((item) => (
                    <div key={item.platform} className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-slate-300">{item.platform}</div>
                        <div className="text-xs text-slate-500">{item.rank}</div>
                      </div>
                      <span className="text-sm font-bold text-green-400">{item.solved}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Core Tech Stack (spans 3 cols) */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-3">
              <GlowCard className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-semibold">Core Tech Stack</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors group cursor-default"
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ background: tech.color }}
                      />
                      <div>
                        <div className="text-sm text-white group-hover:text-cyan-400 transition-colors">
                          {tech.name}
                        </div>
                        <div className="text-xs text-slate-500">{tech.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
