// src/app/page.tsx
import Link from "next/link"

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-6">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}

export default function Home() {
  return (
    <section className="grid gap-10">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Backend-first builder exploring practical ML
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m Khalid Tahir. I design clean APIs and data models—then add ML where it helps.
          Currently building <strong>ChoTime</strong>, a fitness app for workouts, meals, and progress.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/projects" className="px-5 py-3 rounded-xl bg-black text-white">
            View Projects
          </Link>
          <Link href="/contact" className="px-5 py-3 rounded-xl border">
            Contact
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="Backend & Data" desc="Type-safe APIs, Prisma + PostgreSQL, auth, rate limits." />
        <Feature title="ML Pragmatism" desc="Evaluation-first; add models when they move the needle." />
        <Feature title="Automation" desc="Pipelines → storage → dashboards that people actually use." />
      </div>
    </section>
  )
}
