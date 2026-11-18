import type { ReactNode } from "react"
import { Pill } from "@/components/ui"

export default function TimelineCard({
  title,
  subtitle,
  date,
  current = false,
  description,
  highlights,
  tools,
  children,
}: {
  title: string
  subtitle: string
  date: string
  current?: boolean
  description?: string
  highlights?: string[]
  tools?: string[]
  children?: ReactNode
}) {
  return (
    <article className={`relative border-l pb-8 pl-6 sm:pl-8 ${current ? "border-emerald-400/50" : "border-white/15"}`}>
      <span
        aria-hidden="true"
        className={`absolute left-[-6px] top-2 h-3 w-3 rounded-full ${
          current ? "bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" : "bg-white/40"
        }`}
      />
      <div className="card p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/70">
            {current && <span className="mr-2 rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs font-medium text-emerald-300">Current</span>}
            {date}
          </p>
        </div>
        <p className="mt-1 text-sm text-white/75">{subtitle}</p>

        {description && <p className="mt-3 leading-relaxed text-white/80">{description}</p>}

        {highlights && highlights.length > 0 && (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-white/80">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {tools && tools.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Tools and technologies">
            {tools.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        )}
        {children}
      </div>
    </article>
  )
}
