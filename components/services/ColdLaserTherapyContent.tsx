"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import {
  FaqBlock,
  RelatedCare,
  SectionIntro,
} from "@/components/services/enrichment";

const uses = [
  "Acute and chronic pain",
  "Ligament sprains and muscle strain",
  "Soft-tissue injuries",
  "Tendonitis and tennis elbow",
  "Arthritis and bursitis",
  "Back pain",
  "Carpal tunnel syndrome",
  "Fibromyalgia",
  "Wound healing, as an adjunct, not a substitute for medical wound care",
];

const faqs = [
  {
    q: "What is cold laser therapy?",
    a: "It is a low-level light treatment. The device is handheld, about the size of a flashlight, and the doctor holds it on the skin over the irritated area. A session on one region runs from 30 seconds to several minutes, depending on the area and the dose the unit delivers. It is not a heat lamp and not a surgical laser.",
  },
  {
    q: "Does cold laser therapy hurt or burn?",
    a: "The office describes it as non-invasive, with no incision and no drug in the device. Published notes on this site say the intensity raises tissue temperature only minimally, on the order of 0.1 to 0.5 degrees Celsius if it rises at all. Most people feel little or nothing while it is on. Tell us if the skin is uncomfortable.",
  },
  {
    q: "Can I book cold laser therapy by itself?",
    a: "It is one option inside a plan, after an exam. It is not a walk-in light treatment and it does not replace a history. If the exam says the problem is not something light can reasonably affect, we will not add it to fill the visit.",
  },
  {
    q: "How many cold laser sessions are typical?",
    a: "We do not quote a number before we see you. A recent strain and a long-standing tendon problem are not the same plan. If the findings are not changing, laser stops. There is no promise that a set of sessions will clear the pain.",
  },
  {
    q: "Who should not start with laser?",
    a: "Do not use this page as clearance if you have a red-flag illness: unexplained weight loss, night pain that never changes, fever, a known cancer in the area being treated, or an eye problem under the beam. Those need a physician. We also do not aim the device at the eyes.",
  },
];

