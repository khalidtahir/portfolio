import type { Metadata } from "next"
import FeaturedProject, { CompactProject } from "@/components/FeaturedProject"
import { projects } from "@/data/site"

export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
  description:
    "Selected software projects by Khalid Tahir: an AI meeting-actions app, a serverless real-time patient monitoring prototype, and a local-first iOS fitness app.",
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <div>
      <h1 className="text-[40px] font-bold leading-tight tracking-[-0.03em] text-fg">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg text-fg-2">
        What each project does, what I built, and one design decision worth calling out.
      </p>

      <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
        {featured.map((p, i) => (
          <FeaturedProject key={p.title} project={p} index={i} headingLevel={2} />
        ))}
      </div>

      <section aria-labelledby="more-heading" className="mt-24 md:mt-32">
        <h2 id="more-heading" className="mb-6 text-xl font-semibold text-fg-2">
          More projects
        </h2>
        <div className="-mt-px">
          {other.map((p) => (
            <CompactProject key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
