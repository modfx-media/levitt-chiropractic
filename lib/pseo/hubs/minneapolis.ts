import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const minneapolis: PseoHub = {
  slug: "minneapolis",
  heroSubtitle:
    "There is no Levitt office inside Minneapolis. Patients from the city come to Suite 201 in Saint Louis Park, about five miles from the southwest lakes and a little further from downtown.",
  keyFacts: [
    { label: "From the lakes", value: "About 5 miles" },
    { label: "Minneapolis population", value: "429,954 (2020 census)", sourceId: "minneapolis" },
    { label: "From downtown", value: "I-394, then Highway 100" },
    { label: "Lakes road", value: "Excelsior Boulevard" },
  ],
  intro: {
    eyebrow: "Coming from the city",
    title: "Minneapolis patients, a Saint Louis Park office",
    paragraphs: [
      "Minneapolis is the state's most populous city, at 429,954 people in the 2020 census[^minneapolis], and it is far too big for one sentence about the drive. Someone in Linden Hills and someone in Northeast are making very different trips to 6200 Excelsior Blvd, Suite 201. So we ask your neighborhood when you call, and we are honest about it: from the southwest lakes the office is close, while from downtown or the north side it is a planned trip, not an errand.",
      "From the Chain of Lakes, Excelsior Boulevard is the natural path; it leaves the Bde Maka Ska area and runs straight into Saint Louis Park. From downtown, most people take I-394 and then Highway 100 down to the Excelsior Boulevard exit. Both are short when traffic is light. Neither is short at five o'clock on a Friday.",
      "City patients tend to come in with city problems. Hours at a desk and a commute on foot, bike or bus add up to necks that do not turn, mid-backs that lock, and hips that resent the stairs. We look at how those parts move, and then we build a plan around the week you actually live, including the commute.",
    ],
  },
  atAGlance: {
    title: "Minneapolis by the numbers",
    items: [
      { label: "Lakes", value: "Five lakes in the southwest Chain of Lakes", sourceId: "minneapolis" },
      { label: "Grand Rounds", value: "A 51-mile scenic byway with parallel bike and walking paths", sourceId: "minneapolis" },
      { label: "Bde Maka Ska", value: "3.1 miles of walking trail, 3.19 miles of bike trail", sourceId: "bde-maka-ska" },
    ],
  },
  localFacts: {
    title: "The city's paths are part of the story",
    intro: "Minneapolis gets people moving outdoors, and that shows up in what they tell us.",
    cards: [
      {
        title: "A bicycle freeway",
        body: "The Cedar Lake Trail was the first federally funded bicycle commuter trail in the nation and has separate one-way bike lanes for much of its length. Daily riders often describe tight necks and numb hands, which is worth mentioning at the exam.",
        sourceId: "cedar-lake-trail",
      },
      {
        title: "A huge park system",
        body: "The Minneapolis Park & Recreation Board oversees 7,059 acres of parkland and water, including 22 lakes and 102 miles of Grand Rounds biking and walking paths. Plenty of room to walk, which is often the base of a home plan.",
        sourceId: "bde-maka-ska",
      },
      {
        title: "Trails in winter",
        body: "Around Bde Maka Ska the paths stay open through winter and are maintained for walkers and riders. Packed snow and ice are a different surface, and a slip on them is one of the more common winter stories we hear.",
        sourceId: "bde-maka-ska",
      },
    ],
  },
  diagram: {
    title: "Two common routes from Minneapolis",
    caption: "Two routes, one sketch of our own. People near the lakes skip the freeway; downtown drivers usually use it.",
    stops: [
      { label: "Downtown Minneapolis", note: "Or the north side" },
      { label: "I-394 to Highway 100", note: "Freeway route" },
      { label: "Excelsior Boulevard", note: "The lakes route joins here" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 5 },
    ],
    legs: ["I-394 out of downtown", "Hwy 100 to the Excelsior exit", "Lakes traffic merges here"],
  },
  sections: [
    {
      eyebrow: "What the research says",
      title: "A neck pain study run here in Minnesota",
      paragraphs: [
        "One of the better-known trials on neck pain was done in Minnesota. Researchers led from Northwestern Health Sciences University followed 272 adults with neck pain of two to twelve weeks. Those who received spinal manipulation did better than those given medication, in both the short and the long term. A few sessions of home exercise with advice did about as well as manipulation at most time points[^bronfort-2012].",
        "We find that result useful precisely because it is not one-sided. It supports what we do in the office, and it supports the homework too. That is why a Minneapolis patient with a desk neck usually leaves the first visit with both an adjustment, if appropriate, and two short exercises to do in the apartment.",
        "Broader reviews are more mixed. A 2015 Cochrane review found support for manipulation of the upper back for neck pain, but fewer and more varied results for manipulation of the neck itself[^gross-2015]. We share that nuance rather than overselling.",
      ],
    },
    {
      eyebrow: "Small spaces",
      title: "Homework that fits a city apartment",
      paragraphs: [
        "A home program that needs a gym or a foam roller the size of a canoe does not survive a city week. We pick movements that need a wall, a doorway or the back of a chair. A chin tuck against the wall, a doorway chest stretch, a slow cat-and-camel on a yoga mat. If you share a small apartment, tell us; we will choose things you can do between the couch and the bed.",
        "If you commute by bike, describe the setup: drop bars or flat, how far, how often. If you take the bus, tell us whether you stand or sit and whether you carry a heavy bag. These details often explain why the same side of the neck tightens every day.",
      ],
    },
  ],
  process: {
    title: "Making the trip from Minneapolis",
    steps: [
      { title: "Tell us your neighborhood", body: "When booking, mention where you start. We will suggest an hour that keeps the drive reasonable." },
      { title: "Plan for traffic on the first visit", body: "Allow extra time, especially from downtown. Arrive 10 to 15 minutes early for the forms." },
      { title: "History, exam, and a straight answer", body: "Dr. Levitt explains what he thinks is mechanical, what is not, and what would need a different kind of care." },
      { title: "A plan built around your commute", body: "Visit spacing and exercises are matched to how you get around the city." },
    ],
  },
  comparison: {
    title: "What one Minnesota trial compared",
    intro: "From the 2012 neck pain trial of 272 adults with recent neck pain[^bronfort-2012]:",
    columns: ["Group", "Result compared with medication", "Takeaway"],
    rows: [
      ["Spinal manipulation", "Better in the short and long term", "A reasonable first option for recent neck pain"],
      ["Home exercise with advice", "Similar to manipulation at most time points", "Homework matters; it is not filler"],
      ["Medication", "The comparison group", "Still an option to discuss with your physician"],
    ],
    note: "Results describe averages across groups. Your own response may differ.",
  },
  whoFor: {
    title: "Is it worth the drive from the city?",
    fitsTitle: "Usually worth it",
    notFitsTitle: "Stay in the city and seek urgent care",
    fits: [
      "A desk-and-commute neck that keeps tightening",
      "Mid-back stiffness from bike commuting",
      "A low back that aches after stairs or a long walk",
      "Wanting both hands-on care and a home routine",
    ],
    notFits: [
      "A sudden, severe headache, or new trouble speaking or seeing",
      "Weakness getting worse in an arm or leg",
      "A slip on ice with a head strike that has not been checked",
    ],
  },
  provider: {
    title: "About Dr. Levitt",
    body: "Dr. Alan Levitt graduated from Northwestern College of Chiropractic, the school now known as Northwestern Health Sciences University, in 1986. He has practiced since 1987 and has been at Suite 201 since 1999.",
  },
  faqs: {
    title: "Questions from Minneapolis",
    items: [
      { q: "Is the office in Minneapolis?", a: "No. The only office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about five miles from the southwest lakes." },
      { q: "What is the best route from downtown?", a: "Most people take I-394 to Highway 100, then exit at Excelsior Boulevard. Allow extra time at rush hour." },
      { q: "Do I need a referral?", a: "No. Minnesota does not require one to see a chiropractor. Bring any notes or imaging you already have." },
      { q: "Can I just do the exercises and skip the adjustments?", a: "For some people, yes. Research suggests home exercise with advice can work about as well for recent neck pain[^bronfort-2012]. We will talk it through honestly." },
      { q: "What should I bring?", a: "A photo ID, comfortable clothes, and any imaging or notes from other providers." },
    ],
  },
  related: {
    title: "Next steps from Minneapolis",
    links: [
      { href: "/neck-pain", label: "Neck pain", note: "Desk necks and commuter necks" },
      { href: "/areas-we-serve/minneapolis/adjustments-and-manipulation", label: "Adjustments for Minneapolis", note: "How the technique is chosen" },
      { href: "/areas-we-serve/minneapolis/therapeutic-exercise", label: "Home exercise", note: "Routines that fit an apartment" },
      { href: "/areas-we-serve/golden-valley", label: "Golden Valley", note: "Sharing Wirth Park with the city" },
      { href: "/areas-we-serve/richfield", label: "Richfield", note: "Just south of the city line" },
    ],
  },
  sources: [SRC.minneapolis, SRC.bdeMakaSka, SRC.cedarLake, SRC.bronfort, SRC.gross],
  cta: {
    title: "Book from Minneapolis",
    body: "Tell us your neighborhood and how you get around, and we will plan a first visit that fits the trip.",
  },
};
