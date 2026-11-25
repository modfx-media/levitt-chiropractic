import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const saintLouisPark: PseoHub = {
  slug: "saint-louis-park",
  heroSubtitle:
    "The office is already in Saint Louis Park. From Knollwood or Miracle Mile it is a short hop down Excelsior Boulevard to Suite 201; from the Minneapolis line the same street usually gets you there in minutes.",
  keyFacts: [
    { label: "Location", value: "6200 Excelsior Blvd, Suite 201, Saint Louis Park" },
    { label: "People in the 2020 census", value: "50,010", sourceId: "slp" },
    { label: "Land and water", value: "10.85 square miles", sourceId: "slp" },
    { label: "Main routes", value: "I-394, US 169, Highways 7 and 100", sourceId: "slp" },
  ],
  intro: {
    eyebrow: "Our home city",
    title: "A Saint Louis Park office for Saint Louis Park patients",
    paragraphs: [
      "This is the rare page where we do not have to talk you through a commute from another city. Levitt Chiropractic Center sits at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, in the same city most of our closest patients already call home. People coming from Knollwood or Miracle Mile stay on Excelsior Boulevard; people coming from the Minneapolis side often use Highway 7 or Highway 100 and are still only a few minutes away.",
      "Saint Louis Park is a first-ring suburb of about 50,010 people, covering 10.85 square miles[^slp]. That is small enough that a mid-morning visit can fit between school drop-off and a meeting, and large enough that we still ask which neighborhood you are starting from. A household near the lakes has a different street pattern than one off Highway 100, and the difference shows up in how we schedule the first appointment.",
      "What we see from this city is everyday mechanical strain: a neck that tightens after a day of desk work, a low back that complains after a weekend of yard work, a shoulder that aches after carrying groceries up a flight of stairs in a 1950s rambler. Dr. Alan Levitt has practiced in this community since 1987 and has kept this Excelsior Boulevard office since 1999, so the streets you mention are usually ones he already knows.",
    ],
  },
  atAGlance: {
    title: "Saint Louis Park background",
    items: [
      { label: "Village incorporated", value: "1886; the post office was briefly called Elmwood", sourceId: "slp" },
      { label: "Name", value: "From the Minneapolis and St. Louis Railway, plus “Park” so it would not be confused with St. Louis, Missouri", sourceId: "slp" },
      { label: "Housing boom", value: "Sixty percent of the city's homes went up from the late 1940s to the early 1950s", sourceId: "slp" },
      { label: "Office hours", value: "Weekday mornings, Monday and Thursday afternoons, Saturday by appointment" },
    ],
  },
  localFacts: {
    title: "Local history that still shapes a visit",
    intro: "A few Saint Louis Park facts we use when we explain why the office is where it is, and why so many patients live a few minutes away.",
    cards: [
      {
        title: "A grain elevator people said would burst",
        body: "In 1899 the city became home to the Peavey–Haglin Experimental Concrete Grain Elevator, the world's first concrete tubular grain elevator. Critics nicknamed it “Peavey's Folly” and predicted it would burst like a balloon when the grain was drawn off. It held, and concrete elevators have been used ever since.",
        sourceId: "peavey",
      },
      {
        title: "Minnesota's first shopping center was on this street",
        body: "In the late 1940s, Minnesota's first shopping center — Lilac Way, about 30,000 square feet — was built at the northeast corner of Excelsior Boulevard and Highway 100. It was torn down in the late 1980s, but Miracle Mile (1950) and Knollwood (1956) are still open, and both sit on the same corridor as Suite 201.",
        sourceId: "slp",
      },
      {
        title: "A postwar boom you can still see",
        body: "In 1940 the city had 7,737 residents. By 1955 more than 30,000 new people had moved in, about 6.9 arrivals a day. Most of those ramblers are still here, which is why we hear so much about basement stairs, low workbenches and snow shovels on short driveways.",
        sourceId: "slp",
      },
    ],
  },
  diagram: {
    title: "Around town to Suite 201",
    caption: "A simple sketch of two common local routes. There is no highway trip required if you already live near Excelsior Boulevard.",
    stops: [
      { label: "Knollwood or Miracle Mile", note: "Or the Minneapolis line" },
      { label: "Excelsior Boulevard", note: "The same street as the office" },
      { label: "Highway 100 or Highway 7", note: "If you are crossing town" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 0, note: "Second floor" },
    ],
    legs: ["Stay on Excelsior", "Or hop 100 / 7 for a few exits", "Park and come up to Suite 201"],
  },
  sections: [
    {
      eyebrow: "Same city, still a plan",
      title: "Why a close office still needs a first-visit plan",
      paragraphs: [
        "Living a few minutes away does not make the first visit casual. We still take a history, watch you move, and decide whether chiropractic care is the right next step. The advantage is practical: if we need a short follow-up later in the week, you can often do that without rearranging a whole workday.",
        "It also means we can be more honest about home work. When the office is close, people are sometimes tempted to skip the exercises and just book another visit. We would rather you do two or three movements well at home and come in when there is a reason to reassess. Our {therapeutic exercise|/areas-we-serve/saint-louis-park/therapeutic-exercise} page explains how those plans are built.",
      ],
    },
    {
      eyebrow: "Old houses, everyday strain",
      title: "Ramblers, stairs and snow season",
      paragraphs: [
        "Because so much of the housing stock dates to that single postwar burst, the physical layout of Saint Louis Park life is fairly consistent: split entries, basement laundry, short steep driveways, and garages that were not designed for today's vehicles. Low back and knee complaints after a weekend of carrying baskets up those stairs are common, and they are usually mechanical, not mysterious.",
        "Winter adds a layer. Shoveling a short driveway still loads the same joints, especially if the motion is a twist-and-toss toward the street. We look at how you lift, and we will tell you if the exam suggests something other than a simple strain. If feet or gait are part of the picture, we may also talk through {custom foot orthotics|/areas-we-serve/saint-louis-park/custom-foot-orthotics}.",
      ],
    },
  ],
  process: {
    title: "A first visit when you already live here",
    steps: [
      { title: "Tell us which neighborhood you are coming from", body: "Knollwood, Miracle Mile, the lakes, or the Minneapolis line: it changes how we time the appointment." },
      { title: "Bring ID and any imaging", body: "Photo ID, a short list of what you have already tried, and any recent images. Being close is not a reason to arrive unprepared." },
      { title: "Exam first, treatment second", body: "Dr. Levitt watches you move and explains what he finds before any hands-on care." },
      { title: "A plan you can keep because the office is close", body: "We set a home routine and only schedule the next visit if there is a clear reason for it." },
    ],
  },
  comparison: {
    title: "When to come here, and when to go elsewhere first",
    columns: ["Situation", "Reasonable first stop"],
    rows: [
      ["Stiff neck or low back that built up over days or weeks", "A chiropractic exam at this office is reasonable"],
      ["A recent fall, or a concern about bone density", "See your physician first, then we can talk about a visit here"],
      ["Chest pain, shortness of breath, or pain with a fever", "Emergency care or your physician, not this office first"],
    ],
    note: "If you are unsure, call 952-920-7535 and describe it. We will tell you if you should start somewhere else.",
  },
  whoFor: {
    title: "Who this office already serves in Saint Louis Park",
    fitsTitle: "Common reasons people book",
    notFitsTitle: "Start somewhere else first",
    fits: [
      "Neck and upper-back tightness from desk work",
      "Low back or knee aches after stairs, yards or shoveling",
      "Wanting a short, local visit that fits a weekday morning",
      "A plan that includes home movement, not only office visits",
    ],
    notFits: [
      "New weakness in a leg, or a change in bladder control: that is an emergency-department visit, not a chiropractic one",
      "Pressure in the chest, or trouble catching your breath",
      "A feverish back ache, or weight dropping without a clear reason",
    ],
  },
  provider: {
    title: "A chiropractor who stayed in this city",
    body: "Alan Levitt, D.C., finished at Northwestern College of Chiropractic the year before he opened his practice in 1987. He has used this same Excelsior Boulevard suite as his Saint Louis Park office since 1999, so the local streets patients mention are usually ones he already knows.",
  },
  faqs: {
    title: "Saint Louis Park FAQs",
    items: [
      { q: "Where exactly is the office in town?", a: "6200 Excelsior Blvd, Suite 201, Saint Louis Park. It is on Excelsior Boulevard, the same corridor as Miracle Mile and Knollwood." },
      { q: "Do I need to take a highway to get there?", a: "Not if you already live near Excelsior Boulevard. From other parts of the city, Highway 100 and Highway 7 are the usual connectors." },
      { q: "Can I come in on a lunch break?", a: "Often, yes, because the trip is short. Call 952-920-7535 and we will look for a mid-day opening that still leaves you time for the exam." },
      { q: "Do you see people who work in Saint Louis Park but live somewhere else?", a: "Yes. Tell us both addresses so we can pick a time that fits the real trip, not only the one on the calendar." },
      { q: "I can walk or bike from my neighborhood. Which streets actually make sense?", a: "It depends on where you start. From the lakes or from the Minneapolis line, people often use the parkway and then cut over toward Excelsior Boulevard. From Knollwood or Miracle Mile, Excelsior itself is already the street. The trail system through town is useful in good weather, but it does not end at our door, so plan a short street finish. Tell us the neighborhood and we will be specific." },
      { q: "I have lived here for years and never noticed Suite 201. Is the building easy to miss?", a: "It is on Excelsior Boulevard at number 6200, and the office is on the second floor, so it is not a storefront you glance into from the car. Once you have been here, the entrance is obvious. If it is your first time, leave an extra few minutes for parking and the stairs, and call 952-920-7535 if you cannot see the door." },
      { q: "What is the usual reason a neighbor books after putting it off?", a: "Most often it is a stiff neck or a low back that has been building through a local week — desk work, a yard, the stairs, shoveling — and finally got in the way of a walk or a night of sleep. Because the office is in the same city, people sometimes wait longer than they would if they already had a long drive on the calendar. We would rather see you while the problem is still a nuisance than after it has taken over the week." },
      { q: "I already know the Miracle Mile and Knollwood stretch. Do I still need directions?", a: "You probably do not need a map, but you do need the suite number. We are at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, on that same boulevard, not in the shopping centers themselves. If you are coming from the centers, say so; the last block is short, and parking is at the building rather than in a mall ramp." },
      { q: "I have been driving past the building for years. What should I know about the first visit that a neighbor might not guess?", a: "The first visit is a history and a hands-on exam, not a hurried hello, even though you live in the same city. Arrive a few minutes early so the paperwork does not eat the exam. Bring a short list of what you have already tried at home or elsewhere, and any images you already have. You will see Dr. Levitt, not a rotating associate, and you will leave with a clear recommendation, including if this is not the right first stop." },
      { q: "Is the office closed at lunch, or can a local worker come in the middle of the day?", a: "Monday and Thursday have afternoon hours, 2:30 to 5:30, which is the usual fit for someone who works nearby and cannot come at 8:30. Tuesday, Wednesday and Friday are morning clinic, and Wednesday does not start until 10. There is no drop-in lunch list. Call 952-920-7535 and we will put you in an actual opening." },
      { q: "Do neighbors ever use the regional trail to get here?", a: "In warmer months, yes, some do, especially from the Minneapolis line or from the lakes. The trail system through Saint Louis Park is real and useful, but it still leaves you with a short street section to the door. Wear what you can sit in for the exam, or bring a change, and tell us you are coming that way so we are not surprised if you arrive a little warm." },
      { q: "I walk to work along Excelsior Boulevard already. Can I do the same for an appointment?", a: "If you already walk that boulevard, yes, the suite is on the same street at number 6200. Give yourself a little extra time for the second floor and for arriving not overheated. If the weather is poor, the drive is short enough that walking is a preference, not a requirement. Either way, book the slot; we do not keep a walk-in chair by the door." },
      { q: "What if I only want advice on whether this office is even the right first stop?", a: "Call 952-920-7535 and describe what has been going on. We will tell you if you should start with your physician or with an exam here. That conversation is free, and it is the right thing to do if you live close and are simply not sure." },
    ],
  },
  related: {
    title: "More for Saint Louis Park",
    links: [
      { href: "/areas-we-serve/saint-louis-park/back-pain-treatments", label: "Back pain care in Saint Louis Park", note: "The most common reason people book" },
      { href: "/areas-we-serve/saint-louis-park/therapeutic-exercise", label: "Therapeutic exercise", note: "Home routines between visits" },
      { href: "/areas-we-serve/edina", label: "Edina", note: "Just over the city line" },
      { href: "/areas-we-serve/hopkins", label: "Hopkins", note: "Along Excelsior Boulevard" },
      { href: "/areas-we-serve/golden-valley", label: "Golden Valley", note: "A short run up Highway 100" },
      { href: "/contact", label: "Contact", note: "Hours, phone and directions" },
    ],
  },
  sources: [SRC.slp, SRC.peavey, SRC.slpCity],
  cta: {
    title: "Book a Saint Louis Park visit",
    body: "Tell us which part of the city you are coming from, and we will find a time that fits a short local trip.",
  },
};
