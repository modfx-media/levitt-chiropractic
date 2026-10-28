"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import {
  FaqBlock,
  RelatedCare,
  SectionIntro,
  fadeUp,
} from "@/components/services/enrichment";

const patterns = [
  {
    title: "A stiff local neck",
    body: "Turning to check a blind spot or looking up is limited. The pain stays in the neck or the top of the shoulder. The arm feels normal.",
  },
  {
    title: "Pain or tingling into the arm",
    body: "A line of pain, numbness, or weakness leaves the neck and travels into the shoulder blade, arm, or hand. That pattern needs a nerve check, not a guess.",
  },
  {
    title: "Headache that starts at the skull base",
    body: "Some headaches begin where the neck meets the skull and move toward the temple or behind the eye. Other headaches do not come from the neck at all.",
  },
  {
    title: "The screen-day neck",
    body: "Patients call the ache after a day of looking down “tech neck” or “desk neck.” It is a description of the posture, not a separate disease.",
  },
];

const faqs = [
  {
    q: "Is neck pain the same problem as whiplash?",
    a: "No. Whiplash is a neck injury from a sudden force, usually a crash. That visit is on the personal injury page. This page is for neck pain that shows up with desk work, sleep, a lift, or no clear accident.",
  },
  {
    q: "What is a pinched nerve in the neck?",
    a: "It means a nerve is irritated or compressed. A stiff joint, a disc bulge, or muscle spasm can do that. The result can be pain, tingling, or weakness in the arm. The name does not tell us which structure is involved until the exam.",
  },
  {
    q: "Can a headache come from the neck?",
    a: "Sometimes. A headache that starts at the base of the skull can be mechanical. Migraines, sinus pain, and a sudden severe headache are different problems. A headache with confusion, a blow to the head, or the worst pain of your life needs emergency care, not an adjustment.",
  },
  {
    q: "Which treatments does this office use for the neck?",
    a: "After the exam, the options already offered here are spinal adjustments (Diversified, Zone Therapy, or Torque Release), cold laser, targeted ice, and a few home exercises. The gentler contact is chosen when a fast thrust is a poor fit. Surgery, injections, and prescription drugs are not services of this office.",
  },
  {
    q: "How many visits will a stiff neck take?",
    a: "There is no number before the exam. Some recent mechanical necks loosen over a short series. A neck that has been guarded for months, or an arm that is weak, is a different plan. If the same tests are not changing, the plan changes or you are referred.",
  },
];

