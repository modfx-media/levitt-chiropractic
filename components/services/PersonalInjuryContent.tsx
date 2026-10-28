"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import {
  FaqBlock,
  OrangeRule,
  RelatedCare,
  SectionIntro,
  fadeUp,
} from "@/components/services/enrichment";

const accidents = [
  {
    title: "Auto accidents",
    body: "Rear-end and other car crashes, including whiplash and back strain from the same impact.",
  },
  {
    title: "Bike and pedestrian collisions",
    body: "A bike hit or a fall can injure the neck, shoulder, or low back even when the skin looks fine.",
  },
  {
    title: "Boat and airplane accidents",
    body: "The exam starts with what hurt, not with the type of vehicle.",
  },
  {
    title: "Construction accidents",
    body: "Falls, struck-by injuries, and lifting injuries after the acute danger has been checked.",
  },
  {
    title: "OSHA-related workplace injuries",
    body: "Joint or soft-tissue problems from work. Not an inspection and not a legal opinion.",
  },
  {
    title: "Medical malpractice injuries",
    body: "Mechanical pain that remains after a physician has handled the emergency. We do not review another clinician’s standard of care.",
  },
];

const redFlags = [
  "Loss of consciousness, repeated vomiting, a severe or worsening headache, confusion, or a seizure",
  "Neck or back pain with progressive weakness, numbness in the groin, or a change in bowel or bladder control",
  "Chest pain, trouble breathing, or pain that could be a rib, lung, or abdominal injury",
  "An obvious deformity, a suspected fracture, an open wound, or a limb you cannot use",
  "Fever together with severe spinal pain",
];

const faqs = [
  {
    q: "Do I need a referral after an auto accident?",
    a: "No. If an emergency department or urgent care already saw you, bring the notes. After a high-speed crash, a rollover, or a collision that broke the car apart, get that medical screen before an adjustment.",
  },
  {
    q: "Can a car accident chiropractor treat whiplash?",
    a: "When the exam says it is safe, yes. Whiplash may be a muscle and ligament strain, a stiff joint, or a disc or nerve irritation. Care is chosen from adjustments, cold laser, targeted ice, and home exercise. There is no date by which the neck is promised to be pain-free.",
  },
  {
    q: "How soon should I be seen after a crash?",
    a: "Once emergency problems are ruled out, sooner is more useful than waiting months. Stiffness over the first couple of days is common and still worth an exam. New weakness, bowel or bladder change, or a severe headache belongs in an emergency department.",
  },
  {
    q: "Will Minnesota no-fault cover the visit?",
    a: "Personal injury protection on your own auto policy can cover chiropractic care after an auto crash. Whether it pays depends on that policy. We do not quote benefits. Health insurance is a separate question.",
  },
  {
    q: "What should I bring to the first injury visit?",
    a: "A photo ID, any imaging or notes, a medication list from other clinicians, and a short timeline of the crash. Wear clothing you can move in and allow 10 to 15 minutes for paperwork.",
  },
  {
    q: "Can you write a claim letter if I skip the exam?",
    a: "No. We do not write injury letters without an exam, and we do not document injuries we have not found. Copies of the chart can be sent later if an attorney asks.",
  },
];

