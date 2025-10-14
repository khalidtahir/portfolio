// src/app/projects/page.tsx
import Section from "@/components/Section";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <div className="max-w-none space-y-8">
      <Section title="Projects">
        {projects.map((project) => (
          <div
            key={project.title}
            className="mb-8 rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>

            {/* tagline */}
            <p className="text-white/70 mt-1">{project.tagline}</p>

            {/* tech stack */}
            {project.stack?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2 mt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="pill" 
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* bullets */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="list-disc list-inside text-white/85 space-y-1">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}

            {/* links (external only, to avoid Next.js 'no-html-link-for-pages') */}
            {project.links && (
              <div className="mt-3 flex gap-4 text-sm">
                {Object.entries(project.links)
                  .filter(([, url]) => typeof url === "string" && /^https?:\/\//.test(url!))
                  .map(([type, url]) => (
                    <a
                      key={type}
                      href={url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white/80 hover:text-white"
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
  );
}
