import Section from "@/components/Section"
import { experiences } from "@/data/site"

export default function Experience() {
  return (
    <div className="prose max-w-none">
      <Section title="Experience">
        {experiences.map((exp) => (
          <div key={exp.role} className="mb-8">
            <h3>{exp.role}</h3>
            <p className="text-gray-600">{exp.company} | {exp.start} - {exp.end}</p>
            <ul>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            {exp.links && (
              <div className="flex gap-4">
                {exp.links.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </Section>
    </div>
  )
}