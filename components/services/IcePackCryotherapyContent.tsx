"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const steps = [
  { n: "1", title: "Skin check", body: "Look at the area. Skip the pack over open skin, a rash that might be infection, or skin you cannot feel." },
  { n: "2", title: "A layer", body: "Do not put a bare frozen pack on skin. A thin cloth is the usual barrier. The goal is cooling, not a burn from cold." },
  { n: "3", title: "The region only", body: "The pack covers the part that is hot or freshly strained. It is not wrapped around the whole limb for sport." },
  { n: "4", title: "A short timer", body: "Start from the office guide of about 15 to 20 minutes. Set a timer. Do not fall asleep on it." },
  { n: "5", title: "Recheck", body: "Skin should look pink and recover, not stay white, blistered, or numb for a long time. Stop and call if it does." },
];

const faqs = [
  {
    q: "How do I ice at home without damaging skin?",
    a: "Use a cloth between the pack and the skin, cover only the region you were shown, and keep it near 15 to 20 minutes. Set a timer. If the skin stays pale, blisters, or you cannot feel it, stop. Numbness is a reason to quit, not a sign to continue.",
  },
  {
    q: "How often can I repeat it?",
    a: "During a hot, new flare, several times in a day is common, with the skin back to normal between rounds. The office will give you the rhythm for your case. More hours of ice are not a stronger treatment.",
  },
  {
    q: "Ice or heat after the first few days?",
    a: "The first 48 to 72 hours after a new injury usually favor ice if the area is still puffy and irritable. Later, the exam decides. Heat can feel good on a stiff, non-swollen muscle and can annoy a joint that is still hot. Do not switch because a forum said to.",
  },
  {
    q: "Is an ice pack the same visit as cryotherapy?",
    a: "Same cold, two explanations. Cryotherapy explains when this office uses cold instead of a spa chamber. Ice pack care is where the pack sits, how long, and what your skin should do. You do not book them as two different products.",
  },
  {
    q: "Can I ice a neck or back before I have been examined?",
    a: "A brief, protected pack on a simple strain is a reasonable home step while you arrange a visit. Do not ice through a red flag: fever, pain after a major crash that has not been checked, progressive weakness, or a change in bowel or bladder control. Those are not pack problems.",
  },
];

