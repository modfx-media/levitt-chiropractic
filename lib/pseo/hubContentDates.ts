/** Content-change dates for rewritten PSEO city hubs.
 *  Sitemap lastmod for these paths uses this map first, ahead of a CMS
 *  `updatedAt` and ahead of the request timestamp, so a rewrite reports
 *  the day the hub copy actually changed.
 *
 *  Batch 1 (PR #11), batch 2 (PR #12), batch 3 (PR #14), and batch 4
 *  (PR #15) were written on 2026-11-25; batch 5 on 2026-11-26.
 */
export const PSEO_HUB_CONTENT_LASTMOD: Record<string, string> = {
  // Batch 1 — copy rewritten 2026-11-25
  "/areas-we-serve/edina": "2026-11-25",
  "/areas-we-serve/hopkins": "2026-11-25",
  "/areas-we-serve/golden-valley": "2026-11-25",
  "/areas-we-serve/minneapolis": "2026-11-25",
  "/areas-we-serve/richfield": "2026-11-25",
  "/areas-we-serve/minnetonka": "2026-11-25",
  "/areas-we-serve/robbinsdale": "2026-11-25",
  // Batch 2 — copy rewritten 2026-11-25
  "/areas-we-serve/saint-louis-park": "2026-11-25",
  "/areas-we-serve/bloomington": "2026-11-25",
  "/areas-we-serve/saint-paul": "2026-11-25",
  "/areas-we-serve/roseville": "2026-11-25",
  "/areas-we-serve/fridley": "2026-11-25",
  "/areas-we-serve/maple-grove": "2026-11-25",
  "/areas-we-serve/spring-lake-park": "2026-11-25",
  "/areas-we-serve/wayzata": "2026-11-25",
  "/areas-we-serve/maplewood": "2026-11-25",
  "/areas-we-serve/falcon-heights": "2026-11-25",
  // Batch 3 — copy rewritten 2026-11-25
  "/areas-we-serve/eagan": "2026-11-27",
  "/areas-we-serve/orono": "2026-11-27",
  "/areas-we-serve/burnsville": "2026-11-25",
  // Batch 4 — copy written 2026-11-25
  "/areas-we-serve/lauderdale": "2026-11-25",
  "/areas-we-serve/columbia-heights": "2026-11-25",
  "/areas-we-serve/arden-hills": "2026-11-25",
  // Batch 5 — copy written 2026-11-26
  "/areas-we-serve/shoreview": "2026-11-26",
  "/areas-we-serve/savage": "2026-11-26",
  "/areas-we-serve/brooklyn-park": "2026-11-26",
  // Batch 6 — copy written 2026-11-27
  "/areas-we-serve/chanhassen": "2026-11-27",
  "/areas-we-serve/eden-prairie": "2026-11-27",
  "/areas-we-serve/plymouth": "2026-11-27",
};
