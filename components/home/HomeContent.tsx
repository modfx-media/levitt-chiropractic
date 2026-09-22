"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { HeroSection } from "@/components/ui/HomeHero";
import { ScrollTicker } from "@/components/ui/ScrollTicker";
import { QuickLinkCard } from "@/components/ui/QuickLinkCard";
import { Button } from "@/components/ui/Button";
import { StatCounter } from "@/components/ui/StatCounter";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/jsonLd";
import type { GoogleReview, GoogleReviewsMeta } from "@/lib/reviews";
import { siteConfig } from "@/lib/siteConfig";

const HERO_IMAGES = [
  "/images/adjustment-1.jpg",
  "/images/pain-relief.jpg",
  "/images/therapeutic-exercise.jpg",
  "/images/chronic-lower-back-pain.jpg",
  "/images/3d-spine-simulator.jpg",
];

const HERO_IMAGE_ALTS = [
  "Dr. Alan Levitt performing a chiropractic adjustment in Saint Louis Park, MN",
  "Patient receiving care for back and neck pain at Levitt Chiropractic Center",
  "Therapeutic exercise and rehab at Levitt Chiropractic in Saint Louis Park",
  "Chiropractic treatment for chronic lower back pain",
  "Spine education and assessment at Levitt Chiropractic Center",
];

const homeFaqs = [
  {
    q: "Is Levitt Chiropractic accepting new patients in Saint Louis Park?",
    a: "Yes. Dr. Alan Levitt is accepting new patients at 6200 Excelsior Blvd, Suite 201. Minnesota does not require a physician referral. Request a visit online or call 952-920-7535 — most people are seen the same week.",
  },
  {
    q: "Where is the clinic, and how do I get there?",
    a: "Suite 201 at 6200 Excelsior Blvd, Saint Louis Park, MN 55416. Highway 100 and Excelsior are the usual routes. Park Nicollet Methodist Hospital is less than a mile east on the same street. Patients also come from Minneapolis, Edina, Hopkins, Minnetonka, and Golden Valley.",
  },
  {
    q: "What happens on a first visit?",
    a: "You tell the real story — commute, desk, weekend miles, the crash if there was one. Then a hands-on exam. You leave knowing the next step. Imaging only when it would change care. No generic protocol.",
  },
  {
    q: "Do you treat back pain without drugs or surgery?",
    a: "Yes. Adjustments, cold laser, targeted ice, therapeutic exercise, and custom orthotics when the exam says they would change the load. The goal is the cause, not a pill that lasts until Thursday.",
  },
  {
    q: "What is a red flag in chiropractic?",
    a: "A red flag is a sign we should not just adjust: unexplained weight loss, night pain, fever, bowel or bladder changes, progressive weakness, or a significant recent trauma. Those need medical screening. A stiff neck after a week on Highway 100 is a different story.",
  },
  {
    q: "Can a chiropractor help heel spurs?",
    a: "Often, yes — by calming the tissue around the spur and fixing the gait that keeps irritating it. Custom orthotics are sometimes part of that. We cannot sand a spur off the bone. If the pain is new, hot, and you cannot bear weight, we start with an exam, not a promise.",
  },
  {
    q: "Can a chiropractor fix a wrist?",
    a: "Many wrists, yes: joint restriction, repetitive strain, some carpal-tunnel patterns. Fractures, major ligament tears, and advanced arthritis need an orthopedic look first. We will say so if the exam is not a chiropractic case.",
  },
  {
    q: "Does Minnesota no-fault cover chiropractic after a car accident?",
    a: "Minnesota is a no-fault state. PIP medical benefits can include chiropractic care after an auto crash, through your own auto policy, without first proving who was at fault. Health insurance is a separate question. Bring ER notes if you have them.",
  },
];

const quickLinks = [
  {
    title: "Pain Relief",
    href: "/common-chiropractic-conditions",
    image: "/images/pain-relief.jpg",
  },
  {
    title: "Adjustments & Manipulation",
    href: "/adjustments-and-manipulation",
    image: "/images/adjustment-1.jpg",
  },
  {
    title: "Therapeutic Exercise",
    href: "/therapeutic-exercise",
    image: "/images/therapeutic-exercise.jpg",
  },
  {
    title: "Saint Louis Park office",
    href: "/areas-we-serve/saint-louis-park",
    image: "/images/og-default.jpg",
  },
  {
    title: "Contact Us",
    href: "/contact",
    image: "/images/contact-us.jpg",
  },
];

const techniques = [
  "Applied Kinesiology",
  "Koren-specific technique",
  "Zone therapy",
  "Talsky tonal therapy",
  "Torque release technique",
  "Polarity and muscle testing",
];

