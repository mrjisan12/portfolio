"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROLES } from "@/constants";

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 h-10">
      <span className="text-slate-400 text-lg">I&apos;m a</span>
      <div className="relative overflow-hidden h-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg font-bold whitespace-nowrap"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
