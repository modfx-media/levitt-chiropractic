# Thin-content plan (review only)

Prepared from the October 2026 crawl, Google Search Console export (2026-07-28 through 2026-10-27), and DataForSEO US-national volumes. Per-URL actions are in [`thin-content-decisions.csv`](./thin-content-decisions.csv) (1,207 sitemap URLs).

This pull request is for review before any rollout. It does not add redirects, `noindex` changes, or sitemap edits. Three core pages are rewritten as samples so the writing standard can be judged on the real templates.

## Findings

The crawl returned **200 for all 1,207 URLs**. Word counts are from `<main>`, with header, nav, footer, aside, form, script, and style removed.

- **All 1,066 city × service pages are template clones.** For every one of them, the nearest neighbor is the same service in another city. Jaccard similarity on 5-word shingles is **0.45–0.64** (median 0.57). Median words that appear on no other page: **0** (maximum 4). Main-content length is 527–736 words (median 593).
- **City hubs are templated too.** About 1,162–1,281 words, median max similarity 0.58, median about **84** words unique to the page.
- **Core service pages are thin.** Injuries 216, cryotherapy 222, alternative medicine 239, personal injury 298, back pain 333, degenerative disc disease 345, cold laser 359, and the rest of the service set between that and adjustments at 523. Most have **0** Search Console impressions. Google is showing the city clones instead.
- **Blog.** Two true near-duplicate pairs (Jaccard 0.81 and 0.74; the 0.81 pair has its titles and slugs swapped) and four same-topic pairs. The other posts are unique (max similarity under 0.12).
- **Traffic is small and concentrated.** 62 clicks and 8,910 impressions in three months, across 760 pages with data. The homepage has 15 clicks (average position 17.3, 1,151 impressions). Forty-five clicks are spread over 40 city × service URLs, 25 of them on functional medicine. Many zero-click city URLs show about 100 impressions on a single long-tail query at positions 4–10. That pattern looks like rank-tracker noise, not patients.
- `/personal-injury` has **0 impressions** even though city pages link to it (166 in-content inlinks in the crawl). `/site-map` is already `noindex` but is still listed in `sitemap.xml`.

Near-duplicate city pages are **not** treated as cannibalization of each other, because each city is a different query. They are a template fingerprint. A kept city page has to be rewritten until that fingerprint is gone. Saint Louis Park is the exception: the office is in Saint Louis Park, the homepage already targets that city, and the core service pages are the Saint Louis Park URLs. Those city URLs fold into the homepage and the matching core page.

## Options

City × service rule, then the resulting index:

| | Option A (recommended) | Option B (tighter) | Option C (max retention) |
|---|---|---|---|
| City × service kept when | ≥1 click or ≥3 impressions; priority suburbs ≥1 impression. Farther than 16 miles, a zero-click page needs ≥10 impressions | ≥1 click or ≥5 impressions; priority suburbs ≥2. Hubs within 12 miles or ≥5 impressions | Any impression |
| keep | 21 | 21 | 21 |
| keep + enrich | 403 | 316 | 756 |
| 301 | 782 | 869 | 429 |
| noindex | 1 (`/site-map`) | 1 | 1 |
| **Final indexed** | **424** | **337** | **777** |
| City hubs kept | 78 / 82 | 73 / 82 | 81 / 82 |
| City × service kept | 294 / 1,066 | 212 / 1,066 | 644 / 1,066 |
| Clicks on URLs that would 301 (3 months) | 0 | 0 | 0 |
| Impressions on those URLs | 850 of 8,910 | 1,086 | 102 |

All three options stay under 1,000 indexed URLs and keep every URL that earned a click. Column pairs `tight_option_B_*` and `max_retention_option_C_*` in the CSV are the alternatives. `action` / `target` are Option A.

**Recommend Option A: 424 indexed pages, about 425 after the new neck-pain page.**

