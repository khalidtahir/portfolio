// src/app/background/page.tsx
import Section from "@/components/Section";

function TimelineCard({
  title,
  subtitle,
  date,
  description,
  highlights,
  award,
  isExperience = false,
}: {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  highlights?: string[];
  award?: string;
  isExperience?: boolean;
}) {
  return (
    <div
      className={`relative pl-8 border-l ${
        isExperience ? "border-blue-500/40" : "border-gray-600/40"
      } pb-10`}
    >
      <span
        className={`absolute left-[-6px] top-1.5 h-3 w-3 rounded-full ${
          isExperience
            ? "bg-blue-400 shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]"
            : "bg-gray-400 shadow-[0_0_6px_1px_rgba(255,255,255,0.2)]"
        }`}
      ></span>

      <div
        className={`card transition-all ${
          isExperience
            ? "p-8 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)]"
            : "p-6 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]"
        }`}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70 text-sm">{subtitle}</p>
        <p className="text-xs text-white/60 mt-1">{date}</p>

        {description && (
          <p className="text-white/80 mt-3 leading-relaxed">{description}</p>
        )}

        {highlights && (
          <ul className="list-disc list-inside text-white/70 mt-3 space-y-1">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {award && (
          <p className="text-amber-400/90 italic text-sm mt-3">{award}</p>
        )}
      </div>
    </div>
  );
}

export default function BackgroundPage() {
  return (
    <div className="space-y-12">
      {/* Experience */}
      <Section title="Experience">
        <TimelineCard
          title="IT Project Manager Intern"
          subtitle="Queen’s University IT Services"
          date="May 2024 – Sep 2025"
          description="Developed a fully automated operating plan management system connecting Microsoft Forms → Power Automate → SharePoint → Power BI, cutting intake processing from 4–5 months to under 4 weeks and earning recognition from the CIO for delivering the fastest annual planning cycle in department history."
          highlights={[
            "Designed and implemented a Lessons Learned Repository, replacing static Excel sheets with a dynamic SharePoint automation flow for data submission and filtering, improving accessibility and knowledge sharing across departments.",
            "Built a RAID Log automation system (Risks, Actions, Issues, Decisions) using Power Automate and SharePoint to automate data population and tracking for leadership reporting.",
            "Created and maintained Power BI dashboards for executives and project managers, providing real-time visibility across 300+ projects by status, completion forecasts, and overdue items.",
            "Coordinated Agile ceremonies for a university-wide Salesforce (ECRM) rollout, managing sprint planning, backlog refinement, and RAID tracking as a liaison between internal teams and consultants.",
            "Conducted UAT for Salesforce enhancements including the international student applicant portal and Einstein chatbot, identifying and resolving critical pre-launch issues.",
            "Tools: Power Automate · SharePoint · Power BI · Azure DevOps · Salesforce"
          ]}
          award="🏆 Student Spotlight Award — recognized for excellence in contributions to the department."
          isExperience={true}
        />
        <TimelineCard
          title="Outreach Director"
          subtitle="MENAQ (Middle Eastern and North African Students at Queen's)"
          date="Sep 2025 – Present"
          description="Promoting cultural connection and inclusivity through community events, collaborations, and outreach initiatives across campus."
        />

        <TimelineCard
          title="Varsity Athlete"
          subtitle="Queen's Varsity Rugby Club"
          date="2022 – 2024"
          description="Represented Queen’s in intercollegiate competition; developed leadership, teamwork, and discipline through two active seasons."
        />
      </Section>

      {/* Education */}
      <Section title="Education">
        <TimelineCard
          title="Smith School of Engineering, Queen's University"
          subtitle="Bachelor of Applied Science (BASc), Computer Engineering"
          date="Sep 2021 – May 2026"
          description="Specializing in Software Engineering: Option in Artificial Intelligence and Computer Systems"
          highlights={[
            "Relevant coursework: Machine Learning W/ Deep Vision, Artificial Intelligence, Data Structures & Algorithms, Software Requirements, and Distributed Systems.",
          ]}
        />
      </Section>
    </div>
  );
}
