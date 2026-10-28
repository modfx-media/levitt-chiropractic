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
  { href: "/personal-injury", label: "Whiplash and crashes", note: "Auto accidents and other sudden-force injuries. Do not start that story on this hub." },
];

const shorter = [
  { title: "Headaches", body: "A headache that begins where the neck meets the skull can be mechanical, and the neck page is where that exam lives. Noise, fatigue, and stress can aggravate headaches without causing them. A sudden severe headache, a headache after a head strike, or a headache with confusion is an emergency. We do not quote a percentage of headaches that “come from the neck.”" },
  { title: "Pinched nerve", body: "The phrase means a nerve is irritated or compressed. In the neck that can show up in the arm. In the low back it can show up as sciatica. The hub does not treat the phrase. The neck page and the back page do the sorting. Weakness that is increasing is not a pinched-nerve wait." },
  { title: "Joint and sacroiliac pain", body: "A stiff joint can hurt locally and can make the next joint work too hard. Sacroiliac pain, where the spine meets the pelvis, often imitates sciatica or a disc. It is tested in the back-pain exam, not diagnosed from a list. The adjustment, if one is used, is aimed at the joint the exam found." },
  { title: "Carpal tunnel and repetitive hand pain", body: "The site notes numbness, weakness, or burning with repetitive hand use, and that the nerves travel through the arm into the neck. Wrist pain still needs a screen for fracture and for a problem that belongs to a hand surgeon. An adjustment is not a carpal-tunnel cure. Laser is sometimes discussed for the soft tissue. The laser page has that limit in writing." },
  { title: "Osteoarthritis", body: "Worn cartilage in a knee, hip, spine, or hand can hurt and can change how you move. Chiropractic care here can look at the motion you still have and at the compensation. It does not regrow cartilage. A hot, swollen joint with fever is medical, not a mobilization visit." },
  { title: "Fibromyalgia", body: "Widespread pain without a single known cause, sometimes with poor sleep. The office does not offer a cure. A visit can look for mechanical contributors and for sleep and load problems. It should not be marketed as the treatment of the syndrome. Functional questions, if they help, are on that page." },
];

const faqs = [
  {
    q: "Is this the page that treats every condition?",
    a: "No. It is the map. Neck pain, back pain and sciatica, disc problems, and crash injuries each have an owner page. This hub tells you which door to use and keeps shorter notes for problems that do not have their own URL.",
  },
  {
    q: "Do you still list allergies and similar conditions?",
    a: "Older copy on this URL talked about allergies, immune function, and a wide set of medical problems. We are not repeating those claims. Allergy emergencies and medical diseases belong with a physician. If you also have a mechanical spine problem, that part can be examined on its own.",
  },
  {
    q: "Where do headaches go?",
    a: "If they start in the neck, start on the neck pain page. If they started with a crash, start on personal injury. If the headache is sudden and severe, or follows a head injury, use emergency care and do not wait for a chiropractic slot.",
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
        subtitle="A map of problems, not a second copy of every service page. Neck, back, discs, and crashes each have an owner."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Conditions" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="How to use this page" title="Pick the owner page before you read a definition">
            <p>
              This URL used to hold a long accordion that repeated neck, back,
              disc, sciatica, and whiplash in one place. Those topics are now
              written where they can be specific. Use the four links below
              first. The shorter notes further down are for problems that
              still do not have a standalone page.
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
          <SectionIntro dark center eyebrow="Owner pages" title="Start here if your problem has a name">
            <p>One owner each. City copies of these topics are not what this hub is for.</p>
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
          <SectionIntro eyebrow="Still on this hub" title="Problems without their own URL">
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
              crisis are not entries we kept from the old accordion.
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
              Tools, once a condition is real and safe to treat, are the
              service pages:{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">adjustments</Link>,{" "}
              <Link href="/cold-laser-therapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">cold laser</Link>,{" "}
              <Link href="/therapeutic-exercise" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">exercise</Link>,{" "}
              <Link href="/custom-foot-orthotics" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">orthotics</Link>.
              The hub does not re-explain each tool.
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
                crash” belongs on personal injury even if the neck page also
                exists. Bring imaging you have. Do not wait to learn the
                vocabulary. Call {siteConfig.phone} if the form feels like
                the wrong door.
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Conditions"
              title="Not sure which page?"
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
            back-page problem until proven otherwise. “I cannot check a blind
            spot since Tuesday, no crash, no arm symptoms” is a neck-page
            problem. “Rear-ended on the way to work, neck stiff the next
            day” is personal injury even if the neck page would recognize
            the stiffness.
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
            day. We will not make you pick a URL before you are allowed to
            be examined. The URLs exist so the writing stays specific. Your
            appointment can cover more than one finding. It should not cover
            a medical emergency that you hoped would fit a chiropractic
            heading.
          </p>
          <p>
            The old accordion on this page tried to be every condition at
            once, including claims about allergies and immunity we are not
            willing to repeat. If you came looking for that version, you will
            not find a promise that spinal care treats the immune system.
            You will find a route to the page that matches the pain, and a
            refusal when the pain is not ours to treat.
          </p>
          <p>
            Hand pain, jaw tightness, and rib pain sometimes get asked about
            in the same breath as the spine. A hand that is numb may still be
            a neck finding, which is why the neck page exists. Jaw pain and
            rib pain are not given their own URLs because we do not want a
            thin page for each noun. Mention them. If they are outside what
            an exam here can responsibly handle, you will be told before a
            plan is written. The hub’s job is routing, including the route
            out of the office.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-conditions"
        eyebrow="Questions"
        title="Questions about this conditions hub"
        intro="How the pages are split, and which old claims we are not carrying forward."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Services under the labels"
        title="Once you know the problem, these are the tools"
        intro="Condition first, then the service. Not the other way around."
        links={[
          { href: "/services", label: "All services", note: "The index of what the office actually offers." },
          { href: "/neck-pain", label: "Neck pain", note: "The new core page. There is no city version." },
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
