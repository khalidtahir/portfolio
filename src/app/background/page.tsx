import type { Metadata } from "next"
import Section from "@/components/Section"
import TimelineCard from "@/components/TimelineCard"
import { activities, education, experiences } from "@/data/site"

export const metadata: Metadata = {
  title: "Background",
  description:
    "Experience and education: Software Engineer Intern at Scotiabank, Queen's University IT Services roles, and a BASc in Computer Engineering from Queen's.",
}

export default function BackgroundPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">Background</h1>

      <Section title="Experience" id="experience">
        {experiences.map((e) => (
          <TimelineCard
            key={`${e.org}-${e.role}`}
            title={e.role}
            subtitle={e.team ? `${e.org} · ${e.team}` : e.org}
            date={`${e.start} – ${e.end}`}
            current={e.current}
            description={e.summary}
            highlights={e.highlights}
            tools={e.tools}
          />
        ))}
      </Section>

      <Section title="Education" id="education">
        <TimelineCard
          title={education.school}
          subtitle={`${education.unit} · ${education.degree}`}
          date={`${education.start} – ${education.end}`}
          description={education.specialization}
          highlights={[`Relevant coursework: ${education.courses.join(", ")}.`]}
        />
      </Section>

      <section aria-labelledby="activities-heading" className="border-t border-white/10 pt-8">
        <h2 id="activities-heading" className="mb-3 text-lg font-semibold text-white/90">
          Leadership & activities
        </h2>
        <ul className="space-y-1.5 text-sm">
          {activities.map((a) => (
            <li key={a.org} className="text-white/75">
              <span className="font-medium text-white">{a.title}</span>, {a.org} · {a.dates}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
