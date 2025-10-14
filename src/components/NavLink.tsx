// src/components/NavLink.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string; // still allow plain strings for flexibility
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href as any} // ✅ cast to any to bypass strict Next.js route typing
      className={`hover:underline underline-offset-4 decoration-white/30 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
