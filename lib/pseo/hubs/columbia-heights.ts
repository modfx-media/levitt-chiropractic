import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const columbiaHeights: PseoHub = {
  slug: "columbia-heights",
  heroSubtitle:
    "Columbia Heights is a first-ring Anoka County city on the north edge of Minneapolis, with its downtown at 40th Avenue NE and Central Avenue. From that corner to our suite is about eight miles, usually south on Highway 65 or Highway 47, then west on I-94 or I-35W toward Excelsior Boulevard.",
  keyFacts: [
    { label: "From Central Avenue", value: "About 8 miles" },
    { label: "2020 census", value: "21,973 people", sourceId: "columbia-heights" },
    { label: "Inside the city", value: "Five lakes, including Sullivan Lake", sourceId: "columbia-heights" },
    { label: "Usual roads", value: "Highway 65 (Central Avenue) or Highway 47 (University Avenue), then I-94 or I-35W west" },
  ],
  intro: {
    eyebrow: "Columbia Heights, first ring",
    title: "A hilly Anoka County city organized around Central Avenue",
    paragraphs: [
      "Columbia Heights formed as a village on March 14, 1898, when it separated from the former Fridley Township, and it adopted a city charter on July 21, 1921[^columbia-heights]. The 2020 census counted 21,973 people. Minnesota State Highway 47, which is University Avenue here, and Minnesota State Highway 65, which is Central Avenue, are the two main routes through the city. The downtown district is centered at 40th Avenue NE and Central Avenue, and it includes the Heights Theater, county offices, the public library, and a run of storefronts[^columbia-heights].",
      "The city is bordered by Fridley to the north and west, by New Brighton and Saint Anthony to the east, and by Minneapolis to the south[^columbia-heights]. The ground is not flat. One of the highest points in Hennepin, Ramsey, and Anoka Counties sits along Stinson Boulevard between Fairway Drive and 45th Avenue NE, also called County Road E. Five lakes lie inside the city: Sullivan Lake, Highland Lake, Silver Lake, Hart Lake, and LaBelle Pond. Many of the city parks occupy older low, wet ground that was a poor place to build; Huset Park is the main city park[^columbia-heights].",
      "The office is about eight miles from Columbia Heights City Hall at 3989 Central Avenue NE[^columbia-heights-city]. Most people drop south on Central or University, then take I-94 or I-35W west and finish at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Eight miles is inside our range and is often a mid-morning trip you can plan around a shift. Late afternoon on 65, once the lights start stacking, is a different story. Tell us which of those two streets you actually use, because they do not leave the neck in the same place.",
      "The Heights Theater, at 3951 Central Avenue NE, opened on October 8, 1926, and is still showing films on that same street a century later[^heights-theater-official]. It was built in the Beaux Arts style by Arthur Gluek as a neighborhood house for plays and vaudeville, and it became a movie theater almost immediately. If you work a standing shift on Central, or you sit through a long screening after being on your feet all day, that sequence belongs in the history. A theater seat and a storefront shift do not load a low back the same way.",
    ],
  },
  atAGlance: {
    title: "Columbia Heights notes",
    items: [
      { label: "Downtown corner", value: "40th Avenue NE and Central Avenue", sourceId: "columbia-heights" },
      { label: "The theater", value: "Heights Theater, 3951 Central Avenue NE, open since 1926", sourceId: "heights-theater-official" },
      { label: "The high point", value: "Stinson Boulevard between Fairway Drive and 45th Avenue NE", sourceId: "columbia-heights" },
      { label: "City Hall", value: "3989 Central Avenue NE, Columbia Heights, MN 55421", sourceId: "columbia-heights-city" },
    ],
  },
  figure: {
    src: "/images/pain-relief.jpg",
    alt: "A patient resting face-down on a treatment table during hands-on care",
    caption: "Standing a Central Avenue shift and walking a Sullivan Lake loop are not the same load. We ask which one is louder before we pick the two moves that go home.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Columbia Heights details that belong in the first visit",
    cards: [
      {
        title: "The Heights Theater is a hundred-year landmark on Central",
        body: "The theater's own history page places the opening in 1926, on Central Avenue, and describes a Beaux Arts neighborhood house that has stayed in continuous use as a cinema[^heights-theater-official]. People who work the street, or who sit in those seats after a standing day, often describe a low back that only speaks up once they finally sit down. Mention the shift and the screening if both are in the same week.",
        sourceId: "heights-theater-official",
      },
      {
        title: "Five lakes, and a rise along Stinson, change the weekend load",
        body: "Sullivan Lake is the one people mention most, but Highland, Silver, Hart, and LaBelle Pond are inside the same city map[^columbia-heights]. A loop on level path and a walk up the Stinson rise are not interchangeable. Tell us the lake, the distance, and whether the ache starts on the path or after you sit in the car.",
        sourceId: "columbia-heights",
      },
      {
        title: "Central and University are two different standing-and-sitting streets",
        body: "Central Avenue (Highway 65) is the commercial spine; University Avenue (Highway 47) is the other through-route[^columbia-heights]. A cashier or shop week on Central is mostly standing. A drive down either street, then a desk, is mostly sitting. We need to know which of those you actually had this month, because the homework is not the same.",
        sourceId: "columbia-heights",
      },
    ],
  },
  diagram: {
    title: "Central Avenue to the boulevard",
    caption: "A static outline of the usual south-then-west path, not a live traffic feed. People typically leave near 40th and Central, drop south on 65 or 47, then run west on I-94 or I-35W. The distance is about eight miles; stacked lights on Central can add a chunk of time.",
    stops: [
      { label: "40th Avenue NE and Central, or your own block", note: "Leave from the door you actually use" },
      { label: "Highway 65 or Highway 47, heading south", note: "Toward Minneapolis" },
      { label: "West on I-94 or I-35W" },
      { label: "The second-floor suite on Excelsior Boulevard", note: "Parking is on the same block" },
    ],
    legs: ["Onto 65 or 47", "South, then west", "The boulevard, then the stairs"],
  },
  sections: [
    {
      eyebrow: "Stand, sit, or walk the lakes",
      title: "A Columbia Heights week often has two speeds, and they do not share a plan",
      paragraphs: [
        "The weekday complaint is often tired feet, hips, and a low back after hours standing on Central, or a stiff neck after a 65 or 47 sit into a desk. The weekend complaint is often a hip or low back after a Sullivan loop or time on the Stinson rise. We ask which one is the main story this month. A standing-shift plan and a lake-loop plan are not interchangeable, and we will not send you home with both if only one is actually in the week.",
        "If the lake mileage is plainly a shoe-and-foot problem, {custom foot orthotics|/areas-we-serve/columbia-heights/custom-foot-orthotics} can enter the conversation. If it is not, we leave that subject alone. The {exercise page|/therapeutic-exercise} explains why we keep the home list short. What you actually take with you is the two movements already done here.",
      ],
    },
    {
      eyebrow: "What goes back up Central",
      title: "A standing-break and a lake-bench hinge, not a gym program",
      paragraphs: [
        "After a Central Avenue shift, we usually teach a calf raise you can do at a kitchen counter when you get home, and a wall slide for the shoulder blades before you sit down for the evening. After a Sullivan or Stinson walk, we teach a hip hinge you can do with a hand on a bench or a porch rail, plus a reminder to change shoes if the same pair did the shop floor and the lake path. Both are practiced in this room. If coming back would be useful, we will hunt for a morning opening that is not buried in the 65 afternoon, or a Saturday hold if a weekday shift is the obstacle.",
      ],
    },
  ],
  process: {
    title: "Building an eight-mile visit from the 65 corridor",
    steps: [
      {
        title: "Leave Central before the afternoon lights stack, or ask about Saturday",
        body: "If you can leave before lunch, every weekday morning has openings; Wednesday is the late start, beginning at ten and finishing at noon. The only afternoon clinic days are Monday and Thursday, from half past two to half past five. From Columbia Heights, a mid-morning departure on 65 or 47 is usually kinder than a 4:30 p.m. run down Central. If a standing shift blocks every weekday morning, ask whether a Saturday time is still open; those are reserved ahead, not filled from a walk-in list.",
      },
      {
        title: "Bring the shoes you stand or walk in, not a pair you wear once to the office",
        body: "The shoes from a Central Avenue shift and the shoes from a Sullivan loop tell us more than a fresh pair. Also tell us whether you started on 65 or 47, and whether a theater evening sat on top of a standing day. Paperwork you already have can come with you; we will not delay the visit because the file is incomplete.",
      },
      {
        title: "The exam starts with how you walk and how you stand still",
        body: "Before anyone works with their hands, we watch you walk the length of the room, stand as you do behind a counter, and sit as you do in a car or a theater seat. Findings get explained in ordinary language. Manual work is added only if it fits. If the first stop should have been a medical doctor, we will say so before you drive back up 65.",
      },
      {
        title: "Practice the counter raise and the bench hinge here, then decide on a return",
        body: "The two moves are rehearsed in the room, against a wall or with a hand on a solid surface, so you are not decoding them later in a kitchen. You will also leave with a direct answer on whether another eight miles is worth it.",
      },
    ],
  },
  comparison: {
    title: "A Central Avenue shift, a 65 sit, or a lake loop",
    columns: ["The week", "What usually complains", "What we usually start with"],
    rows: [
      ["A standing shift along Central, or a long screening after being on your feet", "Tired feet, hips, and a low back that stiffens once you finally sit", "Footwear, how long you stand without a break, and a short hip-and-foot routine"],
      ["A commute down 65 or 47, then a desk", "A stiff neck and an upper back that does not want to turn", "How the seat and the screen sit, and two moves you can do before you rejoin 65"],
      ["A walk around Sullivan or another of the five lakes, or time on the Stinson rise", "A hip or low back that speaks up the next morning", "Surface, distance, and whether the ache starts on the path or after you sit down"],
    ],
    note: "If you are not sure which row you are in, phone 952-920-7535 before you come down Central.",
  },
  whoFor: {
    title: "Who already comes down Central to this office",
    fitsTitle: "Reasons Columbia Heights residents book",
    notFitsTitle: "Begin somewhere else",
    fits: [
      "Tired feet, hips, or a low back after a standing shop or service shift on Central Avenue",
      "A stiff neck after a regular drive down Highway 65 or Highway 47",
      "Hips or a low back after loops at Sullivan Lake or walks on the Stinson rise",
      "People who will set aside eight miles in order to stay with one clinician",
    ],
    notFits: [
      "Strength fading in a leg over a short period, or a new problem with bowel or bladder control",
      "Chest pain at rest, or breathing that feels stuck",
      "A spine that is hot and stiff with a fever, or weight loss you cannot account for",
    ],
  },
  provider: {
    title: "One doctor, including when you come back up 65",
    body: "On a Columbia Heights visit the clinician is Dr. Alan Levitt, every time. He earned his chiropractic degree in 1986 and opened this practice the next year. The current suite has been the clinic's home since 1999. Eight miles is close enough that we still want the second visit, if there is one, to be with the same person who did the exam.",
  },
  faqs: {
    title: "Columbia Heights questions",
    items: [
      { q: "How long is the trip from Central Avenue?", a: "About eight miles from the downtown corner at 40th Avenue NE and Central, or from City Hall at 3989 Central Avenue NE. Most people go south on Highway 65 or Highway 47, then west on I-94 or I-35W, and finish on Excelsior Boulevard." },
      { q: "I work a retail or service shift on Central. Is there a time that actually fits?", a: "A mid-morning weekday opening is the usual fit if you can leave before the afternoon lights stack. If the shift blocks those hours, ask about the Monday or Thursday afternoon window, or about a Saturday time, which has to be reserved ahead." },
      { q: "Sullivan Lake is my usual walk. What should I tell you?", a: "The distance, the surface, and whether the ache starts on the path or after you sit down. If you used the same shoes on Central and on the loop, say that too. Bring those shoes if you can." },
      { q: "Should I take 65 or University?", a: "Take the one you already use. They both head south toward the freeways. The cleaner choice is the street that is moving the morning you come, not a single official path." },
      { q: "If I come back, is it the same doctor?", a: "Yes. Dr. Levitt does the first visit and any later one." },
    ],
  },
  related: {
    title: "Related Columbia Heights pages",
    links: [
      { href: "/areas-we-serve/columbia-heights/custom-foot-orthotics", label: "Orthotics for Columbia Heights", note: "When a lake loop or a standing shift is loading the feet" },
      { href: "/areas-we-serve/columbia-heights/back-pain-treatments", label: "Back-pain care, Columbia Heights", note: "The service write-up, not a conclusion about your case" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "The reasoning behind keeping the home list short" },
      { href: "/new-patient-center", label: "New patient center", note: "What to have in hand when you come off 65 or 47" },
      { href: "/areas-we-serve/fridley", label: "Fridley", note: "The neighbor to the north and west" },
      { href: "/areas-we-serve/minneapolis", label: "Minneapolis", note: "The city that borders Columbia Heights on the south" },
    ],
  },
  sources: [SRC.columbiaHeights, SRC.columbiaHeightsCity, SRC.heightsTheater, SRC.heightsTheaterOfficial],
  cta: {
    title: "Book from Columbia Heights",
    body: "Phone 952-920-7535, or use the form, and say whether the louder problem is a Central Avenue shift, the 65 sit, or time at Sullivan Lake. We will hold a mid-morning opening when one is free.",
  },
};
