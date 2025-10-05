// src/components/NavLink.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { Route } from "next"; // ✅ Next.js typed routes

type NavLinkProps = {
  // Internal app routes only (e.g. "/projects", "/school")
  href: Route;
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href} // ✅ no casts, no any
      className={`hover:underline underline-offset-4 decoration-white/30 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
