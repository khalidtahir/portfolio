import type { Project } from "@/data/site"
import { ButtonLink, Pill } from "@/components/ui"

const STATUS_LABEL: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  live: "Live",
}

export default function ProjectCard({
  project,
  headingLevel = 3,
  compact = false,
}: {
  project: Project
  headingLevel?: 2 | 3
  compact?: boolean
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3"
  return (
    <article className="card flex h-full flex-col p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <Heading className="text-xl font-semibold text-white">{project.title}</Heading>
        <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-white/75">
          {project.statusLabel ?? STATUS_LABEL[project.status]}
        </span>
      </div>
      {project.period && <p className="mt-0.5 text-xs text-white/65">{project.period}</p>}
      <p className="mt-2 font-medium text-white/90">{project.tagline}</p>

      {!compact && (
        <dl className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
          <div>
            <dt className="font-semibold text-white">What it does</dt>
            <dd>{project.summary}</dd>
          </div>
          <div>
            <dt className="font-semibold text-white">What I built</dt>
            <dd>{project.built}</dd>
          </div>
          <div>
            <dt className="font-semibold text-white">Design note</dt>
            <dd>{project.design}</dd>
          </div>
        </dl>
      )}

      <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.links.map((l) => (
            <ButtonLink key={l.href} href={l.href} external>
              {l.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </article>
  )
}
