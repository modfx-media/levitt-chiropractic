"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const moments = [
  { title: "The first days after a strain", body: "Tissue that is hot, puffy, or angry often gets cold before it gets anything else. That window is measured in days, not in a lifestyle." },
  { title: "A flare on an older problem", body: "A back or neck that is usually mechanical can still have a hot day. Cold is for that day. It does not become the permanent plan." },
  { title: "After other work in the same visit", body: "Ice is often used on the same visit as an adjustment or laser, on the region that was actually treated, not as a full-body finish." },
  { title: "When cold is the wrong idea", body: "Poor circulation, numbness you cannot feel, broken skin, and a joint that looks infected are reasons to skip ice. We will say so." },
];

const faqs = [
  {
    q: "Is cryotherapy here a walk-in cold chamber?",
    a: "No. People search “cryotherapy” and picture a spa chamber. This office uses targeted cold on the area that needs it. The practical page for the pack itself is ice pack cryotherapy. We do not describe a whole-body chamber, a temperature, or a session length for one, because that service is not spelled out anywhere else on the site.",
  },
  {
    q: "How is this different from an ice pack page?",
    a: "This page is the decision: when cold belongs in a chiropractic plan, and when it does not. The ice pack page is the how: placement, time, and home use. Read both if you want the full picture. They are not two products.",
  },
  {
    q: "How long is cold left on?",
    a: "In-office cold on a region is described as usually 15 to 20 minutes. That is a guide, not a dare. Numb skin, a wrap that is too tight, or a pack straight on unprotected skin is how people get hurt. You leave with instructions that respect the skin.",
  },
  {
    q: "Should I use heat instead?",
    a: "Ice is generally the better first choice in the first 48 to 72 hours after a new injury, when the area is still irritable. After that, the choice depends on the exam. Heat on a hot, swollen joint is often the wrong experiment.",
  },
  {
    q: "Will cold replace an adjustment or a doctor visit?",
    a: "No. Cold turns down an angry area. It does not move a stuck joint, and it does not clear a fracture, a fever, or a nerve that is failing. Those still need the right exam.",
  },
];

