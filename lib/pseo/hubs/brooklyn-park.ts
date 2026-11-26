import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const brooklynPark: PseoHub = {
  slug: "brooklyn-park",
  heroSubtitle:
    "Brooklyn Park is the sixth-largest city in Minnesota, stretched along the west bank of the Mississippi in northern Hennepin County. It is a young city by the numbers, with a lot of school-age kids and a lot of driving. From around 85th Avenue to our office is about 13 miles, usually by Highway 100 or U.S. 169.",
  keyFacts: [
    { label: "85th Avenue to the suite", value: "About 13 miles" },
    { label: "2020 census", value: "86,478 people, sixth in the state", sourceId: "brooklyn-park" },
    { label: "Under 18", value: "27.5 percent of residents in 2020", sourceId: "brooklyn-park" },
    { label: "Trails and parks", value: "47 miles of trail, 67 parks", sourceId: "brooklyn-park" },
  ],
  intro: {
    eyebrow: "Brooklyn Park, on the Mississippi",
    title: "A big, young, north-metro city where the day is measured in drop-offs and highway miles",
    paragraphs: [
      "At the 2020 census Brooklyn Park had 86,478 residents, enough to rank sixth among Minnesota cities[^brooklyn-park]. The median age was 35, and more than a quarter of residents were under 18[^brooklyn-park]. That shapes what we hear. A typical Brooklyn Park week involves school runs, a commute, and carrying children, groceries, or sports bags in and out of a car several times a day.",
      "The Mississippi River forms the city's eastern edge, with Fridley and the rest of Anoka County on the far bank[^brooklyn-park]. Interstates 94 and 694 cross the southern end, U.S. 169 runs near the western side, Highway 252 runs north and south on the east, Highway 610 crosses the north, and County Road 81 is a main local route[^brooklyn-park]. Much of the land north of 85th Avenue was built after 2000, so it can feel like two cities: older neighborhoods to the south and newer subdivisions to the north.",
      "Our office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about 13 miles from the middle of Brooklyn Park. The usual choices are County Road 81 toward Highway 100 and south, or U.S. 169 down the west side to Excelsior Boulevard. It is a reasonable drive, but not a quick errand, so we use the first visit to give you a clear sense of whether coming back makes sense.",
      "Brooklyn Park also has room to move: 47 miles of trail and 67 parks, including the Rush Creek Regional Trail and the northern part of Palmer Lake Park[^brooklyn-park]. People who walk or ride those trails often describe a different kind of stiffness from the one that builds up during a day of driving.",
    ],
  },
  atAGlance: {
    title: "Brooklyn Park at a glance",
    items: [
      { label: "Colleges", value: "North Hennepin Community College, Hennepin Technical College, Rasmussen", sourceId: "brooklyn-park" },
      { label: "Historic Eidem Farm", value: "A 19-acre living-history farm at 4345 101st Ave N", sourceId: "eidem-farm" },
      { label: "Blue Line Extension", value: "Five planned stations in the city along West Broadway and County Road 81", sourceId: "bp-blue-line" },
      { label: "River edge", value: "The Mississippi forms the eastern boundary", sourceId: "brooklyn-park" },
    ],
  },
  figure: {
    src: "/images/adjustment-1.jpg",
    alt: "A clinician guiding the arm and shoulder of a patient lying on her side on a treatment table",
    caption: "Lifting a car seat, loading a hockey bag, a day on 94: the history tells Dr. Levitt which of those your back and shoulders are reacting to before any hands-on work starts.",
    width: 1697,
    height: 1131,
  },
  localFacts: {
    title: "Brooklyn Park details that shape the visit",
    cards: [
      {
        title: "Light rail construction is coming to West Broadway and County Road 81",
        body: "The METRO Blue Line Extension will run 13.4 miles from Target Field Station through north Minneapolis, Robbinsdale, and Crystal into Brooklyn Park[^blue-line-build]. The city lists five planned stations: Oak Grove Parkway, 93rd Avenue, 85th Avenue, Brooklyn Boulevard, and 63rd Avenue at Highway 81[^bp-blue-line]. As that work moves forward, routes along West Broadway and County Road 81 may change. If your usual way out of town is affected, tell us so we can pick a time that keeps the drive manageable.",
        sourceId: "bp-blue-line",
      },
      {
        title: "Eidem Farm is a reminder that this was market-garden country",
        body: "John and Electa Eidem bought their farm in 1894 and worked it until 1956, raising potatoes and other crops[^eidem-history]. The city bought the house and 10 acres in 1976 and opened it to the public in 1979[^eidem-history]. Today it is a 19-acre living-history site focused on farm life between 1905 and 1920[^eidem-farm]. It does not change how we examine anyone. It is a good landmark, though, and a popular stop for families and school field trips[^brooklyn-park].",
        sourceId: "eidem-farm",
      },
      {
        title: "A young city means a lot of lifting",
        body: "With 27.5 percent of residents under 18 in 2020[^brooklyn-park], a lot of Brooklyn Park adults spend their days lifting: toddlers into car seats, strollers into trunks, equipment bags into hatchbacks. That repeated bend-and-twist is worth describing in detail. We ask which side you usually lift from and how high the car is, because a minivan and a sedan load a low back differently.",
        sourceId: "brooklyn-park",
      },
    ],
  },
  diagram: {
    title: "From 85th Avenue to Excelsior Boulevard",
    caption: "A simple route sketch, not a traffic feed. Most trips go south on County Road 81 toward Highway 100, or down U.S. 169 on the west side; both end at Excelsior Boulevard, roughly 13 miles. Blue Line construction may change local streets near West Broadway and 81.",
    stops: [
      { label: "Central Brooklyn Park, around 85th Avenue", note: "Near North Hennepin Community College" },
      { label: "County Road 81 or U.S. 169, southbound", note: "81 for the east and middle of the city, 169 for the west" },
      { label: "Highway 100 or 169 into Saint Louis Park", note: "Both reach Excelsior Boulevard" },
      { label: "Suite 201", note: "Up one flight, parking beside the building" },
    ],
    legs: ["Pick 81 or 169", "South through the inner suburbs", "Onto Excelsior"],
  },
  sections: [
    {
      eyebrow: "School runs, commutes, and trails",
      title: "We want to know which part of a Brooklyn Park day you feel at night",
      paragraphs: [
        "When a Brooklyn Park parent describes their day, it often includes three or four separate trips: a school drop-off, a commute on 94 or 694, a pickup, and then practice or lessons in the evening. Each one starts and ends with lifting something in or out of a car. A student at North Hennepin or Hennepin Tech may describe long hours in classroom chairs and a part-time job on their feet. A trail walker on Rush Creek may describe sore hips after a long Saturday. We ask which of these sounds like your week.",
        "That question is not a formality. A low back that tightens after the third car trip of the day and one that aches after a long walk are not the same problem, even if they hurt in the same spot. The answer helps Dr. Levitt decide what to look at first and which home movements will actually fit into your schedule.",
        "If walking or long shifts on hard floors seem to be the issue, {custom foot orthotics|/custom-foot-orthotics} may come up. If not, they will not. For background on how we teach home movements, see the {therapeutic exercise page|/therapeutic-exercise}. Service details live on those pages, not here.",
      ],
    },
    {
      eyebrow: "Taking it home to Brooklyn Park",
      title: "Movements that fit between a car seat and a commute",
      paragraphs: [
        "For a lifting-heavy week we often teach a hip hinge practiced with an empty laundry basket, so you learn to bend from the hips rather than round the low back, and a standing side stretch you can do with a hand on the car roof before you get in. For long-drive weeks we often choose a seated chin tuck and a shoulder roll done at a red light or in the parking lot.",
        "We rehearse both in the office. Then Dr. Levitt tells you honestly whether another visit would help. If it would, we will find a time that suits your school-run schedule and avoids the heaviest traffic on 100 or 169.",
      ],
    },
  ],
  process: {
    title: "How a Brooklyn Park first visit is set up",
    steps: [
      {
        title: "Fit the appointment around drop-off and pickup",
        body: "Mornings run from 8:30 until 11:30 on Monday, Tuesday, Thursday, and Friday, and 10 a.m. to noon on Wednesday. Monday and Thursday afternoons add 2:30 to 5:30 p.m. A late-morning slot after school drop-off usually works well from Brooklyn Park. Saturdays are by appointment.",
      },
      {
        title: "Describe the lifting and the driving",
        body: "When you book, mention what you carry most days, whether it is a child, a car seat, or work equipment, and roughly how long you spend driving. If Blue Line construction has changed your route, say so. The forms are on the new patient center page; filling them in at home saves time upstairs.",
      },
      {
        title: "Talk first, then movement testing",
        body: "Dr. Levitt starts with your history and then asks you to show him the motions that bother you: bending to lift, turning to check a blind spot, standing up after sitting. He uses hands-on care only if it fits what he finds. If he thinks you need a physician's opinion first, he will tell you that before doing anything.",
      },
      {
        title: "Practice, then a clear recommendation",
        body: "You leave having practiced two movements that suit your week, and with a direct answer about whether follow-up visits make sense and how many to expect.",
      },
    ],
  },
  comparison: {
    title: "When a 13-mile trip from Brooklyn Park makes sense",
    columns: ["What is going on", "Suggested first step"],
    rows: [
      ["Low back or neck tightness tied to lifting kids, gear, or groceries, or to long drives on 94, 694, 100, or 169", "Book a first visit here and describe the lifting and the driving."],
      ["Stiffness after long walks or rides on the city's trails", "Book a first visit and tell us the trail and distance."],
      ["A physician is already following bone density or managing the same area of the spine", "Talk to them first; we can coordinate if they agree."],
      ["Sudden weakness, chest pain, fever with back pain, or changes in bladder or bowel control", "Go to urgent or emergency care, or call 911. Do not drive down to see us."],
    ],
    note: "Not sure? Call 952-920-7535 before you head south.",
  },
  whoFor: {
    title: "Who makes the trip from Brooklyn Park",
    fitsTitle: "Reasons people book from Brooklyn Park",
    notFitsTitle: "Better to start elsewhere",
    fits: [
      "Parents whose low back complains after a day of car seats and school runs",
      "Commuters on 94, 694, or 169 whose neck stiffens by the end of the drive",
      "Students and staff at the city's colleges who sit for long stretches",
      "Trail walkers and riders with sore hips after long weekend outings",
    ],
    notFits: [
      "Weakness or numbness that is new and getting worse",
      "Loss of bladder or bowel control",
      "Spine pain with a fever or weight loss that has no explanation",
    ],
  },
  provider: {
    title: "The same doctor every time you make the drive",
    body: "Dr. Alan Levitt sees every Brooklyn Park patient. He graduated from Northwestern College of Chiropractic in December 1986, has practiced since 1987, and has worked from this office on Excelsior Boulevard since 1999. When you come back, you see him again. With a 13-mile drive each way, consistency matters.",
  },
  faqs: {
    title: "Brooklyn Park questions",
    items: [
      { q: "How long is the drive from Brooklyn Park?", a: "About 13 miles from central Brooklyn Park. Most people take County Road 81 toward Highway 100 or use U.S. 169, then exit onto Excelsior Boulevard." },
      { q: "Can I book around school hours?", a: "Usually, yes. The late-morning window after drop-off is the one most likely to fit, and Monday or Thursday afternoons are an option if mornings are taken. Ask when you call." },
      { q: "Will Blue Line construction affect my drive?", a: "It might, depending on where you live. The planned stations are along West Broadway and County Road 81. If your usual route is affected, tell us when you book and we will suggest a time with more margin." },
      { q: "I am a student at North Hennepin. Is a short visit possible between classes?", a: "The first visit includes a full history and movement testing, so plan it for a day without a class immediately afterward." },
      { q: "Is there an office closer to Brooklyn Park?", a: "No. We have one office, on Excelsior Boulevard in Saint Louis Park." },
    ],
  },
  related: {
    title: "More for Brooklyn Park",
    links: [
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "How the home movements are chosen" },
      { href: "/adjustments-and-manipulation", label: "Adjustments and manipulation", note: "The service page for hands-on care" },
      { href: "/new-patient-center", label: "New patient center", note: "Forms to complete before the drive" },
      { href: "/areas-we-serve/maple-grove", label: "Maple Grove", note: "The neighbor to the west" },
      { href: "/areas-we-serve/robbinsdale", label: "Robbinsdale", note: "On the way south along County Road 81" },
      { href: "/areas-we-serve/fridley", label: "Fridley", note: "Across the Mississippi" },
    ],
  },
  sources: [SRC.brooklynPark, SRC.eidemFarm, SRC.eidemHistory, SRC.bpBlueLine, SRC.blueLineBuild],
  cta: {
    title: "Book from Brooklyn Park",
    body: "Call 952-920-7535 or use the request form. Tell us about the lifting and the driving in your week, and we will try for a late-morning slot after school drop-off.",
  },
};
