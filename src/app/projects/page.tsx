import Section from "@/components/Section"
import { projects } from "@/data/site"

export default function Projects() {
  return (
    <div className="prose max-w-none">
      <Section title="Projects">
        {projects.map((project) => (
          <div key={project.title} className="mb-8">
            <h3>{project.title}</h3>
            <p className="text-gray-600">{project.tagline}</p>
            <div className="flex gap-2 mb-2">
              {project.stack.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-gray-100 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.bullets && (
              <ul>
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {project.links && (
              <div className="flex gap-4">
                {Object.entries(project.links).map(([type, url]) => (
                  <a
                    key={type}
                    href={url}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {type}
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