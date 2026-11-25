import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const orono: PseoHub = {
  slug: "orono",
  heroSubtitle:
    "Orono is the largest city by area on Lake Minnetonka, a mostly residential community on the north side of the lake. From there to our suite is about 14 miles, usually along County 15 or Highway 12 and then toward Excelsior Boulevard. The first visit is timed for a lake-community drive, not for a gap between errands.",
  keyFacts: [
    { label: "Lake-community drive", value: "About 14 miles", sourceId: "orono" },
    { label: "2020 census", value: "8,315 people", sourceId: "orono" },
    { label: "On the lake", value: "Largest municipality by area on Lake Minnetonka", sourceId: "orono" },
    { label: "Incorporation", value: "Town in 1889, city in 1955", sourceId: "orono" },
  ],
  intro: {
    eyebrow: "Orono, on the north side of the lake",
    title: "A large, quiet lake city with a 14-mile trip into Saint Louis Park",
    paragraphs: [
      "Orono sits in Hennepin County as a largely residential suburb, and it is the largest municipality by area on Lake Minnetonka[^orono]. The 2020 census counted 8,315 people, a small population for that much shoreline and water. The weeks we hear about are often built around the lake itself — docks, seasonal opening, long sits in a car on County roads that hug the water — rather than around a single freeway commute.",
      "The city took its name from Orono, Maine, the hometown of early resident George A. Brackett. Residents formed an independent town in 1889, after earlier years in Excelsior Township, and incorporated as a city in 1955[^orono]. That long, low-density layout is why a 'short trip across town' in Orono is often longer than it looks on a map, and why we ask which bay or road you actually start from.",
      "The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about 14 miles from the center of Orono. Most people work their way along County 15 or Highway 12 and then toward the boulevard. The official city site is a useful place to confirm current civic hours and lake-community notices[^orono-city]. In this room, we would rather hear which lakeshore road you drove than which notice you read.",
      "Because so much of the city is water and shoreline, a lot of the year has a season baked into it: opening the dock, a long evening on the water, or a winter of not moving the same way. Those details belong in the first conversation. They change the exam more than the city name does.",
    ],
  },
  atAGlance: {
    title: "Orono, briefly",
    items: [
      { label: "The name", value: "From Orono, Maine, hometown of George A. Brackett", sourceId: "orono" },
      { label: "On the water", value: "Largest city by area on Lake Minnetonka, mostly residential", sourceId: "orono" },
      { label: "Became a city", value: "Independent town in 1889; incorporated in 1955", sourceId: "orono" },
    ],
  },
  figure: {
    src: "/images/pain-relief.jpg",
    alt: "A clinician working with a patient seated on a treatment table",
    caption: "Lake-community weeks in Orono often mix long car sits with seasonal work around a dock. We want both halves in the history, not only the one that hurts today.",
    width: 623,
    height: 360,
  },
  localFacts: {
    title: "Orono details that belong in the history",
    cards: [
      {
        title: "The city is large because the lake is in it",
        body: "Orono is the largest municipality by area on Lake Minnetonka, and much of that area is water and shoreline rather than a tight street grid[^orono][^lake-minnetonka]. That is why two people who both 'live in Orono' can start the drive from very different bays, and why we ask you to name the road, not only the city.",
        sourceId: "orono",
      },
      {
        title: "County roads, not a single freeway, shape the local week",
        body: "A lot of Orono driving happens on County 15 and the roads that follow the shore, with Highway 12 as the faster way toward the city when people need it. Those sits are often longer than residents expect to mention. If a school run or a grocery trip is regularly 20 minutes of shoreline curves, say so.",
        sourceId: "orono",
      },
      {
        title: "The town is older than the incorporation date suggests",
        body: "The independent town dates to 1889, the city to 1955, and the name to a Maine hometown[^orono]. The civic site is the right place for current notices[^orono-city]. For the exam, the useful history is the one you are living this season, including dock work and winter inactivity, not the incorporation year.",
        sourceId: "orono-city",
      },
    ],
  },
  diagram: {
    title: "From the north shore into the suite",
    caption: "A sketch. Most Orono patients work along County 15 or Highway 12 and finish on Excelsior Boulevard. About 14 miles, with more curves than a freeway trip of the same length.",
    stops: [
      { label: "Your bay or County 15 start", note: "Orono is large; the start matters" },
      { label: "County 15 or Highway 12", note: "The usual way off the lake" },
      { label: "Toward Excelsior Boulevard" },
      { label: "The second-floor office", note: "Suite 201" },
    ],
    legs: ["Off the shoreline roads", "Toward Highway 12", "The last miles on the boulevard"],
  },
  sections: [
    {
      eyebrow: "Docks, cars, and a quiet winter",
      title: "Orono weeks have a season in them",
      paragraphs: [
        "In warm months we hear about dock work, lifting, and long evenings that end in a stiff low back the next morning. In the car-heavy weeks we hear about a neck that does not like the curves on County 15. In winter, the story is often that the same back got quieter and then complained when the season started again. The short list is written for the season you are actually in.",
        "A Côté and colleagues task-force paper on neck pain in workers is one reference we keep in mind when the main complaint is a neck that has built up over a driving week[^cote-2008]. It describes how common that pattern is. It does not tell us what to do with your particular neck. The exam does that.",
      ],
    },
    {
      eyebrow: "Going home along the lake",
      title: "Two movements that fit a shoreline week",
      paragraphs: [
        "A County 15 week usually gets a small nodding drill and a mid-back arch you can do before you get back in the car. A dock-and-yard week usually gets a bend at the hips and a gentle extension on the back steps. You will have practiced both here. There is {a longer exercise page|/therapeutic-exercise} if you want the idea behind it. If a return visit would help, we will look for a time that does not sit in late-afternoon lake traffic.",
      ],
    },
  ],
  process: {
    title: "Timing an Orono visit around a lake-community drive",
    steps: [
      { title: "Book a morning if the afternoon roads are slow", body: "Weekday mornings start at 8:30, except Wednesday, which starts at 10 and runs only until noon. Tuesday and Friday are morning-only. Monday and Thursday also run through the afternoon, ending at half past five. From Orono, a late-morning slot usually beats a late-afternoon drive along the lake." },
      { title: "Name the bay and the season", body: "Which road you start on, whether dock work or a long winter pause is in the story, and what you have already tried. We can email the intake so you are not filling it out in the lot." },
      { title: "Move, talk, then treat only if it fits", body: "Dr. Levitt watches how you stand and turn, then explains the findings. If you should see your physician first, that is when you will hear it." },
      { title: "A short list for the drive back to the lake", body: "Two movements already done in the room, and a clear answer on whether another trip is useful." },
    ],
  },
  comparison: {
    title: "When an Orono appointment here is a fair first step",
    columns: ["What the week looks like", "Where to begin"],
    rows: [
      ["A stiff neck after shoreline driving, or a low back after seasonal dock and yard work", "Coming here for an exam is a fair first step"],
      ["A fall in recent days, or bone density already being discussed with your physician", "Start with that physician, then we can talk about a visit here"],
      ["Chest tightness, breath that will not come, or a feverish spine", "That belongs in a medical office or emergency department first"],
    ],
    note: "If you want help choosing the row, call 952-920-7535 before you leave the lake.",
  },
  whoFor: {
    title: "Orono residents we already see",
    fitsTitle: "Typical reasons for the trip",
    notFitsTitle: "Begin somewhere else",
    fits: [
      "A neck that tightens on County 15 or Highway 12",
      "A low back after dock work, yard work, or the first weeks of the season",
      "People who spend a long winter less active, then start up again quickly",
      "Anyone willing to plan about 14 miles to see the same clinician",
    ],
    notFits: [
      "Sudden weakness in a limb, or a change in bowel or bladder control you cannot explain",
      "A tight or heavy chest, or air that feels stuck",
      "Fever with a sore spine, or weight falling without an explanation",
    ],
  },
  provider: {
    title: "One clinician for a lake-community trip",
    body: "Dr. Alan Levitt has practiced in this office since 1987 and at the current Excelsior Boulevard suite since 1999. Orono patients see him at every visit. The drive is long enough that a handoff would be a poor use of the morning.",
  },
  faqs: {
    title: "Questions from Orono",
    items: [
      { q: "How many miles should I count from Orono?", a: "About fourteen. Meet us at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. County 15 or Highway 12, then toward Excelsior Boulevard, is the line most people describe." },
      { q: "I live on a bay that is a slow drive even to Highway 12. Does the starting point matter?", a: "It does. Orono is large, and two households in the same city can have very different first ten minutes. Tell us the road you actually start on when you book, and we will not pretend the trip is the same for everyone." },
      { q: "The ache started when we opened the dock. Is that worth mentioning?", a: "Yes. Seasonal lifting and the first long days on the water are a common Orono story. Bring a short timeline of when it started and what you have already tried." },
      { q: "Do I need a referral from my physician?", a: "No. Telephone 952-920-7535, or send the request on the site, and mention Orono." },
      { q: "If I return, who do I see?", a: "Dr. Levitt. There is no associate rotation." },
    ],
  },
  related: {
    title: "More for Orono readers",
    links: [
      { href: "/areas-we-serve/orono/neck-pain-relief", label: "Neck-pain care, Orono", note: "When the shoreline drive is the louder story" },
      { href: "/areas-we-serve/orono/back-pain-treatments", label: "Back-pain care, Orono", note: "A service page, not a diagnosis" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Why we keep homework to two movements" },
      { href: "/new-patient-center", label: "New patient center", note: "Timing and forms for a lake-community drive" },
      { href: "/areas-we-serve/wayzata", label: "Wayzata", note: "Another Lake Minnetonka city we already write for" },
      { href: "/areas-we-serve/minnetonka", label: "Minnetonka", note: "Along the same lake, closer to the office" },
    ],
  },
  sources: [SRC.orono, SRC.oronoCity, SRC.lakeMinnetonka, SRC.cote],
  cta: {
    title: "Set a time from Orono",
    body: "Call 952-920-7535 or use the online request, and tell us which road you start on and whether this is a driving week or a dock-and-yard week. We will place the first visit in a morning slot when we can.",
  },
};
