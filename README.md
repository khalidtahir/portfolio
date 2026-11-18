# Khalid Tahir — Portfolio

Personal portfolio of Khalid Tahir, Software Engineer Intern at Scotiabank and Computer Engineering graduate from Queen's University.

**Live site:** https://khalidtahir.com

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Project structure

```text
src/
├── app/
│   ├── page.tsx             # Home: hero, current role, featured projects, skills
│   ├── projects/page.tsx    # All projects with technical detail
│   ├── background/page.tsx  # Experience, education, activities
│   ├── resume/page.tsx      # Resume preview and download
│   ├── contact/page.tsx
│   ├── layout.tsx           # Shell, navigation, site metadata
│   ├── sitemap.ts, robots.ts
│   └── globals.css
├── components/              # Section, TimelineCard, ProjectCard, NavLink, ui (Card/Pill/ButtonLink)
└── data/site.ts             # All content: profile, experience, education, skills, projects
public/
└── Khalid_Tahir_Resume.pdf  # Served at /Khalid_Tahir_Resume.pdf (/Resume.pdf redirects here)
```

## Updating content

- Edit `src/data/site.ts` for experience, education, skills, and projects.
- To update the resume, replace `public/Khalid_Tahir_Resume.pdf` (keep the filename so links keep working).

## Scripts

```bash
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run lint
npm run build      # production build
```
