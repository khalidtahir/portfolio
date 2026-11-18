import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Section from "@/components/Section"
import FeaturedProject from "@/components/FeaturedProject"
import { ButtonLink, StackLine } from "@/components/ui"
import { RESUME_PATH, outsideOfWork, profile, projects, skills } from "@/data/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <div>
      {/* HERO */}
      <section aria-labelledby="hero-heading" className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-16">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-fg md:text-[64px]"
          >
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-fg md:text-2xl">
            {profile.role} at {profile.company}
          </p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-fg-2 md:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <ButtonLink href={RESUME_PATH} variant="primary">
              Resume (PDF)
            </ButtonLink>
            <ButtonLink href={profile.github} variant="text" external>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} variant="text" external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="text">
              Email
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-[220px] overflow-hidden rounded-xl border border-line md:w-[260px]">
          <Image src="/headshot.jpg" alt="Portrait of Khalid Tahir" fill sizes="260px" className="object-cover" priority />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <Section title="Featured projects" id="featured">
        <div className="space-y-16 md:space-y-20">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} project={p} index={i} detailed={false} />
          ))}
        </div>
        <p className="mt-12">
          <Link href="/projects" className="text-action">
            View all projects with technical details
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </Section>

      {/* SKILLS */}
      <Section title="Technical skills" id="skills">
        <dl className="space-y-4">
          {skills.map((g) => (
            <div key={g.group} className="grid gap-1 md:grid-cols-[170px_1fr] md:gap-8">
              <dt className="text-[15px] font-medium text-fg">{g.group}</dt>
              <dd>
                <StackLine items={g.items} className="font-mono text-sm leading-7 text-fg-2" />
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* OUTSIDE OF WORK */}
      <section id="outside" aria-labelledby="outside-heading" className="mt-20 border-t border-line pt-8 md:mt-24">
        <h2 id="outside-heading" className="mb-4 text-lg font-semibold text-fg-2">
          Outside of work
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {outsideOfWork.map((o) => (
            <li key={o.title} className="flex items-center gap-3">
              <Image src={o.image} alt={o.alt} width={64} height={64} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
              <div>
                <h3 className="text-sm font-semibold text-fg">{o.title}</h3>
                <p className="text-xs text-fg-2">{o.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
