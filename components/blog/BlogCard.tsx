"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { formatPostDate, type BlogPost } from "@/lib/blog";
import { isRemoteImage } from "@/lib/cms/mediaUrl";

type BlogCardProps = {
  post: BlogPost;
  /** Index in a grid used for staggered animation delay. */
  index?: number;
  /** When true, renders a more prominent, wider card (used as the lead post). */
  feature?: boolean;
};

export function BlogCard({ post, index = 0, feature = false }: BlogCardProps) {
  const reduce = useReducedMotion();
  const href = `/blog/${post.slug}`;
  const delay = Math.min(index * 0.08, 0.4);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -4 }}
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl " +
        (feature ? "lg:flex-row" : "")
      }
    >
      <Link
        href={href}
        aria-label={post.title}
        className="absolute inset-0 z-10"
      />
      <div
        className={
          "relative w-full overflow-hidden bg-slate-100 " +
          (feature ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]")
        }
      >
        <Image
          src={post.coverImage}
          alt={post.coverAlt}
          fill
          sizes={feature ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized={isRemoteImage(post.coverImage)}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F172A] shadow-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          <span aria-hidden className="mx-2 text-slate-300">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h3
          className={
            "mt-3 font-heading font-bold tracking-tight text-[#0F172A] transition-colors group-hover:text-[#F97316] " +
            (feature ? "text-2xl sm:text-3xl" : "text-xl")
          }
        >
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F97316]">
          Read article
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}
