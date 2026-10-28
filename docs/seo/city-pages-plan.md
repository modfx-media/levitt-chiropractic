# City pages plan

This is a plan only. No city URL is deleted, redirected, noindexed, or rewritten in this change. There are 1,148 live URLs under `/areas-we-serve/` (82 city hubs and 1,066 city + service pages). They stay in the sitemap and indexable.

Search Console data below is the page report for **2026-07-27 through 2026-10-26** (`gsc_pages_3mo.json`, 762 rows with impressions). A URL with no row in that export is counted as 0 impressions. A later export should be pasted into the empty section at the bottom before anyone acts on noindex or redirects.

## Inventory

| Item | Value |
|---|---|
| City hubs | 82 (`/areas-we-serve/[city]`) |
| City + service pages | 1,066 (82 cities × 13 services) |
| Areas hub | 1 (`/areas-we-serve`) — not part of the 1,148 |
| Hub template | `app/(site)/areas-we-serve/[city]/page.tsx` renders `AreaCityPageContent` |
| Service template | `app/(site)/areas-we-serve/[city]/[service]/page.tsx` renders `AreaServicePageContent` |
| City data | `lib/areasData.ts` |
| Per-city commute and complaint notes | `lib/cityLocalFacts.ts` (`localFact`) |
| Shared copy functions | `lib/areaPageCopy.ts` |
| Per-service extras | `lib/serviceCopyExtras.ts` and `lib/pseoServices.ts` |
| Services on each city | adjustments, injuries, personal injury, cryotherapy, ice pack cryotherapy, cold laser, custom foot orthotics, common conditions, back pain, degenerative disc disease, therapeutic exercise, functional medicine, alternative medicine |

Body copy below excludes the site header and footer. Counts come from `scripts/city-page-wordcounts.ts` (intro, local notes, why/steps, FAQs, and service benefits).

| Template | Pages | Min words | Median | Mean | Max |
|---|---:|---:|---:|---:|---:|
| City hub | 82 | 778 | 826 | 833 | 960 |
| City + service | 1,066 | 414 | 488 | 501 | 667 |

Uniqueness: hashing the city-specific blocks (local fact, intro, and FAQ answers) gives **82 distinct hub texts** and **1,066 distinct service texts**. Word-count collisions are common (53 distinct hub lengths, 205 distinct service lengths) because two different cities can land on the same length. The pages are not copies of one another, but they share one template: first-visit steps, benefit lists, and FAQ shapes repeat, with the city name, miles, landmark, and `localFact` swapped in. That shared frame is why unseen service URLs are the consolidation and noindex candidates, not the hubs.

`localFact` has a hand-written note for each city slug. If a slug were missing, the function falls back to a short generic sentence. Every current slug has its own note.

## What Search Console showed

- 729 of 1,148 city URLs had at least one impression.
- 419 had zero impressions. Nine of those are hubs (the hub itself was unseen, but other URLs in that city were not). No city totaled zero impressions across its hub and service URLs.
- Named candidates and their city totals: Champlin 428, Blaine 391, Roseville 153, Newport 142.
- Highest URLs: `/areas-we-serve/champlin/back-pain-treatments` 312 impressions, position 5.1; `/areas-we-serve/blaine/degenerative-disc-disease` 198, position 10.9; `/areas-we-serve/richfield/back-pain-treatments` 176, position 6.7; `/areas-we-serve/wayzata/back-pain-treatments` 161, position 14.4; `/areas-we-serve/cottage-grove/back-pain-treatments` 155, position 16.2; `/areas-we-serve/newport` 135, position 4.0.

### Focus cities

- **Champlin** (18 miles): 428 impressions across the hub and its service URLs. Hub: 4 impressions.
- **Blaine** (18 miles): 391 impressions across the hub and its service URLs. Hub: 4 impressions.
- **Roseville** (9 miles): 153 impressions across the hub and its service URLs. Hub: 1 impressions.
- **Newport** (18 miles): 142 impressions across the hub and its service URLs. Hub: 135 impressions.

Newport is the hub-led city (135 of 142 impressions on the hub). Champlin and Blaine are service-page-led (hubs at 4 impressions each). Roseville’s impressions are spread across service URLs more than the hub (hub: 1).

## Decision rules

Apply these in order. A URL lands in the first matching bucket. Do not apply them until a fresh export is compared with the numbers in this file.

1. **Keep and enrich** if the URL had at least one impression, or it is a city hub. Hubs stay even at zero impressions. They are the page a redirect would point at, and they are the one indexable URL for that city. Enrichment means another specific local paragraph (who drives in, what they come in for, what the first visit is), not a new template and not more keyword repetition. Start with URLs at 50 or more impressions and with Champlin, Blaine, Roseville, and Newport.
2. **Consolidate later (301 to that city’s hub)** if it is a city + service URL, it had zero impressions, and either the city’s URLs totaled 50 or more impressions or the city is within 16 miles of the office. The target is `/areas-we-serve/{city}`, which stays indexable. Do not 301 the hub. Do not 301 to a different city.
3. **Noindex later** if it is a city + service URL, it had zero impressions, the city’s URLs totaled under 50 impressions, and the city is more than 16 miles away. Noindex the service URL only. Leave the hub indexable, in the sitemap, and self-canonical. Do not delete the page.

Saint Louis Park is the office city. Its hub stays in “keep and enrich” regardless. Its zero-impression service URLs follow rule 2 because the city is within 16 miles.

These rules produced, on this export:

| Bucket | URLs | What would happen later |
|---|---:|---|
| Keep and enrich | 738 | Leave indexable. Add local detail, highest impressions first. |
| Consolidate to the city hub | 314 | 301 the service URL to `/areas-we-serve/{city}` after the hub is enriched. |
| Noindex the service URL | 96 | `noindex, follow` on the service URL only. Hub stays indexable. |

No city totaled zero impressions, so this export has no “remove the whole city” case. If a future export shows a city at zero across every URL, noindex that city’s service URLs and keep one hub until the following export.

## Priority enrich (subset of keep)

These are the pages to edit first: 50 or more impressions, the Saint Louis Park hub, and focus-city hubs plus focus-city service URLs with 20 or more impressions.

| URL | City | Page | Miles | Impressions | Clicks | Position | City total |
|---|---|---|---:|---:|---:|---:|---:|
| `/areas-we-serve/champlin/back-pain-treatments` | Champlin | back-pain-treatments | 18 | 312 | 0 | 5.1 | 428 |
| `/areas-we-serve/blaine/degenerative-disc-disease` | Blaine | degenerative-disc-disease | 18 | 198 | 0 | 10.9 | 391 |
| `/areas-we-serve/richfield/back-pain-treatments` | Richfield | back-pain-treatments | 6 | 176 | 0 | 6.7 | 240 |
| `/areas-we-serve/wayzata/back-pain-treatments` | Wayzata | back-pain-treatments | 11 | 161 | 0 | 14.4 | 252 |
| `/areas-we-serve/cottage-grove/back-pain-treatments` | Cottage Grove | back-pain-treatments | 23 | 155 | 0 | 16.2 | 348 |
| `/areas-we-serve/newport` | Newport | hub | 18 | 135 | 0 | 4.0 | 142 |
| `/areas-we-serve/cottage-grove/degenerative-disc-disease` | Cottage Grove | degenerative-disc-disease | 23 | 118 | 0 | 15.3 | 348 |
| `/areas-we-serve/burnsville/degenerative-disc-disease` | Burnsville | degenerative-disc-disease | 14 | 110 | 0 | 13.8 | 209 |
| `/areas-we-serve/blaine/back-pain-treatments` | Blaine | back-pain-treatments | 18 | 104 | 0 | 9.3 | 391 |
| `/areas-we-serve/bloomington/back-pain-treatments` | Bloomington | back-pain-treatments | 7 | 99 | 0 | 8.9 | 242 |
| `/areas-we-serve/maple-grove/back-pain-treatments` | Maple Grove | back-pain-treatments | 13 | 95 | 0 | 15.2 | 185 |
| `/areas-we-serve/champlin/functional-medicine` | Champlin | functional-medicine | 18 | 89 | 0 | 7.8 | 428 |
| `/areas-we-serve/roseville/back-pain-treatments` | Roseville | back-pain-treatments | 9 | 87 | 0 | 12.2 | 153 |
| `/areas-we-serve/edina/back-pain-treatments` | Edina | back-pain-treatments | 3 | 84 | 0 | 19.8 | 161 |
| `/areas-we-serve/andover/back-pain-treatments` | Andover | back-pain-treatments | 21 | 81 | 0 | 7.0 | 256 |
| `/areas-we-serve/maplewood/custom-foot-orthotics` | Maplewood | custom-foot-orthotics | 13 | 80 | 0 | 7.9 | 153 |
| `/areas-we-serve/savage/degenerative-disc-disease` | Savage | degenerative-disc-disease | 14 | 73 | 0 | 10.7 | 144 |
| `/areas-we-serve/lake-elmo/degenerative-disc-disease` | Lake Elmo | degenerative-disc-disease | 18 | 73 | 0 | 4.9 | 91 |
| `/areas-we-serve/lakeville/custom-foot-orthotics` | Lakeville | custom-foot-orthotics | 22 | 69 | 0 | 4.9 | 216 |
| `/areas-we-serve/new-brighton/common-chiropractic-conditions` | New Brighton | common-chiropractic-conditions | 11 | 68 | 0 | 72.1 | 176 |
| `/areas-we-serve/lakeville/degenerative-disc-disease` | Lakeville | degenerative-disc-disease | 22 | 64 | 0 | 12.0 | 216 |
| `/areas-we-serve/crystal/back-pain-treatments` | Crystal | back-pain-treatments | 8 | 63 | 0 | 8.1 | 109 |
| `/areas-we-serve/prior-lake/degenerative-disc-disease` | Prior Lake | degenerative-disc-disease | 17 | 62 | 0 | 9.2 | 106 |
| `/areas-we-serve/andover/degenerative-disc-disease` | Andover | degenerative-disc-disease | 21 | 61 | 0 | 8.0 | 256 |
| `/areas-we-serve/minneapolis` | Minneapolis | hub | 5 | 60 | 0 | 11.9 | 155 |
| `/areas-we-serve/maplewood/degenerative-disc-disease` | Maplewood | degenerative-disc-disease | 13 | 58 | 0 | 10.1 | 153 |
| `/areas-we-serve/shakopee/back-pain-treatments` | Shakopee | back-pain-treatments | 17 | 56 | 0 | 8.4 | 127 |
| `/areas-we-serve/cottage-grove/adjustments-and-manipulation` | Cottage Grove | adjustments-and-manipulation | 23 | 55 | 0 | 16.4 | 348 |
| `/areas-we-serve/burnsville/cold-laser-therapy` | Burnsville | cold-laser-therapy | 14 | 53 | 0 | 5.8 | 209 |
| `/areas-we-serve/victoria/degenerative-disc-disease` | Victoria | degenerative-disc-disease | 17 | 53 | 0 | 14.0 | 121 |
| `/areas-we-serve/golden-valley` | Golden Valley | hub | 4 | 50 | 1 | 13.7 | 123 |
| `/areas-we-serve/blaine/injuries` | Blaine | injuries | 18 | 39 | 0 | 26.8 | 391 |
| `/areas-we-serve/roseville/degenerative-disc-disease` | Roseville | degenerative-disc-disease | 9 | 39 | 0 | 17.7 | 153 |
| `/areas-we-serve/saint-louis-park` | Saint Louis Park | hub | 0 | 13 | 0 | 9.3 | 95 |
| `/areas-we-serve/champlin` | Champlin | hub | 18 | 4 | 0 | 28.2 | 428 |
| `/areas-we-serve/blaine` | Blaine | hub | 18 | 4 | 0 | 7.5 | 391 |
| `/areas-we-serve/roseville` | Roseville | hub | 9 | 1 | 0 | 3.0 | 153 |

## Keep and enrich — every URL