export default function CryotherapyContent() {
  return (
    <>
      <ServiceHero
        title="Cryotherapy"
        subtitle="Targeted cold for hot, swollen, or freshly irritated tissue. Not a walk-in freeze chamber."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cryotherapy" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The word" title="Cryotherapy at this office means cold where it hurts">
            <p>
              Search results for cryotherapy are full of chambers, robes, and
              short exposures of the whole body. That is a different business.
              Levitt Chiropractic Center uses cold on the region that is hot,
              swollen, or freshly strained. The tool is an ice pack or a
              similar local application, applied in the visit and explained
              for home. If you wanted a spa chamber, this URL will not become
              one.
            </p>
            <p>
              The reasons the site gives are practical: swelling and
              inflammation come down, acute pain is easier to tolerate, and
              the area can settle enough that other care is possible. It is
              drug-free. It is not a recovery promise. A numb patch of skin
              is a sensation, not proof that the injury is gone.
            </p>
            <p>
              Dr. Levitt works at {siteConfig.address.full}. The phone is{" "}
              {siteConfig.phone}. He has practiced since 1987 and at this
              office since 1999. Cold is one item he can add. It is not the
              identity of the practice.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="Timing" title="When cold earns a place in the plan">
            <p>Four situations. If yours is not on the list, ask before you ice through a warning sign.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {moments.map((item) => (
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
          <SectionIntro eyebrow="Beside other care" title="Cold is rarely the only thing that happens">
            <p>
              An adjustment restores motion at a joint. Cold does not. On a
              day when the tissue is too irritable for a fast contact, ice
              may be the visit, and Torque Release or no thrust at all may be
              the judgment. Read{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                adjustments
              </Link>{" "}
              for the techniques. Do not expect cold to substitute for that
              decision.
            </p>
            <p>
              Cold laser therapy is light, not temperature. People mix them
              up because both are called “cold.” Laser does not chill the
              skin. Ice does. If you want the flashlight-sized device, that
              is the{" "}
              <Link href="/cold-laser-therapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                cold laser
              </Link>{" "}
              page. Booking “cryotherapy” when you meant laser wastes the
              first visit on vocabulary.
            </p>
            <p>
              Back pain, neck pain, and a fresh sports strain can all be
              reasons to ice a region. The condition pages explain the
              problem. This page only explains the cold. A fever with back
              pain, a joint that is red and you cannot bear weight, or pain
              after a major crash that has not been screened are not ice
              problems. Get medical care first.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="At home" title="The instructions matter more than the brand of pack">
            <p>
              You will be told where it goes, how long, and what to put
              between the cold and the skin. The in-office range we use as a
              starting point is 15 to 20 minutes on the region. Longer is not
              braver. Sleeping on a pack is a common way to injure skin. If
              you cannot feel the area, do not ice it until someone who can
              see the skin has signed off.
            </p>
            <p>
              The step-by-step home version is written on{" "}
              <Link href="/ice-pack-cryotherapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                ice pack cryotherapy
              </Link>
              . Use that page for technique. Use this one to decide whether
              cold belongs at all. Book through the{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient form
              </Link>{" "}
              if you have not been seen. There is no chamber fee and no pack
              price on this page.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="A limit" title="Cold buys calm. It does not finish the injury.">
              <p>
                Swelling that is down tomorrow can be back if the load
                returns. That is not a failure of the pack. It is a sign the
                plan still needs the joint, the exercise, or a physician.
                We stop recommending ice when the area is no longer in that
                irritable window, even if icing has become a habit.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Cryotherapy"
              title="Ask if cold fits today"
              body="Tell us whether the area is newly hot or has been sore for months."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">Cold is a window, then it should get smaller</h2>
          <p>
            On day one of a sprain, cold may be the main thing we do. On day
            four, if the puffiness is down and the joint will tolerate
            motion, cold becomes the thing you use after you overdo the walk,
            not the thing the visit is about. People who ice on a schedule
            forever have usually lost the plot. The plot was to calm the
            tissue so something else could happen.
          </p>
          <p>
            Circulation is the contraindication people skip. If your hands or
            feet are already cold, pale, and poorly perfused, adding a pack
            because a teammate does it is a bad imitation. Raynaud-type color
            changes, a wound, and numbness from neuropathy are reasons we
            decline. You do not have to know the diagnosis. Describe the
            color and the feeling. We would rather skip cold than explain a
            skin injury later.
          </p>
          <p>
            Same-day pairing is common and still selective. Ice after a
            contact that stirred a hot joint is reasonable. Ice on a neck
            that is only stiff from a pillow, with no heat and no swelling,
            may be unnecessary. Laser and cold are not a combo meal. If both
            are used, each one needs its own reason, said out loud.
          </p>
          <p>
            Athletes sometimes ask for cold before they play. Numbing a
            joint so you can finish a game is not a service we provide. If
            you need the area numb to perform, you are not ready to perform.
            That conversation is more useful than a colder pack.
          </p>
          <p>
            After the hot window closes, people still ask for cold because it
            is familiar. Familiar is not an indication. If the area is no
            longer swollen and the limit is stiffness, the next tool is
            usually movement, written on the exercise page, or a joint
            contact, written on the adjustments page. Keeping cold in the
            plan “just in case” fills time. We would rather end it.             You can
            always restart a pack for a new flare without making cold the
            identity of your care. If you are comparing this visit with a spa
            you saw advertised, compare the goal too. Theirs is often a whole
            body in a cold room for a few minutes. Ours is one region, long
            enough to calm it, then done. Those are not interchangeable
            appointments, and booking the wrong one helps neither of us.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-cryotherapy"
        eyebrow="Questions"
        title="Questions about cryotherapy"
        intro="Mostly to separate this office from a cryotherapy spa."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Read next"
        title="Cold is a means. These pages are the problems."
        intro="Pick the condition if you are unsure which tool you need."
        links={[
          { href: "/ice-pack-cryotherapy", label: "Ice pack how-to", note: "Placement, time, and skin safety." },
          { href: "/cold-laser-therapy", label: "Cold laser", note: "Light, not temperature." },
          { href: "/injuries", label: "Sports and work injuries", note: "Strains where early cold is often relevant." },
          { href: "/back-pain-treatments", label: "Back pain", note: "A flare can be iced. The back still needs its own exam." },
          { href: "/neck-pain", label: "Neck pain", note: "Same idea for a newly angry neck." },
          { href: "/personal-injury", label: "After a crash", note: "Cold may be part of it. The injury exam is the main event." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