- Option C (777) keeps almost every URL Google has shown and requires on the order of 750 unique 1,500–1,700-word pages. That volume only gets written with templates or mass-generated filler, which is the scaled-content risk this cleanup is meant to leave behind.
- Option B (337) gives up about 236 more impressions (still 0 clicks) and about 80 more city pages, and it means roughly 135,000 fewer words to write. Use B only if the writing capacity is not there for about 400 genuinely unique pages.
- Practical fallback: a kept page that cannot be given real unique copy by the time it is due should take its Option B / 301 target. A half-rewritten template is a worse outcome than a redirect.

The 21 `keep` URLs are exempt from the 1,500-word target: contact, appointment request, the four legal pages, and 15 blog posts that are already long enough. Six blog posts are `keep+enrich`. Six other posts 301 to the stronger twin (listed in the CSV). `/site-map` stays `noindex` and should leave the XML sitemap in phase 3.

The homepage is already 2,786 words. Its job is a quality edit (Saint Louis Park ownership, links to services and personal injury), not padding and not cutting it down to the band by deleting useful sections. `/areas-we-serve` is 7,771 words of link lists and should be rewritten as a hub, not stretched with more links.

Every Option A 301 target returned 200 in the crawl and is itself kept, so the table has no chains. That check has to be repeated at implementation time, after the targets still exist.

## Enrichment priority

Write 1,500–1,700 words of unique, useful copy on each enriched URL. Do not add Highway 100, I-394, Methodist Hospital, West End, or east/west driving filler. That copy was removed on purpose.

**Tier 1, core pages** (phase 1), in this order:

1. `/` homepage. Quality and internal links, including `/personal-injury`. This is the Saint Louis Park page.
2. `/back-pain-treatments` (333 words). Owns back pain and sciatica. Sample in this PR.
3. `/personal-injury` (298 words, 0 impressions, not linked from the homepage or services). Owns auto accident, car accident, and whiplash. Sample in this PR.
4. `/degenerative-disc-disease` (345 words). Owns herniated disc. Sample in this PR.
5. `/cold-laser-therapy` (359).
6. `/functional-medicine` (362). Its city pages earn the most clicks (25).
7. `/adjustments-and-manipulation` (523).
8. `/custom-foot-orthotics` (448).
9. `/common-chiropractic-conditions` (398). Becomes the conditions hub linking to back, neck, disc, and personal injury.
10. **New `/neck-pain`** (one core page: neck pain, pinched nerve, desk/tech neck, headaches that start in the neck). Then `/injuries`, `/cryotherapy`, `/ice-pack-cryotherapy`, `/therapeutic-exercise`, `/alternative-medicine`, `/services`, `/about`, `/meet-the-doctor`, `/new-patient-center` and `/new-patient-center/what-to-expect`, `/resources` and the three resource articles, `/testimonials`, and `/areas-we-serve` rewritten as a real hub.

Do not create city × neck-pain URLs. Local volume for those variants is about 10/month or was not returned.

**Tier 2, Saint Louis Park.** No separate city URLs. `/areas-we-serve/saint-louis-park` 301s to `/`, and each Saint Louis Park service URL 301s to the matching core page, in phase 3. Enrich the homepage and the core pages instead. Do not reintroduce landmark directions.

**Tier 3, priority suburb hubs** (phase 2), hub first, then that city’s kept service pages, highest demand first:

11. `/areas-we-serve/minneapolis`
12. `/areas-we-serve/edina`
13. `/areas-we-serve/minnetonka`
14. `/areas-we-serve/bloomington`
15. `/areas-we-serve/plymouth`
16. `/areas-we-serve/golden-valley`
17. `/areas-we-serve/richfield`

Then the kept service pages in those seven cities (75 under Option A), with back pain, degenerative disc disease, and functional medicine first.

**Tier 4.** Remaining kept hubs and city × service pages, sorted by clicks, then impressions, then distance. Sort the CSV.

The six short blog posts get topped up when convenient. The other 15 already clear 1,500 words and need internal links to the service page that owns the topic.

## Keyword mapping

Volumes are **US-national** Google Ads figures from DataForSEO. Twin Cities demand is a fraction of the generic terms. Null means the API did not return a number, not that demand is zero. Keyword difficulty was measured for a minority of the list.

