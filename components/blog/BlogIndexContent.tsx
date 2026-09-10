"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogIndexJsonLd } from "@/lib/jsonLd";
import { siteConfig } from "@/lib/siteConfig";
import type { BlogPost } from "@/lib/blog";

type BlogIndexContentProps = {
  posts: BlogPost[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ALL_CATEGORY = "All";

export function BlogIndexContent({ posts }: BlogIndexContentProps) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of posts) set.add(p.category);
    return [ALL_CATEGORY, ...Array.from(set).sort()];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

  const filtered = useMemo(
    () =>
      activeCategory === ALL_CATEGORY
        ? posts
        : posts.filter((p) => p.category === activeCategory),
    [posts, activeCategory],
  );

  const [lead, ...rest] = filtered;

  return (
    <>
      <JsonLd
        id="ld-blog-index"
        data={blogIndexJsonLd({
          posts: posts.map((p) => ({
            slug: p.slug,
            title: p.title,
            description: p.description,
            publishedAt: p.publishedAt,
            updatedAt: p.updatedAt,
            authorName: p.author.name,
            image: p.coverImage,
          })),
        })}
      />
      <PageHero
        eyebrow="Insights"
        title="Chiropractic Insights & Guides"
        subtitle="Plain-language articles on spinal health, recovery, and how to get the most out of chiropractic care written by Dr. Alan Levitt."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        watermark="Blog"
      />

      {/* Category filter */}
      <section className="relative border-b border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={
                    "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors " +
                    (isActive
                      ? "border-[#F97316] bg-[#F97316] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#F97316]/40 hover:text-[#F97316]")
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead post */}
      {lead && (
        <section className="relative bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">
                {activeCategory === ALL_CATEGORY ? "Latest article" : activeCategory}
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                Just published
              </h2>
            </motion.div>
            <BlogCard post={lead} feature />
          </div>
        </section>
      )}

      {!lead && (
        <section className="relative bg-white py-20 text-center">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-base text-slate-600">
              No articles found in this category yet. Check back soon or
              browse another topic above.
            </p>
          </div>
        </section>
      )}

      {/* Remaining posts */}
      {rest.length > 0 && (
        <section className="relative bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">
                  More from the blog
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                  All articles
                </h2>
              </div>
            </motion.div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F97316]/15 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F97316]">
                Have a question we should write about?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Care that meets you where you are.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                Articles are a great place to learn but the best plan is one
                built around your case. Reach out and we&rsquo;ll walk through
                it with you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="/contact/appointment-request"
                className="inline-flex items-center justify-center rounded-full bg-[#F97316] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-orange-600"
              >
                Request appointment
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
