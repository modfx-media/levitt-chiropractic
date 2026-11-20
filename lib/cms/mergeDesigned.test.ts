import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createElement, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { blogHeadMetadata, blogPostingFromPost, blogSchemaPost } from "./blogHead";
import { pathsToRevalidate } from "../../src/cms/hooks";
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

function ogImage(meta: ReturnType<typeof mergeCmsMetadata>) {
  const og = meta.openGraph;
  if (!og || Array.isArray(og) || !Array.isArray(og.images)) return null;
  const image = og.images[0];
  if (!image || typeof image === "string" || image instanceof URL) return null;
  return image;
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

  const meta = mergeCmsMetadata(ABOUT_FALLBACK, published!.doc, "/about");
  assert.deepEqual(meta.title, {
    absolute: "About Our Practice | Levitt Chiropractic",
  });
  assert.equal(meta.description, "SEO description edited in Payload.");
  const image = ogImage(meta);
  assert.equal(image?.width, 1200);
  assert.equal(image?.height, 630);
  assert.equal(image?.alt, "About Our Practice in Saint Louis Park, MN");
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

  const draftMeta = mergeCmsMetadata(ABOUT_FALLBACK, draft!.doc, "/about");
  const publishedMeta = mergeCmsMetadata(ABOUT_FALLBACK, published!.doc, "/about");
  assert.equal(draftMeta.description, "Draft meta description");
  assert.equal(publishedMeta.description, "Published meta description");
  assert.deepEqual(draftMeta.title, ABOUT_FALLBACK.title);
  assert.deepEqual(publishedMeta.title, ABOUT_FALLBACK.title);
  assert.equal(ogTitle(publishedMeta), ogTitle(ABOUT_FALLBACK));
  assert.equal(ogDescription(publishedMeta), "Published meta description");
  assert.deepEqual(publishedMeta.robots, ABOUT_FALLBACK.robots);
  assert.deepEqual(ogImage(publishedMeta), ogImage(ABOUT_FALLBACK));
});

test("a published CMS title and description are copied verbatim", () => {
  const verbatim = "Our Story | Drug-Free Pain Relief in Saint Louis Park";
  const description = "Editor description that must not be rewritten.";
  const doc = {
    title: "About Our Practice in Saint Louis Park, MN",
    meta: { title: verbatim, description },
  };
  const homeFallback = generateMeta({
    title: "Chiropractor in Saint Louis Park, MN",
    description: "Homepage fallback description.",
    slug: "",
  });
  const areaFallback = generateMeta({
    title: "Chiropractor in Hopkins, MN",
    description: "Hopkins fallback description.",
    slug: "areas-we-serve/hopkins",
  });
  const serviceFallback = generateMeta({
    title: "Cryotherapy in Hopkins, MN",
    description: "Service fallback description.",
    slug: "areas-we-serve/hopkins/cryotherapy",
  });

  for (const [path, fallback] of [
    ["/", homeFallback],
    ["/about", ABOUT_FALLBACK],
    ["/areas-we-serve/hopkins", areaFallback],
    ["/areas-we-serve/hopkins/cryotherapy", serviceFallback],
  ] as const) {
    const meta = mergeCmsMetadata(fallback, doc, path);
    assert.deepEqual(meta.title, { absolute: verbatim }, path);
    assert.equal(ogTitle(meta), verbatim, path);
    assert.equal(meta.twitter && typeof meta.twitter === "object" ? meta.twitter.title : undefined, verbatim);
    assert.equal(meta.description, description, path);
    assert.equal(ogDescription(meta), description, path);
  }

  const empty = { title: "Ignored document title", meta: { title: "  ", description: "" } };
  assert.equal(mergeCmsMetadata(homeFallback, empty, "/"), homeFallback);
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, empty, "/about"), ABOUT_FALLBACK);
  assert.equal(mergeCmsMetadata(areaFallback, empty, "/areas-we-serve/hopkins"), areaFallback);

  const blog = blogHeadMetadata({
    slug: "our-story",
    local: null,
    doc: {
      title: "Document title that must not replace a set SEO title",
      slug: "our-story",
      excerpt: "Excerpt fallback",
      meta: { title: verbatim, description },
    },
  });
  const blogTitle = blog.title && typeof blog.title === "object" && "absolute" in blog.title
    ? blog.title.absolute
    : "";
  assert.equal(blogTitle, verbatim);
  assert.equal(ogTitle(blog), verbatim);
  assert.equal(blog.description, description);

  const blogEmpty = blogHeadMetadata({
    slug: "our-story",
    local: null,
    doc: {
      title: "Document title that must not replace a set SEO title",
      slug: "our-story",
      excerpt: "Excerpt fallback",
      meta: { title: "", description: "" },
    },
  });
  const emptyTitle = blogEmpty.title && typeof blogEmpty.title === "object" && "absolute" in blogEmpty.title
    ? blogEmpty.title.absolute
    : "";
  assert.match(emptyTitle, / \| Levitt$/);
  assert.notEqual(emptyTitle, verbatim);
  assert.equal(blogEmpty.description, "Excerpt fallback");
});

