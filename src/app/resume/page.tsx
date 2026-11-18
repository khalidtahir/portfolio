import type { Metadata } from "next"
import { ButtonLink } from "@/components/ui"
import { RESUME_PATH } from "@/data/site"

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume" },
  description: "Preview or download the latest resume of Khalid Tahir, Software Engineer Intern at Scotiabank.",
}

export default function Resume() {
  return (
    <div>
      <h1 className="text-[40px] font-bold leading-tight tracking-[-0.03em] text-fg">Resume</h1>
      <p className="mt-4 max-w-2xl text-lg text-fg-2">The latest version of my resume, one page.</p>

      <div className="mb-8 mt-10 flex flex-wrap gap-3">
        <ButtonLink href={RESUME_PATH} variant="primary" download>
          Download PDF
        </ButtonLink>
        <ButtonLink href={RESUME_PATH} external>
          Open in new tab
        </ButtonLink>
      </div>

      {/* Inline PDF preview; many phone browsers can't render it, so the buttons above are the fallback. */}
      <div className="card hidden overflow-hidden md:block">
        <object data={`${RESUME_PATH}#view=FitH`} type="application/pdf" className="h-[80vh] w-full" aria-label="Resume PDF preview">
          <p className="p-6 text-fg-2">
            Your browser can&apos;t display the PDF inline.{" "}
            <a className="link" href={RESUME_PATH}>
              Download the resume instead
            </a>
            .
          </p>
        </object>
      </div>
    </div>
  )
}
