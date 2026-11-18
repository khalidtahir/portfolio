import Image from "next/image"
import type { Project } from "@/data/site"
import { ButtonLink, StackLine } from "@/components/ui"

const STATUS_LABEL: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  live: "Live",
}

/** Framed diagram or screenshot. Projects without a visual use the text-first layout instead. */
function ProjectVisual({ visual }: { visual: NonNullable<Project["visual"]> }) {
  const { mobile } = visual
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface">
      <Image
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        sizes="(min-width: 1024px) 560px, (min-width: 640px) 640px, 100vw"
        className={`h-auto w-full ${mobile ? "hidden sm:block" : ""}`}
      />
      {mobile && (
        <Image
          src={mobile.src}
          alt={visual.alt}
          width={mobile.width}
          height={mobile.height}
          sizes="100vw"
          className="block h-auto w-full sm:hidden"
        />
      )}
    </div>
  )
}

function Heading({ project, level }: { project: Project; level: 2 | 3 }) {
  const Tag = `h${level}` as "h2" | "h3"
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <Tag className="text-2xl font-semibold tracking-tight text-fg md:text-[28px] md:leading-tight">
          {project.title}
        </Tag>
        <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-fg-2">
          {project.statusLabel ?? STATUS_LABEL[project.status]}
        </span>
      </div>
      {project.period && <p className="mt-1 font-mono text-[13px] text-fg-3">{project.period}</p>}
      <p className="mt-4 text-lg leading-snug text-fg">{project.tagline}</p>
    </>
  )
}

function Details({ project, detailed }: { project: Project; detailed: boolean }) {
  return (
    <>
      {detailed && (
        <div className="space-y-3">
          <p className="text-body">{project.summary}</p>
          <p className="text-body">
            <span className="font-semibold text-fg">Built: </span>
            {project.built}
          </p>
          <p className="text-body">
            <span className="font-semibold text-fg">Design: </span>
            {project.design}
          </p>
        </div>
      )}
      <StackLine
        items={project.stack}
        className={`font-mono text-[13px] leading-6 text-fg-2 ${detailed ? "mt-5" : ""}`}
      />
      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
          {project.links.map((l) => (
            <ButtonLink key={l.href} href={l.href} variant="text" external>
              {l.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </>
  )
}

export default function FeaturedProject({
  project,
  index,
  headingLevel = 3,
  detailed = true,
}: {
  project: Project
  index: number
  headingLevel?: 2 | 3
  /** Detailed rows add the summary, "Built" and "Design" copy (Projects page). */
  detailed?: boolean
}) {
  // Text-first row: used until a real visual exists, so no empty frame is shown.
  if (!project.visual) {
    return (
      <article className="grid max-w-[640px] gap-y-6 lg:max-w-none lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-5">
          <Heading project={project} level={headingLevel} />
        </div>
        <div className="lg:col-span-7 lg:pt-1">
          <Details project={project} detailed={detailed} />
        </div>
      </article>
    )
  }

  const reversed = index % 2 === 1

  // Desktop: 12-col grid, visual 7 / text 5, alternating sides. Text blocks are
  // vertically centred against the visual via the 4-row template.
  const visualPos = reversed ? "lg:col-start-6 lg:col-span-7" : "lg:col-start-1 lg:col-span-7"
  const textPos = reversed ? "lg:col-start-1 lg:col-span-5" : "lg:col-start-8 lg:col-span-5"

  return (
    <article className="grid max-w-[640px] gap-y-6 lg:max-w-none lg:grid-cols-12 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12 lg:gap-y-0">
      {/* 1. Title + outcome */}
      <div className={`${textPos} lg:row-start-2`}>
        <Heading project={project} level={headingLevel} />
      </div>

      {/* 2. Visual (after title/outcome on small screens) */}
      <div className={`${visualPos} lg:row-span-4 lg:row-start-1`}>
        <ProjectVisual visual={project.visual} />
      </div>

      {/* 3. Technical detail */}
      <div className={`${textPos} lg:row-start-3 lg:mt-5`}>
        <Details project={project} detailed={detailed} />
      </div>
    </article>
  )
}

/** Quiet one-row treatment for minor projects (no visual). */
export function CompactProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-2 border-t border-line py-6 md:grid-cols-[1fr_auto] md:gap-x-8">
      <div>
        <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
        <p className="mt-1 text-fg-2">{project.tagline}</p>
        <StackLine items={project.stack} className="mt-3 font-mono text-[13px] leading-6 text-fg-3" />
      </div>
      {project.links && project.links.length > 0 && (
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 md:justify-end md:pt-1">
          {project.links.map((l) => (
            <ButtonLink key={l.href} href={l.href} variant="text" external>
              {l.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </article>
  )
}
