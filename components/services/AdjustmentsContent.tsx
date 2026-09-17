"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";

const techniques = [
  {
    n: "01",
    title: "The Diversified Technique",
    body: "Utilizes rapid, direct thrusts to relieve tension, restore circulation and enhance proper spinal alignment.",
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
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Zone Therapy",
    body: "Targets specific zones in the body and utilizes chiropractic adjustments and spinal massage to help holistically balance each interconnected part.",
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
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Torque Release Technique",
    body: "A gentle and effective spinal adjustment that enables the nervous system to relax and effectively communicate with the whole body from the brain through the spinal column.",
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
        <path d="M21 12a9 9 0 11-3-6.7" />
        <path d="M21 4v5h-5" />
      </svg>
    ),
  },
];

const benefits = [
  "Minimizes pain & alleviates tension",
  "Reduces inflammation",
  "Improves spinal flexibility & alignment",
  "Fosters whole-body healing",
];

const treats = [
  "Lower back pain",
  "Neck pain",
  "Headaches",
  "Musculoskeletal pain",
  "Subluxations",
  "Auto, sports & personal injuries",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AdjustmentsContent() {
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
            <span className="text-orange-200">
              Adjustments and Manipulation
            </span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight sm:mt-5 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-[3.6rem]"
          >
            Adjustments and Manipulation
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
            Precise, holistic spinal care from Dr. Levitt minimizing pain,
            restoring alignment, and supporting full-body healing.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 WHITE: SPLIT IMAGE + INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-slate-200">
                  <Image
                    src="/images/adjustment-1.jpg"
                    alt="Chiropractic adjustment treatment at Levitt Chiropractic Center in Saint Louis Park, MN"
                    width={1210}
                    height={822}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-6 -right-6 hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] px-6 py-4 text-white shadow-xl sm:block"
                >
                  <p className="font-heading text-3xl font-black text-[#F97316]">
                    3
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    Proven
                    <br />
                    Techniques
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Custom-designed Care
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Noninvasive treatment built around you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  Chiropractic care utilizes noninvasive treatments that are
                  custom designed to meet the unique needs of each patient.
                  Levitt Chiropractic Center in Saint Louis Park, MN
                  specializes in treating personal injuries, subluxations,
                  and headaches.
                </p>
                <p>
                  Dr. Levitt believes that the nervous system plays a critical
                  role in overall health and wellness and works to optimize the
                  nervous system through the use of a variety of advanced,
                  holistic healing techniques that enhance traditional
                  chiropractic care. Chiropractic adjustments are one of the
                  most effective treatments that Dr. Levitt recommends to
                  address the fundamental structure and health of the spine.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: WHAT ARE ADJUSTMENTS? + BENEFIT/TREATS LISTS */}
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
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              The Treatment
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What Are Chiropractic Adjustments?
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
              An adjustment is a specific contact on a joint that is not moving
              the way it should — often the neck after Highway 100, or the low
              back after a week at a desk. Dr. Levitt uses Diversified, Zone
              Therapy, or Torque Release depending on the exam, not a one-move
              routine. Some contacts are quick; some are gentle. You should
              know which one and why before it happens.
            </p>
          </motion.div>

          <div className="mx-auto mt-8 sm:mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Benefits
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">
                What adjustments can do
              </h3>
              <ul className="mt-5 space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-white/85 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-3 flex-shrink-0 rounded-full bg-[#F97316]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Commonly Treats
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">
                Conditions that respond
              </h3>
              <ul className="mt-5 space-y-3">
                {treats.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-sm text-white/85 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-3 flex-shrink-0 rounded-full bg-[#F97316]"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 WHITE: TECHNIQUE CARDS, stagger */}
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
              Techniques
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
              Three approaches, one personalized plan
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Diversified is the classic high-velocity move. Zone Therapy and
              Torque Release are quieter. The choice is the exam, not a brand
              preference. If red flags are present — night pain, unexplained
              weight loss, bowel or bladder change, recent major trauma — we
              refer first.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {techniques.map((t) => (
              <motion.article
                key={t.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 shadow-xl shadow-slate-900/10"
              >
                <span
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F97316]/10 blur-2xl"
                />
                <span
                  aria-hidden
                  className="absolute right-6 top-6 font-heading text-5xl font-black text-white/[0.06]"
                >
                  {t.n}
                </span>
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                    {t.icon}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {t.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 DARK NAVY: CLOSING TEXT + FLOATING CTA CARD */}
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
                Whole-body Care
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Holistic, state-of-the-art chiropractic care
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-7 space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
                <p>
                  Levitt Chiropractic Center in Saint Louis Park, MN provides
                  the latest state-of-the-art chiropractic care to address a
                  wide variety of ailments that often involve spinal
                  misalignment. Dr. Levitt also utilizes Functional Medicine to
                  address the root of the patient&rsquo;s problem through a
                  holistic and personalized approach. Functional Medicine can
                  address lifestyle issues such as poor sleep, nutritional
                  deficiencies, stress management, and proper exercise.
                </p>
                <p>
                  Chiropractic care is a holistic, safe, noninvasive modality
                  for treating and maximizing the functionality of the whole
                  body. Levitt Chiropractic Center in Saint Louis Park, MN
                  utilizes the latest research in chiropractic care and related
                  treatment modalities to help patients achieve a pain-free,
                  energized, and improved quality of life. Make an appointment
                  with Dr. Levitt at Levitt Chiropractic Center today.{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                  >
                    (952) 920-7535
                  </a>
                </p>
              </div>
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
                    Ready to Feel Better?
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
