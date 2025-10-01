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
    title: "ChoTime (Fitness App)",
    tagline:
      "Track workouts, meals, and progress with a clean API and typed data model.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    status: "in-progress",
    links: { repo: "#", live: "#" },
    bullets: [
      "Domain model for workouts/meals/sessions; daily aggregates & trends.",
      "REST/Server Actions API with auth, input validation, and rate-limits.",
      "Prisma schema with relational entities and future ML hooks (recommendations).",
    ],
  },
  {
    title: "Operating Plan Automation",
    tagline:
      "Intake → approvals → SharePoint storage → Power BI dashboards (executive views).",
    stack: ["Power Automate", "SharePoint", "Power BI", "Graph API"],
    status: "live",
    bullets: [
      "Cut intake 4–5 months → < 4 weeks with automated routing & alerts.",
      "Visibility for 300+ projects; ownership & SLA tracking.",
    ],
  },
  {
    title: "ML Coursework Mini-Projects",
    tagline:
      "Hands-on ML notebooks: classification, regularization, and model evaluation.",
    stack: ["Python", "NumPy", "scikit-learn", "Pandas"],
    status: "planned",
    bullets: [
      "Reproducible pipelines with standardization, cross-validation, and metrics.",
      "Focus on practical trade-offs (bias/variance, feature engineering).",
    ],
  },
]