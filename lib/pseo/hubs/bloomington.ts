import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const bloomington: PseoHub = {
  slug: "bloomington",
  heroSubtitle:
    "Bloomington is about seven miles from Suite 201. Highway 100 ends at Interstate 494 inside the city, so the usual trip is 100 north to the Excelsior Boulevard exit.",
  keyFacts: [
    { label: "From Bloomington", value: "About 7 miles" },
    { label: "2020 census count", value: "89,987, Minnesota's fourth-largest city", sourceId: "bloomington" },
    { label: "Usual route", value: "Highway 100 to Excelsior Boulevard", sourceId: "bloomington" },
  ],
  intro: {
    eyebrow: "Bloomington",
    title: "A large city, and a surprisingly direct drive",
    paragraphs: [
      "Bloomington stretches a long way from the Minnesota River up to Interstate 494, and it is easy to assume the trip to another suburb will eat the morning. For most of the city, the drive to 6200 Excelsior Blvd, Suite 201, Saint Louis Park is about seven miles. Highway 100 actually terminates at Interstate 494 inside Bloomington[^bloomington], so once you are on 100 the rest of the trip is a straight run to the Excelsior Boulevard exit.",
      "The 2020 census counted 89,987 people here, enough to make Bloomington Minnesota's fourth-largest city and the largest suburb in the Twin Cities[^bloomington]. It also holds more than 100,000 jobs and nearly 8,000 hotel rooms[^bloomington]. That mix of residents, commuters and visitors is why we ask whether you are driving from a home near Hyland, from an office along 494, or from the South Loop around the Mall of America. Those are not the same trip, and they do not want the same appointment time.",
      "The complaints we hear from Bloomington are often a blend of standing and sitting: long hours on a sales floor or in a hotel, then a weekend on the Hyland trails or a day of walking the mall. Dr. Levitt will want to know which of those is bothering you most, because the exam and the home plan change with the answer.",
    ],
  },
  atAGlance: {
    title: "Bloomington at a glance",
    items: [
      { label: "Founded", value: "1843, on the north bank of the Minnesota River", sourceId: "bloomington" },
      { label: "Main roads", value: "I-35W, Highway 77, US 169, I-494; Highway 100 ends at 494", sourceId: "bloomington" },
      { label: "Jobs in the city", value: "More than 100,000, including 11,000 at Mall of America tenants", sourceId: "bloomington" },
      { label: "Landmarks", value: "Mall of America, Hyland Lake Park Reserve, Minnesota Valley National Wildlife Refuge" },
    ],
  },
  localFacts: {
    title: "Four Bloomington places that show up in our notes",
    cards: [
      {
        title: "A mall built on a ballpark",
        body: "Mall of America opened in 1992 on 78 acres that once held Metropolitan Stadium. On opening day, 330 stores started business and more than 10,000 employees reported for work. The mall now draws about 32 million visitors a year. Long days on hard floors, for staff and visitors alike, are a frequent source of foot, hip and low-back fatigue.",
        sourceId: "moa-official",
      },
      {
        title: "No furnace, just skylights and people",
        body: "The mall does not use a central heating system. It holds about 70 degrees with passive solar energy from 1.2 miles of skylights, plus heat from lighting, fixtures and the people inside. That enclosed, year-round walking loop is why a winter walking plan is often realistic for Bloomington patients even when the trails are icy.",
        sourceId: "moa-official",
      },
      {
        title: "A park reserve in the middle of the city",
        body: "Hyland Lake Park Reserve is part of the 2,565-acre Hyland-Bush-Anderson Lakes Park Reserve system. Three Rivers lists 8.6 miles of trails, 84 acres of water, and 9.5 miles of cross-country ski trails, plus the Hyland Hills Ski Area. New-season ski legs and long trail days are regular reasons Bloomington patients book a visit.",
        sourceId: "hyland",
      },
      {
        title: "A high school that opened in 1957, and a city that kept growing around it",
        body: "Bloomington High School opened in 1957 at 88th Street and Sheridan Avenue South[^bloomington]. That date sits in the same postwar growth period as the later mall, but it is a different local landmark than the mall or the park reserve, and it still anchors a part of town that does not start a drive the same way a parking ramp at MOA does. If your morning already includes a school drop-off near that corner, say so when you call 952-920-7535; it is often easier to place a mid-morning exam after that loop than to pretend the seven miles start from a blank map.",
        sourceId: "bloomington",
      },
    ],
  },
  diagram: {
    title: "Bloomington to Suite 201",
    caption: "From the 494 corridor, Highway 100 is usually the simplest path. From the river side of town, 169 or 35W may be faster; tell us where you start.",
    stops: [
      { label: "I-494 in Bloomington", note: "Where Highway 100 ends" },
      { label: "Highway 100 north", note: "Through Richfield toward Saint Louis Park" },
      { label: "Excelsior Boulevard exit" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 7 },
    ],
    legs: ["Get on 100 at 494", "Stay on 100", "Off at Excelsior"],
  },
  sections: [
    {
      eyebrow: "A work city as well as a home city",
      title: "Standing shifts, hotel days and desk weeks",
      paragraphs: [
        "Bloomington is a major hospitality and retail center as well as a place people live. Mall of America tenants alone account for 11,000 jobs, and HealthPartners, Toro and Donaldson are among the other large employers[^bloomington]. If your day is mostly standing, we spend more time on feet, hips and how you recover after a shift. If your day is a 494-corridor desk, the neck and upper back usually lead the exam.",
        "Either way, we would rather build a short routine you will actually do than a long one you will not. Our {functional medicine|/areas-we-serve/bloomington/functional-medicine} page is there if broader health questions are part of the visit; the first appointment still starts with the mechanical exam.",
      ],
    },
    {
      eyebrow: "River and refuge",
      title: "When the trails are the reason you came in",
      paragraphs: [
        "The Minnesota Valley National Wildlife Refuge was created by Congress in 1976, after plans to protect the valley had been delayed by World War II and then revived by development pressure in the early 1970s[^refuge]. The Bloomington Education and Visitor Center is at 3815 American Boulevard East, and the refuge is free to visit[^refuge-fws]. Uneven ground and long walks there are a common weekend story in this office.",
        "If a trail day leaves you sore, we want to know whether the pain stayed local or started traveling, and whether it is easing or spreading. That history, plus the exam, decides whether a hands-on visit and a walking plan are enough, or whether you need a medical referral first.",
      ],
    },
    {
      eyebrow: "River city, mall city, park city",
      title: "The same seven miles start in three different places",
      paragraphs: [
        "Bloomington runs from the Minnesota River up to Interstate 494, and those two edges do not feel like the same town at rush hour. A start near the Mall of America uses 494 first. A start closer to the bluff or the refuge can use 35W, or a slower local road, before it ever reaches Highway 100. The mile count is about seven either way; the clock is not. Name the starting edge when you book.",
        "The week often splits the same way. Long days on the mall's hard floors show up in the feet and hips. Weekends in the Hyland system, or a walk at the Minnesota Valley National Wildlife Refuge, show up in a hip or a low back the next day. We would rather hear which of those you actually did than guess from the city name. If you already have a loop you keep, at Hyland or at the refuge, tell us; it is more useful than a new routine invented on paper.",
      ],
    },
  ],
  process: {
    title: "What to expect on a first Bloomington visit",
    steps: [
      { title: "Say if you are coming from the mall, the bluff, or a residential street", body: "A trip from the Mall of America and a trip from the Hyland side do not use 494 or 35W the same way. A morning appointment is usually the quieter seven miles." },
      { title: "Bring an ID and any report you already hold", body: "If a clinic has already given you an image or a written report, bring it along with your ID so the first visit does not have to stop short." },
      { title: "Walk out with a recommendation you can act on", body: "You will hear what the exam found and whether continuing in this Saint Louis Park clinic makes sense, or whether another kind of care ought to come first." },
      { title: "Take homework that fits a mall week or a Hyland weekend", body: "A couple of movements that can survive a long day at MOA or a weekend in the Hyland hills. We look at those same movements the next time you come up from Bloomington, rather than handing you a long list." },
    ],
  },
  comparison: {
    title: "Desk, floor shift or trail day",
    columns: ["Kind of week", "What people describe", "Where the plan usually starts"],
    rows: [
      ["Desk along 494", "Stiff neck, upper-back ache, screen-hour headaches", "Upper-back mobility, screen height, short movement breaks"],
      ["Retail, hotel or mall shift", "Tired feet, hips and low back after standing", "Footwear, standing breaks, hip and foot strength"],
      ["Hyland or refuge weekend", "Soreness after skiing, hiking or a long walk", "Pacing, terrain, and what to keep doing during the week"],
    ],
  },
  whoFor: {
    title: "Bloomington weeks that fit this office",
    fitsTitle: "The seven miles are worth it when",
    notFitsTitle: "Do not get on 494 for this",
    fits: [
      "Feet, hips or a low back that are cooked after hours on the mall's hard floors",
      "A hip or low back that is sore after time in the Hyland hills or at the refuge",
      "Desk or shift tightness that has been hanging around for more than a few days",
      "You want a first exam close enough to reach, with a plan you can keep between visits",
    ],
    notFits: [
      "A leg or arm that suddenly fails should go to an emergency department, not to a planned visit on 494",
      "Pain or pressure in the chest, or breathing that suddenly feels wrong, is a medical emergency",
      "A backache plus a fever, or a sick-all-over feeling, belongs in a medical clinic first",
    ],
  },
  provider: {
    title: "Who Bloomington patients see",
    body: "Bloomington visits are handled by Dr. Alan Levitt, in person. He completed his chiropractic degree at Northwestern in 1986, started this clinic in 1987, and has been on Excelsior Boulevard, in the current suite, since 1999.",
  },
  faqs: {
    title: "Bloomington FAQs",
    items: [
      { q: "How long is the trip from Bloomington?", a: "For most of Bloomington it is about seven miles. You are going to 6200 Excelsior Blvd, Suite 201, Saint Louis Park. People coming from the mall side usually take I-494 to Highway 100; from closer to 35W, some hop to I-94 and then 100." },
      { q: "Do you see people who work at the mall but live somewhere else?", a: "Yes. Name the mall shift and the home city so we can place the visit against the commute you will actually drive, not only the Bloomington address." },
      { q: "Can a first visit fit around a mall shift?", a: "Often. An earlier slot on I-494 is usually quieter than a 5 p.m. one. The desk number is 952-920-7535; ask for a time that still leaves a full hour for the exam, not a squeezed gap between mall shifts." },
      { q: "Is Saturday available?", a: "Weekend visits have to be booked, not walked into. If a weekday mall shift is in the way, ask for the Saturday list when you call 952-920-7535." },
    ],
  },
  related: {
    title: "More for Bloomington",
    links: [
      { href: "/areas-we-serve/bloomington/functional-medicine", label: "Functional medicine in Bloomington", note: "When the questions go beyond one joint" },
      { href: "/areas-we-serve/bloomington/back-pain-treatments", label: "Back pain care", note: "Desks, shifts and trail days" },
      { href: "/areas-we-serve/richfield", label: "Richfield", note: "On Highway 100 between Bloomington and the office" },
      { href: "/areas-we-serve/edina", label: "Edina", note: "A closer neighbor on the way" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.bloomington, SRC.moa, SRC.moaOfficial, SRC.hyland, SRC.refuge, SRC.refugeFws],
  cta: {
    title: "Book from Bloomington",
    body: "Tell us whether you are coming from the mall, the 494 offices or the Hyland side of town, and we will suggest a time that makes the seven miles easier.",
  },
};