| Topic | Owner | Demand (US, per month) | Notes |
|---|---|---|---|
| Chiropractor Saint Louis Park / 55416 | `/` | 170 (KD 0); "chiropractor 55416" 10 | Saint Louis Park hub 301s to `/` |
| Chiropractor Minneapolis | `/areas-we-serve/minneapolis` | 1,000 (KD 11); Uptown 70 | |
| Edina / Minnetonka / Bloomington / Plymouth / Golden Valley / Richfield | Each city hub | 320 / 260 / 260 / 210 / 140 / 50 | KD 0–16 |
| Auto accident, car accident, whiplash | `/personal-injury` | "car accident chiropractor near me" 4,400 (KD 0); "whiplash chiropractor" 1,300 | `/injuries` stays sports and work. The minor-crash blog links here. `/auto-injury` currently 301s to `/injuries`; retargeting it is a phase 3 decision, not part of this PR |
| Cold laser | `/cold-laser-therapy` | 8,100 (KD 8); near me 3,600; for back pain 210 | |
| Sciatica | `/back-pain-treatments` | "sciatica treatment" 90,500 (KD 54); "sciatica treatment minneapolis" 10 | Blog `sciatica-treatment-minneapolis` stays as a supporting article |
| Herniated disc | `/degenerative-disc-disease` | "herniated disc treatment" 40,500 (KD 64); "chiropractor for herniated disc" 5,400; near me 720 (KD 0) | One section on herniated and bulging discs, not a second URL |
| Back pain | `/back-pain-treatments` | "chiropractor for back pain" 22,200 (KD 50); "back pain chiropractor near me" 1,900 | |
| Neck pain | **New `/neck-pain`** | "chiropractor for neck pain" 6,600 (KD 13); "neck pain treatment" 27,100; near me 6,600; "neck pain chiropractor near me" 590 (KD 0) | No current URL owns it. Desk-neck blog has 0 impressions |
| Functional medicine | `/functional-medicine` | 60,500; Minneapolis 210 | |
| Custom orthotics | `/custom-foot-orthotics` | "custom orthotics" 12,100 | |
| Cryotherapy / ice pack | `/cryotherapy`, `/ice-pack-cryotherapy` | 90,500 is mostly whole-body cryotherapy spas (wrong intent) / ice pack 90 | Merging the ice-pack URL into cryotherapy can wait |

## Risks

- **Scaled content is the main risk.** 294 kept city × service pages are still a lot of writing. Spun or model-written filler leaves the site exposed to a spam update. Unique facts, or a redirect.
- **Spammy backlink profile.** Domain-level spam score 54, about 2,860 referring domains on low-quality TLDs, and thousands of broken backlinks. Not caused by this content plan. A disavow review was not part of this audit. Per-URL backlinks were not available and were not used in the decisions.
- **Impression noise.** Zero-click URLs with a flat ~100 impressions on one query are probably trackers. That is part of why Option A is recommended over Option C.
- **Redirect dip.** Option A moves 850 impressions (0 clicks). Expect a temporary impression drop on those URLs after phase 3.
- **Volumes are national.** Do not plan city pages from a national number.
- **Word counts include in-main boilerplate** (hours, calls to action, related links). Unique wording matters more than the raw count. After rewrites, rerun similarity and aim for max similarity under 0.2 on every kept page.
- **Homepage length vs the 1,500–1,700 band.** Do not pad it, and do not slash it to fit the band in the same pass as the thin pages. Legal pages and the long blog posts are exempt or already done.
- **Payload.** These service routes render hardcoded React. `CMSRoute` replaces that markup when a **published** Payload document exists at the same path. This PR does not write to the production database. Confirm these three paths are not published CMS documents before the samples are treated as live.

## Rollout phases

**Phase 1.** Enrich the core pages in the tier 1 order, and add one new `/neck-pain` page. Link it from the homepage, services, and conditions. Point the desk-neck blog at it. No city variants. The three samples in this PR are the writing model for personal injury, back pain, and degenerative disc disease. They are not a launch by themselves.

