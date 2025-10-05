// src/app/page.tsx
import Link from "next/link"
import Image from "next/image"
import Typewriter from "@/components/Typewriter"

const HEADSHOT = "/headshot.jpg"
const SPORTS: { label: string; img: string }[] = [
  { label: "Soccer", img: "/soccer.jpg" },
  { label: "Rugby", img: "/rugby.jpg" },
  { label: "Football", img: "/football.jpg" },
  { label: "Basketball", img: "/basketball.jpg" },
]

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card p-6 ${className}`}>{children}</div>
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)]">
      {/* gradient background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(50%_50%_at_90%_20%,rgba(16,185,129,0.18),transparent_55%)]"></div>

      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[1.2fr_.8fr] items-center">
        <div className="space-y-5">
          <div className="code-accent">// welcome</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            <Typewriter text={"hey, i’m khalid — welcome to my portfolio()"} />
          </h1>
          <p className="text-lg text-white/80">
            I’m a fifth-year Computer Engineering student at Queen’s University, focused on{" "}
            <span className="font-medium text-white">backend systems</span> and{" "}
            <span className="font-medium text-white">applied AI/ML</span>. My goal is to work on
            reliable services and data workflows that actually ship.
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Backend APIs (TypeScript)</Pill>
            <Pill>Prisma + PostgreSQL</Pill>
            <Pill>Auth & Rate Limits</Pill>
            <Pill>Automation & Dashboards</Pill>
            <Pill>Embedded Systems</Pill>
            <Pill>ML Fundamentals</Pill>
          </div>

          <div className="flex gap-3 pt-2">
            <Link href="/projects" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">
              View Projects
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Headshot card  */}
        <Card className="justify-self-center w-full max-w-[380px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src={HEADSHOT}
              alt="Khalid headshot"
              fill
              sizes="380px"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-3 text-center text-sm text-white/70">
            Based in GTA · Open to Backend & ML roles
          </div>
        </Card>
      </section>

      {/* TECH HIGHLIGHTS */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <div className="code-accent mb-2">// backend & data</div>
          <p className="text-sm text-white/80">
            Type-safe APIs, schema design, auth, and rate-limits over PostgreSQL with Prisma.
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">// automation</div>
          <p className="text-sm text-white/80">
            Real workflows: Forms → storage → dashboards (Power Automate, SharePoint, Power BI).
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">// embedded & systems</div>
          <p className="text-sm text-white/80">
            Interest in embedded systems & systems programming alongside backend work.
          </p>
        </Card>
      </section>

      {/* SPORTS / ABOUT TEASER */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Outside of work</h2>
          <Link href="/projects" className="text-sm text-white/70 hover:text-white">See projects →</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPORTS.map((s) => (
            <Card key={s.label}>
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image src={s.img} alt={s.label} fill sizes="300px" className="object-cover" />
              </div>
              <div className="mt-3">
                <div className="font-semibold text-white">{s.label}</div>
                <p className="text-sm text-white/70">In my free time I like to play {s.label.toLowerCase()}.</p>
              </div>
            </Card>
          ))}

          {/* Varsity rugby item */}
          <Card>
            <div className="font-semibold text-white">Queen’s Varsity Rugby Club</div>
            <div className="relative h-40 overflow-hidden rounded-xl">
              <Image src="/rugbyBanquet.jpg" alt="Rugby team banquet" fill sizes="300px" className="object-cover" />
            </div>
            <p className="mt-2 text-sm text-white/70">
              Proud former member of the Queen's Varsity Rugby Club. I spent two years on the team playing 8-man & prop, and enjoyed it very much!
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}
