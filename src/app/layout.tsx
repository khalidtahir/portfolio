import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import NavLink from "@/components/NavLink"
import { SITE_URL, profile } from "@/data/site"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

const title = `${profile.name} | Software Engineer`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: profile.name,
    title,
    description: profile.siteDescription,
    images: [{ url: "/headshot.jpg", alt: profile.name }],
  },
  twitter: { card: "summary", title, description: profile.siteDescription, images: ["/headshot.jpg"] },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0e14]/80 text-white backdrop-blur">
          <nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" className="text-lg font-bold">
              {profile.name}
            </Link>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/background">Background</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </nav>
        </header>

        <main id="main" className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
          {children}
        </main>

        <footer className="mx-auto max-w-5xl px-4 py-8 text-xs text-white/70">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js ·{" "}
          <a className="link" href="https://github.com/khalidtahir/portfolio" target="_blank" rel="noopener noreferrer">
            View source<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </footer>
      </body>
    </html>
  )
}
