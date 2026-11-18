import type { Metadata } from "next"
import { ButtonLink } from "@/components/ui"
import { RESUME_PATH, profile } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
  description: "Get in touch with Khalid Tahir by email, LinkedIn, or GitHub.",
}

export default function Contact() {
  const items = [
    { label: "Email", text: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: "LinkedIn", text: "linkedin.com/in/khalidtahir1", href: profile.linkedin, external: true },
    { label: "GitHub", text: "github.com/khalidtahir", href: profile.github, external: true },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-[40px] font-bold leading-tight tracking-[-0.03em] text-fg">Contact</h1>
      <p className="mt-4 text-lg text-fg-2">
        Happy to talk about software engineering roles, collaboration, or my projects. Email is the fastest way to reach me.
      </p>

      <dl className="card mt-10 divide-y divide-line">
        {items.map((i) => (
          <div key={i.label} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4">
            <dt className="font-semibold text-fg">{i.label}</dt>
            <dd>
              <a
                className="link-quiet"
                href={i.href}
                {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {i.text}
                {i.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <ButtonLink href={RESUME_PATH} variant="primary" download>
          Download resume
        </ButtonLink>
      </div>
    </div>
  )
}
