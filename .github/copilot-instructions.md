# Repository snapshot for Copilot

Short, actionable instructions to help an AI agent be productive in this repo.

## Quick start (local dev) 🔧
- Run the Next.js app: `npm run dev` (opens on http://localhost:3000).
- Start the mock API used by the Projects page: `npm run json-server` (serves `db.json` at http://localhost:3300/data).
- If working with both UI and mock API run them concurrently (two terminals) or use your preferred concurrency tool.

## High-level architecture 🏗️
- This is a small Next.js 16 (App Router) + TypeScript project using the `app/` directory (server components by default).
- UI uses Tailwind CSS + `next/font` (Geist) for typography.
- Local data is a JSON mock server (`db.json`) used by `app/about/projects/page.tsx` via `fetch('http://localhost:3300/data')`.
- Components live under `app/components/` and are imported in `app/layout.tsx` (global header) or page files.

## Project-specific patterns & gotchas ⚠️
- App Router patterns:
  - Create a page by adding `app/<segment>/page.tsx` (server component by default).
  - Dynamic routes use bracket notation, e.g. `app/blog/[slug]/page.tsx`; `params` is typed like `{ params: { slug: string } }`.
- Client vs server components:
  - Server components are default in `app/`.
  - Add `"use client"` at the top of a component to make it a client component (see `app/components/counter.tsx`).
- Local API dependency: `app/about/projects/page.tsx` expects json-server running on port 3300; pages that fetch from the mock API will fail if it's not running.
- Data shape: `db.json` contains a top-level `data` array of objects with `id`, `title`, `description`, `stargazers_count` — update the page mapping if schema changes.

## Important files to know 🔍
- `package.json` — scripts: `dev`, `build`, `start`, `lint`, `json-server`.
- `app/layout.tsx` — root layout, imports global fonts and `Header`.
- `app/page.tsx` — home page example (Card component usage).
- `app/blog/[slug]/page.tsx` — dynamic route example.
- `app/about/projects/page.tsx` — server component fetching mock API data.
- `app/components/*` — shared components; use `"use client"` when needed.
- `db.json` — local mock database for `json-server`.
- `eslint.config.mjs` — ESLint setup (Next.js core web vitals + TypeScript rules).
- `tsconfig.json` — `strict: true`, includes `paths` alias (`@/*` → `./*`).

## Recommended small code patterns observed ✅
- Keep server logic in server components (top-level `async`/`fetch`) — e.g., `Projects` is `async` and uses `fetch`.
- When you add client-only behaviour (timers, event handlers), mark the component with `"use client"` (see `Counter` which currently uses `setTimeout` on every render; refactor to `useEffect` + `setInterval` to avoid repeated timers).
- Prefer explicit TypeScript types for route params and fetched data (the codebase uses strict mode: `tsconfig.json` sets `strict: true`).
- Tailwind is configured via `postcss.config.mjs` and imported in `app/globals.css`.

## Quick checklist when adding a new page / API-driven feature ✅
1. Add `app/<segment>/page.tsx`. Decide whether it should be server (default) or client (`"use client"`).
2. Add explicit TypeScript types for `params` and for data fetched from APIs.
3. If the page depends on mock data, update `db.json` and mention `npm run json-server` in the PR description.
4. Run `npm run lint` and fix any issues before opening the PR.

## Known issues / notes ⚠️
- `app/components/counter.tsx` creates a timer during render (calls `setTimeout` directly). Refactor to `useEffect` to prevent multiple timers and memory leaks.
- There are currently **no tests or CI** configured; add documentation for any test/CI you add.

## Linting & formatting 🧹
- Run `npm run lint` (uses ESLint config in `eslint.config.mjs`).

## When creating PRs / edits ✍️
- Mention any required local services (e.g., "requires `npm run json-server` on port 3300").
- Update `db.json` examples and `app/about/projects/page.tsx` mapping if you change data schema.
- If you add a mock or API contract, include a short example in the PR description.

---
If anything here is unclear or you'd like more examples (e.g., a short code snippet template for server vs client components), tell me which section to expand and I will iterate. 👇