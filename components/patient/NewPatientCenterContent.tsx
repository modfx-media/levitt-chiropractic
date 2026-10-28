"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Card = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    title: "What to Expect",
    description:
      "A friendly walkthrough of your first appointment paperwork, exam, goals, and your personalized care plan.",
    href: "/new-patient-center/what-to-expect",
    cta: "Read the Walkthrough",
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
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Request an Appointment",
    description:
      "Reach out and our team will follow up to confirm a time. New patients are welcome call us with any questions.",
    href: "/contact/new-patient-appointment",
    cta: "Request a Visit",
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
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Reach out",
    body: "Call us or request an appointment online we&rsquo;ll confirm a time that works for you.",
  },
  {
    n: "02",
    title: "Bring the essentials",
    body: "Photo ID and comfortable clothing you can move in. Plan to arrive 10–15 minutes early.",
  },
  {
    n: "03",
    title: "Meet Dr. Levitt",
    body: "We&rsquo;ll review your history, examine, discuss your goals, and build a plan together.",
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

export default function NewPatientCenterContent() {
  return (
    <>
      <ServiceHero
        title="New Patient Center"
        subtitle="Everything you need to start care with Dr. Levitt paperwork, expectations, and a warm welcome."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "New Patient Center" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Welcome
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              We&rsquo;ve made starting care easy
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              If chiropractic care is new to you, don&rsquo;t worry we walk
              you through every step. Download your forms in advance, see
              what to expect on your first visit, and call us with any
              questions. We can&rsquo;t wait to meet you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: 2 BIG CARDS */}
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
              Start Here
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Two ways to prepare
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {cards.map((c) => (
              <motion.div
                key={c.href}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <Link
                  href={c.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all hover:-translate-y-1.5 hover:bg-[#1E3A5F]/80 hover:ring-[#F97316]/40"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30 transition-colors group-hover:bg-[#F97316] group-hover:text-white">
                    {c.icon}
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/75">
                    {c.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-colors group-hover:text-[#F97316]">
                    {c.cta}
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
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: 3-STEP CHECKLIST */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Quick Checklist
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Three steps before your visit
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
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-3 lg:gap-8"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="font-heading text-4xl font-black text-[#F97316]">
                  {s.n}
                </p>
                <h3 className="mt-4 font-heading text-lg font-bold text-[#0F172A]">
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-slate-600"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 WHITE: CTA */}
      <section className="relative bg-white pb-20 sm:pb-24">
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
                Ready to Schedule?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Let&rsquo;s book your first visit
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact/new-patient-appointment"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request an appointment online
                </Link>
                . We&rsquo;ll be in touch shortly.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="New Patients Welcome"
                title="Book your first visit"
                body="Schedule online or call us today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
