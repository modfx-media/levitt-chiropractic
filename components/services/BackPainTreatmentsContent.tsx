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
    title: "Local lumbar ache",
    body: "Pain stays in the low back. Sitting, lifting, or standing up changes it. The leg feels normal.",
  },
  {
    title: "Pain that travels",
    body: "A line of pain, numbness, or tingling leaves the back and goes into the buttock, thigh, or calf. This is the pattern people call sciatica, and it still needs a cause.",
  },
  {
    title: "Stiff, guarded back",
    body: "The muscles lock after a lift, a long day at a desk, or a night of poor sleep. Motion is limited. The pain is broad rather than a thin line down one leg.",
  },
  {
    title: "A back that keeps returning",
    body: "The same spot flares every few weeks. Sometimes the driver is a joint that does not move well. Sometimes it is a disc, a hip, or the way the feet hit the ground.",
  },
];

const redFlags = [
  "Progressive weakness in a leg or foot, or a foot that starts to drag",
  "Saddle anesthesia: numbness in the groin or the area that would sit on a bicycle seat",
  "New loss of bowel or bladder control, or trouble starting urination",
  "Fever with back pain, or pain plus unexplained weight loss",
  "Back pain after a major fall or crash that has not been medically screened",
  "Pain that wakes you and does not change no matter how you sit, stand, or lie",
];

const faqs = [
  {
    q: "Is every pain down the leg sciatica?",
    a: "No. Sciatica means the sciatic nerve is irritated, with pain, numbness, or weakness in the low back and the leg. A sacroiliac problem, a hip, or a local muscle can feel similar. The exam separates them.",
  },
  {
    q: "Can a disc problem cause sciatica?",
    a: "Yes. A bulging or herniated disc can irritate a nerve root, and so can a stiff joint or a muscle spasm. Which one you have is an exam question. Disc anatomy is on the degenerative disc disease page.",
  },
  {
    q: "Do I need an MRI before the first visit?",
    a: "Usually no. Imaging is recommended when it would change the plan. Bring films you already have. New weakness, groin numbness, or a bowel or bladder change should not wait on this appointment.",
  },
  {
    q: "What treatments are actually used for back pain here?",
    a: "Adjustments (Diversified, Zone Therapy, or Torque Release), cold laser, targeted ice, and therapeutic exercise, chosen from the exam. Custom orthotics are added only when the feet are part of the load. Medication and surgery stay with a physician when the findings call for them.",
  },
  {
    q: "How long does back pain take to calm down?",
    a: "There is no honest number before an exam. Some recent strains feel more mobile within a few visits. Long-standing patterns take longer, and some do not belong here. If the tests are not changing, the plan changes or you are referred.",
  },
  {
    q: "Should I stop moving until the pain is gone?",
    a: "Not for an ordinary mechanical backache, unless a physician told you to. Short walks and the exercises you are given usually beat a week on the couch. Stop a movement that sharply increases leg pain or weakness.",
  },
];

