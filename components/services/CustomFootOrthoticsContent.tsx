"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const comparisons = [
  { label: "Shape", custom: "Made to the contours of your feet and how you move.", otc: "A generic shell that may not match either foot." },
  { label: "Who decides", custom: "Prescribed after a chiropractic look at stance and symptoms.", otc: "Chosen from a wall display, with no exam." },
  { label: "Wear", custom: "The office says most prescription pairs last well over a year in regular use.", otc: "Foam inserts compress and stop supporting sooner." },
];

const faqs = [
  {
    q: "What are custom foot orthotics?",
    a: "Devices made for your feet that fit inside most shoes. They are shaped to your contours and to the way you walk, not pulled from a bin. A chiropractor can prescribe them. They are not the same object as a drugstore insert.",
  },
  {
    q: "Will orthotics fix my back?",
    a: "Only if the exam shows the feet are part of why the back, hip, knee, or neck keeps reloading. They ease pressure upstream when the stance is the lever. They do not fix a disc herniation, a hip that needs a surgeon, or a back problem that has nothing to do with gait.",
  },
  {
    q: "Can orthotics help a heel spur?",
    a: "The office’s position is narrow: we can often calm the tissue around a spur and the gait that keeps irritating it. We cannot sand a spur off the bone. A foot that is hot, red, or impossible to bear weight on needs a medical exam first.",
  },
  {
    q: "Do they fit every shoe?",
    a: "Most everyday and athletic shoes accept them. We look at the shoes you actually wear. A dress shoe with no depth may not. That conversation happens at fitting, not as a promise that every pair in the closet will work.",
  },
  {
    q: "How long do they last, and what do they cost?",
    a: "Most prescription orthotics last well over a year in regular use. We do not list a price here. Ask the office. Drugstore inserts are cheaper and often the wrong shape, which is a different problem from the sticker.",
  },
];