| URL | City | Page | Miles | Impressions | Clicks | Position | City total |
|---|---|---|---:|---:|---:|---:|---:|
| `/areas-we-serve/champlin/back-pain-treatments` | Champlin | back-pain-treatments | 18 | 312 | 0 | 5.1 | 428 |
| `/areas-we-serve/blaine/degenerative-disc-disease` | Blaine | degenerative-disc-disease | 18 | 198 | 0 | 10.9 | 391 |
| `/areas-we-serve/richfield/back-pain-treatments` | Richfield | back-pain-treatments | 6 | 176 | 0 | 6.7 | 240 |
| `/areas-we-serve/wayzata/back-pain-treatments` | Wayzata | back-pain-treatments | 11 | 161 | 0 | 14.4 | 252 |
| `/areas-we-serve/cottage-grove/back-pain-treatments` | Cottage Grove | back-pain-treatments | 23 | 155 | 0 | 16.2 | 348 |
| `/areas-we-serve/newport` | Newport | hub | 18 | 135 | 0 | 4.0 | 142 |
| `/areas-we-serve/cottage-grove/degenerative-disc-disease` | Cottage Grove | degenerative-disc-disease | 23 | 118 | 0 | 15.3 | 348 |
| `/areas-we-serve/burnsville/degenerative-disc-disease` | Burnsville | degenerative-disc-disease | 14 | 110 | 0 | 13.8 | 209 |
| `/areas-we-serve/blaine/back-pain-treatments` | Blaine | back-pain-treatments | 18 | 104 | 0 | 9.3 | 391 |
| `/areas-we-serve/bloomington/back-pain-treatments` | Bloomington | back-pain-treatments | 7 | 99 | 0 | 8.9 | 242 |
| `/areas-we-serve/maple-grove/back-pain-treatments` | Maple Grove | back-pain-treatments | 13 | 95 | 0 | 15.2 | 185 |
| `/areas-we-serve/champlin/functional-medicine` | Champlin | functional-medicine | 18 | 89 | 0 | 7.8 | 428 |
| `/areas-we-serve/roseville/back-pain-treatments` | Roseville | back-pain-treatments | 9 | 87 | 0 | 12.2 | 153 |
| `/areas-we-serve/edina/back-pain-treatments` | Edina | back-pain-treatments | 3 | 84 | 0 | 19.8 | 161 |
| `/areas-we-serve/andover/back-pain-treatments` | Andover | back-pain-treatments | 21 | 81 | 0 | 7.0 | 256 |
| `/areas-we-serve/maplewood/custom-foot-orthotics` | Maplewood | custom-foot-orthotics | 13 | 80 | 0 | 7.9 | 153 |
| `/areas-we-serve/savage/degenerative-disc-disease` | Savage | degenerative-disc-disease | 14 | 73 | 0 | 10.7 | 144 |
| `/areas-we-serve/lake-elmo/degenerative-disc-disease` | Lake Elmo | degenerative-disc-disease | 18 | 73 | 0 | 4.9 | 91 |
| `/areas-we-serve/lakeville/custom-foot-orthotics` | Lakeville | custom-foot-orthotics | 22 | 69 | 0 | 4.9 | 216 |
| `/areas-we-serve/new-brighton/common-chiropractic-conditions` | New Brighton | common-chiropractic-conditions | 11 | 68 | 0 | 72.1 | 176 |
| `/areas-we-serve/lakeville/degenerative-disc-disease` | Lakeville | degenerative-disc-disease | 22 | 64 | 0 | 12.0 | 216 |
| `/areas-we-serve/crystal/back-pain-treatments` | Crystal | back-pain-treatments | 8 | 63 | 0 | 8.1 | 109 |
| `/areas-we-serve/prior-lake/degenerative-disc-disease` | Prior Lake | degenerative-disc-disease | 17 | 62 | 0 | 9.2 | 106 |
| `/areas-we-serve/andover/degenerative-disc-disease` | Andover | degenerative-disc-disease | 21 | 61 | 0 | 8.0 | 256 |
| `/areas-we-serve/minneapolis` | Minneapolis | hub | 5 | 60 | 0 | 11.9 | 155 |
| `/areas-we-serve/maplewood/degenerative-disc-disease` | Maplewood | degenerative-disc-disease | 13 | 58 | 0 | 10.1 | 153 |
| `/areas-we-serve/shakopee/back-pain-treatments` | Shakopee | back-pain-treatments | 17 | 56 | 0 | 8.4 | 127 |
| `/areas-we-serve/cottage-grove/adjustments-and-manipulation` | Cottage Grove | adjustments-and-manipulation | 23 | 55 | 0 | 16.4 | 348 |
| `/areas-we-serve/burnsville/cold-laser-therapy` | Burnsville | cold-laser-therapy | 14 | 53 | 0 | 5.8 | 209 |
| `/areas-we-serve/victoria/degenerative-disc-disease` | Victoria | degenerative-disc-disease | 17 | 53 | 0 | 14.0 | 121 |
| `/areas-we-serve/golden-valley` | Golden Valley | hub | 4 | 50 | 1 | 13.7 | 123 |
| `/areas-we-serve/wayzata/degenerative-disc-disease` | Wayzata | degenerative-disc-disease | 11 | 49 | 0 | 14.2 | 252 |
| `/areas-we-serve/fridley/degenerative-disc-disease` | Fridley | degenerative-disc-disease | 11 | 49 | 0 | 8.4 | 151 |
| `/areas-we-serve/fridley/back-pain-treatments` | Fridley | back-pain-treatments | 11 | 46 | 0 | 10.7 | 151 |
| `/areas-we-serve/andover/injuries` | Andover | injuries | 21 | 45 | 0 | 9.7 | 256 |
| `/areas-we-serve/new-hope/back-pain-treatments` | New Hope | back-pain-treatments | 9 | 45 | 0 | 6.4 | 60 |
| `/areas-we-serve/robbinsdale/back-pain-treatments` | Robbinsdale | back-pain-treatments | 7 | 45 | 0 | 4.9 | 60 |
| `/areas-we-serve/minnetonka/adjustments-and-manipulation` | Minnetonka | adjustments-and-manipulation | 7 | 44 | 0 | 21.5 | 86 |
| `/areas-we-serve/andover/personal-injury` | Andover | personal-injury | 21 | 42 | 0 | 8.9 | 256 |
| `/areas-we-serve/shakopee/degenerative-disc-disease` | Shakopee | degenerative-disc-disease | 17 | 41 | 0 | 11.7 | 127 |
| `/areas-we-serve/savage/back-pain-treatments` | Savage | back-pain-treatments | 14 | 40 | 0 | 6.9 | 144 |
| `/areas-we-serve/blaine/injuries` | Blaine | injuries | 18 | 39 | 0 | 26.8 | 391 |
| `/areas-we-serve/roseville/degenerative-disc-disease` | Roseville | degenerative-disc-disease | 9 | 39 | 0 | 17.7 | 153 |
| `/areas-we-serve/new-brighton/injuries` | New Brighton | injuries | 11 | 38 | 0 | 22.3 | 176 |
| `/areas-we-serve/bloomington/functional-medicine` | Bloomington | functional-medicine | 7 | 37 | 1 | 12.6 | 242 |
| `/areas-we-serve/oakdale/degenerative-disc-disease` | Oakdale | degenerative-disc-disease | 16 | 36 | 0 | 11.2 | 58 |
| `/areas-we-serve/golden-valley/back-pain-treatments` | Golden Valley | back-pain-treatments | 4 | 34 | 0 | 13.8 | 123 |
| `/areas-we-serve/victoria/back-pain-treatments` | Victoria | back-pain-treatments | 17 | 34 | 0 | 4.4 | 121 |
| `/areas-we-serve/coon-rapids/back-pain-treatments` | Coon Rapids | back-pain-treatments | 18 | 33 | 0 | 20.4 | 104 |
| `/areas-we-serve/lakeville/adjustments-and-manipulation` | Lakeville | adjustments-and-manipulation | 22 | 31 | 0 | 22.6 | 216 |
| `/areas-we-serve/rosemount/back-pain-treatments` | Rosemount | back-pain-treatments | 22 | 31 | 0 | 6.5 | 53 |
| `/areas-we-serve/stillwater/back-pain-treatments` | Stillwater | back-pain-treatments | 22 | 29 | 0 | 19.9 | 83 |
| `/areas-we-serve/minneapolis/cryotherapy` | Minneapolis | cryotherapy | 5 | 28 | 0 | 37.7 | 155 |
| `/areas-we-serve/saint-louis-park/back-pain-treatments` | Saint Louis Park | back-pain-treatments | 0 | 28 | 0 | 16.4 | 95 |
| `/areas-we-serve/richfield` | Richfield | hub | 6 | 27 | 0 | 13.5 | 240 |
| `/areas-we-serve/maple-grove/degenerative-disc-disease` | Maple Grove | degenerative-disc-disease | 13 | 26 | 0 | 8.5 | 185 |
| `/areas-we-serve/new-brighton/back-pain-treatments` | New Brighton | back-pain-treatments | 11 | 26 | 0 | 13.8 | 176 |
| `/areas-we-serve/apple-valley/back-pain-treatments` | Apple Valley | back-pain-treatments | 17 | 25 | 0 | 12.7 | 84 |
| `/areas-we-serve/brooklyn-center/back-pain-treatments` | Brooklyn Center | back-pain-treatments | 9 | 25 | 0 | 6.6 | 51 |
| `/areas-we-serve/orono/injuries` | Orono | injuries | 14 | 25 | 0 | 14.9 | 45 |
| `/areas-we-serve/chaska/functional-medicine` | Chaska | functional-medicine | 17 | 24 | 3 | 2.9 | 44 |
| `/areas-we-serve/bloomington/custom-foot-orthotics` | Bloomington | custom-foot-orthotics | 7 | 23 | 0 | 13.7 | 242 |
| `/areas-we-serve/coon-rapids/injuries` | Coon Rapids | injuries | 18 | 23 | 0 | 68.8 | 104 |
| `/areas-we-serve/burnsville/back-pain-treatments` | Burnsville | back-pain-treatments | 14 | 22 | 0 | 17.1 | 209 |
| `/areas-we-serve/bloomington/alternative-medicine` | Bloomington | alternative-medicine | 7 | 21 | 0 | 16.5 | 242 |
| `/areas-we-serve/minneapolis/cold-laser-therapy` | Minneapolis | cold-laser-therapy | 5 | 21 | 0 | 24.2 | 155 |
| `/areas-we-serve/fridley/personal-injury` | Fridley | personal-injury | 11 | 21 | 0 | 8.2 | 151 |
| `/areas-we-serve/shoreview/degenerative-disc-disease` | Shoreview | degenerative-disc-disease | 14 | 21 | 0 | 8.1 | 54 |
| `/areas-we-serve/new-brighton/functional-medicine` | New Brighton | functional-medicine | 11 | 20 | 0 | 10.9 | 176 |
| `/areas-we-serve/edina/functional-medicine` | Edina | functional-medicine | 3 | 20 | 1 | 7.2 | 161 |
| `/areas-we-serve/saint-louis-park/adjustments-and-manipulation` | Saint Louis Park | adjustments-and-manipulation | 0 | 20 | 0 | 80.2 | 95 |
| `/areas-we-serve/eagan/injuries` | Eagan | injuries | 14 | 20 | 0 | 13.3 | 85 |
| `/areas-we-serve/stillwater/common-chiropractic-conditions` | Stillwater | common-chiropractic-conditions | 22 | 20 | 0 | 26.9 | 83 |
| `/areas-we-serve/falcon-heights` | Falcon Heights | hub | 10 | 20 | 0 | 16.2 | 33 |
| `/areas-we-serve/bloomington/degenerative-disc-disease` | Bloomington | degenerative-disc-disease | 7 | 19 | 0 | 12.5 | 242 |
| `/areas-we-serve/coon-rapids/cold-laser-therapy` | Coon Rapids | cold-laser-therapy | 18 | 19 | 0 | 61.3 | 104 |
| `/areas-we-serve/woodbury/degenerative-disc-disease` | Woodbury | degenerative-disc-disease | 18 | 19 | 0 | 8.8 | 57 |
| `/areas-we-serve/eden-prairie/custom-foot-orthotics` | Eden Prairie | custom-foot-orthotics | 10 | 19 | 0 | 8.2 | 50 |
| `/areas-we-serve/minneapolis/degenerative-disc-disease` | Minneapolis | degenerative-disc-disease | 5 | 18 | 0 | 8.1 | 155 |
| `/areas-we-serve/apple-valley/alternative-medicine` | Apple Valley | alternative-medicine | 17 | 18 | 0 | 7.7 | 84 |
| `/areas-we-serve/medina` | Medina | hub | 17 | 18 | 0 | 7.4 | 35 |
| `/areas-we-serve/osseo/back-pain-treatments` | Osseo | back-pain-treatments | 14 | 18 | 0 | 5.9 | 34 |
| `/areas-we-serve/eagan/back-pain-treatments` | Eagan | back-pain-treatments | 14 | 17 | 0 | 16.9 | 85 |
| `/areas-we-serve/bloomington/adjustments-and-manipulation` | Bloomington | adjustments-and-manipulation | 7 | 16 | 0 | 18.4 | 242 |
| `/areas-we-serve/maple-grove/personal-injury` | Maple Grove | personal-injury | 13 | 16 | 0 | 28.6 | 185 |
| `/areas-we-serve/minnetonka/custom-foot-orthotics` | Minnetonka | custom-foot-orthotics | 7 | 16 | 0 | 9.4 | 86 |
| `/areas-we-serve/lauderdale` | Lauderdale | hub | 9 | 16 | 0 | 5.1 | 23 |
| `/areas-we-serve/apple-valley/functional-medicine` | Apple Valley | functional-medicine | 17 | 15 | 1 | 6.7 | 84 |
| `/areas-we-serve/hopkins` | Hopkins | hub | 4 | 15 | 0 | 5.3 | 64 |
| `/areas-we-serve/wayzata/functional-medicine` | Wayzata | functional-medicine | 11 | 14 | 1 | 6.4 | 252 |
| `/areas-we-serve/chanhassen/functional-medicine` | Chanhassen | functional-medicine | 14 | 14 | 1 | 4.9 | 24 |
| `/areas-we-serve/bloomington/personal-injury` | Bloomington | personal-injury | 7 | 13 | 0 | 10.1 | 242 |
| `/areas-we-serve/saint-louis-park` | Saint Louis Park | hub | 0 | 13 | 0 | 9.3 | 95 |
| `/areas-we-serve/eagan/cold-laser-therapy` | Eagan | cold-laser-therapy | 14 | 13 | 0 | 28.8 | 85 |
| `/areas-we-serve/eagan/degenerative-disc-disease` | Eagan | degenerative-disc-disease | 14 | 13 | 0 | 9.9 | 85 |
| `/areas-we-serve/excelsior/functional-medicine` | Excelsior | functional-medicine | 13 | 13 | 1 | 7.2 | 58 |
| `/areas-we-serve/mound` | Mound | hub | 17 | 13 | 0 | 17.5 | 48 |
| `/areas-we-serve/mound/injuries` | Mound | injuries | 17 | 13 | 0 | 8.1 | 48 |
| `/areas-we-serve/spring-lake-park` | Spring Lake Park | hub | 15 | 13 | 0 | 19.4 | 45 |
| `/areas-we-serve/saint-paul/functional-medicine` | Saint Paul | functional-medicine | 12 | 13 | 0 | 60.2 | 44 |
| `/areas-we-serve/plymouth/back-pain-treatments` | Plymouth | back-pain-treatments | 9 | 13 | 0 | 39.3 | 41 |
| `/areas-we-serve/centerville` | Centerville | hub | 22 | 13 | 0 | 8.7 | 16 |
| `/areas-we-serve/andover/custom-foot-orthotics` | Andover | custom-foot-orthotics | 21 | 12 | 0 | 5.4 | 256 |
| `/areas-we-serve/wayzata/adjustments-and-manipulation` | Wayzata | adjustments-and-manipulation | 11 | 12 | 0 | 20.1 | 252 |
| `/areas-we-serve/edina/custom-foot-orthotics` | Edina | custom-foot-orthotics | 3 | 12 | 0 | 7.2 | 161 |
| `/areas-we-serve/crystal/common-chiropractic-conditions` | Crystal | common-chiropractic-conditions | 8 | 12 | 0 | 14.4 | 109 |
| `/areas-we-serve/anoka/functional-medicine` | Anoka | functional-medicine | 19 | 12 | 2 | 2.4 | 36 |
| `/areas-we-serve/blaine/custom-foot-orthotics` | Blaine | custom-foot-orthotics | 18 | 11 | 1 | 3.5 | 391 |
| `/areas-we-serve/andover/functional-medicine` | Andover | functional-medicine | 21 | 11 | 1 | 4.9 | 256 |
| `/areas-we-serve/lakeville/personal-injury` | Lakeville | personal-injury | 22 | 11 | 0 | 15.7 | 216 |
| `/areas-we-serve/burnsville/functional-medicine` | Burnsville | functional-medicine | 14 | 11 | 0 | 28.9 | 209 |
| `/areas-we-serve/minneapolis/ice-pack-cryotherapy` | Minneapolis | ice-pack-cryotherapy | 5 | 11 | 0 | 3.3 | 155 |
| `/areas-we-serve/coon-rapids/cryotherapy` | Coon Rapids | cryotherapy | 18 | 11 | 0 | 14.4 | 104 |
| `/areas-we-serve/hopkins/common-chiropractic-conditions` | Hopkins | common-chiropractic-conditions | 4 | 11 | 0 | 12.4 | 64 |
| `/areas-we-serve/white-bear-lake/functional-medicine` | White Bear Lake | functional-medicine | 16 | 11 | 0 | 3.8 | 42 |
| `/areas-we-serve/waconia/cold-laser-therapy` | Waconia | cold-laser-therapy | 23 | 11 | 0 | 69.1 | 40 |
| `/areas-we-serve/shorewood` | Shorewood | hub | 13 | 11 | 0 | 16.1 | 25 |
| `/areas-we-serve/blaine/functional-medicine` | Blaine | functional-medicine | 18 | 10 | 0 | 4.0 | 391 |
| `/areas-we-serve/cottage-grove/functional-medicine` | Cottage Grove | functional-medicine | 23 | 10 | 0 | 11.2 | 348 |
| `/areas-we-serve/edina/cold-laser-therapy` | Edina | cold-laser-therapy | 3 | 10 | 0 | 11.5 | 161 |
| `/areas-we-serve/edina/ice-pack-cryotherapy` | Edina | ice-pack-cryotherapy | 3 | 10 | 0 | 22.1 | 161 |
| `/areas-we-serve/savage/functional-medicine` | Savage | functional-medicine | 14 | 10 | 0 | 5.3 | 144 |
| `/areas-we-serve/golden-valley/custom-foot-orthotics` | Golden Valley | custom-foot-orthotics | 4 | 10 | 0 | 5.5 | 123 |
| `/areas-we-serve/victoria/adjustments-and-manipulation` | Victoria | adjustments-and-manipulation | 17 | 10 | 0 | 11.2 | 121 |
| `/areas-we-serve/victoria/functional-medicine` | Victoria | functional-medicine | 17 | 10 | 1 | 3.4 | 121 |
| `/areas-we-serve/prior-lake` | Prior Lake | hub | 17 | 10 | 0 | 4.3 | 106 |
| `/areas-we-serve/minnetonka/back-pain-treatments` | Minnetonka | back-pain-treatments | 7 | 10 | 0 | 5.9 | 86 |
| `/areas-we-serve/hopkins/functional-medicine` | Hopkins | functional-medicine | 4 | 10 | 0 | 6.2 | 64 |
| `/areas-we-serve/shoreview/functional-medicine` | Shoreview | functional-medicine | 14 | 10 | 0 | 4.4 | 54 |
| `/areas-we-serve/forest-lake/functional-medicine` | Forest Lake | functional-medicine | 26 | 10 | 2 | 4.2 | 33 |
| `/areas-we-serve/inver-grove-heights/functional-medicine` | Inver Grove Heights | functional-medicine | 18 | 10 | 0 | 6.7 | 27 |
| `/areas-we-serve/blaine/adjustments-and-manipulation` | Blaine | adjustments-and-manipulation | 18 | 9 | 0 | 28.2 | 391 |
| `/areas-we-serve/richfield/therapeutic-exercise` | Richfield | therapeutic-exercise | 6 | 9 | 0 | 4.4 | 240 |
| `/areas-we-serve/golden-valley/common-chiropractic-conditions` | Golden Valley | common-chiropractic-conditions | 4 | 9 | 0 | 6.6 | 123 |
| `/areas-we-serve/saint-louis-park/cold-laser-therapy` | Saint Louis Park | cold-laser-therapy | 0 | 9 | 0 | 48.9 | 95 |
| `/areas-we-serve/hopkins/injuries` | Hopkins | injuries | 4 | 9 | 0 | 5.3 | 64 |
| `/areas-we-serve/excelsior/back-pain-treatments` | Excelsior | back-pain-treatments | 13 | 9 | 0 | 6.0 | 58 |
| `/areas-we-serve/woodbury/back-pain-treatments` | Woodbury | back-pain-treatments | 18 | 9 | 0 | 39.1 | 57 |
| `/areas-we-serve/rosemount/degenerative-disc-disease` | Rosemount | degenerative-disc-disease | 22 | 9 | 0 | 4.4 | 53 |
| `/areas-we-serve/eden-prairie/functional-medicine` | Eden Prairie | functional-medicine | 10 | 9 | 0 | 10.2 | 50 |
| `/areas-we-serve/mound/functional-medicine` | Mound | functional-medicine | 17 | 9 | 0 | 5.7 | 48 |
| `/areas-we-serve/orono` | Orono | hub | 14 | 9 | 0 | 6.7 | 45 |
| `/areas-we-serve/spring-lake-park/common-chiropractic-conditions` | Spring Lake Park | common-chiropractic-conditions | 15 | 9 | 0 | 15.2 | 45 |
| `/areas-we-serve/saint-paul/degenerative-disc-disease` | Saint Paul | degenerative-disc-disease | 12 | 9 | 0 | 14.2 | 44 |
| `/areas-we-serve/brooklyn-park/custom-foot-orthotics` | Brooklyn Park | custom-foot-orthotics | 13 | 9 | 1 | 8.1 | 29 |
| `/areas-we-serve/columbia-heights` | Columbia Heights | hub | 8 | 9 | 0 | 6.8 | 23 |
| `/areas-we-serve/hugo/custom-foot-orthotics` | Hugo | custom-foot-orthotics | 21 | 9 | 0 | 5.1 | 19 |
| `/areas-we-serve/richfield/cold-laser-therapy` | Richfield | cold-laser-therapy | 6 | 8 | 0 | 7.9 | 240 |
| `/areas-we-serve/lakeville/injuries` | Lakeville | injuries | 22 | 8 | 0 | 12.8 | 216 |
| `/areas-we-serve/maple-grove/cryotherapy` | Maple Grove | cryotherapy | 13 | 8 | 0 | 5.5 | 185 |
| `/areas-we-serve/maple-grove/injuries` | Maple Grove | injuries | 13 | 8 | 0 | 10.1 | 185 |
| `/areas-we-serve/new-brighton/alternative-medicine` | New Brighton | alternative-medicine | 11 | 8 | 0 | 21.9 | 176 |
| `/areas-we-serve/fridley` | Fridley | hub | 11 | 8 | 0 | 8.2 | 151 |
| `/areas-we-serve/fridley/functional-medicine` | Fridley | functional-medicine | 11 | 8 | 3 | 4.9 | 151 |
| `/areas-we-serve/shakopee/custom-foot-orthotics` | Shakopee | custom-foot-orthotics | 17 | 8 | 1 | 6.1 | 127 |
| `/areas-we-serve/crystal` | Crystal | hub | 8 | 8 | 0 | 5.6 | 109 |
| `/areas-we-serve/crystal/adjustments-and-manipulation` | Crystal | adjustments-and-manipulation | 8 | 8 | 0 | 13.2 | 109 |
| `/areas-we-serve/crystal/cryotherapy` | Crystal | cryotherapy | 8 | 8 | 0 | 42.6 | 109 |
| `/areas-we-serve/lake-elmo/functional-medicine` | Lake Elmo | functional-medicine | 18 | 8 | 1 | 1.9 | 91 |
| `/areas-we-serve/apple-valley/cold-laser-therapy` | Apple Valley | cold-laser-therapy | 17 | 8 | 0 | 69.4 | 84 |
| `/areas-we-serve/medina/injuries` | Medina | injuries | 17 | 8 | 0 | 6.1 | 35 |
| `/areas-we-serve/north-oaks` | North Oaks | hub | 14 | 8 | 0 | 31.0 | 19 |
| `/areas-we-serve/bayport/functional-medicine` | Bayport | functional-medicine | 23 | 8 | 0 | 7.6 | 18 |
| `/areas-we-serve/mahtomedi` | Mahtomedi | hub | 18 | 8 | 0 | 8.5 | 18 |
| `/areas-we-serve/south-saint-paul` | South Saint Paul | hub | 14 | 8 | 0 | 26.4 | 16 |
| `/areas-we-serve/champlin/therapeutic-exercise` | Champlin | therapeutic-exercise | 18 | 7 | 0 | 21.7 | 428 |
| `/areas-we-serve/blaine/common-chiropractic-conditions` | Blaine | common-chiropractic-conditions | 18 | 7 | 0 | 57.6 | 391 |
| `/areas-we-serve/wayzata/custom-foot-orthotics` | Wayzata | custom-foot-orthotics | 11 | 7 | 0 | 3.7 | 252 |
| `/areas-we-serve/richfield/custom-foot-orthotics` | Richfield | custom-foot-orthotics | 6 | 7 | 0 | 5.3 | 240 |
| `/areas-we-serve/maple-grove/functional-medicine` | Maple Grove | functional-medicine | 13 | 7 | 0 | 7.6 | 185 |
| `/areas-we-serve/roseville/alternative-medicine` | Roseville | alternative-medicine | 9 | 7 | 0 | 8.0 | 153 |
| `/areas-we-serve/shakopee/functional-medicine` | Shakopee | functional-medicine | 17 | 7 | 0 | 5.0 | 127 |
| `/areas-we-serve/victoria/personal-injury` | Victoria | personal-injury | 17 | 7 | 0 | 33.6 | 121 |
| `/areas-we-serve/crystal/personal-injury` | Crystal | personal-injury | 8 | 7 | 0 | 13.6 | 109 |
| `/areas-we-serve/prior-lake/cryotherapy` | Prior Lake | cryotherapy | 17 | 7 | 0 | 2.7 | 106 |
| `/areas-we-serve/prior-lake/injuries` | Prior Lake | injuries | 17 | 7 | 0 | 8.0 | 106 |
| `/areas-we-serve/eagan/functional-medicine` | Eagan | functional-medicine | 14 | 7 | 0 | 12.0 | 85 |
| `/areas-we-serve/stillwater/alternative-medicine` | Stillwater | alternative-medicine | 22 | 7 | 0 | 6.7 | 83 |
| `/areas-we-serve/hopkins/personal-injury` | Hopkins | personal-injury | 4 | 7 | 1 | 8.9 | 64 |
| `/areas-we-serve/excelsior/alternative-medicine` | Excelsior | alternative-medicine | 13 | 7 | 0 | 11.4 | 58 |
| `/areas-we-serve/woodbury/custom-foot-orthotics` | Woodbury | custom-foot-orthotics | 18 | 7 | 0 | 9.4 | 57 |
| `/areas-we-serve/arden-hills` | Arden Hills | hub | 12 | 7 | 0 | 12.9 | 34 |
| `/areas-we-serve/columbia-heights/alternative-medicine` | Columbia Heights | alternative-medicine | 8 | 7 | 0 | 16.6 | 23 |
| `/areas-we-serve/mounds-view` | Mounds View | hub | 13 | 7 | 0 | 16.4 | 22 |
| `/areas-we-serve/saint-paul-park` | Saint Paul Park | hub | 20 | 7 | 0 | 9.7 | 19 |
| `/areas-we-serve/champlin/alternative-medicine` | Champlin | alternative-medicine | 18 | 6 | 0 | 9.8 | 428 |
| `/areas-we-serve/blaine/alternative-medicine` | Blaine | alternative-medicine | 18 | 6 | 0 | 10.7 | 391 |
| `/areas-we-serve/lakeville/cryotherapy` | Lakeville | cryotherapy | 22 | 6 | 1 | 2.0 | 216 |
| `/areas-we-serve/lakeville/ice-pack-cryotherapy` | Lakeville | ice-pack-cryotherapy | 22 | 6 | 0 | 6.7 | 216 |
| `/areas-we-serve/burnsville/common-chiropractic-conditions` | Burnsville | common-chiropractic-conditions | 14 | 6 | 0 | 50.8 | 209 |
| `/areas-we-serve/maple-grove/custom-foot-orthotics` | Maple Grove | custom-foot-orthotics | 13 | 6 | 0 | 5.7 | 185 |
| `/areas-we-serve/maple-grove/ice-pack-cryotherapy` | Maple Grove | ice-pack-cryotherapy | 13 | 6 | 0 | 7.8 | 185 |
| `/areas-we-serve/edina/cryotherapy` | Edina | cryotherapy | 3 | 6 | 0 | 3.7 | 161 |
| `/areas-we-serve/minneapolis/adjustments-and-manipulation` | Minneapolis | adjustments-and-manipulation | 5 | 6 | 0 | 8.0 | 155 |
| `/areas-we-serve/maplewood` | Maplewood | hub | 13 | 6 | 0 | 31.7 | 153 |
| `/areas-we-serve/golden-valley/adjustments-and-manipulation` | Golden Valley | adjustments-and-manipulation | 4 | 6 | 0 | 11.5 | 123 |
| `/areas-we-serve/prior-lake/ice-pack-cryotherapy` | Prior Lake | ice-pack-cryotherapy | 17 | 6 | 0 | 5.8 | 106 |
| `/areas-we-serve/coon-rapids/adjustments-and-manipulation` | Coon Rapids | adjustments-and-manipulation | 18 | 6 | 0 | 44.3 | 104 |
| `/areas-we-serve/stillwater/custom-foot-orthotics` | Stillwater | custom-foot-orthotics | 22 | 6 | 1 | 6.0 | 83 |
| `/areas-we-serve/stillwater/functional-medicine` | Stillwater | functional-medicine | 22 | 6 | 0 | 5.8 | 83 |
| `/areas-we-serve/excelsior/cold-laser-therapy` | Excelsior | cold-laser-therapy | 13 | 6 | 0 | 4.8 | 58 |
| `/areas-we-serve/excelsior/custom-foot-orthotics` | Excelsior | custom-foot-orthotics | 13 | 6 | 0 | 3.3 | 58 |
| `/areas-we-serve/spring-lake-park/alternative-medicine` | Spring Lake Park | alternative-medicine | 15 | 6 | 0 | 51.5 | 45 |
| `/areas-we-serve/spring-lake-park/custom-foot-orthotics` | Spring Lake Park | custom-foot-orthotics | 15 | 6 | 0 | 6.3 | 45 |
| `/areas-we-serve/plymouth/custom-foot-orthotics` | Plymouth | custom-foot-orthotics | 9 | 6 | 0 | 6.2 | 41 |
| `/areas-we-serve/waconia/functional-medicine` | Waconia | functional-medicine | 23 | 6 | 1 | 4.7 | 40 |
| `/areas-we-serve/falcon-heights/adjustments-and-manipulation` | Falcon Heights | adjustments-and-manipulation | 10 | 6 | 1 | 9.8 | 33 |
| `/areas-we-serve/forest-lake/custom-foot-orthotics` | Forest Lake | custom-foot-orthotics | 26 | 6 | 0 | 2.2 | 33 |
| `/areas-we-serve/ham-lake/back-pain-treatments` | Ham Lake | back-pain-treatments | 22 | 6 | 0 | 10.5 | 33 |
| `/areas-we-serve/ham-lake/functional-medicine` | Ham Lake | functional-medicine | 22 | 6 | 1 | 4.3 | 33 |
| `/areas-we-serve/deephaven` | Deephaven | hub | 12 | 6 | 0 | 7.5 | 22 |
| `/areas-we-serve/deephaven/cold-laser-therapy` | Deephaven | cold-laser-therapy | 12 | 6 | 0 | 7.2 | 22 |
| `/areas-we-serve/mahtomedi/functional-medicine` | Mahtomedi | functional-medicine | 18 | 6 | 1 | 3.7 | 18 |
| `/areas-we-serve/mendota-heights` | Mendota Heights | hub | 14 | 6 | 0 | 28.2 | 18 |
| `/areas-we-serve/west-saint-paul/cryotherapy` | West Saint Paul | cryotherapy | 13 | 6 | 1 | 9.8 | 12 |
| `/areas-we-serve/minnetonka-beach/alternative-medicine` | Minnetonka Beach | alternative-medicine | 14 | 6 | 0 | 11.8 | 8 |
| `/areas-we-serve/champlin/common-chiropractic-conditions` | Champlin | common-chiropractic-conditions | 18 | 5 | 0 | 18.0 | 428 |
| `/areas-we-serve/bloomington` | Bloomington | hub | 7 | 5 | 0 | 7.0 | 242 |
| `/areas-we-serve/bloomington/common-chiropractic-conditions` | Bloomington | common-chiropractic-conditions | 7 | 5 | 0 | 13.6 | 242 |
| `/areas-we-serve/lakeville` | Lakeville | hub | 22 | 5 | 0 | 11.0 | 216 |
| `/areas-we-serve/edina` | Edina | hub | 3 | 5 | 0 | 24.2 | 161 |
| `/areas-we-serve/edina/degenerative-disc-disease` | Edina | degenerative-disc-disease | 3 | 5 | 0 | 7.8 | 161 |
| `/areas-we-serve/minneapolis/injuries` | Minneapolis | injuries | 5 | 5 | 0 | 8.6 | 155 |
| `/areas-we-serve/roseville/custom-foot-orthotics` | Roseville | custom-foot-orthotics | 9 | 5 | 0 | 12.2 | 153 |
| `/areas-we-serve/roseville/functional-medicine` | Roseville | functional-medicine | 9 | 5 | 0 | 5.0 | 153 |
| `/areas-we-serve/savage/custom-foot-orthotics` | Savage | custom-foot-orthotics | 14 | 5 | 0 | 5.0 | 144 |
| `/areas-we-serve/saint-louis-park/custom-foot-orthotics` | Saint Louis Park | custom-foot-orthotics | 0 | 5 | 0 | 8.8 | 95 |
| `/areas-we-serve/saint-louis-park/degenerative-disc-disease` | Saint Louis Park | degenerative-disc-disease | 0 | 5 | 0 | 21.0 | 95 |
| `/areas-we-serve/apple-valley/custom-foot-orthotics` | Apple Valley | custom-foot-orthotics | 17 | 5 | 0 | 12.8 | 84 |
| `/areas-we-serve/robbinsdale/personal-injury` | Robbinsdale | personal-injury | 7 | 5 | 0 | 30.2 | 60 |
| `/areas-we-serve/excelsior/injuries` | Excelsior | injuries | 13 | 5 | 0 | 11.6 | 58 |
| `/areas-we-serve/woodbury/adjustments-and-manipulation` | Woodbury | adjustments-and-manipulation | 18 | 5 | 0 | 7.2 | 57 |
| `/areas-we-serve/woodbury/alternative-medicine` | Woodbury | alternative-medicine | 18 | 5 | 1 | 6.6 | 57 |
| `/areas-we-serve/woodbury/injuries` | Woodbury | injuries | 18 | 5 | 0 | 11.0 | 57 |
| `/areas-we-serve/shoreview/back-pain-treatments` | Shoreview | back-pain-treatments | 14 | 5 | 0 | 11.8 | 54 |
| `/areas-we-serve/brooklyn-center` | Brooklyn Center | hub | 9 | 5 | 0 | 21.0 | 51 |
| `/areas-we-serve/brooklyn-center/custom-foot-orthotics` | Brooklyn Center | custom-foot-orthotics | 9 | 5 | 0 | 6.0 | 51 |
| `/areas-we-serve/eden-prairie/cold-laser-therapy` | Eden Prairie | cold-laser-therapy | 10 | 5 | 0 | 24.4 | 50 |
| `/areas-we-serve/spring-lake-park/injuries` | Spring Lake Park | injuries | 15 | 5 | 0 | 21.8 | 45 |
| `/areas-we-serve/chaska` | Chaska | hub | 17 | 5 | 0 | 6.0 | 44 |
| `/areas-we-serve/saint-paul/ice-pack-cryotherapy` | Saint Paul | ice-pack-cryotherapy | 12 | 5 | 0 | 60.2 | 44 |
| `/areas-we-serve/white-bear-lake/cold-laser-therapy` | White Bear Lake | cold-laser-therapy | 16 | 5 | 0 | 17.2 | 42 |
| `/areas-we-serve/white-bear-lake/custom-foot-orthotics` | White Bear Lake | custom-foot-orthotics | 16 | 5 | 0 | 7.0 | 42 |
| `/areas-we-serve/plymouth/alternative-medicine` | Plymouth | alternative-medicine | 9 | 5 | 0 | 14.8 | 41 |
| `/areas-we-serve/plymouth/degenerative-disc-disease` | Plymouth | degenerative-disc-disease | 9 | 5 | 0 | 37.4 | 41 |
| `/areas-we-serve/plymouth/injuries` | Plymouth | injuries | 9 | 5 | 0 | 13.0 | 41 |
| `/areas-we-serve/arden-hills/adjustments-and-manipulation` | Arden Hills | adjustments-and-manipulation | 12 | 5 | 0 | 9.2 | 34 |
| `/areas-we-serve/arden-hills/back-pain-treatments` | Arden Hills | back-pain-treatments | 12 | 5 | 0 | 7.8 | 34 |
| `/areas-we-serve/forest-lake/alternative-medicine` | Forest Lake | alternative-medicine | 26 | 5 | 0 | 7.0 | 33 |
| `/areas-we-serve/ham-lake/alternative-medicine` | Ham Lake | alternative-medicine | 22 | 5 | 0 | 10.0 | 33 |
| `/areas-we-serve/inver-grove-heights` | Inver Grove Heights | hub | 18 | 5 | 0 | 27.0 | 27 |
| `/areas-we-serve/north-oaks/injuries` | North Oaks | injuries | 14 | 5 | 0 | 16.6 | 19 |
| `/areas-we-serve/bayport` | Bayport | hub | 23 | 5 | 0 | 6.2 | 18 |
| `/areas-we-serve/lino-lakes/functional-medicine` | Lino Lakes | functional-medicine | 21 | 5 | 1 | 3.0 | 15 |
| `/areas-we-serve/champlin` | Champlin | hub | 18 | 4 | 0 | 28.2 | 428 |
| `/areas-we-serve/blaine` | Blaine | hub | 18 | 4 | 0 | 7.5 | 391 |
| `/areas-we-serve/cottage-grove/alternative-medicine` | Cottage Grove | alternative-medicine | 23 | 4 | 0 | 7.2 | 348 |
| `/areas-we-serve/richfield/functional-medicine` | Richfield | functional-medicine | 6 | 4 | 1 | 1.8 | 240 |
| `/areas-we-serve/lakeville/alternative-medicine` | Lakeville | alternative-medicine | 22 | 4 | 0 | 7.8 | 216 |
| `/areas-we-serve/lakeville/back-pain-treatments` | Lakeville | back-pain-treatments | 22 | 4 | 0 | 24.2 | 216 |
| `/areas-we-serve/lakeville/cold-laser-therapy` | Lakeville | cold-laser-therapy | 22 | 4 | 1 | 3.5 | 216 |
| `/areas-we-serve/lakeville/functional-medicine` | Lakeville | functional-medicine | 22 | 4 | 0 | 7.2 | 216 |
| `/areas-we-serve/maple-grove/common-chiropractic-conditions` | Maple Grove | common-chiropractic-conditions | 13 | 4 | 0 | 8.5 | 185 |
| `/areas-we-serve/new-brighton/personal-injury` | New Brighton | personal-injury | 11 | 4 | 0 | 15.0 | 176 |
| `/areas-we-serve/edina/injuries` | Edina | injuries | 3 | 4 | 0 | 22.5 | 161 |
| `/areas-we-serve/fridley/cold-laser-therapy` | Fridley | cold-laser-therapy | 11 | 4 | 0 | 17.0 | 151 |
| `/areas-we-serve/prior-lake/functional-medicine` | Prior Lake | functional-medicine | 17 | 4 | 0 | 4.0 | 106 |
| `/areas-we-serve/saint-louis-park/therapeutic-exercise` | Saint Louis Park | therapeutic-exercise | 0 | 4 | 0 | 16.2 | 95 |
| `/areas-we-serve/minnetonka/cryotherapy` | Minnetonka | cryotherapy | 7 | 4 | 0 | 5.0 | 86 |
| `/areas-we-serve/eagan/alternative-medicine` | Eagan | alternative-medicine | 14 | 4 | 0 | 66.8 | 85 |
| `/areas-we-serve/apple-valley/degenerative-disc-disease` | Apple Valley | degenerative-disc-disease | 17 | 4 | 0 | 9.8 | 84 |
| `/areas-we-serve/stillwater/cryotherapy` | Stillwater | cryotherapy | 22 | 4 | 0 | 4.0 | 83 |
| `/areas-we-serve/stillwater/personal-injury` | Stillwater | personal-injury | 22 | 4 | 0 | 12.5 | 83 |
| `/areas-we-serve/new-hope/common-chiropractic-conditions` | New Hope | common-chiropractic-conditions | 9 | 4 | 0 | 10.5 | 60 |
| `/areas-we-serve/robbinsdale` | Robbinsdale | hub | 7 | 4 | 0 | 56.5 | 60 |
| `/areas-we-serve/excelsior` | Excelsior | hub | 13 | 4 | 0 | 3.0 | 58 |
| `/areas-we-serve/excelsior/personal-injury` | Excelsior | personal-injury | 13 | 4 | 0 | 33.8 | 58 |
| `/areas-we-serve/oakdale` | Oakdale | hub | 16 | 4 | 0 | 6.2 | 58 |
| `/areas-we-serve/woodbury/cryotherapy` | Woodbury | cryotherapy | 18 | 4 | 0 | 4.2 | 57 |
| `/areas-we-serve/shoreview` | Shoreview | hub | 14 | 4 | 0 | 5.2 | 54 |
| `/areas-we-serve/rosemount/custom-foot-orthotics` | Rosemount | custom-foot-orthotics | 22 | 4 | 0 | 17.5 | 53 |
| `/areas-we-serve/brooklyn-center/alternative-medicine` | Brooklyn Center | alternative-medicine | 9 | 4 | 0 | 6.0 | 51 |
| `/areas-we-serve/brooklyn-center/degenerative-disc-disease` | Brooklyn Center | degenerative-disc-disease | 9 | 4 | 0 | 11.2 | 51 |
| `/areas-we-serve/eden-prairie/degenerative-disc-disease` | Eden Prairie | degenerative-disc-disease | 10 | 4 | 0 | 20.0 | 50 |
| `/areas-we-serve/mound/back-pain-treatments` | Mound | back-pain-treatments | 17 | 4 | 1 | 6.2 | 48 |
| `/areas-we-serve/saint-paul/cold-laser-therapy` | Saint Paul | cold-laser-therapy | 12 | 4 | 0 | 50.8 | 44 |
| `/areas-we-serve/saint-paul/cryotherapy` | Saint Paul | cryotherapy | 12 | 4 | 1 | 3.5 | 44 |
| `/areas-we-serve/white-bear-lake/alternative-medicine` | White Bear Lake | alternative-medicine | 16 | 4 | 0 | 7.8 | 42 |
| `/areas-we-serve/plymouth/functional-medicine` | Plymouth | functional-medicine | 9 | 4 | 0 | 11.8 | 41 |
| `/areas-we-serve/waconia/back-pain-treatments` | Waconia | back-pain-treatments | 23 | 4 | 0 | 19.8 | 40 |
| `/areas-we-serve/waconia/degenerative-disc-disease` | Waconia | degenerative-disc-disease | 23 | 4 | 0 | 29.0 | 40 |
| `/areas-we-serve/anoka/back-pain-treatments` | Anoka | back-pain-treatments | 19 | 4 | 0 | 15.8 | 36 |
| `/areas-we-serve/arden-hills/functional-medicine` | Arden Hills | functional-medicine | 12 | 4 | 1 | 2.0 | 34 |
| `/areas-we-serve/falcon-heights/injuries` | Falcon Heights | injuries | 10 | 4 | 0 | 53.5 | 33 |
| `/areas-we-serve/ham-lake/common-chiropractic-conditions` | Ham Lake | common-chiropractic-conditions | 22 | 4 | 0 | 4.2 | 33 |
| `/areas-we-serve/brooklyn-park/alternative-medicine` | Brooklyn Park | alternative-medicine | 13 | 4 | 1 | 9.5 | 29 |
| `/areas-we-serve/brooklyn-park/functional-medicine` | Brooklyn Park | functional-medicine | 13 | 4 | 0 | 3.8 | 29 |
| `/areas-we-serve/shorewood/injuries` | Shorewood | injuries | 13 | 4 | 0 | 12.2 | 25 |
| `/areas-we-serve/mounds-view/injuries` | Mounds View | injuries | 13 | 4 | 0 | 7.8 | 22 |
| `/areas-we-serve/farmington/cold-laser-therapy` | Farmington | cold-laser-therapy | 25 | 4 | 0 | 14.5 | 21 |
| `/areas-we-serve/farmington/common-chiropractic-conditions` | Farmington | common-chiropractic-conditions | 25 | 4 | 0 | 3.0 | 21 |
| `/areas-we-serve/farmington/custom-foot-orthotics` | Farmington | custom-foot-orthotics | 25 | 4 | 0 | 11.0 | 21 |
| `/areas-we-serve/saint-paul-park/injuries` | Saint Paul Park | injuries | 20 | 4 | 0 | 8.5 | 19 |
| `/areas-we-serve/long-lake` | Long Lake | hub | 14 | 4 | 0 | 9.0 | 15 |
| `/areas-we-serve/vadnais-heights` | Vadnais Heights | hub | 14 | 4 | 0 | 8.0 | 13 |
| `/areas-we-serve/tonka-bay/degenerative-disc-disease` | Tonka Bay | degenerative-disc-disease | 13 | 4 | 0 | 62.2 | 11 |
| `/areas-we-serve/maple-plain/adjustments-and-manipulation` | Maple Plain | adjustments-and-manipulation | 19 | 4 | 0 | 8.5 | 9 |
| `/areas-we-serve/north-saint-paul/therapeutic-exercise` | North Saint Paul | therapeutic-exercise | 14 | 4 | 0 | 82.5 | 9 |
| `/areas-we-serve/spring-park` | Spring Park | hub | 16 | 4 | 0 | 27.2 | 9 |
| `/areas-we-serve/champlin/injuries` | Champlin | injuries | 18 | 3 | 0 | 8.7 | 428 |
| `/areas-we-serve/andover/common-chiropractic-conditions` | Andover | common-chiropractic-conditions | 21 | 3 | 0 | 10.3 | 256 |
| `/areas-we-serve/wayzata/personal-injury` | Wayzata | personal-injury | 11 | 3 | 0 | 24.3 | 252 |
| `/areas-we-serve/bloomington/cryotherapy` | Bloomington | cryotherapy | 7 | 3 | 0 | 5.0 | 242 |
| `/areas-we-serve/maple-grove/cold-laser-therapy` | Maple Grove | cold-laser-therapy | 13 | 3 | 0 | 58.0 | 185 |
| `/areas-we-serve/new-brighton/cryotherapy` | New Brighton | cryotherapy | 11 | 3 | 0 | 17.7 | 176 |
| `/areas-we-serve/new-brighton/therapeutic-exercise` | New Brighton | therapeutic-exercise | 11 | 3 | 0 | 95.3 | 176 |
| `/areas-we-serve/maplewood/ice-pack-cryotherapy` | Maplewood | ice-pack-cryotherapy | 13 | 3 | 0 | 7.0 | 153 |
| `/areas-we-serve/roseville/injuries` | Roseville | injuries | 9 | 3 | 0 | 30.0 | 153 |
| `/areas-we-serve/fridley/injuries` | Fridley | injuries | 11 | 3 | 0 | 11.0 | 151 |
| `/areas-we-serve/fridley/therapeutic-exercise` | Fridley | therapeutic-exercise | 11 | 3 | 0 | 8.7 | 151 |
| `/areas-we-serve/savage` | Savage | hub | 14 | 3 | 0 | 16.7 | 144 |
| `/areas-we-serve/savage/common-chiropractic-conditions` | Savage | common-chiropractic-conditions | 14 | 3 | 0 | 18.0 | 144 |
| `/areas-we-serve/savage/cryotherapy` | Savage | cryotherapy | 14 | 3 | 0 | 5.0 | 144 |
| `/areas-we-serve/shakopee/alternative-medicine` | Shakopee | alternative-medicine | 17 | 3 | 0 | 8.3 | 127 |
| `/areas-we-serve/shakopee/common-chiropractic-conditions` | Shakopee | common-chiropractic-conditions | 17 | 3 | 0 | 45.7 | 127 |
| `/areas-we-serve/shakopee/cryotherapy` | Shakopee | cryotherapy | 17 | 3 | 0 | 2.3 | 127 |
| `/areas-we-serve/shakopee/ice-pack-cryotherapy` | Shakopee | ice-pack-cryotherapy | 17 | 3 | 0 | 7.3 | 127 |
| `/areas-we-serve/golden-valley/cryotherapy` | Golden Valley | cryotherapy | 4 | 3 | 0 | 2.3 | 123 |
| `/areas-we-serve/golden-valley/degenerative-disc-disease` | Golden Valley | degenerative-disc-disease | 4 | 3 | 0 | 29.7 | 123 |
| `/areas-we-serve/prior-lake/common-chiropractic-conditions` | Prior Lake | common-chiropractic-conditions | 17 | 3 | 0 | 14.3 | 106 |
| `/areas-we-serve/prior-lake/custom-foot-orthotics` | Prior Lake | custom-foot-orthotics | 17 | 3 | 1 | 2.3 | 106 |
| `/areas-we-serve/coon-rapids` | Coon Rapids | hub | 18 | 3 | 0 | 18.0 | 104 |
| `/areas-we-serve/saint-louis-park/functional-medicine` | Saint Louis Park | functional-medicine | 0 | 3 | 0 | 46.0 | 95 |
| `/areas-we-serve/saint-louis-park/injuries` | Saint Louis Park | injuries | 0 | 3 | 0 | 7.0 | 95 |
| `/areas-we-serve/minnetonka/alternative-medicine` | Minnetonka | alternative-medicine | 7 | 3 | 0 | 8.3 | 86 |
| `/areas-we-serve/eagan/cryotherapy` | Eagan | cryotherapy | 14 | 3 | 0 | 2.7 | 85 |
| `/areas-we-serve/apple-valley` | Apple Valley | hub | 17 | 3 | 0 | 8.0 | 84 |
| `/areas-we-serve/apple-valley/ice-pack-cryotherapy` | Apple Valley | ice-pack-cryotherapy | 17 | 3 | 0 | 6.3 | 84 |
| `/areas-we-serve/stillwater/ice-pack-cryotherapy` | Stillwater | ice-pack-cryotherapy | 22 | 3 | 0 | 9.3 | 83 |
| `/areas-we-serve/hopkins/adjustments-and-manipulation` | Hopkins | adjustments-and-manipulation | 4 | 3 | 0 | 3.3 | 64 |
| `/areas-we-serve/hopkins/ice-pack-cryotherapy` | Hopkins | ice-pack-cryotherapy | 4 | 3 | 0 | 8.3 | 64 |
| `/areas-we-serve/robbinsdale/custom-foot-orthotics` | Robbinsdale | custom-foot-orthotics | 7 | 3 | 1 | 11.3 | 60 |
| `/areas-we-serve/oakdale/alternative-medicine` | Oakdale | alternative-medicine | 16 | 3 | 0 | 5.0 | 58 |
| `/areas-we-serve/oakdale/cold-laser-therapy` | Oakdale | cold-laser-therapy | 16 | 3 | 0 | 19.7 | 58 |
| `/areas-we-serve/oakdale/common-chiropractic-conditions` | Oakdale | common-chiropractic-conditions | 16 | 3 | 0 | 13.3 | 58 |
| `/areas-we-serve/oakdale/cryotherapy` | Oakdale | cryotherapy | 16 | 3 | 0 | 6.0 | 58 |
| `/areas-we-serve/shoreview/cold-laser-therapy` | Shoreview | cold-laser-therapy | 14 | 3 | 0 | 9.0 | 54 |
| `/areas-we-serve/shoreview/cryotherapy` | Shoreview | cryotherapy | 14 | 3 | 0 | 2.3 | 54 |
| `/areas-we-serve/brooklyn-center/functional-medicine` | Brooklyn Center | functional-medicine | 9 | 3 | 0 | 7.3 | 51 |
| `/areas-we-serve/eden-prairie` | Eden Prairie | hub | 10 | 3 | 0 | 12.0 | 50 |
| `/areas-we-serve/eden-prairie/ice-pack-cryotherapy` | Eden Prairie | ice-pack-cryotherapy | 10 | 3 | 0 | 25.7 | 50 |
| `/areas-we-serve/eden-prairie/injuries` | Eden Prairie | injuries | 10 | 3 | 0 | 7.3 | 50 |
| `/areas-we-serve/mound/alternative-medicine` | Mound | alternative-medicine | 17 | 3 | 0 | 9.3 | 48 |
| `/areas-we-serve/mound/common-chiropractic-conditions` | Mound | common-chiropractic-conditions | 17 | 3 | 0 | 8.3 | 48 |
| `/areas-we-serve/orono/adjustments-and-manipulation` | Orono | adjustments-and-manipulation | 14 | 3 | 0 | 9.3 | 45 |
| `/areas-we-serve/orono/custom-foot-orthotics` | Orono | custom-foot-orthotics | 14 | 3 | 0 | 4.0 | 45 |
| `/areas-we-serve/spring-lake-park/therapeutic-exercise` | Spring Lake Park | therapeutic-exercise | 15 | 3 | 0 | 1.0 | 45 |
| `/areas-we-serve/chaska/adjustments-and-manipulation` | Chaska | adjustments-and-manipulation | 17 | 3 | 0 | 4.3 | 44 |
| `/areas-we-serve/white-bear-lake` | White Bear Lake | hub | 16 | 3 | 0 | 10.0 | 42 |
| `/areas-we-serve/white-bear-lake/adjustments-and-manipulation` | White Bear Lake | adjustments-and-manipulation | 16 | 3 | 0 | 5.7 | 42 |
| `/areas-we-serve/waconia` | Waconia | hub | 23 | 3 | 0 | 8.7 | 40 |
| `/areas-we-serve/waconia/alternative-medicine` | Waconia | alternative-medicine | 23 | 3 | 0 | 8.3 | 40 |
| `/areas-we-serve/waconia/common-chiropractic-conditions` | Waconia | common-chiropractic-conditions | 23 | 3 | 0 | 17.7 | 40 |
| `/areas-we-serve/waconia/custom-foot-orthotics` | Waconia | custom-foot-orthotics | 23 | 3 | 0 | 3.7 | 40 |
| `/areas-we-serve/waconia/injuries` | Waconia | injuries | 23 | 3 | 0 | 7.7 | 40 |
| `/areas-we-serve/anoka/cold-laser-therapy` | Anoka | cold-laser-therapy | 19 | 3 | 0 | 6.7 | 36 |
| `/areas-we-serve/anoka/common-chiropractic-conditions` | Anoka | common-chiropractic-conditions | 19 | 3 | 0 | 38.7 | 36 |
| `/areas-we-serve/anoka/custom-foot-orthotics` | Anoka | custom-foot-orthotics | 19 | 3 | 1 | 8.3 | 36 |
| `/areas-we-serve/anoka/injuries` | Anoka | injuries | 19 | 3 | 0 | 10.3 | 36 |
| `/areas-we-serve/medina/alternative-medicine` | Medina | alternative-medicine | 17 | 3 | 0 | 10.3 | 35 |
| `/areas-we-serve/arden-hills/common-chiropractic-conditions` | Arden Hills | common-chiropractic-conditions | 12 | 3 | 0 | 2.7 | 34 |
| `/areas-we-serve/arden-hills/degenerative-disc-disease` | Arden Hills | degenerative-disc-disease | 12 | 3 | 0 | 3.0 | 34 |
| `/areas-we-serve/arden-hills/injuries` | Arden Hills | injuries | 12 | 3 | 0 | 20.3 | 34 |
| `/areas-we-serve/osseo/alternative-medicine` | Osseo | alternative-medicine | 14 | 3 | 0 | 58.0 | 34 |
| `/areas-we-serve/osseo/injuries` | Osseo | injuries | 14 | 3 | 0 | 6.7 | 34 |
| `/areas-we-serve/falcon-heights/degenerative-disc-disease` | Falcon Heights | degenerative-disc-disease | 10 | 3 | 0 | 24.3 | 33 |
| `/areas-we-serve/ham-lake/injuries` | Ham Lake | injuries | 22 | 3 | 0 | 21.3 | 33 |
| `/areas-we-serve/inver-grove-heights/alternative-medicine` | Inver Grove Heights | alternative-medicine | 18 | 3 | 0 | 8.0 | 27 |
| `/areas-we-serve/inver-grove-heights/ice-pack-cryotherapy` | Inver Grove Heights | ice-pack-cryotherapy | 18 | 3 | 0 | 5.0 | 27 |
| `/areas-we-serve/shorewood/functional-medicine` | Shorewood | functional-medicine | 13 | 3 | 0 | 45.7 | 25 |
| `/areas-we-serve/shorewood/personal-injury` | Shorewood | personal-injury | 13 | 3 | 0 | 36.7 | 25 |
| `/areas-we-serve/chanhassen/alternative-medicine` | Chanhassen | alternative-medicine | 14 | 3 | 0 | 5.7 | 24 |
| `/areas-we-serve/chanhassen/back-pain-treatments` | Chanhassen | back-pain-treatments | 14 | 3 | 0 | 21.3 | 24 |
| `/areas-we-serve/deephaven/alternative-medicine` | Deephaven | alternative-medicine | 12 | 3 | 0 | 15.3 | 22 |
| `/areas-we-serve/mounds-view/alternative-medicine` | Mounds View | alternative-medicine | 13 | 3 | 0 | 8.3 | 22 |
| `/areas-we-serve/mounds-view/functional-medicine` | Mounds View | functional-medicine | 13 | 3 | 0 | 3.3 | 22 |
| `/areas-we-serve/hugo/functional-medicine` | Hugo | functional-medicine | 21 | 3 | 0 | 3.3 | 19 |
| `/areas-we-serve/north-oaks/therapeutic-exercise` | North Oaks | therapeutic-exercise | 14 | 3 | 0 | 11.3 | 19 |
| `/areas-we-serve/saint-paul-park/cryotherapy` | Saint Paul Park | cryotherapy | 20 | 3 | 0 | 15.0 | 19 |
| `/areas-we-serve/saint-paul-park/custom-foot-orthotics` | Saint Paul Park | custom-foot-orthotics | 20 | 3 | 0 | 16.3 | 19 |
| `/areas-we-serve/mendota-heights/therapeutic-exercise` | Mendota Heights | therapeutic-exercise | 14 | 3 | 0 | 20.0 | 18 |
| `/areas-we-serve/lino-lakes/back-pain-treatments` | Lino Lakes | back-pain-treatments | 21 | 3 | 0 | 8.3 | 15 |
| `/areas-we-serve/long-lake/custom-foot-orthotics` | Long Lake | custom-foot-orthotics | 14 | 3 | 0 | 1.7 | 15 |
| `/areas-we-serve/vadnais-heights/alternative-medicine` | Vadnais Heights | alternative-medicine | 14 | 3 | 0 | 4.0 | 13 |
| `/areas-we-serve/spring-park/adjustments-and-manipulation` | Spring Park | adjustments-and-manipulation | 16 | 3 | 0 | 7.0 | 9 |
| `/areas-we-serve/saint-anthony` | Saint Anthony | hub | 8 | 3 | 0 | 37.3 | 8 |
| `/areas-we-serve/saint-anthony/alternative-medicine` | Saint Anthony | alternative-medicine | 8 | 3 | 0 | 22.0 | 8 |
| `/areas-we-serve/blaine/ice-pack-cryotherapy` | Blaine | ice-pack-cryotherapy | 18 | 2 | 0 | 4.5 | 391 |
| `/areas-we-serve/cottage-grove/custom-foot-orthotics` | Cottage Grove | custom-foot-orthotics | 23 | 2 | 0 | 27.0 | 348 |
| `/areas-we-serve/richfield/alternative-medicine` | Richfield | alternative-medicine | 6 | 2 | 0 | 12.0 | 240 |
| `/areas-we-serve/richfield/personal-injury` | Richfield | personal-injury | 6 | 2 | 0 | 39.0 | 240 |
| `/areas-we-serve/burnsville/cryotherapy` | Burnsville | cryotherapy | 14 | 2 | 0 | 2.0 | 209 |
| `/areas-we-serve/burnsville/injuries` | Burnsville | injuries | 14 | 2 | 0 | 5.5 | 209 |
| `/areas-we-serve/maple-grove` | Maple Grove | hub | 13 | 2 | 0 | 8.0 | 185 |
| `/areas-we-serve/maple-grove/adjustments-and-manipulation` | Maple Grove | adjustments-and-manipulation | 13 | 2 | 0 | 39.5 | 185 |
| `/areas-we-serve/maple-grove/alternative-medicine` | Maple Grove | alternative-medicine | 13 | 2 | 0 | 23.5 | 185 |
| `/areas-we-serve/new-brighton` | New Brighton | hub | 11 | 2 | 0 | 25.0 | 176 |
| `/areas-we-serve/new-brighton/custom-foot-orthotics` | New Brighton | custom-foot-orthotics | 11 | 2 | 0 | 28.0 | 176 |
| `/areas-we-serve/new-brighton/ice-pack-cryotherapy` | New Brighton | ice-pack-cryotherapy | 11 | 2 | 0 | 6.0 | 176 |
| `/areas-we-serve/edina/adjustments-and-manipulation` | Edina | adjustments-and-manipulation | 3 | 2 | 0 | 5.5 | 161 |
| `/areas-we-serve/edina/alternative-medicine` | Edina | alternative-medicine | 3 | 2 | 0 | 52.5 | 161 |
| `/areas-we-serve/minneapolis/custom-foot-orthotics` | Minneapolis | custom-foot-orthotics | 5 | 2 | 0 | 8.0 | 155 |
| `/areas-we-serve/maplewood/back-pain-treatments` | Maplewood | back-pain-treatments | 13 | 2 | 0 | 4.5 | 153 |
| `/areas-we-serve/maplewood/functional-medicine` | Maplewood | functional-medicine | 13 | 2 | 0 | 4.5 | 153 |
| `/areas-we-serve/roseville/common-chiropractic-conditions` | Roseville | common-chiropractic-conditions | 9 | 2 | 0 | 8.5 | 153 |
| `/areas-we-serve/roseville/personal-injury` | Roseville | personal-injury | 9 | 2 | 1 | 1.0 | 153 |
| `/areas-we-serve/fridley/adjustments-and-manipulation` | Fridley | adjustments-and-manipulation | 11 | 2 | 0 | 9.0 | 151 |
| `/areas-we-serve/fridley/cryotherapy` | Fridley | cryotherapy | 11 | 2 | 0 | 4.5 | 151 |
| `/areas-we-serve/fridley/custom-foot-orthotics` | Fridley | custom-foot-orthotics | 11 | 2 | 0 | 6.0 | 151 |
| `/areas-we-serve/savage/alternative-medicine` | Savage | alternative-medicine | 14 | 2 | 0 | 15.0 | 144 |
| `/areas-we-serve/savage/cold-laser-therapy` | Savage | cold-laser-therapy | 14 | 2 | 0 | 9.5 | 144 |
| `/areas-we-serve/savage/injuries` | Savage | injuries | 14 | 2 | 0 | 36.5 | 144 |
| `/areas-we-serve/newport/back-pain-treatments` | Newport | back-pain-treatments | 18 | 2 | 0 | 91.0 | 142 |
| `/areas-we-serve/newport/degenerative-disc-disease` | Newport | degenerative-disc-disease | 18 | 2 | 0 | 26.5 | 142 |
| `/areas-we-serve/shakopee` | Shakopee | hub | 17 | 2 | 0 | 9.0 | 127 |
| `/areas-we-serve/golden-valley/alternative-medicine` | Golden Valley | alternative-medicine | 4 | 2 | 0 | 19.5 | 123 |
| `/areas-we-serve/golden-valley/cold-laser-therapy` | Golden Valley | cold-laser-therapy | 4 | 2 | 0 | 13.0 | 123 |
| `/areas-we-serve/golden-valley/functional-medicine` | Golden Valley | functional-medicine | 4 | 2 | 0 | 3.0 | 123 |
| `/areas-we-serve/victoria/cold-laser-therapy` | Victoria | cold-laser-therapy | 17 | 2 | 0 | 4.5 | 121 |
| `/areas-we-serve/victoria/common-chiropractic-conditions` | Victoria | common-chiropractic-conditions | 17 | 2 | 0 | 22.5 | 121 |
| `/areas-we-serve/victoria/therapeutic-exercise` | Victoria | therapeutic-exercise | 17 | 2 | 0 | 13.5 | 121 |
| `/areas-we-serve/prior-lake/cold-laser-therapy` | Prior Lake | cold-laser-therapy | 17 | 2 | 0 | 9.5 | 106 |
| `/areas-we-serve/coon-rapids/custom-foot-orthotics` | Coon Rapids | custom-foot-orthotics | 18 | 2 | 0 | 8.0 | 104 |
| `/areas-we-serve/coon-rapids/functional-medicine` | Coon Rapids | functional-medicine | 18 | 2 | 0 | 3.5 | 104 |
| `/areas-we-serve/coon-rapids/ice-pack-cryotherapy` | Coon Rapids | ice-pack-cryotherapy | 18 | 2 | 0 | 9.0 | 104 |
| `/areas-we-serve/coon-rapids/personal-injury` | Coon Rapids | personal-injury | 18 | 2 | 0 | 52.0 | 104 |
| `/areas-we-serve/saint-louis-park/alternative-medicine` | Saint Louis Park | alternative-medicine | 0 | 2 | 0 | 11.0 | 95 |
| `/areas-we-serve/saint-louis-park/cryotherapy` | Saint Louis Park | cryotherapy | 0 | 2 | 0 | 3.0 | 95 |
| `/areas-we-serve/lake-elmo/alternative-medicine` | Lake Elmo | alternative-medicine | 18 | 2 | 0 | 6.0 | 91 |
| `/areas-we-serve/lake-elmo/back-pain-treatments` | Lake Elmo | back-pain-treatments | 18 | 2 | 0 | 9.0 | 91 |
| `/areas-we-serve/lake-elmo/cryotherapy` | Lake Elmo | cryotherapy | 18 | 2 | 0 | 2.0 | 91 |
| `/areas-we-serve/lake-elmo/ice-pack-cryotherapy` | Lake Elmo | ice-pack-cryotherapy | 18 | 2 | 0 | 11.0 | 91 |
| `/areas-we-serve/minnetonka/cold-laser-therapy` | Minnetonka | cold-laser-therapy | 7 | 2 | 0 | 50.0 | 86 |
| `/areas-we-serve/minnetonka/degenerative-disc-disease` | Minnetonka | degenerative-disc-disease | 7 | 2 | 0 | 7.5 | 86 |
| `/areas-we-serve/minnetonka/functional-medicine` | Minnetonka | functional-medicine | 7 | 2 | 1 | 4.0 | 86 |
| `/areas-we-serve/eagan/adjustments-and-manipulation` | Eagan | adjustments-and-manipulation | 14 | 2 | 0 | 10.0 | 85 |
| `/areas-we-serve/eagan/custom-foot-orthotics` | Eagan | custom-foot-orthotics | 14 | 2 | 0 | 7.5 | 85 |
| `/areas-we-serve/eagan/therapeutic-exercise` | Eagan | therapeutic-exercise | 14 | 2 | 0 | 12.5 | 85 |
| `/areas-we-serve/apple-valley/cryotherapy` | Apple Valley | cryotherapy | 17 | 2 | 0 | 3.5 | 84 |
| `/areas-we-serve/stillwater` | Stillwater | hub | 22 | 2 | 0 | 2.0 | 83 |
| `/areas-we-serve/hopkins/alternative-medicine` | Hopkins | alternative-medicine | 4 | 2 | 0 | 3.0 | 64 |
| `/areas-we-serve/hopkins/cryotherapy` | Hopkins | cryotherapy | 4 | 2 | 0 | 3.5 | 64 |
| `/areas-we-serve/new-hope` | New Hope | hub | 9 | 2 | 0 | 16.5 | 60 |
| `/areas-we-serve/new-hope/adjustments-and-manipulation` | New Hope | adjustments-and-manipulation | 9 | 2 | 0 | 13.5 | 60 |
| `/areas-we-serve/new-hope/cold-laser-therapy` | New Hope | cold-laser-therapy | 9 | 2 | 0 | 23.5 | 60 |
| `/areas-we-serve/new-hope/functional-medicine` | New Hope | functional-medicine | 9 | 2 | 0 | 16.5 | 60 |
| `/areas-we-serve/new-hope/therapeutic-exercise` | New Hope | therapeutic-exercise | 9 | 2 | 0 | 14.0 | 60 |
| `/areas-we-serve/excelsior/common-chiropractic-conditions` | Excelsior | common-chiropractic-conditions | 13 | 2 | 0 | 27.0 | 58 |
| `/areas-we-serve/oakdale/custom-foot-orthotics` | Oakdale | custom-foot-orthotics | 16 | 2 | 0 | 19.5 | 58 |
| `/areas-we-serve/oakdale/functional-medicine` | Oakdale | functional-medicine | 16 | 2 | 0 | 2.0 | 58 |
| `/areas-we-serve/shoreview/custom-foot-orthotics` | Shoreview | custom-foot-orthotics | 14 | 2 | 1 | 7.0 | 54 |
| `/areas-we-serve/shoreview/ice-pack-cryotherapy` | Shoreview | ice-pack-cryotherapy | 14 | 2 | 1 | 5.5 | 54 |
| `/areas-we-serve/rosemount/adjustments-and-manipulation` | Rosemount | adjustments-and-manipulation | 22 | 2 | 0 | 11.5 | 53 |
| `/areas-we-serve/rosemount/alternative-medicine` | Rosemount | alternative-medicine | 22 | 2 | 0 | 8.0 | 53 |
| `/areas-we-serve/rosemount/common-chiropractic-conditions` | Rosemount | common-chiropractic-conditions | 22 | 2 | 0 | 27.0 | 53 |
| `/areas-we-serve/brooklyn-center/common-chiropractic-conditions` | Brooklyn Center | common-chiropractic-conditions | 9 | 2 | 0 | 71.5 | 51 |
| `/areas-we-serve/eden-prairie/personal-injury` | Eden Prairie | personal-injury | 10 | 2 | 0 | 16.0 | 50 |
| `/areas-we-serve/mound/personal-injury` | Mound | personal-injury | 17 | 2 | 0 | 23.0 | 48 |
| `/areas-we-serve/orono/alternative-medicine` | Orono | alternative-medicine | 14 | 2 | 0 | 10.0 | 45 |
| `/areas-we-serve/orono/common-chiropractic-conditions` | Orono | common-chiropractic-conditions | 14 | 2 | 0 | 9.5 | 45 |
| `/areas-we-serve/spring-lake-park/adjustments-and-manipulation` | Spring Lake Park | adjustments-and-manipulation | 15 | 2 | 0 | 12.0 | 45 |
| `/areas-we-serve/chaska/alternative-medicine` | Chaska | alternative-medicine | 17 | 2 | 0 | 6.0 | 44 |
| `/areas-we-serve/chaska/cold-laser-therapy` | Chaska | cold-laser-therapy | 17 | 2 | 0 | 2.0 | 44 |
| `/areas-we-serve/chaska/degenerative-disc-disease` | Chaska | degenerative-disc-disease | 17 | 2 | 0 | 7.0 | 44 |
| `/areas-we-serve/chaska/ice-pack-cryotherapy` | Chaska | ice-pack-cryotherapy | 17 | 2 | 0 | 7.5 | 44 |
| `/areas-we-serve/saint-paul/adjustments-and-manipulation` | Saint Paul | adjustments-and-manipulation | 12 | 2 | 0 | 44.0 | 44 |
| `/areas-we-serve/saint-paul/alternative-medicine` | Saint Paul | alternative-medicine | 12 | 2 | 0 | 7.0 | 44 |
| `/areas-we-serve/saint-paul/common-chiropractic-conditions` | Saint Paul | common-chiropractic-conditions | 12 | 2 | 0 | 3.0 | 44 |
| `/areas-we-serve/saint-paul/custom-foot-orthotics` | Saint Paul | custom-foot-orthotics | 12 | 2 | 0 | 9.0 | 44 |
| `/areas-we-serve/white-bear-lake/back-pain-treatments` | White Bear Lake | back-pain-treatments | 16 | 2 | 0 | 12.5 | 42 |
| `/areas-we-serve/white-bear-lake/cryotherapy` | White Bear Lake | cryotherapy | 16 | 2 | 0 | 2.0 | 42 |
| `/areas-we-serve/white-bear-lake/degenerative-disc-disease` | White Bear Lake | degenerative-disc-disease | 16 | 2 | 0 | 8.0 | 42 |
| `/areas-we-serve/white-bear-lake/personal-injury` | White Bear Lake | personal-injury | 16 | 2 | 0 | 9.5 | 42 |
| `/areas-we-serve/anoka` | Anoka | hub | 19 | 2 | 0 | 10.0 | 36 |
| `/areas-we-serve/anoka/personal-injury` | Anoka | personal-injury | 19 | 2 | 0 | 18.0 | 36 |
| `/areas-we-serve/medina/adjustments-and-manipulation` | Medina | adjustments-and-manipulation | 17 | 2 | 0 | 2.5 | 35 |
| `/areas-we-serve/medina/common-chiropractic-conditions` | Medina | common-chiropractic-conditions | 17 | 2 | 0 | 48.5 | 35 |
| `/areas-we-serve/arden-hills/custom-foot-orthotics` | Arden Hills | custom-foot-orthotics | 12 | 2 | 0 | 1.5 | 34 |
| `/areas-we-serve/osseo/common-chiropractic-conditions` | Osseo | common-chiropractic-conditions | 14 | 2 | 0 | 46.5 | 34 |
| `/areas-we-serve/osseo/functional-medicine` | Osseo | functional-medicine | 14 | 2 | 0 | 4.5 | 34 |
| `/areas-we-serve/forest-lake` | Forest Lake | hub | 26 | 2 | 0 | 7.0 | 33 |
| `/areas-we-serve/forest-lake/back-pain-treatments` | Forest Lake | back-pain-treatments | 26 | 2 | 0 | 8.0 | 33 |
| `/areas-we-serve/forest-lake/cryotherapy` | Forest Lake | cryotherapy | 26 | 2 | 0 | 5.0 | 33 |
| `/areas-we-serve/forest-lake/degenerative-disc-disease` | Forest Lake | degenerative-disc-disease | 26 | 2 | 0 | 8.5 | 33 |
| `/areas-we-serve/ham-lake/cold-laser-therapy` | Ham Lake | cold-laser-therapy | 22 | 2 | 0 | 25.5 | 33 |
| `/areas-we-serve/ham-lake/custom-foot-orthotics` | Ham Lake | custom-foot-orthotics | 22 | 2 | 1 | 2.0 | 33 |
| `/areas-we-serve/brooklyn-park/cold-laser-therapy` | Brooklyn Park | cold-laser-therapy | 13 | 2 | 0 | 5.0 | 29 |
| `/areas-we-serve/brooklyn-park/cryotherapy` | Brooklyn Park | cryotherapy | 13 | 2 | 0 | 39.0 | 29 |
| `/areas-we-serve/brooklyn-park/degenerative-disc-disease` | Brooklyn Park | degenerative-disc-disease | 13 | 2 | 0 | 6.5 | 29 |
| `/areas-we-serve/brooklyn-park/injuries` | Brooklyn Park | injuries | 13 | 2 | 0 | 25.0 | 29 |
| `/areas-we-serve/brooklyn-park/personal-injury` | Brooklyn Park | personal-injury | 13 | 2 | 0 | 36.5 | 29 |
| `/areas-we-serve/inver-grove-heights/cryotherapy` | Inver Grove Heights | cryotherapy | 18 | 2 | 0 | 3.0 | 27 |
| `/areas-we-serve/columbia-heights/adjustments-and-manipulation` | Columbia Heights | adjustments-and-manipulation | 8 | 2 | 0 | 11.0 | 23 |
| `/areas-we-serve/columbia-heights/back-pain-treatments` | Columbia Heights | back-pain-treatments | 8 | 2 | 0 | 8.5 | 23 |
| `/areas-we-serve/columbia-heights/therapeutic-exercise` | Columbia Heights | therapeutic-exercise | 8 | 2 | 0 | 24.5 | 23 |
| `/areas-we-serve/lauderdale/cryotherapy` | Lauderdale | cryotherapy | 9 | 2 | 0 | 10.0 | 23 |
| `/areas-we-serve/deephaven/adjustments-and-manipulation` | Deephaven | adjustments-and-manipulation | 12 | 2 | 0 | 7.5 | 22 |
| `/areas-we-serve/deephaven/therapeutic-exercise` | Deephaven | therapeutic-exercise | 12 | 2 | 0 | 11.5 | 22 |
| `/areas-we-serve/mounds-view/degenerative-disc-disease` | Mounds View | degenerative-disc-disease | 13 | 2 | 0 | 8.0 | 22 |
| `/areas-we-serve/farmington` | Farmington | hub | 25 | 2 | 0 | 12.0 | 21 |
| `/areas-we-serve/farmington/alternative-medicine` | Farmington | alternative-medicine | 25 | 2 | 0 | 42.0 | 21 |
| `/areas-we-serve/farmington/functional-medicine` | Farmington | functional-medicine | 25 | 2 | 0 | 2.0 | 21 |
| `/areas-we-serve/hugo/alternative-medicine` | Hugo | alternative-medicine | 21 | 2 | 0 | 7.5 | 19 |
| `/areas-we-serve/hugo/cold-laser-therapy` | Hugo | cold-laser-therapy | 21 | 2 | 0 | 7.5 | 19 |
| `/areas-we-serve/north-oaks/adjustments-and-manipulation` | North Oaks | adjustments-and-manipulation | 14 | 2 | 0 | 5.0 | 19 |
| `/areas-we-serve/bayport/injuries` | Bayport | injuries | 23 | 2 | 0 | 10.5 | 18 |
| `/areas-we-serve/mahtomedi/alternative-medicine` | Mahtomedi | alternative-medicine | 18 | 2 | 0 | 7.0 | 18 |
| `/areas-we-serve/mendota-heights/adjustments-and-manipulation` | Mendota Heights | adjustments-and-manipulation | 14 | 2 | 0 | 13.0 | 18 |
| `/areas-we-serve/mendota-heights/alternative-medicine` | Mendota Heights | alternative-medicine | 14 | 2 | 0 | 7.5 | 18 |
| `/areas-we-serve/mendota-heights/custom-foot-orthotics` | Mendota Heights | custom-foot-orthotics | 14 | 2 | 0 | 3.0 | 18 |
| `/areas-we-serve/mendota-heights/injuries` | Mendota Heights | injuries | 14 | 2 | 0 | 27.0 | 18 |
| `/areas-we-serve/centerville/injuries` | Centerville | injuries | 22 | 2 | 0 | 9.0 | 16 |
| `/areas-we-serve/south-saint-paul/injuries` | South Saint Paul | injuries | 14 | 2 | 0 | 11.0 | 16 |
| `/areas-we-serve/south-saint-paul/therapeutic-exercise` | South Saint Paul | therapeutic-exercise | 14 | 2 | 0 | 42.0 | 16 |
| `/areas-we-serve/lino-lakes/injuries` | Lino Lakes | injuries | 21 | 2 | 0 | 9.5 | 15 |
| `/areas-we-serve/long-lake/degenerative-disc-disease` | Long Lake | degenerative-disc-disease | 14 | 2 | 0 | 28.5 | 15 |
| `/areas-we-serve/long-lake/functional-medicine` | Long Lake | functional-medicine | 14 | 2 | 0 | 2.0 | 15 |
| `/areas-we-serve/long-lake/injuries` | Long Lake | injuries | 14 | 2 | 0 | 7.5 | 15 |
| `/areas-we-serve/long-lake/personal-injury` | Long Lake | personal-injury | 14 | 2 | 0 | 88.0 | 15 |
| `/areas-we-serve/vadnais-heights/injuries` | Vadnais Heights | injuries | 14 | 2 | 0 | 9.0 | 13 |
| `/areas-we-serve/west-saint-paul` | West Saint Paul | hub | 13 | 2 | 0 | 55.0 | 12 |
| `/areas-we-serve/west-saint-paul/alternative-medicine` | West Saint Paul | alternative-medicine | 13 | 2 | 0 | 8.5 | 12 |
| `/areas-we-serve/tonka-bay` | Tonka Bay | hub | 13 | 2 | 0 | 6.0 | 11 |
| `/areas-we-serve/tonka-bay/back-pain-treatments` | Tonka Bay | back-pain-treatments | 13 | 2 | 0 | 23.5 | 11 |
| `/areas-we-serve/tonka-bay/injuries` | Tonka Bay | injuries | 13 | 2 | 0 | 9.0 | 11 |
| `/areas-we-serve/maple-plain/personal-injury` | Maple Plain | personal-injury | 19 | 2 | 0 | 31.5 | 9 |
| `/areas-we-serve/north-saint-paul/custom-foot-orthotics` | North Saint Paul | custom-foot-orthotics | 14 | 2 | 0 | 19.0 | 9 |
| `/areas-we-serve/minnetonka-beach/cryotherapy` | Minnetonka Beach | cryotherapy | 14 | 2 | 0 | 7.5 | 8 |
| `/areas-we-serve/champlin/adjustments-and-manipulation` | Champlin | adjustments-and-manipulation | 18 | 1 | 0 | 2.0 | 428 |
| `/areas-we-serve/champlin/degenerative-disc-disease` | Champlin | degenerative-disc-disease | 18 | 1 | 0 | 12.0 | 428 |
| `/areas-we-serve/blaine/cold-laser-therapy` | Blaine | cold-laser-therapy | 18 | 1 | 0 | 8.0 | 391 |
| `/areas-we-serve/cottage-grove` | Cottage Grove | hub | 23 | 1 | 0 | 10.0 | 348 |
| `/areas-we-serve/cottage-grove/cold-laser-therapy` | Cottage Grove | cold-laser-therapy | 23 | 1 | 0 | 13.0 | 348 |
| `/areas-we-serve/cottage-grove/cryotherapy` | Cottage Grove | cryotherapy | 23 | 1 | 0 | 3.0 | 348 |
| `/areas-we-serve/cottage-grove/ice-pack-cryotherapy` | Cottage Grove | ice-pack-cryotherapy | 23 | 1 | 0 | 8.0 | 348 |
| `/areas-we-serve/andover/ice-pack-cryotherapy` | Andover | ice-pack-cryotherapy | 21 | 1 | 0 | 10.0 | 256 |
| `/areas-we-serve/wayzata/cold-laser-therapy` | Wayzata | cold-laser-therapy | 11 | 1 | 0 | 11.0 | 252 |
| `/areas-we-serve/wayzata/common-chiropractic-conditions` | Wayzata | common-chiropractic-conditions | 11 | 1 | 0 | 59.0 | 252 |
| `/areas-we-serve/wayzata/cryotherapy` | Wayzata | cryotherapy | 11 | 1 | 0 | 2.0 | 252 |
| `/areas-we-serve/wayzata/ice-pack-cryotherapy` | Wayzata | ice-pack-cryotherapy | 11 | 1 | 0 | 8.0 | 252 |
| `/areas-we-serve/wayzata/injuries` | Wayzata | injuries | 11 | 1 | 0 | 6.0 | 252 |
| `/areas-we-serve/wayzata/therapeutic-exercise` | Wayzata | therapeutic-exercise | 11 | 1 | 0 | 10.0 | 252 |
| `/areas-we-serve/bloomington/cold-laser-therapy` | Bloomington | cold-laser-therapy | 7 | 1 | 0 | 9.0 | 242 |
| `/areas-we-serve/richfield/adjustments-and-manipulation` | Richfield | adjustments-and-manipulation | 6 | 1 | 0 | 21.0 | 240 |
| `/areas-we-serve/richfield/common-chiropractic-conditions` | Richfield | common-chiropractic-conditions | 6 | 1 | 0 | 12.0 | 240 |
| `/areas-we-serve/richfield/cryotherapy` | Richfield | cryotherapy | 6 | 1 | 0 | 3.0 | 240 |
| `/areas-we-serve/richfield/ice-pack-cryotherapy` | Richfield | ice-pack-cryotherapy | 6 | 1 | 0 | 11.0 | 240 |
| `/areas-we-serve/richfield/injuries` | Richfield | injuries | 6 | 1 | 0 | 8.0 | 240 |
| `/areas-we-serve/burnsville/alternative-medicine` | Burnsville | alternative-medicine | 14 | 1 | 0 | 6.0 | 209 |
| `/areas-we-serve/burnsville/custom-foot-orthotics` | Burnsville | custom-foot-orthotics | 14 | 1 | 0 | 11.0 | 209 |
| `/areas-we-serve/burnsville/ice-pack-cryotherapy` | Burnsville | ice-pack-cryotherapy | 14 | 1 | 0 | 8.0 | 209 |
| `/areas-we-serve/edina/common-chiropractic-conditions` | Edina | common-chiropractic-conditions | 3 | 1 | 0 | 10.0 | 161 |
| `/areas-we-serve/minneapolis/alternative-medicine` | Minneapolis | alternative-medicine | 5 | 1 | 0 | 7.0 | 155 |
| `/areas-we-serve/minneapolis/back-pain-treatments` | Minneapolis | back-pain-treatments | 5 | 1 | 0 | 18.0 | 155 |
| `/areas-we-serve/minneapolis/functional-medicine` | Minneapolis | functional-medicine | 5 | 1 | 0 | 11.0 | 155 |
| `/areas-we-serve/minneapolis/personal-injury` | Minneapolis | personal-injury | 5 | 1 | 0 | 4.0 | 155 |
| `/areas-we-serve/maplewood/alternative-medicine` | Maplewood | alternative-medicine | 13 | 1 | 0 | 7.0 | 153 |
| `/areas-we-serve/maplewood/cryotherapy` | Maplewood | cryotherapy | 13 | 1 | 0 | 3.0 | 153 |
| `/areas-we-serve/roseville` | Roseville | hub | 9 | 1 | 0 | 3.0 | 153 |
| `/areas-we-serve/roseville/cold-laser-therapy` | Roseville | cold-laser-therapy | 9 | 1 | 0 | 2.0 | 153 |
| `/areas-we-serve/roseville/cryotherapy` | Roseville | cryotherapy | 9 | 1 | 0 | 12.0 | 153 |
| `/areas-we-serve/fridley/alternative-medicine` | Fridley | alternative-medicine | 11 | 1 | 0 | 2.0 | 151 |
| `/areas-we-serve/fridley/common-chiropractic-conditions` | Fridley | common-chiropractic-conditions | 11 | 1 | 0 | 4.0 | 151 |
| `/areas-we-serve/fridley/ice-pack-cryotherapy` | Fridley | ice-pack-cryotherapy | 11 | 1 | 0 | 10.0 | 151 |
| `/areas-we-serve/savage/adjustments-and-manipulation` | Savage | adjustments-and-manipulation | 14 | 1 | 0 | 2.0 | 144 |
| `/areas-we-serve/newport/adjustments-and-manipulation` | Newport | adjustments-and-manipulation | 18 | 1 | 0 | 6.0 | 142 |
| `/areas-we-serve/newport/cryotherapy` | Newport | cryotherapy | 18 | 1 | 0 | 7.0 | 142 |
| `/areas-we-serve/newport/functional-medicine` | Newport | functional-medicine | 18 | 1 | 0 | 1.0 | 142 |
| `/areas-we-serve/shakopee/adjustments-and-manipulation` | Shakopee | adjustments-and-manipulation | 17 | 1 | 0 | 8.0 | 127 |
| `/areas-we-serve/golden-valley/ice-pack-cryotherapy` | Golden Valley | ice-pack-cryotherapy | 4 | 1 | 0 | 10.0 | 123 |
| `/areas-we-serve/golden-valley/injuries` | Golden Valley | injuries | 4 | 1 | 0 | 11.0 | 123 |
| `/areas-we-serve/victoria` | Victoria | hub | 17 | 1 | 0 | 12.0 | 121 |
| `/areas-we-serve/crystal/alternative-medicine` | Crystal | alternative-medicine | 8 | 1 | 0 | 9.0 | 109 |
| `/areas-we-serve/crystal/custom-foot-orthotics` | Crystal | custom-foot-orthotics | 8 | 1 | 0 | 6.0 | 109 |
| `/areas-we-serve/crystal/therapeutic-exercise` | Crystal | therapeutic-exercise | 8 | 1 | 0 | 10.0 | 109 |
| `/areas-we-serve/prior-lake/adjustments-and-manipulation` | Prior Lake | adjustments-and-manipulation | 17 | 1 | 0 | 6.0 | 106 |
| `/areas-we-serve/prior-lake/alternative-medicine` | Prior Lake | alternative-medicine | 17 | 1 | 0 | 9.0 | 106 |
| `/areas-we-serve/coon-rapids/common-chiropractic-conditions` | Coon Rapids | common-chiropractic-conditions | 18 | 1 | 0 | 10.0 | 104 |
| `/areas-we-serve/saint-louis-park/common-chiropractic-conditions` | Saint Louis Park | common-chiropractic-conditions | 0 | 1 | 0 | 41.0 | 95 |
| `/areas-we-serve/lake-elmo` | Lake Elmo | hub | 18 | 1 | 0 | 6.0 | 91 |
| `/areas-we-serve/lake-elmo/therapeutic-exercise` | Lake Elmo | therapeutic-exercise | 18 | 1 | 0 | 17.0 | 91 |
| `/areas-we-serve/minnetonka/ice-pack-cryotherapy` | Minnetonka | ice-pack-cryotherapy | 7 | 1 | 0 | 4.0 | 86 |
| `/areas-we-serve/minnetonka/injuries` | Minnetonka | injuries | 7 | 1 | 0 | 10.0 | 86 |
| `/areas-we-serve/minnetonka/therapeutic-exercise` | Minnetonka | therapeutic-exercise | 7 | 1 | 0 | 5.0 | 86 |
| `/areas-we-serve/eagan` | Eagan | hub | 14 | 1 | 0 | 4.0 | 85 |
| `/areas-we-serve/eagan/ice-pack-cryotherapy` | Eagan | ice-pack-cryotherapy | 14 | 1 | 0 | 12.0 | 85 |
| `/areas-we-serve/apple-valley/personal-injury` | Apple Valley | personal-injury | 17 | 1 | 0 | 20.0 | 84 |
| `/areas-we-serve/stillwater/adjustments-and-manipulation` | Stillwater | adjustments-and-manipulation | 22 | 1 | 0 | 10.0 | 83 |
| `/areas-we-serve/stillwater/degenerative-disc-disease` | Stillwater | degenerative-disc-disease | 22 | 1 | 0 | 8.0 | 83 |
| `/areas-we-serve/hopkins/back-pain-treatments` | Hopkins | back-pain-treatments | 4 | 1 | 0 | 11.0 | 64 |
| `/areas-we-serve/hopkins/custom-foot-orthotics` | Hopkins | custom-foot-orthotics | 4 | 1 | 0 | 2.0 | 64 |
| `/areas-we-serve/new-hope/injuries` | New Hope | injuries | 9 | 1 | 0 | 48.0 | 60 |
| `/areas-we-serve/robbinsdale/alternative-medicine` | Robbinsdale | alternative-medicine | 7 | 1 | 0 | 6.0 | 60 |
| `/areas-we-serve/robbinsdale/degenerative-disc-disease` | Robbinsdale | degenerative-disc-disease | 7 | 1 | 0 | 8.0 | 60 |
| `/areas-we-serve/robbinsdale/injuries` | Robbinsdale | injuries | 7 | 1 | 0 | 11.0 | 60 |
| `/areas-we-serve/excelsior/adjustments-and-manipulation` | Excelsior | adjustments-and-manipulation | 13 | 1 | 0 | 16.0 | 58 |
| `/areas-we-serve/excelsior/cryotherapy` | Excelsior | cryotherapy | 13 | 1 | 0 | 6.0 | 58 |
| `/areas-we-serve/oakdale/ice-pack-cryotherapy` | Oakdale | ice-pack-cryotherapy | 16 | 1 | 0 | 5.0 | 58 |
| `/areas-we-serve/oakdale/injuries` | Oakdale | injuries | 16 | 1 | 0 | 10.0 | 58 |
| `/areas-we-serve/woodbury/common-chiropractic-conditions` | Woodbury | common-chiropractic-conditions | 18 | 1 | 0 | 11.0 | 57 |
| `/areas-we-serve/woodbury/personal-injury` | Woodbury | personal-injury | 18 | 1 | 0 | 15.0 | 57 |
| `/areas-we-serve/woodbury/therapeutic-exercise` | Woodbury | therapeutic-exercise | 18 | 1 | 0 | 33.0 | 57 |
| `/areas-we-serve/shoreview/alternative-medicine` | Shoreview | alternative-medicine | 14 | 1 | 0 | 10.0 | 54 |
| `/areas-we-serve/shoreview/common-chiropractic-conditions` | Shoreview | common-chiropractic-conditions | 14 | 1 | 0 | 8.0 | 54 |
| `/areas-we-serve/shoreview/injuries` | Shoreview | injuries | 14 | 1 | 0 | 10.0 | 54 |
| `/areas-we-serve/shoreview/therapeutic-exercise` | Shoreview | therapeutic-exercise | 14 | 1 | 0 | 12.0 | 54 |
| `/areas-we-serve/rosemount/cold-laser-therapy` | Rosemount | cold-laser-therapy | 22 | 1 | 0 | 3.0 | 53 |
| `/areas-we-serve/rosemount/functional-medicine` | Rosemount | functional-medicine | 22 | 1 | 0 | 2.0 | 53 |
| `/areas-we-serve/rosemount/injuries` | Rosemount | injuries | 22 | 1 | 0 | 12.0 | 53 |
| `/areas-we-serve/brooklyn-center/cryotherapy` | Brooklyn Center | cryotherapy | 9 | 1 | 0 | 8.0 | 51 |
| `/areas-we-serve/brooklyn-center/injuries` | Brooklyn Center | injuries | 9 | 1 | 0 | 5.0 | 51 |
| `/areas-we-serve/brooklyn-center/personal-injury` | Brooklyn Center | personal-injury | 9 | 1 | 0 | 16.0 | 51 |
| `/areas-we-serve/eden-prairie/adjustments-and-manipulation` | Eden Prairie | adjustments-and-manipulation | 10 | 1 | 0 | 6.0 | 50 |
| `/areas-we-serve/eden-prairie/cryotherapy` | Eden Prairie | cryotherapy | 10 | 1 | 0 | 4.0 | 50 |
| `/areas-we-serve/mound/therapeutic-exercise` | Mound | therapeutic-exercise | 17 | 1 | 0 | 6.0 | 48 |
| `/areas-we-serve/orono/therapeutic-exercise` | Orono | therapeutic-exercise | 14 | 1 | 0 | 10.0 | 45 |
| `/areas-we-serve/spring-lake-park/cold-laser-therapy` | Spring Lake Park | cold-laser-therapy | 15 | 1 | 0 | 3.0 | 45 |
| `/areas-we-serve/chaska/back-pain-treatments` | Chaska | back-pain-treatments | 17 | 1 | 0 | 8.0 | 44 |
| `/areas-we-serve/chaska/cryotherapy` | Chaska | cryotherapy | 17 | 1 | 0 | 2.0 | 44 |
| `/areas-we-serve/chaska/custom-foot-orthotics` | Chaska | custom-foot-orthotics | 17 | 1 | 0 | 9.0 | 44 |
| `/areas-we-serve/chaska/personal-injury` | Chaska | personal-injury | 17 | 1 | 0 | 5.0 | 44 |
| `/areas-we-serve/saint-paul/back-pain-treatments` | Saint Paul | back-pain-treatments | 12 | 1 | 0 | 33.0 | 44 |
| `/areas-we-serve/white-bear-lake/common-chiropractic-conditions` | White Bear Lake | common-chiropractic-conditions | 16 | 1 | 0 | 1.0 | 42 |
| `/areas-we-serve/white-bear-lake/ice-pack-cryotherapy` | White Bear Lake | ice-pack-cryotherapy | 16 | 1 | 0 | 5.0 | 42 |
| `/areas-we-serve/white-bear-lake/injuries` | White Bear Lake | injuries | 16 | 1 | 0 | 6.0 | 42 |
| `/areas-we-serve/plymouth/adjustments-and-manipulation` | Plymouth | adjustments-and-manipulation | 9 | 1 | 0 | 3.0 | 41 |
| `/areas-we-serve/plymouth/cryotherapy` | Plymouth | cryotherapy | 9 | 1 | 0 | 3.0 | 41 |
| `/areas-we-serve/plymouth/ice-pack-cryotherapy` | Plymouth | ice-pack-cryotherapy | 9 | 1 | 0 | 9.0 | 41 |
| `/areas-we-serve/anoka/adjustments-and-manipulation` | Anoka | adjustments-and-manipulation | 19 | 1 | 0 | 9.0 | 36 |
| `/areas-we-serve/anoka/alternative-medicine` | Anoka | alternative-medicine | 19 | 1 | 0 | 5.0 | 36 |
| `/areas-we-serve/anoka/cryotherapy` | Anoka | cryotherapy | 19 | 1 | 0 | 5.0 | 36 |
| `/areas-we-serve/anoka/degenerative-disc-disease` | Anoka | degenerative-disc-disease | 19 | 1 | 1 | 4.0 | 36 |
| `/areas-we-serve/medina/custom-foot-orthotics` | Medina | custom-foot-orthotics | 17 | 1 | 0 | 2.0 | 35 |
| `/areas-we-serve/medina/personal-injury` | Medina | personal-injury | 17 | 1 | 0 | 18.0 | 35 |
| `/areas-we-serve/arden-hills/cryotherapy` | Arden Hills | cryotherapy | 12 | 1 | 0 | 26.0 | 34 |
| `/areas-we-serve/arden-hills/therapeutic-exercise` | Arden Hills | therapeutic-exercise | 12 | 1 | 0 | 25.0 | 34 |
| `/areas-we-serve/osseo` | Osseo | hub | 14 | 1 | 0 | 7.0 | 34 |
| `/areas-we-serve/osseo/adjustments-and-manipulation` | Osseo | adjustments-and-manipulation | 14 | 1 | 0 | 8.0 | 34 |
| `/areas-we-serve/osseo/custom-foot-orthotics` | Osseo | custom-foot-orthotics | 14 | 1 | 0 | 6.0 | 34 |
| `/areas-we-serve/osseo/degenerative-disc-disease` | Osseo | degenerative-disc-disease | 14 | 1 | 0 | 11.0 | 34 |
| `/areas-we-serve/osseo/ice-pack-cryotherapy` | Osseo | ice-pack-cryotherapy | 14 | 1 | 0 | 2.0 | 34 |
| `/areas-we-serve/osseo/personal-injury` | Osseo | personal-injury | 14 | 1 | 0 | 26.0 | 34 |
| `/areas-we-serve/forest-lake/cold-laser-therapy` | Forest Lake | cold-laser-therapy | 26 | 1 | 0 | 6.0 | 33 |
| `/areas-we-serve/forest-lake/common-chiropractic-conditions` | Forest Lake | common-chiropractic-conditions | 26 | 1 | 0 | 4.0 | 33 |
| `/areas-we-serve/forest-lake/ice-pack-cryotherapy` | Forest Lake | ice-pack-cryotherapy | 26 | 1 | 0 | 5.0 | 33 |
| `/areas-we-serve/forest-lake/therapeutic-exercise` | Forest Lake | therapeutic-exercise | 26 | 1 | 0 | 7.0 | 33 |
| `/areas-we-serve/ham-lake` | Ham Lake | hub | 22 | 1 | 0 | 7.0 | 33 |
| `/areas-we-serve/ham-lake/adjustments-and-manipulation` | Ham Lake | adjustments-and-manipulation | 22 | 1 | 0 | 9.0 | 33 |
| `/areas-we-serve/ham-lake/cryotherapy` | Ham Lake | cryotherapy | 22 | 1 | 0 | 2.0 | 33 |
| `/areas-we-serve/ham-lake/degenerative-disc-disease` | Ham Lake | degenerative-disc-disease | 22 | 1 | 0 | 10.0 | 33 |
| `/areas-we-serve/ham-lake/ice-pack-cryotherapy` | Ham Lake | ice-pack-cryotherapy | 22 | 1 | 0 | 5.0 | 33 |
| `/areas-we-serve/brooklyn-park` | Brooklyn Park | hub | 13 | 1 | 0 | 6.0 | 29 |
| `/areas-we-serve/brooklyn-park/ice-pack-cryotherapy` | Brooklyn Park | ice-pack-cryotherapy | 13 | 1 | 0 | 7.0 | 29 |
| `/areas-we-serve/inver-grove-heights/back-pain-treatments` | Inver Grove Heights | back-pain-treatments | 18 | 1 | 0 | 10.0 | 27 |
| `/areas-we-serve/inver-grove-heights/common-chiropractic-conditions` | Inver Grove Heights | common-chiropractic-conditions | 18 | 1 | 0 | 11.0 | 27 |
| `/areas-we-serve/inver-grove-heights/injuries` | Inver Grove Heights | injuries | 18 | 1 | 0 | 8.0 | 27 |
| `/areas-we-serve/inver-grove-heights/personal-injury` | Inver Grove Heights | personal-injury | 18 | 1 | 0 | 8.0 | 27 |
| `/areas-we-serve/shorewood/alternative-medicine` | Shorewood | alternative-medicine | 13 | 1 | 0 | 8.0 | 25 |
| `/areas-we-serve/shorewood/cryotherapy` | Shorewood | cryotherapy | 13 | 1 | 0 | 7.0 | 25 |
| `/areas-we-serve/shorewood/degenerative-disc-disease` | Shorewood | degenerative-disc-disease | 13 | 1 | 0 | 34.0 | 25 |
| `/areas-we-serve/shorewood/therapeutic-exercise` | Shorewood | therapeutic-exercise | 13 | 1 | 0 | 4.0 | 25 |
| `/areas-we-serve/chanhassen` | Chanhassen | hub | 14 | 1 | 0 | 11.0 | 24 |
| `/areas-we-serve/chanhassen/cold-laser-therapy` | Chanhassen | cold-laser-therapy | 14 | 1 | 0 | 4.0 | 24 |
| `/areas-we-serve/chanhassen/custom-foot-orthotics` | Chanhassen | custom-foot-orthotics | 14 | 1 | 0 | 8.0 | 24 |
| `/areas-we-serve/chanhassen/personal-injury` | Chanhassen | personal-injury | 14 | 1 | 0 | 27.0 | 24 |
| `/areas-we-serve/columbia-heights/custom-foot-orthotics` | Columbia Heights | custom-foot-orthotics | 8 | 1 | 0 | 6.0 | 23 |
| `/areas-we-serve/lauderdale/back-pain-treatments` | Lauderdale | back-pain-treatments | 9 | 1 | 0 | 9.0 | 23 |
| `/areas-we-serve/lauderdale/cold-laser-therapy` | Lauderdale | cold-laser-therapy | 9 | 1 | 0 | 3.0 | 23 |
| `/areas-we-serve/lauderdale/ice-pack-cryotherapy` | Lauderdale | ice-pack-cryotherapy | 9 | 1 | 0 | 10.0 | 23 |
| `/areas-we-serve/lauderdale/injuries` | Lauderdale | injuries | 9 | 1 | 0 | 10.0 | 23 |
| `/areas-we-serve/lauderdale/therapeutic-exercise` | Lauderdale | therapeutic-exercise | 9 | 1 | 0 | 3.0 | 23 |
| `/areas-we-serve/deephaven/back-pain-treatments` | Deephaven | back-pain-treatments | 12 | 1 | 0 | 36.0 | 22 |
| `/areas-we-serve/deephaven/custom-foot-orthotics` | Deephaven | custom-foot-orthotics | 12 | 1 | 0 | 6.0 | 22 |
| `/areas-we-serve/deephaven/functional-medicine` | Deephaven | functional-medicine | 12 | 1 | 0 | 20.0 | 22 |
| `/areas-we-serve/mounds-view/adjustments-and-manipulation` | Mounds View | adjustments-and-manipulation | 13 | 1 | 0 | 10.0 | 22 |
| `/areas-we-serve/mounds-view/back-pain-treatments` | Mounds View | back-pain-treatments | 13 | 1 | 0 | 4.0 | 22 |
| `/areas-we-serve/mounds-view/custom-foot-orthotics` | Mounds View | custom-foot-orthotics | 13 | 1 | 0 | 2.0 | 22 |
| `/areas-we-serve/farmington/adjustments-and-manipulation` | Farmington | adjustments-and-manipulation | 25 | 1 | 0 | 11.0 | 21 |
| `/areas-we-serve/farmington/back-pain-treatments` | Farmington | back-pain-treatments | 25 | 1 | 0 | 3.0 | 21 |
| `/areas-we-serve/farmington/injuries` | Farmington | injuries | 25 | 1 | 0 | 26.0 | 21 |
| `/areas-we-serve/hugo` | Hugo | hub | 21 | 1 | 0 | 8.0 | 19 |
| `/areas-we-serve/hugo/cryotherapy` | Hugo | cryotherapy | 21 | 1 | 0 | 1.0 | 19 |
| `/areas-we-serve/hugo/ice-pack-cryotherapy` | Hugo | ice-pack-cryotherapy | 21 | 1 | 0 | 2.0 | 19 |
| `/areas-we-serve/north-oaks/alternative-medicine` | North Oaks | alternative-medicine | 14 | 1 | 0 | 3.0 | 19 |
| `/areas-we-serve/saint-paul-park/common-chiropractic-conditions` | Saint Paul Park | common-chiropractic-conditions | 20 | 1 | 0 | 6.0 | 19 |
| `/areas-we-serve/saint-paul-park/degenerative-disc-disease` | Saint Paul Park | degenerative-disc-disease | 20 | 1 | 0 | 8.0 | 19 |
| `/areas-we-serve/bayport/cryotherapy` | Bayport | cryotherapy | 23 | 1 | 0 | 62.0 | 18 |
| `/areas-we-serve/bayport/degenerative-disc-disease` | Bayport | degenerative-disc-disease | 23 | 1 | 0 | 9.0 | 18 |
| `/areas-we-serve/bayport/personal-injury` | Bayport | personal-injury | 23 | 1 | 0 | 8.0 | 18 |
| `/areas-we-serve/mahtomedi/adjustments-and-manipulation` | Mahtomedi | adjustments-and-manipulation | 18 | 1 | 0 | 9.0 | 18 |
| `/areas-we-serve/mahtomedi/personal-injury` | Mahtomedi | personal-injury | 18 | 1 | 0 | 8.0 | 18 |
| `/areas-we-serve/mendota-heights/personal-injury` | Mendota Heights | personal-injury | 14 | 1 | 0 | 44.0 | 18 |
| `/areas-we-serve/centerville/adjustments-and-manipulation` | Centerville | adjustments-and-manipulation | 22 | 1 | 0 | 18.0 | 16 |
| `/areas-we-serve/south-saint-paul/degenerative-disc-disease` | South Saint Paul | degenerative-disc-disease | 14 | 1 | 0 | 37.0 | 16 |
| `/areas-we-serve/south-saint-paul/functional-medicine` | South Saint Paul | functional-medicine | 14 | 1 | 0 | 11.0 | 16 |
| `/areas-we-serve/south-saint-paul/ice-pack-cryotherapy` | South Saint Paul | ice-pack-cryotherapy | 14 | 1 | 0 | 6.0 | 16 |
| `/areas-we-serve/south-saint-paul/personal-injury` | South Saint Paul | personal-injury | 14 | 1 | 0 | 8.0 | 16 |
| `/areas-we-serve/lino-lakes` | Lino Lakes | hub | 21 | 1 | 0 | 5.0 | 15 |
| `/areas-we-serve/lino-lakes/common-chiropractic-conditions` | Lino Lakes | common-chiropractic-conditions | 21 | 1 | 0 | 16.0 | 15 |
| `/areas-we-serve/lino-lakes/cryotherapy` | Lino Lakes | cryotherapy | 21 | 1 | 0 | 2.0 | 15 |
| `/areas-we-serve/lino-lakes/degenerative-disc-disease` | Lino Lakes | degenerative-disc-disease | 21 | 1 | 0 | 10.0 | 15 |
| `/areas-we-serve/lino-lakes/ice-pack-cryotherapy` | Lino Lakes | ice-pack-cryotherapy | 21 | 1 | 0 | 5.0 | 15 |
| `/areas-we-serve/vadnais-heights/back-pain-treatments` | Vadnais Heights | back-pain-treatments | 14 | 1 | 0 | 6.0 | 13 |
| `/areas-we-serve/vadnais-heights/cold-laser-therapy` | Vadnais Heights | cold-laser-therapy | 14 | 1 | 0 | 39.0 | 13 |
| `/areas-we-serve/vadnais-heights/custom-foot-orthotics` | Vadnais Heights | custom-foot-orthotics | 14 | 1 | 0 | 6.0 | 13 |
| `/areas-we-serve/vadnais-heights/functional-medicine` | Vadnais Heights | functional-medicine | 14 | 1 | 0 | 10.0 | 13 |
| `/areas-we-serve/west-saint-paul/degenerative-disc-disease` | West Saint Paul | degenerative-disc-disease | 13 | 1 | 0 | 20.0 | 12 |
| `/areas-we-serve/west-saint-paul/functional-medicine` | West Saint Paul | functional-medicine | 13 | 1 | 0 | 32.0 | 12 |
| `/areas-we-serve/tonka-bay/adjustments-and-manipulation` | Tonka Bay | adjustments-and-manipulation | 13 | 1 | 0 | 1.0 | 11 |
| `/areas-we-serve/maple-plain` | Maple Plain | hub | 19 | 1 | 0 | 9.0 | 9 |
| `/areas-we-serve/maple-plain/common-chiropractic-conditions` | Maple Plain | common-chiropractic-conditions | 19 | 1 | 0 | 35.0 | 9 |
| `/areas-we-serve/maple-plain/custom-foot-orthotics` | Maple Plain | custom-foot-orthotics | 19 | 1 | 0 | 2.0 | 9 |
| `/areas-we-serve/north-saint-paul` | North Saint Paul | hub | 14 | 1 | 0 | 91.0 | 9 |
| `/areas-we-serve/north-saint-paul/adjustments-and-manipulation` | North Saint Paul | adjustments-and-manipulation | 14 | 1 | 0 | 15.0 | 9 |
| `/areas-we-serve/north-saint-paul/degenerative-disc-disease` | North Saint Paul | degenerative-disc-disease | 14 | 1 | 0 | 5.0 | 9 |
| `/areas-we-serve/spring-park/injuries` | Spring Park | injuries | 16 | 1 | 0 | 30.0 | 9 |
| `/areas-we-serve/spring-park/personal-injury` | Spring Park | personal-injury | 16 | 1 | 0 | 10.0 | 9 |
| `/areas-we-serve/saint-anthony/back-pain-treatments` | Saint Anthony | back-pain-treatments | 8 | 1 | 0 | 20.0 | 8 |
| `/areas-we-serve/saint-anthony/injuries` | Saint Anthony | injuries | 8 | 1 | 0 | 11.0 | 8 |
| `/areas-we-serve/andover` | Andover | hub | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/wayzata` | Wayzata | hub | 11 | 0 | 0 |  | 252 |
| `/areas-we-serve/burnsville` | Burnsville | hub | 14 | 0 | 0 |  | 209 |
| `/areas-we-serve/minnetonka` | Minnetonka | hub | 7 | 0 | 0 |  | 86 |
| `/areas-we-serve/woodbury` | Woodbury | hub | 18 | 0 | 0 |  | 57 |
| `/areas-we-serve/rosemount` | Rosemount | hub | 22 | 0 | 0 |  | 53 |
| `/areas-we-serve/saint-paul` | Saint Paul | hub | 12 | 0 | 0 |  | 44 |
| `/areas-we-serve/plymouth` | Plymouth | hub | 9 | 0 | 0 |  | 41 |
| `/areas-we-serve/minnetonka-beach` | Minnetonka Beach | hub | 14 | 0 | 0 |  | 8 |

## Consolidate later — 301 to the city hub

Each row would redirect to `/areas-we-serve/{city-slug}` (the hub in the same city), not to another service and not to the homepage.

| URL | City | Page | Miles | Impressions | Clicks | Position | City total |
|---|---|---|---:|---:|---:|---:|---:|
| `/areas-we-serve/champlin/cold-laser-therapy` | Champlin | cold-laser-therapy | 18 | 0 | 0 |  | 428 |
| `/areas-we-serve/champlin/cryotherapy` | Champlin | cryotherapy | 18 | 0 | 0 |  | 428 |
| `/areas-we-serve/champlin/custom-foot-orthotics` | Champlin | custom-foot-orthotics | 18 | 0 | 0 |  | 428 |
| `/areas-we-serve/champlin/ice-pack-cryotherapy` | Champlin | ice-pack-cryotherapy | 18 | 0 | 0 |  | 428 |
| `/areas-we-serve/champlin/personal-injury` | Champlin | personal-injury | 18 | 0 | 0 |  | 428 |
| `/areas-we-serve/blaine/cryotherapy` | Blaine | cryotherapy | 18 | 0 | 0 |  | 391 |
| `/areas-we-serve/blaine/personal-injury` | Blaine | personal-injury | 18 | 0 | 0 |  | 391 |
| `/areas-we-serve/blaine/therapeutic-exercise` | Blaine | therapeutic-exercise | 18 | 0 | 0 |  | 391 |
| `/areas-we-serve/cottage-grove/common-chiropractic-conditions` | Cottage Grove | common-chiropractic-conditions | 23 | 0 | 0 |  | 348 |
| `/areas-we-serve/cottage-grove/injuries` | Cottage Grove | injuries | 23 | 0 | 0 |  | 348 |
| `/areas-we-serve/cottage-grove/personal-injury` | Cottage Grove | personal-injury | 23 | 0 | 0 |  | 348 |
| `/areas-we-serve/cottage-grove/therapeutic-exercise` | Cottage Grove | therapeutic-exercise | 23 | 0 | 0 |  | 348 |
| `/areas-we-serve/andover/adjustments-and-manipulation` | Andover | adjustments-and-manipulation | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/andover/alternative-medicine` | Andover | alternative-medicine | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/andover/cold-laser-therapy` | Andover | cold-laser-therapy | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/andover/cryotherapy` | Andover | cryotherapy | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/andover/therapeutic-exercise` | Andover | therapeutic-exercise | 21 | 0 | 0 |  | 256 |
| `/areas-we-serve/wayzata/alternative-medicine` | Wayzata | alternative-medicine | 11 | 0 | 0 |  | 252 |
| `/areas-we-serve/bloomington/ice-pack-cryotherapy` | Bloomington | ice-pack-cryotherapy | 7 | 0 | 0 |  | 242 |
| `/areas-we-serve/bloomington/injuries` | Bloomington | injuries | 7 | 0 | 0 |  | 242 |
| `/areas-we-serve/bloomington/therapeutic-exercise` | Bloomington | therapeutic-exercise | 7 | 0 | 0 |  | 242 |
| `/areas-we-serve/richfield/degenerative-disc-disease` | Richfield | degenerative-disc-disease | 6 | 0 | 0 |  | 240 |
| `/areas-we-serve/lakeville/common-chiropractic-conditions` | Lakeville | common-chiropractic-conditions | 22 | 0 | 0 |  | 216 |
| `/areas-we-serve/lakeville/therapeutic-exercise` | Lakeville | therapeutic-exercise | 22 | 0 | 0 |  | 216 |
| `/areas-we-serve/burnsville/adjustments-and-manipulation` | Burnsville | adjustments-and-manipulation | 14 | 0 | 0 |  | 209 |
| `/areas-we-serve/burnsville/personal-injury` | Burnsville | personal-injury | 14 | 0 | 0 |  | 209 |
| `/areas-we-serve/burnsville/therapeutic-exercise` | Burnsville | therapeutic-exercise | 14 | 0 | 0 |  | 209 |
| `/areas-we-serve/maple-grove/therapeutic-exercise` | Maple Grove | therapeutic-exercise | 13 | 0 | 0 |  | 185 |
| `/areas-we-serve/new-brighton/adjustments-and-manipulation` | New Brighton | adjustments-and-manipulation | 11 | 0 | 0 |  | 176 |
| `/areas-we-serve/new-brighton/cold-laser-therapy` | New Brighton | cold-laser-therapy | 11 | 0 | 0 |  | 176 |
| `/areas-we-serve/new-brighton/degenerative-disc-disease` | New Brighton | degenerative-disc-disease | 11 | 0 | 0 |  | 176 |
| `/areas-we-serve/edina/personal-injury` | Edina | personal-injury | 3 | 0 | 0 |  | 161 |
| `/areas-we-serve/edina/therapeutic-exercise` | Edina | therapeutic-exercise | 3 | 0 | 0 |  | 161 |
| `/areas-we-serve/minneapolis/common-chiropractic-conditions` | Minneapolis | common-chiropractic-conditions | 5 | 0 | 0 |  | 155 |
| `/areas-we-serve/minneapolis/therapeutic-exercise` | Minneapolis | therapeutic-exercise | 5 | 0 | 0 |  | 155 |
| `/areas-we-serve/maplewood/adjustments-and-manipulation` | Maplewood | adjustments-and-manipulation | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/maplewood/cold-laser-therapy` | Maplewood | cold-laser-therapy | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/maplewood/common-chiropractic-conditions` | Maplewood | common-chiropractic-conditions | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/maplewood/injuries` | Maplewood | injuries | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/maplewood/personal-injury` | Maplewood | personal-injury | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/maplewood/therapeutic-exercise` | Maplewood | therapeutic-exercise | 13 | 0 | 0 |  | 153 |
| `/areas-we-serve/roseville/adjustments-and-manipulation` | Roseville | adjustments-and-manipulation | 9 | 0 | 0 |  | 153 |
| `/areas-we-serve/roseville/ice-pack-cryotherapy` | Roseville | ice-pack-cryotherapy | 9 | 0 | 0 |  | 153 |
| `/areas-we-serve/roseville/therapeutic-exercise` | Roseville | therapeutic-exercise | 9 | 0 | 0 |  | 153 |
| `/areas-we-serve/savage/ice-pack-cryotherapy` | Savage | ice-pack-cryotherapy | 14 | 0 | 0 |  | 144 |
| `/areas-we-serve/savage/personal-injury` | Savage | personal-injury | 14 | 0 | 0 |  | 144 |
| `/areas-we-serve/savage/therapeutic-exercise` | Savage | therapeutic-exercise | 14 | 0 | 0 |  | 144 |
| `/areas-we-serve/newport/alternative-medicine` | Newport | alternative-medicine | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/cold-laser-therapy` | Newport | cold-laser-therapy | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/common-chiropractic-conditions` | Newport | common-chiropractic-conditions | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/custom-foot-orthotics` | Newport | custom-foot-orthotics | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/ice-pack-cryotherapy` | Newport | ice-pack-cryotherapy | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/injuries` | Newport | injuries | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/personal-injury` | Newport | personal-injury | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/newport/therapeutic-exercise` | Newport | therapeutic-exercise | 18 | 0 | 0 |  | 142 |
| `/areas-we-serve/shakopee/cold-laser-therapy` | Shakopee | cold-laser-therapy | 17 | 0 | 0 |  | 127 |
| `/areas-we-serve/shakopee/injuries` | Shakopee | injuries | 17 | 0 | 0 |  | 127 |
| `/areas-we-serve/shakopee/personal-injury` | Shakopee | personal-injury | 17 | 0 | 0 |  | 127 |
| `/areas-we-serve/shakopee/therapeutic-exercise` | Shakopee | therapeutic-exercise | 17 | 0 | 0 |  | 127 |
| `/areas-we-serve/golden-valley/personal-injury` | Golden Valley | personal-injury | 4 | 0 | 0 |  | 123 |
| `/areas-we-serve/golden-valley/therapeutic-exercise` | Golden Valley | therapeutic-exercise | 4 | 0 | 0 |  | 123 |
| `/areas-we-serve/victoria/alternative-medicine` | Victoria | alternative-medicine | 17 | 0 | 0 |  | 121 |
| `/areas-we-serve/victoria/cryotherapy` | Victoria | cryotherapy | 17 | 0 | 0 |  | 121 |
| `/areas-we-serve/victoria/custom-foot-orthotics` | Victoria | custom-foot-orthotics | 17 | 0 | 0 |  | 121 |
| `/areas-we-serve/victoria/ice-pack-cryotherapy` | Victoria | ice-pack-cryotherapy | 17 | 0 | 0 |  | 121 |
| `/areas-we-serve/victoria/injuries` | Victoria | injuries | 17 | 0 | 0 |  | 121 |
| `/areas-we-serve/crystal/cold-laser-therapy` | Crystal | cold-laser-therapy | 8 | 0 | 0 |  | 109 |
| `/areas-we-serve/crystal/degenerative-disc-disease` | Crystal | degenerative-disc-disease | 8 | 0 | 0 |  | 109 |
| `/areas-we-serve/crystal/functional-medicine` | Crystal | functional-medicine | 8 | 0 | 0 |  | 109 |
| `/areas-we-serve/crystal/ice-pack-cryotherapy` | Crystal | ice-pack-cryotherapy | 8 | 0 | 0 |  | 109 |
| `/areas-we-serve/crystal/injuries` | Crystal | injuries | 8 | 0 | 0 |  | 109 |
| `/areas-we-serve/prior-lake/back-pain-treatments` | Prior Lake | back-pain-treatments | 17 | 0 | 0 |  | 106 |
| `/areas-we-serve/prior-lake/personal-injury` | Prior Lake | personal-injury | 17 | 0 | 0 |  | 106 |
| `/areas-we-serve/prior-lake/therapeutic-exercise` | Prior Lake | therapeutic-exercise | 17 | 0 | 0 |  | 106 |
| `/areas-we-serve/coon-rapids/alternative-medicine` | Coon Rapids | alternative-medicine | 18 | 0 | 0 |  | 104 |
| `/areas-we-serve/coon-rapids/degenerative-disc-disease` | Coon Rapids | degenerative-disc-disease | 18 | 0 | 0 |  | 104 |
| `/areas-we-serve/coon-rapids/therapeutic-exercise` | Coon Rapids | therapeutic-exercise | 18 | 0 | 0 |  | 104 |
| `/areas-we-serve/saint-louis-park/ice-pack-cryotherapy` | Saint Louis Park | ice-pack-cryotherapy | 0 | 0 | 0 |  | 95 |
| `/areas-we-serve/saint-louis-park/personal-injury` | Saint Louis Park | personal-injury | 0 | 0 | 0 |  | 95 |
| `/areas-we-serve/lake-elmo/adjustments-and-manipulation` | Lake Elmo | adjustments-and-manipulation | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/lake-elmo/cold-laser-therapy` | Lake Elmo | cold-laser-therapy | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/lake-elmo/common-chiropractic-conditions` | Lake Elmo | common-chiropractic-conditions | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/lake-elmo/custom-foot-orthotics` | Lake Elmo | custom-foot-orthotics | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/lake-elmo/injuries` | Lake Elmo | injuries | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/lake-elmo/personal-injury` | Lake Elmo | personal-injury | 18 | 0 | 0 |  | 91 |
| `/areas-we-serve/minnetonka/common-chiropractic-conditions` | Minnetonka | common-chiropractic-conditions | 7 | 0 | 0 |  | 86 |
| `/areas-we-serve/minnetonka/personal-injury` | Minnetonka | personal-injury | 7 | 0 | 0 |  | 86 |
| `/areas-we-serve/eagan/common-chiropractic-conditions` | Eagan | common-chiropractic-conditions | 14 | 0 | 0 |  | 85 |
| `/areas-we-serve/eagan/personal-injury` | Eagan | personal-injury | 14 | 0 | 0 |  | 85 |
| `/areas-we-serve/apple-valley/adjustments-and-manipulation` | Apple Valley | adjustments-and-manipulation | 17 | 0 | 0 |  | 84 |
| `/areas-we-serve/apple-valley/common-chiropractic-conditions` | Apple Valley | common-chiropractic-conditions | 17 | 0 | 0 |  | 84 |
| `/areas-we-serve/apple-valley/injuries` | Apple Valley | injuries | 17 | 0 | 0 |  | 84 |
| `/areas-we-serve/apple-valley/therapeutic-exercise` | Apple Valley | therapeutic-exercise | 17 | 0 | 0 |  | 84 |
| `/areas-we-serve/stillwater/cold-laser-therapy` | Stillwater | cold-laser-therapy | 22 | 0 | 0 |  | 83 |
| `/areas-we-serve/stillwater/injuries` | Stillwater | injuries | 22 | 0 | 0 |  | 83 |
| `/areas-we-serve/stillwater/therapeutic-exercise` | Stillwater | therapeutic-exercise | 22 | 0 | 0 |  | 83 |
| `/areas-we-serve/hopkins/cold-laser-therapy` | Hopkins | cold-laser-therapy | 4 | 0 | 0 |  | 64 |
| `/areas-we-serve/hopkins/degenerative-disc-disease` | Hopkins | degenerative-disc-disease | 4 | 0 | 0 |  | 64 |
| `/areas-we-serve/hopkins/therapeutic-exercise` | Hopkins | therapeutic-exercise | 4 | 0 | 0 |  | 64 |
| `/areas-we-serve/new-hope/alternative-medicine` | New Hope | alternative-medicine | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/new-hope/cryotherapy` | New Hope | cryotherapy | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/new-hope/custom-foot-orthotics` | New Hope | custom-foot-orthotics | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/new-hope/degenerative-disc-disease` | New Hope | degenerative-disc-disease | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/new-hope/ice-pack-cryotherapy` | New Hope | ice-pack-cryotherapy | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/new-hope/personal-injury` | New Hope | personal-injury | 9 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/adjustments-and-manipulation` | Robbinsdale | adjustments-and-manipulation | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/cold-laser-therapy` | Robbinsdale | cold-laser-therapy | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/common-chiropractic-conditions` | Robbinsdale | common-chiropractic-conditions | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/cryotherapy` | Robbinsdale | cryotherapy | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/functional-medicine` | Robbinsdale | functional-medicine | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/ice-pack-cryotherapy` | Robbinsdale | ice-pack-cryotherapy | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/robbinsdale/therapeutic-exercise` | Robbinsdale | therapeutic-exercise | 7 | 0 | 0 |  | 60 |
| `/areas-we-serve/excelsior/degenerative-disc-disease` | Excelsior | degenerative-disc-disease | 13 | 0 | 0 |  | 58 |
| `/areas-we-serve/excelsior/ice-pack-cryotherapy` | Excelsior | ice-pack-cryotherapy | 13 | 0 | 0 |  | 58 |
| `/areas-we-serve/excelsior/therapeutic-exercise` | Excelsior | therapeutic-exercise | 13 | 0 | 0 |  | 58 |
| `/areas-we-serve/oakdale/adjustments-and-manipulation` | Oakdale | adjustments-and-manipulation | 16 | 0 | 0 |  | 58 |
| `/areas-we-serve/oakdale/back-pain-treatments` | Oakdale | back-pain-treatments | 16 | 0 | 0 |  | 58 |
| `/areas-we-serve/oakdale/personal-injury` | Oakdale | personal-injury | 16 | 0 | 0 |  | 58 |
| `/areas-we-serve/oakdale/therapeutic-exercise` | Oakdale | therapeutic-exercise | 16 | 0 | 0 |  | 58 |
| `/areas-we-serve/woodbury/cold-laser-therapy` | Woodbury | cold-laser-therapy | 18 | 0 | 0 |  | 57 |
| `/areas-we-serve/woodbury/functional-medicine` | Woodbury | functional-medicine | 18 | 0 | 0 |  | 57 |
| `/areas-we-serve/woodbury/ice-pack-cryotherapy` | Woodbury | ice-pack-cryotherapy | 18 | 0 | 0 |  | 57 |
| `/areas-we-serve/shoreview/adjustments-and-manipulation` | Shoreview | adjustments-and-manipulation | 14 | 0 | 0 |  | 54 |
| `/areas-we-serve/shoreview/personal-injury` | Shoreview | personal-injury | 14 | 0 | 0 |  | 54 |
| `/areas-we-serve/rosemount/cryotherapy` | Rosemount | cryotherapy | 22 | 0 | 0 |  | 53 |
| `/areas-we-serve/rosemount/ice-pack-cryotherapy` | Rosemount | ice-pack-cryotherapy | 22 | 0 | 0 |  | 53 |
| `/areas-we-serve/rosemount/personal-injury` | Rosemount | personal-injury | 22 | 0 | 0 |  | 53 |
| `/areas-we-serve/rosemount/therapeutic-exercise` | Rosemount | therapeutic-exercise | 22 | 0 | 0 |  | 53 |
| `/areas-we-serve/brooklyn-center/adjustments-and-manipulation` | Brooklyn Center | adjustments-and-manipulation | 9 | 0 | 0 |  | 51 |
| `/areas-we-serve/brooklyn-center/cold-laser-therapy` | Brooklyn Center | cold-laser-therapy | 9 | 0 | 0 |  | 51 |
| `/areas-we-serve/brooklyn-center/ice-pack-cryotherapy` | Brooklyn Center | ice-pack-cryotherapy | 9 | 0 | 0 |  | 51 |
| `/areas-we-serve/brooklyn-center/therapeutic-exercise` | Brooklyn Center | therapeutic-exercise | 9 | 0 | 0 |  | 51 |
| `/areas-we-serve/eden-prairie/alternative-medicine` | Eden Prairie | alternative-medicine | 10 | 0 | 0 |  | 50 |
| `/areas-we-serve/eden-prairie/back-pain-treatments` | Eden Prairie | back-pain-treatments | 10 | 0 | 0 |  | 50 |
| `/areas-we-serve/eden-prairie/common-chiropractic-conditions` | Eden Prairie | common-chiropractic-conditions | 10 | 0 | 0 |  | 50 |
| `/areas-we-serve/eden-prairie/therapeutic-exercise` | Eden Prairie | therapeutic-exercise | 10 | 0 | 0 |  | 50 |
| `/areas-we-serve/orono/back-pain-treatments` | Orono | back-pain-treatments | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/cold-laser-therapy` | Orono | cold-laser-therapy | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/cryotherapy` | Orono | cryotherapy | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/degenerative-disc-disease` | Orono | degenerative-disc-disease | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/functional-medicine` | Orono | functional-medicine | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/ice-pack-cryotherapy` | Orono | ice-pack-cryotherapy | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/orono/personal-injury` | Orono | personal-injury | 14 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/back-pain-treatments` | Spring Lake Park | back-pain-treatments | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/cryotherapy` | Spring Lake Park | cryotherapy | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/degenerative-disc-disease` | Spring Lake Park | degenerative-disc-disease | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/functional-medicine` | Spring Lake Park | functional-medicine | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/ice-pack-cryotherapy` | Spring Lake Park | ice-pack-cryotherapy | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/spring-lake-park/personal-injury` | Spring Lake Park | personal-injury | 15 | 0 | 0 |  | 45 |
| `/areas-we-serve/saint-paul/injuries` | Saint Paul | injuries | 12 | 0 | 0 |  | 44 |
| `/areas-we-serve/saint-paul/personal-injury` | Saint Paul | personal-injury | 12 | 0 | 0 |  | 44 |
| `/areas-we-serve/saint-paul/therapeutic-exercise` | Saint Paul | therapeutic-exercise | 12 | 0 | 0 |  | 44 |
| `/areas-we-serve/white-bear-lake/therapeutic-exercise` | White Bear Lake | therapeutic-exercise | 16 | 0 | 0 |  | 42 |
| `/areas-we-serve/plymouth/cold-laser-therapy` | Plymouth | cold-laser-therapy | 9 | 0 | 0 |  | 41 |
| `/areas-we-serve/plymouth/common-chiropractic-conditions` | Plymouth | common-chiropractic-conditions | 9 | 0 | 0 |  | 41 |
| `/areas-we-serve/plymouth/personal-injury` | Plymouth | personal-injury | 9 | 0 | 0 |  | 41 |
| `/areas-we-serve/plymouth/therapeutic-exercise` | Plymouth | therapeutic-exercise | 9 | 0 | 0 |  | 41 |
| `/areas-we-serve/arden-hills/alternative-medicine` | Arden Hills | alternative-medicine | 12 | 0 | 0 |  | 34 |
| `/areas-we-serve/arden-hills/cold-laser-therapy` | Arden Hills | cold-laser-therapy | 12 | 0 | 0 |  | 34 |
| `/areas-we-serve/arden-hills/ice-pack-cryotherapy` | Arden Hills | ice-pack-cryotherapy | 12 | 0 | 0 |  | 34 |
| `/areas-we-serve/arden-hills/personal-injury` | Arden Hills | personal-injury | 12 | 0 | 0 |  | 34 |
| `/areas-we-serve/osseo/cold-laser-therapy` | Osseo | cold-laser-therapy | 14 | 0 | 0 |  | 34 |
| `/areas-we-serve/osseo/cryotherapy` | Osseo | cryotherapy | 14 | 0 | 0 |  | 34 |
| `/areas-we-serve/osseo/therapeutic-exercise` | Osseo | therapeutic-exercise | 14 | 0 | 0 |  | 34 |
| `/areas-we-serve/falcon-heights/alternative-medicine` | Falcon Heights | alternative-medicine | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/back-pain-treatments` | Falcon Heights | back-pain-treatments | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/cold-laser-therapy` | Falcon Heights | cold-laser-therapy | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/common-chiropractic-conditions` | Falcon Heights | common-chiropractic-conditions | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/cryotherapy` | Falcon Heights | cryotherapy | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/custom-foot-orthotics` | Falcon Heights | custom-foot-orthotics | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/functional-medicine` | Falcon Heights | functional-medicine | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/ice-pack-cryotherapy` | Falcon Heights | ice-pack-cryotherapy | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/personal-injury` | Falcon Heights | personal-injury | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/falcon-heights/therapeutic-exercise` | Falcon Heights | therapeutic-exercise | 10 | 0 | 0 |  | 33 |
| `/areas-we-serve/brooklyn-park/adjustments-and-manipulation` | Brooklyn Park | adjustments-and-manipulation | 13 | 0 | 0 |  | 29 |
| `/areas-we-serve/brooklyn-park/back-pain-treatments` | Brooklyn Park | back-pain-treatments | 13 | 0 | 0 |  | 29 |
| `/areas-we-serve/brooklyn-park/common-chiropractic-conditions` | Brooklyn Park | common-chiropractic-conditions | 13 | 0 | 0 |  | 29 |
| `/areas-we-serve/brooklyn-park/therapeutic-exercise` | Brooklyn Park | therapeutic-exercise | 13 | 0 | 0 |  | 29 |
| `/areas-we-serve/shorewood/adjustments-and-manipulation` | Shorewood | adjustments-and-manipulation | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/shorewood/back-pain-treatments` | Shorewood | back-pain-treatments | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/shorewood/cold-laser-therapy` | Shorewood | cold-laser-therapy | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/shorewood/common-chiropractic-conditions` | Shorewood | common-chiropractic-conditions | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/shorewood/custom-foot-orthotics` | Shorewood | custom-foot-orthotics | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/shorewood/ice-pack-cryotherapy` | Shorewood | ice-pack-cryotherapy | 13 | 0 | 0 |  | 25 |
| `/areas-we-serve/chanhassen/adjustments-and-manipulation` | Chanhassen | adjustments-and-manipulation | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/common-chiropractic-conditions` | Chanhassen | common-chiropractic-conditions | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/cryotherapy` | Chanhassen | cryotherapy | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/degenerative-disc-disease` | Chanhassen | degenerative-disc-disease | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/ice-pack-cryotherapy` | Chanhassen | ice-pack-cryotherapy | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/injuries` | Chanhassen | injuries | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/chanhassen/therapeutic-exercise` | Chanhassen | therapeutic-exercise | 14 | 0 | 0 |  | 24 |
| `/areas-we-serve/columbia-heights/cold-laser-therapy` | Columbia Heights | cold-laser-therapy | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/common-chiropractic-conditions` | Columbia Heights | common-chiropractic-conditions | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/cryotherapy` | Columbia Heights | cryotherapy | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/degenerative-disc-disease` | Columbia Heights | degenerative-disc-disease | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/functional-medicine` | Columbia Heights | functional-medicine | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/ice-pack-cryotherapy` | Columbia Heights | ice-pack-cryotherapy | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/injuries` | Columbia Heights | injuries | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/columbia-heights/personal-injury` | Columbia Heights | personal-injury | 8 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/adjustments-and-manipulation` | Lauderdale | adjustments-and-manipulation | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/alternative-medicine` | Lauderdale | alternative-medicine | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/common-chiropractic-conditions` | Lauderdale | common-chiropractic-conditions | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/custom-foot-orthotics` | Lauderdale | custom-foot-orthotics | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/degenerative-disc-disease` | Lauderdale | degenerative-disc-disease | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/functional-medicine` | Lauderdale | functional-medicine | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/lauderdale/personal-injury` | Lauderdale | personal-injury | 9 | 0 | 0 |  | 23 |
| `/areas-we-serve/deephaven/common-chiropractic-conditions` | Deephaven | common-chiropractic-conditions | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/deephaven/cryotherapy` | Deephaven | cryotherapy | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/deephaven/degenerative-disc-disease` | Deephaven | degenerative-disc-disease | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/deephaven/ice-pack-cryotherapy` | Deephaven | ice-pack-cryotherapy | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/deephaven/injuries` | Deephaven | injuries | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/deephaven/personal-injury` | Deephaven | personal-injury | 12 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/cold-laser-therapy` | Mounds View | cold-laser-therapy | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/common-chiropractic-conditions` | Mounds View | common-chiropractic-conditions | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/cryotherapy` | Mounds View | cryotherapy | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/ice-pack-cryotherapy` | Mounds View | ice-pack-cryotherapy | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/personal-injury` | Mounds View | personal-injury | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/mounds-view/therapeutic-exercise` | Mounds View | therapeutic-exercise | 13 | 0 | 0 |  | 22 |
| `/areas-we-serve/north-oaks/back-pain-treatments` | North Oaks | back-pain-treatments | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/cold-laser-therapy` | North Oaks | cold-laser-therapy | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/common-chiropractic-conditions` | North Oaks | common-chiropractic-conditions | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/cryotherapy` | North Oaks | cryotherapy | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/custom-foot-orthotics` | North Oaks | custom-foot-orthotics | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/degenerative-disc-disease` | North Oaks | degenerative-disc-disease | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/functional-medicine` | North Oaks | functional-medicine | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/ice-pack-cryotherapy` | North Oaks | ice-pack-cryotherapy | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/north-oaks/personal-injury` | North Oaks | personal-injury | 14 | 0 | 0 |  | 19 |
| `/areas-we-serve/mendota-heights/back-pain-treatments` | Mendota Heights | back-pain-treatments | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/cold-laser-therapy` | Mendota Heights | cold-laser-therapy | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/common-chiropractic-conditions` | Mendota Heights | common-chiropractic-conditions | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/cryotherapy` | Mendota Heights | cryotherapy | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/degenerative-disc-disease` | Mendota Heights | degenerative-disc-disease | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/functional-medicine` | Mendota Heights | functional-medicine | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/mendota-heights/ice-pack-cryotherapy` | Mendota Heights | ice-pack-cryotherapy | 14 | 0 | 0 |  | 18 |
| `/areas-we-serve/south-saint-paul/adjustments-and-manipulation` | South Saint Paul | adjustments-and-manipulation | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/alternative-medicine` | South Saint Paul | alternative-medicine | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/back-pain-treatments` | South Saint Paul | back-pain-treatments | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/cold-laser-therapy` | South Saint Paul | cold-laser-therapy | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/common-chiropractic-conditions` | South Saint Paul | common-chiropractic-conditions | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/cryotherapy` | South Saint Paul | cryotherapy | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/south-saint-paul/custom-foot-orthotics` | South Saint Paul | custom-foot-orthotics | 14 | 0 | 0 |  | 16 |
| `/areas-we-serve/long-lake/adjustments-and-manipulation` | Long Lake | adjustments-and-manipulation | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/alternative-medicine` | Long Lake | alternative-medicine | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/back-pain-treatments` | Long Lake | back-pain-treatments | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/cold-laser-therapy` | Long Lake | cold-laser-therapy | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/common-chiropractic-conditions` | Long Lake | common-chiropractic-conditions | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/cryotherapy` | Long Lake | cryotherapy | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/ice-pack-cryotherapy` | Long Lake | ice-pack-cryotherapy | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/long-lake/therapeutic-exercise` | Long Lake | therapeutic-exercise | 14 | 0 | 0 |  | 15 |
| `/areas-we-serve/vadnais-heights/adjustments-and-manipulation` | Vadnais Heights | adjustments-and-manipulation | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/common-chiropractic-conditions` | Vadnais Heights | common-chiropractic-conditions | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/cryotherapy` | Vadnais Heights | cryotherapy | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/degenerative-disc-disease` | Vadnais Heights | degenerative-disc-disease | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/ice-pack-cryotherapy` | Vadnais Heights | ice-pack-cryotherapy | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/personal-injury` | Vadnais Heights | personal-injury | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/vadnais-heights/therapeutic-exercise` | Vadnais Heights | therapeutic-exercise | 14 | 0 | 0 |  | 13 |
| `/areas-we-serve/west-saint-paul/adjustments-and-manipulation` | West Saint Paul | adjustments-and-manipulation | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/back-pain-treatments` | West Saint Paul | back-pain-treatments | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/cold-laser-therapy` | West Saint Paul | cold-laser-therapy | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/common-chiropractic-conditions` | West Saint Paul | common-chiropractic-conditions | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/custom-foot-orthotics` | West Saint Paul | custom-foot-orthotics | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/ice-pack-cryotherapy` | West Saint Paul | ice-pack-cryotherapy | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/injuries` | West Saint Paul | injuries | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/personal-injury` | West Saint Paul | personal-injury | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/west-saint-paul/therapeutic-exercise` | West Saint Paul | therapeutic-exercise | 13 | 0 | 0 |  | 12 |
| `/areas-we-serve/tonka-bay/alternative-medicine` | Tonka Bay | alternative-medicine | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/cold-laser-therapy` | Tonka Bay | cold-laser-therapy | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/common-chiropractic-conditions` | Tonka Bay | common-chiropractic-conditions | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/cryotherapy` | Tonka Bay | cryotherapy | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/custom-foot-orthotics` | Tonka Bay | custom-foot-orthotics | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/functional-medicine` | Tonka Bay | functional-medicine | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/ice-pack-cryotherapy` | Tonka Bay | ice-pack-cryotherapy | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/personal-injury` | Tonka Bay | personal-injury | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/tonka-bay/therapeutic-exercise` | Tonka Bay | therapeutic-exercise | 13 | 0 | 0 |  | 11 |
| `/areas-we-serve/north-saint-paul/alternative-medicine` | North Saint Paul | alternative-medicine | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/back-pain-treatments` | North Saint Paul | back-pain-treatments | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/cold-laser-therapy` | North Saint Paul | cold-laser-therapy | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/common-chiropractic-conditions` | North Saint Paul | common-chiropractic-conditions | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/cryotherapy` | North Saint Paul | cryotherapy | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/functional-medicine` | North Saint Paul | functional-medicine | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/ice-pack-cryotherapy` | North Saint Paul | ice-pack-cryotherapy | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/injuries` | North Saint Paul | injuries | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/north-saint-paul/personal-injury` | North Saint Paul | personal-injury | 14 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/alternative-medicine` | Spring Park | alternative-medicine | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/back-pain-treatments` | Spring Park | back-pain-treatments | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/cold-laser-therapy` | Spring Park | cold-laser-therapy | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/common-chiropractic-conditions` | Spring Park | common-chiropractic-conditions | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/cryotherapy` | Spring Park | cryotherapy | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/custom-foot-orthotics` | Spring Park | custom-foot-orthotics | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/degenerative-disc-disease` | Spring Park | degenerative-disc-disease | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/functional-medicine` | Spring Park | functional-medicine | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/ice-pack-cryotherapy` | Spring Park | ice-pack-cryotherapy | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/spring-park/therapeutic-exercise` | Spring Park | therapeutic-exercise | 16 | 0 | 0 |  | 9 |
| `/areas-we-serve/minnetonka-beach/adjustments-and-manipulation` | Minnetonka Beach | adjustments-and-manipulation | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/back-pain-treatments` | Minnetonka Beach | back-pain-treatments | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/cold-laser-therapy` | Minnetonka Beach | cold-laser-therapy | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/common-chiropractic-conditions` | Minnetonka Beach | common-chiropractic-conditions | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/custom-foot-orthotics` | Minnetonka Beach | custom-foot-orthotics | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/degenerative-disc-disease` | Minnetonka Beach | degenerative-disc-disease | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/functional-medicine` | Minnetonka Beach | functional-medicine | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/ice-pack-cryotherapy` | Minnetonka Beach | ice-pack-cryotherapy | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/injuries` | Minnetonka Beach | injuries | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/personal-injury` | Minnetonka Beach | personal-injury | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/minnetonka-beach/therapeutic-exercise` | Minnetonka Beach | therapeutic-exercise | 14 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/adjustments-and-manipulation` | Saint Anthony | adjustments-and-manipulation | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/cold-laser-therapy` | Saint Anthony | cold-laser-therapy | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/common-chiropractic-conditions` | Saint Anthony | common-chiropractic-conditions | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/cryotherapy` | Saint Anthony | cryotherapy | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/custom-foot-orthotics` | Saint Anthony | custom-foot-orthotics | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/degenerative-disc-disease` | Saint Anthony | degenerative-disc-disease | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/functional-medicine` | Saint Anthony | functional-medicine | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/ice-pack-cryotherapy` | Saint Anthony | ice-pack-cryotherapy | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/personal-injury` | Saint Anthony | personal-injury | 8 | 0 | 0 |  | 8 |
| `/areas-we-serve/saint-anthony/therapeutic-exercise` | Saint Anthony | therapeutic-exercise | 8 | 0 | 0 |  | 8 |

## Noindex later — service URL only

The hub for each of these cities is in the keep table. Only the service URL would be noindexed.

| URL | City | Page | Miles | Impressions | Clicks | Position | City total |
|---|---|---|---:|---:|---:|---:|---:|
| `/areas-we-serve/mound/adjustments-and-manipulation` | Mound | adjustments-and-manipulation | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/mound/cold-laser-therapy` | Mound | cold-laser-therapy | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/mound/cryotherapy` | Mound | cryotherapy | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/mound/custom-foot-orthotics` | Mound | custom-foot-orthotics | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/mound/degenerative-disc-disease` | Mound | degenerative-disc-disease | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/mound/ice-pack-cryotherapy` | Mound | ice-pack-cryotherapy | 17 | 0 | 0 |  | 48 |
| `/areas-we-serve/chaska/common-chiropractic-conditions` | Chaska | common-chiropractic-conditions | 17 | 0 | 0 |  | 44 |
| `/areas-we-serve/chaska/injuries` | Chaska | injuries | 17 | 0 | 0 |  | 44 |
| `/areas-we-serve/chaska/therapeutic-exercise` | Chaska | therapeutic-exercise | 17 | 0 | 0 |  | 44 |
| `/areas-we-serve/waconia/adjustments-and-manipulation` | Waconia | adjustments-and-manipulation | 23 | 0 | 0 |  | 40 |
| `/areas-we-serve/waconia/cryotherapy` | Waconia | cryotherapy | 23 | 0 | 0 |  | 40 |
| `/areas-we-serve/waconia/ice-pack-cryotherapy` | Waconia | ice-pack-cryotherapy | 23 | 0 | 0 |  | 40 |
| `/areas-we-serve/waconia/personal-injury` | Waconia | personal-injury | 23 | 0 | 0 |  | 40 |
| `/areas-we-serve/waconia/therapeutic-exercise` | Waconia | therapeutic-exercise | 23 | 0 | 0 |  | 40 |
| `/areas-we-serve/anoka/ice-pack-cryotherapy` | Anoka | ice-pack-cryotherapy | 19 | 0 | 0 |  | 36 |
| `/areas-we-serve/anoka/therapeutic-exercise` | Anoka | therapeutic-exercise | 19 | 0 | 0 |  | 36 |
| `/areas-we-serve/medina/back-pain-treatments` | Medina | back-pain-treatments | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/cold-laser-therapy` | Medina | cold-laser-therapy | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/cryotherapy` | Medina | cryotherapy | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/degenerative-disc-disease` | Medina | degenerative-disc-disease | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/functional-medicine` | Medina | functional-medicine | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/ice-pack-cryotherapy` | Medina | ice-pack-cryotherapy | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/medina/therapeutic-exercise` | Medina | therapeutic-exercise | 17 | 0 | 0 |  | 35 |
| `/areas-we-serve/forest-lake/adjustments-and-manipulation` | Forest Lake | adjustments-and-manipulation | 26 | 0 | 0 |  | 33 |
| `/areas-we-serve/forest-lake/injuries` | Forest Lake | injuries | 26 | 0 | 0 |  | 33 |
| `/areas-we-serve/forest-lake/personal-injury` | Forest Lake | personal-injury | 26 | 0 | 0 |  | 33 |
| `/areas-we-serve/ham-lake/personal-injury` | Ham Lake | personal-injury | 22 | 0 | 0 |  | 33 |
| `/areas-we-serve/ham-lake/therapeutic-exercise` | Ham Lake | therapeutic-exercise | 22 | 0 | 0 |  | 33 |
| `/areas-we-serve/inver-grove-heights/adjustments-and-manipulation` | Inver Grove Heights | adjustments-and-manipulation | 18 | 0 | 0 |  | 27 |
| `/areas-we-serve/inver-grove-heights/cold-laser-therapy` | Inver Grove Heights | cold-laser-therapy | 18 | 0 | 0 |  | 27 |
| `/areas-we-serve/inver-grove-heights/custom-foot-orthotics` | Inver Grove Heights | custom-foot-orthotics | 18 | 0 | 0 |  | 27 |
| `/areas-we-serve/inver-grove-heights/degenerative-disc-disease` | Inver Grove Heights | degenerative-disc-disease | 18 | 0 | 0 |  | 27 |
| `/areas-we-serve/inver-grove-heights/therapeutic-exercise` | Inver Grove Heights | therapeutic-exercise | 18 | 0 | 0 |  | 27 |
| `/areas-we-serve/farmington/cryotherapy` | Farmington | cryotherapy | 25 | 0 | 0 |  | 21 |
| `/areas-we-serve/farmington/degenerative-disc-disease` | Farmington | degenerative-disc-disease | 25 | 0 | 0 |  | 21 |
| `/areas-we-serve/farmington/ice-pack-cryotherapy` | Farmington | ice-pack-cryotherapy | 25 | 0 | 0 |  | 21 |
| `/areas-we-serve/farmington/personal-injury` | Farmington | personal-injury | 25 | 0 | 0 |  | 21 |
| `/areas-we-serve/farmington/therapeutic-exercise` | Farmington | therapeutic-exercise | 25 | 0 | 0 |  | 21 |
| `/areas-we-serve/hugo/adjustments-and-manipulation` | Hugo | adjustments-and-manipulation | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/back-pain-treatments` | Hugo | back-pain-treatments | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/common-chiropractic-conditions` | Hugo | common-chiropractic-conditions | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/degenerative-disc-disease` | Hugo | degenerative-disc-disease | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/injuries` | Hugo | injuries | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/personal-injury` | Hugo | personal-injury | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/hugo/therapeutic-exercise` | Hugo | therapeutic-exercise | 21 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/adjustments-and-manipulation` | Saint Paul Park | adjustments-and-manipulation | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/alternative-medicine` | Saint Paul Park | alternative-medicine | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/back-pain-treatments` | Saint Paul Park | back-pain-treatments | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/cold-laser-therapy` | Saint Paul Park | cold-laser-therapy | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/functional-medicine` | Saint Paul Park | functional-medicine | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/ice-pack-cryotherapy` | Saint Paul Park | ice-pack-cryotherapy | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/personal-injury` | Saint Paul Park | personal-injury | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/saint-paul-park/therapeutic-exercise` | Saint Paul Park | therapeutic-exercise | 20 | 0 | 0 |  | 19 |
| `/areas-we-serve/bayport/adjustments-and-manipulation` | Bayport | adjustments-and-manipulation | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/alternative-medicine` | Bayport | alternative-medicine | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/back-pain-treatments` | Bayport | back-pain-treatments | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/cold-laser-therapy` | Bayport | cold-laser-therapy | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/common-chiropractic-conditions` | Bayport | common-chiropractic-conditions | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/custom-foot-orthotics` | Bayport | custom-foot-orthotics | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/ice-pack-cryotherapy` | Bayport | ice-pack-cryotherapy | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/bayport/therapeutic-exercise` | Bayport | therapeutic-exercise | 23 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/back-pain-treatments` | Mahtomedi | back-pain-treatments | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/cold-laser-therapy` | Mahtomedi | cold-laser-therapy | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/common-chiropractic-conditions` | Mahtomedi | common-chiropractic-conditions | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/cryotherapy` | Mahtomedi | cryotherapy | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/custom-foot-orthotics` | Mahtomedi | custom-foot-orthotics | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/degenerative-disc-disease` | Mahtomedi | degenerative-disc-disease | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/ice-pack-cryotherapy` | Mahtomedi | ice-pack-cryotherapy | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/injuries` | Mahtomedi | injuries | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/mahtomedi/therapeutic-exercise` | Mahtomedi | therapeutic-exercise | 18 | 0 | 0 |  | 18 |
| `/areas-we-serve/centerville/alternative-medicine` | Centerville | alternative-medicine | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/back-pain-treatments` | Centerville | back-pain-treatments | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/cold-laser-therapy` | Centerville | cold-laser-therapy | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/common-chiropractic-conditions` | Centerville | common-chiropractic-conditions | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/cryotherapy` | Centerville | cryotherapy | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/custom-foot-orthotics` | Centerville | custom-foot-orthotics | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/degenerative-disc-disease` | Centerville | degenerative-disc-disease | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/functional-medicine` | Centerville | functional-medicine | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/ice-pack-cryotherapy` | Centerville | ice-pack-cryotherapy | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/personal-injury` | Centerville | personal-injury | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/centerville/therapeutic-exercise` | Centerville | therapeutic-exercise | 22 | 0 | 0 |  | 16 |
| `/areas-we-serve/lino-lakes/adjustments-and-manipulation` | Lino Lakes | adjustments-and-manipulation | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/lino-lakes/alternative-medicine` | Lino Lakes | alternative-medicine | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/lino-lakes/cold-laser-therapy` | Lino Lakes | cold-laser-therapy | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/lino-lakes/custom-foot-orthotics` | Lino Lakes | custom-foot-orthotics | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/lino-lakes/personal-injury` | Lino Lakes | personal-injury | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/lino-lakes/therapeutic-exercise` | Lino Lakes | therapeutic-exercise | 21 | 0 | 0 |  | 15 |
| `/areas-we-serve/maple-plain/alternative-medicine` | Maple Plain | alternative-medicine | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/back-pain-treatments` | Maple Plain | back-pain-treatments | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/cold-laser-therapy` | Maple Plain | cold-laser-therapy | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/cryotherapy` | Maple Plain | cryotherapy | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/degenerative-disc-disease` | Maple Plain | degenerative-disc-disease | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/functional-medicine` | Maple Plain | functional-medicine | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/ice-pack-cryotherapy` | Maple Plain | ice-pack-cryotherapy | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/injuries` | Maple Plain | injuries | 19 | 0 | 0 |  | 9 |
| `/areas-we-serve/maple-plain/therapeutic-exercise` | Maple Plain | therapeutic-exercise | 19 | 0 | 0 |  | 9 |

