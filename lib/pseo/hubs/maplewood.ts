import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const maplewood: PseoHub = {
  slug: "maplewood",
  heroSubtitle:
    "Maplewood is about thirteen miles from Suite 201. Most drivers take I-94 or Highway 36 west, then leave the freeway on 394 at Excelsior Boulevard, or on Highway 100 just before that.",
  keyFacts: [
    { label: "From Maplewood", value: "About 13 miles" },
    { label: "Residents, 2020", value: "42,088", sourceId: "maplewood" },
    { label: "An L-shaped map", value: "17.99 square miles", sourceId: "maplewood" },
    { label: "Freeways and highways", value: "I-94, I-694, I-35E, Highway 36, Highway 61", sourceId: "maplewood" },
  ],
  intro: {
    eyebrow: "Maplewood",
    title: "An L-shaped city with a 13-mile trip to plan around",
    paragraphs: [
      "Maplewood is about thirteen miles from 6200 Excelsior Blvd, Suite 201, Saint Louis Park. The usual combination is I-94 or Highway 36, then a finish on 394 at the Excelsior Boulevard exit, or a turn onto Highway 100 shortly before. The city itself is an awkward shape to cross: it extends 5.9 miles across and 10 miles north to south, with a 7.5-mile-long, nearly one-mile-wide southern leg[^maplewood]. That “L” is why two Maplewood addresses can have noticeably different drives even when they share a city name.",
      "The 2020 census counted 42,088 people. Maplewood covers 17.99 square miles, 16.98 of them land[^maplewood]. It incorporated in 1957, by a vote of five to one, after rumors that Saint Paul would annex the area. 3M had completed the first buildings of its central research laboratory here in 1955, and incorporation let the company stay on a village tax base rather than Saint Paul's[^maplewood].",
      "A lot of the people we see from Maplewood work at that campus, or in a job that still orbits it. Long lab or office days show up in the neck and upper back. The opening exam is where we separate those patterns, along with the practical question of when a 13-mile freeway trip is actually worth making from Maplewood. The older town site of Gladstone was platted here in 1887, boomed in the 1890s, and then faded, which is easy to overlook if you only think of the 3M-era city[^maplewood]. It is one more reason we treat Maplewood as a place with a specific history, not as a generic Ramsey County label.",
    ],
  },
  atAGlance: {
    title: "Maplewood background",
    items: [
      { label: "Incorporated", value: "1957, after 3M's research laboratory opened in 1955", sourceId: "maplewood" },
      { label: "The shape", value: "An “L” created as Saint Paul annexed land around the area", sourceId: "maplewood" },
      { label: "Largest employer", value: "3M, with 12,000 employees in the city's 2020 financial report", sourceId: "maplewood" },
      { label: "The name", value: "Unclear in origin; a local historical-society director has noted that the area was largely prairie and oak savanna", sourceId: "maplewood" },
    ],
  },
  localFacts: {
    title: "Maplewood details that belong on a care page",
    cards: [
      {
        title: "A stagecoach line, then a railroad, then a research campus",
        body: "A stagecoach between Saint Paul and Duluth stopped in the area from 1856 to 1870, ending when the Lake Superior and Mississippi Railroad was completed. The town site of Gladstone was platted in 1887, boomed in the 1890s, and then faded. The modern city story really starts with the 3M laboratory in 1955 and incorporation two years later.",
        sourceId: "maplewood",
      },
      {
        title: "Twelve thousand jobs in one report",
        body: "The city's 2020 comprehensive annual financial report listed 3M as the largest employer, with 12,000 employees, ahead of Independent School District 622 and St. John's Hospital. If that campus is your workweek, tell us about benches, screens and shift length. The exam will follow the work, not a generic outline.",
        sourceId: "maplewood",
      },
      {
        title: "A name that does not describe the original landscape",
        body: "When the area was organized it was largely prairie and oak savanna. “There are no maple trees in Maplewood,” the director of the local historical society has said, and the origin of the name is unclear. We would rather be accurate about that than invent a forest that was not there.",
        sourceId: "maplewood",
      },
      {
        title: "A hockey weekend that packed Aldrich Arena",
        body: "In 1993, the NCAA Division III men's ice hockey tournament was held at Maplewood's Aldrich Arena and drew just under 14,000 fans[^maplewood]. It is a small reminder that this city has packed rooms and long standing days that have nothing to do with a lab bench. If a tournament weekend, a long night in the stands, or a day on your feet at a local event is part of what flared, say so. We would rather start from that weekend than from a generic “Ramsey County” label.",
        sourceId: "maplewood",
      },
    ],
  },
  diagram: {
    title: "Maplewood to Suite 201",
    caption: "From the long southern leg of the city, I-94 is usually the more direct start. From the Highway 36 side, 36 to 35W or 280 may be smoother. Tell us which leg of the “L” you are leaving from.",
    stops: [
      { label: "Maplewood", note: "Tell us which leg of the city" },
      { label: "I-94 or Highway 36", note: "Toward Minneapolis" },
      { label: "I-394 or Highway 100" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 13 },
    ],
    legs: ["94 or 36 toward the core", "394 or 100", "Excelsior exit"],
  },
  sections: [
    {
      eyebrow: "Campus weeks",
      title: "When 3M is the reason the neck is tight",
      paragraphs: [
        "3M is a Maplewood company in a very literal sense: the conglomerate is based here, in a Saint Paul suburb, and produces tens of thousands of products, from adhesives to Post-it notes. For the purposes of this page, the useful fact is local: thousands of people spend their week on that campus, and a stiff neck or a tired upper back after those days is an ordinary reason to book an exam.",
        "Neck pain is common in people who spend long hours over a lab bench or a computer, and it can cost a lot of work time. That is background, not a diagnosis. We still need to see how you move, and we will say so if the exam points to a medical visit first.",
      ],
    },
    {
      eyebrow: "The shape of the city",
      title: "Why the “L” changes the appointment time",
      paragraphs: [
        "Saint Paul's annexations are the reason Maplewood has its unusual outline[^maplewood]. The southern leg is long and narrow, and it does not behave like the Highway 36 side of town. If you guess at a 13-mile average and pick a late-afternoon slot, you can spend more of the visit in traffic than in the exam room. A mid-morning slot is usually kinder than a late-afternoon one.",
        "For walking-mechanics questions after long campus days, our {custom foot orthotics|/areas-we-serve/maplewood/custom-foot-orthotics} page is a useful place to start. If targeted cold is more relevant, see {ice-pack cryotherapy|/areas-we-serve/maplewood/ice-pack-cryotherapy}.",
      ],
    },
    {
      eyebrow: "Neighbors",
      title: "Saint Paul and North Saint Paul",
      paragraphs: [
        "{Saint Paul|/areas-we-serve/saint-paul} and {North Saint Paul|/areas-we-serve/north-saint-paul} are the live neighbors we will name here. If your daily life already crosses into Saint Paul, we can often place the visit next to an errand you are already making into town.",
        "Saturday appointments are by request. Call 952-920-7535 if a weekday freeway run is the main obstacle.",
      ],
    },
  ],
  process: {
    title: "A Maplewood first visit, start to finish",
    steps: [
      { title: "Tell us whether you are coming from the 3M campus or from a residential street", body: "Those two starting points do not hit I-94 or Highway 36 the same way. Mid-morning is usually the smoother 13-mile run." },
      { title: "Bring the file you already have, not a perfect one", body: "An ID gets you started. If a lab or clinic already sent you a film or a written report, slip it in the same folder so we are not starting from a blank page." },
      { title: "Hear a clear opinion before you book another freeway trip", body: "After the exam, you will know if continuing in this clinic is a reasonable next step, or if we think you should begin somewhere else." },
      { title: "Go back up the freeway with homework that fits a campus week", body: "A short list of movements you can still do after a lab or office day. The next 13-mile trip is to check those movements with you here, not as a routine stop." },
    ],
  },
  comparison: {
    title: "Campus day, commute and the rest of the week",
    columns: ["The shape of the week", "What usually bothers people", "What we usually examine first"],
    rows: [
      ["A 3M lab or office week", "A 3M lab or office week that has the neck and upper back stiff over a lab bench or a monitor", "The setup, real breaks, and upper-back motion you can do at the desk"],
      ["A long standing shift", "A standing shift that leaves the feet heavy and the hips spent by evening", "Shoes, standing pauses, and simple hip and foot strength"],
      ["The 13-mile freeway run", "A stiff back after sitting on I-94 or Highway 36", "A mid-morning time, and a minute of walking before you come in"],
    ],
  },
  whoFor: {
    title: "Maplewood weeks this clinic is set up for",
    fitsTitle: "Make the 13-mile trip if",
    notFitsTitle: "Skip the I-94 or Highway 36 run for this",
    fits: [
      "A 3M lab or office week that has the neck and upper back stiff by evening",
      "A long standing shift that leaves the feet heavy and the hips spent",
      "A stiff back after the freeway run itself, when the rest of the week is already long",
      "A 3M campus week you can support with work at home, because several 13-mile trips each month should have a reason",
    ],
    notFits: [
      "A limb that suddenly stops working the way it should is an ER visit, not a 13-mile planned stop",
      "Tightness through the chest, or breath that comes only with effort, needs emergency medical care",
      "When a sore back arrives with a fever, or you feel ill on top of the stiffness, start at a medical clinic, not this office",
    ],
  },
  provider: {
    title: "The doctor Maplewood patients see",
    body: "When you come from Maplewood, Dr. Alan Levitt is the clinician who does the exam. His chiropractic degree was completed in 1986 at Northwestern. He opened the clinic in 1987 and has kept this suite as the office address since 1999.",
  },
  faqs: {
    title: "Maplewood questions",
    items: [
      { q: "What does the drive from Maplewood look like?", a: "Plan on about thirteen miles, arriving at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. A common combination is I-94 or Highway 36 into Minneapolis, then a finish on 394 — taking the Excelsior Boulevard exit — or a turn onto Highway 100 before the last few blocks." },
      { q: "Does Maplewood still fall inside the 15-mile area?", a: "It does. Thirteen miles keeps Maplewood inside the line. We still plan the visit so the freeway time is doing some work, not just filling a calendar." },
      { q: "Can follow-up visits be less frequent because of the distance?", a: "That is usually how a 13-mile plan is built. You practice a couple of movements after a campus day, and the next freeway trip is only if checking those movements here would actually change them, or change how widely we space the next ones." },
      { q: "Do you treat 3M employees who commute from another city?", a: "Yes. Tell us both the campus and the home city so the slot matches the commute you will actually drive. If a weekday is impossible, call 952-920-7535 and ask whether a Saturday remains." },
    ],
  },
  related: {
    title: "Maplewood pages, plus Saint Paul and North Saint Paul",
    links: [
      { href: "/areas-we-serve/maplewood/custom-foot-orthotics", label: "Custom foot orthotics", note: "When campus days show up in the feet" },
      { href: "/areas-we-serve/maplewood/ice-pack-cryotherapy", label: "Ice-pack cryotherapy", note: "Simple cold, used carefully" },
      { href: "/areas-we-serve/saint-paul", label: "Saint Paul", note: "The city that shaped Maplewood's outline" },
      { href: "/areas-we-serve/north-saint-paul", label: "North Saint Paul", note: "A closer Ramsey County neighbor" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.maplewood],
  cta: {
    title: "Book from Maplewood",
    body: "Say which part of the “L” you are driving from, and we will propose an earlier time that usually makes the thirteen miles more predictable than a late-afternoon run on I-94.",
  },
};
