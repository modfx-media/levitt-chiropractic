import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { HIDDEN_CMS_POST_SLUGS } from "./cms/posts";
import { acceptSitemapExtra } from "./sitemapOverlay";

const exclusions = new Set(
  [...HIDDEN_CMS_POST_SLUGS].map((slug) => `/blog/${slug}`),
);

test("published Payload posts are listed even when the slug is not hardcoded", () => {
  const existing = new Set(["/blog/chiropractic-care-for-chronic-lower-back-pain"]);
  assert.equal(
    acceptSitemapExtra("/blog/published-only-in-payload", {
      existing,
      skip: new Set(),
      exclusions,
      retired: false,
    }),
    true,
  );
  assert.equal(
    acceptSitemapExtra("/blog/chiropractic-care-for-chronic-lower-back-pain", {
      existing,
      skip: new Set(),
      exclusions,
      retired: false,
    }),
    false,
  );
});

test("hidden and noindex paths stay out of the sitemap", () => {
  assert.equal(
    acceptSitemapExtra("/blog/managing-spine-pain-after-a-minor-crash", {
      existing: new Set(),
      skip: new Set(),
      exclusions,
      retired: false,
    }),
    false,
  );
  assert.equal(
    acceptSitemapExtra("/blog/published-only-in-payload", {
      existing: new Set(),
      skip: new Set(["/blog/published-only-in-payload"]),
      exclusions,
      retired: false,
    }),
    false,
  );
  assert.equal(
    acceptSitemapExtra("/areas-we-serve/forest-lake", {
      existing: new Set(),
      skip: new Set(),
      exclusions,
      retired: true,
    }),
    false,
  );
});

test("the sitemap route does not filter extras through the hardcoded live-route list", () => {
  const source = readFileSync(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../app/(site)/sitemap.xml/route.ts"),
    "utf8",
  );
  assert.match(source, /acceptSitemapExtra/);
  assert.doesNotMatch(source, /isLivePublicPath/);
});
