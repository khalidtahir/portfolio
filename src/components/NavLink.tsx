"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

type NavLinkProps = {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const active = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded px-1 py-1 underline-offset-8 decoration-2 hover:underline ${
        active ? "text-white underline decoration-emerald-400" : "text-white/75 decoration-white/30 hover:text-white"
      }`}
    >
      {children}
    </Link>
  )
}