test("publishing a doc with empty meta leaves the hardcoded head unchanged", () => {
  const doc = aboutDoc({
    status: "published",
    meta: { title: "  ", description: "", noIndex: false, noFollow: false },
    layout: [],
  });
  doc!.doc.excerpt = "Imported excerpt that must not become the meta description.";
  doc!.doc.title = "Chiropractic Services in Saint Louis Park, MN";
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, doc!.doc, "/"), ABOUT_FALLBACK);
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, doc!.doc, "/services"), ABOUT_FALLBACK);
  assert.equal(mergeCmsMetadata(ABOUT_FALLBACK, null, "/about"), ABOUT_FALLBACK);
  assert.equal(ogImage(mergeCmsMetadata(ABOUT_FALLBACK, doc!.doc, "/services"))?.alt, ogImage(ABOUT_FALLBACK)?.alt);
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
  const meta = mergeCmsMetadata(ABOUT_FALLBACK, doc, "/about");
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
      assert.equal(robots.googleBot["max-snippet"], -1);
      assert.equal(robots.googleBot["max-video-preview"], -1);
    }
  }
  assert.deepEqual(ogImage(meta), {
    url: "https://cdn.example.com/about-og.jpg",
    width: 1200,
    height: 630,
    alt: "Clinic",
  });
  const blocked = mergeCmsMetadata(
    ABOUT_FALLBACK,
    { title: "About Our Practice in Saint Louis Park, MN", meta: { image: "/media/file.jpg" } },
    "/about",
  );
  const blockedImage = ogImage(blocked);
  assert.equal(blockedImage?.url, "/images/og-default.jpg");
  assert.equal(blockedImage?.width, 1200);
  assert.equal(blockedImage?.height, 630);
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
    assert.match(source, /withCMSMeta|blogHeadMetadata/, `${rel} must merge CMS metadata`);
    if (!source.includes("CMSRoute")) continue;
    if (rel === "[...path]/page.tsx") {
      assert.match(source, nullChild);
      assert.match(source, /cmsOnlyDocIsRenderable/);
      assert.match(source, /isLivePublicPath/);
      assert.doesNotMatch(source, /excerpt/);
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

const CMS_ONLY_SLUG = "holistic-chiropractor-whole-body-healing";

test("CMS-only post head matches production and is not Post Not Found", () => {
  const doc = {
    title: "Holistic chiropractor whole body healing",
    slug: CMS_ONLY_SLUG,
    path: `/blog/${CMS_ONLY_SLUG}`,
    excerpt: "A whole-body look at how the spine and daily habits interact.",
    coverImage: { url: "https://cdn.example.com/holistic.jpg", alt: "Clinic treatment room" },
    meta: {
      title: "Holistic chiropractor whole body healing",
      description: "How a holistic chiropractor in Saint Louis Park looks past the sore spot.",
      noIndex: false,
      noFollow: false,
    },
  };
  const missing = generateMeta({
    title: "Post Not Found",
    description: "The article you're looking for could not be found.",
    slug: `blog/${CMS_ONLY_SLUG}`,
    noindex: true,
  });
  const head = blogHeadMetadata({ slug: CMS_ONLY_SLUG, local: null, doc });
  const title = head.title && typeof head.title === "object" && "absolute" in head.title
    ? head.title.absolute
    : "";

  assert.equal(title, "Holistic chiropractor whole body healing");
  assert.equal(ogTitle(head), title);
  assert.equal(
    head.description,
    "How a holistic chiropractor in Saint Louis Park looks past the sore spot.",
  );
  assert.deepEqual(head.robots, { index: true, follow: true });
  assert.notDeepEqual(head.robots, missing.robots);
  assert.deepEqual(ogImage(head), {
    url: "https://cdn.example.com/holistic.jpg",
    width: 1200,
    height: 630,
    alt: "Holistic chiropractor whole body healing",
  });
  assert.notEqual(ogImage(head)?.alt, "Post Not Found");
  const twitter = head.twitter;
  assert.ok(twitter && typeof twitter === "object" && twitter.title === title);

  const schema = blogSchemaPost(
    {
      slug: CMS_ONLY_SLUG,
      title: "Post Not Found",
      description: "missing",
      excerpt: "missing",
      publishedAt: "2024-01-01",
      author: { name: "Local", title: "Local", url: "/meet-the-doctor" },
      category: "Local",
      tags: [],
      coverImage: "/images/og-default.jpg",
      coverAlt: "Post Not Found",
      readingMinutes: 1,
      blocks: [],
    },
    doc,
  );
  const jsonLd = blogPostingFromPost(schema);
  assert.equal(jsonLd.headline, "Holistic chiropractor whole body healing");
  assert.equal(
    jsonLd.description,
    "How a holistic chiropractor in Saint Louis Park looks past the sore spot.",
  );
  assert.notEqual(jsonLd.headline, "Post Not Found");
});

test("local post head keeps the production suffix, image shape, and CMS BlogPosting", () => {
  const slug = "applied-kinesiology-minneapolis-chiropractic-care";
  const local = {
    slug,
    title: "Applied kinesiology at the Saint Louis Park office",
    description: "Local description of applied kinesiology.",
    excerpt: "Local excerpt",
    publishedAt: "2024-06-01",
    author: { name: "Dr. Alan Levitt, D.C.", title: "Chiropractor", url: "/meet-the-doctor" },
    category: "Chiropractic Care",
    tags: ["kinesiology"],
    coverImage: "/images/local-cover.jpg",
    coverAlt: "Local cover",
    readingMinutes: 4,
    blocks: [{ type: "p" as const, text: "Local paragraph about applied kinesiology care." }],
  };
  const doc = {
    title: "Applied kinesiology and chiropractic care in Minneapolis",
    slug,
    path: `/blog/${slug}`,
    excerpt: "CMS excerpt",
    coverImage: { url: "https://cdn.example.com/kinesiology.jpg", alt: "Adjustment table" },
    meta: {
      description: "CMS description of applied kinesiology.",
      noIndex: false,
      noFollow: false,
    },
  };
  const head = blogHeadMetadata({ slug, local, doc });
  const title = head.title && typeof head.title === "object" && "absolute" in head.title
    ? head.title.absolute
    : "";
  assert.match(title, / \| Levitt$/);
  assert.equal(head.description, "CMS description of applied kinesiology.");
  assert.deepEqual(head.robots, { index: true, follow: true });
  assert.deepEqual(ogImage(head), {
    url: "https://cdn.example.com/kinesiology.jpg",
    width: 1200,
    height: 630,
    alt: "Applied kinesiology and chiropractic care in Minneapolis",
  });
  const twitter = head.twitter;
  assert.ok(twitter && typeof twitter === "object");
  if (twitter && typeof twitter === "object") assert.equal(twitter.title, title);

  const visible = blogPostingFromPost(local);
  const published = blogPostingFromPost(blogSchemaPost(local, doc));
  assert.equal(visible.headline, local.title);
  assert.equal(published.headline, doc.title);
  assert.equal(published.description, "CMS description of applied kinesiology.");
  assert.notEqual(published.headline, visible.headline);
  assert.notEqual(published.description, visible.description);
});

test("CMS-only blog head matches main 04314cf, not the media alt or googleBot tag", () => {
  const slug = "headache-treatment-saint-louis-park";
  const doc = {
    title: "When Headaches Signal Need for Chiropractic Care",
    slug,
    path: `/blog/${slug}`,
    excerpt: "Imported excerpt",
    coverImage: { url: "https://cdn.example.com/headache.jpg", alt: "headache chiropractor" },
    meta: {
      description: "Headache care at the Saint Louis Park office.",
      image: { url: "https://cdn.example.com/headache.jpg", alt: "headache chiropractor" },
      noIndex: false,
      noFollow: false,
    },
  };
  const head = blogHeadMetadata({ slug, local: null, doc });
  assert.deepEqual(head.robots, { index: true, follow: true });
  assert.equal(ogImage(head)?.alt, "When Headaches Signal Need for Chiropractic Care");
  assert.notEqual(ogImage(head)?.alt, "headache chiropractor");
  assert.equal(ogImage(head)?.url, "https://cdn.example.com/headache.jpg");
  assert.equal(ogImage(head)?.width, 1200);
  assert.equal(ogImage(head)?.height, 630);
  assert.equal(head.description, "Headache care at the Saint Louis Park office.");

  const imaging = blogHeadMetadata({
    slug: "a-minneapolis-chiropractor-explains-imaging",
    local: null,
    doc: {
      title: "Spine Pain or Muscle Strain? Signs and Next Steps",
      slug: "a-minneapolis-chiropractor-explains-imaging",
      coverImage: { url: "https://cdn.example.com/imaging.jpg", alt: "chiropractor" },
      meta: { noIndex: false, noFollow: false },
    },
  });
  assert.equal(ogImage(imaging)?.alt, "Spine Pain or Muscle Strain? Signs and Next Steps");
  assert.deepEqual(imaging.robots, { index: true, follow: true });

  const localOnly = blogHeadMetadata({
    slug: "local-only-note",
    local: {
      slug: "local-only-note",
      title: "A local article",
      description: "Written in the site repo.",
      coverImage: "/images/local-cover.jpg",
    },
    doc: null,
  });
  assert.ok(localOnly.robots && typeof localOnly.robots === "object" && localOnly.robots.googleBot);
  assert.equal(ogImage(localOnly)?.alt, "A local article");
});

test("unpublishing or deleting a page revalidates the previously published path", () => {
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/about", _status: "draft" },
      { path: "/about", _status: "published" },
    ),
    ["/about"],
  );
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/services", _status: "published" },
      { path: "/about", _status: "published" },
    ),
    ["/services", "/about"],
  );
  assert.deepEqual(
    pathsToRevalidate(
      { path: "/blog/post", _status: "published" },
      { path: "/blog/post", _status: "published" },
    ),
    ["/blog/post"],
  );
  assert.deepEqual(
    pathsToRevalidate({ path: "/about", _status: "draft" }, { path: "/about", _status: "draft" }),
    [],
  );
});
