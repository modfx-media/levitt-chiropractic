"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/jsonLd";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function OrangeRule({ center = false }: { center?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-4 block h-1 w-16 rounded-full bg-[#F97316] ${center ? "mx-auto" : ""}`}
    />
  );
}

export function SectionIntro({
  eyebrow,
  title,
  dark = false,
  center = false,
  children,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={center ? "mx-auto max-w-2xl text-center" : undefined}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${dark ? "text-orange-400" : "text-orange-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#0F172A]"} ${center ? "lg:text-5xl" : ""}`}
      >
        {title}
      </h2>
      <OrangeRule center={center} />
      {children ? (
        <div
          className={`mt-6 space-y-4 text-base leading-relaxed sm:text-lg ${dark ? "text-white/75" : "text-slate-700"}`}
        >
          {children}
        </div>
      ) : null}
    </motion.div>
  );
}

export function FaqBlock({
  id,
  eyebrow,
  title,
  intro,
  faqs,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="relative bg-white py-12 sm:py-20 md:py-24">
      <JsonLd id={id} data={faqPageJsonLd({ faqs })} />
      <div className="mx-auto max-w-3xl px-6">
        <SectionIntro eyebrow={eyebrow} title={title}>
          <p>{intro}</p>
        </SectionIntro>
        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold text-[#0F172A]">
                {faq.q}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {faq.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedCare({
  eyebrow,
  title,
  intro,
  links,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  links: { href: string; label: string; note: string }[];
}) {
  return (
    <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro eyebrow={eyebrow} title={title}>
          <p>{intro}</p>
        </SectionIntro>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-heading text-base font-bold text-[#0F172A]">
                  {link.label}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                  {link.note}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
