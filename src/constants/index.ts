export const SITE_CONFIG = {
  name: "Md. Mizanur Rahman",
  shortName: "Mizan",
  title: "Software Engineer",
  description:
    "Software Engineer specializing in backend architecture, enterprise systems, AI-powered applications, and modern web technologies. Based in Dhaka, Bangladesh.",
  url: "https://mrjisan12.vercel.app/",
  email: "mizanururahmanjisan12@gmail.com",
  phone: "01752-730364",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mrjisan12/",
  linkedin: "https://www.linkedin.com/in/md-mizanur-rahman-ab5333287/",
  availability: "Open to Opportunities",
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "#about", type: "anchor" },
  { label: "Experience", href: "#experience", type: "anchor" },
  { label: "Skills", href: "#skills", type: "anchor" },
  { label: "Projects", href: "#projects", type: "anchor" },
  { label: "Impact", href: "#impact", type: "anchor" },
  { label: "Contact", href: "#contact", type: "anchor" },
] as const;

export const TOOL_NAV = {
  label: "AI Resume Analyzer",
  href: "/resume-analyzer",
  type: "route",
} as const;

export const ROLES = [
  "Software Engineer",
  "Backend Engineer",
  "Django Developer",
  "Laravel Developer",
  "AI Enthusiast",
  "Problem Solver",
] as const;

export const COLORS = {
  background: "#030712",
  surface: "#0F172A",
  primary: "#00E5FF",
  secondary: "#38BDF8",
  accent: "#60A5FA",
  text: "#F8FAFC",
  muted: "#94A3B8",
  glow: "rgba(0,229,255,0.4)",
} as const;
