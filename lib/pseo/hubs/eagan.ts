import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const eagan: PseoHub = {
  slug: "eagan",
  heroSubtitle:
    "Eagan sits in Dakota County on the south side of the Minnesota River, with the Vikings' practice campus on the old Northwest Airlines grounds. From mid-town Eagan to our suite is about 14 miles, usually on Highway 77 or I-35E and then I-494. We treat that as a planned visit, not a quick stop.",
  keyFacts: [
    { label: "Mileage from mid-town", value: "About 14 miles", sourceId: "eagan" },
    { label: "2020 census", value: "68,855 people", sourceId: "eagan" },
    { label: "The nickname", value: "Once billed as the Onion Capital of the United States", sourceId: "eagan" },
    { label: "Usual roads", value: "Highway 77 and I-35E, then I-494 toward Excelsior Boulevard", sourceId: "eagan" },
  ],
  intro: {
    eyebrow: "Eagan, once onion country",
    title: "A Dakota County city that grew after the 1980 river bridge",
    paragraphs: [
      "Eagan lies south of Saint Paul, on the south side of the Minnesota River, upstream from the confluence with the Mississippi. The 2020 census counted 68,855 people[^eagan]. It was named for Patrick Eagan, the first chairman of the town board, an Irish farmer who settled a 220-acre parcel near where the municipal offices now stand. For years the town was an Irish farming community known as the Onion Capital of the United States.",
      "The large growth came after Highway 77 was relocated and widened and a six-lane bridge went over the Minnesota River in 1980, and after the last southbound stretch of Interstate 35E in the area was finished[^eagan]. That is why so many of the weeks we hear about are built around 77 or 35E, not around a short local loop. Tell us which of those you actually drive; they do not leave the neck in the same place at 5 p.m.",
      "Come to 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about 14 miles from the center of Eagan. The honest line is Highway 77 or I-35E north, then I-494 toward Excelsior Boulevard. Give the first visit enough clock time that a slow merge does not put you in the lot at the exact start of the appointment.",
      "In 2018 the Minnesota Vikings moved their headquarters and practice home to Eagan, onto a 40-acre campus at Twin Cities Orthopedics Performance Center, on land that had been the headquarters of Northwest Airlines[^tco]. Training-camp traffic and year-round staff commutes are now part of the local week. If you work on or around that campus, or you sit in the extra traffic when camp is in session, say so. It belongs in the history.",
    ],
  },
  atAGlance: {
    title: "Eagan notes",
    items: [
      { label: "The name", value: "Patrick Eagan, first town-board chairman; Irish farm roots", sourceId: "eagan" },
      { label: "The 1980 bridge", value: "A six-lane Highway 77 bridge over the Minnesota River opened the modern commute", sourceId: "eagan" },
      { label: "TCO campus", value: "Vikings headquarters and practice facility, opened on the old Northwest Airlines site in 2018", sourceId: "tco" },
    ],
  },
  figure: {
    src: "/images/chronic-lower-back-pain.jpg",
    alt: "A person receiving hands-on low-back care on a treatment table",
    caption: "Eagan commutes on 77 or 35E, and long walks in Lebanon Hills, do not ask the same things of a low back. The exam is how we tell them apart.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Eagan details that change the first visit",
    cards: [
      {
        title: "Lebanon Hills is on the Eagan side of Dakota County's largest park",
        body: "Lebanon Hills Regional Park covers 1,869 acres, with 13 lakes and ponds and a visitor-center trailhead that rents canoes in summer and skis or snowshoes in winter[^lebanon-hills]. The park began in 1967 around Jensen Lake. If you hike, bike, or ski those trails, tell us the distance and the surface. A wet boardwalk week and a packed winter trail are not the same load.",
        sourceId: "lebanon-hills",
      },
      {
        title: "The Vikings campus is a 40-acre workday",
        body: "TCO Performance Center includes an indoor practice field, outdoor turf, a 6,000-seat stadium used for high-school games, and the team offices[^tco]. Staff, vendors, and people who simply get stuck near the campus at camp time all describe a different sit than a regular 77 commute. Mention it if it is part of your week.",
        sourceId: "tco",
      },
      {
        title: "Onion capital is the old story; 77 is the current one",
        body: "The farming nickname is real, and it is how the city still explains its past[^eagan]. In this room we spend more time on whether you are a 77 person or a 35E person, and whether Lebanon Hills is in the weekend, than on the onion fields that used to be here.",
        sourceId: "eagan",
      },
    ],
  },
  diagram: {
    title: "Eagan to the boulevard",
    caption: "A sketch, not a live map. Most people come up Highway 77 or I-35E, join I-494, and finish on Excelsior Boulevard. Count on about 14 miles, and more minutes than that when 77 is slow.",
    stops: [
      { label: "Central Eagan, near 77 or 35E", note: "Start wherever you actually get on" },
      { label: "Highway 77 or I-35E north", note: "The river crossing is on this leg" },
      { label: "I-494 toward Excelsior Boulevard" },
      { label: "Suite 201 on the second floor", note: "The last turn is the boulevard" },
    ],
    legs: ["Onto 77 or 35E", "North across the river", "494, then the boulevard"],
  },
  sections: [
    {
      eyebrow: "77, 35E, and the park",
      title: "An Eagan week is often a commute plus a trail, not one or the other",
      paragraphs: [
        "The weekday complaint is usually a neck or mid-back after a 77 or 35E sit. The weekend complaint is often a hip or low back after time in Lebanon Hills. We ask which is louder this month, because the two do not get the same homework. A Paige and colleagues review in JAMA is one paper we keep in reach when the main complaint is a recent, uncomplicated low back that has not found a clear path yet[^paige-2017]. It does not replace the exam. It does keep us from piling on extra treatment you do not need.",
        "If trail miles are plainly a shoe-and-foot problem, we may look at {custom foot orthotics|/areas-we-serve/eagan/custom-foot-orthotics}. If they are not, that subject does not come up. There is a {longer exercise write-up|/therapeutic-exercise} if you want it; the plan is the pair you already practiced.",
      ],
    },
    {
      eyebrow: "What goes home",
      title: "A short routine that can survive a 77 week",
      paragraphs: [
        "A 77 week usually gets a small retraction you can do in a parked car before you pull back onto the ramp, plus a mid-back arch against the seat. A Lebanon Hills week usually gets a hinge at the hips and a stretch at a trailhead post. You will have already done both before you leave. If a second visit would help, we will look for a late-morning hole that does not sit in the 77 afternoon.",
      ],
    },
  ],
  process: {
    title: "Planning an Eagan appointment so 77 does not eat it",
    steps: [
      { title: "Prefer a mid-morning hole in the 77 traffic", body: "Tuesday and Friday are morning-only days, 8:30 to 11:30. Wednesday starts at 10 and ends at noon. Monday and Thursday add a late window that ends at half past five. From Eagan, the late-morning midweek times are usually kinder than a 5 p.m. run up 77." },
      { title: "Tell us 77, 35E, or the park", body: "Which road you actually use, whether Lebanon Hills or the TCO campus is in the week, and what you have already tried. Forms can go out ahead of time if you want them in the car, not at the desk." },
      { title: "Look, explain, then decide", body: "The first part of the visit is watching you move and talking through the findings. Hands-on work happens only after that, and only if it belongs. If a physician should see you first, you will hear it here." },
      { title: "Two movements and a clear next step", body: "Nothing leaves the room that you have not already practiced, and you will know whether a second trip is worth another 14 miles." },
    ],
  },
  comparison: {
    title: "When an Eagan trip here makes sense",
    columns: ["The pattern", "A reasonable first stop"],
    rows: [
      ["A neck after the 77 or 35E commute, or a low back after days in Lebanon Hills", "An exam at this office is a reasonable place to start"],
      ["A recent fall, or bone density already being followed by your physician", "Keep that first conversation with your physician"],
      ["Chest tightness, breath that feels stuck, or a feverish back", "Start in urgent or emergency care, not with a 77 drive to this suite"],
    ],
    note: "If you want a second opinion on the row, call 952-920-7535 before you get on 77.",
  },
  whoFor: {
    title: "Eagan people we already see",
    fitsTitle: "Reasons people book from Eagan",
    notFitsTitle: "A different first stop",
    fits: [
      "Neck or mid-back tightness after a Highway 77 or I-35E commute",
      "Hips or a low back after time in Lebanon Hills",
      "Staff or vendor weeks on or near the TCO campus",
      "Anyone willing to plan about 14 miles in order to see one clinician",
    ],
    notFits: [
      "A leg that loses strength quickly, or bowel or bladder function that has changed",
      "Pressure or pain in the chest, or breathing that feels wrong",
      "A feverish back, or weight dropping without a clear reason",
    ],
  },
  provider: {
    title: "You see the same person after that drive",
    body: "Alan Levitt has been the doctor here since 1987, in this Saint Louis Park suite since 1999. Eagan is far enough that we will not hand you to a rotating associate. The exam and any later visit are with him.",
  },
  faqs: {
    title: "Eagan questions",
    items: [
      { q: "How long is the trip from Eagan?", a: "About fourteen miles. The address is 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Highway 77 or I-35E to I-494, then Excelsior Boulevard, is the route most people take." },
      { q: "Does training camp change how I should book?", a: "It can. When the Vikings are in camp at TCO, the roads around the campus get slower. If you work near there, or you use those roads, a mid-morning appointment is usually the safer bet. Mention it when you call." },
      { q: "I hike Lebanon Hills most weekends. What should I bring?", a: "The shoes you wear on those trails, and a sense of the distance and whether you were on a wet path, a ski trail, or a bike route. Tell us when the ache starts, during the outing or the next morning." },
      { q: "Do I need a doctor's note first?", a: "No. Call 952-920-7535 or use the form on the site, and say Eagan." },
      { q: "Is the follow-up with the same clinician?", a: "Yes. Dr. Levitt does both." },
    ],
  },
  related: {
    title: "Related Eagan pages",
    links: [
      { href: "/areas-we-serve/eagan/custom-foot-orthotics", label: "Orthotics for Eagan", note: "When Lebanon Hills mileage is loading the feet" },
      { href: "/areas-we-serve/eagan/back-pain-treatments", label: "Back-pain care, Eagan", note: "A service page, not a diagnosis" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Why the home list stays short" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from 77 or 35E, including forms" },
      { href: "/areas-we-serve/burnsville", label: "Burnsville", note: "The next Dakota County city west along the river" },
      { href: "/areas-we-serve/bloomington", label: "Bloomington", note: "Just across the Minnesota River from much of Eagan" },
    ],
  },
  sources: [SRC.eagan, SRC.tco, SRC.lebanonHills, SRC.paige],
  cta: {
    title: "Book from Eagan",
    body: "Call 952-920-7535 or send the request, and tell us whether the louder problem is the 77 commute or time in Lebanon Hills. We will put the first visit in a mid-morning slot when we can.",
  },
};
