import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const springLakePark: PseoHub = {
  slug: "spring-lake-park",
  heroSubtitle:
    "Spring Lake Park sits at the edge of the area we serve, about fifteen miles from Suite 201. Central Avenue or University Avenue to the beltway, then Highway 100 or I-94, is the usual path.",
  keyFacts: [
    { label: "From Spring Lake Park", value: "About 15 miles, our outer range" },
    { label: "Residents in 2020", value: "7,188", sourceId: "spring-lake-park" },
    { label: "A compact map", value: "2.07 square miles", sourceId: "spring-lake-park" },
    { label: "The local roads", value: "Highway 65, Highway 47, County Highway 10", sourceId: "spring-lake-park" },
  ],
  intro: {
    eyebrow: "Spring Lake Park",
    title: "A small city at the 15-mile line",
    paragraphs: [
      "Spring Lake Park is the farthest city in this batch, about fifteen miles from the office at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. That is the edge of the area we serve, and we would rather say so plainly. The usual trip uses Central Avenue NE or University Avenue to reach the beltway, then continues toward Excelsior Boulevard on Highway 100 or I-94.",
      "The city is compact: 2.07 square miles, 1.98 of them land. The 2020 census counted 7,188 people[^spring-lake-park]. Highway 65 runs north–south through the middle of town. Highway 47 follows the boundary with Fridley, and Osborne Road follows the southern line with Fridley[^spring-lake-park]. Because the city is small, the starting point inside town changes the trip less than the freeway hour you choose.",
      "A longer drive only makes sense if the first visit is thorough and the plan between visits is clear. We do not ask Spring Lake Park patients to come in as often as someone who lives three miles away. The home routine has to carry more of the work.",
    ],
  },
  atAGlance: {
    title: "Spring Lake Park snapshot",
    items: [
      { label: "A compact footprint", value: "Just over two square miles, fully urban", sourceId: "spring-lake-park" },
      { label: "Median age", value: "41.7 years in 2020", sourceId: "spring-lake-park" },
      { label: "Age mix", value: "20.7% under 18 and 20.7% age 65 or older", sourceId: "spring-lake-park" },
      { label: "City offices", value: "1301 81st Avenue NE, Spring Lake Park, MN 55432", sourceId: "spring-lake-park-city" },
    ],
  },
  localFacts: {
    title: "What “small and far” actually means here",
    cards: [
      {
        title: "A small city that still shares a line with Fridley",
        body: "Spring Lake Park covers only 2.07 square miles, with 1.98 of that land and 0.09 water, and 7,188 people lived here at the 2020 census[^spring-lake-park]. Highway 65, also called Central Avenue NE, runs through the middle of town, and Highway 47, also called University Avenue NE, runs along the line with {Fridley|/areas-we-serve/fridley}, as does Osborne Road. Once you leave those local streets, the rest of the trip is a beltway run, which is why we plan around 694 rather than around crossing this city.",
        sourceId: "spring-lake-park",
      },
      {
        title: "A city you can cross in a few minutes, then a freeway",
        body: "Highway 65 bisects the city. County Highway 10 cuts through the northeast portion. Once you leave those local streets, the rest of the trip is a beltway run. We plan around 694, not around getting across Spring Lake Park itself.",
        sourceId: "spring-lake-park",
      },
      {
        title: "Households that often include both ends of the age range",
        body: "In 2020 the share of residents under 18 and the share age 65 or older were the same, 20.7%. We see that mix in the office: a parent with a stiff neck from desk work, and an older adult who wants a gentler approach so everyday tasks stay possible. The exam is different for each, even when they arrive in the same car.",
        sourceId: "spring-lake-park",
      },
      {
        title: "Two school buildings, and a city festival",
        body: "Two education buildings sit inside the city: Park Terrace Elementary and Spring Lake Park High School, along with the District Services and Enrollment Center for Independent School District 16[^spring-lake-park]. School-year drop-off and pickup often shape the morning more than the freeway does. The city also hosts Tower Days, listed on the municipal calendar[^spring-lake-park-city]. If a festival week or a school calendar will change the fifteen-mile trip, tell us when you book.",
        sourceId: "spring-lake-park",
      },
    ],
  },
  diagram: {
    title: "Spring Lake Park to Suite 201",
    caption: "Fifteen miles is doable in a mid-morning window and frustrating in the late-afternoon peak. We will help you pick the hour.",
    stops: [
      { label: "Spring Lake Park", note: "Highway 65 or University Avenue" },
      { label: "I-694", note: "The long part of the trip" },
      { label: "Highway 100 or I-94" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 15 },
    ],
    legs: ["65 or 47 to 694", "694 toward 100 or 94", "Excelsior exit"],
  },
  sections: [
    {
      eyebrow: "At the edge of the range",
      title: "Why we still write a page for a 15-mile trip",
      paragraphs: [
        "We retired city pages that sat beyond about 15 miles, because the clinic does not treat this as a wide-net service area. Spring Lake Park sits on that line, and that is the reason the page stays and the copy stays honest about the drive. If the trip only works on a Saturday or in a mid-morning gap, tell us that when you book.",
        "At fifteen miles, the first visit has to earn the drive. We will tell you, before you head back up 694, what the exam can support and what it cannot. If what we find leans toward a different kind of visit, we would rather say that in the room than have you make the same trip again without a reason.",
      ],
    },
    {
      eyebrow: "Making one trip count",
      title: "Fewer visits, more specific homework",
      paragraphs: [
        "For Spring Lake Park patients we try to avoid a tight early schedule. The first visit should answer whether this office is a good fit. If it is, the next visits are spaced with the freeway in mind, and the home routine is short enough to be realistic: two or three movements, practiced in the room.",
        "If broader health questions are part of why you are coming, our {functional medicine|/areas-we-serve/spring-lake-park/functional-medicine} page is the place to start reading. It does not replace the mechanical exam.",
      ],
    },
    {
      eyebrow: "The neighbor we already share a border with",
      title: "Fridley, and the rest of the trip",
      paragraphs: [
        "University Avenue and Osborne Road are the everyday edges with {Fridley|/areas-we-serve/fridley}. If you already drive into Fridley for work or for Springbrook, we can often set your appointment next to a trip already on your calendar. {Mounds View|/areas-we-serve/mounds-view} is another nearby city inside the same range.",
        "Tower Days is the community event listed by the city, and city offices are at 1301 81st Avenue NE in the 55432 zip code[^spring-lake-park-city]. If you are coming from that side of town, Highway 65 is usually the first road we hear about.",
      ],
    },
    {
      eyebrow: "A 2.07-square-mile city at a 15-mile line",
      title: "Central Avenue, University Avenue, and then the beltway",
      paragraphs: [
        "Spring Lake Park itself is small: 2.07 square miles, 7,188 people in 2020, and you can cross it in a few minutes[^spring-lake-park]. The long part of the trip is not getting across town. It is the beltway after you leave Central Avenue NE or University Avenue. A start near Highway 65 and a start near the Fridley line on University Avenue do not meet I-694 at the same place. Name the starting side when you book, because that is what decides whether a morning slot stays predictable.",
        "School-year mornings have their own clock. Park Terrace Elementary and Spring Lake Park High School both sit inside the city, along with the District 16 enrollment office[^spring-lake-park]. If a drop-off is already part of your morning, it is usually easier to place the fifteen-mile visit after that loop than to add a separate errand. Tower Days, listed on the city's own calendar, is another week when the usual timing can shift[^spring-lake-park-city]. Tell us if either calendar will change the drive.",
      ],
    },
  ],
  process: {
    title: "Planning a first visit from Spring Lake Park",
    steps: [
      { title: "Name the starting side: Highway 65, or closer to the Fridley line", body: "Those two starts do not use 694 the same way. An earlier slot, rather than a late-afternoon one, is usually the quieter fifteen-mile run." },
      { title: "Bring an ID and any paperwork you already have in hand", body: "An older film or a short report, if you have one, means we do not have to stop the first visit short and ask you to come back for it." },
      { title: "Hear a yes, a no, or a carefully limited maybe", body: "When the exam is done, you should know whether staying with this clinic makes sense, or whether another setting ought to come first." },
      { title: "Leave with homework that can survive a 65 or 694 week", body: "A couple of movements you can keep after a workday. The next fifteen-mile trip is to review those movements with you in the room, not as a routine stop." },
    ],
  },
  comparison: {
    title: "How this trip differs from a closer suburb",
    columns: ["Topic", "Closer cities", "Spring Lake Park"],
    rows: [
      ["Distance", "Often 3 to 8 miles", "About 15 miles, at the edge of our range"],
      ["Visit spacing", "Easier to come back mid-week if needed", "We plan fewer trips and lean more on home work"],
      ["Timing", "More hours in the day will work", "Mid-morning or Saturday is usually kinder than late afternoon"],
    ],
  },
  whoFor: {
    title: "Spring Lake Park situations this office can help",
    fitsTitle: "The fifteen miles are worth it when",
    notFitsTitle: "Do not make the full 694 run for this",
    fits: [
      "Tightness after a long workday along Highway 65 or I-694",
      "A walk in a nearby park, or around the lake, that has you moving gingerly once you get home, through the hips or the low back",
      "You live at the edge of our 15-mile line and want homework that can carry the week, without frequent return trips down 694",
      "A first exam that can honestly say whether this kind of care belongs in your picture at all",
    ],
    notFits: [
      "Loss of strength in an arm or leg that comes on fast belongs in urgent or emergency care",
      "Heaviness in the chest, or a fight to get air, is not a chiropractic first visit",
      "When the back ache comes with a fever, start at a medical office, not this clinic",
    ],
  },
  provider: {
    title: "The doctor on a Spring Lake Park visit",
    body: "On a Spring Lake Park visit the clinician is Dr. Alan Levitt, every time. His diploma, dated 1986, is from Northwestern in Bloomington. He started seeing patients the following year, and the clinic has used Suite 201 as its address from 1999 onward.",
  },
  faqs: {
    title: "Spring Lake Park FAQs",
    items: [
      { q: "How far is the office from Spring Lake Park?", a: "The destination is 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about fifteen miles from most addresses in town. Most drivers use Central Avenue or University Avenue to reach the beltway, then continue toward Excelsior Boulevard on Highway 100 or I-94." },
      { q: "Are you really still inside your service area at fifteen miles?", a: "We are. Spring Lake Park sits on the line, and that is why we kept the page and why we stay careful about the drive. We will not pretend it is a short hop." },
      { q: "Can follow-ups be spaced out because of the distance?", a: "At fifteen miles, that is the point. You practice a couple of movements at home, and the next trip down 694 happens only if that drive would actually change what we have you practice, or when we would next see you." },
      { q: "Do you have Saturday appointments?", a: "We hold some Saturday times, but they are reserved. If a weekday 694 run is the obstacle, reach us at 952-920-7535 to see whether a weekend opening is still free." },
    ],
  },
  related: {
    title: "Spring Lake Park pages, and the Fridley border we already share",
    links: [
      { href: "/areas-we-serve/spring-lake-park/functional-medicine", label: "Functional medicine", note: "When the questions go beyond one joint" },
      { href: "/areas-we-serve/spring-lake-park/back-pain-treatments", label: "Back pain care", note: "A first place to read before you book" },
      { href: "/areas-we-serve/fridley", label: "Fridley", note: "The city we share University Avenue and Osborne Road with" },
      { href: "/areas-we-serve/mounds-view", label: "Mounds View", note: "Another nearby city inside the same range" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.springLakePark, SRC.springLakeParkCity, SRC.fridley],
  cta: {
    title: "Book from Spring Lake Park",
    body: "If the fifteen miles only work at certain hours, tell us that up front. We will look for a mid-morning or Saturday time and plan the visit so the trip is worth making.",
  },
};