## City totals

| City | Miles | Hub impressions | City total (hub + services) | Zero-impression service URLs |
|---|---:|---:|---:|---:|
| Champlin | 18 | 4 | 428 | 5 |
| Blaine | 18 | 4 | 391 | 3 |
| Cottage Grove | 23 | 1 | 348 | 4 |
| Andover | 21 | 0 | 256 | 5 |
| Wayzata | 11 | 0 | 252 | 1 |
| Bloomington | 7 | 5 | 242 | 3 |
| Richfield | 6 | 27 | 240 | 1 |
| Lakeville | 22 | 5 | 216 | 2 |
| Burnsville | 14 | 0 | 209 | 3 |
| Maple Grove | 13 | 2 | 185 | 1 |
| New Brighton | 11 | 2 | 176 | 3 |
| Edina | 3 | 5 | 161 | 2 |
| Minneapolis | 5 | 60 | 155 | 2 |
| Roseville | 9 | 1 | 153 | 3 |
| Maplewood | 13 | 6 | 153 | 6 |
| Fridley | 11 | 8 | 151 | 0 |
| Savage | 14 | 3 | 144 | 3 |
| Newport | 18 | 135 | 142 | 8 |
| Shakopee | 17 | 2 | 127 | 4 |
| Golden Valley | 4 | 50 | 123 | 2 |
| Victoria | 17 | 1 | 121 | 5 |
| Crystal | 8 | 8 | 109 | 5 |
| Prior Lake | 17 | 10 | 106 | 3 |
| Coon Rapids | 18 | 3 | 104 | 3 |
| Saint Louis Park | 0 | 13 | 95 | 2 |
| Lake Elmo | 18 | 1 | 91 | 6 |
| Minnetonka | 7 | 0 | 86 | 2 |
| Eagan | 14 | 1 | 85 | 2 |
| Apple Valley | 17 | 3 | 84 | 4 |
| Stillwater | 22 | 2 | 83 | 3 |
| Hopkins | 4 | 15 | 64 | 3 |
| New Hope | 9 | 2 | 60 | 6 |
| Robbinsdale | 7 | 4 | 60 | 7 |
| Excelsior | 13 | 4 | 58 | 3 |
| Oakdale | 16 | 4 | 58 | 4 |
| Woodbury | 18 | 0 | 57 | 3 |
| Shoreview | 14 | 4 | 54 | 2 |
| Rosemount | 22 | 0 | 53 | 4 |
| Brooklyn Center | 9 | 5 | 51 | 4 |
| Eden Prairie | 10 | 3 | 50 | 4 |
| Mound | 17 | 13 | 48 | 6 |
| Orono | 14 | 9 | 45 | 7 |
| Spring Lake Park | 15 | 13 | 45 | 6 |
| Saint Paul | 12 | 0 | 44 | 3 |
| Chaska | 17 | 5 | 44 | 3 |
| White Bear Lake | 16 | 3 | 42 | 1 |
| Plymouth | 9 | 0 | 41 | 4 |
| Waconia | 23 | 3 | 40 | 5 |
| Anoka | 19 | 2 | 36 | 2 |
| Medina | 17 | 18 | 35 | 7 |
| Osseo | 14 | 1 | 34 | 3 |
| Arden Hills | 12 | 7 | 34 | 4 |
| Ham Lake | 22 | 1 | 33 | 2 |
| Falcon Heights | 10 | 20 | 33 | 10 |
| Forest Lake | 26 | 2 | 33 | 3 |
| Brooklyn Park | 13 | 1 | 29 | 4 |
| Inver Grove Heights | 18 | 5 | 27 | 5 |
| Shorewood | 13 | 11 | 25 | 6 |
| Chanhassen | 14 | 1 | 24 | 7 |
| Columbia Heights | 8 | 9 | 23 | 8 |
| Lauderdale | 9 | 16 | 23 | 7 |
| Deephaven | 12 | 6 | 22 | 6 |
| Mounds View | 13 | 7 | 22 | 6 |
| Farmington | 25 | 2 | 21 | 5 |
| North Oaks | 14 | 8 | 19 | 9 |
| Saint Paul Park | 20 | 7 | 19 | 8 |
| Hugo | 21 | 1 | 19 | 7 |
| Mendota Heights | 14 | 6 | 18 | 7 |
| Mahtomedi | 18 | 8 | 18 | 9 |
| Bayport | 23 | 5 | 18 | 8 |
| South Saint Paul | 14 | 8 | 16 | 7 |
| Centerville | 22 | 13 | 16 | 11 |
| Long Lake | 14 | 4 | 15 | 8 |
| Lino Lakes | 21 | 1 | 15 | 6 |
| Vadnais Heights | 14 | 4 | 13 | 7 |
| West Saint Paul | 13 | 2 | 12 | 9 |
| Tonka Bay | 13 | 2 | 11 | 9 |
| Maple Plain | 19 | 1 | 9 | 9 |
| Spring Park | 16 | 4 | 9 | 10 |
| North Saint Paul | 14 | 1 | 9 | 9 |
| Minnetonka Beach | 14 | 0 | 8 | 11 |
| Saint Anthony | 8 | 3 | 8 | 10 |

