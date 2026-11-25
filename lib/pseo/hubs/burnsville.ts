import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const burnsville: PseoHub = {
  slug: "burnsville",
  heroSubtitle:
    "Burnsville sits on a bluff above the Minnesota River in Dakota County, with Buck Hill on the south side of town and I-35W as the usual way north. From that bluff to our suite is about 14 miles. This is a planned trip, not something you squeeze between a mall stop and a school pickup.",
  keyFacts: [
    { label: "Bluff to the office", value: "About 14 miles", sourceId: "burnsville" },
    { label: "2020 rank and count", value: "64,317 people, 14th in Minnesota", sourceId: "burnsville" },
    { label: "City area", value: "26.98 square miles; 24.94 of that is land", sourceId: "burnsville" },
    { label: "Freeways in play", value: "I-35W, I-35E, I-494, and County 42", sourceId: "burnsville" },
  ],
  intro: {
    eyebrow: "Burnsville, on the river bluff",
    title: "A built-out south-metro city with a ski hill in it",
    paragraphs: [
      "Burnsville looks out over the Minnesota River from a bluff in Dakota County, about 15 miles south of downtown Minneapolis. The 2020 census counted 64,317 residents, 14th in the state, across nearly 27 square miles[^burnsville]. The name comes from an early Irish settler, William Byrne, whose surname was written down as Burns and never corrected. The city itself was not incorporated until 1964, after Interstate 35 arrived and the old farming pattern gave way to a bedroom suburb.",
      "It was fully built out by the late 2000s. What remains distinct is the mix inside the same city limits: Heart of the City, the retail floors of Burnsville Center, the Burnsville Transit Station as the hub of the Minnesota Valley Transit Authority, a section of Murphy-Hanrehan Park Reserve, and Buck Hill, a 310-foot vertical ski peak[^burnsville]. Those are different weeks. A closing shift at the mall and a night of lessons at Buck Hill do not belong on the same home-exercise sheet.",
      "We work at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. From Burnsville the honest line is I-35W north to I-494, then down to Excelsior Boulevard, about 14 miles. Off-peak, some people do it in about 25 minutes; the same combination can stretch well past that. Leave more time than the mileage suggests.",
      "A portion of the Minnesota Valley National Wildlife Refuge also lies along the river here[^burnsville]. People who walk the bluff and refuge side of town often describe hips and a low back that feel different than they do after a week of level retail floors. We ask which part of Burnsville the walking actually happens in, because 'I live in Burnsville' is not specific enough.",
    ],
  },
  atAGlance: {
    title: "Burnsville, at a glance",
    items: [
      { label: "The hill", value: "Buck Hill rises 310 vertical feet on the south side of town", sourceId: "burnsville" },
      { label: "How it grew", value: "Irish farming community, then rapid growth after Interstate 35; incorporated 1964", sourceId: "burnsville" },
      { label: "Transit", value: "Burnsville Transit Station is the hub of the Minnesota Valley Transit Authority", sourceId: "burnsville" },
    ],
  },
  figure: {
    src: "/images/therapeutic-exercise.jpg",
    alt: "A clinician teaching a resistance-band movement to an older man",
    caption: "A 14-mile trip from the bluff is a long way to go for a printout. We teach the two movements in the room before you drive back south.",
    width: 1095,
    height: 730,
  },
  localFacts: {
    title: "Burnsville details we actually use in the exam",
    cards: [
      {
        title: "Buck Hill is a real load, not a postcard",
        body: "The 310-foot vertical ski peak sits inside the city[^burnsville]. Instructors, parents who stand on cold sidelines, and weekend riders all show up here with a different low-back and knee story than someone who only sits on 35W. If Buck Hill is in your week, say how many hours and whether you are on skis, a board, or the hill staff.",
        sourceId: "burnsville",
      },
      {
        title: "Heart of the City is not the same as the mall",
        body: "The newer downtown, Heart of the City, is built around walkable retail and condominiums, while Burnsville Center remains a regional mall with long, hard floors[^burnsville]. Standing a full closing shift in the mall and walking the Heart of the City after work are different days for the feet. Tell us which one you actually do.",
        sourceId: "burnsville",
      },
      {
        title: "The transit station is a sitting fact",
        body: "Burnsville Transit Station is the headquarters and hub of the Minnesota Valley Transit Authority, with regional buses out to other south-metro cities[^burnsville]. People who connect there often spend a chunk of the day in a seat that was not designed around them. If the bus is part of the commute, bring that into the first conversation, not only the freeway.",
        sourceId: "burnsville",
      },
    ],
  },
  diagram: {
    title: "Up 35W from the bluff",
    caption: "A sketch of the usual line: County 42 onto I-35W north, I-494, then Excelsior Boulevard. Fourteen miles can be 25 minutes or much longer. This is not a live traffic map.",
    stops: [
      { label: "County 42 at I-35W", note: "The usual on-ramp from mid-town" },
      { label: "I-35W heading north", note: "The long, straight part of the trip" },
      { label: "I-494, then Excelsior Boulevard" },
      { label: "The upstairs clinic", note: "Suite 201, second floor" },
    ],
    legs: ["City streets onto 35W", "North toward the beltway", "Off the freeway and onto the boulevard"],
  },
  sections: [
    {
      eyebrow: "Mall floors, freeways, and a ski hill",
      title: "Burnsville weeks are rarely only one kind of load",
      paragraphs: [
        "A common story is a full shift on the hard floors at Burnsville Center, with a low back or knees that are done by closing. Another is a long sit on I-35W, with a neck that hates a lane change. A third, less often volunteered, is time on Buck Hill. Some people live two of those in the same seven days. We will not put them on one sheet without asking which is louder right now.",
        "The official city site is a fair public starting point if you want current park and civic information[^burnsville-city]. In this room we would rather hear about the shoes, the shift length, and whether the hill is in the week, than about a job title.",
      ],
    },
    {
      eyebrow: "Before you drive back south",
      title: "Two movements, rehearsed here",
      paragraphs: [
        "Standing weeks get a simple bend-and-rise drill and a stretch you can do at a storefront curb after closing. Freeway weeks get a small nodding drill and a mid-back arch you can do before you start the car. If Buck Hill is the louder story, we throw that pair out and start over. A longer {exercise page|/therapeutic-exercise} exists if you want background; the plan is whatever we watched you do.",
        "If a follow-up would help, we will say why and look for a time that does not fight the afternoon northbound run. If it would not help, we will say that too, even after you have already made the drive.",
      ],
    },
  ],
  process: {
    title: "Setting the Burnsville trip so the morning is not wasted",
    steps: [
      { title: "Use the days that actually have afternoon hours", body: "If you need time after lunch, Monday and Thursday are the only days that run past midday, ending at half past five. Tuesday and Friday end at 11:30. Wednesday does not open until 10 and is finished at noon. From the bluff, a late-morning midweek slot is often calmer than a 5 p.m. northbound run." },
      { title: "Pack the week, not a generic form", body: "A short list of what you have tried, any images you already have, and a note about whether the mall, the freeway, or Buck Hill is the louder load. Give yourself a few extra minutes, or have the paperwork emailed before you leave south of the river." },
      { title: "The exam starts with how you move", body: "Findings are explained before any treatment. If you should be in a physician's office or urgent care first, you will hear that in this step, not after a treatment that should not have happened." },
      { title: "A plan that can travel back down 35W", body: "A brief pair of movements, already done in the suite, and a plain yes or no on a second visit." },
    ],
  },
  comparison: {
    title: "When a Burnsville visit here is worth the freeway time",
    columns: ["What has been going on", "A sensible first stop"],
    rows: [
      ["A stiff neck or low back that built up over a standing shift, a 35W week, or time on Buck Hill", "Coming here for a chiropractic exam is reasonable"],
      ["A fall within the last several days, or bone density already on your medical list", "Begin with your physician, not with a 14-mile trip to this suite"],
      ["A chest that hurts, breath that cuts short, or a fever with a sore spine", "That is a physician or emergency-room problem, not a reason to drive 35W here"],
    ],
    note: "If the row is not obvious, call 952-920-7535 before you get on I-35W.",
  },
  whoFor: {
    title: "Who already comes up from the bluff",
    fitsTitle: "Typical Burnsville visits",
    notFitsTitle: "Somewhere else first",
    fits: [
      "Retail or warehouse weeks on hard floors, including shifts at the mall",
      "A neck that tightens on I-35W or I-494",
      "Time on Buck Hill, or walks on the valley and refuge side of town",
      "People willing to plan a 14-mile trip in exchange for one consistent clinician",
    ],
    notFits: [
      "New weakness spreading in a lower limb, or toileting changes you cannot explain",
      "A heavy feeling in the chest, or breath that stops short",
      "Fever together with a sore spine, or weight falling off week after week",
    ],
  },
  provider: {
    title: "One doctor, even when the drive is long",
    body: "Dr. Alan Levitt opened this practice in 1987 and has used the Excelsior Boulevard address since 1999. Burnsville patients see him at each visit. We know the drive is long enough that a rotating staff would be a poor use of your morning.",
  },
  faqs: {
    title: "Burnsville questions we already answer",
    items: [
      { q: "What distance should I plan from Burnsville?", a: "Around fourteen miles. We are at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. I-35W north to I-494, then Excelsior Boulevard, is the route most people take." },
      { q: "How much clock time should I allow?", a: "Off-peak, some people do it in about 25 minutes. The 35W and 494 combination can run much longer. We would rather you take a mid-morning slot than try to beat the afternoon." },
      { q: "I close a store several nights a week. Which days still work?", a: "Monday and Thursday are the later days, ending at 5:30 p.m. If you need a window later than that, this is not a late-night clinic, and we will be honest about it." },
      { q: "Do I have to be referred?", a: "No. You can book yourself by calling 952-920-7535 or filling out the request on the site. Say that you are coming from Burnsville." },
      { q: "Will I see the same person if I come back?", a: "Yes. Dr. Levitt does the exam and the follow-up. There is no handoff to a rotating associate." },
    ],
  },
  related: {
    title: "Further reading if you live in Burnsville",
    links: [
      { href: "/areas-we-serve/burnsville/custom-foot-orthotics", label: "Orthotics for Burnsville", note: "When a standing mall or warehouse week is part of the story" },
      { href: "/areas-we-serve/burnsville/cold-laser-therapy", label: "Cold laser, Burnsville patients", note: "Only if the exam actually supports it" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "The idea behind a two-movement home list" },
      { href: "/new-patient-center", label: "New patient center", note: "Forms, parking, and timing from the bluff" },
      { href: "/areas-we-serve/eagan", label: "Eagan", note: "The next Dakota County city along the river" },
      { href: "/areas-we-serve/savage", label: "Savage", note: "Just west, on the Scott County side of the same river" },
    ],
  },
  sources: [SRC.burnsville, SRC.burnsvilleCity],
  cta: {
    title: "Book a Burnsville appointment",
    body: "Call the front desk at 952-920-7535, or request a time online, and tell us if the week is a standing shift, a 35W sit, or time on Buck Hill. We will place the first visit in a slot that respects the bluff-to-boulevard drive.",
  },
};
