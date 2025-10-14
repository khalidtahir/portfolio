// src/app/resume/page.tsx
export default function Resume() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="text-gray-600">
        A concise summary of my skills, experience, and education.
      </p>

      <h2 className="text-xl font-semibold">Highlights</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Backend-first builder: typed APIs (TypeScript), Prisma + PostgreSQL, auth, rate limits.</li>
        <li>Practical ML: evaluation-first workflows; scikit-learn notebooks & course projects.</li>
        <li>ChoTime: fitness app for workouts/meals with clean schema and future ML hooks.</li>
        <li>Operating-plan automation: Forms → SharePoint → Power BI; 300+ projects tracked.</li>
      </ul>

      <a
        href="/Resume.pdf"
        className="inline-block rounded-xl border px-4 py-2 underline"
        download
      >
        Download PDF
      </a>
    </section>
  )
}
