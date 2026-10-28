"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const kinds = [
  { title: "A strain that outlasted the week", body: "You expected a muscle to calm down. It is still limiting work or a workout. Early care is more useful than waiting until the pattern is six months old." },
  { title: "A fall or an awkward lift", body: "Snow, a missed step, a cooler, a child, a job-site load. The history is the mechanism. The exam is what still moves." },
  { title: "Sport", body: "Practice and weekend play. We map the tissue and the joint. We do not clear you back to a game from a phone call." },
  { title: "Work", body: "Sprains and overuse from the job, after anything dangerous has been medically checked. This is not an OSHA inspection and not a legal opinion." },
];

const faqs = [
  {
    q: "Is this the auto-accident page?",
    a: "No. Car crashes, whiplash, and the injury chart that goes with them are on the personal injury page. This page is for sport, work, falls, and strains that did not start in a vehicle. /auto-injury on the old site points at injuries; a crash history should still be told in full so we send you to the right exam.",
  },
  {
    q: "When should I come in after a sprain?",
    a: "After emergency problems are out of the way, sooner is more useful than letting a limp become normal. Open wounds, a suspected fracture, a joint you cannot use, and a fall that has not been medically screened belong in urgent or emergency care first.",
  },
  {
    q: "What does the injury exam include?",
    a: "What was hurt, what still moves, and whether imaging would change the plan. Treatment, if it is appropriate, is usually a mix of an adjustment, ice or laser, and a few home exercises. It is not a tour of every device in the office.",
  },
  {
    q: "Can I get a work note without being examined?",
    a: "No. We document what the exam finds. We do not write a letter for an injury we have not seen, and we do not invent restrictions. If a job needs paperwork, that paperwork follows the visit.",
  },
  {
    q: "How fast will I be back to sport or work?",
    a: "No date is promised. A simple strain and a joint that will not bear load are different. Return to play or to a heavy job depends on the exam changing, not on a motivational timeline. If it is not changing, we refer.",
  },
];

