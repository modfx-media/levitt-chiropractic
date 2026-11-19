"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { servicesDefaults } from "@/lib/designed/defaults/servicesDefaults";
import { mergeContent } from "@/lib/designed/merge";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock } from "@/components/services/enrichment";

type ServiceIcon = {
  href: string;
  icon: React.ReactNode;
};

const services: ServiceIcon[] = [
  {
    href: "/adjustments-and-manipulation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" />
      </svg>
    ),
  },
  {
    href: "/common-chiropractic-conditions",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    href: "/back-pain-treatments",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5l3 2" />
      </svg>
    ),
  },
  {
    href: "/degenerative-disc-disease",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <rect x="4" y="6" width="16" height="3" rx="1" />
        <rect x="6" y="11" width="12" height="3" rx="1" />
        <rect x="4" y="16" width="16" height="3" rx="1" />
      </svg>
    ),
  },
  {
    href: "/cold-laser-therapy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    href: "/cryotherapy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" />
      </svg>
    ),
  },
  {
    href: "/therapeutic-exercise",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="5" r="2" />
        <path d="M11 22l1-7 3 4 3-1M7 13l3-3 2 5" />
      </svg>
    ),
  },
  {
    href: "/custom-foot-orthotics",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M8 22V12a4 4 0 014-4h0a4 4 0 014 4v10M6 6c0-2 2-4 6-4s6 2 6 4M9 22h6" />
      </svg>
    ),
  },
  {
    href: "/functional-medicine",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "/neck-pain",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M9 20l3-6 3 6" />
      </svg>
    ),
  },
  {
    href: "/alternative-medicine",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M12 2C7 8 5 12 5 15a7 7 0 0014 0c0-3-2-7-7-13z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};


export default function ServicesContent({ content }: { content?: unknown }) {
  const copy = mergeContent(servicesDefaults, content);
  const icons = Object.fromEntries(services.map((service) => [service.href, service.icon]));
  const linkClass = "font-semibold text-[#F97316] underline-offset-4 hover:underline";
  const closingLinkClass = "font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline";

  return (
    <>
      <ServiceHero
        title={copy.hero.title}
        subtitle={copy.hero.subtitle}
        crumbs={copy.hero.crumbs}
      />

      {/* SECTION 2 WHITE: INTRO + STATS */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                {copy.intro.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                {copy.intro.title}
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  {copy.intro.beforeAddress}{" "}
                  {siteConfig.address.full}
                  {copy.intro.afterAddress}{" "}
                  <a href={siteConfig.phoneHref} className={linkClass}>
                    {siteConfig.phone}
                  </a>
                  {copy.intro.afterPhone}
                </p>
                <p>
                  {copy.intro.bodyPart}{" "}
                  <Link href={copy.intro.conditions.href} className={linkClass}>
                    {copy.intro.conditions.label}
                  </Link>{" "}
                  {copy.intro.afterConditions}
                </p>
                <p>{copy.intro.tools}</p>
                <p>{copy.intro.flags}</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {copy.intro.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-shadow hover:shadow-md sm:p-5"
                  >
                    <p className="font-heading text-2xl font-black text-[#F97316] sm:text-3xl md:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0F172A]/60 sm:text-[10px] sm:tracking-[0.18em] md:text-[11px]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: SERVICE GRID GROUPED */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
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
              {copy.catalog.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {copy.catalog.title}
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-14 space-y-16">
            {copy.catalog.groups.map((groupName) => {
              const groupServices = copy.catalog.services.filter(
                (s) => s.group === groupName,
              );
              if (groupServices.length === 0) return null;
              return (
                <motion.div
                  key={groupName}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 flex items-center gap-4"
                  >
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-r from-[#F97316]/60 to-transparent"
                    />
                    <h3 className="font-heading text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
                      {groupName}
                    </h3>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-gradient-to-l from-[#F97316]/60 to-transparent"
                    />
                  </motion.div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {groupServices.map((s) => (
                      <motion.div
                        key={s.href}
                        variants={{
                          hidden: { opacity: 0, y: 24 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                      >
                        <Link
                          href={s.href}
                          className="group relative block h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-[#1E3A5F]/80 hover:ring-[#F97316]/40"
                        >
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30 transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                            {icons[s.href]}
                          </span>
                          <h4 className="mt-5 font-heading text-lg font-bold text-white">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-white/70">
                            {s.description}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-colors group-hover:text-[#F97316]">
                            {copy.catalog.learnMore}
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
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">{copy.plan.eyebrow}</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">{copy.plan.title}</h2>
          <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>{copy.plan.boxes}</p>
            <p>{copy.plan.bundle}</p>
            <p>{copy.plan.payment}</p>
            <p>
              {copy.plan.beforeExpect}{" "}
              <Link href={copy.plan.expect.href} className={linkClass}>{copy.plan.expect.label}</Link>{" "}
              {copy.plan.beforeForm}{" "}
              <Link href={copy.plan.form.href} className={linkClass}>{copy.plan.form.label}</Link>
              {copy.plan.afterForm}
            </p>
            <p>{copy.plan.recovery}</p>
            <p>
              {copy.plan.beforeDoctor}{" "}
              <Link href={copy.plan.doctor.href} className={linkClass}>{copy.plan.doctor.label}</Link>
              . {copy.plan.afterDoctor}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">{copy.reading.title}</h2>
          {copy.reading.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <FaqBlock
        id="ld-faq-services"
        eyebrow={copy.faqs.eyebrow}
        title={copy.faqs.title}
        intro={copy.faqs.intro}
        faqs={copy.faqs.items}
      />

      {/* SECTION 4 WHITE: CTA */}
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
                {copy.closing.eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                {copy.closing.title}
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                {copy.closing.beforePhone}{" "}
                <a href={siteConfig.phoneHref} className={closingLinkClass}>
                  {siteConfig.phone}
                </a>{" "}
                {copy.closing.beforeVisit}{" "}
                <Link href={copy.closing.visit.href} className={closingLinkClass}>
                  {copy.closing.visit.label}
                </Link>{" "}
                {copy.closing.afterVisit}
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow={copy.cta.eyebrow}
                title={copy.cta.title}
                body={copy.cta.body}
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
