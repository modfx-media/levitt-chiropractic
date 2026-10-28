"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock } from "@/components/services/enrichment";

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
    title: "Neck Pain",
    description:
      "Stiffness, arm symptoms, and headaches that start in the neck. A crash is evaluated as a personal injury.",
    href: "/neck-pain",
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
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M9 20l3-6 3 6" />
      </svg>
    ),
  },
  {
    title: "Personal Injury",
    description:
      "Exam after an auto accident or other crash, including whiplash. Not a letter without a visit.",
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
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
      </svg>
    ),
  },
  {
    title: "Alternative Medicine",
    description:
      "A non-surgical, non-opioid start when the exam says that is safe. Not a rejection of your physician.",
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
  { value: "1987", label: "Practice began" },
  { value: "1999", label: "This office" },
  { value: "One", label: "Saint Louis Park location" },
];

const serviceFaqs = [
  {
    q: "Where should I start?",
    a: "Match the body part. Neck pain, back pain, disc problems, and car crashes are each explained with that kind of care. If you only know the tool you heard about, cold laser, ice, adjustments, exercise, and orthotics are listed below. If you are unsure, book the exam and describe the symptom.",
  },
  {
    q: "Do I need to pick a service before I call?",
    a: "No. New patients start with a history and an exam. The service is chosen after that. Calling 952-920-7535 or using the new-patient form is enough. Existing patients use the other appointment form.",
  },
  {
    q: "Do you list prices?",
    a: "No. The office does not publish a fee schedule here. Payment accepted at the visit is cash, check, or major credit card, and a payment plan can be discussed. Health insurance and auto-policy benefits are separate questions the office will not guess.",
  },
  {
    q: "Is every card a different clinic?",
    a: "No. One chiropractor, Dr. Alan Levitt, at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. The cards are different problems and tools, not different offices.",
  },
  {
    q: "What will you not do from this list?",
    a: "Surgery, injections, and prescription medication. We also do not write injury letters without an exam, and we do not promise a recovery date. Red-flag symptoms belong in emergency care before any of these services.",
  },
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
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  These are the kinds of care we provide, not a second explanation of each one. Dr.
                  Alan G. Levitt, DC, has been in practice since 1987 and at{" "}
                  {siteConfig.address.full} since 1999. The phone is{" "}
                  <a href={siteConfig.phoneHref} className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                    {siteConfig.phone}
                  </a>
                  . There is one office. The cards below are problems and
                  tools, not extra locations.
                </p>
                <p>
                  Start with the body part if you know it. Neck stiffness,
                  arm symptoms, and headaches that begin at the skull base go
                  to neck pain. Low-back pain and leg pain go to back pain.
                  A scan that says herniated disc belongs with disc care. A
                  crash, including whiplash, belongs with personal injury. Sport,
                  work, and falls that were not a crash belong with injuries.{" "}
                  <Link href="/common-chiropractic-conditions" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                    Common conditions
                  </Link>{" "}
                  help if two of those might be true.
                </p>
                <p>
                  Start with the tool only if you already know you are asking
                  about that tool. An adjustment is a joint contact, chosen
                  from Diversified, Zone Therapy, or Torque Release after an
                  exam. Cold laser therapy is a handheld light, not heat.
                  Cryotherapy here is targeted cold, not a walk-in chamber,
                  and the pack instructions are part of ice pack care. Exercise is
                  a short home list. Orthotics are prescription devices when
                  the feet are part of the load. Functional medicine adds
                  sleep and food questions. Alternative medicine is the
                  non-operative stance, not a different clinic.
                </p>
                <p>
                  You do not have to choose correctly before you call. The
                  first visit is a history and an exam. X-rays are taken when
                  they would change the plan. The service is what the exam
                  supports, and it is withheld when the story is a red flag:
                  progressive weakness, groin numbness, bowel or bladder
                  change, fever with spinal pain, or a major injury that has
                  not been medically screened. Those go to emergency care.
                </p>
              </div>
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

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">How a plan is chosen</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">The cards are not a menu you order from</h2>
          <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>
              A new patient does not check twelve boxes. Dr. Levitt asks
              where it hurts, what changes it, and what has already been
              tried, then tests motion and, when a limb is involved, strength
              and sensation. The plan might be one adjustment. It might be
              ice today and exercise for the week. It might be “see a
              physician before anyone adjusts you.” Leaving with that last
              answer is a finished visit.
            </p>
            <p>
              Several tools can share a visit without becoming a bundle.
              Laser does not replace an adjustment. Ice does not move a
              joint. Orthotics do not fix a disc that has nothing to do with
              the feet. Functional questions do not cancel a structural
              finding. If someone offers you a package that uses every card
              in one visit, that offer did not come from this office.
            </p>
            <p>
              What this office does not provide: surgery, injections, and
              prescription medication. It also does not publish prices here.
              Payment at the desk is cash, check, or major credit card, and
              a payment plan can be discussed. Auto-injury coverage and
              health insurance are separate conversations. We will not guess
              what a policy pays, and we will not write an injury letter for
              a person who has not been examined.
            </p>
            <p>
              First-visit logistics match the{" "}
              <Link href="/new-patient-center/what-to-expect" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                what to expect
              </Link>{" "}
              : a photo ID, 10 to 15 minutes for paperwork, clothes you
              can move in. New patients use{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                this form
              </Link>
              . People who already have a chart use the existing-patient
              form. Cancel with at least 24 hours’ notice. A fee may be
              charged for a no-show or a late cancellation. That policy is
              described under about the practice. It is not a treatment.
            </p>
            <p>
              Recovery is described the same way for every service. Some
              mechanical problems become more comfortable as motion returns
              and the daily load changes. Some do not. There is no visit
              count and no date promised in advance. If the same tests are not
              changing, the plan changes or you are referred. Feeling better
              is the hope. It is not a guarantee, and “drug-free” describes
              the tools, not a rule that medicine is never appropriate.
            </p>
            <p>
              Dr. Levitt’s training and the chemical, nutritional, and
              structural frame are on{" "}
              <Link href="/meet-the-doctor" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                meet the doctor
              </Link>
              . Read that if you want the biography. Stay here if you want
              to know which kind of care matches the problem you have today.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">Reading the cards without booking all of them</h2>
          <p>
            If your sentence is about a body part, ignore the therapy cards
            until the condition itself shows a tool is relevant. Neck pain
            does not require you to understand laser. Back pain does not
            require orthotics. A crash does not require functional medicine.
            Trying to combine every option yourself is unnecessary. The
            exam combines what belongs together, or it says a combination
            does not.
          </p>
          <p>
            If you are asking about a device you saw online, learn its
            limit before you request it by name. Cold laser therapy has a
            limit. Targeted cold has a limit. Orthotics have a limit.
            Asking for the device and skipping the limit is how visits start
            in the wrong room. Ask for the exam and name the device. That is
            the useful request.
          </p>
          <p>
            Hours are listed at the bottom of each service, and
            they are the real hours: mornings most weekdays, longer days
            Monday and Thursday, Wednesday late morning, Saturday by
            appointment, Sunday closed. Do not invent a walk-in window. If
            the online form is the wrong door because you are already a
            patient, use the existing-patient form. New problems in an
            existing patient are still an exam, not a request to repeat last
            year’s plan.
          </p>
          <p>
            The Saint Louis Park address does not change by service. You are
            not traveling to a laser clinic and then an orthotics clinic.
            Suite 201 is the same door. You should not feel as if laser
            and orthotics are different businesses. They are not. Tell us
            if a description made them sound that way.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-services"
        eyebrow="Questions"
        title="Questions about choosing a service"
        intro="The cards help you describe the problem. The exam decides the care."
        faqs={serviceFaqs}
      />

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
                  href="/contact/new-patient-appointment"
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
