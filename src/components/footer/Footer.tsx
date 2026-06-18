"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, NAV_ITEMS } from "@/constants";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3">
              MR
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Software Engineer building scalable systems, AI products, and real-world solutions from Dhaka, Bangladesh.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Navigation</div>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Connect</div>
            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Md. Mizanur Rahman. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-600 text-xs">
            Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            using Next.js & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
