You are an expert Next.js / React engineer helping build fast, production-ready websites and web apps.Write clean, simple, maintainable code. Prioritize clarity over unnecessary abstraction.
Think like a senior full-stack web developer.
---

## Project Overview (Customize per project)

We are building a portfolio webiste for a consultant, the official personal website for Engineer Innocent — . This is a multi-page marketing and portfolio website, not a web application. There is no authentication, database, or complex client state.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About  |
| `/projects` | Projects & Impact |
| `/blog` | Blog|
| `/service` | services |
| `/contact` | Contact |

## Reference Design (index.html)

`index.html` in the project root is a structural/component reference (a single-page "MECIT Engineering" site), not the final design. Use it only for layout rhythm and component conventions — **not** for colors or fonts.

- **Theme (confirmed): Orange, Blue, White.** Same color family as the reference (navy/blue + orange), but reimagined to feel modern rather than copied — exact hex values, fonts, and spacing/radii are being finalized as we redesign, so treat the reference file's specific values as a starting point to improve on, not final tokens.
- **Process: section by section, in `index.html`.** We're iterating on the redesign directly in `index.html` as a living mockup — one section at a time (nav/hero, services, projects, about, contact, footer) — before any of it gets ported into the Next.js/Tailwind/shadcn structure below.
- **It's single-page; ours is multi-page.** The reference uses anchor links (`#services`, `#about`, etc.) on one page. Our site uses real routes per the Pages table above — translate each anchor section into its own route/section component instead of an anchor scroll.
- **Patterns worth carrying over** (structure, not styling):
  - Sticky header: logo mark + nav links + CTA button, collapsing to a menu toggle on mobile.
  - Hero: centered eyebrow label + heading + subtext + two CTAs (primary filled, secondary outline).
  - Section intro pattern: eyebrow + `h2` + one-line supporting paragraph, centered, capped width, opening every major section.
  - Alternating section backgrounds (default / soft tint) for visual rhythm between sections.
  - Card grids (services, case studies) with consistent radius, subtle border, hover-lift + shadow.
  - Category filter pills for projects/case studies — implement as a small client component with local state.
  - Stat row for social proof (years of experience, projects completed, etc.) in About.
  - Contact section as two columns: form on one side, contact info + social icons on the other.
  - Footer: brand blurb, quick links, newsletter signup, legal links, bottom copyright bar.

## Key features:

- Responsive UI with modern design (theme/colors TBD — see "Reference Design" below; do not assume dark navy + cyan)
- Static content with Server Components by default
- SEO metadata on every page (title template, OpenGraph)
- Framer Motion for animations; GSAP if complex scroll effects are needed
- Contact form via API route (no external auth required)

Keep the implementation simple and readable.

## Tech Stack (Recommended for Speed with AI)

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui + Radix primitives (for fast, accessible components)
- GSAP for super slick animations
- Framer for simple animations/micro-interactions
- Vercel for deployment

Do not introduce new major libraries unless there is a strong reason. Ask before adding anything new.
Alternative stacks (if project requires): Pure React + Vite, or Astro for content-heavy sites.

## Development Philosophy

Build feature by feature.

For every feature:

- Read this file first.
- Keep the implementation simple.
- Avoid overengineering.
- Prefer readable code over clever code.
- Build the smallest useful version first (MVP).
- Refactor only when repetition appears.

Use Antigravity agents and Claude to plan, generate, review, and iterate. Always verify output.

## Decision Making

If something is unclear or could be improved, suggest a better approach.
If a new library/tool would significantly help, recommend it, explain why, and ask for approval.
Do not add libraries without confirmation.

## Architecture & Folder Structure

Use this folder structure (Next.js App Router). Routes match the Pages table above — no sub-routes for now, added later if needed:

app/
  about/
  projects/
  blog/
  service/
  contact/
  api/         # API routes (e.g. contact form)
components/
  ui/          # shadcn / base-ui primitives
  layout/      # Navigation, Footer, shared wrappers
  sections/    # Page-specific section components
constants/     # navigation links, site config
data/          # typed static content (projects, insights, expertise)
hooks/         # custom React hooks (only when truly reusable)
lib/           # utils, cn.ts, api helpers
types/         # shared TypeScript interfaces
public/
  images/      # all image assets

- app/ → routes and page-level components only. Pages import section components.
- components/sections/ → one file per section (e.g. hero.tsx, who-i-am.tsx). Keep page-specific.
- components/layout/ → Navigation and Footer are already here.
- data/ → typed static content. Source of truth for content until a CMS is introduced.
- lib/ → helpers only. Never expose secrets. No Clerk or auth utilities needed.
- No store/ — this site has no global client state requiring Zustand.

## UI & Styling Rules

- Replicate provided designs exactly (layout, spacing, colors, typography, shadows, etc.).
- Use Tailwind CSS classes primarily.
- Use Shadcn/ui for consistent, accessible components.
- cn() utility from lib/utils.ts for conditional classes.
- Responsive by default (mobile-first).
- Dark mode support where relevant.

## Exceptions (use inline styles or CSS modules only when necessary):

- Complex animations (GSAP)
- Micro-interactions / simple animations (Framer Motion)
- Dynamic runtime styles
- Third-party library overrides

## Image & Asset Rules

Centralize assets:

- Place images in public/images/ or import via next/image.
- Create/use constants/images.ts for any imported assets.
- Always optimize images and use next/image for performance.

## State Management

- Prefer Server Components by default (no `'use client'` unless needed).
- Local useState for temporary UI state (e.g., mobile nav toggle, form fields).
- No Zustand or global state management required for this project.
- Section components that use Framer Motion or browser APIs must be Client Components.

## TypeScript

- Strict mode.
- No any.
- Keep types simple, colocated, and readable.

## Feature Implementation

When building a feature:

- Read this file first.
- Identify files to change.
- Keep changes focused.
- Do not rewrite unrelated code.
- Follow existing patterns.
- Make sure it works end-to-end (test locally + build).
- Fix lint/type errors.

## Secrets & Security

- Never expose secret keys in client code.
- Use environment variables (.env.local).
- Server Actions / API routes for AI calls, external APIs, tokens.

## Authentication

- Not required. This is a public-facing marketing website with no login or protected routes.

## Performance & SEO

- Use Server Components by default.
- Optimize images, fonts, and bundles.
- Proper metadata, Open Graph, etc.
- Lighthouse scores in mind.

## Communication with AI (Claude / Antigravity)

- Be concise.
- Explain what changed and how to test.
- Provide context from this file + relevant code snippets.
- Ask agents to plan first, then implement incrementally.

## Final Reminder

Before every feature or task:

- Read this file.
- Follow it strictly.
- Build clean, simple, fast code.
- Replicate UI exactly when designs are provided.
- Leverage Antigravity agents for planning/execution/verification.

