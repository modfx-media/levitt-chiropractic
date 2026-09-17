"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

type Condition = {
  id: string;
  title: string;
  href?: string;
  blurb: string;
  paragraphs: string[];
};

const conditions: Condition[] = [
  {
    id: "allergies",
    title: "Allergies",
    blurb:
      "Chiropractic can help reduce the severity and the frequency of your allergies.",
    paragraphs: [
      "Chiropractic can help reduce the severity and the frequency of your allergies. Chiropractic does not work like an anti-histamine as a direct, short-term relief from allergies. Instead, chiropractic allows your body to be better equipped to fight against allergies.",
      "Allergies are a reaction by your immune system to an allergen (substances that normally have no effect on people) resulting in sneezing, coughing, congestion, hives, rashes, and in severe cases, seizure and anaphylactic shock. These symptoms are caused by the histamines your immune system creates in an attempt to protect your body against the allergen.",
      "When your spine is misaligned it can impinge on the nervous system in your body. Studies have shown that the nervous system has an effect on the functionality of your immune system. When your nervous system is under stress, your immune system cannot work at an optimal level. Chiropractors work with the nervous system by aligning the spine to relieve any stress on nerves this allows the immune system to work at a higher level, making it easier to fight off infections while recognizing allergens.",
      "If you suffer from allergies, chiropractic can help you find relief. Schedule an appointment today.",
    ],
  },
  {
    id: "carpal-tunnel",
    title: "Carpal Tunnel Syndrome",
    blurb:
      "Commonly associated with repetitive computer use relieved through concentrated spinal and joint adjustments.",
    paragraphs: [
      "This condition is most commonly associated with people who are constantly using a computer. Typing is a motion that, when performed repetitively and with poor posture, can cause carpal tunnel syndrome. Symptoms include pain, numbness, weakness, or a burning sensation.",
      "The nerves in the fingertips travel through the wrist, up the arm, and into the neck. The spine is the center of the nervous system, and the pain in your hands and wrists can be relieved by your chiropractor with concentrated spinal and joint adjustments.",
    ],
  },
  {
    id: "degenerative-disc-disease",
    title: "Degenerative Disc Disease",
    href: "/degenerative-disc-disease",
    blurb:
      "A name for the changes that can happen to the spine as we age not as much a disease as a process you can manage.",
    paragraphs: [
      "Degenerative disc disease is not as much a disease as it is a name for the changes that can happen to the spine as we age. Our discs are made of a tough, rubbery exterior and a soft interior. They sit between the vertebrae to act as shock absorbers. As we age, the spinal discs begin to degenerate which can cause herniated discs, bulging discs, spinal stenosis, and osteoarthritis.",
      "The degeneration of spinal discs may cause no symptoms at all, and symptoms depend on each patient and the severity of their case. Pain may occur at the site of the affected disc in the back or neck. As the pain is often caused by compressed nerves, this pain can also travel to other areas of the body like the buttocks, arms, and legs. Numbness and tingling in the arms and legs may also be experienced.",
      "Our spines can degenerate as a natural part of aging. Tears in the tougher outer layer of the disc are common as we grow older, and when the discs begin to lose fluid, they become smaller and less flexible. In addition to aging, other factors include obesity, smoking, repeated physical work, and injury.",
      "Pain caused by degeneration is often treated with hot or cold packs and an anti-inflammatory medication. When disc degeneration causes other problems, treatment may include physical therapy, stretching, and in some cases, surgery.",
    ],
  },
  {
    id: "disc-problems",
    title: "Disc Problems",
    blurb:
      "Herniated, bulging, slipped, or ruptured discs relief through proper spinal alignment.",
    paragraphs: [
      "Intervertebral discs are positioned between the vertebrae in the spine. The outside of a disc is made from cartilage, and in the center is a jelly-like solution. These discs serve many purposes, including allowing movement of the spine, creating space between the vertebrae, and acting as shock absorbers.",
      "Trauma to the spine can cause the discs to herniate, bulge, become displaced (slipped disc), or even rupture. Trauma is not the only cause as we get older, the discs can begin to weaken and dehydrate. These conditions can put pressure on the nerves around the spine and cause pain.",
      "If you suffer from one of these injuries you should see a chiropractor. Surgery is risky, expensive, and requires recovery time. In many cases, you can experience relief from these conditions through chiropractic by properly aligning the spine, pressure can be relieved on nerves and on the discs themselves.",
    ],
  },
  {
    id: "fibromyalgia",
    title: "Fibromyalgia",
    blurb:
      "Chronic, widespread pain chiropractic care can help uncover causes and provide relief.",
    paragraphs: [
      "Fibromyalgia is a condition that we still do not know much about. There is no specific known cause, and it could be brought on by many different factors. The main symptom of fibromyalgia is chronic pain throughout the body, mainly located in joints. The pain may be achy, sharp, radiating, burning, or shooting and it may be mild or severe. Fibromyalgia has also been known to bring on other conditions like trouble sleeping, headaches, depression, and anxiety.",
      "While there is no known cure for fibromyalgia, chiropractic treatment can help to uncover what may be causing the pain and also provide relief for the pain. The cause could be physical, mental, or emotional, so a full examination will be performed.",
      "Adjustments and chiropractic massage can be used to relieve pain from the affected areas. The added effects of chiropractic treatment such as increased energy levels, better circulation, and a stronger immune system can also help fight the effects of fibromyalgia. Give us a call to schedule a consultation.",
    ],
  },
  {
    id: "headaches",
    title: "Headaches",
    blurb:
      "80% of all headaches originate from the neck adjustments target the cause, not just the symptoms.",
    paragraphs: [
      "Many people believe that headaches are caused by loud noise, being tired, or being stressed. While these are all factors that can lead to headaches, the direct cause is tightness in the neck and shoulders. The tightness can cause misalignments in the vertebrae of your neck, resulting in pain.",
      "80% of all headaches originate from the neck. With a typical cervicogenic (neck origin) headache, a person usually feels pain starting at the base of the skull which radiates into the temples, eyeballs, and forehead.",
      "Massage of the neck and shoulder muscles can release tension, and a chiropractic adjustment can realign the vertebrae in your neck. Chiropractic can help eliminate the cause of your headaches rather than offering temporary relief from the symptoms.",
    ],
  },
  {
    id: "joint-dysfunction",
    title: "Joint Dysfunction",
    blurb:
      "Stiff, restricted joints including commonly misdiagnosed sacroiliac dysfunction.",
    paragraphs: [
      "Joint dysfunction occurs when joints become stiff and full movement is restricted. It can be caused by an injury, poor posture, overuse/underuse of a joint, muscle imbalance, and other factors. Like arthritis, joint dysfunction can cause pain in the joint and the surrounding muscles, and can also cause problems in other parts of the body due to overcompensation.",
      "One common form of joint dysfunction is sacroiliac joint dysfunction, which occurs where the base of the spine meets the pelvis. It causes low back pain and prohibits movement. This condition is often misdiagnosed because the symptoms are similar to sciatica or a herniated disc.",
      "Your chiropractor can properly diagnose this condition and provide relief. Using specific adjustments for the affected joint can return proper mobility and relieve pain.",
    ],
  },
  {
    id: "neck-back-pain",
    title: "Neck / Back Pain",
    blurb:
      "Subluxations misalignments of your vertebrae addressed at the source.",
    paragraphs: [
      "Pain along the spinal column in your neck or back is usually caused by subluxations, or misalignments of your vertebrae. A small misalignment can cause pain by putting pressure on nerves. Left untreated, these subluxations can cause muscle spasms and increasing pain.",
      "Chiropractic adjustments properly align your spine so that pressure on joints and nerves is released. It is a direct treatment for the cause of the pain not a temporary relief like pain relievers or massage. If you are experiencing back or neck pain visit us today.",
    ],
  },
  {
    id: "osteoarthritis",
    title: "Osteoarthritis",
    blurb:
      "Wearing-down of cartilage between joints restoring movement and reducing pressure on the nervous system.",
    paragraphs: [
      "Arthritis is a condition that is caused by the wearing down of the cartilage between joints. Some of the major joints affected are the knees, hips, back, neck, and hands/wrists. Arthritis can be painful and can cause the affected areas to not function properly. Arthritis in one area can cause arthritis or other problems in a different joint due to overcompensation.",
      "Pain killers can cause temporary relief from pain and discomfort, but it is not a long-term solution. Chiropractic can alleviate pain by releasing pressure on the nervous system with proper alignment. It can also restore proper joint movement, helping to ensure you use proper motion so you do not cause injury to other parts of your body.",
      "We are not concerned strictly with the affected area, but rather the body as a whole. We aim to restore and maintain proper movement and functionality to increase your overall well-being.",
    ],
  },
  {
    id: "pinched-nerve",
    title: "Pinched Nerve",
    blurb:
      "Inflammation, pain, and muscle spasms addressed by releasing pressure at the spine.",
    paragraphs: [
      "When a nerve is squeezed or compressed it is called a “pinched nerve.” This can be caused by spinal misalignments, bulging or herniated discs, or other factors. The increased pressure on the nerve causes inflammation, pain, and sometimes muscle spasms.",
      "The pressure on the nerve must be relieved in order to alleviate the pain. An examination can reveal the cause of the pain, and an adjustment can relieve it by properly aligning the spine and addressing the cause.",
    ],
  },
  {
    id: "sciatica",
    title: "Sciatica",
    blurb:
      "Pain, numbness, and weakness in the lower back and leg diagnosed and treated at the root.",
    paragraphs: [
      "Sciatica is a condition that results when the sciatic nerve becomes irritated. Bulging discs, spinal subluxations, and muscle spasms can all cause increased pressure on the sciatic nerve. When this happens it causes pain, numbness, and weakness in the lower back and leg.",
      "To properly treat sciatica the cause of the condition needs to be diagnosed and properly treated. Your chiropractor can help you do this.",
    ],
  },
  {
    id: "whiplash",
    title: "Whiplash",
    blurb:
      "Soft-tissue damage and structural injury from sudden-impact trauma schedule before relying on meds or surgery.",
    paragraphs: [
      "Whiplash is a common injury caused by a sudden, forceful back-and-forth motion of the neck. The rapid movement causes the muscles and ligaments to overextend, leading to strains and/or tears referred to as soft tissue damage.",
      "Whiplash can also cause structural damage such as misaligned vertebrae, herniated, bulging or ruptured discs, or nerve damage due to the overextension from the violent movement.",
      "Chiropractic can help with both types of injuries. Adjustments and alignments can be performed for those experiencing whiplash symptoms. The pressure on the discs and nerves is released when the spine is returned to its proper alignment. Chiropractic massage can be used to help relieve the pain and discomfort from soft tissue injuries.",
      "If you have whiplash symptoms, schedule an appointment with us before relying on pain medications and surgery.",
    ],
  },
];