const valueProps = [
  {
    title: "Holistic Approach",
    description:
      "We address the underlying cause, combining chemical, nutritional, and structural care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "39 Years Experience",
    description:
      "Decades of training as a chiropractor for cases simple to complex.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Personalized Plans",
    description:
      "No generic protocols. Every patient receives a treatment plan built around their actual week — including the commute.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16v16H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Nervous System Focus",
    description:
      "Specialized techniques to identify and resolve dysfunction in the nervous system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M5 6c2 0 3 2 7 2s5-2 7-2M5 12c2 0 3 2 7 2s5-2 7-2M5 18c2 0 3 2 7 2s5-2 7-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    n: "01",
    title: "Consult",
    body:
      "We listen first. Dr. Levitt evaluates your history, posture, and nervous system to map the real cause.",
  },
  {
    n: "02",
    title: "Customize",
    body:
      "Your plan blends chiropractic, nutrition, and structural care calibrated to your body and lifestyle.",
  },
  {
    n: "03",
    title: "Care",
    body:
      "Gentle adjustments and modern modalities: cold laser, cryotherapy, therapeutic exercise.",
  },
  {
    n: "04",
    title: "Thrive",
    body:
      "Ongoing wellness so you stay moving, feeling, and performing at your best for years to come.",
  },
];

type HomeContentProps = {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
};

