"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const services = [
  {
    title: "Personal Injury",
    href: "/personal-injury",
    eyebrow: "Any Accident or Mishap",
    body: "Uncover and treat the underlying issues that come from accidents bike, construction, OSHA, malpractice and more.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M12 2L4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
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

export default function InjuriesContent() {
  return (
    <>
      <ServiceHero
        title="Injuries"
        subtitle="A variety of chiropractic services to evaluate and treat common injuries explore each type of care below."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Injuries" },
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
              Treatment built around the injury you have
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              A strain that should have been gone in a week, a fall on packed
              snow, or a lift that “went” in the low back — that is the injury
              work here. We map what was hurt, what still moves, and whether
              Methodist or another ER already cleared the danger. Then
              adjustments, ice or laser, and a few exercises you can actually
              do at home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: SERVICE CARDS GRID */}
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
              Our Injury Services
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Choose the care that fits your injury
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
            className="mt-8 sm:mt-14 grid gap-6 lg:grid-cols-1 lg:gap-8 max-w-xl mx-auto"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={s.href}
                  className="group relative block h-full overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-[#1E3A5F]"
                >
                  <span
                    aria-hidden
                    className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F97316]/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden
                    className="absolute right-6 top-6 font-heading text-5xl font-black text-white/[0.06]"
                  >
                    0{i + 1}
                  </span>
                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                      {s.icon}
                    </span>
                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                      {s.eyebrow}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
                      {s.body}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-transform duration-200 group-hover:translate-x-1">
                      Learn more
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: CONTACT PROMPT + CTA */}
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
                Tell us what happened we&rsquo;ll guide you
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                If you have any questions about which service is right for
                you, please contact us. We&rsquo;re always happy to hear from
                you. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or request a visit online and Dr. Levitt will help you choose
                the right course of care.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Get Evaluated"
                title="Start the healing process"
                body="Book an evaluation with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
