// src/app/contact/page.tsx
export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600">
        Feel free to reach out for collaboration, opportunities, or questions about my work.
      </p>

      <div className="space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:khalid.h.tahir@gmail.com"
            className="underline text-blue-600"
          >
            khalid.h.tahir@gmail.com
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/khalidtahir1/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/khalidtahir1
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/khalidtahir"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/khalidtahir
          </a>
        </p>
      </div>
    </section>
  )
}

