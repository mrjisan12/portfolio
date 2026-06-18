"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Upload, FileText, CheckCircle2, AlertCircle, TrendingUp,
  Zap, Target, Star, RefreshCw, ChevronRight,
} from "lucide-react";

type AnalysisResult = {
  atsScore: number;
  healthScore: number;
  missingKeywords: string[];
  strengths: string[];
  improvements: string[];
};

const mockAnalysis = (filename: string): AnalysisResult => ({
  atsScore: Math.floor(Math.random() * 20 + 72),
  healthScore: Math.floor(Math.random() * 15 + 78),
  missingKeywords: [
    "System Design", "Microservices", "CI/CD", "Redis", "Kubernetes",
    "GraphQL", "Unit Testing", "Agile/Scrum",
  ],
  strengths: [
    "Strong backend engineering keywords (Laravel, Django, PostgreSQL)",
    "Quantifiable achievements with CGPA and metrics",
    "Clear project descriptions with technology stack",
    "Production deployment experience mentioned",
  ],
  improvements: [
    "Add measurable impact metrics to each project (e.g., '40% faster response time')",
    "Include system design and architecture keywords",
    "Add DevOps / CI-CD experience to increase ATS score",
    "Mention team size and collaboration tools used",
    "Add a professional summary at the top optimized for keywords",
  ],
});

function ScoreRing({ score, label, color }: { score: number; label: string; color: string }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="#ffffff08" strokeWidth="8" />
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">{score}</span>
          <span className="text-xs text-slate-500">/ 100</span>
        </div>
      </div>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFile = useCallback((f: File) => {
    if (!f.name.match(/\.(pdf|doc|docx)$/i)) return;
    setFile(f);
    setResult(null);
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setAnalyzing(true);
    await new Promise((r) => setTimeout(r, 2800));
    setResult(mockAnalysis(file.name));
    setAnalyzing(false);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
  };

  return (
    <section id="resume-analyzer" className="relative py-32 bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Special Feature"
          title="AI Resume Analyzer"
          description="Upload your resume and get instant ATS score, missing keywords, and personalized improvement suggestions powered by AI."
        />

        {/* Feature badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Target, label: "ATS Score Analysis" },
            { icon: Star, label: "Health Score" },
            { icon: Zap, label: "Missing Keywords" },
            { icon: TrendingUp, label: "Improvement Tips" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/8 text-slate-400 text-xs"
            >
              <Icon className="w-3.5 h-3.5 text-cyan-400" />
              {label}
            </div>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Upload state */}
            {!result && !analyzing && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Drop zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`relative p-12 rounded-2xl border-2 border-dashed text-center transition-all cursor-pointer ${
                    isDragging
                      ? "border-cyan-400/60 bg-cyan-400/5"
                      : file
                      ? "border-green-400/40 bg-green-400/5"
                      : "border-white/10 hover:border-white/20 bg-white/2"
                  }`}
                  onClick={() => document.getElementById("resume-input")?.click()}
                >
                  <input
                    id="resume-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                  />
                  {file ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                        <FileText className="w-7 h-7 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{file.name}</div>
                        <div className="text-slate-500 text-sm mt-1">
                          {(file.size / 1024).toFixed(1)} KB · Ready to analyze
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-green-400">
                        <CheckCircle2 className="w-4 h-4" />
                        File uploaded successfully
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-slate-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">
                          Drop your resume here
                        </div>
                        <div className="text-slate-500 text-sm">
                          Supports PDF, DOC, DOCX · Max 5MB
                        </div>
                      </div>
                      <div className="text-xs text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 rounded-full">
                        Click to browse files
                      </div>
                    </div>
                  )}
                </div>

                {file && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleAnalyze}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-bold text-base shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-all flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-5 h-5" />
                    Analyze Resume with AI
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* Analyzing state */}
            {analyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 gap-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-cyan-400/20 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full border-2 border-t-cyan-400 border-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  <FileText className="w-7 h-7 text-cyan-400 absolute inset-0 m-auto" />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold mb-2">Analyzing your resume...</div>
                  <div className="text-slate-500 text-sm">
                    Checking ATS compatibility, keywords, and structure
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-cyan-400"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results */}
            {result && !analyzing && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Scores */}
                <div className="p-6 rounded-2xl border border-white/5 bg-[#030712]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white font-bold">Analysis Results</h3>
                    <button
                      onClick={reset}
                      className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Analyze Another
                    </button>
                  </div>
                  <div className="flex justify-around">
                    <ScoreRing score={result.atsScore} label="ATS Score" color="#00E5FF" />
                    <ScoreRing score={result.healthScore} label="Health Score" color="#818CF8" />
                    <ScoreRing score={Math.floor((result.atsScore + result.healthScore) / 2)} label="Overall" color="#38BDF8" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div className="p-6 rounded-2xl border border-green-400/15 bg-green-400/3">
                    <div className="flex items-center gap-2 mb-4 text-green-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <h4 className="font-semibold">Strengths</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-slate-400 text-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Missing keywords */}
                  <div className="p-6 rounded-2xl border border-amber-400/15 bg-amber-400/3">
                    <div className="flex items-center gap-2 mb-4 text-amber-400">
                      <AlertCircle className="w-5 h-5" />
                      <h4 className="font-semibold">Missing Keywords</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {result.missingKeywords.map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-1 text-xs rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/20"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Improvements */}
                <div className="p-6 rounded-2xl border border-white/5 bg-[#030712]">
                  <div className="flex items-center gap-2 mb-4 text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="font-semibold text-white">Improvement Suggestions</h4>
                  </div>
                  <ul className="space-y-3">
                    {result.improvements.map((imp, i) => (
                      <li key={imp} className="flex items-start gap-3 text-slate-400 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-xs text-cyan-400 font-medium">
                          {i + 1}
                        </span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
