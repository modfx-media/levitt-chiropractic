# Levitt PSEO batch 1: uniqueness report

Measured 2026-11-23 (PKT) on a local production build (`next build --webpack`, `next start`) of branch `pseo/hub-rewrites-batch1`.

## Method

- 5-word shingles on lowercased word tokens.
- **Siblings** = all 41 other city hubs in the sitemap (rendered from the pre-change build) + the other 6 rewritten hubs (rendered from this build). 47 siblings per page.
- **Live** = the page's current production HTML (`<main>` text) fetched from www.levittchiropracticcenter.com on 2026-11-23.
- **pseo-body** scope = everything the rewrite controls: hero subtitle + the `[data-pseo-body]` region (FAQ answers included), minus the Sources list (citations are allowed shared text).
- **full-main** scope = the whole `<main>` innerText with FAQs expanded, including the designed hero, breadcrumbs, CTA band and the shared LocationStrip (NAP + hours), i.e. the strictest view.
- Gate: max Jaccard vs any sibling ≤ 0.10, Jaccard vs live ≤ 0.10, unique share vs siblings ≥ 0.90.

## Results

| Page | Scope | Words | Max Jaccard vs sibling (most similar) | Jaccard vs live | Unique share vs siblings | Unique share vs siblings + live | Gate |
|---|---|---|---|---|---|---|---|
| /areas-we-serve/edina | pseo-body | 1864 | 0.0039 (minnetonka) | 0.0033 | 98.5% | 98.3% | PASS |
| /areas-we-serve/edina | full-main | 1818 | 0.0396 (richfield) | 0.0178 | 91.1% | 90.5% | PASS |
| /areas-we-serve/hopkins | pseo-body | 1635 | 0.0055 (richfield) | 0.0031 | 97.5% | 97.4% | PASS |
| /areas-we-serve/hopkins | full-main | 1563 | 0.0243 (minneapolis) | 0.019 | 93.7% | 93.3% | PASS |
| /areas-we-serve/golden-valley | pseo-body | 1486 | 0.0057 (robbinsdale) | 0.0033 | 98.2% | 98.2% | PASS |
| /areas-we-serve/golden-valley | full-main | 1450 | 0.0284 (robbinsdale) | 0.0211 | 93.8% | 93.1% | PASS |
| /areas-we-serve/minneapolis | pseo-body | 1543 | 0.005 (hopkins) | 0.0029 | 98.0% | 98.0% | PASS |
| /areas-we-serve/minneapolis | full-main | 1523 | 0.0243 (hopkins) | 0.0189 | 94.0% | 93.6% | PASS |
| /areas-we-serve/richfield | pseo-body | 1627 | 0.0055 (hopkins) | 0.0028 | 97.7% | 97.7% | PASS |
| /areas-we-serve/richfield | full-main | 1637 | 0.0396 (edina) | 0.0178 | 90.5% | 90.2% | PASS |
| /areas-we-serve/minnetonka | pseo-body | 1330 | 0.0047 (robbinsdale) | 0.0018 | 97.7% | 97.7% | PASS |
| /areas-we-serve/minnetonka | full-main | 1238 | 0.0257 (robbinsdale) | 0.02 | 92.8% | 92.4% | PASS |
| /areas-we-serve/robbinsdale | pseo-body | 1332 | 0.0057 (golden-valley) | 0.0022 | 97.6% | 97.6% | PASS |
| /areas-we-serve/robbinsdale | full-main | 1277 | 0.0349 (richfield) | 0.0203 | 90.5% | 90.0% | PASS |

## Content checks

| Page | Sourced local facts (cards + cited key facts) | Sources cited | AI-fluff phrases | Forbidden wording* | Distances > 15 mi |
|---|---|---|---|---|---|
| edina | 8 sourced fact blocks + 4 inline citations | 6 | 0 | 0 | 0 |
| hopkins | 9 sourced fact blocks + 3 inline citations | 3 | 0 | 0 | 0 |
| golden-valley | 9 sourced fact blocks + 4 inline citations | 5 | 0 | 0 | 0 |
| minneapolis | 7 sourced fact blocks + 5 inline citations | 5 | 0 | 0 | 0 |
| richfield | 9 sourced fact blocks + 11 inline citations | 5 | 0 | 0 | 0 |
| minnetonka | 9 sourced fact blocks + 1 inline citations | 3 | 0 | 0 | 0 |
| robbinsdale | 9 sourced fact blocks + 3 inline citations | 3 | 0 | 0 | 0 |

\* Scanned rendered text for: injury/insurance/accident/whiplash, "Expert Chiropractic Care", ads/advertising, East/West address variants, and the three names that must never appear. Address appears exactly as "6200 Excelsior Blvd, Suite 201, Saint Louis Park".

AI-fluff list checked (31 phrases): delve, tapestry, in today's fast-paced, whether you're, look no further, unlock, elevate, seamless, holistic approach, navigate the, embark, journey to wellness, state-of-the-art, cutting-edge, top-notch, world-class, game-changer, nestled, vibrant, bustling, rest assured, it's important to note, in conclusion, furthermore, moreover, plays a crucial role, a testament to, when it comes to, dive into, comprehensive care, personalized care tailored.

Every source URL was fetched on 2026-11-23: Wikipedia and MPRB pages returned 200. PubMed article pages return a bot interstitial (HTTP 203) to scripts, so each PMID was verified through NCBI E-utilities (title, journal, year, and the abstract conclusion that the copy cites).

CSV: `reports/uniqueness-batch1.csv`.
