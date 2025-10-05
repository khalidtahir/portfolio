// src/components/NavLink.tsx
"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type NavLinkProps = LinkProps<Record<string, any>> & {
  children: ReactNode;
  className?: string;
};

/**
 * NavLink — a styled wrapper around Next.js Link
 */
export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:underline underline-offset-4 decoration-white/30 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
