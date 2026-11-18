// src/data/site.ts
// Single source of truth for portfolio content.

export const SITE_URL = "https://khalidtahir.com"
export const RESUME_PATH = "/Khalid_Tahir_Resume.pdf"

export const profile = {
  name: "Khalid Tahir",
  role: "Software Engineer Intern",
  company: "Scotiabank",
  summary:
    "Recent Computer Engineering graduate from Queen's University. I build backend services, APIs, and AI-enabled software.",
  email: "khalid.h.tahir@gmail.com",
  github: "https://github.com/khalidtahir",
  linkedin: "https://www.linkedin.com/in/khalidtahir1/",
  siteDescription:
    "Khalid Tahir is a Software Engineer Intern at Scotiabank and a recent Computer Engineering graduate from Queen's University, building backend services, APIs, and AI-enabled software.",
}

export type Experience = {
  role: string
  org: string
  team?: string
  start: string
  end: string
  current?: boolean
  summary?: string
  highlights: string[]
  tools: string[]
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    org: "Scotiabank",
    start: "Sep 2026",
    end: "Present",
    current: true,
    summary:
      "Contribute to AI-focused enterprise software within a collaborative engineering environment. Details are kept high-level for confidentiality.",
    highlights: [
      "Build and validate Python services and REST API components for an internal enterprise platform.",
      "Develop, test, and debug changes using Git, Bitbucket, and enterprise CI/CD workflows.",
      "Take part in code reviews and technical discussions, and apply secure development practices within enterprise risk, security, and governance standards.",
    ],
    tools: ["Python", "REST APIs", "Git", "Bitbucket", "CI/CD", "Testing"],
  },
  {
    role: "Web Developer",
    org: "Queen's University IT Services",
    team: "Information Security Office",
    start: "Sep 2025",
    end: "Jun 2026",
    highlights: [
      "Developed React and TypeScript components with the SharePoint Framework (SPFx) for the university's Cybersecurity Hub.",
      "Implemented role-based navigation and redirects for multiple audiences within access-control requirements (Microsoft Entra ID, Microsoft 365).",
      "Built a risk-assessment quiz whose questions and resources are managed through SharePoint Lists, so non-technical staff can update content without a redeploy.",
      "Defined information architecture and user flows for a site serving students, staff, and faculty.",
    ],
    tools: ["SPFx", "React", "TypeScript", "SharePoint Online", "Microsoft Entra ID"],
  },
  {
    role: "Project Manager Intern",
    org: "Queen's University IT Services",
    start: "May 2024",
    end: "Aug 2025",
    highlights: [
      "Led development of an automated operating-plan intake system across departments, cutting processing time from 2–3 months to under 4 weeks. Recognized by the CIO for the fastest planning cycle in department history.",
      "Built Power BI dashboards covering 300+ projects, with forecasting, overdue alerts, and stakeholder views.",
      "Contributed to Agile delivery cycles with technical teams and stakeholders using Power Automate and Azure DevOps.",
    ],
    tools: ["Power Automate", "SharePoint", "Power BI", "Azure DevOps"],
  },
]

export const education = {
  school: "Queen's University",
  unit: "Smith School of Engineering",
  degree: "Bachelor of Applied Science, Computer Engineering",
  start: "Sep 2021",
  end: "May 2026",
  specialization: "Specialization in Software Engineering, with an option in Artificial Intelligence & Computer Systems",
  courses: [
    "Data Structures & Algorithms",
    "Distributed Systems",
    "Operating Systems",
    "Computer Networks",
    "Databases",
    "Software Engineering",
    "Cryptography & Network Security",
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "C++", "C"] },
  { group: "Frontend", items: ["React", "React Native", "Next.js"] },
  {
    group: "Backend & Data",
    items: ["Node.js", "FastAPI", "REST APIs", "SQLAlchemy", "PostgreSQL", "SQLite", "Spring Boot (familiar)"],
  },
  { group: "Cloud & DevOps", items: ["AWS", "Azure DevOps", "Git", "GitHub", "Bitbucket", "CI/CD"] },
  { group: "Practices", items: ["Agile", "SDLC", "Automated testing", "Secure development", "Code reviews"] },
]

export const activities: { title: string; org: string; dates: string }[] = [
  { title: "Outreach Director", org: "MENAQ (Middle Eastern and North African Students at Queen's)", dates: "Sep 2025 – Apr 2026" },
  { title: "Director of Finance", org: "Queen's Black Tech", dates: "Sep 2025 – Apr 2026" },
  { title: "Technical Engineer", org: "Queen's Hyperloop Design Team", dates: "Sep 2023 – Apr 2024" },
]

export type ProjectStatus = "completed" | "in-progress" | "live"

