import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ResumeAnalyzer from "@/components/resume-analyzer/ResumeAnalyzer";
import ScrollProgress from "@/components/shared/ScrollProgress";
import BackToTop from "@/components/shared/BackToTop";
import CustomCursor from "@/components/shared/CustomCursor";

export const metadata: Metadata = {
  title: "AI Resume Analyzer",
  description:
    "Upload your resume and get an instant ATS score, missing keywords, health score, and personalized improvement suggestions powered by AI.",
};

export default function ResumeAnalyzerPage() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        <ResumeAnalyzer />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
