import type { Metadata } from "next"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/site"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects by Khalid Tahir: an AI meeting-actions app, a serverless real-time patient monitoring system, and a local-first iOS fitness app.",
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-white">Projects</h1>
      <p className="mb-8 max-w-2xl text-white/80">
        What each project does, what I built, and one design decision worth calling out.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.title} project={p} headingLevel={2} />
        ))}
      </div>

      <h2 className="mb-5 mt-12 text-2xl font-semibold text-white">Other projects</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {other.map((p) => (
          <ProjectCard key={p.title} project={p} headingLevel={3} />
        ))}
      </div>
    </div>
  )
}
