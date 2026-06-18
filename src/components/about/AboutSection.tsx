"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";

const timeline = [
  {
    year: "2019",
    icon: GraduationCap,
    title: "Academic Excellence",
    subtitle: "HSC GPA 5.00",
    description:
      "Achieved a perfect GPA in Higher Secondary Certificate with outstanding marks in Physics, Chemistry & Mathematics (589/600). Section Captain demonstrating early leadership.",
    color: "#00E5FF",
  },
  {
    year: "2022",
    icon: Code2,
    title: "CSE Journey Begins",
    subtitle: "University of Asia Pacific",
    description:
      "Enrolled in B.Sc. CSE, discovered a deep passion for software engineering. Began competitive programming, solving 300+ problems. Joined Phitron's intensive program for solid foundations.",
    color: "#38BDF8",
  },
  {
    year: "2023",
    icon: Code2,
    title: "Competitive Programming",
    subtitle: "IUPC, CTF & Hackathons",
    description:
      "Placed 30th in IUPC solving 5 problems, became CTF Champion, placed Top 20 in Impact Dhaka — Bangladesh's first AI Hackathon organized by Cognisor AI (Japan).",
    color: "#60A5FA",
  },
  {
    year: "2024",
    icon: Briefcase,
    title: "Production Engineering",
    subtitle: "Innovation Lab 360",
    description:
      "Joined as Backend Developer. Started shipping production-grade Laravel and Django systems. Built the Farm App smart agriculture backend with ML integration and AWS infrastructure.",
    color: "#818CF8",
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "Enterprise Systems & US Clients",
    subtitle: "NDA Projects",
    description:
      "Delivered multiple NDA enterprise systems for US clients — Contractor Connect, HavenHood, and CINTRACON V2. Mastered system architecture, REST API design, and production deployments.",
    color: "#A78BFA",
  },
  {
    year: "2026",
    icon: Briefcase,
    title: "AI Platforms & Travel Tech",
    subtitle: "NusukiBD · Bangla AI",
    description:
      "Led development of NusukiBD with Sabre GDS API integration and Bangla AI — an AI document analysis platform with OpenAI, pgvector, and multilingual NLP. End-to-end ownership.",
    color: "#00E5FF",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-[#030712]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="The Engineer Behind The Code"
          description="A story of relentless curiosity, deliberate practice, and production-grade engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]">
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m{" "}
                <span className="text-white font-semibold">Md. Mizanur Rahman</span>, a
                software engineer from Dhaka, Bangladesh, currently in my final year of B.Sc.
                CSE at the University of Asia Pacific with a{" "}
                <span className="text-cyan-400 font-semibold">CGPA of 3.93/4.00</span>.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]">
              <p className="text-slate-400 leading-relaxed">
                I don&apos;t just write code — I engineer systems. From travel-tech GDS integrations
                to AI document analysis platforms, I build software that handles real business
                operations at scale. My work spans backend APIs, database architecture, cloud
                deployments, and full-stack delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]">
              <p className="text-slate-400 leading-relaxed">
                My competitive programming background (300+ problems, IUPC Top 30, CTF Champion)
                shaped how I think about problems — analytically, efficiently, and under pressure.
                That same mindset drives how I architect and deliver production systems.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
                { icon: GraduationCap, label: "CGPA", value: "3.93 / 4.00" },
                { icon: Briefcase, label: "Role", value: "Backend Developer" },
                { icon: Code2, label: "Focus", value: "Backend & AI Systems" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/3 border border-white/5"
                >
                  <div className="p-2 rounded-lg bg-cyan-400/10">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-sm text-white font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/50 via-blue-400/30 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-[#0F172A]"
                  style={{ boxShadow: `0 0 20px ${item.color}30` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <div className="flex-1 pt-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{ color: item.color, background: `${item.color}15` }}
                    >
                      {item.year}
                    </span>
                    <span className="text-slate-500 text-xs">{item.subtitle}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
