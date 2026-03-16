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
  status: "live" | "in-progress" | "planned" | "completed"
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
  title: "Wats Next?",
  tagline:
    "Full-stack AI workflow that reconciles meeting transcripts into evolving project action items with human-in-the-loop approval.",
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "Pydantic",
    "PostgreSQL/SQLite",
    "React",
    "OpenAI",
    "Docker",
    "Docker Compose",
    "REST API"
  ],
  status: "completed",
  links: {
    repo: "https://github.com/khalidtahir/Meeting-Actions-API",
  },
  bullets: [
    "Architected a proposal-based AI reconciliation engine that compares new meeting transcripts against persistent project state.",
    "Designed a human-in-the-loop workflow separating AI 'proposal' from 'apply' to prevent direct LLM state mutation.",
    "Built typed REST endpoints in FastAPI for project CRUD, action retrieval, and AI reconciliation workflows.",
    "Implemented structured JSON validation of LLM responses using Pydantic to enforce deterministic data contracts.",
    "Persisted evolving action state using SQLAlchemy ORM with relational modeling.",
    "Developed a React frontend with side-by-side proposal comparison and approval interface.",
    "Containerized the entire system using Docker Compose for single-command full-stack deployment.",
    "Designed the system with clear separation of concerns: HTTP layer, business logic, AI layer, and persistence layer."
  ],
},
  {
    title: "RN Sync – Real-Time Patient Monitoring System (Capstone)",
    tagline: "Serverless architecture for synchronized multi-sensor health data streaming.",
    stack: ["React Native", "AWS Lambda", "API Gateway", "WebSockets", "AWS Cognito", "Supabase"],
    status: "completed",
    bullets: [
      "Built a real-time patient monitoring system that synchronizes multiple physiological data streams into a single mobile interface.",
      "Implemented a serverless backend using AWS Lambda and API Gateway with WebSocket streaming for low-latency data updates.",
      "Developed secure authentication using AWS Cognito to protect patient data and manage device connections.",
      "Designed a React Native mobile app to visualize synchronized sensor streams with responsive charts and real-time updates.",
      "Impact: Demonstrates a scalable architecture for healthcare monitoring systems capable of integrating multiple medical sensors and supporting real-time clinical decision-making.",
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
      "Status: Coming soon (shipping in May).",
    ],
  },

  {
    title: "Interactive Song Ranking Tool",
    tagline: "Pairwise comparison system for building ranked lists efficiently.",
    stack: ["React", "Vite", "JavaScript"],
    status: "completed",
    links: {
      repo: "https://github.com/khalidtahir/rankingProject",
    },
    bullets: [
      "Built an interactive ranking system where users compare songs head-to-head to generate a personalized ordered list.",
      "Implemented a binary-search style insertion algorithm that minimizes comparisons while placing songs in the correct rank.",
      "Developed a dynamic React interface with ranked and unranked queues and a comparison view for fast decision making.",
      "Structured a modular dataset for albums and artwork, enabling easy expansion to other artists or media categories.",
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
