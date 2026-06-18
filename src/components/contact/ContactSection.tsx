"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import { SITE_CONFIG } from "@/constants";
import {
  Mail, MapPin, Phone, Send, CheckCircle2, Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
    { icon: Phone, label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
    { icon: MapPin, label: "Location", value: SITE_CONFIG.location, href: "#" },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: SITE_CONFIG.github },
    { icon: FaLinkedin, label: "LinkedIn", href: SITE_CONFIG.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${SITE_CONFIG.email}` },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#030712]">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          description="Open to full-time roles, freelance projects, and collaborations. Let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability */}
            <div className="p-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for Opportunities</span>
              </div>
              <p className="text-slate-400 text-sm">
                Currently open to full-time backend/full-stack roles and interesting project collaborations.
              </p>
            </div>

            {/* Contact info */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A] space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-sm text-slate-300 group-hover:text-white transition-colors break-all">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl border border-white/5 bg-[#0F172A]">
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Find me on</div>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all text-xs"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0F172A]">
              <h3 className="text-white font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Opportunity / Collaboration / Hello"
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, role, or just say hello..."
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-cyan-400/3 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-semibold text-sm disabled:opacity-70 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,229,255,0.25)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? (
                    <><CheckCircle2 className="w-4 h-4" /> Message Sent!</>
                  ) : sending ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