export default function InjuriesContent() {
  return (
    <>
      <ServiceHero
        title="Sports and Work Injuries"
        subtitle="Sprains, strains, falls, and the lift that should have been fine. Crash injuries have their own page."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Injuries" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Which injury" title="This page is the non-crash injury visit">
            <p>
              A week-old strain, a fall, or a lift that “went” in the low
              back is the work of this URL. We map what was hurt, what still
              moves, and whether an emergency department already cleared the
              dangerous part. Then the plan is usually an adjustment if the
              joint is safe, ice or laser if the tissue is irritable, and a
              few exercises you can do at home.
            </p>
            <p>
              An auto accident, including whiplash, is not squeezed into this
              page. Use{" "}
              <Link href="/personal-injury" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                personal injury
              </Link>
              . Neck pain without a crash is{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">neck pain</Link>.
              The back that hurts without a clear injury story is{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">back pain</Link>.
            </p>
            <p>
              Dr. Levitt sees these at {siteConfig.address.full}. Phone{" "}
              {siteConfig.phone}. Practice since 1987, this office since 1999.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="Stories we actually hear" title="Four injury shapes">
            <p>The mechanism changes the history. It does not change the requirement for an exam.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {kinds.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Do not start here" title="Some injuries are medical before they are chiropractic">
            <p>
              Open wounds, a bone that might be broken, a limb you cannot
              use, chest pain, trouble breathing, and a head strike with
              confusion or vomiting go to emergency care. So does a fall from
              a height or a job-site blow that has not been checked. If a
              hospital has already said the dangerous part is clear, bring
              those notes and we can look at the joint and the soft tissue.
            </p>
            <p>
              Progressive weakness, groin numbness, or a change in bowel or
              bladder control is an emergency even if it followed a “simple”
              lift. Fever with spinal pain is not a strain. We would rather
              lose the visit than ice a problem that needs a physician.
            </p>
            <p>
              Early cold, when it is appropriate, is described on{" "}
              <Link href="/cryotherapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">cryotherapy</Link>{" "}
              and the hands-on steps on{" "}
              <Link href="/ice-pack-cryotherapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">ice pack</Link>.
              Laser is a later or parallel option on{" "}
              <Link href="/cold-laser-therapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">cold laser</Link>,
              not the thing you do instead of ruling out a fracture.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The visit" title="Mechanism, motion, then the smallest set of tools">
            <p>
              Tell the story in order: what you were doing, what you felt,
              what you could do that night, and what changed. Bring any
              imaging. The exam checks the painful region and, if a leg or
              arm is involved, strength and sensation. X-rays happen when
              they would change the plan.
            </p>
            <p>
              Treatment is not a protocol with your sport’s name on it. A
              lifter and a skater do not get the same homework. What they
              share is a short list from{" "}
              <Link href="/therapeutic-exercise" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">therapeutic exercise</Link>{" "}
              and a joint decision from{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">adjustments</Link>.
              Return to play waits on the exam, not on a tournament date. We
              will not write that you are cleared if you are not.
            </p>
            <p>
              Work forms, if your job asks, come after findings exist. We do
              not fabricate restrictions or the absence of them. Payment is
              cash, check, or card. No fee is printed here. Book a{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient visit
              </Link>{" "}
              or call {siteConfig.phone}.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="Recovery" title="Load returns when the exam says the tissue can take it">
              <p>
                Rest for a day can be sensible. Rest for a month usually
                makes a simple strain stiffer. We will name what to pause
                (the jump, the heavy lift, the long drive) and what to keep.
                If pain, swelling, or strength is not moving in the direction
                it should, the plan changes. A disc that declared itself
                during a lift may need the{" "}
                <Link href="/degenerative-disc-disease" className="font-semibold text-orange-300 underline-offset-4 hover:underline">disc page</Link>{" "}
                and, sometimes, a surgeon. We will not argue with worsening
                neurology.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Injuries"
              title="Tell us the mechanism"
              body="Sport, work, or a fall. If it was a car crash, say that so we use the injury exam."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">Getting back to the job or the practice</h2>
          <p>
            A desk job and a job that lifts are not the same clearance. If
            your work is sitting, the test is whether you can change position
            and finish a day without the pain spreading. If your work is
            loading trucks or a patient floor, the test includes a lift that
            looks like the lift you actually do, stopped before it fails. We
            do not sign a full-duty note because a calendar page turned.
          </p>
          <p>
            Sport is similar and more tempting to rush. A practice that is
            painless and a game that is not are different loads. Return is
            graded: movement, then the skill, then contact or the heavy set,
            if those are part of your sport. Skip a step and the strain
            usually announces itself. We will not invent a protocol named
            after your sport. The movements come from your exam.
          </p>
          <p>
            Coaches, supervisors, and family members are not the patient. If
            they want a date, the honest answer is that the date depends on
            the retest. Paperwork for a workplace can list what we found and
            what we recommend you avoid for now. It cannot list a restriction
            we did not evaluate, and it cannot say you are fine because
            someone needs the shift covered.
          </p>
          <p>
            If the injury was a car crash and you landed on this page because
            an old redirect said “injuries,” tell us that on the phone. The
            personal-injury visit is the one that knows what to do with that
            history.             Using the sports page for a crash makes the chart
            worse, not faster.
          </p>
          <p>
            Swelling that is still rising, a joint that locks, or a bruise
            that is spreading are reasons to be seen rather than to “give it
            the weekend” by default. A weekend is reasonable only when you
            can walk, the pain is local, and nothing neurological is
            changing. If you are coaching or supervising someone else, do not
            use this page as their clearance.             They need their own exam. We
            will not discuss their care with you without the right
            permission, and we will not put their return date in your chart.
            A bruise that looks worse the next morning can still be a simple
            strain. A bruise with tightening skin, numbness beyond the
            injury, or pain out of proportion to what you see is a reason for
            urgent care, not a longer ice session.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-injuries"
        eyebrow="Questions"
        title="Questions about sports and work injuries"
        intro="Sorting crashes from everything else, and what we will not write down without an exam."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Split the problem"
        title="Use a more specific page when you have one"
        intro="This URL is the front door for non-crash injuries."
        links={[
          { href: "/personal-injury", label: "Personal injury and whiplash", note: "Auto accidents and other crashes." },
          { href: "/back-pain-treatments", label: "Back pain and sciatica", note: "If the lift became leg pain." },
          { href: "/neck-pain", label: "Neck pain", note: "If the sport or the desk hit the neck without a crash." },
          { href: "/ice-pack-cryotherapy", label: "Ice pack", note: "The first-days compress, with skin rules." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "How you reload without guessing." },
          { href: "/contact/new-patient-appointment", label: "Book", note: "New patients. Existing patients use the other form." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
