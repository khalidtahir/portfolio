import type { ReactNode } from "react"
import { StackLine } from "@/components/ui"

/** Flat, editorial entry: dates on the left, content on the right. */
export default function EntryRow({
  title,
  subtitle,
  dates,
  current = false,
  description,
  highlights,
  tools,
  children,
}: {
  title: string
  subtitle: string
  dates: string
  current?: boolean
  description?: string
  highlights?: string[]
  tools?: string[]
  children?: ReactNode
}) {
  return (
    <article className="grid gap-3 border-t border-line py-8 md:grid-cols-[170px_1fr] md:gap-8">
      <div className="font-mono text-[13px] leading-6 text-fg-3">
        <p>{dates}</p>
        {current && (
          <p className="mt-1 inline-flex items-center gap-2 text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Current
          </p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold tracking-tight text-fg">{title}</h3>
        <p className="mt-0.5 text-[15px] text-fg-2">{subtitle}</p>

        {description && <p className="mt-4 text-body">{description}</p>}

        {highlights && highlights.length > 0 && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-body marker:text-fg-3">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {tools && tools.length > 0 && (
          <StackLine items={tools} className="mt-5 font-mono text-[13px] leading-6 text-fg-2" />
        )}
        {children}
      </div>
    </article>
  )
}
