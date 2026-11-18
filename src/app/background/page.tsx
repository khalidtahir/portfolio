import type { Metadata } from "next"
import Section from "@/components/Section"
import EntryRow from "@/components/EntryRow"
import { activities, education, experiences } from "@/data/site"

export const metadata: Metadata = {
  title: "Background",
  alternates: { canonical: "/background" },
  description:
    "Experience and education: Software Engineer Intern at Scotiabank, Queen's University IT Services roles, and a BASc in Computer Engineering from Queen's.",
}

export default function BackgroundPage() {
  return (
    <div>
      <h1 className="text-[40px] font-bold leading-tight tracking-[-0.03em] text-fg">Background</h1>

      <Section title="Experience" id="experience" tight>
        <div className="-mt-px">
          {experiences.map((e) => (
            <EntryRow
              key={`${e.org}-${e.role}`}
              title={e.role}
              subtitle={e.team ? `${e.org} · ${e.team}` : e.org}
              dates={`${e.start} – ${e.end}`}
              current={e.current}
              description={e.summary}
              highlights={e.highlights}
              tools={e.tools}
            />
          ))}
        </div>
      </Section>

      <Section title="Education" id="education">
        <EntryRow
          title={education.school}
          subtitle={`${education.unit} · ${education.degree}`}
          dates={`${education.start} – ${education.end}`}
          description={education.specialization}
          highlights={[`Relevant coursework: ${education.courses.join(", ")}.`]}
        />
      </Section>

      <section aria-labelledby="activities-heading" className="mt-20 border-t border-line pt-8 md:mt-24">
        <h2 id="activities-heading" className="mb-3 text-lg font-semibold text-fg-2">
          Leadership & activities
        </h2>
        <ul className="space-y-1.5 text-sm">
          {activities.map((a) => (
            <li key={a.org} className="text-fg-2">
              <span className="font-medium text-fg">{a.title}</span>, {a.org} · {a.dates}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
