import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const saintPaul: PseoHub = {
  slug: "saint-paul",
  heroSubtitle:
    "Saint Paul is about twelve miles from Suite 201. The usual trip crosses Minneapolis on Interstate 94, then finishes on I-394 or Highway 100 toward Excelsior Boulevard.",
  keyFacts: [
    { label: "From Saint Paul", value: "About 12 miles" },
    { label: "Census (2020)", value: "311,527 people", sourceId: "saint-paul" },
    { label: "Footprint", value: "56.10 square miles", sourceId: "saint-paul" },
    { label: "Usual route", value: "I-94, then I-394 or Highway 100", sourceId: "saint-paul" },
  ],
  intro: {
    eyebrow: "Saint Paul",
    title: "A capital-city trip that is still inside our 15-mile range",
    paragraphs: [
      "Saint Paul is a bigger drive than our closest suburbs, but it is still inside the area we serve: about twelve miles from most of the city, with the office at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. The usual spine of the trip is Interstate 94 through Minneapolis; at the far end people peel off on I-394 or Highway 100 toward the Excelsior Boulevard exit. We would rather be honest about that distance than pretend it is a hop.",
      "The 2020 census counted 311,527 people, and the city covers 56.10 square miles[^saint-paul], so “from Saint Paul” is not one trip. A household near the river, one near Roseville, and one on the far side of downtown will not leave the house at the same time for the same appointment. When you book, tell us the neighborhood, not only the city.",
      "Because the drive is longer, we plan Saint Paul visits with fewer wasted trips. That means a thorough first exam, a short home routine you can actually finish, and follow-up visits only when there is a reason to be in the room. Dr. Levitt would rather you do the work between appointments than spend another noon hour on 94. One more scheduling note: the city's street grid still follows the river and the old landing more than a tidy suburban pattern, so a household near the bluff and one near the Roseville line will not leave at the same time for the same slot, even when both say they are “coming from Saint Paul.”",
    ],
  },
  atAGlance: {
    title: "Saint Paul background",
    items: [
      { label: "Capital", value: "Named the capital when the Minnesota Territory was created in 1849", sourceId: "saint-paul" },
      { label: "The name", value: "In 1841, Lucien Galtier built a chapel dedicated to St. Paul and asked settlers to use that name", sourceId: "saint-paul" },
      { label: "River city", value: "In 1858, more than 1,000 steamboats served the landing", sourceId: "saint-paul" },
      { label: "Clinic hours", value: "Weekday mornings, Monday and Thursday afternoons, Saturday by appointment" },
    ],
  },
  localFacts: {
    title: "A little Saint Paul history we actually use",
    cards: [
      {
        title: "A chapel that renamed a landing",
        body: "In 1841 the Catholic missionary Lucien Galtier was sent to minister to French Canadians at Mendota. He had a chapel built on the bluff above the riverboat landing and told settlers to drop the older name and adopt St. Paul. The territorial capital followed in 1849.",
        sourceId: "saint-paul",
      },
      {
        title: "A river port before it was a freeway city",
        body: "By 1858, the year Minnesota became a state, more than 1,000 steamboats served Saint Paul. The river still shapes the street grid and the way people move across town, which is why we ask whether you are starting from a river neighborhood or from the Roseville side.",
        sourceId: "saint-paul",
      },
      {
        title: "Twelve miles is inside the line, not next door",
        body: "We only write city pages for places within about 15 miles of the office. Saint Paul sits inside that line at about twelve miles, which is why this page exists, and why we still treat the drive as something to plan around rather than ignore.",
        sourceId: "saint-paul",
      },
      {
        title: "A 3M city before it was a Maplewood story",
        body: "3M moved into Saint Paul in 1910 and built a headquarters in 1940 that is still standing and listed on the National Register of Historic Places. Headquarters work left for the Maplewood campus in 1962, but manufacturing continued in the city for years after that[^saint-paul]. If your week still orbits a plant, a lab, or a downtown office that grew out of that era, say so at the first visit; it changes what we ask about sitting, standing and commuting.",
        sourceId: "saint-paul",
      },
    ],
  },
  diagram: {
    title: "Saint Paul to Suite 201",
    caption: "From a river neighborhood, Interstate 94 is usually the spine of the trip. From closer to the Roseville line, Highway 36 to 35W or 280 can be the calmer choice; tell us where you start.",
    stops: [
      { label: "Saint Paul", note: "Tell us the neighborhood" },
      { label: "Interstate 94", note: "Through Minneapolis" },
      { label: "I-394 or Highway 100", note: "Toward Excelsior Boulevard" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 12 },
    ],
    legs: ["94 across town", "394 or 100", "Excelsior exit to Suite 201"],
  },
  sections: [
    {
      eyebrow: "Fewer trips, more homework",
      title: "How we plan care when 94 is part of the visit",
      paragraphs: [
        "A freeway trip has to earn its place. Between visits we rely on a short routine you can finish in a capital-city week, taught before you leave and reviewed only when you come back. If something feels off sooner, call the office rather than waiting for the next opening on 94.",
        "Saint Paul has 160 parks and 41 recreation centers, and in 2018 its park system ranked second in the country on ParkScore, behind only Minneapolis[^saint-paul]. If a regular walk through one of those parks is already part of your week, tell us which one. We would rather build around a route you already take than invent a new loop you will abandon after two days.",
      ],
    },
    {
      eyebrow: "Desk days and river weekends",
      title: "Two patterns we see from Saint Paul",
      paragraphs: [
        "Many Saint Paul patients spend weekdays at a desk in a state office, a downtown firm or a campus, then spend weekends walking, cycling or working on a house with stairs. Weekdays tend to land in the neck and the mid-back, right between the scapulae. Weekends tend to land lower, in the lumbar spine and the hips.",
        "We try to address both in one plan, rather than pretending they are separate problems. If a regular park walk leaves the feet complaining as well, {custom foot orthotics|/areas-we-serve/saint-paul/custom-foot-orthotics} is a conversation we can have in the same visit. The {cryotherapy|/areas-we-serve/saint-paul/cryotherapy} page explains when targeted cold is useful for a new, irritated strain.",
      ],
    },
    {
      eyebrow: "Neighbors on the way",
      title: "Roseville, Maplewood and Minneapolis",
      paragraphs: [
        "If you live near the {Roseville|/areas-we-serve/roseville} or {Maplewood|/areas-we-serve/maplewood} edge of Saint Paul, say so. Those trips sometimes use Highway 36 or 280 rather than a pure 94 run, and the best appointment time changes with the route. People who already spend part of the week in {Minneapolis|/areas-we-serve/minneapolis} often prefer a mid-morning slot that avoids the worst of both downtowns.",
        "Saturday times are held rather than left open for walk-ins. If a weekday freeway trip is the thing you are trying to avoid, call 952-920-7535 and ask whether a Saturday remains on the book.",
      ],
    },
  ],
  process: {
    title: "What a first Saint Paul visit actually involves",
    steps: [
      { title: "Start with the neighborhood, because twelve miles is not one trip", body: "A Midway departure and a departure from a river-bluff street do not hit the same 94 traffic. Name the starting street when you book, and we will pick a mid-morning slot that usually stays predictable." },
      { title: "Carry what would otherwise force a second appointment", body: "A driver's license or other ID is enough to start. If an MRI or x-ray report is already in a drawer at home, bring it so we are not guessing from memory." },
      { title: "Leave with a yes, a no, or a carefully bounded maybe", body: "Dr. Levitt will sit with the findings and tell you whether continuing in this clinic makes sense, or whether a different kind of visit would serve you better." },
      { title: "Take home a routine that can survive a capital-city week", body: "A handful of movements, practiced before you leave, then checked the next time you make the 94 trip. Nothing that only works if you live next door." },
    ],
  },
  comparison: {
    title: "Weekday, weekend and the drive itself",
    columns: ["Part of the week", "What tends to hurt", "Where we usually start"],
    rows: [
      ["Capital-city desk week", "A neck that tightens during long meetings, an upper back that aches by Thursday", "How you sit, the height of the screen, and two short movement breaks"],
      ["House and river weekend", "A river-bluff weekend that leaves the hips and the low back complaining after stairs or chores", "How you lift, how far you go, and hip strength you can actually keep up"],
      ["Sitting on 94", "A stiff back after the freeway portion of the trip", "Seat position, and standing up to walk a minute before you come in"],
    ],
  },
  whoFor: {
    title: "When the capital-city drive is worth making",
    fitsTitle: "This office is a reasonable match if",
    notFitsTitle: "Do not spend a noon hour on 94 for this",
    fits: [
      "Long meetings in a state office or a downtown firm that have the neck tight by late afternoon",
      "A river walk, a stair-heavy house, or a day of chores that leaves the hips and the low back complaining",
      "You can keep a short routine going between visits, because you will not be here twice a week",
      "You want one careful exam, not a string of brief stops that each require another freeway trip",
    ],
    notFits: [
      "If an arm or leg suddenly will not do what it usually does, go to an emergency department rather than make the 94 trip",
      "Pressure behind the breastbone, or air that feels hard to draw, needs emergency medical care",
      "A temperature, or feeling run-down and ill, plus a sore back, is a medical work-up first",
    ],
  },
  provider: {
    title: "Who is in the exam room",
    body: "On a Saint Paul appointment, Dr. Alan Levitt is the only chiropractor you will see. He earned the degree in 1986 from Northwestern in Bloomington, opened the practice in 1987, and has stayed in this Excelsior Boulevard suite since 1999.",
  },
  faqs: {
    title: "Questions we hear from Saint Paul",
    items: [
      { q: "What does the twelve-mile drive from Saint Paul usually look like?", a: "Budget about twelve miles, ending at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Most drivers stay on Interstate 94 through Minneapolis, then either peel off onto Highway 100 or stay on 394 until the Excelsior Boulevard exit." },
      { q: "Why do you have a page for a city that far away?", a: "We only write these pages for places inside about 15 miles of the office. Saint Paul sits just inside that line, comfortably enough to keep the page, which is why we talk about the drive instead of pretending it is short." },
      { q: "Can you stretch the gap between visits so 94 is not a weekly habit?", a: "Usually, and that is often why people from Saint Paul stay with the plan. You practice a few movements between trips, and the next 94 drive is only scheduled when an in-person check would actually change the routine, or how soon we ask you back." },
      { q: "What if a weekday morning is impossible?", a: "We keep some Saturday times, reserved rather than walk-in. The office number is 952-920-7535; ask whether a weekend opening is still on the book this week." },
    ],
  },
  related: {
    title: "Pages and neighboring cities for a Saint Paul visit",
    links: [
      { href: "/areas-we-serve/saint-paul/cryotherapy", label: "Cryotherapy for Saint Paul", note: "When a new strain is still irritated" },
      { href: "/areas-we-serve/saint-paul/back-pain-treatments", label: "Back pain care", note: "Desks, weekends and the drive" },
      { href: "/areas-we-serve/roseville", label: "Roseville", note: "Along the northern edge of Saint Paul" },
      { href: "/areas-we-serve/maplewood", label: "Maplewood", note: "Another Ramsey County trip" },
      { href: "/areas-we-serve/minneapolis", label: "Minneapolis", note: "On the way along 94" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.saintPaul],
  cta: {
    title: "Book from Saint Paul",
    body: "Name the part of Saint Paul you are driving from, and we will propose an earlier time that usually makes the twelve miles more predictable than a late-afternoon slot on 94.",
  },
};
