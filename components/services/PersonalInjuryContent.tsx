"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const accidents = [
  {
    title: "Bike and pedestrian collisions",
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
        <circle cx="6" cy="17" r="3.5" />
        <circle cx="18" cy="17" r="3.5" />
        <path d="M6 17l4-8h6l-3 8" />
        <path d="M14 5h3" />
      </svg>
    ),
  },
  {
    title: "Boat and airplane accidents",
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
        <path d="M21 16l-9-13L3 16" />
        <path d="M5 19l7-2 7 2" />
      </svg>
    ),
  },
  {
    title: "Construction accidents",
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
        <path d="M3 18h18" />
        <path d="M5 18V9a7 7 0 0114 0v9" />
        <path d="M9 18v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "OSHA violations",
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
        <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Medical malpractice",
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
        <path d="M19 14c-2 0-3 2-3 4a3 3 0 003 3 3 3 0 003-3c0-2-1-4-3-4z" />
        <path d="M6 3v6a4 4 0 008 0V3" />
        <path d="M6 3h2M12 3h2" />
        <path d="M10 13v3a6 6 0 006 6" />
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

export default function PersonalInjuryContent() {
  return (
    <>
      <ServiceHero
        title="Personal Injury"
        subtitle="Specialized chiropractic care to uncover and treat the underlying issues that follow a personal injury accident."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Injuries", href: "/injuries" },
          { label: "Personal Injury" },
        ]}
      />

      {/* SECTION 2 WHITE: DEFINITION */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              The Definition
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              What counts as a personal injury?
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Personal injury here means the body after a crash, a fall, a
              bike hit, or a workplace mishap — not a slogan. Minnesota
              no-fault (PIP) can cover chiropractic medical expense after an
              auto crash through your own auto policy. We still examine you
              as a patient. Bring ER or urgent-care notes if you have them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: ACCIDENT TYPES GRID */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Common Accident Types
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Accidents or mishaps such as:
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: {
                transition: { delayChildren: 0.1, staggerChildren: 0.07 },
              },
            }}
            className="mt-8 sm:mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {accidents.map((a) => (
              <motion.article
                key={a.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F97316]/10 blur-2xl"
                />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                    {a.icon}
                  </span>
                  <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                    {a.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: HOW WE HELP */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                How We Help
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                We uncover what other providers miss
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  Chiropractors are professionals who uncover underlying issues
                  in personal injury accidents. Whether using a single spinal
                  adjustment or a series of treatment, visiting a chiropractor
                  is one of the best options to start the healing process.
                </p>
                <p>
                  If you find yourself in a personal injury accident, schedule
                  a consultation with a chiropractor, as you may have
                  underlying issues that we can help diagnose and treat.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Two Approaches
                  </p>
                  <ul className="mt-5 space-y-5">
                    <li>
                      <p className="font-heading text-lg font-bold text-white">
                        A single spinal adjustment
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        Sometimes one targeted correction is enough to start
                        the healing process.
                      </p>
                    </li>
                    <li className="border-t border-white/10 pt-5">
                      <p className="font-heading text-lg font-bold text-white">
                        A series of treatments
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        For deeper or layered injuries, a custom treatment
                        plan addresses each underlying issue.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 DARK NAVY: CLOSING + CTA */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
                After an Accident
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Start the healing process today
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
                Whiplash and lumbar strain often feel “not that bad” the night
                of a Highway 100 or I-394 rear-end and worse two days later.
                Early documentation matters for PIP and for your own recovery.
                Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  (952) 920-7535
                </a>{" "}
                — we do not write injury letters without an exam.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Personal Injury"
                title="Schedule a consultation"
                body="Diagnose and treat underlying issues before they get worse."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
