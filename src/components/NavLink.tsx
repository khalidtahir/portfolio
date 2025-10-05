// src/components/NavLink.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;          // simple relative path
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href as any} // cast to any to avoid RouteImpl typing error
      className={`hover:underline underline-offset-4 decoration-white/30 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
