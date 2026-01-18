// /data/site.ts
export type Link = { label: string; href: string }

export type School = {
  school: string
  program: string
  degree?: string
  start: string
  end: string
  highlights?: string[]
}

export type Experience = {
  role: string
  company: string
  start: string
  end: string
  highlights: string[]
  links?: Link[]
}

export type Project = {
  title: string
  tagline: string
  stack: string[]
  status: "live" | "in-progress" | "planned"
  links?: Partial<Record<"live" | "repo" | "demo", string>>
  bullets?: string[]
}

export const about = {
  name: "Khalid Tahir",
  tagline:
    "Backend & ML-minded Computer Engineering @ Queen's · PM Intern turned builder",
  blurb:
    "I like designing clean backends and data workflows—APIs, auth, databases, queues—and applying ML where it actually improves user value. Off the keyboard I'm into soccer and basketball. I'm currently building ChoTime, a fitness app to track workouts, meals, and progress.",
  sports: ["Soccer", "Basketball", "Cycling"],
  interests: ["Backend APIs", "Databases", "ML systems", "Automation", "Dashboards"],
}

export const schools: School[] = [
  {
    school: "Queen's University",
    program: "Computer Engineering (BASc)",
    start: "2019",
    end: "2026",
    highlights: [
      "ELEC 425 Machine Learning",
      "Distributed Systems",
      "Software Requirements",
      "Data Structures & Algorithms",
    ],
  },
]

export const experiences: Experience[] = [
  {
    role: "Project Manager Intern (Engineering-focused)",
    company: "Queen's University IT Services",
    start: "May 2024",
    end: "Sep 2025",
    highlights: [
      "Designed and shipped an automated operating-plan pipeline (Forms → SharePoint → Power BI) to production.",
      "Reduced intake cycle from 4–5 months to < 4 weeks; enabled tracking for 300+ projects via role-based dashboards.",
      "Partnered with engineers to stand up data models and scheduled refresh; prototyped Salesforce bot & IDR integrations.",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "Meeting → Actions AI Service",
    tagline:
      "REST API that extracts structured action items from meeting transcripts using LLMs",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Pydantic",
      "SQLite",
      "OpenAPI",
    ],
    status: "in-progress",
    links: {
      repo: "https://github.com/khalidtahir/Meeting-Actions-API",
    },
    bullets: [
      "Designed a REST API using FastAPI with clear resource boundaries.",
      "Implemented status-based processing (PENDING → PROCESSING → DONE / FAILED).",
      "Modeled persistent data using SQLAlchemy ORM.",
      "Enforced strict request and response validation with Pydantic schemas.",
      "Integrated LLM-based extraction behind a mockable AI interface.",
      "Built deterministic mock mode to enable testing without API keys or cost.",
      "Designed as an extensible MVP with a clear path toward a hosted SaaS offering.",
    ],
  },
  {
    title: "iOS-Based Centralized Monitoring Hub (Capstone)",
    tagline: "Status: In development.",
    stack: ["iOS", "Real-time", "Multi-sensor", "Data Sync"],
    status: "in-progress",
    bullets: [
      "Real-time signal acquisition from multiple sources (e.g., laptops, Bluetooth wearables).",
      "Accurate time-stamping and synchronization across devices for coherent visualization.",
      "Responsive UI to display simultaneous streams (charts, gauges, alerts).",
      "Modular design for clinical monitoring and multi-sensor research/fitness use cases.",
      "Impact: improves monitoring efficiency and response in high-stakes environments and enables comprehensive physiological research.",
    ],
  },
  {
    title: "ChoTime (Fitness App)",
    tagline:
      "Track workouts, meals, and progress with a clean API and typed data model.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    status: "in-progress",
    // add link here when live 
    bullets: [
      "Domain model for workouts/meals/sessions; daily aggregates & trends.",
      "REST/Server Actions API with auth, input validation, and rate-limits.",
      "Prisma schema with relational entities and future ML hooks (recommendations).",
      "Status: Coming soon (shipping this month).",
    ],
  },

  {
    title: "Song Ranking Project",
    tagline: "Interactive pairwise ranking of songs per album (React + Vite).",
    stack: ["React", "Vite", "JavaScript"],
    status: "in-progress",
    links: {
      repo: "https://github.com/khalidtahir/rankingProject",
      // add live link here if i decide to deploy it
    },
    bullets: [
      "Binary-search style placement: compare a new song against the ranked list to insert at the right position.",
      "Local dataset for Travis Scott albums; album art served from /public/album-covers.",
      "Stateful UI with ranked/unranked queues and a comparison view.",
    ],
  },
  {
    title: "Portfolio Design & Build",
    tagline:
      "This site — dark editor aesthetic, responsive layout, and content components.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    links: {
      repo: "https://github.com/khalidtahir/portfolio",
    },
    bullets: [
      "Custom sections (typewriter hero, cards), clean routing, and lint-clean builds.",
      "Deployed on Vercel with custom domain (khalidtahir.com).",
    ],
  },
];
