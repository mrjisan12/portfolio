export interface Project {
  id: string;
  title: string;
  year: string;
  category: "enterprise" | "ai" | "frontend";
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string;
  impact: string;
  github?: string;
  liveDemo?: string;
  isNDA?: boolean;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface EngineeringImpactCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  impact: string;
  tags: string[];
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
  github: string;
  linkedin: string;
}