const maintenance =
  "We have discussed many conditions that can be relieved through chiropractic. The best way to treat these conditions is to prevent them before they even start. Regular chiropractic visits can help to prevent physical problems and injuries from occurring. Other potential benefits of regular chiropractic visits are increased flexibility and mobility, higher level of energy, improved posture, more effective immune system, better circulation, and an overall better feeling of well-being.";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ConditionAccordion({ c }: { c: Condition }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#1E3A5F]/50 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#1E3A5F]/80"
      >
        <span className="flex-1">
          <span className="block font-heading text-lg font-bold text-white">
            {c.title}
          </span>
          <span className="mt-1 block text-sm text-white/65">{c.blurb}</span>
        </span>
        <span
          aria-hidden
          className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#F97316] text-white transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-6 py-6 text-sm leading-relaxed text-white/80 sm:text-base">
              {c.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {c.href && (
                <p className="pt-2">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 transition-colors hover:text-orange-200"
                  >
                    Learn more about {c.title}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CommonChiropracticConditionsContent() {
  return (
    <>
      <ServiceHero
        title="Common Chiropractic Conditions"
        subtitle="From headaches and pinched nerves to sciatica and joint pain conditions Dr. Levitt treats every week."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Common Chiropractic Conditions" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Conditions We Treat
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Explore common chiropractic conditions
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Headaches, sciatica, a wrist that complains after a desk week,
              a heel that hurts on the first step in the morning — tap the
              condition that sounds like yours. Some of these belong in a
              chiropractic exam. Some (fracture, infection, unexplained weight
              loss) do not. We will say which. Questions?{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                Contact us
              </Link>{" "}
              or call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 DARK NAVY: ACCORDION OF CONDITIONS */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#1E3A5F]/60 blur-[140px]"
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              12 Common Conditions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Find what&rsquo;s bothering you
            </h2>
            <span
              aria-hidden
              className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-8 sm:mt-12 grid gap-3"
          >
            {conditions.map((c) => (
              <ConditionAccordion key={c.id} c={c} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 WHITE: MAINTENANCE CARE + CTA */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Maintenance Care
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                The best treatment is prevention
              </h2>
              <span
                aria-hidden
                className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
              />
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                {maintenance}
              </p>

              <p className="mt-8 text-base leading-relaxed text-slate-700 sm:text-lg">
                Ready to start? Call{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  {siteConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-[#F97316] underline-offset-4 transition-colors hover:underline"
                >
                  request a visit online
                </Link>
                .
              </p>
            </motion.div>

            <div className="lg:col-span-2">
              <CtaCard
                eyebrow="Stay Ahead of Pain"
                title="Build a maintenance plan"
                body="Schedule a visit with Dr. Levitt today."
              />
            </div>
          </div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
