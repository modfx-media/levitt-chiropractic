# Levitt PSEO batch 1: QA summary

Run 2026-11-23 (PKT), local production build on the box. Screenshots: `/workspace/levitt-pseo-qa/{before,after}/` on the agent box (not committed).

| Check | Result |
|---|---|
| `next build --webpack` | PASS. Turbopack `next build` fails in this sandbox on `next/font/google` fetching for both `main` and this branch, so webpack was used for both the before and after builds. Vercel's own build is unaffected. |
| `npm test` (22 tests) | PASS |
| ESLint on changed files | PASS (0 problems) |
| `tsc --noEmit` on changed files | PASS |
| Sitemap URL list, before vs after | Identical (624 URLs) |
| title / meta description / canonical / H1 / status on all 624 sitemap URLs | 0 differences. The rewritten hubs keep their live title, description, canonical and H1. |
| URLs, redirects, sitemap, robots | Unchanged (no edits to `areasData`, `areaRetirement`, `proxy.ts`, sitemap or robots) |
| Home, /services, /about: screenshot diff (Chromium + WebKit, desktop + iPhone 14) | No code change touches these pages. Measured pixel differences (0–3.7%) are at or below the same-build run-to-run noise from third-party embeds (maps, form widget, reviews), measured by capturing the same build twice. |
| Rewritten hubs: Chromium desktop, WebKit desktop, WebKit iPhone 14, Chromium iPhone 14 | Rendered. No page errors or horizontal overflow from the hubs. Before the change, WebKit iPhone 14 showed horizontal overflow on 6 of the 7 old hub templates; after the change it shows none. |
| Client JS added | None. The kit is server components only. The FAQ uses native `<details>` (Safari-safe, no `window`/`document` access). |
| Header, footer, global CSS, existing components | Not modified. `ServiceHero` and `LocationStrip` are reused unchanged. |
| Internal links on rewritten hubs (34 unique) | All return 200. None point to retired URLs. |
| JSON-LD | FAQPage now mirrors the visible hub FAQs. The breadcrumb and service-area schema are unchanged. No new Review/AggregateRating markup is added. Note: the site-wide layout already emits LocalBusiness with AggregateRating/Review on every page. That markup predates this PR and was left as is. |
