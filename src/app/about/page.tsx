import Section from "@/components/Section"
import { about } from "@/data/site"

export default function About() {
  return (
    <div className="prose max-w-none">
      <Section title="About Me">
        <p>{about.blurb}</p>

        <h3>Sports I like</h3>
        <ul>
          {about.sports.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h3>Interests</h3>
        <ul>
          {about.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </Section>
    </div>
  )
}