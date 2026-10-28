"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/siteConfig";
import { CtaCard } from "@/components/services/CtaCard";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FaqBlock, RelatedCare, SectionIntro } from "@/components/services/enrichment";

const kinds = [
  { title: "Endurance", body: "Repeating a tolerable movement long enough that the neck or back can last a workday. This is stamina of the part that failed, not a running program you did not ask for." },
  { title: "Resistance", body: "Load, progressed slowly, so the muscles that should have protected the joint actually can. Body weight is enough for most of what we send home. A gym is not required." },
  { title: "Flexibility", body: "Range you lost to guarding. The stretch is specific. A generic hamstring poster is not automatically your exercise, and forcing a painful direction is not flexibility." },
];

const aims = [
  "More usable motion",
  "Less unnecessary tension in muscle and the tissue around it",
  "Joints that move instead of hitching",
  "Circulation during the movement, not as a slogan",
  "Balance and coordination when those were part of the injury",
  "Less rigidity in a back or neck that has been braced for weeks",
];

const faqs = [
  {
    q: "Do I need a gym membership?",
    a: "No. Most of what Dr. Levitt prescribes can be done at home with little or no equipment. If a movement needs a band or a light weight, that is said out loud. A membership is not the treatment.",
  },
  {
    q: "How often are the exercises done?",
    a: "Often several days a week, matched to the week you have, not to an ideal athlete’s calendar. A short session you complete beats a long sheet you avoid. We change the dose if soreness is replacing the movement.",
  },
  {
    q: "Will exercise replace the adjustment?",
    a: "Not when a joint is stuck and needs a contact. Exercise is how the gain survives until the next visit, and sometimes how you need fewer visits. The adjustment is the contact. The homework is what you repeat at home.",
  },
  {
    q: "What if the exercise increases pain?",
    a: "Stop that one and tell the office. Muscle effort can feel unfamiliar. Sharp pain, pain that travels farther down an arm or leg, or new weakness is not effort. Do not push through a nerve symptom.",
  },
  {
    q: "Is this physical therapy?",
    a: "It is therapeutic exercise prescribed inside this chiropractic office: endurance, resistance, and flexibility aimed at the problem we found. It is not a physical therapy clinic, and it is not a post-surgical protocol unless the surgeon has cleared you to move.",
  },
];

