"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col ${alignClass} mb-16`}
    >
      <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-[0.25em] mb-4">
        <span className="w-6 h-[1px] bg-cyan-400" />
        {label}
        <span className="w-6 h-[1px] bg-cyan-400" />
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate-400 text-base md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
