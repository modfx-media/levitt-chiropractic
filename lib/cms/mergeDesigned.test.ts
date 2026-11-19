import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createElement, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { generateMeta } from "../metadata";
import {
  childrenAreDesigned,
  cmsOnlyDocIsRenderable,
  cmsOverlayJsonLd,
  mergeCmsJsonLd,
  mergeCmsMetadata,
  mergeMappedFields,
  pageLayoutHasContent,
  pickRoutedNode,
  selectRoutedBody,
  type RoutedDocLike,
} from "./mergeDesigned";

const ABOUT_FALLBACK = generateMeta({
  title: "About Our Practice in Saint Louis Park, MN",
  description:
    "Inside Levitt Chiropractic Center in Saint Louis Park, MN our approach, payment options, and the conditions Dr. Alan Levitt treats every day.",
  slug: "about",
});

const emptyLexical = {
  root: {
    type: "root",
    children: [{ type: "paragraph", children: [{ type: "text", text: "   " }] }],
  },
};

const thinImportedLayout = [
  { blockType: "content", body: emptyLexical },
  {
    blockType: "cta",
    heading: "Request an appointment",
    body: "Call the office or request a visit online.",
    label: "Request Appointment",
    href: "/contact/new-patient-appointment",
  },
];

function aboutDoc(input: {
  status: "draft" | "published";
  meta?: Record<string, unknown>;
  layout?: unknown;
}): RoutedDocLike {
  return {
    collection: "pages",
    doc: {
      title: "About Our Practice in Saint Louis Park, MN",
      path: "/about",
      _status: input.status,
      excerpt: "Imported excerpt that must not become the page body.",
      meta: input.meta ?? {},
      layout: input.layout === undefined ? thinImportedLayout : input.layout,
    },
  };
}

function ogDescription(meta: ReturnType<typeof mergeCmsMetadata>): string | undefined {
  const og = meta.openGraph;
  if (!og || Array.isArray(og)) return undefined;
  return og.description;
}

function ogTitle(meta: ReturnType<typeof mergeCmsMetadata>): unknown {
  const og = meta.openGraph;
  if (!og || Array.isArray(og)) return undefined;
  return og.title;
}

test("published page with an empty layout still renders the designed component", () => {
  const published = aboutDoc({
    status: "published",
    meta: {
      title: "About Our Practice | Levitt Chiropractic",
      description: "SEO description edited in Payload.",
    },
    layout: [],
  });
  const body = selectRoutedBody({ hasDesignedPage: true, doc: published });
  assert.equal(body, "designed");
  assert.equal(pageLayoutHasContent(published!.doc), false);

  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        body,
        createElement(
          "article",
          { id: "designed-about" },
          "Personal, hands-on chiropractic care",
        ),
        createElement("article", { id: "generic" }, "Request an appointment"),
      ),
    ),
  );
  assert.match(html, /id="designed-about"/);
  assert.match(html, /Personal, hands-on chiropractic care/);
  assert.doesNotMatch(html, /id="generic"/);
  assert.doesNotMatch(html, /Request an appointment/);

  const meta = mergeCmsMetadata(ABOUT_FALLBACK, published!.doc);
  assert.deepEqual(meta.title, {
    absolute: "About Our Practice | Levitt Chiropractic",
  });
  assert.equal(meta.description, "SEO description edited in Payload.");
});