export default function IcePackCryotherapyContent() {
  return (
    <>
      <ServiceHero
        title="Ice Pack Cryotherapy"
        subtitle="How a cold pack is used on a fresh injury: a barrier, a small area, and a timer. Not a full-body freeze."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cryotherapy", href: "/cryotherapy" },
          { label: "Ice Pack" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The pack" title="Ice is a local compress with rules">
            <p>
              An ice pack in this office is a cold compress on a fresh or
              flared spot. The effects we rely on are narrower
              than advertising: muscle spasm can ease, sensation in the
              irritated spot drops while the cold is on, soft tissue cools,
              and inflammatory soreness is often quieter. Those are
              temporary effects. They are useful. They are not a repair.
            </p>
            <p>
              Rehabilitation programs and chronic-pain days both show up in
              the old description. The difference is intent. After a new
              sprain, ice is there to get you through the hot window. In a
              longer problem, ice is for the flare, then the actual plan
              (joint, exercise, or a referral) has to exist. Icing the same
              spot every evening for a year is not a treatment plan.
            </p>
            <p>
              The office is {siteConfig.address.full}, phone {siteConfig.phone}.
              Dr. Levitt decides whether you even need the pack. The steps
              below are what we mean by using one safely.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro dark eyebrow="Five steps" title="A pack you can repeat without guessing">
            <p>This is the home version of what the visit demonstrates.</p>
          </SectionIntro>
          <ol className="mt-8 space-y-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-2xl border border-white/10 bg-[#1E3A5F]/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">Step {step.n}</p>
                <h3 className="mt-1 font-heading text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Where it shows up" title="Sprains, post-visit soreness, and the weekend overdo">
            <p>
              A sprained joint, soreness after an adjustment, and the first
              two or three days after you lifted something cold are the
              situations the office names. The pack goes on the region, often
              in the same visit as other care, and you leave knowing the home
              version. It is not applied over a numb neuropathy, and it is
              not a treatment for a foot you cannot stand on until that foot
              has been medically seen.
            </p>
            <p>
              Neck and back flares can be iced if the exam says the tissue is
              the irritable part. The neck problem itself is explained on{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">neck pain</Link>.
              The back is on{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">back pain</Link>.
              A crash still starts on{" "}
              <Link href="/personal-injury" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">personal injury</Link>,
              even if ice is later part of that plan.
            </p>
            <p>
              Athletes sometimes want ice as a ritual. A ritual is fine if
              the skin rules hold. It does not shorten a ligament’s calendar.
              Work injuries and sports strains are grouped with{" "}
              <Link href="/injuries" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">injuries</Link>
              . Come back here for the compress.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Mistakes" title="The ways a pack causes a new problem">
            <p>
              Direct frozen plastic on skin, an hour instead of twenty
              minutes, a pack under a sleeping person, and ice over a patch
              you cannot feel are the errors. Chemical packs that leak are
              another. If the product says not to apply it to skin, believe
              the product. We are not describing a brand.
            </p>
            <p>
              Heat-versus-ice arguments online are louder than the decision
              deserves. Irritable and swollen leans cold, especially in the
              first 48 to 72 hours. Stiff and calm can lean toward gentle
              movement, which is{" "}
              <Link href="/therapeutic-exercise" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">exercise</Link>
              , not a heating pad marathon. When you are unsure, call
              before you invent a routine.
            </p>
            <p>
              Book at{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient appointment
              </Link>{" "}
              if no one has looked at the injury. Why we choose cold, rather
              than a spa chamber, is explained with{" "}
              <Link href="/cryotherapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">cryotherapy</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="What better feels like" title="Quieter tissue, then a real next step">
              <p>
                A useful pack makes the next few hours more tolerable and
                keeps the swelling from running the day. It does not have to
                erase the injury. If you need the pack more, not less, after
                several days, the injury needs another look. That look might
                be here. It might be urgent care. The trend tells us which.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Ice pack"
              title="Have the area looked at"
              body="We will show you placement and time if cold is actually the right tool."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">Where the pack sits, by body part</h2>
          <p>
            An ankle that rolled gets the pack over the swollen side, not
            wrapped so tightly the toes go white. You should still see the
            toes. A shoulder that is hot after a fall gets the pack on the
            sore face of the joint while the arm is supported, not dangling.
            A low back after a lift gets a pack across the painful band while
            you are lying down, so you are not leaning on the ice.
          </p>
          <p>
            A neck is awkward. The pack has to stay put without a strap that
            chokes, and you should not lie on it. If you cannot arrange that
            safely, do not improvise with a scarf pulled tight. Come in and
            we will show you, or skip home ice until you can. Neck pain care
            still covers the cause. The pack is only the compress.
          </p>
          <p>
            After an adjustment, some people want ice out of habit. Use it if
            the area feels hot or guarded. Skip it if you feel ordinary.
            Soreness that is just muscle effort often prefers a short walk
            over another twenty minutes of cold. Therapeutic exercise is where
            that walk gets specific.
          </p>
          <p>
            Frozen peas are a pack if they are in a cloth and you do not eat
            them afterward once they have thawed and refrozen badly. A
            dedicated gel pack is fine if it stays intact. Leaking gel on
            skin is a chemical problem, not a chiropractic one. Rinse and
            get medical help if the skin reacts.             We are not endorsing a
            brand, a temperature, or a freezer setting.
          </p>
          <p>
            A pack that was used on broken skin, or that smells like solvent,
            is done. Throw it out. Do not rinse and reuse a leaking chemical
            pack. If you share a household freezer, label the pack so nobody
            treats it as food. That is the entire hygiene talk. The clinical
            talk is still whether the injury needs a person to look at it.
            Ice you already did at home does not replace that look, and it
            does not count as having “tried chiropractic.”
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-ice"
        eyebrow="Questions"
        title="Questions about using an ice pack"
        intro="Skin, timing, and when to stop. Not a product recommendation."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Context"
        title="The pack is small. The injury might not be."
        intro="Use these when the compress is only one piece."
        links={[
          { href: "/cryotherapy", label: "Cryotherapy decision", note: "Why this office does not mean a cold chamber." },
          { href: "/injuries", label: "Work and sports strains", note: "The injuries that most often need early cold." },
          { href: "/therapeutic-exercise", label: "Exercise after the hot window", note: "Movement once ice is no longer the main tool." },
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "Ice does not restore joint motion by itself." },
          { href: "/neck-pain", label: "Neck pain", note: "If the pack is for the neck, neck pain care explains the cause." },
          { href: "/contact/new-patient-appointment", label: "Book", note: "952-920-7535 if you would rather call." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
