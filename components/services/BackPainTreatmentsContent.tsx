"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const techniques = [
  "Spinal adjustments",
  "Cold laser therapy",
  "Therapeutic exercise",
  "Soft tissue techniques",
];

const benefits = [
  {
    title: "Personalized Care Through Various Techniques",
    body: "No two patients are just alike and neither is their pain. Dr. Levitt takes a highly customized approach to back pain relief. After fully assessing the patient, he chooses from a variety of techniques to achieve optimal results.",
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
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Natural and Lasting Relief",
    body: "Chiropractic care isn’t focused on the symptoms you have. It addresses the underlying cause through methods that encourage and enhance the body’s natural healing processes. It doesn’t involve medication and is non-invasive.",
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
    title: "Improved Health & Lower Risk of Injury",
    body: "Patients who seek chiropractic care for back pain treatment enjoy better health and quality of life overall. Improving the state of the musculoskeletal system minimizes the likelihood of experiencing future injury or similar pain.",
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
        <path d="M3 12h4l2-6 4 12 2-6h6" />
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

export default function BackPainTreatmentsContent() {
  return (
    <>
      <ServiceHero
        title="Back Pain Treatments"
        subtitle="Highly personalized and effective back pain relief without addictive medications or surgery."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Common Chiropractic Conditions" },
          { label: "Back Pain Treatments" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO */}
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
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-3xl bg-[#F97316]/15 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-3xl border-t-4 border-[#F97316] bg-[#0F172A] p-8 text-white shadow-2xl ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                    Drug-Free Relief
                  </p>
                  <p className="mt-4 font-heading text-5xl font-black leading-none text-[#F97316]">
                    3
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Three core benefits of chiropractic back pain treatment                     personalized care, natural lasting relief, and stronger
                    overall health.
                  </p>
                </div>
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
                Welcome
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Tired of living with back pain?
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Most back pain we see in Saint Louis Park is not a medical
                mystery. It is a desk, a commute on Highway 100 or 394, and a
                weekend that asked the disc to lift something it was not warm
                for. Medication can take the edge off. Surgery has a place.
                Neither is the first conversation for a mechanical lumbar
                problem we can examine and treat in Suite 201.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="mt-6 flex flex-wrap gap-2.5"
              >
                {techniques.map((t) => (
                  <motion.li
                    key={t}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/8 px-4 py-2 text-sm font-semibold text-[#0F172A]"
                  >
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-[#F97316]"
                    />
                    {t}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: 3 BENEFITS */}
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
              3 Benefits
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why chiropractic care for back pain
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
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
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
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-7 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-heading text-5xl font-black text-white/[0.06]"
                >
                  {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                  {b.icon}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {b.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
                Get Started
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Stop living with back pain
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                If the pain is new, shooting down a leg with weakness, or
                coming with fever or bowel/bladder change, that is not a
                “stop living with it” problem — that is a medical screen. For
                the rest, call{" "}
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
                  schedule online
                </Link>
                . Methodist Hospital is less than a mile east if you need that
                campus first.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Back Pain Relief"
                title="Get back to feeling good"
                body="Make an appointment with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
