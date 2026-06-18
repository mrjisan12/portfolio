"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { impactCards } from "@/data/impact";
import { Plane, Brain, Store, HeartPulse, Sprout, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  plane: Plane,
  brain: Brain,
  store: Store,
  "heart-pulse": HeartPulse,
  sprout: Sprout,
};

export default function ImpactSection() {
  return (
    <section id="impact" className="relative py-32 bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Engineering Impact"
          title="Systems That Move Industries"
          description="Not just features — business outcomes. Here's the real-world value delivered across domains."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impactCards.map((card) => {
            const Icon = iconMap[card.icon] || TrendingUp;
            return (
              <motion.div key={card.id} variants={fadeInUp}>
                <GlowCard glowColor={card.color} className="h-full p-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: `${card.color}12`,
                      border: `1px solid ${card.color}25`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>

                  <div
                    className="p-3 rounded-xl text-sm mb-4"
                    style={{ background: `${card.color}08`, border: `1px solid ${card.color}15` }}
                  >
                    <div
                      className="flex items-center gap-2 text-xs font-medium mb-1"
                      style={{ color: card.color }}
                    >
                      <TrendingUp className="w-3 h-3" />
                      Business Impact
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">{card.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-lg text-slate-500 bg-white/3 border border-white/5"
                      >
                        {tag}
                      </span>
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
