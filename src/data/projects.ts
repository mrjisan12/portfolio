import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nusukibd",
    title: "NUSUKI",
    year: "2026",
    category: "enterprise",
    description:
      "Govt-approved travel agency platform supporting Hajj, Umrah, Hotels & international travel services.",
    longDescription:
      "Nusuki is a comprehensive travel-tech platform for a government-approved travel agency. Built the entire backend system with complex Sabre API integrations for real-time flight booking, hotel reservations, and travel package management.",
    technologies: ["Laravel", "Filament", "Sabre API", "PostgreSQL", "PHP"],
    challenges:
      "Integrating complex Sabre GDS APIs for real-time flight and hotel data with proper error handling and caching.",
    impact:
      "Enabled a government-approved travel agency to serve thousands of pilgrims and travelers with automated booking workflows.",
    liveDemo: "#",
    featured: true,
  },
  {
    id: "bangla-ai",
    title: "Bangla AI",
    year: "2026",
    category: "ai",
    description:
      "AI-powered document processing platform with multilingual analysis, OCR, and OpenAI integration.",
    longDescription:
      "Led end-to-end development of an AI platform covering architecture, cloud infrastructure, backend, and frontend. Engineered scalable APIs with pgvector for semantic search and integrated OpenAI and OCR pipelines.",
    technologies: [
      "Django",
      "DRF",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "OCR",
      "React",
    ],
    challenges:
      "Building multilingual NLP pipelines with Bengali language support and integrating pgvector for semantic document retrieval at scale.",
    impact:
      "Enabled AI-powered document analysis for Bangladeshi businesses, reducing manual processing time by 80%.",
    liveDemo: "#",
    featured: true,
  },
  {
    id: "llm-vertex",
    title: "LLM Vertex",
    year: "2025",
    category: "frontend",
    description:
      "Company website for a US-based AI company. Clean, modern SaaS-style frontend.",
    longDescription:
      "Built the company website for LLM Vertex, a USA-based AI technology company. Focused on premium UI/UX with modern animations and optimal performance.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    challenges:
      "Delivering pixel-perfect design with fast load times and smooth animations matching a premium US tech brand.",
    impact: "Professional web presence for a US-based AI company.",
    liveDemo: "#",
  },
  {
    id: "workforce-development",
    title: "LLM Vertex Workforce",
    year: "2026",
    category: "frontend",
    description:
      "Workforce development platform with Stripe payments and Django REST backend for a US client.",
    longDescription:
      "Built a complete workforce development site for a US client with full-stack implementation. Integrated Stripe payment processing for course enrollments and subscriptions.",
    technologies: ["React", "Tailwind CSS", "Django REST Framework", "Stripe"],
    challenges:
      "Seamless Stripe payment integration with subscription management and webhook handling across a distributed system.",
    impact:
      "Enabled a US workforce training company to accept online payments and manage student enrollments efficiently.",
    liveDemo: "#",
  },
  {
    id: "cintracon",
    title: "CINTRACON V2",
    year: "2025",
    category: "enterprise",
    description:
      "Student-driven social media platform connecting students, alumni, and professionals.",
    longDescription:
      "CINTRACON is a full-stack social networking platform built for university communities. Integrates OpenAI for smart content recommendations and knowledge sharing.",
    technologies: [
      "Django REST Framework",
      "React",
      "Tailwind CSS",
      "OpenAI API",
      "PostgreSQL",
    ],
    challenges:
      "Scaling real-time social feeds with OpenAI integration while maintaining sub-200ms API response times.",
    impact:
      "Connected thousands of students and alumni enabling knowledge sharing and career opportunities.",
    liveDemo: "#",
  },
  {
    id: "contractor-connect",
    title: "Contractor Connect",
    year: "2025",
    category: "enterprise",
    description:
      "Service contractor marketplace platform connecting accredited contractors with clients in the USA.",
    longDescription:
      "Built the complete backend API for a contractor marketplace that connects qualified, accredited contractors with residential and commercial clients across the USA.",
    technologies: ["Laravel", "MySQL", "REST API", "PHP"],
    challenges:
      "Designing a robust contractor verification system with geolocation-based matching and secure payment escrow.",
    impact:
      "Enabled US homeowners and businesses to find certified contractors with reduced search time.",
    isNDA: true,
  },
  {
    id: "haverhood",
    title: "HavenHood",
    year: "2025",
    category: "enterprise",
    description:
      "Mobile-first healthcare community platform supporting caregivers and patients in the USA.",
    longDescription:
      "Built the backend API for HavenHood, a community platform connecting caregivers and patients through condition-specific support groups with resources and events.",
    technologies: ["Laravel", "MySQL", "REST API", "PHP"],
    challenges:
      "Building HIPAA-compliant data structures with condition-specific community segmentation and real-time notifications.",
    impact:
      "Supported thousands of US caregivers and patients with community resources and peer support.",
    isNDA: true,
  },
  {
    id: "farm-app",
    title: "Farm App",
    year: "2024",
    category: "ai",
    description:
      "Smart farming application using ML to monitor crop conditions and alert farmers instantly.",
    longDescription:
      "Built the backend API for a smart agriculture platform that uses machine learning to detect harmful insects and leaf damage in real time, instantly alerting farmers.",
    technologies: [
      "Laravel",
      "PostgreSQL",
      "Python",
      "AWS S3",
      "Machine Learning",
    ],
    challenges:
      "Processing ML model outputs in real-time and triggering instant farmer alerts with minimal latency.",
    impact:
      "Helped US farmers reduce crop loss by enabling instant detection and response to plant diseases.",
    isNDA: true,
  },
];
