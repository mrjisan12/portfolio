"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 z-[9998] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