export default function CustomFootOrthoticsContent() {
  return (
    <>
      <ServiceHero
        title="Custom Foot Orthotics"
        subtitle="Prescription devices for your feet, used when stance is part of the pain. Not a bin of inserts, and not a spur removal."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Custom Foot Orthotics" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The device" title="Orthotics change the floor under the spine">
            <p>
              Custom foot orthotics are made to fit inside shoes. They match
              the foot you have, including the arch and the way that foot
              lands. The office lists three jobs: line the foot and ankle up
              more usefully, take some load off the knees, hips, back, neck,
              and shoulders when those are paying for the stance, and spread
              pressure so each step is less of a poke.
            </p>
            <p>
              They can be worn on ordinary days and during most activities,
              which is the point. A device that only works in the treatment
              room does not change the other fourteen hours. They are not
              issued because they are on a menu. Dr. Levitt looks at stance,
              shoes, and whether the spine is compensating. If the feet are
              not the lever, you leave without a pair.
            </p>
            <p>
              The clinic is at {siteConfig.address.full}. Dr. Levitt has
              practiced since 1987 and at this address since 1999. Call{" "}
              {siteConfig.phone}.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionIntro dark center eyebrow="Versus the drugstore" title="Three differences that are actually on the site">
            <p>Cheaper is not the same decision as “wrong shape.”</p>
          </SectionIntro>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="text-orange-300">
                  <th className="py-2 pr-4 font-semibold"> </th>
                  <th className="py-2 pr-4 font-semibold">Prescription pair</th>
                  <th className="py-2 font-semibold">Store insert</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-t border-white/10 align-top">
                    <th className="py-4 pr-4 font-semibold text-white">{row.label}</th>
                    <td className="py-4 pr-4 text-white/80">{row.custom}</td>
                    <td className="py-4 text-white/70">{row.otc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Who might need them" title="Feet, knees, and the back that keeps choosing one side">
            <p>
              Heel pain and plantar fascia irritation are the foot-local
              reasons. Knee pain that tracks with the way the foot collapses
              is another. Low-back pain that returns in the same gait pattern
              is the spinal reason, and it is easy to over-claim. Orthotics
              are tried when the exam shows the ground is part of the load.
              They are a poor idea for an isolated disc herniation that has
              nothing to do with the feet. That problem is on the{" "}
              <Link href="/degenerative-disc-disease" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                disc care
              </Link>
              . Recurring back pain in general is on the{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                back pain care
              </Link>.
            </p>
            <p>
              A heel spur question comes up often enough to answer directly.
              Calming the tissue and changing the irritating gait is
              sometimes possible. Removing the spur is not something a
              chiropractic office does with a device or a laser. If the heel
              is newly hot and you cannot walk on it, start with a medical
              exam, not a fitting.
            </p>
            <p>
              Fractures, active infection, and a foot that needs a surgeon
              are outside this service. So is a hip problem that is not
              coming from the ground. We will say which one we think you
              have.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Fitting" title="What the appointment is actually for">
            <p>
              Shoes come with you. The ones you work in matter more than the
              ones you wish you wore. We look at wear patterns, arches, and
              how the pelvis and spine sit on top of that. If a custom device
              is the right lever, it is prescribed. You should know what
              problem it is aimed at, and what it will not change.
            </p>
            <p>
              Break-in is gradual. A new pair that hurts more after a full
              day is a reason to call, not a test of toughness. Most people
              use them in daily and athletic shoes. Bring the odd pair if you
              are unsure it has room. There is no published fee in advance.
              Ask when you{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                book
              </Link>
              .
            </p>
            <p>
              Orthotics do not replace an adjustment when a joint above the
              foot is stuck, and an adjustment does not replace them when the
              foot keeps undoing the visit. The{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                adjustments
              </Link>{" "}
              is the contact. Orthotics are the ground.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="After the pair arrives" title="Use them in real shoes, then recheck">
              <p>
                The test is whether the pain they were built for is less
                provocative in the shoes you live in. If the back or heel is
                unchanged after a fair wear-in, we do not tell you to “give
                it a year” without looking again. Inserts also wear out. The
                “well over a year” line is the office’s general description,
                not a warranty printed here.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Orthotics"
              title="Bring the shoes you actually wear"
              body="We prescribe a pair only when the feet are part of the load."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">The first two weeks in the pair</h2>
          <p>
            Day one is not an eight-hour test. Wear them for a portion of the
            day in the shoes that have enough depth, then come out of them if
            a new hot spot shows up. A hot spot is information about the
            shell or the shoe, not a character test. Call rather than
            layering moleskin for a month and deciding orthotics “failed.”
          </p>
          <p>
            Look at the old insoles you removed. The wear pattern, heavier on
            one heel or one big toe, is part of why a custom shape was even
            considered. If both shoes are worn evenly and the pain is a disc
            with leg weakness, we should not have made the pair. That
            mismatch is on us to catch at the exam, which is why the shoes
            come to the visit before anything is ordered.
          </p>
          <p>
            Running, a long shift on concrete, and dress shoes are three
            different loads. A pair that is comfortable in a sneaker can be
            miserable in a flat. We will say which shoes are realistic. We
            will not promise the pair works in every shoe you own, including
            the ones with no removable liner.
          </p>
          <p>
            Recheck when the pain they were built for is either clearly
            better in those shoes or clearly not. “Well over a year” is how
            long the materials usually hold shape, not how long you should
            wait to complain. If the heel is worse, stop wearing them and
            come back.             Continuing to prove a point is how a helpful device
            becomes an irritant.
          </p>
          <p>
            Socks, volume, and a shoe that was already tight are the boring
            reasons a good pair feels bad. If you add a thick sock on day
            three, the fit changes. Tell us that before we reshape anything.
            Children and people whose shoe size is still changing are a poor
            time to lock in an expensive shape. Say so if that is you. We
            would rather delay the pair than deliver something you outgrow
            before the break-in ends. None of this is a price. Ask the office
            what a pair costs for your case when you book. The number is not
            on the website.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-orthotics"
        eyebrow="Questions"
        title="Questions about custom orthotics"
        intro="Fit, limits, and the heel-spur question. No price is listed because the office does not publish one here."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Related"
        title="Pain that might be coming from the ground"
        intro="Read about the painful condition first if you are not sure the feet are involved."
        links={[
          { href: "/back-pain-treatments", label: "Back pain", note: "Orthotics are one possible lever, not the default." },
          { href: "/neck-pain", label: "Neck pain", note: "Occasionally related to stance. Usually a neck problem of its own." },
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "For the joints above the feet." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "Strength and mobility around the new stance." },
          { href: "/cold-laser-therapy", label: "Cold laser", note: "Sometimes used on irritated soft tissue. It does not remove a spur." },
          { href: "/contact/new-patient-appointment", label: "New patient visit", note: "Bring shoes. Call 952-920-7535 with questions." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