export type Project = {
  title: string
  period?: string
  tagline: string
  /** One or two sentences: what it does. */
  summary: string
  /** What I personally built. */
  built: string
  /** One meaningful technical challenge or design choice. */
  design: string
  stack: string[]
  status: ProjectStatus
  statusLabel?: string
  featured?: boolean
  /** Optional real visual (screenshot/diagram). When absent, a neutral placeholder is shown. */
  visual?: {
    src: string
    alt: string
    width: number
    height: number
    /** Simplified vertical version shown below 640px so diagram text stays readable. */
    mobile?: { src: string; width: number; height: number }
  }
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: "Wats Next?",
    period: "Sep 2025 – Mar 2026",
    tagline: "Turns meeting transcripts into action items that stay consistent across meetings.",
    summary:
      "A full-stack app that extracts tasks, decisions, and follow-ups from meeting transcripts and reconciles them against a project's existing action items.",
    built:
      "The FastAPI backend (REST endpoints, SQLAlchemy models, Pydantic schemas), the AI reconciliation service, and the React review interface, packaged with Docker Compose.",
    design:
      "The model never writes to project state directly. It returns a schema-validated proposal, a person reviews it against the current open items, and only then does deterministic code apply it by action ID. LLM calls sit behind a mockable interface, allowing the application to run and validate workflows without requiring live model calls.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "Pydantic", "React", "SQLite / PostgreSQL", "Docker Compose"],
    status: "completed",
    featured: true,
    visual: {
      src: "/projects/wats-next-workflow.svg",
      alt: "Wats Next workflow: a meeting transcript and the current open actions go to an AI proposal, which a person reviews against the current state. Approving applies the changes with deterministic code and saves the action items; rejecting with feedback produces a revised proposal. The model proposes, a person approves, code applies.",
      width: 960,
      height: 600,
      mobile: { src: "/projects/wats-next-workflow-mobile.svg", width: 360, height: 420 },
    },
    links: [{ label: "GitHub", href: "https://github.com/khalidtahir/Meeting-Actions-API" }],
  },
  {
    title: "RN Sync",
    period: "Capstone, Sep 2025 – Mar 2026",
    tagline: "Real-time patient monitoring prototype on a serverless AWS backend.",
    summary:
      "A four-person capstone combining a React Native iOS app with a serverless AWS backend. The application sends simulated patient readings over WebSockets, stores them through the backend data layer, and allows authenticated users to view patient information and monitoring data.",
    built:
      "On a four-person capstone team, I designed the PostgreSQL schema and Supabase data layer and contributed to backend and mobile integration.",
    design:
      "The system uses Cognito-authenticated WebSocket connections, thin Lambda handlers and a separate service layer, with automated testing and deployment through GitHub Actions.",
    stack: ["React Native", "Expo", "Node.js", "AWS Lambda", "API Gateway (WebSocket)", "Cognito", "Supabase", "Jest", "GitHub Actions"],
    status: "completed",
    featured: true,
    visual: {
      src: "/projects/rn-sync-architecture.svg",
      alt: "RN Sync architecture: a simulated sensor client connects through an API Gateway WebSocket API, authorized by a Lambda authorizer that checks a Cognito token at connection time, to a Lambda handler and service layer that store readings in Supabase PostgreSQL. The React Native app signs in with Cognito and reads data through an HTTP API, Lambda API handler and service layer. GitHub Actions runs tests and deploys the Lambdas.",
      width: 960,
      height: 600,
      mobile: { src: "/projects/rn-sync-architecture-mobile.svg", width: 360, height: 512 },
    },
    links: [
      { label: "App Store", href: "https://apps.apple.com/ca/app/rn-sync/id6759464120" },
      { label: "GitHub (backend)", href: "https://github.com/khalidtahir/RN-Sync" },
    ],
  },
  {
    title: "ChoTime",
    tagline: "A local-first iOS app for tracking workouts, nutrition, and goals.",
    summary:
      "A mobile fitness tracker that keeps all data on-device in SQLite, protected by passcode authentication.",
    built: "The full app: UI, local data layer, schema migrations, test suite, and iOS build and release pipeline.",
    design:
      "The schema evolves through additive migrations, backed by migration-safety tests so updates cannot corrupt existing user data. Builds ship to TestFlight through EAS Build.",
    stack: ["React Native", "TypeScript", "Expo", "SQLite", "Vitest", "EAS Build"],
    status: "in-progress",
    statusLabel: "In progress · TestFlight",
    featured: true,
  },
  {
    title: "Interactive Song Ranking Tool",
    period: "2025",
    tagline: "Ranks a list of songs through head-to-head comparisons.",
    summary:
      "Users compare two songs at a time and the tool builds a personalized ranking.",
    built: "The React interface, ranked and unranked queues, and an album and artwork dataset that is easy to extend.",
    design:
      "Binary-search insertion places each new song in the ranked list with as few comparisons as possible.",
    stack: ["React", "Vite", "JavaScript"],
    status: "completed",
    links: [{ label: "GitHub", href: "https://github.com/khalidtahir/rankingProject" }],
  },
  {
    title: "This Portfolio",
    tagline: "Content-driven site built with Next.js and Tailwind.",
    summary: "A small static-first site where all content lives in one typed data file.",
    built: "Design, components, SEO metadata, and deployment on Vercel.",
    design: "Pages render from typed data in a single file, so updating experience or projects is a one-file change.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "live",
    links: [{ label: "GitHub", href: "https://github.com/khalidtahir/portfolio" }],
  },
]

export const outsideOfWork: { title: string; text: string; image: string; alt: string }[] = [
  {
    title: "Soccer",
    text: "I play soccer with friends and in competitive leagues.",
    image: "/soccer.jpg",
    alt: "Khalid playing soccer",
  },
  {
    title: "Queen's Varsity Rugby Club",
    text: "Two seasons with the varsity club, playing number 8 and prop.",
    image: "/rugby.jpg",
    alt: "Khalid with teammates at a Queen's rugby game",
  },
  {
    title: "Engineering Society Year Exec",
    text: "Publicity Manager on the Class of 2025 Year Executive Team.",
    image: "/year-exec.jpg",
    alt: "The Queen's Engineering Class of 2025 year executive team",
  },
]
