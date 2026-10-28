"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const means = [
  { title: "Hands-on structural care", body: "Adjustments and soft-tissue work when the exam finds a joint or muscle problem. “Alternative” does not skip the exam." },
  { title: "Non-drug first, not anti-drug", body: "The office prefers to start without opioids or surgery when the problem is mechanical. It does not ask you to abandon medicine or a prescription." },
  { title: "Habits you can actually keep", body: "Sleep, walking, and the short exercise list. The unglamorous part is the part that changes a month, if anything does." },
  { title: "A referral when the story is medical", body: "Infection, cancer treatment, a psychiatric crisis, and chest pain are not alternative-medicine cases. We collaborate with the clinician who owns those." },
];

const faqs = [
  {
    q: "What does alternative medicine mean at this office?",
    a: "Drug-free, non-surgical chiropractic care, plus the habit and nutrition conversations Dr. Levitt already uses. It does not mean untested remedies, and it does not mean you should avoid physicians.",
  },
  {
    q: "How is this different from functional medicine?",
    a: "Functional medicine is the page for the wider history: sleep, food, and what you already take. This page is the stance: try the non-operative, non-opioid options first when the exam supports them. Many visits use both ideas. The writeups are separate so they are not the same article twice.",
  },
  {
    q: "Can this replace my medical treatment?",
    a: "No. It can sit beside it. Do not stop a prescribed drug because you booked here. Emergency symptoms, cancer care, and mental-health crises stay with those clinicians.",
  },
  {
    q: "Which complaints are a reasonable fit?",
    a: "Mechanical pain in the neck, back, and joints, and people who want that pain approached without leading with medication or surgery. Headaches that the exam ties to the neck can be discussed. We do not promise results, and we do not treat the word “natural” as evidence.",
  },
  {
    q: "Where do I book?",
    a: "Call 952-920-7535 or use the new-patient form. The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. The first visit is an exam, the same standard as every other service.",
  },
];

