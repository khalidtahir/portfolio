import type { Metadata } from "next"
import { ButtonLink } from "@/components/ui"
import { RESUME_PATH } from "@/data/site"

export const metadata: Metadata = {
  title: "Resume",
  description: "Preview or download the latest resume of Khalid Tahir, Software Engineer Intern at Scotiabank.",
}

export default function Resume() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-white">Resume</h1>
      <p className="mb-6 max-w-2xl text-white/80">The latest version of my resume, one page.</p>

      <div className="mb-6 flex flex-wrap gap-3">
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
          <p className="p-6 text-white/80">
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
