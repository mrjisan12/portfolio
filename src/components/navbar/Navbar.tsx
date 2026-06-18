"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, TOOL_NAV, SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "py-5"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-1"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                MR
              </span>
              <span className="text-white/20 mx-0.5">|</span>
              <span className="text-white/60 text-sm font-normal">JISAN</span>
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = isHome && activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleAnchorClick(item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive ? "text-cyan-400" : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/5 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </button>
                </li>
              );
            })}

            {/* AI Tool link — special styling */}
            <li>
              <Link href={TOOL_NAV.href}>
                <motion.span
                  className={cn(
                    "relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer",
                    pathname === TOOL_NAV.href
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-slate-400 hover:text-cyan-400 border border-transparent hover:border-cyan-400/20 hover:bg-cyan-400/5"
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Resume AI
                </motion.span>
              </Link>
            </li>
          </ul>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleAnchorClick(item.href)}
                    className="w-full text-left px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* AI Tool — mobile */}
              <li>
                <Link
                  href={TOOL_NAV.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-cyan-400 hover:bg-cyan-400/5 rounded-lg transition-all text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  AI Resume Analyzer
                </Link>
              </li>

              <li className="pt-2 border-t border-white/5 mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 text-slate-400 text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
