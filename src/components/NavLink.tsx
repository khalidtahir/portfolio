"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

type NavLinkProps = {
  href: string
  children: ReactNode
  /** Slightly more prominent treatment (used for Resume). */
  emphasis?: boolean
}

export default function NavLink({ href, children, emphasis = false }: NavLinkProps) {
  const pathname = usePathname()
  const active = pathname === href || pathname.startsWith(`${href}/`)

  const base = "text-[15px] transition-colors"
  const plain = active
    ? "text-fg underline decoration-accent decoration-2 underline-offset-[10px]"
    : "text-fg-2 hover:text-fg"
  const outlined = `rounded-lg border px-3 py-1 ${
    active ? "border-accent text-accent" : "border-line text-fg hover:border-accent hover:text-accent"
  }`

  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={`${base} ${emphasis ? outlined : plain}`}>
      {children}
    </Link>
  )
}
