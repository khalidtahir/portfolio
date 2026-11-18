import type { ReactNode } from "react"

export default function Section({
  title,
  id,
  children,
}: {
  title: string
  id?: string
  children: ReactNode
}) {
  const headingId = id ? `${id}-heading` : undefined
  return (
    <section id={id} aria-labelledby={headingId} className="mb-12">
      <h2 id={headingId} className="mb-5 text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="grid gap-4">{children}</div>
    </section>
  )
}
