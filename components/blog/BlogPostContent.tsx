"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  blogPostingJsonLd,
  faqPageJsonLd,
} from "@/lib/jsonLd";
import { formatPostDate, type BlogBlock, type BlogPost, type InlineSpan } from "@/lib/blog";
import { isRemoteImage } from "@/lib/cms/mediaUrl";
import { siteConfig } from "@/lib/siteConfig";

type BlogPostContentProps = {
  post: BlogPost;
  related: BlogPost[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const inlineLinkClass =
  "font-semibold text-[#F97316] underline decoration-[#F97316]/40 underline-offset-4 transition-colors hover:decoration-[#F97316]";

function renderSpans(spans: InlineSpan[]) {
  return spans.map((span, i) => {
    const emphasis = [
      span.bold ? "font-semibold" : "",
      span.italic ? "italic" : "",
    ]
      .filter(Boolean)
      .join(" ");
    if (!span.href) {
      return (
        <span key={i} className={emphasis || undefined}>
          {span.text}
        </span>
      );
    }
    const isExternal =
      span.external ??
      (/^https?:\/\//.test(span.href) && !span.href.startsWith(siteConfig.url));
    if (isExternal) {
      return (
        <a
          key={i}
          href={span.href}
          target="_blank"
          rel="noopener noreferrer"
          className={inlineLinkClass}
        >
          {span.text}
        </a>
      );
    }
    const internalHref =
      span.href.replace(siteConfig.url, "").replace(/^https?:\/\/[^/]+/, "") || "/";
    return (
      <Link key={i} href={internalHref} className={inlineLinkClass}>
        {span.text}
      </Link>
    );
  });
}

function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "p":
      return (
        <p
          key={index}
          className="mt-5 text-base leading-[1.75] text-slate-700 sm:text-[1.0625rem]"
        >
          {block.spans?.length ? renderSpans(block.spans) : block.text}
        </p>
      );
    case "image":
      return (
        <figure key={index} className="mt-8">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.width || 1600}
            height={block.height || 900}
            sizes="(min-width: 1024px) 48rem, 100vw"
            className="h-auto w-full rounded-2xl"
            style={{ width: "100%", height: "auto" }}
            unoptimized={isRemoteImage(block.src)}
          />
        </figure>
      );
    case "h2":
      return (
        <h2
          key={index}
          id={block.id}
          className="mt-12 scroll-mt-28 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={index}
          id={block.id}
          className="mt-8 scroll-mt-28 font-heading text-xl font-semibold tracking-tight text-[#0F172A] sm:text-2xl"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={index}
          className="mt-5 space-y-2 text-base leading-[1.7] text-slate-700 sm:text-[1.0625rem]"
        >
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={index}
          className="mt-5 list-decimal space-y-2 pl-6 text-base leading-[1.7] text-slate-700 marker:font-semibold marker:text-[#F97316] sm:text-[1.0625rem]"
        >
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-8 border-l-4 border-[#F97316] bg-slate-50 px-6 py-5 text-base italic leading-[1.7] text-slate-700 sm:text-[1.0625rem]"
        >
          <p>“{block.text}”</p>
          {block.cite && (
            <cite className="mt-3 block text-xs font-semibold uppercase not-italic tracking-[0.22em] text-slate-500">
 {block.cite}
            </cite>
          )}
        </blockquote>
      );
    case "callout":
      return (
        <aside
          key={index}
          className="mt-8 rounded-2xl border border-[#F97316]/30 bg-[#F97316]/5 p-6"
        >
          {block.title && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F97316]">
              {block.title}
            </p>
          )}
          <p className="mt-2 text-base leading-[1.7] text-slate-800 sm:text-[1.0625rem]">
            {block.text}
          </p>
        </aside>
      );
    case "cta":
      return (
        <aside
          key={index}
          className="mt-12 rounded-2xl border border-[#F97316]/30 bg-gradient-to-br from-[#F97316]/10 via-white to-white p-6 sm:p-8"
        >
          <h2 className="font-heading text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl">
            {block.title}
          </h2>
          <p className="mt-4 text-base leading-[1.75] text-slate-700 sm:text-[1.0625rem]">
            {block.segments.map((seg, i) => {
              if (!seg.href) return <span key={i}>{seg.text}</span>;
              const isExternal =
                seg.external ??
                (/^https?:\/\//.test(seg.href) &&
                  !seg.href.startsWith(siteConfig.url));
              if (isExternal) {
                return (
                  <a
                    key={i}
                    href={seg.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#F97316] underline decoration-[#F97316]/40 underline-offset-4 transition-colors hover:decoration-[#F97316]"
                  >
                    {seg.text}
                  </a>
                );
              }
              const internalHref = seg.href
                .replace(siteConfig.url, "")
                .replace(/^https?:\/\/[^/]+/, "") || "/";
              return (
                <Link
                  key={i}
                  href={internalHref}
                  className="font-semibold text-[#F97316] underline decoration-[#F97316]/40 underline-offset-4 transition-colors hover:decoration-[#F97316]"
                >
                  {seg.text}
                </Link>
              );
            })}
          </p>
        </aside>
      );
    default:
      return null;
  }
}

