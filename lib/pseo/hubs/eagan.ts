import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const eagan: PseoHub = {
  slug: "eagan",
  heroSubtitle:
    "Eagan covers 33.5 square miles of Dakota County, with 56 city parks and a municipal waterpark at Civic Center Drive. From mid-town Eagan, the trip here is about 14 miles, usually on Highway 77 or I-35E and then I-494. We treat that as a planned crossing of the river, not a stop you squeeze between errands.",
  keyFacts: [
    { label: "River crossing", value: "About 14 miles from mid-town Eagan", sourceId: "eagan-glance" },
    { label: "2020 census", value: "68,855 people", sourceId: "eagan-census" },
    { label: "City parkland", value: "56 parks and 1,350 acres", sourceId: "eagan-glance" },
    { label: "Usual roads", value: "Highway 77 or I-35E, then I-494 to Excelsior Boulevard", sourceId: "eagan-city" },
  ],
  intro: {
    eyebrow: "Eagan, on the south side of the river",
    title: "A 33-square-mile city whose week is parks, a waterpark, and a river crossing",
    paragraphs: [
      "The City of Eagan reports 33.5 square miles, 56 parks, and 1,350 acres of city parkland, plus more than a thousand water bodies inside the municipal boundary[^eagan-glance]. The 2020 census counted 68,855 people[^eagan-census]. That is a large, wet, park-heavy week, not a tight street grid, and it is why we ask whether the louder problem this month is a commute or time in a park, not only which city you listed on the form.",
      "City Hall sits at the Eagan Municipal Center, 3830 Pilot Knob Road[^eagan-city]. A short drive from there is Cascade Bay, the city’s outdoor waterpark at 1360 Civic Center Drive[^cascade-bay]. In a warm season we hear about long days on those grounds. In the rest of the year we hear about the same roads without the waterpark traffic. Tell us which version of the week you are actually in.",
      "The city’s own glance page also counts more than a thousand water bodies inside the municipal boundary[^eagan-glance]. We do not treat that number as a single story. A day on a neighborhood pond path, a day in the waterpark lot on Civic Center Drive, and a day on the regional trails at 860 Cliff Road are three different weeks, and we would rather book and examine the one you are actually in.",
      "Those three geographies also sit at different ends of a 33.5-square-mile city[^eagan-glance]. Civic Center Drive, Pilot Knob Road, and Cliff Road are not interchangeable starting points for the river crossing, and a late arrival after a slow merge on 77 is usually a start-of-day problem, not an exam-room one.",
      "The office is 6200 Excelsior Blvd, Suite 201, in Saint Louis Park — about 14 miles from mid-town Eagan. Most drivers take Highway 77 or I-35E north across the Minnesota River, then I-494 toward the boulevard. Leave margin for a slow merge on 77 so you are not walking in at the exact start time.",
      "Dakota County’s Lebanon Hills Regional Park also sits in Eagan, at 860 Cliff Road, and is the county’s largest park, open daily from 5 a.m. to 10 p.m. with no gate fee[^lebanon-hills-official]. If you use those trails, tell us whether you were on a wet boardwalk, a packed winter path, or a bike route, and roughly how far. Those loads are not interchangeable.",
    ],
  },
  atAGlance: {
    title: "Eagan, in figures the city publishes",
    items: [
      { label: "How large the city is", value: "33.5 square miles, 56 parks, 1,350 acres of city parkland", sourceId: "eagan-glance" },
      { label: "Cascade Bay", value: "The municipal waterpark at 1360 Civic Center Drive", sourceId: "cascade-bay" },
      { label: "Lebanon Hills", value: "Dakota County’s largest regional park, 860 Cliff Road, Eagan", sourceId: "lebanon-hills-official" },
    ],
  },
  figure: {
    src: "/images/therapeutic-exercise.jpg",
    alt: "A person practicing a simple movement beside a treatment table",
    caption: "Eagan weeks often mix a 77 or 35E sit with time in city parks or at Lebanon Hills. The short list we send home is written for the half of the week that is actually louder.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Eagan details that change what we ask first",
    cards: [
      {
        title: "Cascade Bay is a Civic Center Drive day, not a freeway day",
        body: "The city’s waterpark is at 1360 Civic Center Drive, with the plan-your-visit page listing current season dates and what is on the grounds[^cascade-bay]. If you work, volunteer, or spend long summer afternoons there, say so. Standing, lifting, and a wet walk back to the lot are a different history than a straight 77 commute, even if both end in the same stiff mid-back.",
        sourceId: "cascade-bay",
      },
      {
        title: "City parkland is not the same as Lebanon Hills",
        body: "Eagan’s own parks total 56 sites and 1,350 acres[^eagan-glance]. Lebanon Hills, at 860 Cliff Road, is a Dakota County regional park and the largest in that system, with trails that stay open from 5 a.m. to 10 p.m.[^lebanon-hills-official]. A short loop in a neighborhood park and a long outing on those regional trails load a hip differently. Name which one you actually use.",
        sourceId: "lebanon-hills-official",
      },
      {
        title: "Pilot Knob Road is where the civic day starts",
        body: "The Municipal Center is at 3830 Pilot Knob Road[^eagan-city]. People who work near there, or who use Pilot Knob as their way onto 77, describe a different start than someone who gets on I-35E first. We would rather hear the on-ramp you actually take than a generic “I commute from Eagan.”",
        sourceId: "eagan-city",
      },
      {
        title: "A thousand water bodies are not one park system",
        body: "The glance page lists 1,350 acres of city parkland and, in a separate figure, more than a thousand water bodies inside the municipal line[^eagan-glance]. A neighborhood pond path is not Lebanon Hills, and it is not Cascade Bay either. The exam is written for the one you actually used, not for a blended average of all three geographies.",
        sourceId: "eagan-glance",
      },

      {
        title: "City trails and city streets are two different mileages",
        body: "The glance page lists 151.73 miles of trails and sidewalks, and, separately, 243.62 miles of streets[^eagan-glance]. A week spent on those city trails is not a 77 commute, and it is not a long outing at Lebanon Hills. The first history should include which mileage, and which surface, actually filled the week.",
        sourceId: "eagan-glance",
      },
      {
        title: "Founded in 1860, still a spread-out 33.5 square miles",
        body: "The glance page says Eagan was founded in 1860, when the community was Irish, German, and French Canadian farmers[^eagan-glance]. The 2020 census count of 68,855[^eagan-census] sits next to a later Metropolitan Council community-profile figure of 69,086 on the same glance page. Those figures are a size check only: this is a large, spread-out city, and the river crossing does not start from a single edge.",
        sourceId: "eagan-glance",
      },
      {
        title: "Maintained parkland, rinks, and play structures are not one Saturday",
        body: "Of the 1,350 acres of city parkland, 565 acres are listed as maintained[^eagan-glance]. The same Parks and Recreation table counts 1,270 water bodies, 43 play structures, 27 soccer fields, and 14 parks with outdoor skating rinks. A Saturday at a rink or a soccer field is a different first history than a midweek sit on 77 or 35E.",
        sourceId: "eagan-glance",
      },
      {
        title: "In season, Cascade Bay runs two public sessions, not one long day",
        body: "When the waterpark is in season, the city’s plan-your-visit page lists two public sessions at 1360 Civic Center Drive: 10:45 a.m. to 2:45 p.m., and 3:15 p.m. to 7:15 p.m.[^cascade-bay]. Stacking a Session 1 morning there with a late-morning exam on this side of the river is usually a poor fit. Cardio Bay is a separate program on the same grounds, with morning hours daily except Wednesday. As of late November 2026 the page listed the waterpark as closed for the season; the next season dates are posted there, not by this office.",
        sourceId: "cascade-bay",
      },
      {
        title: "Lebanon Hills is nearly 2,000 acres, with more than one trailhead",
        body: "Dakota County describes Lebanon Hills as nearly 2,000 acres of trails and lakes, the largest park in that system[^lebanon-hills-official]. Schulze Lake Beach, the Holland Lake trailhead, and the Jensen Lake trailhead are different starts inside that one park. The Visitor Center is where the county points people for trail maps, and TransitLink from Metro Transit is listed as a direct ride to that building. A beach hour, a trailhead outing, and a map stop at the Visitor Center should be named separately.",
        sourceId: "lebanon-hills-official",
      },
      {
        title: "A campus start is more useful than a generic Eagan label",
        body: "The glance page’s major-employer list includes Thomson Reuters, Blue Cross Blue Shield of Minnesota, the U.S. Postal Service, United Parcel Service, and Ecolab, all with campus-sized headcounts[^eagan-glance]. If the workday starts on one of those campuses, that starting point belongs in the history, because it is a more precise on-ramp than the city name alone.",
        sourceId: "eagan-glance",
      },
    ],
  },
  diagram: {
    title: "From Pilot Knob or 77 into the suite",
    caption: "A sketch, not a live map. Most people come up Highway 77 or I-35E, join I-494, and continue to Excelsior Boulevard. Count on about 14 miles, and more minutes than that when the river crossing is slow.",
    stops: [
      { label: "Mid-town Eagan, Pilot Knob, or your usual on-ramp", note: "Start where you actually get on" },
      { label: "Highway 77 or I-35E north", note: "The river crossing is on this leg" },
      { label: "I-494 toward Excelsior Boulevard" },
      { label: "The Excelsior Boulevard lot, then Suite 201", note: "Second floor" },
    ],
    legs: ["Onto 77 or 35E", "North across the river", "494, then the boulevard"],
  },
  sections: [
    {
      eyebrow: "Parks, a waterpark, and a river crossing",
      title: "We want the louder half of an Eagan week, not a blended average",
      paragraphs: [
        "A midweek visit from Eagan often starts with a neck after sitting on 77 or 35E. A weekend visit more often starts with a hip or low back after Lebanon Hills or a long stretch in a city park. In July we also hear about the waterpark lot and the standing that goes with it. We pick one of those as the louder half of the month, and we write the short list for that half only.",
        "If a trail or waterpark week is clearly a foot problem, we may talk about {custom foot orthotics|/custom-foot-orthotics}. If the week is not about the feet, that subject stays off the table. A longer note on {therapeutic exercise|/therapeutic-exercise} is on the site if you want it; the work you walk out with is the pair already done in the room.",
      ],
    },
    {
      eyebrow: "What you take back across the river",
      title: "Work you can repeat in a 77 pull-off, or at a trail post",
      paragraphs: [
        "If the louder half is the commute, the pair is often a chin tuck you can do in the car before you rejoin the ramp, and a gentle arch into the seat. If the louder half is the trails, it is usually a hip hinge you can repeat at a post in Lebanon Hills or in a city park. You will have already done both before you leave. If coming back is justified, we will try to hold a late-morning slot that avoids the 77 afternoon.",
      ],
    },
  ],
  process: {
    title: "How we place an Eagan visit so the river crossing is not the whole story",
    steps: [
      { title: "Pick a clock time that is kinder than a 5 p.m. run up 77", body: "On Tuesday and Friday the book only runs in the morning, 8:30 to 11:30. That window is the one we usually hold for a river crossing from Eagan, because a late-day trip up 77 is a longer sit." },
      { title: "Name the on-ramp and the park, not only the city", body: "Whether you start from Pilot Knob, 77, or 35E, and whether Cascade Bay, a city park, or Lebanon Hills is in the week, is more useful than a general Eagan label. We can email the forms so the clipboard is already done when you walk in." },
      { title: "Watch you move, talk it through, then decide", body: "We start by watching how you turn your head after a 77 sit and how you get on and off the table. You hear a plain explanation before any hands-on work is even offered. If someone else should see you first, we say so before you plan a second crossing." },
      { title: "Leave with two practiced movements and a yes or no on a return", body: "The pair you take back across the river is the pair you already ran through here. We will also say, clearly, whether a second 14-mile trip is justified." },
    ],
  },
  comparison: {
    title: "When coming from Eagan is a fair first appointment",
    columns: ["The week you are having", "Whether this office is a fair start"],
    rows: [
      ["A neck after 77 or 35E, or a low back after Lebanon Hills or a long park day", "Coming here first is reasonable"],
      ["Bone thinning already managed by your physician, or a fall in the last few weeks", "Stay with that physician first"],
      ["A back with fever, chest tightness, or air that will not come easily", "That belongs in urgent or emergency care, not in a planned river crossing."],
    ],
    note: "Unsure which row you are in? Ring the desk at (952) 920-7535 before you join 77.",
  },
  whoFor: {
    title: "Eagan weeks we already see in this suite",
    fitsTitle: "When the river crossing is worth planning",
    notFitsTitle: "Cases that should not start with this crossing",
    fits: [
      "A tight neck or mid-back after sitting on Highway 77 or I-35E",
      "Hips or a low back after Lebanon Hills or a long outing in a city park",
      "Summer weeks that include long standing at Cascade Bay",
      "People who will treat the river crossing as a planned appointment, not an errand",
    ],
    notFits: [
      "A leg that suddenly cannot take weight, or bowel or bladder control that has changed",
      "A painful spine plus a fever",
      "Weight falling off with no explanation you already understand",
    ],
  },
  provider: {
    title: "You see Dr. Levitt after you have crossed the river",
    body: "Dr. Levitt opened this practice in 1987. After you cross the river, the exam is with him, not with a rotating associate. The same is true of any later visit we recommend.",
  },
  faqs: {
    title: "Questions we hear from Eagan",
    items: [
      { q: "How long is the trip in from Eagan?", a: "About fourteen miles. The address is 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Highway 77 or I-35E to I-494, then Excelsior Boulevard, is the route most people take." },
      { q: "Does Cascade Bay season change how I should book?", a: "It can, if Civic Center Drive is part of your usual day. The city’s plan-your-visit page lists the current season. If you will already be on those grounds, a late-morning appointment is usually easier than trying to cross the river at 5 p.m. Mention it when you call." },
      { q: "I use Lebanon Hills more than the city parks. What should I bring?", a: "Wear the same pair you use on those trails, and be ready to say roughly how far you went and whether the path was wet, packed, or a bike route. Also say whether the ache starts during the outing or the next morning." },
      { q: "Can I book without another doctor sending me?", a: "No referral is required. Call (952) 920-7535 and say you are coming from Eagan." },
      { q: "If I come back, is it still Dr. Levitt?", a: "Yes. If a second visit is worth the crossing, it is with him as well." },
      { q: "Is Cascade Bay open in the winter?", a: "The city publishes the current season on its plan-your-visit page for 1360 Civic Center Drive. We do not keep our own calendar of those dates. If you were on those grounds that week, tell us, even if the waterpark itself was closed and you were only in the lot." },
      { q: "How do I tell a city park day from a Lebanon Hills day?", a: "Eagan’s own parks are the 56 sites and 1,350 acres the city lists. Lebanon Hills, at 860 Cliff Road, is a Dakota County regional park and is not part of that city total. A short neighborhood loop and a long outing on the county trails should be named separately, including whether you were out between 5 a.m. and 10 p.m., when that park stays open." },
      { q: "How many sessions does Cascade Bay run in season?", a: "The city’s plan-your-visit page lists two public sessions when the waterpark is open: 10:45 a.m. to 2:45 p.m., and 3:15 p.m. to 7:15 p.m., at 1360 Civic Center Drive. Admission is per session unless an all-day ticket is purchased. Cardio Bay is a separate morning program on the same grounds, daily except Wednesday." },
      { q: "Is Lebanon Hills really two thousand acres?", a: "Dakota County describes it as nearly 2,000 acres of trails and lakes, and as the largest park in the county system, at 860 Cliff Road. That acreage is not part of Eagan’s 1,350 acres of city parkland. Schulze Lake Beach and the Holland Lake and Jensen Lake trailheads are different starts inside the county park." },
    ],
  },
  related: {
    title: "Related pages for Eagan readers",
    links: [
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If a park or trail week is clearly a foot problem" },
      { href: "/back-pain-treatments", label: "Back-pain care", note: "Background on how we approach a low back, not a diagnosis" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Why we send you home with two movements, not a packet" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from 77 or 35E, including forms" },
      { href: "/areas-we-serve/burnsville", label: "Burnsville", note: "The next Dakota County city west along the river" },
      { href: "/areas-we-serve/bloomington", label: "Bloomington", note: "Just across the Minnesota River from much of Eagan" },
    ],
  },
  sources: [SRC.eaganCity, SRC.eaganGlance, SRC.eaganCensus, SRC.cascadeBay, SRC.lebanonHillsOfficial],
  cta: {
    title: "Plan the crossing from Eagan",
    body: "Call (952) 920-7535 and name the louder problem: 77, Cascade Bay, or Lebanon Hills. Ask for a late-morning slot when you can.",
  },
};