export default function BackPainTreatmentsContent() {
  return (
    <>
      <ServiceHero
        title="Back Pain Treatment, Including Sciatica"
        subtitle="A mechanical exam for low-back pain and nerve pain down the leg. Drug-free care when the findings support it, and a referral when they do not."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Common Chiropractic Conditions",
            href: "/common-chiropractic-conditions",
          },
          { label: "Back Pain Treatments" },
        ]}
      />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="Low back pain"
            title="Most backs we see are mechanical. Some are not."
          >
            <p>
              Back pain here is the ache from a desk, a lift, a long drive, or
              a weekend project, plus the leg pain that sometimes comes with
              it. Medication can take the edge off. Surgery has a place for a
              narrow set of nerve problems. Neither is the opening
              conversation for a joint or disc problem we can examine in
              Suite 201.
            </p>
            <p>
              Sciatica is the name for irritation of the sciatic nerve. The
              nerve runs from the low back, through the buttock, and down the
              leg. When it is irritated, people feel pain, numbness, tingling,
              or weakness along that path. Bulging discs, a spinal joint that
              is not moving well, and muscle spasm can all increase pressure
              on it. Treating the word “sciatica” without finding which of
              those is involved does not help.
            </p>
            <p>
              This page owns both problems: local back pain, and sciatica when
              the exam supports that label. Neck pain is a different complaint
              and does not have its own page yet. Pain that started in a car
              crash is examined the same way, and the injury-specific notes
              live on the{" "}
              <Link
                href="/personal-injury"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                personal injury
              </Link>{" "}
              page.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro
            dark
            center
            eyebrow="Patterns"
            title="Four ways back pain shows up"
          >
            <p>
              These are descriptions, not diagnoses. Two of them can exist in
              the same person. The point of the list is to give you language
              for the history.
            </p>
          </SectionIntro>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            {patterns.map((item, index) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <p className="font-heading text-sm font-bold text-orange-300">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  {item.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro
              eyebrow="Sciatica"
              title="Leg pain needs a cause, not a stretch you found online"
            >
              <p>
                A sciatica pattern is pain or sensory change along the nerve,
                often a line rather than a bruise. Coughing, sitting, or
                bending can make it louder. The ankle or big toe can feel
                weak. Those details tell the exam where to look. They do not
                diagnose you from this page.
              </p>
              <p>
                A common mix-up is the sacroiliac joint, where the base of the
                spine meets the pelvis. That joint can cause low-back pain and
                limit motion, and the symptoms overlap sciatica and a herniated
                disc. The joint can be tested in the exam. If that is the
                driver, the adjustment is aimed there, not at a disc that was
                never the problem.
              </p>
              <p>
                A local muscle can ache in the buttock without being sciatica.
                Custom orthotics come up only when the way you stand keeps
                reloading the same side. They are prescription devices, not
                drugstore inserts. See the{" "}
                <Link
                  href="/custom-foot-orthotics"
                  className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
                >
                  orthotics page
                </Link>
                . If the leg is getting weaker, use the red-flag list the same
                day.
              </p>
            </SectionIntro>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-[#0F172A]">
                Get a medical screen, not an adjustment
              </h2>
              <ul className="mt-5 space-y-3">
                {redFlags.map((item) => (
                  <li
                    key={item}
                    className="border-l-4 border-[#F97316] pl-4 text-sm leading-relaxed text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                Chest pain, sudden shortness of breath, or a story that sounds
                like infection or cancer is not a chiropractic visit. Call
                emergency services or your physician. A longer note on spine
                warning signs is on the{" "}
                <Link
                  href="/blog/spine-pain-warning-signs-and-care-options-in-minneapolis"
                  className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
                >
                  warning-signs article
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="In the exam room"
            title="What Dr. Levitt is looking for"
          >
            <p>
              The history is specific. Where is the pain at its worst. Does it
              cross the knee. What job, chair, or lift set it off. What makes
              the leg louder, and what makes the back louder. Prior imaging,
              prior surgery, and medications another clinician prescribed all
              belong in that history.
            </p>
            <p>
              The physical exam checks motion, the joints that are not moving,
              nerve strength and sensation when the leg is involved, and
              whether the hip or the foot is feeding the problem. X-rays are
              taken when they would change the plan. An MRI is a physician-level
              decision when the nerve findings are concerning or conservative
              care is not the right next step. You should hear a working idea,
              what would change that idea, and which tools are actually on
              the table.
            </p>
            <p>
              First-visit logistics match the rest of the practice: a photo
              ID, 10 to 15 minutes for paperwork, clothing you can bend in.
              The step-by-step is on{" "}
              <Link
                href="/new-patient-center/what-to-expect"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                what to expect
              </Link>
              . Hours and the Saint Louis Park address are at the bottom of
              this page. Call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or use the{" "}
              <Link
                href="/contact/appointment-request"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                appointment request
              </Link>
              .
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="Tools we use"
            title="Care is a small set of services, not a menu you order from"
          >
            <p>
              After the exam, the plan is assembled from care this clinic
              already provides.
            </p>
            <p>
              Adjustments restore motion at a joint that is not moving the way
              it should. The technique is Diversified, Zone Therapy, or Torque
              Release, explained on the{" "}
              <Link
                href="/adjustments-and-manipulation"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                adjustments
              </Link>{" "}
              page. You should know which one and why before it happens. A
              high-velocity adjustment is skipped when the red flags above are
              present.
            </p>
            <p>
              Cold laser is a handheld light, held on the area for 30 seconds
              to several minutes, with no heat. It is stopped if the findings
              are not changing. Targeted ice is for hot or freshly irritated
              tissue, not a whole-body cryotherapy chamber. See{" "}
              <Link
                href="/cold-laser-therapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cold laser
              </Link>
              ,{" "}
              <Link
                href="/cryotherapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cryotherapy
              </Link>
              , and{" "}
              <Link
                href="/ice-pack-cryotherapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                ice
              </Link>
              .
            </p>
            <p>
              Therapeutic exercise is a few movements for endurance, strength,
              or mobility between visits. A packet that stays in the car does
              not count. Details are on the{" "}
              <Link
                href="/therapeutic-exercise"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                exercise
              </Link>{" "}
              page.
            </p>
            <p>
              If a disc is the center of the story, the anatomy and the
              conservative-versus-surgical split are on the{" "}
              <Link
                href="/degenerative-disc-disease"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                degenerative disc disease
              </Link>{" "}
              page. A supporting article on sciatica care in the Twin Cities
              is{" "}
              <Link
                href="/blog/sciatica-treatment-minneapolis"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                here
              </Link>
              . It does not replace this page.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro
              dark
              eyebrow="Between visits"
              title="Expectations you can actually use"
            >
              <p>
                A recent strain often eases as the joint moves. A back that
                has hurt for months usually needs the exercises and the
                lifting habit changed, not only adjustments. We compare
                today’s exam with the last one. There is no week count in
                advance.
              </p>
              <p>
                Prolonged sitting flares both local back pain and sciatica.
                A short walk and the movements you were shown are the usual
                advice. New leg weakness, or any red flag, means you call
                instead of pushing through. Care here is drug-free and
                non-surgical. If a surgeon has already recommended an operation
                the exam agrees with, we do not argue you out of it.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Back pain"
              title="Start with the exam"
              body="Tell us whether the pain stays in the back or travels down a leg."
            />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-back-pain"
        eyebrow="Common questions"
        title="Questions about back pain and sciatica"
        intro="These are the questions that change what you do next. They are not outcome claims."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Keep reading"
        title="When the back pain overlaps something else"
        intro="Stay on this page for the back and for sciatica. Use the links when the history points somewhere more specific."
        links={[
          {
            href: "/degenerative-disc-disease",
            label: "Herniated discs and disc degeneration",
            note: "The disc page, including when a disc is the reason a leg hurts.",
          },
          {
            href: "/personal-injury",
            label: "Back pain after an auto accident",
            note: "Whiplash and crash injuries, including the low back.",
          },
          {
            href: "/adjustments-and-manipulation",
            label: "Adjustments and manipulation",
            note: "Diversified, Zone Therapy, and Torque Release.",
          },
          {
            href: "/custom-foot-orthotics",
            label: "Custom foot orthotics",
            note: "Only when the feet are part of why the back keeps flaring.",
          },
          {
            href: "/blog/chiropractic-care-for-chronic-lower-back-pain",
            label: "Chronic low-back pain article",
            note: "A supporting post. The service page is this one.",
          },
          {
            href: "/contact/appointment-request",
            label: "Request an appointment",
            note: "Or call 952-920-7535 during office hours.",
          },
        ]}
      />

      <LocationStrip />
    </>
  );
}
