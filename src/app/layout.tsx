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
        <header className="z-40 border-b border-line bg-bg sm:sticky sm:top-0">
          <nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:px-6">
            <Link href="/" className="text-lg font-semibold tracking-tight text-fg">
              {profile.name}
            </Link>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/background">Background</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/resume" emphasis>
                Resume
              </NavLink>
            </div>
          </nav>
        </header>

        <main id="main" className="mx-auto max-w-5xl px-5 pb-8 pt-10 sm:px-6 md:pt-14">
          {children}
        </main>

        <footer className="mx-auto mt-16 max-w-5xl border-t border-line px-5 py-8 text-sm text-fg-3 sm:px-6">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js ·{" "}
          <a className="link-quiet link-muted" href="https://github.com/khalidtahir/portfolio" target="_blank" rel="noopener noreferrer">
            View source<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </footer>
      </body>
    </html>
  )
}
