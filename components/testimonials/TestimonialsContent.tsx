"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Testimonial = {
  name: string;
  quote: string;
  when?: string;
};

type TestimonialsContentProps = {
  items: Testimonial[];
  rating: number;
  reviewCount: number;
  reviewsUrl: string;
};

function excerpt(quote: string, max = 220) {
  if (quote.length <= max) return quote;
  const cut = quote.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 160 ? lastSpace : max).trim()}…`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function QuoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
      aria-hidden
    >
      <path d="M9.5 6.5C7 7 5 9 5 12v6h6v-6H8c0-2 1-3.5 3-4l-1.5-1.5zM18.5 6.5C16 7 14 9 14 12v6h6v-6h-3c0-2 1-3.5 3-4l-1.5-1.5z" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          fill="#F97316"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  const [open, setOpen] = useState(false);
  const short = excerpt(t.quote);
  const isLong = t.quote.length > short.length + 8;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
    >
      <span
        aria-hidden
        className="absolute right-5 top-5 font-heading text-4xl font-black text-[#0F172A]/[0.05]"
      >
        0{i + 1}
      </span>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/10 text-[#F97316] ring-1 ring-[#F97316]/20">
        <QuoteIcon />
      </span>
      <div className="mt-4 flex items-center justify-between gap-3">
        <FiveStars />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Google
        </span>
      </div>

      <div className="mt-5 text-sm leading-relaxed text-slate-700">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={open ? "full" : "short"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {open ? t.quote : short}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0F172A]">
            {t.name}
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-500">
            {t.when ?? "Posted on Google"}
          </p>
        </div>
        {isLong && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F97316] transition-colors hover:text-orange-600"
          >
            {open ? "Show Less" : "Show More"}
            <span
              aria-hidden
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>
        )}
      </div>
    </motion.article>
  );
}

export default function TestimonialsContent({
  items,
  rating,
  reviewCount,
  reviewsUrl,
}: TestimonialsContentProps) {
  return (
    <>
      <ServiceHero
        title="Testimonials"
        subtitle="What our patients have to say about Dr. Levitt and the team at Levitt Chiropractic Center."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Testimonials" },
        ]}
      />

      {/* SECTION 2 WHITE: STATS BAR */}
      <section className="relative bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="font-heading text-4xl font-black text-[#0F172A]">
                39
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Years in practice
              </p>
            </div>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-t-4 border-[#F97316] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
            >
              <p className="font-heading text-4xl font-black text-[#0F172A]">
                {rating.toFixed(1)}★
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {reviewCount} Google reviews
              </p>
            </a>
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="font-heading text-4xl font-black text-[#0F172A]">
                16
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Years of return visits (and counting)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: TESTIMONIAL GRID */}
      <section className="relative overflow-hidden bg-[#0F172A] py-12 sm:py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Google reviews
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Patients in their own words
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 underline-offset-4 hover:underline"
            >
              View all Google reviews
            </a>
          </motion.div>

          {items.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            {items.map((t, i) => (
              <TestimonialCard key={t.name} t={t} i={i} />
            ))}
          </motion.div>
          ) : null}
        </div>
      </section>

      {/* SECTION 4 WHITE: CLOSING + CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Your Story Next
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Ready to feel better?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Join the patients who trust Dr. Levitt with their care. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>{" "}
                to schedule your first appointment.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Become a Patient"
                title="Start your story"
                body="Schedule your first visit with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
