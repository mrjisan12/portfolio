"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import { achievements } from "@/data/achievements";
import { useCounter } from "@/hooks/useCounter";
import {
  GraduationCap, FolderOpen, Code2, Award, Medal, Zap, Shield, Trophy,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "folder-code": FolderOpen,
  "code-2": Code2,
  award: Award,
  medal: Medal,
  zap: Zap,
  shield: Shield,
  trophy: Trophy,
};

interface CounterCardProps {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  description: string;
  icon: string;
  delay: number;
}

function CounterCard({ value, numericValue, suffix, label, description, icon, delay }: CounterCardProps) {
  const Icon = iconMap[icon] || Award;
  const { count, ref } = useCounter(numericValue || 0, 1800);

  const displayValue = numericValue
    ? numericValue % 1 !== 0
      ? `${(count / Math.max(Math.floor(numericValue), 1) * numericValue).toFixed(2)}`
      : `${count}${suffix || ""}`
    : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl border border-white/5 bg-[#0F172A] hover:border-cyan-400/20 transition-all duration-300 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center mx-auto mb-4">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>

          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
            {displayValue}
          </div>

          <div className="text-white font-semibold text-sm mb-1">{label}</div>
          <div className="text-slate-500 text-xs leading-relaxed">{description}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-32 bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Numbers That Speak"
          description="Academic excellence, competitive programming, and engineering milestones."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {achievements.map((ach, i) => (
            <CounterCard
              key={ach.id}
              value={ach.value}
              numericValue={ach.numericValue}
              suffix={ach.suffix}
              label={ach.label}
              description={ach.description}
              icon={ach.icon}
              delay={i * 0.08}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
