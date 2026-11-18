import Link from "next/link"
import type { ReactNode } from "react"

/**
 * Mono "a · b · c" technology line. The separator is glued (non-breaking) to the
 * item before it, so a wrapped line never starts with "·".
 */
export function StackLine({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <p className={className}>
      <span className="sr-only">Technologies: </span>
      {items.map((item, i) => (
        <span key={item}>
          {item}
          {i < items.length - 1 && (
            <span aria-hidden="true">{" ·"}</span>
          )}
          {i < items.length - 1 && " "}
        </span>
      ))}
    </p>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "text"
  external?: boolean
  download?: boolean
  className?: string
}

const VARIANT_CLASS = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  text: "text-action",
} as const

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const cls = `${VARIANT_CLASS[variant]} ${className}`.trim()
  const arrow = external && variant === "text" ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      width="11"
      height="11"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow"
    >
      <path d="M3 9L9 3M4 3h5v5" />
    </svg>
  ) : null

  if (external || download || href.endsWith(".pdf") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
        {arrow}
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
