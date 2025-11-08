// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const HEADSHOT = "/headshot.jpg";

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(50%_50%_at_90%_20%,rgba(16,185,129,0.18),transparent_55%)]"></div>

      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[1.1fr_.9fr] items-center">
        <div className="space-y-5 max-w-2xl">
          <div className="code-accent">{`// welcome`}</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            <Typewriter text={"hey, i’m khalid — welcome to my portfolio()"} />
          </h1>
          <p className="text-lg text-white/80">
            I&#39;m a fifth-year Computer Engineering student at Queen&#39;s University, focused on{" "}
            <span className="font-medium text-white">backend systems</span> and{" "}
            <span className="font-medium text-white">applied AI/ML</span>. My true passion is building technology that has real-world impact — reliable systems that empower people and make processes genuinely better.
          </p>

          <div className="flex flex-wrap gap-2">
            <Pill>Backend APIs (TypeScript)</Pill>
            <Pill>Prisma + PostgreSQL</Pill>
            <Pill>Auth &amp; Rate Limits</Pill>
            <Pill>Automation &amp; Dashboards</Pill>
            <Pill>Embedded Systems</Pill>
            <Pill>ML Fundamentals</Pill>
          </div>

          <div className="flex gap-3 pt-2">
            <Link
              href="/projects"
              className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition shadow"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Headshot */}
        <Card className="justify-self-center w-full max-w-[380px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
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
            Based in GTA · Open to Backend &amp; ML roles
          </div>
        </Card>
      </section>

      {/* TECH HIGHLIGHTS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Technical Focus</h2>
        <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="code-accent mb-2">{`// backend systems & data`}</div>
          <p className="text-sm text-white/80">
            Engineer scalable, type-safe APIs and data models optimized for reliability and performance. Experience with Prisma ORM, PostgreSQL, and API design patterns (auth flows, rate-limits, caching). Strong understanding of systems architecture and asynchronous execution for responsive backend services.
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">{`// applied AI & data processing`}</div>
          <p className="text-sm text-white/80">
            Leverage machine learning fundamentals and data pipelines to improve decision-making in applications. Work with Python + scikit-learn for model prototyping and TypeScript/Next.js for real-time data integration.
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">{`// embedded & systems programming`}</div>
          <p className="text-sm text-white/80">
            Apply hardware-aware programming and resource optimization techniques for low-latency control systems. Blend C/C++ fundamentals with modern data-driven software engineering principles.
          </p>
        </Card>
        </div>
      </section>

      {/* OUTSIDE OF WORK */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Outside of work</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Soccer */}
          <Card>
            <a href="/soccer.jpg" target="_blank" rel="noopener noreferrer">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image src="/soccer.jpg" alt="Soccer" fill sizes="300px" className="object-cover hover:scale-105 transition-transform" />
              </div>
            </a>
            <div className="mt-3">
              <div className="font-semibold text-white">Soccer</div>
              <p className="text-sm text-white/70">
                In my free time I love playing soccer with friends and in competitive leagues.
              </p>
            </div>
          </Card>

          {/* Rugby Game */}
          <Card>
            <a href="/rugby.jpg" target="_blank" rel="noopener noreferrer">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image src="/rugby.jpg" alt="Rugby" fill sizes="300px" className="object-cover hover:scale-105 transition-transform" />
              </div>
            </a>
            <div className="mt-3">
              <div className="font-semibold text-white">Queen&#39;s Varsity Rugby Club</div>
              <p className="text-sm text-white/70">
                Proud former member of the rugby club at Queen&#39;s. I spent two years on the team playing 8-man &amp; prop, and had a blast doing so!
              </p>
            </div>
          </Card>

          {/* Year Exec */}
          <Card>
            <a href="/year-exec.jpg" target="_blank" rel="noopener noreferrer">
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image src="/year-exec.jpg" alt="Queen's Engineering Exec" fill sizes="300px" className="object-cover hover:scale-105 transition-transform" />
              </div>
            </a>
            <div className="mt-3">
              <div className="font-semibold text-white">Queen&#39;s Engineering Society Exec</div>
              <p className="text-sm text-white/70">
                I am also very passionate about community and I served as Publicity Manager for my Class of 2025 Year Executive Team.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
