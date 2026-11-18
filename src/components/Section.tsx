import type { ReactNode } from "react"

export default function Section({
  title,
  id,
  tight = false,
  children,
}: {
  title: string
  id?: string
  /** Smaller top margin, for the first section directly under a page title. */
  tight?: boolean
  children: ReactNode
}) {
  const headingId = id ? `${id}-heading` : undefined
  return (
    <section id={id} aria-labelledby={headingId} className={tight ? "mt-10 md:mt-12" : "mt-20 md:mt-24"}>
      <h2 id={headingId} className="mb-8 text-2xl font-semibold tracking-tight text-fg md:text-[28px]">
        {title}
      </h2>
      {children}
    </section>
  )
}
