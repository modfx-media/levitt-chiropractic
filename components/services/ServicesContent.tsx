"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocalPracticeLinks } from "@/components/seo/LocalPracticeLinks";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  group: "Spinal Care" | "Therapies" | "Conditions" | "Whole-Body Wellness";
};

const services: Service[] = [
  {
    title: "Adjustments & Manipulation",
    description:
      "Gentle, precise spinal adjustments to restore alignment, relieve nerve pressure, and let your body heal itself.",
    href: "/adjustments-and-manipulation",
    group: "Spinal Care",
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
    title: "Common Chiropractic Conditions",
    description:
      "Sciatica, headaches, vertebral subluxation, and more explained simply with practical care options.",
    href: "/common-chiropractic-conditions",
    group: "Conditions",
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
    title: "Back Pain Treatments",
    description:
      "Drug-free, personalized back pain relief through spinal care, soft-tissue therapy, and therapeutic exercise.",
    href: "/back-pain-treatments",
    group: "Conditions",
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
    title: "Degenerative Disc Disease",
    description:
      "Chiropractic evaluation and care for spinal disc changes that come with age, injury, or wear.",
    href: "/degenerative-disc-disease",
    group: "Conditions",
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
    title: "Injuries",
    description:
      "Recovery from personal injuries getting you back to full function as quickly as possible.",
    href: "/injuries",
    group: "Conditions",
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
        <path d="M9 2l4 4-4 4M15 22l-4-4 4-4M22 9l-4 4 4 4M2 15l4-4-4-4" />
      </svg>
    ),
  },
  {
    title: "Personal Injury",
    description:
      "Chiropractic care after a crash, fall, or workplace injury, with an exam and a plan you can follow.",
    href: "/personal-injury",
    group: "Conditions",
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
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Cold Laser Therapy",
    description:
      "Low-level laser stimulates cellular healing for arthritis, tendonitis, fibromyalgia, carpal tunnel, and more.",
    href: "/cold-laser-therapy",
    group: "Therapies",
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
    title: "Cryotherapy",
    description:
      "Targeted cold therapy reduces inflammation and accelerates recovery for acute and chronic conditions.",
    href: "/cryotherapy",
    group: "Therapies",
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
    title: "Therapeutic Exercise",
    description:
      "Custom exercise programs that restore mobility, flexibility, and strength right in your own home.",
    href: "/therapeutic-exercise",
    group: "Therapies",
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
    title: "Custom Foot Orthotics",
    description:
      "Doctor-designed orthotics that align your stance from the ground up and ease pressure on your spine.",
    href: "/custom-foot-orthotics",
    group: "Whole-Body Wellness",
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
    title: "Functional Medicine",
    description:
      "A whole-person approach that addresses the root cause of chronic pain and chronic illness not just symptoms.",
    href: "/functional-medicine",
    group: "Whole-Body Wellness",
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
    title: "Alternative Medicine",
    description:
      "Natural, non-invasive care that helps the body heal itself no medications, no surgery, just results.",
    href: "/alternative-medicine",
    group: "Whole-Body Wellness",
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

const groups: Service["group"][] = [
  "Spinal Care",
  "Conditions",
  "Therapies",
  "Whole-Body Wellness",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stats = [
  { value: "39", label: "Years in Practice" },
  { value: "11", label: "Specialized Services" },
  { value: "1999", label: "Saint Louis Park" },
];

export default function ServicesContent() {
  return (
    <>
      <ServiceHero
        title="Our Services"
        subtitle="Comprehensive chiropractic and integrative care from routine adjustments to complex injury recovery and whole-body wellness."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
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
                Personalized Chiropractic Care
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                One office, every step of your recovery
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Dr. Alan Levitt has helped Twin Cities patients heal naturally
                since 1999. From a single adjustment to a full functional
                medicine plan, every service is delivered with one goal: get
                you back to your life, drug-free and on your own terms.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                Browse the services below or call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                if you&rsquo;re not sure where to start we&rsquo;ll guide
                you to the right care.
              </p>
              <LocalPracticeLinks topic="services" />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {stats.map((s) => (
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
              Browse by Category
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What we offer
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="mt-14 space-y-16">
            {groups.map((groupName) => {
              const groupServices = services.filter(
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
                            {s.icon}
                          </span>
                          <h4 className="mt-5 font-heading text-lg font-bold text-white">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-white/70">
                            {s.description}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-colors group-hover:text-[#F97316]">
                            Learn More
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
                Not Sure Where to Start?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Let&rsquo;s find the right care for you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Every body is different. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact/appointment-request"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request a visit
                </Link>{" "}
 we&rsquo;ll match you with the services that fit your goals
                and your life.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Take the Next Step"
                title="Book a consultation"
                body="Talk with Dr. Levitt about a plan that fits you."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
