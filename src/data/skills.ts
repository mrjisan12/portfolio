import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "server",
    skills: [
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Python" },
      { name: "FastAPI" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "monitor",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "pgvector" },
    ],
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: "cpu",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "OpenAI API" },
      { name: "OCR" },
      { name: "NLP" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "wrench",
    skills: [
      { name: "Git" },
      { name: "Postman" },
      { name: "AWS S3" },
      { name: "Docker" },
      { name: "Filament" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    skills: [
      { name: "Python" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "C++" },
      { name: "Java" },
    ],
  },
];
