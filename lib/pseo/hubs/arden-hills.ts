import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const ardenHills: PseoHub = {
  slug: "arden-hills",
  heroSubtitle:
    "Arden Hills sits in Ramsey County around the junction of I-694 and I-35W, with Bethel University inside the city and the University of Northwestern campus on the Roseville line. From City Hall on Highway 96 the trip is about 12 miles, usually west on 694, then south on Highway 100 to Excelsior Boulevard.",
  keyFacts: [
    { label: "From Highway 96", value: "About 12 miles", sourceId: "arden-hills-city" },
    { label: "2020 census", value: "9,939 people", sourceId: "arden-hills" },
    { label: "Water", value: "About 12 percent of the city is water", sourceId: "arden-hills" },
    { label: "Usual roads", value: "I-694 west to Highway 100, then south to Excelsior Boulevard" },
  ],
  intro: {
    eyebrow: "Arden Hills, at 694 and 35W",
    title: "A Ramsey County city of campuses, corporate offices, and a former arsenal site",
    paragraphs: [
      "Arden Hills lies in Ramsey County north of Roseville. The 2020 census counted 9,939 people; a later estimate put the number near 9,490 in 2024[^arden-hills]. Bethel University and its seminary are inside the city, and the campus of University of Northwestern – St. Paul straddles the Arden Hills–Roseville border[^arden-hills]. The headquarters of Land O'Lakes and of Catholic United Financial are here, and Boston Scientific also has a campus in the city. The weeks people describe are often built around those places: a college calendar, a corporate corridor between buildings, or both in the same household.",
      "Interstate 35W, Interstate 694, U.S. Highway 10, Minnesota Highway 51 (Snelling Avenue), and County Highway 96 are the main routes[^arden-hills]. City Hall is at 1245 West Highway 96[^arden-hills-city]. The north third of the city still carries the footprint of the Twin Cities Army Ammunition Plant. In 2013 Ramsey County bought 427 acres of that former plant, and in 2014 the project was renamed Rice Creek Commons[^rice-creek-commons]. The City of Arden Hills, which is a partner on the work, notes that early site preparation for a new Rice Creek Boulevard is expected in fall 2026, with heavier construction later[^tcaap-city]. If that project changes your usual 694 or 96 run, say so when you book. We would rather move the appointment than have you sit in a temporary backup.",
      "The office is about 12 miles from City Hall. Most people take 694 west to Highway 100, then drop south and finish at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Twelve miles is inside our range and is a planned trip, not a stop you squeeze between meetings. A late-morning opening usually beats the 694 and 35W interchange at the end of a campus day.",
      "About 11.82 percent of the city's area is water[^arden-hills]. This is not a page about one famous lake. If a shoreline or a creek path is in your week, we will ask which water and how far. If it is not, the exam will stay on the desk, the corridor, and the interchange, which is how most Arden Hills days actually run.",
    ],
  },
  atAGlance: {
    title: "Arden Hills notes",
    items: [
      { label: "Bethel University", value: "The university and its seminary are inside the city", sourceId: "arden-hills" },
      { label: "University of Northwestern", value: "The campus sits on the Arden Hills–Roseville line", sourceId: "arden-hills" },
      { label: "Rice Creek Commons", value: "427 acres of the former ammunition plant, now a county-city redevelopment", sourceId: "rice-creek-commons" },
      { label: "City Hall", value: "1245 West Highway 96, Arden Hills, MN 55112", sourceId: "arden-hills-city" },
    ],
  },
  figure: {
    src: "/images/3d-spine-simulator.jpg",
    alt: "A clinician reviewing spinal anatomy on a display during a visit",
    caption: "A Land O'Lakes or Boston Scientific desk week and a Bethel or Northwestern campus week do not ask the same things of a neck. The history has to name which one you actually had.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Arden Hills facts that change the commute and the chair",
    cards: [
      {
        title: "Rice Creek Commons is 427 acres of the old ammunition plant",
        body: "Ramsey County purchased a 427-acre parcel of the former Twin Cities Army Ammunition Plant in 2013 and renamed the site Rice Creek Commons in 2014, with a plan for housing, a town center, and jobs[^rice-creek-commons]. The city's own page on the project points to early Rice Creek Boulevard site work in fall 2026 and construction expected in 2027 and 2028[^tcaap-city]. That is a commute fact, not a medical one. If your usual 694, 10, or 96 path starts to crawl because of that work, tell us so we can pick a time that still makes the twelve miles predictable.",
        sourceId: "tcaap-city",
      },
      {
        title: "Two campuses, two calendars, one city line",
        body: "Bethel University sits in Arden Hills. University of Northwestern – St. Paul sits on the border with Roseville[^arden-hills]. Staff, faculty, and students describe weeks that are a mix of classroom or office chairs, walks between buildings, and a 694 or Snelling sit. Those weeks are not the same as a corporate campus week, even when the mileage to our office is identical. Name the campus when you call.",
        sourceId: "arden-hills",
      },
      {
        title: "Land O'Lakes and Boston Scientific make this a corridor-and-chair city",
        body: "The city is also home to major corporate campuses, including Land O'Lakes and Boston Scientific[^arden-hills]. People who work those sites often spend the day moving between a desk and a long interior hallway, then sit on 694. We ask how much of the day is the chair and how much is the corridor, because a hallway-walking plan and a monitor-height plan are not the same homework.",
        sourceId: "arden-hills",
      },
    ],
  },
  diagram: {
    title: "Highway 96 to the boulevard",
    caption: "This drawing marks the usual west-then-south path; it is not a traffic feed. People typically leave near City Hall on Highway 96, join I-694, and arrive on Excelsior Boulevard. The distance is about 12 miles; the 694 and 35W interchange can add a chunk of time when it is heavy.",
    stops: [
      { label: "1245 West Highway 96, or your own starting point", note: "Campus, corporate entrance, or a residential street" },
      { label: "Westbound I-694", note: "The interchange with I-35W is on this side of the trip" },
      { label: "Highway 100, heading south" },
      { label: "Our suite, upstairs on the boulevard", note: "The lot is beside the building" },
    ],
    legs: ["Onto 694", "West, then 100 south", "The boulevard, then the stairs"],
  },
  sections: [
    {
      eyebrow: "Campus, corridor, interchange",
      title: "An Arden Hills week is often two sits, and we need to know which one is louder",
      paragraphs: [
        "The daytime sit is usually a classroom, a corporate desk, or a conference table. The evening sit is the 694 run, sometimes with a US-10 or Snelling leg attached. We ask which of those starts the tightness, and whether a walk between buildings is helping or making the mid-back angrier. A campus-calendar week and a corporate-corridor week can look similar on a map and still need different homework.",
        "If a shoreline walk or a creek path is clearly a shoe-and-foot problem, {custom foot orthotics|/areas-we-serve/arden-hills/custom-foot-orthotics} can enter the conversation. If it is not, we will not add that topic to fill the visit. The {exercise page|/therapeutic-exercise} is there if you want the reasoning. The plan is the chair-and-corridor pair already practiced here.",
      ],
    },
    {
      eyebrow: "What goes back up 100 and 694",
      title: "A chair-and-corridor routine that can be done between meetings",
      paragraphs: [
        "For a desk-and-conference week we usually teach a shoulder-blade setting you can do with your hands on a table edge, and a hip opener you can do while still in the chair, one side at a time, without getting on the floor. For the interchange, we add a two-minute walk around the building or around the lot before you get back on 694, not a long program you will abandon by Thursday. Both are rehearsed here. If another appointment would earn the drive, we will search for a morning time that is not the 694 dusk crush, especially if Rice Creek Boulevard work has started to slow Highway 96.",
      ],
    },
  ],
  process: {
    title: "Timing a twelve-mile Arden Hills appointment around 694",
    steps: [
      {
        title: "Aim for a late-morning gap that is not the 694 and 35W stack",
        body: "Morning clinic is the default: half past eight until half past eleven, Monday through Friday, with Wednesday opening two hours later and closing at noon. Afternoons exist only on Monday and Thursday, starting at 2:30 and ending at 5:30. From Arden Hills, a late-morning departure on 694 is usually the cleaner twelve miles. That later reopening can work if a campus or corporate day finishes early, but it is the slot that most often meets the interchange at its worst.",
      },
      {
        title: "Name the week: Bethel, Northwestern, a corporate campus, or a street off 96",
        body: "Those starting points do not feed 694 in the same way, and they do not describe the same chair. If Rice Creek Commons work is already changing your usual path, say that too. Forms can go out in advance so the first minutes in the suite are not spent on paperwork.",
      },
      {
        title: "History first, then we watch how you turn in a chair and stand after a long sit",
        body: "The exam starts with the story of the week and a look at the movements you already do: turning at a conference table, standing after an hour in one seat, walking the way you walk between buildings. Manual work is added only if it belongs. If a physician needs to see you before anyone here works with their hands, you will hear that before you get back on 100.",
      },
      {
        title: "Rehearse the table-edge and chair-based pair, then hear whether a return trip is justified",
        body: "The two moves are practiced against a table and in a chair in this room, which is the furniture they are meant for. You will also leave with a direct answer on whether another 12 miles is a good use of a morning.",
      },
    ],
  },
  comparison: {
    title: "When a twelve-mile trip from Arden Hills is the right first call",
    columns: ["The pattern this month", "A reasonable first stop"],
    rows: [
      ["A stiff neck or an upper back after a Land O'Lakes, Boston Scientific, Bethel, or Northwestern week, or after the 694 sit", "Booking a planned exam in this office is a reasonable first step"],
      ["Your physician is already following bone density, or you were seen in urgent care this week for the same spinal complaint", "Keep that conversation where it started until your physician is comfortable having us examine you next"],
      ["Chest pain, breath that will not fill, or a spine that arrived together with a fever", "Bypass 694 and go to urgent or emergency care; do not spend the morning on the interchange to reach this suite"],
    ],
    note: "If the pattern is not clear, reach us at 952-920-7535 before you join 694.",
  },
  whoFor: {
    title: "Who already comes down 694 to this office",
    fitsTitle: "Reasons Arden Hills residents book",
    notFitsTitle: "Start in a different office first",
    fits: [
      "A stiff neck after a corporate-campus desk and corridor week",
      "Stiffness after a Bethel or Northwestern calendar of chairs, classrooms, and walks between buildings",
      "A neck that seizes up on the 694 or Highway 96 sit and eases only after you get out of the car",
      "Residents who will spend twelve miles so the case stays with one doctor",
    ],
    notFits: [
      "A limb that has gone weak over a short span of time, or a new change in bowel or bladder control",
      "Pain or pressure in the chest, or breathing that feels wrong",
      "A fever with a stiff spine, or weight falling off without a reason you already know",
    ],
  },
  provider: {
    title: "The same person after the interchange, including the second visit",
    body: "Dr. Alan Levitt takes the Arden Hills appointments himself. His chiropractic diploma is from 1986. He began seeing patients in 1987, and 1999 is the year the practice settled into Suite 201. Twelve miles is long enough that a rotating roster would waste the drive. The exam and any later visit stay with him.",
  },
  faqs: {
    title: "Arden Hills questions",
    items: [
      { q: "What is the mileage from City Hall on Highway 96?", a: "About 12 miles from 1245 West Highway 96. The route most people use is I-694 west to Highway 100 south, then Excelsior Boulevard in Saint Louis Park." },
      { q: "I work on a corporate campus off 10 or 694. When should I leave?", a: "A mid-morning weekday time is usually the one that misses the interchange at its busiest. If the workday finishes early, the Monday or Thursday later clinic is available, but it is the tighter of the two options from this city." },
      { q: "Will Rice Creek Commons construction change the drive?", a: "It can, once site work and later boulevard construction are underway. The city's project page points to early preparation in fall 2026 and heavier work in 2027 and 2028. If your usual 694, 10, or 96 path is already slower, mention it when you schedule so we can pick a slot that still keeps the twelve miles predictable." },
      { q: "I am a student or staff member at Bethel. Does that change the first visit?", a: "It changes the history, not the clinician. Tell us whether the week is mostly classroom chairs, office chairs, or walks between buildings, and whether you are coming from the Bethel campus or from a residential street. The exam is built around that week." },
      { q: "Who does the exam?", a: "Dr. Levitt. He also does any later visit." },
    ],
  },
  related: {
    title: "Related Arden Hills pages",
    links: [
      { href: "/areas-we-serve/arden-hills/custom-foot-orthotics", label: "Orthotics for Arden Hills", note: "When a campus walk or a shoreline path is loading the feet" },
      { href: "/areas-we-serve/arden-hills/back-pain-treatments", label: "Back-pain care, Arden Hills", note: "Background on the service, not a verdict on your week" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Why we send home a chair-and-corridor pair" },
      { href: "/new-patient-center", label: "New patient center", note: "Forms and arrival notes for a 694 trip" },
      { href: "/areas-we-serve/roseville", label: "Roseville", note: "The neighbor that shares the Northwestern campus line" },
      { href: "/areas-we-serve/fridley", label: "Fridley", note: "West along the 694 corridor" },
    ],
  },
  sources: [SRC.ardenHills, SRC.ardenHillsCity, SRC.bethel, SRC.riceCreekCommons, SRC.tcaapCity],
  cta: {
    title: "Book from Arden Hills",
    body: "Reach us at 952-920-7535, or fill in the request form. Name whether the louder problem is a campus week, a corporate corridor, or the 694 sit. We will hold a late-morning opening when one is free.",
  },
};
