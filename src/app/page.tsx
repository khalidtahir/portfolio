import Image from "next/image"
import Link from "next/link"
import Section from "@/components/Section"
import ProjectCard from "@/components/ProjectCard"
import { ButtonLink, Card, Pill } from "@/components/ui"
import { RESUME_PATH, experiences, outsideOfWork, profile, projects, skills } from "@/data/site"

export default function Home() {
  const current = experiences.find((e) => e.current)
  const featured = projects.filter((p) => p.featured)

  return (
    <div>
      {/* HERO */}
      <section aria-labelledby="hero-heading" className="grid items-center gap-8 pb-12 md:grid-cols-[1.2fr_.8fr]">
        <div className="max-w-2xl space-y-5">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            {profile.name}
          </h1>
          <p className="text-xl font-medium text-white">
            {profile.role} at {profile.company}
          </p>
          <p className="text-lg leading-relaxed text-white/80">{profile.summary}</p>

          <ul className="flex flex-wrap gap-2" aria-label="Core technologies">
            {profile.focusTags.map((t) => (
              <li key={t}>
                <Pill>{t}</Pill>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href={RESUME_PATH} variant="primary">
              Resume (PDF)
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`}>Email</ButtonLink>
          </div>
        </div>

        <Card className="w-full max-w-[340px] justify-self-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image src="/headshot.jpg" alt="Portrait of Khalid Tahir" fill sizes="340px" className="object-cover" priority />
          </div>
          <p className="mt-3 text-center text-sm text-white/75">
            {profile.location}
          </p>
        </Card>
      </section>

      {/* CURRENT ROLE */}
      {current && (
        <Section title="Currently" id="current">
          <Card>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">
                {current.role}, {current.org}
              </h3>
              <p className="text-sm text-white/70">
                {current.start} – {current.end}
              </p>
            </div>
            <p className="mt-2 text-white/80">{current.summary}</p>
            <p className="mt-3 text-sm">
              <Link href="/background" className="link">
                See full experience
              </Link>
            </p>
          </Card>
        </Section>
      )}

      {/* FEATURED PROJECTS */}
      <Section title="Featured projects" id="featured">
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} compact />
          ))}
        </div>
        <p>
          <Link href="/projects" className="link">
            View all projects with technical details
          </Link>
        </p>
      </Section>

      {/* SKILLS */}
      <Section title="Technical skills" id="skills">
        <div className="card grid gap-5 p-6 sm:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="code-accent mb-2">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i}>
                    <Pill>{i}</Pill>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTSIDE OF WORK */}
      <section id="outside" aria-labelledby="outside-heading" className="mt-4 border-t border-white/10 pt-8">
        <h2 id="outside-heading" className="mb-4 text-lg font-semibold text-white/90">
          Outside of work
        </h2>
        <ul className="grid gap-4 sm:grid-cols-3">
          {outsideOfWork.map((o) => (
            <li key={o.title} className="flex items-center gap-3">
              <Image src={o.image} alt={o.alt} width={64} height={64} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
              <div>
                <h3 className="text-sm font-semibold text-white">{o.title}</h3>
                <p className="text-xs text-white/75">{o.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
