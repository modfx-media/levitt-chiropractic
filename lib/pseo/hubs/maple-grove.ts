import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const mapleGrove: PseoHub = {
  slug: "maple-grove",
  heroSubtitle:
    "Maple Grove is a large, spread-out city about thirteen miles from Suite 201. From the Arbor Lakes area the usual trip is I-94 or U.S. 169 to I-394, then Excelsior Boulevard.",
  keyFacts: [
    { label: "From Maple Grove", value: "About 13 miles, depending on where you start" },
    { label: "People counted in 2020", value: "70,253", sourceId: "maple-grove" },
    { label: "Spread", value: "35.03 square miles, enough that the starting point changes the drive", sourceId: "maple-grove" },
    { label: "Main routes", value: "I-94, I-494, I-694, U.S. 169, Highway 610", sourceId: "maple-grove" },
  ],
  intro: {
    eyebrow: "Maple Grove",
    title: "Thirteen miles, and a city big enough that the starting point matters",
    paragraphs: [
      "Maple Grove covers more than 35 square miles, so the trip to 6200 Excelsior Blvd, Suite 201, Saint Louis Park is not the same from every driveway. From the Arbor Lakes area it is often about thirteen miles, usually by I-94 or U.S. 169 down to I-394 and then Excelsior Boulevard. From the Fish Lake interchange or from a neighborhood off Weaver Lake Road, the time changes even if the mile figure looks similar on a map.",
      "The 2020 census counted 70,253 people in Maple Grove[^maple-grove]. It grew quickly after major upgrades to I-94, I-694, I-494 and U.S. 169, and it is now one of the more populous suburbs in the Twin Cities[^maple-grove]. That growth is why we treat Maple Grove as a set of neighborhoods and freeways, not as a single pin.",
      "We also see a lot of people whose week is split between a desk and a very large retail district. Arbor Lakes, the Shoppes and the Fountains are genuine local geography, and long walking days there show up in feet, hips and low backs the same way a long week at a screen shows up in the neck. The first wood-frame house in Maple Grove Township, the Pierre Bottineau House, was built in 1854 and now stands in Elm Creek Park Reserve[^maple-grove]. If a weekend walk in that reserve is part of your week, say so; we would rather use a trail you already take than invent a new one on paper.",
    ],
  },
  atAGlance: {
    title: "Maple Grove background",
    items: [
      { label: "Early settlement", value: "Louis Gervais arrived in 1851; the Pierre Bottineau house, built in 1854, now stands in Elm Creek Park Reserve", sourceId: "maple-grove" },
      { label: "The name", value: "The area was known for maple stands and was a source of maple syrup", sourceId: "maple-grove" },
      { label: "Lakes", value: "Thirteen named lakes, including Weaver, Fish, Eagle and Rice", sourceId: "maple-grove" },
      { label: "A large workplace", value: "Boston Scientific's regional campus employs more than 3,000 people", sourceId: "maple-grove" },
    ],
  },
  localFacts: {
    title: "Maple Grove facts we use in the exam room",
    cards: [
      {
        title: "A downtown built on gravel mines",
        body: "Arbor Lakes sits on a 2,000-acre gravel mining area that has been active since the 1920s. Construction of the Main Street district began in 1997. The mines that remain, plus the ones already redeveloped, make this one of the larger urban infill sites in the metropolitan area.",
        sourceId: "arbor-lakes",
      },
      {
        title: "Minnesota's first lifestyle center",
        body: "The Shoppes at Arbor Lakes, completed in 2003, was Minnesota's first lifestyle center, built to feel like a mid-century village street. It has more than 65 stores and restaurants in about 412,000 square feet. The Fountains at Arbor Lakes later added about 850,000 square feet, including a water park and the Great River Energy headquarters.",
        sourceId: "arbor-lakes",
      },
      {
        title: "Thirteen lakes, and weekends that use them",
        body: "The city lists thirteen named lakes, among them Weaver Lake, Fish Lake, Eagle Lake, Rice Lake and Cedar Island Lake. Those lakes, plus Elm Creek Park Reserve, are where a lot of Maple Grove weekends actually happen, which is why a Monday neck or a Monday low back is not always a desk problem.",
        sourceId: "maple-grove",
      },
    ],
  },
  diagram: {
    title: "Arbor Lakes to Suite 201",
    caption: "From the Highway 610 side of Maple Grove, or from neighborhoods farther from Arbor Lakes, County Road 81 may enter the trip first. Tell us the starting point and we will time the visit around the route you actually use.",
    stops: [
      { label: "Arbor Lakes area", note: "Near I-94 and 169" },
      { label: "I-94 or U.S. 169", note: "South toward I-394" },
      { label: "I-394 to Excelsior Boulevard" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 13 },
    ],
    legs: ["94 or 169 south", "Over to 394", "Excelsior to Suite 201"],
  },
  sections: [
    {
      eyebrow: "A spread-out city",
      title: "Why we ask which lake or which freeway, not only “Maple Grove”",
      paragraphs: [
        "Maple Grove directly borders Plymouth, Brooklyn Park and Osseo, and major roads slice it into distinct pieces: the Fish Lake split of I-94, I-494 and I-694, U.S. 169 along the Brooklyn Park line, and Highway 610 across the northern part of the city[^maple-grove]. A 13-mile average hides those differences. If you live near Weaver Lake Road, say so. If you are coming from The Grove at I-94 and Maple Grove Parkway, say that instead.",
        "Because the trip is one of the longer ones we ask people to make, we try to make each visit count. That means a complete first exam and a home routine that is short enough to survive a busy week.",
      ],
    },
    {
      eyebrow: "Desks, campuses and the Shoppes",
      title: "Two kinds of tired that come from the same zip code",
      paragraphs: [
        "Boston Scientific's regional research, development and manufacturing campus employs more than 3,000 people in Maple Grove[^maple-grove]. If that is your workweek, we will ask about workbenches, monitors, and how long you stand. If your week is retail or restaurant work in Arbor Lakes, the questions lean toward shoes, floors and how far you walk between stores.",
        "People coming from a Shoppes shift or a Weaver Lake weekend often want a sense of the approach before they drive thirteen miles. The {back pain treatments|/areas-we-serve/maple-grove/back-pain-treatments} page describes how we usually work with that kind of week. The visit itself remains an exam, and if what we find leans toward a slower timeline or another setting, we will say so before you put another 169 or 94 trip on the calendar.",
      ],
    },
    {
      eyebrow: "Neighbors on the way",
      title: "Plymouth and Brooklyn Park",
      paragraphs: [
        "Many Maple Grove households already drive through {Plymouth|/areas-we-serve/plymouth} or along the {Brooklyn Park|/areas-we-serve/brooklyn-park} line to reach 169 or 394. If that is your normal route, we can often set the appointment next to a commute you already make.",
        "Saturday times exist, but they are held in advance. If weekday freeway traffic is the main obstacle, call 952-920-7535 and we can look at the Saturday book with you.",
      ],
    },
    {
      eyebrow: "Gravel mines, thirteen lakes, and a 13-mile run",
      title: "Arbor Lakes is not the same trip as Fish Lake",
      paragraphs: [
        "Maple Grove covers more than 35 square miles, and the mile figure to the office hides that. A start at Arbor Lakes, on the old gravel-mining land that became the Main Street district and the Shoppes, often uses I-94 or U.S. 169. A start near Fish Lake or off Weaver Lake Road changes the time even when the map still says “about thirteen miles.” Name the starting neighborhood when you book, so the appointment is set against the interchange where your drive begins.",
        "Weekends, as often as not, are spent around the water or the reserve. The city lists thirteen named lakes, and Elm Creek Park Reserve is where a lot of weekends actually happen, including a walk past the Pierre Bottineau House, the township's first wood-frame house, built in 1854 and moved there later[^maple-grove]. If that walk is already part of your week, tell us. A long day at the Shoppes or at Boston Scientific, and a long weekend around the lakes, do not belong in the same generic plan.",
      ],
    },
  ],
  process: {
    title: "How a first Maple Grove visit is set up",
    steps: [
      { title: "Say whether you are coming from Arbor Lakes, the lakes, or The Grove", body: "Those starting points do not use I-94 or Highway 169 the same way. A mid-morning time is usually the calmer thirteen miles." },
      { title: "Pack the documents you already own", body: "An ID is required. If you have an older film or a one-page note of what you have already tried, bring that too so the first appointment can stand on its own." },
      { title: "Leave knowing whether this clinic is actually a fit", body: "Dr. Levitt will sit with what the exam showed and tell you, in plain language, if continuing here makes sense or if another setting would be a better next step." },
      { title: "Go home with homework that survives a retail or campus week", body: "A short homework list you can still do after a day at Boston Scientific or a long shift at the Shoppes. We recheck those movements the next time you come down from Maple Grove." },
    ],
  },
  comparison: {
    title: "Campus, retail and lake weekends",
    columns: ["The week you are having", "What usually hurts", "What we usually work on first"],
    rows: [
      ["A Boston Scientific or desk week", "A campus week at Boston Scientific that has the neck tight over instruments or a computer", "The setup in front of you, and two short breaks a campus week can actually absorb"],
      ["A Shoppes or Fountains shift", "Hours on hard floors at the Shoppes or the Fountains that leave the feet spent and the hips aching", "Shoes, standing pauses, and a shorter loop between stores"],
      ["A Weaver or Fish Lake weekend", "A long outing around Weaver or Fish Lake that leaves the hips tight, or the low back complaining, afterward", "How you paced the day, and a weekday routine that keeps it from lingering"],
    ],
  },
  whoFor: {
    title: "Maple Grove situations that belong here",
    fitsTitle: "Worth the thirteen miles when",
    notFitsTitle: "Do not make the 169 or 94 run for this",
    fits: [
      "A campus week at Boston Scientific, or another Maple Grove desk, that leaves the neck tight and tired by evening",
      "A long day at Arbor Lakes or the Fountains that leaves the feet spent and the hips aching",
      "A Weaver Lake or Fish Lake weekend that leaves the hips tight, or the low back complaining, the next day",
      "A Maple Grove week you can support from home, because thirteen miles is not a trip you will make several times a week",
    ],
    notFits: [
      "Do not make the 169 or 94 run if a limb has suddenly gone weak; that is emergency care",
      "Pressure in the chest, or air that has started to feel like work, belongs in a medical setting, not here",
      "A temperature with the backache, or feeling unwell from more than stiffness, is a medical clinic visit",
    ],
  },
  provider: {
    title: "Who does the exam",
    body: "Every Maple Grove exam is done by Dr. Alan Levitt, in person. Northwestern granted his chiropractic degree in 1986; he began practice in 1987; Suite 201 has been the clinic address from the 1999 move onward.",
  },
  faqs: {
    title: "Maple Grove FAQs",
    items: [
      { q: "How far is the office from Maple Grove?", a: "About thirteen miles. From Arbor Lakes, plan on I-94 or U.S. 169 toward Minneapolis, then leave the freeway at Excelsior Boulevard. You will pull up at 6200 Excelsior Blvd, Suite 201, Saint Louis Park." },
      { q: "Is Maple Grove still close enough to book here?", a: "It is. Thirteen miles remains inside the 15-mile line, which is why we kept the page. It is also far enough that we plan visits so you are not making that run without a reason." },
      { q: "Can more of the plan happen at home because of the distance?", a: "Yes. At thirteen miles, the work you do between visits has to carry the week. The next trip down 169 or 94 is scheduled only if seeing the movements here would actually change them, or change how far apart the visits sit." },
      { q: "Is there a Saturday option if 169 is brutal on weekdays?", a: "Weekend times exist, but they are reserved. Dial 952-920-7535 and ask the desk to look at the Saturday book with you." },
    ],
  },
  related: {
    title: "Maple Grove pages, plus Plymouth and Brooklyn Park",
    links: [
      { href: "/areas-we-serve/maple-grove/back-pain-treatments", label: "Back pain care for Maple Grove", note: "Desks, retail days and lake weekends" },
      { href: "/areas-we-serve/maple-grove/adjustments-and-manipulation", label: "Adjustments", note: "What the first visit actually includes" },
      { href: "/areas-we-serve/plymouth", label: "Plymouth", note: "On the way toward 394" },
      { href: "/areas-we-serve/brooklyn-park", label: "Brooklyn Park", note: "Along U.S. 169" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.mapleGrove, SRC.arborLakes],
  cta: {
    title: "Book from Maple Grove",
    body: "Say whether you are coming from Arbor Lakes, Weaver Lake or another part of town, and we will propose a time that respects a 13-mile freeway trip.",
  },
};
