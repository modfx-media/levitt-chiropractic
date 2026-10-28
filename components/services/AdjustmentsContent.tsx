"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const techniques = [
  {
    title: "Diversified",
    body: "A quicker, direct contact. The office describes it as a thrust used to restore motion, ease tension, and improve how the joint lines up. It is not applied because it is the famous version. It is applied when the exam says that speed is appropriate.",
  },
  {
    title: "Zone Therapy",
    body: "Aimed at a region rather than one joint in isolation. The adjustment is paired with spinal massage so the area is treated as a connected set of parts, not an isolated click.",
  },
  {
    title: "Torque Release",
    body: "The gentler contact. The office describes it as a way to help the nervous system settle and communicate, without making a fast thrust the only option. It is the one we lean toward when a disc is irritable or a fast move is a poor fit.",
  },
];

const faqs = [
  {
    q: "What is a chiropractic adjustment?",
    a: "A specific contact on a joint that is not moving the way it should. The neck after a long day and the low back after a week of sitting are the examples this office uses. You should know which technique and why before it happens.",
  },
  {
    q: "Are adjustments safe?",
    a: "They are a screened procedure, not a casual one. Dr. Levitt examines you first. A high-velocity contact is not the opening move after major trauma, unexplained weight loss, night pain that never changes, fever, or a change in bowel or bladder control. Those are medical problems until a physician says otherwise.",
  },
  {
    q: "Will I be adjusted on the first visit?",
    a: "Only if the exam says it is safe and useful that day. Some people leave the first visit with a plan and no thrust. X-rays are taken when they would change the plan, not as a routine. The first-visit steps are explained under what to expect.",
  },
  {
    q: "How many adjustments will I need?",
    a: "No count is quoted from the phone. A recent mechanical problem and a years-long pattern are different. If the same tests are not changing, the schedule does not continue out of habit.",
  },
  {
    q: "Do you only adjust the spine?",
    a: "The techniques above are spinal and regional. They are used for low-back pain, neck pain, headaches, other musculoskeletal pain, subluxations, and auto, sports, and personal injuries. Feet are a separate service when orthotics are the lever. Laser and ice are separate tools.",
  },
];