export default function ColdLaserTherapyContent() {
  return (
    <>
      <ServiceHero
        title="Cold Laser Therapy"
        subtitle="A handheld, low-level light used on the skin after an exam. No incision, no drug in the device, and no meaningful heat."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cold Laser Therapy" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="The device"
            title="Cold laser therapy is light on the skin, for a short time"
          >
            <p>
              Cold lasers at this office are handheld. Dr. Levitt places the
              unit directly over the area being treated. The time is 30
              seconds to several minutes. The clock depends on how large the
              region is and on the dose that unit is set to deliver. You stay
              dressed except where the skin has to be reached. There is no
              incision.
            </p>
            <p>
              “Cold” means the beam is not trying to cut or to cook tissue.
              The advantage listed on this site is minimal temperature change:
              about 0.1 to 0.5 degrees Celsius if the skin warms at all. If
              you came in expecting a hot lamp or a surgical laser, this is
              a different tool. Cold laser therapy also does not put a
              medication through the skin.
            </p>
            <p>
              It sits beside the other care already offered here, not in
              front of the exam. Adjustments, targeted ice, exercise, and
              orthotics are separate decisions. Laser is added when the
              finding is something a light stimulus might reasonably calm,
              such as a stubborn tendon or a sore spinal region, and it is
              dropped when repeat checks show no change.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro
            dark
            center
            eyebrow="Where it is used"
            title="Problems this page already names"
          >
            <p>
              The list is the one this office publishes. It is not a claim
              that light fixes each of them.
            </p>
          </SectionIntro>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {uses.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-[#1E3A5F]/60 px-4 py-3 text-sm text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/75">
            Back pain has its own page, because laser is only one piece of
            that plan. Carpal tunnel, tennis elbow, bursitis, and tendonitis
            are local tendon and joint problems the exam has to confirm.
            Arthritis here means the joint wear people already know they
            have, not a promise to rebuild cartilage. Fibromyalgia is a
            widespread pain problem without a single known cause on our
            conditions notes. Laser does not become the treatment for it by
            default. Wound healing, if it is discussed at all, is an adjunct.
            Open, infected, or surgical wounds belong with the clinician
            managing the wound.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="A visit"
            title="What actually happens in the room"
          >
            <p>
              The first appointment is still a history and a physical exam.
              Bring prior notes if another office has them. Dr. Levitt decides
              whether light belongs in the plan after that, not from the
              phrase “cold laser therapy” on a search. X-rays are taken only
              when they would change the plan.
            </p>
            <p>
              If laser is used, you are positioned so the region is easy to
              reach. The device rests on or just over the skin. You should
              be able to say if anything feels sharp or too warm. Eye
              protection and aim matter: the beam is not pointed at the eyes.
              The visit can also include an adjustment or ice when those fit.
              It is not a gadget tour.
            </p>
            <p>
              Home care is usually the exercise or the ice instruction, not a
              laser you take with you. This office does not sell a home laser
              on this page, and it does not quote a device price. Payment at
              the desk is cash, check, or card, the same as the rest of the
              practice. Call {siteConfig.phone} or use the{" "}
              <Link
                href="/contact/new-patient-appointment"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                new-patient form
              </Link>
              . The office is at {siteConfig.address.full}.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="Limits"
            title="What cold laser therapy will not do"
          >
            <p>
              It will not close a fracture, drain an infection, or stand in
              for a surgeon when a nerve is failing. It will not reverse a
              herniated disc on an MRI. It is a poor substitute for the
              emergency department after major trauma. People sometimes hope
              a painless tool means a painless guarantee. The absence of a
              burn does not mean the underlying problem has to improve on a
              schedule.
            </p>
            <p>
              We also do not describe a biochemical pathway, a cell-energy
              number, or a success rate on this page. Those figures are not
              in the office’s own description of the device. What is in the
              description is simple: light, short contact, little or no heat,
              no drug, no incision, used as one option among others.
            </p>
            <p>
              If you want the mechanical side of a joint problem, start with{" "}
              <Link
                href="/adjustments-and-manipulation"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                adjustments
              </Link>
              . If the area is hot and swollen in the first days,{" "}
              <Link
                href="/ice-pack-cryotherapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                ice
              </Link>{" "}
              is the tool written for that, not laser. Neck pain, back pain,
              and disc problems have their own pages so this one can stay
              about the light.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro
              dark
              eyebrow="Expectations"
              title="Stop the light if the exam is standing still"
            >
              <p>
                Some people notice less guarding after a cluster of visits.
                Some notice nothing, which is useful information. We compare
                the same movements next time. A tendon that is unchanged
                after a fair trial does not get an open-ended laser schedule.
                Activity advice stays specific to the body part. There is no
                recovery date printed in advance.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Cold laser"
              title="Ask if the light fits"
              body="The exam comes first. Laser is added only when it matches the finding."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">The same light, different body regions</h2>
          <p>
            An elbow that hurts when you grip a coffee mug is a small target.
            The contact is short. The test next time is the grip, not a speech
            about cellular healing. A low back is a larger target, so the
            minutes run longer, and the test is sitting or bending, which the
            back-pain page already explains. Laser does not become more
            “advanced” because the area is bigger.
          </p>
          <p>
            Carpal tunnel symptoms need a neck and wrist screen before anyone
            aims a light at the wrist and calls it done. The median nerve’s
            story can start higher than the wrist. If the neck reproduces the
            hand symptoms, the neck page is the better owner and laser on the
            wrist may be irrelevant. Tennis elbow that is actually a neck
            problem fails the same way.
          </p>
          <p>
            Fibromyalgia is on the published list and is the easiest condition
            to overtreat with a device. Widespread pain does not mean
            widespread laser. If we use it, it is on a region that is
            disproportionately angry, and it stops when that region’s exam
            does not change. Wound healing stays an adjunct. A wound that is
            opening, draining, or was just closed in an operating room is
            managed by the clinician who owns the wound.
          </p>
          <p>
            You can read, or you can talk, during the minutes the device is
            on. You should not be surprised by heat. If you are, we stop and
            we check the unit. Sessions are in the treatment room at the
            Saint Louis Park office, not a course you finish at home with a
            gadget bought online.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-cold-laser"
        eyebrow="Questions"
        title="Questions about cold laser therapy"
        intro="The answers match the device this office actually uses."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Often paired with"
        title="Pages for the problem, not another copy of this one"
        intro="Use those pages for the condition. Come back here when the question is the laser itself."
        links={[
          { href: "/back-pain-treatments", label: "Back pain", note: "Laser can be one part of a back plan." },
          { href: "/neck-pain", label: "Neck pain", note: "Stiffness, arm symptoms, and desk-related neck ache." },
          { href: "/ice-pack-cryotherapy", label: "Ice pack", note: "Cold for a hot, new injury. Different from light." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "What you do between visits so the session is not the whole plan." },
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "The hands-on option laser does not replace." },
          { href: "/contact/new-patient-appointment", label: "Book a visit", note: "New patients start with an exam, not a laser-only slot." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
