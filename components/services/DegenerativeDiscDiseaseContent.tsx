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

const discTypes = [
  {
    title: "Degeneration",
    body: "The disc loses fluid, gets shorter, and flexes less. Tears in the tougher outer layer are common with age. A scan can show this in a person who has no pain at all.",
  },
  {
    title: "Bulge",
    body: "The disc extends past its usual border in a broad way. It may crowd a nerve, or it may sit there without explaining the pain you feel today.",
  },
  {
    title: "Herniation",
    body: "Inner disc material pushes out through a weak spot in the outer layer. A herniated disc is more focal than a bulge. People also say slipped or ruptured. The words are not interchangeable, and the film has to be read with the exam.",
  },
  {
    title: "Stenosis and joint wear",
    body: "Degeneration can narrow the space around a nerve (spinal stenosis) or show up with osteoarthritis. Those are related findings, not a second disease you automatically have.",
  },
];

const contributors = [
  "Aging, including outer-layer tears and loss of disc fluid",
  "A specific injury, including a lift or a crash",
  "Repeated physical work",
  "Smoking",
  "Body weight that keeps a high load on the discs",
];

const faqs = [
  {
    q: "Does degenerative disc disease mean my spine is diseased?",
    a: "The name overstates it. It is the label for discs that have dried out and become less flexible with age. It is not an infection, and a scan can show it in someone with no pain. Pain depends on whether a nerve or a joint is actually irritated.",
  },
  {
    q: "What is the difference between a herniated disc and a bulging disc?",
    a: "A bulge is a broad extension of the disc. A herniation is inner material pushed through a more local weakness. Both can bother a nerve, and either can be an incidental finding. The distinction matters to a surgeon. It does not, by itself, pick the treatment.",
  },
  {
    q: "Can chiropractic care help a herniated disc?",
    a: "Sometimes, when the exam shows a mechanical problem that is safe to treat. Adjustments address joints that are not moving well. They do not push disc material back in, and they are not used when a nerve problem is worsening. Cold laser, ice, and exercise are the other tools here.",
  },
  {
    q: "Should I be scared of an MRI that says herniated disc?",
    a: "Bring the report. The useful question is whether the finding matches where you hurt and how strong the limb still is. Age-related disc changes are common. A new foot drop, groin numbness, or a bowel or bladder change is not a wait-and-see result.",
  },
  {
    q: "Will the disc look normal again if I feel better?",
    a: "Do not expect the MRI to rewind. The goal is pain, motion, and what you can do in a day. Some herniations become less dramatic. Many degenerative changes stay on the film. We will not promise either outcome.",
  },
  {
    q: "When do you send someone to a surgeon?",
    a: "When nerve function is getting worse, bowel or bladder control changes, conservative care is not changing a significant nerve finding, or a procedure is already scheduled for a reason we will not debate. We do not stop medication another physician prescribed.",
  },
];

