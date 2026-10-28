"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const questions = [
  {
    title: "What hurts, and what else is off",
    body: "Musculoskeletal pain can sit next to poor sleep, a limited diet, or a day with no real movement. The visit writes those down. It does not assume they are the cause.",
  },
  {
    title: "What you already take",
    body: "List medicines and supplements another clinician prescribed. This office does not stop them. Functional medicine here is added beside that care, not instead of your physician.",
  },
  {
    title: "What a normal week looks like",
    body: "Sleep position, meals you actually eat, and how you load the spine at work. A plan that ignores the week does not get followed.",
  },
  {
    title: "What the spine exam shows",
    body: "Adjustments are still available when a joint is not moving. Functional medicine does not retire the structural visit. It adds questions when the history says the pain is not only a joint.",
  },
];

const faqs = [
  {
    q: "How is functional medicine different from an adjustment?",
    a: "An adjustment is a contact on a joint. Functional medicine, as this office describes it, looks at the wider picture: sleep, nutrition, habits, and how those sit next to the pain. You can have both in one plan. You do not have to pick a philosophy.",
  },
  {
    q: "Will I have lab work or genetic testing?",
    a: "This page does not offer a lab menu or a genetic test. The existing description says the history can run from what you already know about your health to daily habits. If a test would help, that order belongs with the physician who runs it. We will not invent a panel to justify the visit.",
  },
  {
    q: "Do I stop my medication?",
    a: "No. Functional medicine here is complementary. Do not change a prescription because of a chiropractic visit. Your prescribing clinician stays in charge of those drugs.",
  },
  {
    q: "Which problems does the office connect to this visit?",
    a: "The page already names fibromyalgia, sciatica, joint pain, and degenerative disc disease as examples where a wider plan is sometimes useful. Each of those still needs its own exam. Sciatica and disc problems have dedicated pages. This visit does not replace them.",
  },
  {
    q: "Is this a cure for chronic illness?",
    a: "No. The office talks about looking for contributors and about habits that can be changed. It does not promise years or decades of relief, and it does not claim to cure a medical disease. If the story sounds like infection, cancer, or a psychiatric crisis, that is not this appointment.",
  },
];