export default function AdjustmentsContent() {
  return (
    <>
      <ServiceHero
        title="Chiropractic Adjustments and Spinal Manipulation"
        subtitle="Three techniques, chosen after the exam: Diversified, Zone Therapy, and Torque Release. Not a one-move routine."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Adjustments" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The contact" title="An adjustment is a decision, not a cracking sound">
            <p>
              Dr. Alan G. Levitt, DC, chooses the contact after he has watched
              the joint move. He graduated from Northwestern College of
              Chiropractic in Bloomington in December 1986, has been in
              practice since 1987, and has worked at {siteConfig.address.full}{" "}
              since 1999. Call {siteConfig.phone}.
            </p>
            <p>
              A subluxation, in the language this site uses, is a spinal joint
              that is not moving well and may be irritating a nearby nerve.
              The adjustment is meant to restore motion at that joint. It is
              not described here as a cure for disease, and it is not sold as
              something you must hear pop. Some contacts are quick. Some are
              quiet. The sound is not the goal.
            </p>
            <p>
              Other methods listed on the doctor’s biography, including
              applied kinesiology, Koren Specific Technique, Talsky Tonal
              Therapy, polarity, and muscle testing, are part of how he
              evaluates. They are not three extra adjustment brands. The
              three named techniques for the thrust or the regional work are
              below.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="Three options" title="Which technique, and why that one">
            <p>You should be able to repeat the reason in your own words before you lie down.</p>
          </SectionIntro>
          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {techniques.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Who it is for" title="Problems an adjustment may address">
            <p>
              Lower back pain, neck pain, headaches, other musculoskeletal
              pain, subluxations, and injuries from auto crashes, sport, and
              personal mishaps. Each of those is explained with the condition
              it belongs to. Neck pain is{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">neck pain</Link>.
              Back pain and sciatica are{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">back pain</Link>.
              A crash is{" "}
              <Link href="/personal-injury" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">personal injury</Link>.
              The focus here is the contact itself.
            </p>
            <p>
              Headaches are included only when the exam ties them to the neck
              or the upper back. A sudden severe headache, a headache after a
              head strike, or a headache with confusion is not an adjustment
              slot. Disc herniation is not “just adjusted.” If a nerve is
              weakening, disc care explains when we refer.
            </p>
            <p>
              Benefits the office lists, and that we will not inflate, are
              less pain and tension for many mechanical problems, a change in
              how the joint moves, and a drug-free option before surgery is
              discussed. None of those is a promise for your case. Surgery
              and medication remain physician decisions.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The hour" title="From paperwork to the contact">
            <p>
              Arrive 10 to 15 minutes early with a photo ID and clothes you
              can move in. The history is where it hurts, what changes it,
              and what has already been tried. The exam is hands-on. Imaging
              is selective. Then the technique is named. If today is not an
              adjustment day, you still leave with a reason.
            </p>
            <p>
              Afterward, soreness can happen. It is not required, and it is
              not proof the visit “worked.” Sharp new weakness, a headache
              that is unlike your usual one, or bowel or bladder change is a
              reason to call or to seek urgent care, not to wait for the next
              booked slot. Ordinary movement is usually encouraged unless a
              physician told you to rest.
            </p>
            <p>
              Book a{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient visit
              </Link>{" "}
              or, if you already have a chart, the existing-patient form.
              There is no package price listed in advance.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="When we skip it" title="A red flag ends the adjustment conversation">
              <p>
                Major trauma that has not been cleared, progressive weakness,
                groin numbness, fever with spinal pain, unexplained weight
                loss, and pain that never changes with position are not
                “try a crack and see.” We screen and we refer. Keeping a
                visit on the book is not a clinical goal.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Adjustments"
              title="Book the exam first"
              body="The technique is chosen in the room, not on the phone."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">What people notice in the hours afterward</h2>
          <p>
            Some joints feel easier to turn before you stand up. Some feel
            ordinary until the next morning. A mild ache in the muscles around
            the contact can show up and fade. That ache is not required, and
            it is not a score. A sharp line of pain into the arm or leg that
            was not there, new weakness, dizziness that does not settle, or a
            headache unlike your usual one is a reason to call the office or
            urgent care, depending on how severe it is.
          </p>
          <p>
            The pop, if there is one, is gas shifting in a joint. Plenty of
            useful contacts are silent. Chasing the sound is how people get
            a technique they did not need. If you want Torque Release because
            you dislike the sound, say that. Comfort with the method is part
            of consent. It does not override a finding that says a fast
            contact is unsafe, and it does not mean a silent technique is
            weaker.
          </p>
          <p>
            Follow-up is based on the retest. If rotation improved and stayed
            improved, the next visit may be further out, or it may be
            exercise only. If the neck locked again by dinner, the daily
            position is part of the problem and another thrust alone will not
            be the whole plan. We would rather lengthen the gap between
            visits when the exam allows than keep a standing weekly slot out
            of habit.
          </p>
          <p>
            Children, older adults, and people with osteoporosis in their
            history get the same screening, not a louder version of
            Diversified. If a technique is a poor fit for bone density or for
            a fused area a surgeon created, it is not used there. Bring those
            records.             We will not discover a fusion by guessing.
          </p>
          <p>
            If you have had spinal surgery, bring the levels that were fused
            or decompressed and the date. We do not adjust through a fusion
            and we do not argue with a surgeon’s restriction that is still in
            force. Adjacent segments can still be examined. That is a
            different sentence from “everything is adjustable.” People who
            want only the gentle option should say so at the start. People
            who want the visit over in two minutes should also say so. A
            rushed contact to honor a clock is not the technique list above.
            The visit takes the time the history takes.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-adjustments"
        eyebrow="Questions"
        title="Questions about adjustments"
        intro="Safety and logistics. Not a promise about how you will feel tomorrow."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Next to the table"
        title="Tools that are not an adjustment"
        intro="Laser, ice, exercise, and orthotics are separate decisions."
        links={[
          { href: "/cold-laser-therapy", label: "Cold laser therapy", note: "Light on the skin when the exam supports it." },
          { href: "/ice-pack-cryotherapy", label: "Ice", note: "For tissue that is hot and new." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "So the joint does not only move on our table." },
          { href: "/custom-foot-orthotics", label: "Orthotics", note: "When the feet are reloading the spine." },
          { href: "/neck-pain", label: "Neck pain", note: "Stiffness, arm symptoms, and headaches that start in the neck." },
          { href: "/new-patient-center/what-to-expect", label: "What to expect", note: "Paperwork, exam, and selective x-rays." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
