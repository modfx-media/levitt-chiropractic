"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const owned = [
  { href: "/neck-pain", label: "Neck pain", note: "Local stiffness, arm symptoms, desk or “tech” neck, and headaches that start at the base of the skull. Not whiplash." },
  { href: "/back-pain-treatments", label: "Back pain and sciatica", note: "Low-back pain and nerve pain down the leg, including the sacroiliac mix-up." },
  { href: "/degenerative-disc-disease", label: "Discs", note: "Degeneration, bulge, and herniation, including when a scan is already in hand." },
  { href: "/personal-injury", label: "Whiplash and crashes", note: "Auto accidents and other sudden-force injuries. Tell us it was a crash when you book." },
];

const shorter = [
  { title: "Headaches", body: "A headache that begins where the neck meets the skull can be mechanical, and that exam is part of neck care. Noise, fatigue, and stress can aggravate headaches without causing them. A sudden severe headache, a headache after a head strike, or a headache with confusion is an emergency. We do not quote a percentage of headaches that come from the neck." },
  { title: "Pinched nerve", body: "The phrase means a nerve is irritated or compressed. In the neck that can show up in the arm. In the low back it can show up as sciatica. Neck care and back care sort those patterns. Weakness that is increasing is not a pinched-nerve wait." },
  { title: "Joint and sacroiliac pain", body: "A stiff joint can hurt locally and can make the next joint work too hard. Sacroiliac pain, where the spine meets the pelvis, often imitates sciatica or a disc. It is tested in the back-pain exam, not diagnosed from a list. The adjustment, if one is used, is aimed at the joint the exam found." },
  { title: "Carpal tunnel and repetitive hand pain", body: "Numbness, weakness, or burning with repetitive hand use can involve nerves that travel through the arm into the neck. Wrist pain still needs a screen for fracture and for a problem that belongs to a hand surgeon. An adjustment is not a carpal-tunnel cure. Laser is sometimes discussed for the soft tissue, and it has limits." },
  { title: "Osteoarthritis", body: "Worn cartilage in a knee, hip, spine, or hand can hurt and can change how you move. Chiropractic care here can look at the motion you still have and at the compensation. It does not regrow cartilage. A hot, swollen joint with fever is medical, not a mobilization visit." },
  { title: "Fibromyalgia", body: "Widespread pain without a single known cause, sometimes with poor sleep. We do not offer a cure. A visit can look for mechanical contributors and for sleep and load problems. It should not be presented as the treatment of the syndrome. Sleep and daily-habit questions, if they help, belong with functional medicine." },
];

const faqs = [
  {
    q: "Do you treat every condition listed in one visit?",
    a: "No. Neck pain, back pain and sciatica, disc problems, and crash injuries each have their own explanation below or in the links. Shorter notes here cover problems that are less often the whole story. The exam decides what is actually going on.",
  },
  {
    q: "Do you still list allergies and similar conditions?",
    a: "Allergy emergencies and immune disease belong with a physician. We do not claim spinal care treats the immune system. If you also have a mechanical spine problem, that part can be examined on its own.",
  },
  {
    q: "Where do headaches go?",
    a: "If they start in the neck, neck care is the right place to start. If they started with a crash, personal injury care is the right place. If the headache is sudden and severe, or follows a head injury, use emergency care and do not wait for a chiropractic slot.",
  },
  {
    q: "Can one person have two of these at once?",
    a: "Yes. A disc and a sacroiliac joint can both hurt, and a neck can be stiff while a back flares. The exam says which one is driving today. You do not need a separate philosophy for each label.",
  },
  {
    q: "How do I book if I am not sure of the label?",
    a: "Book a new-patient visit and describe the symptom in plain language. Call 952-920-7535. The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. You do not need the correct medical name to get on the schedule.",
  },
];

