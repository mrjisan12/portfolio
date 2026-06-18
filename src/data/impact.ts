import type { EngineeringImpactCard } from "@/types";

export const impactCards: EngineeringImpactCard[] = [
  {
    id: "travel-tech",
    title: "Travel Tech Systems",
    icon: "plane",
    description:
      "Engineered a government-approved travel platform serving Hajj, Umrah, and international travel with real-time GDS API integrations.",
    impact:
      "Automated complex travel booking workflows for thousands of pilgrims, reducing manual processing from days to seconds.",
    tags: ["Sabre GDS", "Laravel", "PostgreSQL"],
    color: "#00E5FF",
  },
  {
    id: "ai-platforms",
    title: "AI Platforms",
    icon: "brain",
    description:
      "Led full-stack development of an AI document analysis platform with OpenAI, OCR, and multilingual NLP pipelines.",
    impact:
      "Enabled businesses to process and analyze documents intelligently, cutting manual review time by up to 80%.",
    tags: ["OpenAI", "pgvector", "Django", "OCR"],
    color: "#38BDF8",
  },
  {
    id: "marketplace",
    title: "Marketplace Solutions",
    icon: "store",
    description:
      "Built backend APIs for US-based service contractor marketplaces connecting qualified contractors with residential and commercial clients.",
    impact:
      "Reduced contractor-client matching time significantly with automated credential verification and geolocation matching.",
    tags: ["Laravel", "MySQL", "REST API"],
    color: "#60A5FA",
  },
  {
    id: "healthcare",
    title: "Healthcare Systems",
    icon: "heart-pulse",
    description:
      "Architected a mobile-first community healthcare platform supporting caregivers and patients through condition-specific support networks.",
    impact:
      "Connected thousands of US caregivers and patients with tailored resources, events, and peer support in a safe digital environment.",
    tags: ["Laravel", "MySQL", "Community Platform"],
    color: "#818CF8",
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture",
    icon: "sprout",
    description:
      "Developed backend infrastructure for an ML-powered smart farming app that detects crop threats and alerts farmers in real time.",
    impact:
      "Empowered farmers to respond immediately to crop threats detected by IoT devices, protecting harvests and reducing losses.",
    tags: ["Python", "Laravel", "AWS S3", "Machine Learning"],
    color: "#34D399",
  },
];