export default function PersonalInjuryContent() {
  return (
    <>
      <ServiceHero
        title="Personal Injury Care After an Auto Accident"
        subtitle="Exam-first chiropractic care for whiplash and other crash injuries. Dr. Alan Levitt has practiced since 1987 and has been at this Saint Louis Park office since 1999."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Injuries", href: "/injuries" },
          { label: "Personal Injury" },
        ]}
      />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="After a crash"
            title="An auto accident is a personal injury, not a form letter"
          >
            <p>
              People search for a car accident chiropractor when the neck or
              back hurts after a collision and they are not sure whether to
              wait. Personal injury here means the body after a crash, a fall,
              a bike hit, or a workplace mishap. This page is the auto
              accident visit, including the rear-end crash that leaves the
              neck stiff the next morning.
            </p>
            <p>
              Whiplash is the neck injury from a sudden back-and-forth motion.
              Neck pain that did not start with a crash is on the{" "}
              <Link
                href="/neck-pain"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                neck pain
              </Link>{" "}
              page. The same impact can irritate the mid back or low back.
              Sports and work strains that did not start with a crash belong on the{" "}
              <Link
                href="/injuries"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                injuries
              </Link>{" "}
              page.
            </p>
            <p className="border-l-4 border-[#F97316] pl-6">
              Minnesota is a no-fault state. Personal injury protection on
              your own auto policy can cover chiropractic medical expense
              after an auto crash, without first proving who was at fault.
              That is a coverage rule, not a promise about your policy.
              Health insurance is a separate question, and this office does
              not quote benefit amounts. We still examine you as a patient.
              We do not write injury letters without an exam.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro
            dark
            center
            eyebrow="How the injury happened"
            title="Crashes and other mishaps"
          />
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {accidents.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-heading text-lg font-bold text-white">
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionIntro
              eyebrow="Whiplash"
              title="What the neck injury actually is"
            >
              <p>
                Whiplash is a neck injury from a sudden force, most often an
                auto accident. The head is thrown one way and then the other.
                Muscles and ligaments can be strained. Joints between the
                neck vertebrae can be irritated. In some crashes the same
                force bothers a disc or a nerve. Our conditions page describes
                the same split: soft-tissue strain, and sometimes a structural
                problem such as a joint that is not moving well.
              </p>
              <p>
                Pain is a poor clock. Plenty of people feel manageable the
                night of a rear-end collision and stiffer two days later.
                That delay is a reason to be examined, not proof the crash
                was either serious or harmless.
              </p>
              <p>
                Complaints include neck stiffness, a headache from the base of
                the skull, shoulder soreness, and trouble checking a blind
                spot. Some people notice dizziness or arm symptoms. You will
                not have all of these. Arm pain with clear weakness is a red
                flag, not a same-day adjustment.
              </p>
            </SectionIntro>
          </div>
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl ring-1 ring-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Go to the ER first
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold">
                Do not start with an adjustment if any of these are true
              </h2>
              <OrangeRule />
              <ul className="mt-6 space-y-4">
                {redFlags.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-orange-100">
                If a hospital or urgent care already cleared the dangerous
                problems, bring the notes. We can then look at the joint and
                soft-tissue part. We will not talk you out of an emergency
                screen you still need.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="The evaluation"
            title="How an injury visit is put together"
          >
            <p>
              The shape matches any new-patient visit at this office, with
              extra time on the incident. Plan to arrive 10 to 15 minutes
              early, bring a photo ID, and wear clothing you can move in.
              Bring emergency or urgent-care notes if you have them, plus a
              plain timeline: when it happened, where you were sitting,
              whether a seat belt was on, what hurt that day, and what has
              changed since.
            </p>
            <p>
              Dr. Levitt reviews that history and does a physical examination.
              He looks at how the neck and back move, where the pain sits, and
              whether strength or sensation suggests a nerve is involved.
              X-rays are taken when they would change the plan, not as a
              souvenir of the crash. You should leave knowing what was found,
              what is still uncertain, and what the next step is. More of the
              first-visit routine is on{" "}
              <Link
                href="/new-patient-center/what-to-expect"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                what to expect
              </Link>
              .
            </p>
            <p>
              Dr. Alan G. Levitt, DC, graduated from Northwestern College of
              Chiropractic in Bloomington in December 1986 and has been in
              private practice since 1987. He has practiced at{" "}
              {siteConfig.address.full} since 1999. Call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>{" "}
              or{" "}
              <Link
                href="/contact/new-patient-appointment"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                request an appointment
              </Link>
              . A short biography is on{" "}
              <Link
                href="/meet-the-doctor"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                meet the doctor
              </Link>
              .
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="What we can do here"
            title="Treatment is chosen from the services this office already offers"
          >
            <p>
              Nothing is added because it sounds right for a crash. If the
              exam does not support a tool, it stays off the plan.
            </p>
            <p>
              <strong className="font-semibold text-[#0F172A]">
                Spinal adjustments.
              </strong>{" "}
              Diversified technique, Zone Therapy, or Torque Release, picked
              after the exam. Diversified is a quicker contact. Torque Release
              is gentler. Zone Therapy pairs the adjustment with spinal
              massage for that region. The{" "}
              <Link
                href="/adjustments-and-manipulation"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                adjustments page
              </Link>{" "}
              describes those three. An adjustment is not the opening move
              when the history is a red flag or the joint is not safe to move.
            </p>
            <p>
              <strong className="font-semibold text-[#0F172A]">
                Cold laser and ice.
              </strong>{" "}
              Cold laser is a handheld light, about the size of a flashlight,
              held on the area for 30 seconds to several minutes. There is no
              heat. Targeted ice is for hot, swollen tissue in the first days,
              not a whole-body cryotherapy spa. See{" "}
              <Link
                href="/cold-laser-therapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cold laser
              </Link>{" "}
              and{" "}
              <Link
                href="/ice-pack-cryotherapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                ice pack cryotherapy
              </Link>
              .
            </p>
            <p>
              <strong className="font-semibold text-[#0F172A]">
                Therapeutic exercise.
              </strong>{" "}
              A few home movements for endurance, strength, or flexibility so
              the visit is not the only work. The{" "}
              <Link
                href="/therapeutic-exercise"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                exercise page
              </Link>{" "}
              lists those categories.
            </p>
            <p>
              This office does not provide surgery, injections, or
              prescription medication. If the exam says you need one of
              those, the next step is the physician who does.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <SectionIntro
              dark
              eyebrow="The chart"
              title="What recovery looks like, and what we will not promise"
            >
              <p>
              One visit sometimes starts the process. More than one injured
              region often needs a series. We will not quote a visit count
              before the exam.
              </p>
              <p>
                If motion, pain, or nerve symptoms are not changing, the plan
                changes or we refer you. Medication from another clinician
                can take the edge off. Surgery is the right referral for some
                disc and nerve injuries, not the first step for a
                straightforward strain. Ordinary activity that does not
                sharply increase symptoms is usually better than staying
                completely still. Low-back pain from the same crash is on the{" "}
                <Link
                  href="/back-pain-treatments"
                  className="font-semibold text-orange-300 underline-offset-4 hover:underline"
                >
                  back pain
                </Link>{" "}
                page, and disc injuries on the{" "}
                <Link
                  href="/degenerative-disc-disease"
                  className="font-semibold text-orange-300 underline-offset-4 hover:underline"
                >
                  disc page
                </Link>
                .
              </p>
              <p>
                The chart records the history, the findings, and what was done.
                Copies can be sent if an attorney asks. We do not invent
                findings or promise a settlement. Payment is cash, check, or
                major credit card.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Personal injury"
              title="Book the exam"
              body="Call or request a visit. Bring any emergency notes you already have."
            />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-personal-injury"
        eyebrow="Common questions"
        title="Questions after a crash"
        intro="Answers for booking and coverage. They are not a benefit quote and not a recovery timeline."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Related care"
        title="Pages that belong with an injury visit"
        intro="Use these when the crash problem overlaps another service on this site."
        links={[
          {
            href: "/injuries",
            label: "Sports and work injuries",
            note: "Strains that did not start with a crash.",
          },
          {
            href: "/back-pain-treatments",
            label: "Back pain and sciatica",
            note: "Low-back pain and leg pain, including after a collision.",
          },
          {
            href: "/degenerative-disc-disease",
            label: "Disc injuries",
            note: "Herniated and bulging discs, including when trauma is the trigger.",
          },
          {
            href: "/common-chiropractic-conditions",
            label: "Condition overview",
            note: "Short notes on whiplash and other problems, with links out to the longer pages.",
          },
          {
            href: "/neck-pain",
            label: "Neck pain",
            note: "Stiffness, a pinched nerve, or a headache that starts in the neck, when it did not come from a crash.",
          },
          {
            href: "/new-patient-center/what-to-expect",
            label: "What the first visit includes",
            note: "Paperwork, exam, x-rays only when they would change the plan.",
          },
        ]}
      />

      <LocationStrip />
    </>
  );
}