export default function NeckPainContent() {
  return (
    <>
      <ServiceHero
        title="Neck Pain, Pinched Nerves, and Desk-Related Stiffness"
        subtitle="An exam for pain that stays in the neck, travels into the arm, or shows up as a headache from the base of the skull."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Common Conditions",
            href: "/common-chiropractic-conditions",
          },
          { label: "Neck Pain" },
        ]}
      />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="The neck"
            title="One page for neck pain. Crashes live somewhere else."
          >
            <p>
              This is the core page for neck pain at Levitt Chiropractic
              Center. There is no city version of it. Dr. Alan Levitt has
              been in practice since 1987 and at {siteConfig.address.full}{" "}
              since 1999. The phone number is {siteConfig.phone}.
            </p>
            <p>
              People arrive with a neck that locked after sleeping, a shoulder
              that burns by the end of a screen day, or an arm that tingles
              when they turn. Those are different stories. A neck that was
              thrown in a car crash is whiplash, and that exam, including the
              paperwork around an auto accident, is on the{" "}
              <Link
                href="/personal-injury"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                personal injury
              </Link>{" "}
              page. Low-back pain and sciatica stay on the{" "}
              <Link
                href="/back-pain-treatments"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                back pain
              </Link>{" "}
              page.
            </p>
            <p>
              A pinched nerve is not a personality of the neck. It means
              something is irritating a nerve: a joint that will not move, a
              disc that has changed shape, or a muscle in spasm. Pressure can
              bring inflammation, pain, and sometimes weakness. Finding which
              of those is true is the visit. Naming it from a search result
              is not.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro
            dark
            center
            eyebrow="How it shows up"
            title="Four neck patterns worth separating"
          >
            <p>
              Use these as history, not as a diagnosis you give yourself.
            </p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {patterns.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro
              eyebrow="Desk and sleep"
              title="Looking down all day is a load, not a diagnosis"
            >
              <p>
                The head is heavy when it sits forward of the shoulders. A
                long meeting, a phone in the lap, or a pillow that keeps the
                neck kinked can leave the joints stiff and the muscles
                guarding. People call that tech neck. What we can check is
                whether the joints actually move, whether the arm is strong,
                and whether the headache, if there is one, starts in the neck.
              </p>
              <p>
                A headache from the neck often begins at the skull base. Noise,
                fatigue, and stress can make any headache louder, but they do
                not prove the cause. We do not use a percentage for how many
                headaches come from the neck. If the exam points at the neck,
                care is aimed there. If it points somewhere else, we say so.
              </p>
              <p>
                Sleep position matters in the history. So does the work setup,
                in plain language: screen height, how long you sit, and what
                you do on breaks. We will not hand you a gadget list. Two or
                three changes you can keep beat a perfect desk you abandon.
              </p>
            </SectionIntro>
          </div>
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white">
              <h2 className="font-heading text-2xl font-bold">
                See a physician or the ER before an adjustment
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Neck pain after a crash, fall, or hit to the head that has not been medically screened</li>
                <li>Progressive arm or hand weakness, or new trouble walking or using the hands</li>
                <li>A sudden severe headache, confusion, fainting, or repeated vomiting</li>
                <li>Fever with severe neck pain, or pain that never changes with position</li>
                <li>Bowel or bladder change, which is uncommon in an ordinary stiff neck and is an emergency</li>
              </ul>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The visit" title="What the neck exam is looking for">
            <p>
              Bring a photo ID and plan on 10 to 15 minutes of paperwork.
              Tell us when it started, whether the arm is involved, and what
              a turn or a cough does to it. Prior imaging and any medication
              another clinician prescribed belong in that history.
            </p>
            <p>
              Dr. Levitt checks motion, the joints that are stuck, and
              strength and sensation when the arm is part of the story.
              X-rays are taken when they would change the plan, which is the
              same rule as the rest of the practice. You should leave with a
              working idea and the next step. The first-visit outline is on{" "}
              <Link
                href="/new-patient-center/what-to-expect"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                what to expect
              </Link>
              .
            </p>
            <p>
              If an adjustment is appropriate, the technique is Diversified,
              Zone Therapy, or Torque Release. Diversified is a quicker
              contact. Torque Release is gentler. Zone Therapy includes
              spinal massage for the region. You hear which one before it
              happens. Details are on the{" "}
              <Link
                href="/adjustments-and-manipulation"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                adjustments
              </Link>{" "}
              page. A fast thrust is not the opening move after unexplained
              trauma or when arm strength is falling off.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="What can be added"
            title="Laser, ice, and exercise are tools, not a neck package"
          >
            <p>
              Cold laser therapy is a handheld light, about the size of a
              flashlight, held on the sore area for 30 seconds to several
              minutes. It does not heat the skin in any meaningful way. It is
              optional and it is dropped if the neck exam is not changing.
              Read the{" "}
              <Link
                href="/cold-laser-therapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cold laser
              </Link>{" "}
              page before you book laser by itself.
            </p>
            <p>
              Targeted ice is for a neck that is hot and newly irritated. It
              is not a whole-body cold chamber. A few exercises for endurance,
              strength, or mobility are how a neck stays looser between
              visits. The{" "}
              <Link
                href="/therapeutic-exercise"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                exercise
              </Link>{" "}
              page describes those categories. A long stretch sheet you will
              not do is not the plan.
            </p>
            <p>
              A disc in the neck is the same family of problem described on
              the{" "}
              <Link
                href="/degenerative-disc-disease"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                disc
              </Link>{" "}
              page: degeneration, bulge, or herniation, read against the arm
              exam. An adjustment is not a promise to put disc material back.
              If hand clumsiness or walking is getting worse, that is a
              physician visit.
            </p>
            <p>
              Ordinary activity that does not spike arm pain is usually better
              than a week of holding the neck perfectly still. We will not
              promise a visit count. Call {siteConfig.phone} or{" "}
              <Link
                href="/contact/new-patient-appointment"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                request a new-patient visit
              </Link>
              .
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="Pace" title="A stiff neck can change before any film does">
              <p>
                The scoreboard is turning your head, sleeping, and whether
                the arm symptoms are shrinking. Some recent necks feel more
                movable after care starts. A neck that has guarded for a long
                time needs the daily position changed as well. If strength is
                dropping, we stop and refer. Feeling better is the hope. It
                is not a guarantee, and there is no fee quoted on this page.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Neck pain"
              title="Start with the neck exam"
              body="Tell us if the pain stays local, travels down an arm, or becomes a headache."
            />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-neck-pain"
        eyebrow="Questions"
        title="Questions about neck pain"
        intro="These answers are for booking and for sorting emergencies. They are not a personal diagnosis."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Related pages"
        title="Where neck pain meets the rest of the practice"
        intro="Stay here for a neck that did not start in a crash. Use the other pages when the history points there."
        links={[
          {
            href: "/personal-injury",
            label: "Whiplash and auto accidents",
            note: "Neck injury from a sudden crash, including the injury exam.",
          },
          {
            href: "/back-pain-treatments",
            label: "Back pain and sciatica",
            note: "Low back and leg pain, which this page does not try to cover.",
          },
          {
            href: "/common-chiropractic-conditions",
            label: "Conditions hub",
            note: "A map of problems, with this page as the neck owner.",
          },
          {
            href: "/adjustments-and-manipulation",
            label: "How an adjustment is chosen",
            note: "Diversified, Zone Therapy, and Torque Release.",
          },
          {
            href: "/degenerative-disc-disease",
            label: "Disc problems",
            note: "Herniated and worn discs, including in the neck.",
          },
          {
            href: "/contact/new-patient-appointment",
            label: "New patient appointment",
            note: "Or call 952-920-7535. Existing patients have a separate form.",
          },
        ]}
      />

      <LocationStrip />
    </>
  );
}
