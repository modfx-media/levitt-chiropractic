import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const edenPrairie: PseoHub = {
  slug: "eden-prairie",
  heroSubtitle:
    "Eden Prairie is a Hennepin County city where I-494 and Highways 212, 62, 169, and 5 meet, with Flying Cloud Airport inside the city limits. From mid-town Eden Prairie, the trip here is about 10 miles, usually on 494 or 212 and then toward Excelsior Boulevard. That is the shortest drive in this batch of western suburbs, and we still treat it as a planned visit.",
  keyFacts: [
    { label: "Trip from mid-town", value: "About 10 miles on 494 or 212", sourceId: "eden-prairie-about" },
    { label: "2020 census", value: "64,198 people", sourceId: "eden-prairie-census" },
    { label: "Roads that meet here", value: "I-494 and Highways 212, 62, 169, and 5", sourceId: "eden-prairie-econ" },
    { label: "Flying Cloud Airport", value: "A reliever airport inside the city", sourceId: "eden-prairie-econ" },
  ],
  intro: {
    eyebrow: "Eden Prairie, where the western highways converge",
    title: "A ten-mile trip from a city built around 494, 212, and Flying Cloud",
    paragraphs: [
      "The City of Eden Prairie says it was named in the mid-1800s as a garden spot in the new territory, was established in 1858, and stayed a small village until Flying Cloud Airport and Highway 494 brought homes and businesses in the mid-1900s[^eden-prairie-about]. The 2020 census counted 64,198 people[^eden-prairie-census]. The city’s economic-development page notes that I-494 and Highways 212, 62, 169, and 5 converge in the heart of town, and that Flying Cloud Airport is inside the city, for personal and corporate aircraft[^eden-prairie-econ].",
      "That history is useful in the exam because it explains the week: a city that stayed small until a reliever airport and a beltway arrived still has nearly 10,000 acres set aside for parks and open space[^eden-prairie-about], and it also has a knot of numbered highways in the same town[^eden-prairie-econ]. We ask whether this month was spent more on those highways, more around Flying Cloud, or more on a mapped path at Staring Lake or Purgatory Creek[^eden-prairie-maps], rather than treating “Eden Prairie” as one load.",
      "Flying Cloud as a reliever airport inside the city limits is a traffic fact, not a treatment claim[^eden-prairie-econ]. A week spent on the airport roads can be stop-and-start even when 494 itself is moving, and that is a different first history than a loop at Staring Lake.",
      "That convergence is why we ask which of those roads you actually sit on. A 494 week, a 212 week, and a week that includes the airport roads are not the same neck, even if all three start in Eden Prairie. Tell us the ramp you use, not only the city name.",
      "You are coming to 6200 Excelsior Boulevard, suite 201, in Saint Louis Park — about 10 miles from mid-town Eden Prairie. Most drivers stay on I-494 or Highway 212 and then work toward the boulevard. Ten miles is shorter than the Chanhassen or Orono trip, but a slow merge on 494 can still spend the margin if you book into the afternoon peak.",
      "The city’s about page also says nearly 10,000 acres in Eden Prairie are designated for parks and open space[^eden-prairie-about]. The city’s own park maps list Staring Lake and Purgatory Creek among the places residents actually walk[^eden-prairie-maps]. If those paths are in your week, tell us the surface, roughly how far you went, and whether the ache starts on the loop or the next morning.",
    ],
  },
  atAGlance: {
    title: "Eden Prairie, as the city publishes it",
    items: [
      { label: "How the city grew", value: "Established 1858; Flying Cloud and Highway 494 shaped the modern town", sourceId: "eden-prairie-about" },
      { label: "The highway knot", value: "I-494 and Highways 212, 62, 169, and 5 meet in the heart of the city", sourceId: "eden-prairie-econ" },
      { label: "Parks and open space", value: "Nearly 10,000 acres designated, including lakes and trail systems the city maps", sourceId: "eden-prairie-about" },
    ],
  },
  figure: {
    src: "/images/chronic-lower-back-pain.jpg",
    alt: "A person receiving hands-on low-back care on a treatment table",
    caption: "An Eden Prairie week may be a 494 or 212 sit, a loop at Staring Lake or Purgatory Creek, or time on the roads around Flying Cloud. The exam is how we tell those loads apart.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Eden Prairie facts that belong in the first history",
    cards: [
      {
        title: "Five numbered highways meet in the same city",
        body: "The city’s economic-development page lists I-494 and Highways 212, 62, 169, and 5 as the thoroughfares that converge in Eden Prairie[^eden-prairie-econ]. People who use 169 to 494 describe a different sit than people who stay on 212, or who use Highway 5. When you book, name the one you actually drive.",
        sourceId: "eden-prairie-econ",
      },
      {
        title: "Flying Cloud is in the city, not a neighboring town",
        body: "The same city page states that Flying Cloud Airport is located in Eden Prairie and serves personal and corporate aircraft[^eden-prairie-econ]. If you work around the airport, or your usual roads run along the field, the extra traffic and the stop-and-start belong in the history. We will not treat that as a generic 494 commute.",
        sourceId: "eden-prairie-econ",
      },
      {
        title: "Ten thousand acres of parks is not one trail",
        body: "The city says nearly 10,000 acres are designated for parks and open space, with lakes and beaches as part of that picture[^eden-prairie-about]. Staring Lake and Purgatory Creek show up on the city’s own park maps[^eden-prairie-maps]. A short paved loop and a longer conservation-area walk load a hip differently. Name the place you actually use.",
        sourceId: "eden-prairie-about",
      },
      {
        title: "Highway 62 and Highway 169 are in the same official list",
        body: "The economic-development page names I-494 and Highways 212, 62, 169, and 5 in one list of thoroughfares that meet in town[^eden-prairie-econ]. A sit on 169 is not a sit on 62, and neither is automatically a 494 merge. The first history should name the number you actually used, because those five roads do not leave the neck in the same place.",
        sourceId: "eden-prairie-econ",
      },

      {
        title: "City Hall sits at 8080 Mitchell Road",
        body: "The city’s about page lists City Hall at 8080 Mitchell Road, Eden Prairie, with the main civic number 952-949-8300[^eden-prairie-about]. That civic address is a useful landmark, not the start of every ten-mile trip. A departure from Mitchell Road, one from the Flying Cloud roads, and one that drops onto 494 closer to the eastern edge are not the same merge.",
        sourceId: "eden-prairie-about",
      },
      {
        title: "More than 2,800 businesses, and not all of them sit on 494",
        body: "The about page also counts more than 2,800 businesses in Eden Prairie, alongside a population it describes as more than 64,000[^eden-prairie-about]. A work week inside one of those firms, especially on the airport roads or at the highway knot, should be named as such, not folded into a generic commute.",
        sourceId: "eden-prairie-about",
      },
      {
        title: "The city maps Staring Lake, Purgatory Creek, and several other waters separately",
        body: "The city’s map library posts separate park maps for Staring Lake and for Purgatory Creek, and also lists a Purgatory Creek 5K, a combined Purgatory Creek / Staring Lake running route, Lake Smetana, Mitchell Marsh, Rice Marsh Lake, and Round Lake[^eden-prairie-maps]. A 5K along Purgatory Creek is not a loop at Staring Lake, and neither is a marsh walk at Mitchell Marsh. The first history should name the map you actually used.",
        sourceId: "eden-prairie-maps",
      },
      {
        title: "Flying Cloud Fields appear on the city park-map list, next to the airport",
        body: "Among the printable park maps, the city lists Flying Cloud Fields alongside the other park PDFs[^eden-prairie-maps]. If a work or recreation week includes those fields, or the roads around the airport, that is a stop-and-start history, not an automatic 494 sit and not a lakeshore loop.",
        sourceId: "eden-prairie-maps",
      },
    ],
  },
  diagram: {
    title: "From the 494 and 212 knot into the suite",
    caption: "A sketch. Most people stay on I-494 or Highway 212 and continue toward Excelsior Boulevard. About 10 miles, with more minutes when that knot of highways is slow.",
    stops: [
      { label: "Mid-town Eden Prairie, or your usual on-ramp", note: "494, 212, 169, 62, or 5" },
      { label: "I-494 or Highway 212 east", note: "The usual way toward the boulevard" },
      { label: "Toward the boulevard" },
      { label: "The lot on Excelsior Boulevard, Suite 201", note: "One floor up" },
    ],
    legs: ["Onto 494 or 212", "East out of the highway knot", "The boulevard into the lot"],
  },
  sections: [
    {
      eyebrow: "A highway knot and a park system",
      title: "The same ten miles can be a highway week or a trail week",
      paragraphs: [
        "A weekday from Eden Prairie is often a neck after 494 or 212. A weekend is more often a hip or low back after Staring Lake or Purgatory Creek. Work around Flying Cloud can be stop-and-start even when the rest of 494 is moving. We pick the louder of those for the month and write the short list for that one only.",
        "If a trail or lot week is clearly a foot problem, {custom foot orthotics|/custom-foot-orthotics} may be part of the plan. If the week is not about the feet, we do not bring it up. The {exercise page|/therapeutic-exercise} explains the reasoning; the work you walk out with is still the two movements already tried on the table.",
      ],
    },
    {
      eyebrow: "What you take back toward 494",
      title: "Two movements you can reuse at a 212 light, or at a trailhead",
      paragraphs: [
        "If 494 or 212 is louder, the pair is often a short neck retraction at a red light, and a mid-back press into the seat. If a trail week is louder, it is usually a hip fold you can repeat at the trailhead before you start the loop. Both will already have been done here. If a later visit is warranted, we will try to hold a morning opening that avoids the afternoon on 494.",
      ],
    },
  ],
  process: {
    title: "How we place an Eden Prairie visit inside a ten-mile, high-traffic drive",
    steps: [
      { title: "Use the morning, when 494 and 212 are usually calmer", body: "Monday and Thursday do have an afternoon opening, 2:30 to 5:30, but that clock fights the 494 merge. The desk can hold a mid-morning slot instead, which is the one we recommend from Eden Prairie." },
      { title: "Name the highway and the trail, not only the city", body: "Whether you use 494, 212, 169, 62, or 5, and whether Staring Lake, Purgatory Creek, or the airport roads are in the week, is more useful than a general Eden Prairie label. We can send the intake in advance if you want it done before you park." },
      { title: "Exam first, then a decision about hands-on care", body: "If the findings point somewhere else, we say so before you spend another trip on 494. Hands-on work is offered only after you have heard the findings in ordinary language." },
      { title: "Two practiced movements and a yes or no on a second trip", body: "You practice both movements before you leave. We will also tell you, in one sentence, whether a second ten-mile trip is warranted." },
    ],
  },
  comparison: {
    title: "When a ten-mile trip from Eden Prairie is a fair first exam",
    columns: ["The pattern this month", "Whether this suite is a fair start"],
    rows: [
      ["A neck after 494 or 212, or a low back after Staring Lake or Purgatory Creek", "Starting with an exam here is reasonable"],
      ["Recent trauma, or a specialist already in charge of bone health", "Keep that appointment first"],
      ["Unexplained weight loss with a painful back, or a fever along the spine", "Start in urgent care, not on 494."],
    ],
    note: "If you want help choosing a row, use the contact page before you merge onto 494.",
  },
  whoFor: {
    title: "Eden Prairie weeks we already see in this suite",
    fitsTitle: "When the ten miles is worth booking",
    notFitsTitle: "Better first stops than a 494 drive",
    fits: [
      "A tight neck or mid-back after sitting on I-494 or Highway 212",
      "Hips or a low back after time at Staring Lake or along Purgatory Creek",
      "Work weeks that include the roads around Flying Cloud Airport",
      "People who will book the ten miles as a morning visit, not a between-meetings stop",
    ],
    notFits: [
      "A leg that fails under you, or new loss of bowel or bladder control",
      "Chest pain, or air that feels stuck",
      "A fever that arrived with the back complaint",
    ],
  },
  provider: {
    title: "Dr. Levitt sees you after you have come up 494",
    body: "He grew up in Saint Louis Park and still treats in that city. The first visit from Eden Prairie, and the next one if we recommend it, are both with him.",
  },
  faqs: {
    title: "Questions we hear from Eden Prairie",
    items: [
      { q: "How long is the trip in from Eden Prairie?", a: "About ten miles. You will be coming to 6200 Excelsior Boulevard (suite 201) in Saint Louis Park. I-494 or Highway 212, then toward that boulevard, is what most people use." },
      { q: "I work near Flying Cloud. Does that change how I should book?", a: "It can, if the airport roads are part of your usual day. The city notes that Flying Cloud is inside Eden Prairie. If you will already be on those roads, a late-morning appointment is usually easier than a 5 p.m. merge on 494. Mention it when you call." },
      { q: "I walk at Staring Lake or Purgatory Creek. What should I bring?", a: "Come in the pair you actually walk in, and be ready to describe the surface and roughly how far. Also say whether the ache starts on the loop or only the next morning." },
      { q: "Can I book myself, without a note?", a: "Yes. The number is 952-920-7535. Say Eden Prairie when you call." },
      { q: "Is the next visit also with Dr. Levitt?", a: "Yes. There is not another doctor in the practice to hand you to." },
      { q: "The city says it was established in 1858. Does that change the exam?", a: "Only as background. The city’s about page says Eden Prairie stayed a small village until Flying Cloud Airport and Highway 494 brought homes and businesses in the mid-1900s, and that nearly 10,000 acres are now set aside for parks and open space. We still need to know whether this month was a 494 sit, an airport-road week, or a mapped walk at Staring Lake or Purgatory Creek." },
      { q: "Where is Eden Prairie City Hall?", a: "The city’s about page lists it at 8080 Mitchell Road, Eden Prairie, MN 55344. That is a civic landmark. The clinic is still the Saint Louis Park office, about ten miles from mid-town, usually on I-494 or Highway 212." },
      { q: "Are Staring Lake and Purgatory Creek on the same city map?", a: "The city posts separate park maps for each, plus a combined Purgatory Creek / Staring Lake running route and a Purgatory Creek 5K. The same library also lists Lake Smetana, Mitchell Marsh, Rice Marsh Lake, and Round Lake. Name the one you actually walked." },
    ],
  },
  related: {
    title: "Related pages for Eden Prairie readers",
    links: [
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If a trail or lot week is clearly a foot problem" },
      { href: "/back-pain-treatments", label: "Back-pain care", note: "More on low-back visits, if that is the louder complaint" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Why the work you take home is a short pair" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from 494 or 212" },
      { href: "/areas-we-serve/chanhassen", label: "Chanhassen", note: "The next city west on Highway 5" },
      { href: "/areas-we-serve/minnetonka", label: "Minnetonka", note: "Just north, toward 394 and Ridgedale" },
    ],
  },
  sources: [SRC.edenPrairieAbout, SRC.edenPrairieEcon, SRC.edenPrairieCensus, SRC.edenPrairieMaps],
  cta: {
    title: "Plan the ten miles from Eden Prairie",
    body: "Send the online request and write Eden Prairie, plus whether 494, the airport roads, or a lake path is the louder week. Ask the desk for a mid-morning time.",
  },
};