export default function TherapeuticExerciseContent() {
  return (
    <>
      <ServiceHero
        title="Therapeutic Exercise"
        subtitle="A few specific movements for endurance, strength, or flexibility. Built for the problem we found, and for a week you will actually do."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Therapeutic Exercise" },
        ]}
      />

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="Homework" title="Exercise here is a prescription, not a personality">
            <p>
              The pain that eases on the table and returns on Thursday is
              often a strength and habit problem sitting next to the joint.
              Therapeutic exercise is how this office asks those muscles to
              work. It is not a boot camp, and it is not a stack of pages.
              The office’s own line is endurance, resistance, and flexibility,
              chosen for you.
            </p>
            <p>
              Dr. Levitt practices at {siteConfig.address.full}, phone{" "}
              {siteConfig.phone}, since 1999 at this address and since 1987
              in practice. He will not hand you another person’s packet. If
              you already have exercises from a physical therapist or a
              surgeon, bring them. We do not casually overwrite a post-surgical
              restriction.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionIntro dark center eyebrow="Three kinds" title="Endurance, resistance, flexibility">
            <p>Most plans use one or two of these, not a sampler of all three on day one.</p>
          </SectionIntro>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {kinds.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-[#F97316] bg-[#1E3A5F]/60 p-6">
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="What the movements are for" title="Aims already listed by the office">
            <ul className="grid gap-2 sm:grid-cols-2">
              {aims.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">{item}</li>
              ))}
            </ul>
            <p>
              Breathing and coordination are on that list because some people
              brace so hard they stop moving well. We are not running a
              breathing seminar. If balance is unsafe, the exercise is paused.
              Dizziness, a truly unstable inflammatory flare, and the period
              after some surgeries are reasons to wait. The wait is a medical
              decision, not a motivational one.
            </p>
            <p>
              Neck exercises are not low-back exercises. A disc that prefers
              one direction does not get the opposite stretch because it was
              on a poster. The{" "}
              <Link href="/degenerative-disc-disease" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">disc care</Link>{" "}
              says that directly. Neck ownership is{" "}
              <Link href="/neck-pain" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">neck pain</Link>.
              Low-back ownership is{" "}
              <Link href="/back-pain-treatments" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">back pain</Link>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionIntro eyebrow="How a program is built" title="Shown in the room, then cut down until it fits">
            <p>
              You do the movement once with feedback. If the form falls apart,
              the exercise is too ambitious and it gets simpler. You leave
              with a number of repetitions you can remember. Writing “3 sets
              of 15” for twelve moves is how sheets die in the car. We would
              rather you own two.
            </p>
            <p>
              Soreness the next day can be ordinary effort. Pain that changes
              where it travels is not. Ice after a session is optional and
              is optional, as with an{" "}
              <Link href="/ice-pack-cryotherapy" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">ice pack</Link>
              , for flares, not as a required chaser. An adjustment can
              still be the visit when the joint, not the muscle, is the limit.
              See{" "}
              <Link href="/adjustments-and-manipulation" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">adjustments</Link>.
            </p>
            <p>
              There is no class schedule and no fee chart here. Call{" "}
              {siteConfig.phone} or use the{" "}
              <Link href="/contact/new-patient-appointment" className="font-semibold text-[#F97316] underline-offset-4 hover:underline">
                new-patient appointment
              </Link>
              . Wear clothes you can move in. The address is {siteConfig.address.full}.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionIntro dark eyebrow="Progress" title="The exercise worked if the week got easier">
              <p>
                We recheck the same task: longer sitting, an easier lift, a
                turn of the head that no longer pinches. A perfect workout
                log with the same pain is not progress. If the movements are
                honest and the pain is not changing, the plan changes. That
                can mean a different exercise, a different service, or a
                different clinician. It does not mean “try harder.”
              </p>
            </SectionIntro>
          </div>
          <div className="lg:col-span-2">
            <CtaCard
              eyebrow="Exercise"
              title="Get a short list, not a packet"
              body="We match endurance, strength, or mobility to the exam."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A]">Examples of a short list, not a program to copy</h2>
          <p>
            A neck that stiffens at a laptop might get two drills: a slow turn
            each direction that stays short of arm pain, and a shoulder-blade
            squeeze you can do in a chair. Those are illustrations of size,
            not a prescription you should start from this paragraph. Your list
            is written after the neck exam.
          </p>
          <p>
            A low back that hates long sitting might get a short walk on the
            hour and a hip hinge practiced with a broomstick so the spine does
            not round under a box. Again, an illustration. If sitting is fine
            and lifting is the trigger, the list flips. Sciatica that worsens
            with one of those moves gets that move deleted the same day.
          </p>
          <p>
            An ankle sprain, once a clinician has said it is not a fracture,
            might later get balance on one foot beside a counter. Early on,
            the homework may only be protected range, not balance. Injury
            care sets that timing. The homework still has to match the stage.
          </p>
          <p>
            People ask for “core” work. If the abdomen is bracing so hard the
            back cannot move, more bracing is the wrong hobby. If the back
            collapses the moment you pick up a bag, some endurance in the
            trunk may be the missing piece. The word core is not specific
            enough to be the plan.
          </p>
          <p>
            Write the list where you will see it. A note on the phone beats a
            PDF. Recheck in the office by doing the move, not by saying you
            did it.             If two weeks of honest practice leave the same limitation,
            we change the move or we stop calling exercise the answer.
          </p>
          <p>
            Travel weeks, night shifts, and childcare change the dose. Say
            which week you are actually in. A plan that assumes a quiet
            morning on the floor will be skipped, and then both of us will
            pretend it failed. Five minutes beside the counter can be the
            honest version. Holding your breath and racing the reps is not
            endurance. It is rushing. Slow enough to keep the form is the
            point of a short list. If you need a video to remember, we can
            describe the move in words you can film yourself doing once in
            the room, for you, not for the internet.
          </p>
          <p>
            Stop entirely if you are ill, if a surgeon has not cleared a
            recent operation, or if the pain has changed sides or started
            traveling. Restart only after someone looks again. Consistency
            is useful. Consistency through a new nerve symptom is not
            discipline. It is the wrong assignment. If you miss several days,
            resume at the easier dose rather than doubling up to catch up.
            Catching up is how a tolerable move becomes a flare. Tell us what
            you actually did. The retest is more honest when that report is.
          </p>
        </div>
      </section>

      <FaqBlock
        id="ld-faq-exercise"
        eyebrow="Questions"
        title="Questions about the home exercises"
        intro="Equipment, pain rules, and what this is not."
        faqs={faqs}
      />

      <RelatedCare
        eyebrow="Often combined"
        title="Exercise rarely stands alone"
        intro="These are the visits that create the homework."
        links={[
          { href: "/adjustments-and-manipulation", label: "Adjustments", note: "When the joint, not the muscle, is the limit." },
          { href: "/back-pain-treatments", label: "Back pain", note: "The most common reason a short home list exists." },
          { href: "/neck-pain", label: "Neck pain", note: "Desk stiffness needs different moves than a lumbar strain." },
          { href: "/injuries", label: "Injuries", note: "After a sprain, once it is safe to load." },
          { href: "/functional-medicine", label: "Habits around the exercise", note: "Sleep and the week, when the movements are not the whole story." },
          { href: "/contact/new-patient-appointment", label: "Book", note: "New patients start with an exam." },
        ]}
      />
      <LocationStrip />
    </>
  );
}
