import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const robbinsdale: PseoHub = {
  slug: "robbinsdale",
  heroSubtitle:
    "Robbinsdale is a straight run down Highway 100 to Saint Louis Park. The drive to Suite 201 is about seven miles, with no turns until the Excelsior Boulevard exit.",
  keyFacts: [
    { label: "Drive from Robbinsdale", value: "Close to 7 miles" },
    { label: "Robbinsdale population", value: "14,646 (2020 census)", sourceId: "robbinsdale" },
    { label: "City area", value: "2.98 square miles", sourceId: "robbinsdale" },
    { label: "Main routes", value: "Highway 100, County Road 81", sourceId: "robbinsdale" },
  ],
  intro: {
    eyebrow: "Robbinsdale",
    title: "One highway, almost door to door",
    paragraphs: [
      "Highway 100 runs right through Robbinsdale, and it serves Golden Valley and Saint Louis Park on its way south[^hwy-100]. That makes the trip to our office at 6200 Excelsior Blvd, Suite 201 unusually simple for a city that is seven miles away: get on 100, stay on it through Golden Valley, and get off at Excelsior Boulevard.",
      "Robbinsdale is small, under three square miles, with a little more than 14,600 residents[^robbinsdale]. Its neighborhoods wrap around Crystal Lake and the Twin Lakes. Many of the people we see from here want gentle care that helps them keep doing ordinary things: getting in and out of the car, climbing stairs, and keeping up with grandchildren.",
      "We take that goal seriously. Gentle does not mean vague. We still examine carefully, explain what we find, and agree on how we will know whether the plan is working.",
    ],
  },
  atAGlance: {
    title: "Robbinsdale snapshot",
    items: [
      { label: "Lakes", value: "Crystal Lake and the Twin Lakes", sourceId: "robbinsdale" },
      { label: "Whiz Bang", value: "Fawcett Publications began here in 1919 with Captain Billy's Whiz Bang", sourceId: "robbinsdale" },
      { label: "Lilac Way", value: "Highway 100 earned its nickname from lilac plantings", sourceId: "hwy-100" },
    ],
  },
  localFacts: {
    title: "A little Robbinsdale history",
    cards: [
      {
        title: "A magazine with a famous name",
        body: "Fawcett Publications was founded in Robbinsdale in 1919 with a magazine called Captain Billy's Whiz Bang. Its first cover line was \"Build your own airplane!\"",
        sourceId: "robbinsdale",
      },
      {
        title: "A mansion on Lower Twin Lake",
        body: "Developer Andrew Bonney Robbins, whose Robbinsdale Park subdivision gave the city its name, built a 16-room Queen Anne-style house on Lower Twin Lake in 1890. The lakes remain the city's centerpiece and a good place for an easy walk.",
        sourceId: "robbinsdale",
      },
      {
        title: "Highway 100's long history",
        body: "The highway dates to 1935 and the New Deal. A section between Edina and Robbinsdale was built to complete the beltway, which is why the drive from here to Saint Louis Park is so direct today.",
        sourceId: "hwy-100",
      },
    ],
  },
  diagram: {
    title: "Robbinsdale to Suite 201",
    caption: "A schematic we drew ourselves. Once you are on Highway 100 there is really only one exit to remember.",
    stops: [
      { label: "Robbinsdale", note: "Near County Road 81" },
      { label: "Highway 100 through Golden Valley" },
      { label: "Excelsior Boulevard exit" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 7 },
    ],
    legs: ["Onto Hwy 100 southbound", "Past Golden Valley", "Off at Excelsior Blvd"],
  },
  sections: [
    {
      eyebrow: "Gentle options",
      title: "Care for people who do not want to be cracked",
      paragraphs: [
        "A common worry we hear from older Robbinsdale patients is about force. Some people have had a rough adjustment years ago and do not want to repeat it. That is fine. Dr. Levitt uses Torque Release, which delivers a light, precise impulse with a small instrument, and Zone Therapy, which uses slower, lighter contact. He reserves firmer techniques for people who are comfortable with them and whose exam suggests they are appropriate.",
        "Research on manipulation includes a reminder that side effects, mostly short-lived soreness, do happen and should be discussed[^rubinstein-2019]. We talk about that before we start, and we check in with you at every visit.",
        "Gentle care pairs well with a little regular movement. For many people that means a daily walk around one of the lakes and a short routine at home, like sit-to-stand practice from a sturdy chair. We demonstrate everything in the room.",
      ],
    },
    {
      eyebrow: "Safety first",
      title: "What we screen for before treating",
      paragraphs: [
        "Before any hands-on care, the exam looks for reasons not to treat: weight dropping for no reason, a past cancer diagnosis, signs of a fracture after a fall, or nerve changes that need imaging or a medical referral. Older adults are more likely to have osteoporosis, so we ask about bone density and any past fractures.",
        "If something in the exam points somewhere else, we say so plainly and help you get to the right provider. That is part of the job.",
      ],
    },
    {
      eyebrow: "A village with a short, specific origin story",
      title: "Parker's Station, a streetcar line, and a hospital that started with 70 beds",
      paragraphs: [
        "The community first grew around a railroad flag station near Alfred Parker's farm and was known as Parker's Station. After Minneapolis tried to annex neighboring townships in 1887, local farmers incorporated the Village of Crystal, and later, on April 19, 1893, the 2.9-square-mile village of Robbinsdale was organized[^robbinsdale]. Andrew Bonney Robbins, who platted Robbinsdale Park, could not persuade the Minneapolis Street Railway Company to extend a line, so in 1891 he organized the North Side Street Railway Company and built his own, first with horse cars and then with electricity.",
        "In 1940, Samuel Samuelson built Victory Hospital in Robbinsdale: a three-story, marble-faced building with five operating rooms and 70 beds. In 1954 it was reorganized as a nonprofit and renamed North Memorial, and it grew from there into a large medical center[^robbinsdale]. We mention that history because a lot of Robbinsdale households already have a relationship with that campus, and because it is part of why this small city feels older and more settled than its square mileage suggests. The annual Whiz Bang Days festival still nods to the Fawcett magazine that began here in 1919. If you are coming in around festival weekend, tell us, so we can pick an hour that is not competing with it.",
      ],
    },
  ],
  process: {
    title: "Your first visit from Robbinsdale",
    steps: [
      { title: "Call and ask questions", body: "If you are unsure whether this is right for you, call 952-920-7535 first. We are happy to talk it through." },
      { title: "Bring your medication list", body: "Along with ID and any imaging, a list of medications and past fractures helps us choose safe techniques." },
      { title: "A careful exam", body: "Motion, strength, balance and sensation, with extra attention to anything that would make treatment unsafe." },
      { title: "Gentle start, clear goals", body: "We agree on a specific goal, such as stairs or getting into the car more easily, and check progress against it." },
    ],
  },
  comparison: {
    title: "Chiropractor, urgent care or emergency?",
    intro: "A quick guide for deciding where to go first.",
    columns: ["Situation", "Best first stop"],
    rows: [
      ["Stiff, achy back or neck that came on gradually", "A chiropractic exam is reasonable"],
      ["Back pain after a fall, especially with osteoporosis", "Urgent care or your physician first, to rule out a fracture"],
      ["Leg weakness, numbness in the groin area, or bladder changes", "Emergency department, right away"],
      ["Back pain together with a fever or general sick feeling", "Your physician or urgent care"],
    ],
  },
  whoFor: {
    title: "Who we see from Robbinsdale",
    fitsTitle: "Often a good fit",
    notFitsTitle: "Get checked elsewhere first",
    fits: [
      "Seniors who want a light touch",
      "Stiffness that makes getting in and out of a car hard",
      "Ongoing low back or neck aches that come and go",
      "Folks who would rather not start with pills",
    ],
    notFits: [
      "A recent fall with new, sharp back pain",
      "Sudden weakness or numbness",
      "Feverish, shivery, or losing weight without trying",
    ],
  },
  provider: {
    title: "Experienced, and unhurried",
    body: "Dr. Alan Levitt opened his practice in 1987; the Excelsior suite has been his base for over twenty-five years. Robbinsdale patients appreciate that he takes time to explain each technique before using it.",
  },
  faqs: {
    title: "Robbinsdale questions",
    items: [
      { q: "What is the drive like from Robbinsdale?", a: "Highway 100 nearly all the way: on near County Road 81, through Golden Valley, off at Excelsior. Roughly seven miles to 6200 Excelsior Blvd, Suite 201, Saint Louis Park." },
      { q: "Is chiropractic safe if I have osteoporosis?", a: "It depends on the details. Tell us about it; we use gentle, low-force techniques and may ask your physician for more information first." },
      { q: "Can I ask for no cracking?", a: "Yes. Instrument-based and low-force options are available, and you can change your mind at any point." },
      { q: "Is the office accessible?", a: "Please call 952-920-7535 before your visit to talk through access to the second-floor suite and any help you may need." },
      { q: "When was Robbinsdale organized as its own village?", a: "On April 19, 1893, after a period as Parker's Station and a brief stretch inside the Village of Crystal. The new village covered about 2.9 square miles, close to the 2.98 square miles the city occupies today." },
    ],
  },
  related: {
    title: "Related pages for Robbinsdale",
    links: [
      { href: "/areas-we-serve/robbinsdale/adjustments-and-manipulation", label: "Adjustments for Robbinsdale", note: "Including gentle options" },
      { href: "/areas-we-serve/robbinsdale/common-chiropractic-conditions", label: "Common conditions", note: "What we see most" },
      { href: "/areas-we-serve/golden-valley", label: "Golden Valley", note: "On the way down Highway 100" },
      { href: "/areas-we-serve/saint-louis-park", label: "Saint Louis Park", note: "The city where the office sits" },
      { href: "/new-patient-center/what-to-expect", label: "What to expect", note: "Your first visit" },
      { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "His background" },
    ],
  },
  sources: [SRC.robbinsdale, SRC.hwy100, SRC.rubinstein],
  cta: {
    title: "Book from Robbinsdale",
    body: "Call with any questions first, or request a visit online. We will make sure the first appointment feels comfortable.",
  },
};
