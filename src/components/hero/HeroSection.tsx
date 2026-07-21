"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Download, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { staggerContainer, fadeInUp, fadeInDown, fadeInLeft, fadeInRight } from "@/animations/variants";
import { SITE_CONFIG } from "@/constants";
import ParticleBackground from "./ParticleBackground";
import RoleSwitcher from "./RoleSwitcher";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* Aurora blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-purple-600/6 rounded-full blur-[100px] pointer-events-none" />

      <ParticleBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT — Text content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div variants={fadeInDown} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Available for Opportunities · Dhaka, Bangladesh
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={fadeInUp} className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] text-white">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Scalable
                </span>
                <br />
                Systems, AI
                <br />
                Products &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Real-World
                </span>
                <br />
                Solutions.
              </h1>
            </motion.div>

            {/* Role switcher */}
            <motion.div variants={fadeInUp} className="mb-6">
              <RoleSwitcher />
            </motion.div>

            {/* Sub heading */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
            >
              Software Engineer specializing in backend architecture, enterprise systems,
              AI-powered applications, and modern web technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-8">
              <motion.button
                onClick={() => handleScroll("#projects")}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-semibold text-sm shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => handleScroll("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/80 font-semibold text-sm hover:border-cyan-400/40 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-slate-400 font-medium text-sm hover:border-white/20 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            {/* Social + stats row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
              {/* Socials */}
              <div className="flex items-center gap-3">
                {[
                  { icon: FaGithub, href: SITE_CONFIG.github, label: "GitHub" },
                  { icon: FaLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-white/10 hidden sm:block" />

              {/* Quick stats */}
              <div className="flex items-center gap-6">
                {[
                  { value: "3.94", label: "CGPA" },
                  { value: "10+", label: "Projects" },
                  { value: "300+", label: "Problems" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Photo ── */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/20 blur-2xl" />

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />

              {/* Gradient border frame */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/50 shadow-[0_0_60px_rgba(0,229,255,0.2)]">
                <div className="relative overflow-hidden rounded-2xl bg-[#0F172A]">
                  <Image
                    src="/Jisan.jpg"
                    alt="Md. Mizanur Rahman — Software Engineer"
                    width={420}
                    height={500}
                    className="w-[280px] h-[340px] sm:w-[340px] sm:h-[410px] lg:w-[380px] lg:h-[460px] object-cover object-top"
                    priority
                  />

                  {/* Subtle bottom fade overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
                </div>
              </div>

              {/* Floating badge — Innovation Lab */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-8 bg-[#0F172A] border border-cyan-400/20 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm"
              >
                <div className="text-xs text-cyan-400 font-semibold whitespace-nowrap">Backend Developer</div>
                <div className="text-xs text-slate-500">Innovation Lab 360</div>
              </motion.div>

              {/* Floating badge — CGPA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-4 bottom-12 bg-[#0F172A] border border-white/10 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm"
              >
                <div className="text-xs text-slate-500">CGPA</div>
                <div className="text-base font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">3.94 / 4.00</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => handleScroll("#about")}
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
