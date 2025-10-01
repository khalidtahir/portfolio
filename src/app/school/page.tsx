import Section from "@/components/Section"
import { schools } from "@/data/site"

export default function School() {
  return (
    <div className="prose max-w-none">
      <Section title="Education">
        {schools.map((school) => (
          <div key={school.school} className="mb-8">
            <h3>{school.school}</h3>
            <p className="text-gray-600">
              {school.program}
              {school.degree && ` - ${school.degree}`}
              <br />
              {school.start} - {school.end}
            </p>
            {school.highlights && (
              <ul>
                {school.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>
    </div>
  )
}