import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const wayzata: PseoHub = {
  slug: "wayzata",
  heroSubtitle:
    "Wayzata is about eleven miles from Suite 201, and Interstate 394 is the road that connects the two. From Lake Street the trip is usually 394 through Minnetonka and into Saint Louis Park.",
  keyFacts: [
    { label: "From Wayzata", value: "About 11 miles via I-394" },
    { label: "2020 census", value: "4,434 people in a small lake city", sourceId: "wayzata" },
    { label: "Total area", value: "4.70 square miles", sourceId: "wayzata" },
    { label: "Usual route", value: "Interstate 394 to Excelsior Boulevard", sourceId: "i394" },
  ],
  intro: {
    eyebrow: "Wayzata",
    title: "A lake town with a freeway that already points at the office",
    paragraphs: [
      "Wayzata is a small city on Lake Minnetonka. The 2020 census counted 4,434 people, and the land-and-water area is 4.70 square miles[^wayzata]. The trip to 6200 Excelsior Blvd, Suite 201, Saint Louis Park is about eleven miles, and it is unusually straightforward: Interstate 394 was built to connect downtown Minneapolis with suburbs along this corridor, and it runs from the Wayzata area through Minnetonka and Saint Louis Park.",
      "The name comes from the Dakota word wazíyata, meaning “north” or “north shore.” The Mdewakanton regarded Lake Minnetonka — the “Big Water” — as a place for hunting, fishing and harvesting wild rice and maple sap, and Spirit Knob, a peninsula in Wayzata Bay, was considered a sacred place[^wayzata]. We mention that because it is the actual origin of the town, not because a care page needs decoration.",
      "What we see from Wayzata often splits into two weeks. Desk-heavy days produce stiff necks and tight upper backs. Lake weekends — docks, lifts, the beach, the Dakota Rail Regional Trail — produce sore low backs and shoulders on Monday. The exam has to hear both stories.",
    ],
  },
  atAGlance: {
    title: "Wayzata background",
    items: [
      { label: "Platted", value: "Oscar E. Garrison platted the town in 1854; it incorporated as a village in 1883", sourceId: "wayzata" },
      { label: "Railroad", value: "The Saint Paul and Pacific reached Wayzata in 1867, making it the original gateway to the lake", sourceId: "wayzata" },
      { label: "ZIP and area code", value: "55391 and 952", sourceId: "wayzata" },
      { label: "Outdoor names we hear", value: "Wayzata Beach and the Dakota Rail Regional Trail", sourceId: "wayzata" },
    ],
  },
  localFacts: {
    title: "Wayzata history that still affects a Monday visit",
    cards: [
      {
        title: "The railroad, and a fight with James J. Hill",
        body: "In 1867 the railroad made Wayzata the transportation hub for lake tourists and for local farmers. After the village incorporated in 1883, the council ordered the tracks moved away from downtown. James J. Hill, then chairman of the railway, first ignored the order, then demolished the station at the foot of Broadway and built a new one at Holdridge, declaring that residents could walk a mile to catch the train. He moved the tracks closer to the lake rather than farther from town.",
        sourceId: "wayzata",
      },
      {
        title: "Steamboats at the foot of Broadway",
        body: "In the late 1800s, steamboats waited near Broadway Avenue to carry new arrivals across the lake. Some were enormous: the Belle of Minnetonka was 300 feet long and was said to carry 2,500 passengers. The lake is quieter now, but the shoreline and the trail are still how a lot of Wayzata weekends are spent.",
        sourceId: "wayzata",
      },
      {
        title: "A ginseng boom after a grasshopper year",
        body: "Early settlers lived by cutting timber and growing corn and wheat. In 1857 a grasshopper infestation nearly ended that economy, until ginseng was found in the remaining hardwood forest. Wayzata became a collection center for ginseng roots from around the lake, a short, odd chapter that is easy to overlook if you only know the later resort years.",
        sourceId: "wayzata",
      },
      {
        title: "A bank that started here in 1923",
        body: "The regional bank TCF was founded in Wayzata in 1923 and kept its headquarters here until 2019[^wayzata]. A downtown that can support that kind of office life, right next to a working lake street, is part of why the weeks we hear about are often split between a desk and a walk by the water. Tell us which half of the week is actually bothering you.",
        sourceId: "wayzata",
      },
    ],
  },
  diagram: {
    title: "Wayzata to Suite 201",
    caption: "I-394 is the spine of this trip. Mid-morning is usually calmer than the afternoon peak into Minneapolis.",
    stops: [
      { label: "Wayzata", note: "Near Lake Street and 394" },
      { label: "I-394 through Minnetonka" },
      { label: "Excelsior Boulevard in Saint Louis Park" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 11 },
    ],
    legs: ["Onto 394", "Through Minnetonka", "Off toward Excelsior"],
  },
  sections: [
    {
      eyebrow: "394 is already going our way",
      title: "Timing a freeway you may already use",
      paragraphs: [
        "If you already drive I-394 during the week, the easiest appointment is often one that rides along with a commute already on your calendar. A mid-morning slot, after the early rush and before the noon return, is the window we suggest most often from Wayzata.",
        "The eleven miles are inside our service range, and {Minnetonka|/areas-we-serve/minnetonka} is on the way. If you live closer to the Minnetonka line than to downtown Wayzata, say so; the exit you want may change even if the freeway does not.",
      ],
    },
    {
      eyebrow: "Lake weeks and desk weeks",
      title: "Docks, trails and a stiff neck from the same household",
      paragraphs: [
        "Wayzata Beach and the Dakota Rail Regional Trail are the two outdoor names we hear most[^wayzata]. Hauling gear, getting in and out of a boat, or taking a first long ride of the season are ordinary ways a low back or a shoulder starts to complain. None of that is exotic, and it does not require a dramatic story to be worth an exam.",
        "Lumbar tightness that flared after a walk on the lake street, or after a long sit on 394, is a common reason for a Wayzata visit. The {back pain treatments|/areas-we-serve/wayzata/back-pain-treatments} page outlines our usual starting point. In the room, the first appointment remains an exam; if the findings lean toward a slower course, or to another kind of care, we will say so before you book another trip down 394.",
      ],
    },
    {
      eyebrow: "Neighbors on the lake",
      title: "Minnetonka, Orono and Plymouth",
      paragraphs: [
        "{Orono|/areas-we-serve/orono} and {Plymouth|/areas-we-serve/plymouth} sit next to Wayzata, and many households already move among the three during the week. If your drive to the office naturally starts from a different one of those cities depending on the day, tell us which starting point you will actually use.",
        "Saturday appointments are available by request. If 394 only works on the weekend, call 952-920-7535 and we will look at the book.",
      ],
    },
    {
      eyebrow: "A lake street and a freeway that was built for it",
      title: "Eleven miles on 394, with a downtown that still faces the water",
      paragraphs: [
        "Wayzata is a small city — 4,434 people in 2020, 4.70 square miles of land and water — and the trip to the office is unusually direct[^wayzata]. Interstate 394 was built to connect downtown Minneapolis with this corridor, and it runs from the Wayzata area through Minnetonka and into Saint Louis Park. Most of the eleven miles are on that one road. The decision at the end is Highway 100 or the Excelsior Boulevard exit, not a maze of local streets. A start from the lake street and a start closer to 394 still do not feel the same at rush hour; name which one you will use.",
        "The downtown still faces the water, and the week we hear about is often split between a desk and a walk by the lake. TCF was founded here in 1923 and kept its headquarters in town until 2019, which is one reason an office week and a lake-street walk can belong to the same person[^wayzata]. Tell us which half is actually bothering you. A neck that seizes up at a desk, and a low back that complains after a walk on the path, are not the same exam, even when they arrive in the same city.",
      ],
    },
  ],
  process: {
    title: "A first visit when you are coming from Wayzata",
    steps: [
      { title: "Say if you are leaving from the lake street or from closer to 394", body: "Those two starts do not feel the same at rush hour. An 8:30 or mid-morning time on I-394 is usually the quieter eleven miles." },
      { title: "Come with a license and whatever paperwork is already in the house", body: "If a previous clinic mailed you a film or a brief summary, slip it in the same bag as your ID so the first appointment can finish in one trip." },
      { title: "Get a straight answer before you get back on 394", body: "By the end of the visit you will know whether continuing here is worthwhile, or whether we think you should begin in another kind of clinic." },
      { title: "Head back up 394 with homework that fits a lake-town week", body: "A few movements you can actually do after a day on Lake Street or at a desk. We look at them again on the next visit, not in a stack of printouts." },
    ],
  },
  comparison: {
    title: "Desk week versus lake weekend",
    columns: ["The split in the week", "What usually aches", "What we usually work on"],
    rows: [
      ["Desk week", "A locked neck, an aching upper back, and tightness after long screen hours", "How the monitor sits, and two short mobility breaks a desk week can actually absorb"],
      ["Lake or trail weekend", "Low back or shoulder soreness after lifting, paddling or a long ride", "Mechanics of the lift or the stroke, pacing, a short mid-week routine"],
      ["The 394 trip", "Stiffness after sitting", "A short walk before you come upstairs"],
    ],
  },
  whoFor: {
    title: "Wayzata weeks that belong in this office",
    fitsTitle: "Make the 394 trip when",
    notFitsTitle: "Skip I-394 for this",
    fits: [
      "A desk week in town, or along the 394 corridor, that has the neck seized up by Thursday",
      "Time on the lake path, or a long walk downtown, that leaves the hips tight — or the low back complaining — the next morning",
      "A stiff back after sitting on I-394 itself, when the rest of the week is already full",
      "A plan built around what you can keep up in Wayzata, because 394 is not a trip you will make several times a week",
    ],
    notFits: [
      "Do not drive down 394 first if a limb has suddenly given out; that belongs in an ER",
      "Chest pressure, or air that starts to feel like hard work, belongs with a medical team first",
      "A feverish back, or feeling unwell from head to toe, is a medical clinic visit",
    ],
  },
  provider: {
    title: "Who you will see from Wayzata",
    body: "The person in the room on a Wayzata visit is Dr. Alan Levitt. He is a 1986 graduate of Northwestern's chiropractic program. Patients have been coming to him since 1987, and 1999 is the year the clinic settled into Suite 201.",
  },
  faqs: {
    title: "Wayzata questions",
    items: [
      { q: "What does the drive down from Wayzata usually involve?", a: "It is about eleven miles, I-394 almost all the way, to 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Most drivers stay on 394 until the end, then either take Highway 100 for the last stretch or use the Excelsior Boulevard exit." },
      { q: "Is Wayzata still in range at eleven miles?", a: "It is. Eleven miles keeps Wayzata inside the 15-mile line. We still treat I-394 as a drive to plan around, especially in the late afternoon." },
      { q: "Can the plan avoid a weekly drive down I-394?", a: "That is the usual way we work from Wayzata. Homework carries the week; the next time on 394 is only if the next look in this office would actually change the movements, or how soon we ask you back." },
      { q: "Is Saturday possible if weekdays are tied to a commute?", a: "Saturday times are held, not walked into. Phone 952-920-7535 and ask the front desk whether a weekend slot remains." },
      { q: "I work near the lake or along Lake Street in Wayzata. Is the 394 trip predictable?", a: "On most mornings, yes; I-394 is the line most Wayzata patients already know. The unpredictable part is the afternoon westbound return, not the inbound trip to the suite. If you can take a morning appointment, the drive is usually the easy part of the visit. Tell us if you are starting from the lake side or from farther up toward the highway, because those two starts are not the same." },
    ],
  },
  related: {
    title: "Wayzata pages, plus Minnetonka, Orono, and Plymouth",
    links: [
      { href: "/areas-we-serve/wayzata/back-pain-treatments", label: "Back pain care for Wayzata", note: "Desks, docks and the trail" },
      { href: "/areas-we-serve/minnetonka", label: "Minnetonka", note: "On I-394 between Wayzata and the office" },
      { href: "/areas-we-serve/orono", label: "Orono", note: "A lake neighbor" },
      { href: "/areas-we-serve/plymouth", label: "Plymouth", note: "Another nearby starting point" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.wayzata, SRC.lakeMinnetonka, SRC.i394],
  cta: {
    title: "Book from Wayzata",
    body: "If you already use I-394 during the week, tell us which mornings are easiest, and we will try to meet you on a trip you are making anyway.",
  },
};
