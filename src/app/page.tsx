import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ImpactSection from "@/components/engineering-impact/ImpactSection";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import CommandCenter from "@/components/command-center/CommandCenter";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import LoadingScreen from "@/components/shared/LoadingScreen";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import BackToTop from "@/components/shared/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ImpactSection />
        <AchievementsSection />
        <CommandCenter />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