## Rollout

Do this only after the keep-and-enrich copy is live. This pull request does not do it.

1. Enrich the priority table first (the 50-impression URLs and Champlin, Blaine, Roseville, Newport). One office, Saint Louis Park address only. Do not add a second location.
2. Compare a new Search Console page export of the same length to the tables above. Move URLs between buckets with the rules. Paste that export into the section below.
3. For consolidate URLs, add the 301 to the same city’s hub, update in-content links that point at the old service URL, and leave the hub indexable with a self canonical. Ship one city at a time so a mistake is reversible.
4. For noindex URLs, set `noindex, follow` on that service URL only. Keep it reachable from the hub. Do not remove it from the repo.
5. On the following export, check that consolidated hubs did not lose the impressions the service URL used to have (they should have been zero) and that noindexed URLs dropped out of the sitemap coverage report without pulling the hub down.

## Next Search Console export

Leave this filled in before any noindex or redirect. Do not treat the tables above as permanent.

| Field | Value |
|---|---|
| Export file | |
| Window start | |
| Window end | |
| City URLs with impressions | |
| City URLs with zero impressions | |
| Hubs with zero impressions | |
| Notes | |

Per-URL rows for the new export (same columns as above):

| URL | City | Page | Miles | Impressions | Clicks | Position | City total |
|---|---|---|---:|---:|---:|---:|---:|
| | | | | | | | |
