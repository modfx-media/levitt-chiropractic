import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const shoreview: PseoHub = {
  slug: "shoreview",
  heroSubtitle:
    "Shoreview is the Ramsey County city of Turtle, Snail, Owasso, and Island lakes, with a community center on Victoria Street that keeps two indoor water parks running all winter. Our door is roughly 14 miles away, and for most households the drive is Lexington or Victoria down to 694, then west and south.",
  keyFacts: [
    { label: "Victoria Street to our door", value: "Roughly 14 miles" },
    { label: "Counted in 2020", value: "26,921 residents", sourceId: "shoreview" },
    { label: "Residents 65 and over", value: "21.2 percent in the 2020 count", sourceId: "shoreview" },
    { label: "Lakes inside the city", value: "Seven, with Rice Creek crossing the northwest corner", sourceId: "shoreview" },
  ],
  intro: {
    eyebrow: "Shoreview, north of Saint Paul",
    title: "A second-ring suburb organized around lakes, parks, and one busy community center",
    paragraphs: [
      "Shoreview counted 26,921 people in the 2020 census, spread over about 12.67 square miles, and close to two of those square miles are water[^shoreview]. Seven lakes sit inside the city line. Turtle, Snail, Owasso, and Island are the big ones, and Rice Creek cuts through the northwest corner[^shoreview]. The city says it runs 16 parks holding more than 1,400 acres of park and open space[^shoreview-city]. When someone from Shoreview tells us about their week, a lake loop or a park trail is usually somewhere in it.",
      "The age mix matters to how we pace a first appointment. In that same 2020 count the median age was 43.3, and slightly more than one resident in five was 65 or older[^shoreview]. A Shoreview first visit might be a grandparent who wants to keep walking the Snail Lake path, or a retiree whose mornings revolve around lap swim. Either way, we take the time to watch how you get on and off the table, and we do not rush the history to fit a clock.",
      "City Hall is at 4600 Victoria Street North, and the community center is next door at 4580[^shoreview-city][^shoreview-tropics]. Interstate 35W, Interstate 694, and County Highway 96 carry most of the traffic in and out[^shoreview]. Coming to us, the usual pattern is a short run south on Lexington or Victoria, westbound 694, then Highway 100 south. The last stretch is Excelsior Boulevard, and the suite is upstairs at 6200 Excelsior Blvd, Suite 201, Saint Louis Park.",
      "Roughly fourteen miles is near the outer edge of the area we serve. We say that plainly because it shapes the advice. A trip from Shoreview should be worth a morning, so the first visit is built to answer one question: is this something we can help with, and what would that look like. If the answer is no, you will hear it on day one.",
    ],
  },
  atAGlance: {
    title: "Shoreview, quickly",
    items: [
      { label: "Biggest lakes", value: "Turtle, Snail, Owasso, and Island", sourceId: "shoreview" },
      { label: "Community center", value: "4580 Victoria St N, home to Tropics and Bamboo Bay", sourceId: "shoreview-tropics" },
      { label: "City parks", value: "16 parks, more than 1,400 acres of park and open space", sourceId: "shoreview-city" },
      { label: "Snail Lake section", value: "4191 Snail Lake Blvd, a Ramsey County regional park", sourceId: "vadnais-snail" },
    ],
  },
  figure: {
    src: "/images/therapeutic-exercise.jpg",
    alt: "An older man practicing a resistance-band movement while a clinician coaches him",
    caption: "Many Shoreview mornings are a lake loop or lap swim. We coach the home movements in the room, at the pace you would actually do them at home.",
    width: 1095,
    height: 730,
  },
  localFacts: {
    title: "Three Shoreview details that come up during a first visit",
    cards: [
      {
        title: "The Snail Lake trail has spent years under high water",
        body: "Ramsey County's own study of the park describes rising surface and groundwater around Snail and Grass lakes, mostly between 2014 and 2021, which flooded trails until a 2021 drought pulled the water back[^snail-trail-study]. The county studied rebuilding about 1,700 linear feet of that path, raised or on boardwalk[^snail-trail-study]. For a walker this is practical: a loop that used to be flat pavement may have had detours, soft shoulders, or a different surface. Tell us which loop you walk and whether it has changed.",
        sourceId: "snail-trail-study",
      },
      {
        title: "Tropics is a full-size indoor water park, not a lap lane in a basement",
        body: "The community center's Tropics water park holds up to 350 people and includes a waterslide, water basketball and volleyball, and a whirlpool for adults[^shoreview-tropics]. Bamboo Bay, a second indoor water park, is in the same building[^shoreview-city]. That means some Shoreview parents spend Saturday afternoons standing on a warm, wet deck, carrying a toddler up and down the slide steps, then drive home stiff. It is a different load than a weekday desk, and the home routine should reflect it.",
        sourceId: "shoreview-tropics",
      },
      {
        title: "A Ramsey County regional park sits inside the city",
        body: "Snail Lake belongs to Vadnais-Snail Lakes Regional Park, which Ramsey County runs from 5 a.m. to 11 p.m., with a swimming beach, a boat launch, a large playground, and hiking and biking trails at 4191 Snail Lake Boulevard[^vadnais-snail]. Those hours leave room for an early walk or an evening paddle. If you launch a kayak or carry a paddleboard down to the water, mention it. Lifting a boat off a roof rack is a specific movement and we can look at it directly.",
        sourceId: "vadnais-snail",
      },
    ],
  },
  diagram: {
    title: "Victoria Street to Excelsior Boulevard",
    caption: "A sketch of the usual route, not live traffic. The common path drops south to 694, runs west, turns south on Highway 100, and ends up on Excelsior Boulevard. Roughly 14 miles in all; weekday afternoons on 694 can stretch it.",
    stops: [
      { label: "City Hall area on Victoria Street", note: "Or any lake street in Shoreview" },
      { label: "Interstate 694, westbound", note: "Entered from Lexington or Victoria" },
      { label: "Highway 100, southbound", note: "Through Golden Valley and Saint Louis Park" },
      { label: "Suite 201, Excelsior Boulevard", note: "Parking beside the building" },
    ],
    legs: ["South to 694", "West across the north metro", "100 south to the boulevard"],
  },
  sections: [
    {
      eyebrow: "Lake loops and lap lanes",
      title: "Most Shoreview weeks have a walking or swimming habit we want to protect",
      paragraphs: [
        "The goal for many people who drive down from Shoreview is not dramatic. They want to keep doing the thing they already do: three laps of Snail Lake before breakfast, a lap-swim block at Tropics, a bike ride on one of the park trails, a game of pickleball with the same group every Tuesday. When that habit starts to hurt, the worry is less about the pain itself and more about losing the routine. We build the first visit around that routine, because it is usually the best measure of whether care is working.",
        "So we ask specific questions. How long is the loop. Is it paved, gravel, or boardwalk right now. Do you swim freestyle, breaststroke, or mostly walk in the shallow end. Do you turn your head to one side to breathe. A stiff neck that shows up after lap swim and a stiff neck that shows up after an hour on 694 can feel identical to you, and still point us toward different home movements.",
        "If the problem is mostly in the feet or the way you walk, {custom foot orthotics|/custom-foot-orthotics} may come up. If not, we leave it alone. The general background on our approach lives on the {therapeutic exercise page|/therapeutic-exercise}; this page is about Shoreview, and the service pages carry the clinical detail.",
      ],
    },
    {
      eyebrow: "Two movements for the walk back to the car",
      title: "A routine you can do on a dock, a pool deck, or a park bench",
      paragraphs: [
        "For walkers we usually teach a standing calf and hip sequence you can do with one hand on a park bench, and a slow trunk rotation that takes about a minute. For swimmers we tend to choose a shoulder-blade squeeze you can do while standing in chest-deep water, and a chin glide done against the pool wall before you get out. We rehearse both in the office until you can do them without looking at a sheet.",
        "We would rather you leave with two movements you will actually do on the Snail Lake path than a printed program of ten that ends up on the counter. If a second visit makes sense, we will say so and suggest a morning that avoids the busiest 694 hours. If it does not, we will tell you that too.",
      ],
    },
  ],
  process: {
    title: "How a Shoreview appointment usually runs",
    intro: "Nothing exotic. The order is chosen so a 14-mile drive gets a real answer.",
    steps: [
      {
        title: "Choose a weekday morning, ideally after the 694 rush",
        body: "The office opens every weekday at 8:30 a.m. and runs until 11:30, except Wednesday, when hours are 10 a.m. to noon. There is also afternoon time on Monday and Thursday, from 2:30 until 5:30. From Shoreview, a ten o'clock start usually means the westbound 694 traffic has eased. Saturday visits are by appointment when they can be arranged.",
      },
      {
        title: "Tell us the habit, not just the symptom",
        body: "When you book, mention the routine that has been interrupted: the lake loop, the lap swim, the Saturday at the water park, the paddleboard. The intake forms can be downloaded from the new patient center and filled in at home, so the first fifteen minutes upstairs are not spent writing.",
      },
      {
        title: "A full history and a look at how you move",
        body: "Dr. Levitt asks about the routine, then watches you do a version of it: a few steps, a reach overhead, a turn of the head as if breathing to one side. Hands-on care is used only when it fits what he finds. If the history points toward a physician visit before any treatment, he will say so up front.",
      },
      {
        title: "Practice the pair, then decide together about next time",
        body: "You will practice the two home movements in the room. Then we talk honestly about whether a return visit would add anything, and if so, roughly how many. You drive back up 100 knowing the plan.",
      },
    ],
  },
  comparison: {
    title: "Is a Shoreview-to-Saint Louis Park trip the right first step?",
    intro: "A rough guide. Call if your situation does not fit neatly.",
    columns: ["What you are noticing", "Where to start"],
    rows: [
      ["Stiffness after lake walks, lap swim, a long 694 drive, or a weekend carrying kids through Tropics", "A planned visit here makes sense. Bring the details of the routine."],
      ["Your physician is already monitoring bone density, or a specialist is managing the same area of your spine", "Talk to that physician first, then we can coordinate if they agree a visit makes sense."],
      ["New weakness in an arm or leg, chest discomfort, a fever with back pain, or changes in bladder control", "Do not drive across the metro to see us. Go to urgent or emergency care, or call 911."],
    ],
    note: "Unsure which row fits? Phone 952-920-7535 and talk it through with us first.",
  },
  whoFor: {
    title: "Who makes the drive from Shoreview",
    fitsTitle: "Common reasons Shoreview residents book",
    notFitsTitle: "Better to see someone else first",
    fits: [
      "Walkers whose lake loop has started to leave the hips or low back sore",
      "Lap swimmers with a neck or shoulder that tightens on the breathing side",
      "Parents and grandparents who spend weekends lifting children at the water park or the beach",
      "Older residents who want an unhurried exam and a short, clear home plan",
    ],
    notFits: [
      "Numbness or weakness that is spreading over hours or days",
      "Any loss of bladder or bowel control",
      "Back or neck pain together with fever, night sweats, or unexplained weight loss",
    ],
  },
  provider: {
    title: "One doctor, from the first question to the last visit",
    body: "Every Shoreview appointment is with Dr. Alan Levitt. He graduated from Northwestern College of Chiropractic in December 1986, began practicing in 1987, and has been in this Excelsior Boulevard office since 1999. If you come back, you see him again, not whoever happens to be free. For a 14-mile trip, that continuity is most of the point.",
  },
  faqs: {
    title: "Shoreview questions",
    items: [
      { q: "How far is the office from Shoreview City Hall?", a: "Roughly 14 miles from 4600 Victoria Street North. Most people take 694 west and Highway 100 south, then Excelsior Boulevard. Mid-morning is usually the smoothest time to drive it." },
      { q: "I swim at the community center. Should I come before or after a swim?", a: "Either is fine, but tell us which. If your neck or shoulder is worst right after a lap block, an appointment the same morning lets Dr. Levitt see it closer to how it actually behaves." },
      { q: "My usual Snail Lake loop has been rerouted. Does that matter?", a: "It can. Ramsey County has documented flooded sections and studied rebuilding part of that trail. A detour onto grass or an uneven shoulder is worth mentioning, because the surface changes how the hips and feet are loaded." },
      { q: "I am in my seventies. Is the exam gentle enough?", a: "The pace is set by you. Ask Dr. Levitt to explain any step before he does it, and nothing is done that you have not agreed to. If getting on and off the table is slow, that is fine; the appointment is not run on a stopwatch." },
      { q: "Can I book a Saturday?", a: "Saturdays are by appointment only. Call and ask; if one is open, it can be a good option for a Shoreview drive with no rush-hour traffic." },
      { q: "Do you offer visits closer to Shoreview?", a: "No. There is one office, upstairs on Excelsior Boulevard in Saint Louis Park. That is why we try to make the first visit count." },
    ],
  },
  related: {
    title: "More for Shoreview",
    links: [
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "How we choose and teach the home movements" },
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "Only if walking is clearly the issue" },
      { href: "/new-patient-center", label: "New patient center", note: "Forms to fill in before the drive" },
      { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "Background on the doctor you will see" },
      { href: "/areas-we-serve/arden-hills", label: "Arden Hills", note: "The neighbor to the west along 694" },
      { href: "/areas-we-serve/roseville", label: "Roseville", note: "South along Lexington and Victoria" },
    ],
  },
  sources: [SRC.shoreview, SRC.shoreviewCity, SRC.shoreviewTropics, SRC.vadnaisSnail, SRC.snailTrailStudy],
  cta: {
    title: "Book from Shoreview",
    body: "Call 952-920-7535 or send the request form. Tell us which routine you are trying to keep, whether it is a lake loop, lap swim, or weekends at the water park, and we will look for a mid-morning time that misses the worst of 694.",
  },
};