**Phase 2.** Priority suburb hubs, in order: Minneapolis, Edina, Minnetonka, Bloomington, Plymouth, Golden Valley, Richfield. Then the kept service pages in those cities. Each page needs local facts a template cannot share. If the facts are not there, use the phase 3 redirect instead of a partial rewrite.

**Phase 3.** Only after the kept targets are live and reviewed: apply the Option A 301s and the `/site-map` noindex (already noindex; remove it from the XML sitemap). Update internal links (city lists, “other services” blocks, `/areas-we-serve`, `/site-map`, sitemap) so they point at the final URL. Before each redirect ships, verify the target returns **200** and is not itself a redirect. No chains. Do not 404 any retired URL.

Phase 3 is not in this pull request.

## Phase 1 status

Phase 1 on this branch enriches the core service and condition pages and adds one `/neck-pain` URL. It does not add redirects, `noindex` changes, or sitemap removals. Adding `/neck-pain` to the route list that builds `sitemap.xml` is the only sitemap edit.

Left as they were, because they are not service pages and the word-count band would be padding:

- `/` (already long; a quality edit, not a length edit)
- `/about`, `/meet-the-doctor`, `/testimonials`
- `/new-patient-center` and `/new-patient-center/what-to-expect`
- `/resources`, `/resources/about-chiropractic`, `/resources/qa`, `/resources/wellness-tips`
- Blog posts, both the long `keep` posts and the six short `keep+enrich` posts
- `/contact`, `/contact/new-patient-appointment`, `/contact/existing-patient-appointment`
- `/privacy-policy`, `/hipaa-policy`, `/terms-of-use`, `/good-faith-estimate`
- `/site-map` (still noindex; removal from the XML sitemap waits for phase 3)
- `/areas-we-serve` and every city URL (phases 2 and 3)

## Samples in this pull request

Rendered from the existing service-page components (`ServiceHero`, section cards, `CtaCard`, `LocationStrip`), not from the production database:

- `/personal-injury`
- `/back-pain-treatments`
- `/degenerative-disc-disease`

Titles are set with `absoluteTitle` so the layout template cannot append a second brand. Each full title is at most 60 characters. The primary phrase is what `composeSeoTitle` on the open title/meta pull request will keep: it strips a trailing “in Saint Louis Park, MN” and the brand, then appends `| Levitt Chiropractic` and stops at 60 characters. This PR does not edit `lib/seoTitle.ts`, `lib/metadata.ts`, or the other files on that branch.

Copy rules used on the samples: one H1; services limited to care the site already describes (adjustments, including Diversified, Zone Therapy, and Torque Release; cold laser; targeted ice / cryotherapy; therapeutic exercise; custom orthotics when the exam supports them); red flags referred out; no outcome guarantees; no prices, testimonials, or invented credentials; no directional landmark filler. FAQPage JSON-LD is emitted only for questions that are visible on the page.

Measured on a local production build, words inside `<main>` excluding `script`, `style`, and `svg` (navigation and footer sit outside `<main>`):

| Page | Words | Full title (characters) | Jaccard vs the other two samples | Jaccard vs the previous page |
|---|---|---|---|---|
| `/personal-injury` | 1,685 | Personal Injury Chiropractor \| Levitt Chiropractic (50) | 0.022 and 0.017 | 0.037 |
| `/back-pain-treatments` | 1,679 | Back Pain & Sciatica Care \| Levitt Chiropractic (47) | 0.022 and 0.019 | 0.023 |
| `/degenerative-disc-disease` | 1,654 | Herniated Disc & Disc Disease \| Levitt Chiropractic (51) | 0.017 and 0.019 | 0.024 |

Similarity is Jaccard on 5-word shingles. The previous-page figure compares the new main text with the visible copy of the component it replaced, plus the shared address and hours block. All three are inside 1,500–1,700 and far below a template match (the city clones sit at 0.45–0.64).