export default function AlternativeMedicineContent() {
  return (
    <>
      <ServiceHero
        title="Alternative Medicine"
        subtitle="Non-surgical, non-opioid chiropractic care first, when the exam says that is safe. Not a rejection of medicine."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Alternative Medicine" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The label" title="Alternative, in this building, is a sequence">
            <p>
              The word is doing too much work on the internet. Here it means
              Dr. Alan Levitt starts with hands-on chiropractic care and with
              habits, and he does not lead with drugs or an operation when
              the problem is mechanical. He has practiced since 1987. The
              Saint Louis Park office, {siteConfig.address.full}, has been
              his location since 1999.
            </p>
            <p>
              It does not mean secret cures, detox kits, or a request that
              you distrust your physician. The functional-medicine notes say
              the same thing in the other direction: complementary, not a
              replacement. If you want the sleep-and-nutrition interview
              spelled out, use{" "}
              <Link href="/functional-medicine" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                functional medicine
              </Link>
              . Stay on this page if your question is whether a non-operative
              start is even appropriate.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="What you actually get" title="Four parts, all ordinary">
            <p>Nothing on this list is a product line.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {means.map((item) => (
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
          <SectionIntro eyebrow="A reasonable fit" title="Mechanical pain, examined, then a non-operative option if it fits">
            <p>
              Neck pain, back pain, joint pain, and headaches that start in
              the neck are the complaints that belong in a conversation about
              starting here. Each has a fuller page:{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">neck</Link>,{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">back</Link>,{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">adjustments</Link>.
              Soft-tissue work and exercise are part of that world. So is
              laser or ice when the tissue is the issue. Those are services
              with their own explanations, not synonyms for “alternative.”
            </p>
            <p>
              Older copy on this URL listed a wide set of symptoms, including
              digestive issues, and spoke as if adjustments plus nutrition
              plus habits were a single method for all of them. That is
              broader than we will claim. Digestion, allergies, and similar
              medical problems need the clinician who manages them. We can
              still look at the spine if you also have mechanical pain. We
              will not tell you the spine visit treated the other disease.
            </p>
            <p>
              Stress-related muscle guarding is fair game because it shows up
              in the exam as muscle and joint stiffness. A mental-health
              crisis is not. Please use emergency or psychiatric care for
              that, and do not wait on a chiropractic opening.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="The visit" title="Same clinical bar as the rest of the practice">
            <p>
              Paperwork, history, exam, and a plan you can repeat. X-rays
              only if they would change the plan. You hear what we think is
              mechanical, what we are not willing to call mechanical, and
              which tool is actually on the table. If the answer is “see
              your physician first,” that is a complete visit.
            </p>
            <p>
              Bring a medication list. We will not edit it. Bring prior
              records if the story is long. Wear clothes you can move in.
              Call {siteConfig.phone} or{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                request a new-patient visit
              </Link>
              . There is no package and no price on this page.
            </p>
            <p>
              Expectations stay modest. Some mechanical problems become more
              comfortable. Some do not, and the useful response is to change
              the plan or the clinician. “Natural” is a description of the
              tools. It is not evidence, and it is not a timeline.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="A line we keep" title="Collaborate. Do not compete with your internist.">
              <p>
                Most people who come here keep a primary clinician. That is
                the intended setup. If two offices are giving you opposite
                instructions about a drug or a surgery, ask them to talk, or
                pick the clinician whose license covers that decision. We
                will not quietly overrule a surgeon or a prescriber.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Alternative care"
              title="Start with an exam"
              body="We will tell you if a non-operative start is even the right first step."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">What a month of this approach can look like</h2>
          <p>
            Week one is the exam and, if it is safe, the first structural
            visit. You leave with one or two changes, not a new identity.
            Week two asks whether those changes were possible in a real
            schedule. If the exercise did not happen because it required a
            gym you do not have, the exercise was wrong. If the neck is
            worse, we do not congratulate you for “detoxing.” We retest.
          </p>
          <p>
            Later weeks are allowed to get boring. Boring is a sign the plan
            fits. A plan that needs a new supplement, a new device, and a new
            explanation every visit is not more alternative. It is less
            accountable. We would rather repeat a small set that is changing
            the exam than refresh the menu.
          </p>
          <p>
            Your physician’s month continues in parallel. Labs they ordered,
            drugs they manage, and referrals they made are not paused because
            you like the way a visit feels here. If our advice would collide
            with theirs, we stop and we sort it. Collision is a reason to
            talk, not a reason for you to pick the advice you prefer.
          </p>
          <p>
            People sometimes want this page because they are tired of being
            told to take something. Tired is understandable. It is not a
            diagnosis. If the exam is mechanical, we proceed. If the exam is
            not, we will disappoint you on purpose rather than invent a
            natural explanation for a medical problem.
          </p>
          <p>
            Friends will offer remedies with more confidence than this page
            will. A tea, a magnet, a cleanse, or a spine “reset” you saw in a
            video is not automatically part of care here because it is
            natural. If we do not use it, we will say we do not use it. You
            can still choose it on your own. You should not expect us to
            build the chart around it or to defend it to your physician.
            The work we will defend is the exam, the joint contact when it
            is indicated, and the small habit changes you agreed to try.
          </p>
          <p>
            If you are comparing offices, compare the limits they will say
            out loud. An office that will not name a red flag, a referral, or
            a problem it does not treat is not more open-minded. It is less
            specific.             Specific is the standard on the rest of these service
            pages, and it is the standard here too. Bring the name of any
            approach you want us to react to. A clear “we don’t do that” is
            more useful than a vague nod. You will still get the exam. The
            exam is the part that does not depend on the label you arrived
            with.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-alternative"
        eyebrow="Questions"
        title="Questions about alternative medicine here"
        intro="Definitions and limits. The tone is the same as the rest of the service pages."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="The actual services"
        title="“Alternative” points at these pages"
        intro="Book the service that matches the problem once you know which one it is."
        links={[
          { href: "/functional-medicine", label: "Functional medicine", note: "Sleep, food, and medications you already take." },
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "The hands-on structural visit." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "The habit that is specific enough to repeat." },
          { href: "/cold-laser-therapy", label: "Cold laser", note: "A non-drug option for some soft-tissue pain." },
          { href: "/common-chiropractic-conditions", label: "Conditions hub", note: "A map if you are not sure which pain you have." },
          { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "Training and how he frames chemical, nutritional, and structural care." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