test("draft and published SEO-only edits keep the designed UI and change only the edited tags", () => {
  const draft = aboutDoc({
    status: "draft",
    meta: { description: "Draft meta description" },
  });
  const published = aboutDoc({
    status: "published",
    meta: { description: "Published meta description" },
  });

  assert.equal(pageLayoutHasContent(published!.doc), true);
  assert.equal(selectRoutedBody({ hasDesignedPage: true, doc: draft }), "designed");
  assert.equal(
    selectRoutedBody({ hasDesignedPage: true, doc: published }),
    "designed",
  );

  const draftHtml = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        "designed",
        createElement("section", null, "How we work with our patients"),
        createElement("h1", null, "About Our Practice in Saint Louis Park, MN"),
      ),
    ),
  );
  const publishedHtml = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        selectRoutedBody({ hasDesignedPage: true, doc: published }),
        createElement("section", null, "How we work with our patients"),
        createElement("h1", null, "About Our Practice in Saint Louis Park, MN"),
      ),
    ),
  );
  assert.equal(draftHtml, publishedHtml);
  assert.match(publishedHtml, /How we work with our patients/);
  assert.doesNotMatch(publishedHtml, /<h1/);

  const draftMeta = mergeCmsMetadata(ABOUT_FALLBACK, draft!.doc);
  const publishedMeta = mergeCmsMetadata(ABOUT_FALLBACK, published!.doc);
  assert.equal(draftMeta.description, "Draft meta description");
  assert.equal(publishedMeta.description, "Published meta description");
  assert.deepEqual(draftMeta.title, ABOUT_FALLBACK.title);
  assert.deepEqual(publishedMeta.title, ABOUT_FALLBACK.title);
  assert.equal(ogTitle(publishedMeta), ogTitle(ABOUT_FALLBACK));
  assert.equal(ogDescription(publishedMeta), "Published meta description");
  assert.deepEqual(publishedMeta.robots, ABOUT_FALLBACK.robots);
});

test("document title and blank SEO fields do not replace hardcoded metadata", () => {
  const doc = aboutDoc({
    status: "published",
    meta: { title: "  ", description: "", noIndex: false, noFollow: false },
    layout: [],
  });
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, doc!.doc), ABOUT_FALLBACK);
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, null), ABOUT_FALLBACK);
  assert.equal(cmsOverlayJsonLd("/about", doc!.doc), null);
});

test("robots, canonical, and OG image override only the fields that are set", () => {
  const doc = {
    title: "About Our Practice in Saint Louis Park, MN",
    meta: {
      canonicalUrl: "/about",
      noIndex: true,
      image: { url: "https://cdn.example.com/about-og.jpg", alt: "Clinic" },
    },
  };
  const meta = mergeCmsMetadata(ABOUT_FALLBACK, doc);
  assert.equal(
    meta.alternates && "canonical" in meta.alternates
      ? meta.alternates.canonical
      : undefined,
    "https://www.levittchiropracticcenter.com/about",
  );
  assert.deepEqual(meta.title, ABOUT_FALLBACK.title);
  assert.equal(meta.description, ABOUT_FALLBACK.description);
  const robots = meta.robots;
  assert.ok(robots && typeof robots === "object");
  if (robots && typeof robots === "object") {
    assert.equal(robots.index, false);
    assert.equal(robots.follow, true);
    assert.ok(robots.googleBot && typeof robots.googleBot === "object");
    if (robots.googleBot && typeof robots.googleBot === "object") {
      assert.equal(robots.googleBot.index, false);
      assert.equal(robots.googleBot["max-image-preview"], "large");
    }
  }
  const og = meta.openGraph;
  assert.ok(og && !Array.isArray(og));
  if (og && !Array.isArray(og)) {
    assert.deepEqual(og.images, [{ url: "https://cdn.example.com/about-og.jpg" }]);
  }
  const blocked = mergeCmsMetadata(ABOUT_FALLBACK, {
    meta: { image: "/media/file.jpg" },
  });
  assert.deepEqual(blocked.openGraph, ABOUT_FALLBACK.openGraph);
});

