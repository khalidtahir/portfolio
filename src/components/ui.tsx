import Link from "next/link"
import type { ReactNode } from "react"

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card p-6 ${className}`}>{children}</div>
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="pill">{children}</span>
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
  external?: boolean
  download?: boolean
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`
  if (external || download || href.endsWith(".pdf") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
