"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Tip = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const tips: Tip[] = [
  {
    title: "Sit smarter at your desk",
    body: "Keep your feet flat on the floor, hips slightly higher than knees, and the top of your screen at eye level. Stand or stretch every 30–45 minutes your spine is not designed for all-day sitting.",
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
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Lift with your legs",
    body: "Squat down to the load, keep it close to your body, and stand up using your legs not your back. Avoid twisting while carrying weight; pivot with your feet instead.",
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
        <path d="M8 22l2-9 4 0 2 9M10 13l-2-4 4-2 4 2-2 4" />
      </svg>
    ),
  },
  {
    title: "Sleep in a spine-friendly position",
    body: "Side-sleepers: place a pillow between your knees. Back-sleepers: put a small pillow under your knees. Avoid sleeping on your stomach it forces your neck into a long twist all night.",
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
        <path d="M3 18v-6a4 4 0 014-4h10a4 4 0 014 4v6" />
        <path d="M3 18h18M7 12h4" />
      </svg>
    ),
  },
  {
    title: "Move every day",
    body: "Gentle walking, swimming, and stretching keep discs hydrated and joints mobile. Even 20 minutes a day can dramatically reduce back pain and stiffness over time.",
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
    title: "Stretch the chain",
    body: "Tight hamstrings, hips, and chest muscles pull the spine out of alignment. A 5-minute daily stretch hamstrings, hip flexors, doorway chest opener pays off enormously.",
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
        <path d="M4 12c4-8 12-8 16 0M4 12c4 8 12 8 16 0" />
      </svg>
    ),
  },
  {
    title: "Stay hydrated",
    body: "Your spinal discs are roughly 80% water. Chronic dehydration shrinks discs and makes them more prone to damage. Aim for half your body weight (in ounces) of water per day.",
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
        <path d="M12 2.5C7 9 5 12 5 15a7 7 0 1014 0c0-3-2-6-7-12.5z" />
      </svg>
    ),
  },
  {
    title: "Mind your phone neck",
    body: "Tilting your head 60° forward to look at a phone adds ~60 pounds of force on your cervical spine. Bring the phone up to eye level instead of dropping your head down.",
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
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Listen to your body",
    body: "Pain is information, not a nuisance. Small aches that linger, recurring stiffness, or pinching sensations are early warnings. Address them before they become a bigger problem.",
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
        <path d="M3 11a9 9 0 0118 0v3a4 4 0 01-4 4h-1v-7h5" />
        <path d="M3 11v3a4 4 0 004 4h1v-7H3" />
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

export default function WellnessTipsContent() {
  return (
    <>
      <ServiceHero
        title="Spinal Wellness Tips"
        subtitle="Small daily habits posture, lifting, sleep, movement that protect your spine and keep you feeling your best."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Wellness Tips" },
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
              Everyday Spine Health
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Small habits, big payoff
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              The way you sit, sleep, lift, and move shapes the health of
              your spine more than any single adjustment. These are the
              habits we recommend most often to our patients easy to start,
              hard to regret.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: 8 TIPS GRID */}
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
              8 Daily Habits
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Take care of your spine
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
          >
            {tips.map((t, i) => (
              <motion.div
                key={t.title}
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
                className="group relative overflow-hidden rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="absolute right-4 top-4 font-heading text-3xl font-black text-white/[0.06]"
                >
                  0{i + 1}
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F97316]/15 text-[#F97316] ring-1 ring-[#F97316]/30">
                  {t.icon}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {t.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
                Want a Personalized Plan?
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Let&rsquo;s tailor wellness to your body
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Generic tips are a great starting point but the real
                results come from a plan built around your posture, your
                history, and your goals. Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/resources/qa"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  read our Q&amp;A
                </Link>{" "}
                to dig deeper.
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Wellness, Personalized"
                title="Book a wellness visit"
                body="Schedule a consultation with Dr. Levitt."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