export default function FunctionalMedicineContent() {
  return (
    <>
      <ServiceHero
        title="Functional Medicine"
        subtitle="Chiropractic care plus the sleep, food, and daily-load questions that sometimes sit under a stubborn pain problem."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Functional Medicine" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="What the phrase means here"
            title="A wider history, not a second clinic"
          >
            <p>
              Functional medicine at Levitt Chiropractic Center is Dr. Alan
              Levitt’s whole-person visit. He still examines the spine. He
              also asks what else is going on when pain will not behave like
              a simple joint problem. The office describes that as looking at
              how the body is functioning, not only at the sore spot.
            </p>
            <p>
              The chemical, nutritional, and structural ideas on the{" "}
              <Link
                href="/meet-the-doctor"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                meet the doctor
              </Link>{" "}
              page are the frame: nutrition and supplements as a conversation,
              and adjustments plus soft-tissue work for the structure. This
              page does not add a dispensary price list. Supplements, if they
              are discussed, are recommendations, not a required purchase.
            </p>
            <p>
              “Root cause” on the old page is easy to overread. Here it means
              we try not to chase a single symptom with a single trick. It
              does not mean we have found a hidden diagnosis the rest of
              medicine missed. If the history sounds medical, you keep your
              physician, and we say so.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="The interview" title="Questions that change the plan">
            <p>These are the practical parts of the visit, not a protocol in a box.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {questions.map((item) => (
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
          <SectionIntro eyebrow="Examples" title="Where a wider plan shows up in real complaints">
            <p>
              Back pain that returns every Sunday night may be a joint, and
              it may also be a chair and a sleep position. The{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                back pain
              </Link>{" "}
              page owns the mechanical sort. This visit adds the week around
              it when the mechanical sort is not the whole story.
            </p>
            <p>
              Headaches are another example already on the site: stress,
              diet, movement, and manipulation can all be discussed. That is
              not a migraine program, and a sudden severe headache is an
              emergency. Neck pain itself is on the{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                neck pain
              </Link>{" "}
              page.
            </p>
            <p>
              Fibromyalgia, as the conditions notes say, has no single known
              cause and no cure we can offer. A visit can still look for
              contributors to the pain and for sleep trouble. It should not
              be sold as the answer to the syndrome. Sciatica and disc
              disease stay on their own pages; functional questions are extra,
              not a replacement exam.
            </p>
            <p>
              Nutrition advice here is ordinary and specific: what you eat,
              what you skip, and whether a supplement you already bought is
              doing anything you can notice. We do not publish calorie
              targets or sell a detox. If you need a dietitian or a medical
              workup for weight, blood sugar, or gut disease, that referral
              is part of an honest plan.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Boundaries" title="What this visit refuses to be">
            <p>
              It is not anti-medicine. The alternative-medicine page uses
              that same line: non-surgical and non-opioid first, not opposed
              to physicians. Read{" "}
              <Link href="/alternative-medicine" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                alternative medicine
              </Link>{" "}
              if you want the drug-free framing. Stay here if you want the
              habit and nutrition questions spelled out.
            </p>
            <p>
              It is not a guarantee of lasting results. Older marketing on
              this URL talked about benefits for years or decades. That is a
              hope, not a finding we can promise. Chronic problems often
              change slowly, and some do not change with this kind of care.
            </p>
            <p>
              Bring a photo ID, a medication list, and a rough picture of
              sleep and meals. The address is {siteConfig.address.full}. Call{" "}
              {siteConfig.phone} or book a{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient appointment
              </Link>
              . Dr. Levitt has practiced since 1987 and at this office since
              1999.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="Afterward" title="The plan should fit a week you actually have">
              <p>
                You should leave knowing which part is structural, which part
                is a habit, and which part needs another clinician. Two
                changes you can keep are better than a binder. If nothing in
                the exam or the habits is moving after a fair trial, we stop
                pretending the next month will be different and we refer.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Functional medicine"
              title="Start with the wider history"
              body="Bring your medication list. We will not take you off anything a physician prescribed."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">A week of notes that is actually usable</h2>
          <p>
            If sleep is part of the story, write down the hour you get in bed
            and the hour you give up, for a few nights. Do not produce a
            perfect diary. A pattern of waking at 3 a.m. with a stiff back is
            different from a pattern of never getting horizontal before
            midnight. Those two nights suggest different next steps, and
            neither one is a supplement.
          </p>
          <p>
            Food notes can be equally plain. What you ate on the day the pain
            spiked, and whether you skipped meals, is enough to start. We are
            not scoring macros. A person who is dizzy because they do not eat
            before a morning visit does not need a protocol. They need
            breakfast and a clearer exam. Gut disease, unexplained weight
            change, and blood in the stool are physician problems we will
            name as such.
          </p>
          <p>
            Movement notes belong here too, but the exercises themselves are
            written on the exercise page so this one does not become a
            workout sheet. “I sit nine hours and walk to the printer” is a
            functional finding. The response might be a walking break. It
            might be a chair change. It might be irrelevant if the exam shows
            a disc with a true nerve deficit. The wider history loses when it
            competes with a dangerous finding.
          </p>
          <p>
            Bring the bottles you already own if you want them looked at.
            We will not add a stack of new ones to look thorough. If a
            product is interacting with a prescription, that question goes
            back to the prescriber.             Our role is not to referee the pharmacy.
          </p>
          <p>
            Bring a short list of questions you actually want answered, not a
            printout of a forum thread. “Should I change breakfast, or is the
            back the whole story?” is a usable question. “Can you balance my
            hormones?” is not a service we advertise, and we will not pretend
            a spinal visit does that. If the honest answer is a referral to
            primary care, you should hear it in the first visit rather than
            after a month of vague advice. Write down what we agreed to try
            and what we agreed not to touch. That note is the plan.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-functional"
        eyebrow="Questions"
        title="Questions about functional medicine"
        intro="Plain answers about what this office does and does not add to chiropractic care."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Goes with"
        title="Structural pages this visit does not replace"
        intro="Use the condition page for the pain. Use this page for the wider questions."
        links={[
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "Still the structural tool when a joint is restricted." },
          { href: "/back-pain-treatments", label: "Back pain and sciatica", note: "The mechanical sort for the low back and the leg." },
          { href: "/degenerative-disc-disease", label: "Disc disease", note: "Imaging and nerve findings live here." },
          { href: "/therapeutic-exercise", label: "Exercise", note: "The movement piece of a habit plan." },
          { href: "/alternative-medicine", label: "Alternative medicine", note: "The drug-free framing, written separately so the two pages do not repeat." },
          { href: "/meet-the-doctor", label: "Dr. Alan Levitt", note: "Training and the chemical, nutritional, and structural frame." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