export default function DegenerativeDiscDiseaseContent() {
  return (
    <>
      <ServiceHero
        title="Degenerative Disc Disease and Herniated Discs"
        subtitle="What the disc finding means, which symptoms need a physician today, and how conservative care is chosen at this office."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          {
            label: "Common Chiropractic Conditions",
            href: "/common-chiropractic-conditions",
          },
          { label: "Degenerative Disc Disease" },
        ]}
      />

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="The disc"
            title="A disc is a spacer with a tough outside and a soft center"
          >
            <p>
              Discs sit between the vertebrae. The outside is a tougher,
              rubbery layer. The center is softer. They allow the spine to
              move, keep space between the bones, and take load. Degenerative
              disc disease is not as much a disease as a name for the changes
              that show up as those discs age: less fluid, less height, less
              flexibility, and tears in the outer layer.
            </p>
            <p>
              Those changes can lead to a herniated disc, a bulging disc,
              spinal stenosis, or osteoarthritis, or to nothing you can feel.
              Symptoms may sit at the disc or travel when a nerve is crowded,
              including numbness in an arm or a leg. The scan does not tell
              us which of those you are living with.
            </p>
            <p>
              Disc care here includes herniated
              disc care. Pain that stays in the low back or runs down the leg
              as sciatica is also covered, from the nerve-pattern side, on
              the{" "}
              <Link
                href="/back-pain-treatments"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                back pain care
              </Link>
              . A crash that herniated a disc still starts with the injury
              history on the{" "}
              <Link
                href="/personal-injury"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                personal injury care
              </Link>
              .
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionIntro
            dark
            center
            eyebrow="Words on the report"
            title="Degeneration, bulge, and herniation are not the same sentence"
          >
            <p>
              Reports use these words loosely. Here is the distinction we
              use when we read one with you.
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
            {discTypes.map((item) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10"
              >
                <h3 className="font-heading text-xl font-bold text-white">
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
              eyebrow="Why discs change"
              title="Age is the common factor. It is not the only one."
            >
              <p>
                Spines degenerate as a normal part of getting older. Other
                factors that show up in the history:
              </p>
              <ul className="mt-2 space-y-2">
                {contributors.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F97316]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                A herniated disc after one lift or a collision is a different
                story from a disc that has dried out for years. Both can hurt,
                and both can be painless. Smoking and higher body weight are
                on the list because the office already names them as
                contributors, not as a lecture. Hot or cold packs and
                anti-inflammatory medication are common things people have
                already tried. Surgery is sometimes the right next conversation
                when nerve function is changing. Chiropractic care does not
                replace that conversation.
              </p>
            </SectionIntro>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border-t-4 border-[#F97316] bg-[#0F172A] p-7 text-white shadow-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
                Same-day medical care
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold">
                Disc pain with these signs is not a clinic appointment
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Rapidly worsening weakness, or a new foot drop</li>
                <li>
                  Numbness in the groin, or a new change in bowel or bladder
                  control
                </li>
                <li>Fever, or pain that does not change with position</li>
                <li>
                  A recent major injury that has not been cleared by a
                  physician
                </li>
                <li>
                  A surgery date that is already set for a progressive nerve
                  problem
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-orange-100">
                Those findings need a physician or an emergency department.
                Cauda equina symptoms, the groin and bowel or bladder group,
                are an emergency. Do not wait for a chiropractic opening.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="Reading the film"
            title="The exam decides whether the herniated disc is the pain"
          >
            <p>
              Bring the report and the images if you have them. The visit
              still starts with what you can do: walking, sitting, lifting
              your arm or your foot, and where the pain actually travels. A
              herniated disc on the left does not explain a right-leg problem.
              A degenerative label at a level that matches a dead nerve
              finding is a different visit from a degenerative label in a
              person who is stiff and strong.
            </p>
            <p>
              Dr. Levitt’s exam is the same standard as the rest of the
              practice. History, hands-on testing, and x-rays when they would
              change the plan. He has been in practice since 1987 and at{" "}
              {siteConfig.address.street}, {siteConfig.address.city}, since
              1999. Technique choice, if an adjustment is appropriate, is
              among Diversified, Zone Therapy, and Torque Release, and it is
              biased toward the gentler option when a disc is irritable. You
              hear which one and why before it happens.
            </p>
            <p>
              An adjustment is not surgical decompression, and it is not a
              promise to pull herniated material back into the disc. If
              someone offered you that outcome, it was not a description of
              this visit.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro
            eyebrow="Conservative care"
            title="What this clinic can do for a painful disc"
          >
            <p>
              When the exam says it is safe, the plan uses services already
              on the site.
            </p>
            <p>
              An adjustment is a specific contact on a joint that is restricted.
              The aim is motion at that joint, which can reduce the guarding
              around a painful level. It is withheld when weakness is
              progressing or the history is a red flag. Read the{" "}
              <Link
                href="/adjustments-and-manipulation"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                adjustments
              </Link>{" "}
              for the three techniques.
            </p>
            <p>
              Cold laser is a non-heat light held on the painful region for
              seconds to minutes, and it is dropped if it changes nothing.
              Targeted ice is for a hot flare. Exercise between visits is
              endurance, strength, and flexibility you can repeat at home.
              One stretch is not handed to every herniated disc. See{" "}
              <Link
                href="/cold-laser-therapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                cold laser
              </Link>
              ,{" "}
              <Link
                href="/ice-pack-cryotherapy"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                ice
              </Link>
              , and{" "}
              <Link
                href="/therapeutic-exercise"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                exercise
              </Link>
              .
            </p>
            <p>
              Orthotics are uncommon for an isolated herniation. They come up
              when the feet keep reloading the spine. Your primary physician
              stays involved, and we do not stop medication they prescribed.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro
              dark
              eyebrow="A realistic pace"
              title="Comfort can change before the MRI does"
            >
              <p>
                The useful scoreboard is walking, sleep, and whether limb
                symptoms are shrinking, not a follow-up scan. Some people feel
                more capable over a series of visits. Some need a different
                clinician. We will not keep adjusting a worsening nerve to
                fill the schedule.
              </p>
              <p>
                Activity inside a range that does not increase nerve pain is
                usually better than strict rest. A rounded, loaded lift is the
                habit most likely to flare a lumbar disc. “Never bend again”
                is not a plan.
              </p>
              <p>
                Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-orange-300 underline-offset-4 hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact/new-patient-appointment"
                  className="font-semibold text-orange-300 underline-offset-4 hover:underline"
                >
                  request a visit
                </Link>{" "}
                if you want the exam. If you already have a surgical date for
                a progressive deficit, keep that date and bring the notes if
                you still want a second description of the conservative side.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Disc care"
              title="Bring the imaging if you have it"
              body="The exam compares the report with what your arm or leg can still do."
            />
          </div>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-ddd"
        eyebrow="Common questions"
        title="Questions about discs and herniations"
        intro="Short answers for the report you are holding. They are not a personal diagnosis."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Related pages"
        title="Where a disc problem meets the rest of the practice"
        intro="Sciatica as a leg pattern is covered with back pain. Disc findings are explained here."
        links={[
          {
            href: "/back-pain-treatments",
            label: "Back pain and sciatica",
            note: "Leg pain, local lumbar pain, and how those patterns are sorted.",
          },
          {
            href: "/personal-injury",
            label: "Disc injury after a crash",
            note: "Auto-accident evaluation, including whiplash and lumbar strain.",
          },
          {
            href: "/common-chiropractic-conditions",
            label: "Other spine conditions",
            note: "Shorter notes on disc problems, pinched nerves, and joint pain.",
          },
          {
            href: "/adjustments-and-manipulation",
            label: "How adjustments are chosen",
            note: "The three techniques, and when a faster contact is not used.",
          },
          {
            href: "/therapeutic-exercise",
            label: "Exercise between visits",
            note: "Endurance, resistance, and flexibility matched to the week.",
          },
          {
            href: "/meet-the-doctor",
            label: "Dr. Alan Levitt",
            note: "Training and the Saint Louis Park practice since 1987.",
          },
        ]}
      />

      <LocationStrip />
    </>
  );
}