export default function HomeContent({ reviews, meta }: HomeContentProps) {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: welcomeProgress } = useScroll({
    target: welcomeRef,
    offset: ["start end", "end start"],
  });
  const welcomeImageY = useTransform(welcomeProgress, [0, 1], ["10%", "-10%"]);
  const welcomeImageRotate = useTransform(welcomeProgress, [0, 1], [-3, 3]);

  return (
    <>
      <JsonLd id="ld-home-faq" data={faqPageJsonLd({ faqs: homeFaqs })} />

      {/* SECTION 1 HERO */}
      <HeroSection
        eyebrow="Saint Louis Park, MN"
        title="Chiropractor in"
        titleAccent="Saint Louis Park"
        subtitle="Your spine health specialists. Drug-free, personalized care from Dr. Alan Levitt — adjustments, cold laser, cryotherapy, and custom orthotics."
        ctaText="REQUEST APPOINTMENT"
        ctaHref="/contact/appointment-request"
        secondaryCtaText="Meet Dr. Levitt"
        secondaryCtaHref="/meet-the-doctor"
        backgroundImages={HERO_IMAGES}
        backgroundImageAlts={HERO_IMAGE_ALTS}
        googleRating={meta.rating}
        googleReviewCount={meta.reviewCount}
        reviewsUrl={meta.reviewsUrl}
      />

      {/* SECTION 2 TICKER */}
      <ScrollTicker
        items={[
          "✓ Personalized Chiropractic Care",
          "✓ Accepting New Patients",
          "✓ Serving Saint Louis Park Since 1999",
          "✓ Cold Laser Therapy",
          "✓ Functional Medicine",
          "✓ 39 Years Experience",
        ]}
      />

      {/* SECTION 3 STATS STRIP */}
      <section className="relative overflow-hidden bg-dark py-10 text-white sm:py-16">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-dark via-navy/40 to-dark"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:gap-8 sm:px-6 sm:grid-cols-4">
          {[
            { value: 39, suffix: "", label: "Years of Experience" },
            { value: 1999, prefix: "", suffix: "", label: "Serving Since" },
            { value: 6, suffix: "+", label: "Specialty Techniques" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                <StatCounter
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={1.6}
                />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {s.label}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-center"
          >
            <a
              href={meta.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-primary"
            >
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                <StatCounter to={meta.reviewCount} duration={1.6} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Google reviews
              </p>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WELCOME / ABOUT */}
      <section
        ref={welcomeRef}
        className="relative overflow-hidden bg-white py-14 sm:py-24 md:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Welcome
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-dark sm:text-5xl lg:text-6xl">
              Compassionate care.{" "}
              <span className="text-primary">Whole-body</span> results.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                If you live in Saint Louis Park, you already know Excelsior
                Boulevard. The clinic is in Suite 201 at 6200 — west of Park
                Nicollet Methodist Hospital, near the West End, not a downtown
                skyway office. Dr. Alan Levitt has practiced here since 1999
                (and as a chiropractor since 1987).
              </p>
              <p>
                Most first visits are not dramatic injuries. They are Highway
                100 necks, a disc that “went” lifting a cooler, or stiffness
                that stretching only fixes for a day. Care is drug-free on
                purpose: adjustments, cold laser, targeted ice, exercise, and
                custom orthotics when the exam says they would actually change
                the load.
              </p>
              <p>
                We look at the whole pattern — how you sit, how you walk, what
                you eat, what the nervous system is doing — and we will send
                you to a physician first if the story sounds like a red flag,
                not a mechanical spine problem.
              </p>
            </div>

            {/* Techniques chips */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Specialty techniques
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techniques.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-dark transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button
                href="/meet-the-doctor"
                variant="outline"
                size="lg"
              >
                Meet Dr. Levitt
              </Button>
            </div>
          </motion.div>

          {/* Image with parallax & floating accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <motion.div
              style={{ y: welcomeImageY, rotate: welcomeImageRotate }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/20"
            >
              <Image
                src="/images/dr-leviit.png"
                alt="Dr. Alan G. Levitt, DC"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent"
              />
            </motion.div>

            {/* Floating badge Years */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-6 top-12 hidden rounded-2xl bg-white p-5 shadow-2xl shadow-black/15 ring-1 ring-slate-200/50 sm:block"
            >
              <p className="font-heading text-3xl font-bold text-dark">39</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Years of care
              </p>
            </motion.div>

            {/* Floating badge Rating */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 bottom-12 hidden rounded-2xl bg-primary p-5 text-white shadow-2xl shadow-orange-500/30 sm:block"
            >
              <a
                href={meta.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="font-heading text-2xl font-bold">
                  {meta.rating.toFixed(1)}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/90">
                  {meta.reviewCount} Google reviews
                </p>
              </a>
            </motion.div>

            {/* Decorative ring */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -bottom-10 -right-10 hidden h-44 w-44 rounded-full border border-dashed border-primary/40 lg:block"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 VALUE PROPS / WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why Levitt Chiropractic
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              A practice built around{" "}
              <span className="text-primary">your wellness</span>
            </h2>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all hover:shadow-2xl hover:shadow-orange-500/15 hover:ring-primary/30"
              >
                <span
                  aria-hidden
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/20"
                />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20"
                  >
                    <span className="h-7 w-7">{v.icon}</span>
                  </motion.div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-dark">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 PROCESS / TIMELINE */}
      <section className="relative overflow-hidden bg-dark py-14 text-white sm:py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Process
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-5xl">
              Four steps to{" "}
              <span className="text-primary">feeling your best</span>
            </h2>
          </div>

          <div className="relative mt-20">
            {/* Animated connecting line (lg+) */}
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute left-[12%] right-[12%] top-8 hidden h-px origin-left bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
            />

            <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 * i,
                    ease: "easeOut",
                  }}
                  className="relative text-center lg:text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-dark shadow-lg shadow-orange-500/40 lg:mx-0"
                  >
                    <span className="font-heading text-xl font-bold">
                      {s.n}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-primary"
                    />
                  </motion.div>
                  <h3 className="mt-6 font-heading text-2xl font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 QUICK LINKS / SERVICES */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-24 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-navy/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Patient Resources
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark sm:text-5xl">
                How can we help you today?
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-dark hover:text-primary"
            >
              View all services
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {quickLinks.map((q, i) => (
              <QuickLinkCard
                key={q.href}
                title={q.title}
                href={q.href}
                image={q.image}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {reviews.length > 0 ? (
      <section className="relative overflow-hidden bg-white py-14 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Google reviews
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark sm:text-5xl">
              Real stories. <span className="text-primary">Real relief.</span>
            </h2>
            <p className="mt-4 text-base text-slate-600">
              {meta.rating.toFixed(1)} from {meta.reviewCount} Google reviews.{" "}
              <a
                href={meta.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                View all Google reviews
              </a>
            </p>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent"
          />

          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews, ...reviews].map((t, i) => (
              <article
                key={`${t.name}-${i}`}
                className="flex w-[88vw] max-w-md flex-shrink-0 flex-col rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-5xl leading-none text-primary">“</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Google
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-0.5" aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      viewBox="0 0 24 24"
                      fill="#F97316"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-heading font-semibold text-dark">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {t.relativeTime ?? "Posted on Google"}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
      ) : null}

      <section className="relative bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              West metro
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Neighborhoods we see every week
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              One clinic in Saint Louis Park. Patients drive from the cities
              below — usually via Highway 100, 394, or Excelsior Boulevard.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              ["saint-louis-park", "Saint Louis Park"],
              ["edina", "Edina"],
              ["hopkins", "Hopkins"],
              ["minnetonka", "Minnetonka"],
              ["minneapolis", "Minneapolis"],
              ["golden-valley", "Golden Valley"],
              ["richfield", "Richfield"],
              ["plymouth", "Plymouth"],
            ].map(([slug, name]) => (
              <Link
                key={slug}
                href={`/areas-we-serve/${slug}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-dark transition hover:border-primary hover:text-primary"
              >
                {name}
              </Link>
            ))}
            <Link
              href="/areas-we-serve"
              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
            >
              All areas we serve
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — visible answers that match the FAQPage schema */}
      <section className="relative bg-slate-50 py-14 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              New patients
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Questions we hear in Saint Louis Park
            </h2>
          </motion.div>
          <dl className="mt-10 space-y-4">
            {homeFaqs.map((f) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="rounded-2xl bg-white p-6 ring-1 ring-slate-200"
              >
                <dt className="font-heading text-lg font-bold text-dark">
                  {f.q}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-600">
                  {f.a}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 9.5 QUESTION / CONTACT FORM */}
      <section className="relative bg-white py-14 sm:py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid items-start gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Ask A Question
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Have a question? Send us a message.
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-primary"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Wondering if chiropractic care is right for you, curious about
                a treatment, or need help scheduling? Fill out the form and
                we&rsquo;ll get back to you shortly no appointment needed
                to reach out.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Prefer to call?
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-0.5 block font-semibold text-[#0F172A] transition-colors hover:text-primary"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Office
                    </p>
                    <p className="mt-0.5 font-semibold text-[#0F172A]">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border-t-4 border-primary bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600">
                  Send a Message
                </p>
                <div className="mt-5 h-[600px] w-full sm:h-[640px]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/gOVyxQpZhEh5JDPGljU0"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: "8px",
                    }}
                    id="inline-gOVyxQpZhEh5JDPGljU0-home"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form (CONTACT US)"
                    data-height="441"
                    data-layout-iframe-id="inline-gOVyxQpZhEh5JDPGljU0-home"
                    data-form-id="gOVyxQpZhEh5JDPGljU0"
                    title="Ask a question form"
                  />
                </div>
                <Script
                  src="https://link.msgsndr.com/js/form_embed.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 LOCATION & HOURS */}
      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Visit Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Find us in <span className="text-primary">Saint Louis Park</span>
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-primary"
            />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              6200 Excelsior Blvd, Suite 201. Highway 100 and Excelsior are
              the usual routes. Methodist Hospital is less than a mile east
              on the same street — useful if you are coming from that campus
              or giving a rideshare the landmark.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 overflow-hidden rounded-3xl bg-dark text-white shadow-2xl shadow-black/20 ring-1 ring-black/5"
          >
            <div className="grid lg:grid-cols-5">
              {/* Info column */}
              <div className="relative p-7 sm:p-9 lg:col-span-2">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Hours
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    <li className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-1.5">
                      <span className="font-semibold">Mon · Thu</span>
                      <span className="text-white/75">8:30–11:30 · 2:30–5:30</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-1.5">
                      <span className="font-semibold">Tue · Fri</span>
                      <span className="text-white/75">8:30 – 11:30am</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-1.5">
                      <span className="font-semibold">Wed</span>
                      <span className="text-white/75">10:00 – 12:00pm</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-1.5">
                      <span className="font-semibold">Sat</span>
                      <span className="text-white/75">By Appointment</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold">Sun</span>
                      <span className="text-white/55">Closed</span>
                    </li>
                  </ul>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Address
                      </p>
                      <p className="mt-1.5 leading-snug text-white/85">
                        6200 Excelsior Blvd, Suite 201
                        <br />
                        Saint Louis Park, MN 55416
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        Phone
                      </p>
                      <a
                        href={siteConfig.phoneHref}
                        className="mt-1.5 block font-semibold text-white transition-colors hover:text-primary"
                      >
                        952-920-7535
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      href="/contact/appointment-request"
                      variant="primary"
                      size="md"
                    >
                      Book an Appointment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Map column */}
              <div className="relative min-h-[300px] lg:col-span-3 lg:min-h-0">
                <iframe
                  title="Levitt Chiropractic Center map"
                  src={siteConfig.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
                <a
                  href={siteConfig.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F172A] shadow-lg shadow-black/30 ring-1 ring-black/10 transition hover:bg-primary hover:text-white sm:text-[13px]"
                  aria-label="Get directions to Levitt Chiropractic Center"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11 FINAL CTA */}
      <section className="relative overflow-hidden bg-dark py-14 text-white sm:py-24 md:py-28">
        <motion.div
          aria-hidden
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, rgba(249,115,22,0.3), transparent 40%), radial-gradient(circle at 70% 70%, rgba(30,58,95,0.7), transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Ready to feel{" "}
            <span className="text-primary">like yourself</span> again?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Call today at{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-primary hover:underline"
            >
              952-920-7535
            </a>{" "}
            or request your appointment online Dr. Levitt is welcoming new
            patients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="/contact/appointment-request"
              variant="primary"
              size="lg"
            >
              Request Appointment
            </Button>
            <Button href={siteConfig.phoneHref} variant="outline" size="lg">
              Call 952-920-7535
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
