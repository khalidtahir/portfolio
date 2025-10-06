// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

const HEADSHOT = "/headshot.jpg";
const RUGBY_BANQUET = "/rugbyBanquet.jpg";
const ENG_EXEC = "/year-exec.jpg";

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
            <Typewriter text={"Hey, I'm Khalid — Welcome to My Portfolio"} />
          </h1>
          <p className="text-lg text-white/80">
            I&#39;m a fifth-year Computer Engineering student at Queen&#39;s University, and I&#39;m focused on{" "}
            <span className="font-medium text-white">backend systems</span> and figuring out how to make software feel instant. My passion is taking on the challenge of building
            efficient, reliable services — the kind of system-level code that runs fast and clean, especially when dealing with real-time data.
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
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <div className="code-accent mb-2">{`// backend & data`}</div>
          <p className="text-sm text-white/80">
            Design and build type-safe APIs, optimized data models, and secure authentication for fast, reliable backends.
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">{`// automation`}</div>
          <p className="text-sm text-white/80">
            Turn manual workflows into automated, data-driven systems — from intake forms to real-time dashboards and alerts.
          </p>
        </Card>
        <Card>
          <div className="code-accent mb-2">{`// embedded systems`}</div>
          <p className="text-sm text-white/80">
            Hands-on with hardware-aware programming and system-level optimization, bridging low-level control and scalable software.
          </p>
        </Card>
      </section>

      {/* OUTSIDE OF WORK */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Outside of work</h2>
          <Link href="/projects" className="text-sm text-white/70 hover:text-white">
            See projects →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Soccer */}
          <Card className="hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] transition-shadow">
            <div className="relative h-40 overflow-hidden rounded-xl">
              <Image src="/soccer.jpg" alt="Soccer" fill sizes="300px" className="object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold text-white">Soccer</div>
              <p className="text-sm text-white/70 clamp-2">
                In my free time I love playing competitive soccer.
              </p>
            </div>
          </Card>

          {/* Rugby (action + banquet) */}
          <Card className="hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] transition-shadow">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image src="/rugby.jpg" alt="Rugby action" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image src={RUGBY_BANQUET} alt="Rugby banquet" fill sizes="300px" className="object-cover" />
              </div>
            </div>
            <div className="mt-3">
              <div className="font-semibold text-white">Queen&#39;s Varsity Rugby Club</div>
              <p className="text-sm text-white/70 clamp-2">
                Proud former member — played 8-man &amp; prop for two seasons.
              </p>
            </div>
          </Card>

          {/* Engineering Exec */}
          <Card className="hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)] transition-shadow">
            <div className="relative h-40 overflow-hidden rounded-xl">
              <Image src={ENG_EXEC} alt="Queen&#39;s Engineering Society Year Exec" fill sizes="300px" className="object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold text-white">Queen&#39;s Engineering Society</div>
              <p className="text-sm text-white/70 clamp-2">
                Passionate about community and leadership — served as Publicity Manager for the Class of 2025 Year Executives.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
