"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";

const conditions = [
  "Acute and chronic pain",
  "Ligament sprains",
  "Muscle strain",
  "Soft tissue injuries",
  "Tendonitis",
  "Arthritis",
  "Tennis elbow",
  "Back pain",
  "Bursitis",
  "Carpal tunnel syndrome",
  "Fibromyalgia",
  "Wound healing",
];

const advantages = [
  {
    title: "No surgery",
    body: "Non-invasive the device sits over the skin without any incision.",
  },
  {
    title: "No drugs",
    body: "Drug-free pain relief that supports the body’s natural healing response.",
  },
  {
    title: "Minimal heat",
    body: "Uses radiation intensities that induce minimal temperature elevation (0.1–0.5°C, if any).",
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

export default function ColdLaserTherapyContent() {
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
            <span className="text-orange-200">Cold Laser Therapy</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-heading text-3xl font-black leading-[1.1] tracking-tight sm:mt-5 sm:text-4xl sm:leading-[1.05] md:text-5xl lg:text-[3.6rem]"
          >
            Cold Laser Therapy
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
            Low-level laser therapy for drug-free pain relief no surgery, no
            medication, just focused light that accelerates healing.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 WHITE: SPLIT visual badge + intro paragraph */}
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
              <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-[#F97316]/15 blur-2xl"
                />
                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : { opacity: [0.35, 1, 0.35], scale: [1, 1.04, 1] }
                  }
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 grid place-items-center rounded-full border border-[#F97316]/30 bg-[#0F172A] shadow-2xl ring-1 ring-white/10"
                >
                  <motion.span
                    aria-hidden
                    animate={
                      reduce
                        ? undefined
                        : { scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }
                    }
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border border-[#F97316]/40"
                  />
                  <div className="relative text-center">
                    <p className="font-heading text-6xl font-black text-[#F97316] drop-shadow-[0_0_24px_rgba(249,115,22,0.55)]">
                      ✦
                    </p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      Low Level Laser
                    </p>
                  </div>
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
                The Treatment
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                What is Cold Laser Therapy?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  Cold laser therapy, also known as low level laser therapy, is
                  a treatment that utilizes specific wavelengths of light to
                  interact with tissue and is known to accelerate the healing
                  process of a variety of clinical conditions. By definition,
                  this type of therapy uses radiation intensities that induce
                  minimal temperature elevation (not more than 0.1 to 0.5
                  degrees Celsius), if any. Low­-energy lasers have been
                  promoted as an effective way to produce pain relief.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: CONDITIONS GRID (stagger) */}
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
              Commonly Treats
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Cold laser therapy is widely used for treatment of:
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
                transition: { delayChildren: 0.1, staggerChildren: 0.04 },
              },
            }}
            className="mt-8 sm:mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          >
            {conditions.map((c) => (
              <motion.div
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{
                  borderColor: "rgba(249,115,22,0.55)",
                  y: -3,
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1E3A5F]/60 px-5 py-4 text-sm font-semibold text-white/90 ring-1 ring-white/5 backdrop-blur-sm sm:text-base"
              >
                <span
                  aria-hidden
                  className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/40"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <span>{c}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: HOW IT WORKS + ADVANTAGE CARDS */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                How It Works
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                A simple, in-office treatment
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  Cold lasers are handheld devices used by the doctor and are
                  typically the size of a flashlight. The laser is placed
                  directly over the injured area for 30 seconds to several
                  minutes, depending on the size of the area being treated and
                  the dose provided by the cold laser unit.
                </p>
                <p>
                  Cold laser therapy is one option among a variety of treatment
                  approaches that can potentially alleviate pain symptoms
                  without the use of surgery or drugs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-4 lg:col-span-6"
            >
              {advantages.map((a, i) => (
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
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 shadow-xl shadow-slate-900/10"
                >
                  <span
                    aria-hidden
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F97316]/10 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 font-heading text-4xl font-black text-white/[0.06]"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {a.body}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
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
                Drug-free Relief
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                Healing light. No drugs, no downtime.
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-7 text-base leading-relaxed text-white/75 sm:text-lg">
                Cold laser is a light stimulus, not a heat lamp and not a
                surgery. Stubborn tendon or spinal irritation sometimes calms
                when we add it to the plan. Ask Dr. Levitt whether it fits —
                then call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 transition-colors hover:text-orange-200"
                >
                  (952) 920-7535
                </a>{" "}
                to learn more.
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
                    Ready to feel better?
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Schedule a cold laser therapy consultation.
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
