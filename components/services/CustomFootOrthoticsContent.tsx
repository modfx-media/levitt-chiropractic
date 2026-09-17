"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";

const benefits = [
  {
    title: "Realigns the foot & ankle",
    body: "Helps reset the foundation of your stance so each step lands the way it should.",
  },
  {
    title: "Eases pressure upstream",
    body: "Takes stress off your back, neck, shoulders, and hips by correcting how forces travel through the body.",
  },
  {
    title: "Cushions every step",
    body: "Provides comfort, supports your arches, and evenly distributes body weight across your feet.",
  },
];

const vsOtc = [
  {
    label: "Built precisely for your feet",
    custom: "Matches the contours of your feet and the way you move.",
    otc: "“One-size-fits-all” inserts rarely match your feet well.",
  },
  {
    label: "Prescribed by your chiropractor",
    custom: "Designed for your alignment, activity, and condition.",
    otc: "Generic support with no clinical evaluation.",
  },
  {
    label: "Built to last over a year",
    custom: "Most prescription orthotics last well over a year in regular use.",
    otc: "Inserts wear down quickly and lose support.",
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

export default function CustomFootOrthoticsContent() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* SECTION 1 NARROW DARK NAVY HERO (45vh) */}
      <section
        className="relative isolate flex items-center overflow-hidden bg-[#0F172A] text-white min-h-[38vh] sm:min-h-[45vh]"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#F97316]/15 blur-[140px]"
          animate={reduce ? undefined : { y: [0, 22, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:pt-32">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-400"
          >
            <Link href="/" className="transition-colors hover:text-orange-300">
              Home
            </Link>{" "}
            <span className="text-white/30">/</span>{" "}
            <span className="text-white/55">Services</span>{" "}
            <span className="text-white/30">/</span>{" "}
            <span className="text-orange-200">Custom Foot Orthotics</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight sm:mt-5 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-[3.6rem]"
          >
            Custom Foot Orthotics
          </motion.h1>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{ transformOrigin: "left" }}
            className="mt-4 block h-1 w-20 rounded-full bg-[#F97316]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            Prescription orthotics built around your feet. Heel-spur and
            plantar pain often calm down when the gait stops grinding the same
            spot — we cannot sand a spur off the bone.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 WHITE: INTRO + BENEFIT CARDS */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Start From the Ground Up
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Better alignment starts in your shoes
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              If the heel hurts first thing in the morning, or the knee tracks
              badly after a West End walk, the foot is often the missing
              lever. Custom devices are molded to your foot, not pulled from a
              wall rack. Over-the-counter inserts are cheaper and usually the
              wrong shape. We will say so if the problem is a hip that is not
              coming from the ground up — or if you need a surgeon first.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {benefits.map((b, i) => (
              <motion.article
                key={b.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-white p-7 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-xl"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-heading text-4xl font-black text-[#F97316]/10"
                >
                  0{i + 1}
                </span>
                <h3 className="relative font-heading text-lg font-bold text-[#0F172A]">
                  {b.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-700">
                  {b.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: HOW DO ORTHOTICS WORK? */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              The Treatment
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How Do Orthotics Work?
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
              <p>
                Custom foot orthotics are specially-­made devices that fit
                inside most shoes. They match the contours of your feet
                precisely, and are designed for the way you move.
              </p>
              <p>
                Orthotics can help anyone with discomfort relating to walking,
                or imbalances in the body that are known to cause related pain.
                A tremendous benefit of custom orthotics is that they can be
                worn on a daily basis and utilized during most activities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: CUSTOM vs OTC COMPARISON */}
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
              Why Custom
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Custom orthotics vs. drugstore inserts
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Custom orthotics can be prescribed by your chiropractor, and last
              well over a year in most cases. While over­-the-­counter shoe
              inserts are available at most drugstores, they lack the
              custom­-built precision of a prescription orthotic.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="mt-14 overflow-hidden rounded-2xl border border-slate-200 shadow-lg"
          >
            {/* Header row */}
            <div className="hidden grid-cols-12 bg-[#0F172A] text-white md:grid">
              <div className="col-span-4 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Compare
              </div>
              <div className="col-span-4 border-l border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                Custom Orthotics
              </div>
              <div className="col-span-4 border-l border-white/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                OTC Inserts
              </div>
            </div>

            {vsOtc.map((row) => (
              <motion.div
                key={row.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="grid grid-cols-1 border-t border-slate-200 bg-white text-sm md:grid-cols-12 md:text-base"
              >
                <div className="col-span-4 bg-slate-50 px-6 py-5 font-heading text-base font-bold text-[#0F172A] md:text-lg">
                  {row.label}
                </div>
                <div className="col-span-4 border-t border-slate-200 px-6 py-5 text-slate-700 md:border-l md:border-t-0">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{row.custom}</span>
                  </div>
                </div>
                <div className="col-span-4 border-t border-slate-200 px-6 py-5 text-slate-600 md:border-l md:border-t-0">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-slate-300 text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3"
                        aria-hidden
                      >
                        <path d="M18 6L6 18" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </span>
                    <span>{row.otc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 DARK NAVY: CLOSING + FLOATING CTA */}
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
                Talk to Dr. Levitt
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Could orthotics fit your treatment plan?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
                Interested in incorporating orthotics into your treatment
                plan? Contact your trusted chiropractor and schedule an
                appointment to discuss how custom orthotics might ease your
                discomfort. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  (952) 920-7535
                </a>{" "}
                or request a visit online.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <motion.aside
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="sticky top-28 overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F] p-8 shadow-2xl ring-1 ring-white/10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Take the Next Step
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                    Schedule a fitting
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Make an appointment with Dr. Levitt today.
                  </p>

                  <div className="mt-6 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                      Call Now
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-1 block font-heading text-2xl font-black text-orange-400 transition-colors hover:text-orange-300"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="mt-5"
                  >
                    <Link
                      href="/appointment"
                      className="flex h-12 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-md shadow-orange-500/30 transition-colors hover:bg-orange-600"
                    >
                      Request Appointment →
                    </Link>
                  </motion.div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 WHITE: LOCATION STRIP */}
      <LocationStrip />
    </>
  );
}
