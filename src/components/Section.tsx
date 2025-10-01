// /components/Section.tsx
export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="grid gap-4">{children}</div>
    </section>
  )
}