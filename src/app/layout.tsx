import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/school" className="hover:underline">School</Link>
              <Link href="/experience" className="hover:underline">Experience</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/resume" className="hover:underline">Resume</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