export default function CommonChiropracticConditionsContent() {
  return (
    <>
      <ServiceHero
        title="Common Chiropractic Conditions"
        subtitle="Neck pain, back pain, disc problems, and injuries from a crash, plus shorter notes on headaches, joints, and nerve pain."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conditions" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Where to start" title="Match the pain before you read a definition">
            <p>
              Neck pain, back pain, sciatica, disc problems, and whiplash are
              common enough to explain on their own. Use the four links below
              first if one of those is your main complaint. The shorter notes
              further down cover headaches, a pinched nerve, joint pain, and
              a few other problems that often travel with the spine.
            </p>
            <p>
              Dr. Alan Levitt examines at {siteConfig.address.full}. Phone{" "}
              {siteConfig.phone}. He has practiced since 1987 and at this
              office since 1999. The exam standard does not change with the
              label: history, hands-on testing, and imaging only when it
              would change the plan.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="Common problems" title="Start here if your problem has a name">
            <p>Each link is the fuller explanation. Describe the symptom if you are not sure which name fits.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {owned.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block h-full rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6 ring-1 ring-white/10">
                  <h3 className="font-heading text-xl font-bold">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Also seen here" title="Other problems we are often asked about">
            <div className="space-y-6">
              {shorter.map((item) => (
                <article key={item.title}>
                  <h3 className="font-heading text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2">{item.body}</p>
                </article>
              ))}
            </div>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Safety" title="Labels that should leave this list entirely">
            <p>
              Chest pain, trouble breathing, a sudden severe headache, a head
              injury with vomiting or confusion, fever with spinal pain,
              progressive weakness, groin numbness, and a change in bowel or
              bladder control are not chiropractic conditions to browse. Use
              emergency care. Cancer treatment, infection, and a psychiatric
              crisis are not conditions we treat in this office.
            </p>
            <p>
              Maintenance visits are sometimes useful once a mechanical
              problem is understood. They are not a shield against those red
              flags, and they are not sold here as immune boosting or as
              injury prevention you can count on. If you want a visit after
              the acute problem has settled, say that when you{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                book
              </Link>
              . Existing patients use the other form.
            </p>
            <p>
              Once a condition is real and safe to treat, the tools are{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">adjustments</Link>,{" "}
              <Link href="/cold-laser-therapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">cold laser</Link>,{" "}
              <Link href="/therapeutic-exercise" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">exercise</Link>,{" "}
              and{" "}
              <Link href="/custom-foot-orthotics" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">orthotics</Link>.
              Each of those is chosen after the exam, not from a list.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="If you are between labels" title="Describe the body part and what it does">
              <p>
                “It burns down the left leg when I sit” is more useful than
                the word sciatica. “I cannot turn my head after a rear-end
                crash” is a personal injury even if neck care would also
                exists. Bring imaging you have. Do not wait to learn the
                vocabulary. Call {siteConfig.phone} if the form feels like
                the wrong door.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Conditions"
              title="Not sure which problem?"
              body="Book the exam and describe the symptom. We will sort the label."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">How to describe the problem when you call</h2>
          <p>
            Lead with place and behavior. “Left calf buzzes after twenty
            minutes of sitting, and the foot feels weak on stairs” is a
            back-pain problem until proven otherwise. “I cannot check a blind
            spot since Tuesday, no crash, no arm symptoms” is a neck-pain
            problem. “Rear-ended on the way to work, neck stiff the next
            day” is a personal injury even if the stiffness feels like an
            ordinary neck problem.
          </p>
          <p>
            Mention what you have already tried only if it changed something.
            A week of a store-brand insert that did nothing is useful. A list
            of every video you watched is not. Bring the imaging report if a
            sentence on it scared you. The sentence is not the diagnosis
            until it matches the limb.
          </p>
          <p>
            If you have two problems, say both, and say which one limits the
            day. You do not need the correct medical name before you are
            examined. Your appointment can cover more than one finding. It
            should not cover a medical emergency that you hoped would fit a
            chiropractic label.
          </p>
          <p>
            We do not claim that spinal care treats allergies or the immune
            system. If that is what you were hoping to hear, you will not
            find that promise here. You will find an explanation that matches
            the pain, and a referral when the pain is not ours to treat.
          </p>
          <p>
            Hand pain, jaw tightness, and rib pain sometimes get asked about
            in the same breath as the spine. A hand that is numb may still be
            a neck finding. Jaw pain and rib pain are worth mentioning even
            though they are not the main focus of care here. If they are
            outside what an exam can responsibly handle, you will be told
            before a plan is written, including when the next step is another
            clinician.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-conditions"
        eyebrow="Questions"
        title="Questions about these conditions"
        intro="How we sort common problems, and which claims we do not make."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Services under the labels"
        title="Once you know the problem, these are the tools"
        intro="Condition first, then the service. Not the other way around."
        links={[
          { href: "/services", label: "All services", note: "Adjustments, laser, exercise, orthotics, and the other care we provide." },
          { href: "/neck-pain", label: "Neck pain", note: "Stiffness, arm symptoms, and headaches that start in the neck." },
          { href: "/back-pain-treatments", label: "Back pain and sciatica", note: "Leg pain and local lumbar pain." },
          { href: "/degenerative-disc-disease", label: "Herniated discs", note: "Scan language, matched to the exam." },
          { href: "/personal-injury", label: "Whiplash", note: "Crashes, not desk necks." },
          { href: "/injuries", label: "Sports and work injuries", note: "Strains that were not a car crash." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
