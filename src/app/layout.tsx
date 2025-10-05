import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khalid Tahir | Portfolio",
  description: "Backend-focused builder exploring practical ML",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/10 text-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <Link href="/" className="font-bold text-lg">Khalid Tahir</Link>
            <div className="flex gap-5 text-sm">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/school">School</NavLink>
              <NavLink href="/experience">Experience</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl p-4">{children}</main>

        <footer className="mx-auto max-w-5xl p-4 text-xs text-white/60">
          © {new Date().getFullYear()} Khalid Tahir · Built with Next.js ·{" "}
          <a
            className="underline"
            href="https://github.com/khalidtahir/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View source
          </a>
        </footer>
      </body>
    </html>
  );
}