test("JSON-LD uses CMS schema fields and falls back field by field", () => {
  const hardcoded = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Us",
    description: "Hardcoded description",
    url: "https://www.levittchiropracticcenter.com/about",
  };
  const merged = mergeCmsJsonLd(hardcoded, {
    title: "About Our Practice in Saint Louis Park, MN",
    meta: {
      description: "From the SEO tab",
      schemaType: "AboutPage",
      title: "",
    },
  });
  assert.equal(merged.name, "About Us");
  assert.equal(merged.description, "From the SEO tab");
  assert.equal(merged["@type"], "AboutPage");
  assert.equal(merged.url, hardcoded.url);

  const overlay = cmsOverlayJsonLd("/about", {
    title: "Document title",
    meta: { title: "SEO title", breadcrumbLabel: "About" },
  });
  assert.equal(overlay?.name, "SEO title");
  assert.equal(overlay?.alternateName, "About");
  assert.equal(overlay?.["@type"], "WebPage");
  assert.equal(overlay?.url, "https://www.levittchiropracticcenter.com/about");

  const canonical = cmsOverlayJsonLd("/about", {
    meta: { canonicalUrl: "https://www.levittchiropracticcenter.com/about-us" },
  });
  assert.equal(canonical?.url, "https://www.levittchiropracticcenter.com/about-us");
  assert.equal(canonical?.["@id"], "https://www.levittchiropracticcenter.com/about-us#cms");
});

test("empty CMS text does not replace designed props", () => {
  const merged = mergeMappedFields(
    { title: "About Us", subtitle: "Since 1987" },
    { title: " ", subtitle: "A welcoming practice", unused: null },
  );
  assert.deepEqual(merged, {
    title: "About Us",
    subtitle: "A welcoming practice",
  });
});

test("generic renderer is only for CMS-only pages with layout content", () => {
  const empty = aboutDoc({ status: "published", layout: [] });
  const thin = aboutDoc({ status: "published" });
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: empty }), "none");
  assert.equal(cmsOnlyDocIsRenderable(empty), false);
  assert.equal(selectRoutedBody({ hasDesignedPage: false, doc: thin }), "generic");
  assert.equal(
    selectRoutedBody({
      hasDesignedPage: false,
      doc: { collection: "posts", doc: { slug: "how-adjustments-work", title: "Post" } },
    }),
    "post",
  );
  assert.equal(cmsOnlyDocIsRenderable(null), false);

  const html = renderToStaticMarkup(
    createElement(
      Fragment,
      null,
      pickRoutedNode(
        selectRoutedBody({ hasDesignedPage: false, doc: thin }),
        createElement("article", { id: "designed-about" }, "designed"),
        createElement("article", { id: "generic" }, "Request an appointment"),
      ),
    ),
  );
  assert.match(html, /id="generic"/);
  assert.doesNotMatch(html, /designed-about/);
});

test("designed route detection ignores null and empty fragments", () => {
  assert.equal(childrenAreDesigned(null), false);
  assert.equal(childrenAreDesigned(createElement(Fragment, null, null)), false);
  assert.equal(
    childrenAreDesigned(
      createElement(
        Fragment,
        null,
        createElement("article", null, "About"),
        createElement("aside", null, "Book your first visit"),
      ),
    ),
    true,
  );
});

test("every designed site route keeps its component inside CMSRoute", () => {
  const siteRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../app/(site)",
  );
  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (entry === "page.tsx") pages.push(full);
    }
  };
  walk(siteRoot);
  assert.ok(pages.length >= 30);

  const nullChild = /<CMSRoute\b[^>]*>\s*\{null\}\s*<\/CMSRoute>/;
  for (const file of pages) {
    const source = readFileSync(file, "utf8");
    const rel = path.relative(siteRoot, file);
    assert.match(source, /withCMSMeta/, `${rel} must merge CMS metadata`);
    if (!source.includes("CMSRoute")) continue;
    if (rel === "[...path]/page.tsx") {
      assert.match(source, nullChild);
      assert.match(source, /cmsOnlyDocIsRenderable/);
      continue;
    }
    if (rel === "blog/[slug]/page.tsx") {
      assert.match(source, /<BlogPostContent/);
      assert.match(source, nullChild);
      continue;
    }
    assert.doesNotMatch(
      source,
      nullChild,
      `${rel} is a designed page and must render its own component`,
    );
    assert.match(source, /<CMSRoute[\s\S]*<\/CMSRoute>/);
  }
});