function wordCountFromBlocks(blocks: BlogBlock[]): number {
  let total = 0;
  for (const b of blocks) {
    if (b.type === "cta") {
      total += b.title.trim().split(/\s+/).length;
      for (const seg of b.segments) {
        total += seg.text.trim().split(/\s+/).length;
      }
      continue;
    }
    if ("text" in b && typeof b.text === "string") {
      total += b.text.trim().split(/\s+/).length;
    }
    if ("items" in b) {
      for (const it of b.items) total += it.trim().split(/\s+/).length;
    }
  }
  return total;
}

export function BlogPostContent({ post, related }: BlogPostContentProps) {
  const wordCount = wordCountFromBlocks(post.blocks);
  const headings = post.blocks.filter(
    (b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2" && Boolean(b.id),
  );

  return (
    <>
      <JsonLd
        id={`ld-blog-${post.slug}`}
        data={blogPostingJsonLd({
          slug: post.slug,
          title: post.title,
          description: post.description,
          image: post.coverImage,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          authorName: post.author.name,
          authorUrl: post.author.url,
          keywords: post.tags,
          articleSection: post.category,
          wordCount,
        })}
      />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd
          id={`ld-blog-faq-${post.slug}`}
          data={faqPageJsonLd({ faqs: post.faqs })}
        />
      )}

      <PageHero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        watermark="Article"
      />

      {/* Cover image */}
      <section className="relative bg-white pt-10 sm:pt-14">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200"
          >
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
              className="object-cover"
              unoptimized={isRemoteImage(post.coverImage)}
            />
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="relative bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500"
            >
              <time dateTime={post.publishedAt}>
                {formatPostDate(post.publishedAt)}
              </time>
              <span aria-hidden className="text-slate-300">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden className="text-slate-300">·</span>
              <span className="text-[#F97316]">{post.category}</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="prose-host"
            >
              {post.blocks.map(renderBlock)}
            </motion.div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-16">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                  Frequently asked questions
                </h2>
                <dl className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
                  {post.faqs.map((f, i) => (
                    <div key={i} className="p-6">
                      <dt className="font-heading text-base font-semibold text-[#0F172A] sm:text-lg">
                        {f.q}
                      </dt>
                      <dd className="mt-2 text-base leading-[1.7] text-slate-700">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Author card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F97316]">
                  Author
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-[#0F172A]">
                  {post.author.name}
                </p>
                {post.author.title && (
                  <p className="mt-1 text-sm text-slate-600">
                    {post.author.title}
                  </p>
                )}
                {post.author.url && (
                  <Link
                    href={post.author.url}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F97316] hover:text-orange-600"
                  >
                    About Dr. Levitt
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>

              {/* Table of contents */}
              {headings.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F97316]">
                    On this page
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="transition-colors hover:text-[#F97316]"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F] p-6 text-white shadow-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                  Take the next step
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold">
                  Ready to feel better?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Make an appointment with Dr. Levitt and we&rsquo;ll build a
                  plan around your case.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/contact/appointment-request"
                    className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-orange-600"
                  >
                    Request appointment
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white hover:bg-white/10"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="relative bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">
                Keep reading
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Related articles
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
