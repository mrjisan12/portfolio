"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/data/experience";
import { CheckCircle2, Building2, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="Building production-grade systems for real-world business operations."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {i < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/40 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 mb-12">
                  <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#030712] hover:border-cyan-400/20 transition-colors group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-cyan-400 font-semibold">{exp.role}</div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-slate-400 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Highlights */}
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-3 mb-6"
                    >
                      {exp.highlights.map((h) => (
                        <motion.li
                          key={h}
                          variants={fadeInLeft}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {h}
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-slate-400 bg-white/5 border border-white/5 rounded-full hover:text-cyan-400 hover:border-cyan-400/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
