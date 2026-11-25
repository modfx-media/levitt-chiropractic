import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const lauderdale: PseoHub = {
  slug: "lauderdale",
  heroSubtitle:
    "Lauderdale covers only 0.42 square miles in Ramsey County, and it is one of two cities that share a border with both Minneapolis and Saint Paul. From Walnut Street to our suite is about nine miles, usually west on I-94, then I-394 or Highway 100 to Excelsior Boulevard.",
  keyFacts: [
    { label: "From Walnut Street", value: "About 9 miles", sourceId: "lauderdale-city" },
    { label: "2020 census", value: "2,271 people", sourceId: "lauderdale" },
    { label: "Land area", value: "0.42 square miles, all of it land", sourceId: "lauderdale" },
    { label: "Usual roads", value: "I-94 west, then I-394 or Highway 100 to Excelsior Boulevard" },
  ],
  intro: {
    eyebrow: "Lauderdale, 0.42 square miles",
    title: "A tight Ramsey County grid that touches both Minneapolis and Saint Paul",
    paragraphs: [
      "Lauderdale is a city in Ramsey County with 2,271 residents at the 2020 census and a land area of 0.42 square miles, all of it land[^lauderdale]. The Census Bureau puts the density at 5,418 people per square mile, which is the feel of a short, close-packed residential grid rather than a lake-lot suburb. It is bordered by Minneapolis, Saint Paul, Roseville, and Falcon Heights. Along with Roseville, it is one of only two cities that are bordered directly by both Minneapolis and Saint Paul[^lauderdale].",
      "The village was incorporated on January 21, 1949, and named for William Henry Lauderdale, a Twin Cities businessman who had donated land to Rose Hill Township for a school and a park. Before that, the place was called Rose Hill and sat inside the larger Rose Township, which also included land that later became Roseville, Falcon Heights, and parts of both central cities[^lauderdale]. People who live here now still use that geography every day: a short block at home, and a job in one of the two downtowns, or a desk near the Saint Paul campus edge.",
      "The clinic address is 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about nine miles from Lauderdale City Hall at 1891 Walnut Street[^lauderdale-city]. Most people join I-94 and run west, then leave for I-394 or Highway 100 and finish on Excelsior Boulevard. The mileage is modest. The minutes are not, if you hit the 280 merge at the wrong hour. A late-morning westbound run is usually the calmer version of this trip.",
      "Luther Seminary's Lower Campus includes a parcel inside Lauderdale as well as a parcel in Saint Paul[^luther-lower]. That edge of the city is woods and older campus buildings, not a second downtown. If you walk those trees, or you work along that line, it belongs in the first conversation. If you do not, we will not write a campus story over a week that is actually a 94 commute and a small living room.",
    ],
  },
  atAGlance: {
    title: "Lauderdale notes",
    items: [
      { label: "The name", value: "William Henry Lauderdale, who donated land for a school and a park", sourceId: "lauderdale" },
      { label: "The older name", value: "Rose Hill, inside Rose Township, until the 1949 incorporation", sourceId: "lauderdale" },
      { label: "City Hall", value: "1891 Walnut Street, Lauderdale, MN 55113", sourceId: "lauderdale-city" },
      { label: "Schools", value: "Roseville Area School District (ISD 623)", sourceId: "lauderdale" },
    ],
  },
  figure: {
    src: "/images/adjustment-1.jpg",
    alt: "Hands-on spinal care on a treatment table in the Saint Louis Park office",
    caption: "A Lauderdale week is often a short block plus a 94 sit, not a long trail loop. The exam has to hear which of those is actually louder this month.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Lauderdale details that change how we take the history",
    cards: [
      {
        title: "This is one of two cities that touch both Minneapolis and Saint Paul",
        body: "The official geography is simple and unusual: Lauderdale is bordered by Minneapolis, Saint Paul, Roseville, and Falcon Heights, and it shares with Roseville the rare status of sitting directly against both central cities[^lauderdale]. That is why we ask which city line you start from. A Minneapolis-side departure and a Saint Paul-side departure do not join I-94 at the same ramp, and they do not leave your neck in the same place at 8 a.m.",
        sourceId: "lauderdale",
      },
      {
        title: "The Lower Campus woods sit inside the city line",
        body: "Luther Seminary describes its Lower Campus as two parcels, one in Lauderdale and one in Saint Paul[^luther-lower]. Residents know that Lauderdale side as a wooded edge rather than a commercial strip. If those paths are in your week, tell us the surface and the distance. If they are not, the visit will stay on the grid and the freeway, which is how most Lauderdale days are actually built.",
        sourceId: "luther-lower",
      },
      {
        title: "0.42 square miles means the furniture at home is part of the exam",
        body: "On this little map, a lot of people work at a dining table, a borrowed desk, or a laptop on a couch, then get into a car and sit on 94[^lauderdale]. We ask about the chair you actually use, not a theoretical office chair, because the first stiff segment often starts there and only gets louder on the freeway.",
        sourceId: "lauderdale",
      },
    ],
  },
  diagram: {
    title: "Walnut Street to the boulevard",
    caption: "This is a static outline of the usual westbound path, not a traffic map. Start on your own block or at City Hall, join I-94, and end on Excelsior Boulevard. The distance is about nine miles; the 280 merge can add minutes you should not pretend are not there.",
    stops: [
      { label: "1891 Walnut Street, or your own block", note: "Leave from the door you actually use" },
      { label: "Westbound I-94", note: "Highway 280 is how some blocks reach 94" },
      { label: "I-394 or Highway 100, heading for Excelsior Boulevard" },
      { label: "The second-floor suite on the boulevard", note: "Parking is on the same block" },
    ],
    legs: ["Onto 94", "West between the two downtowns", "394 or 100, then the boulevard"],
  },
  sections: [
    {
      eyebrow: "The grid and the corridor",
      title: "A Lauderdale week is usually a short block plus a freeway sit",
      paragraphs: [
        "The complaint we hear most often from this city is a neck or mid-back that tightens after the westbound 94 run, or after a morning already spent folded over a laptop in a small room. Those two loads stack. We ask which one started first, and which one is louder today, because a dining-chair problem and a headrest problem do not get the same two moves to take home.",
        "If the woods at the Lower Campus, or a walk across the Minneapolis or Saint Paul line, is clearly loading the feet or the hips, {custom foot orthotics|/areas-we-serve/lauderdale/custom-foot-orthotics} may be part of the conversation. If it is not, we leave the topic off the table. A {separate exercise write-up|/therapeutic-exercise} is available if you want the reasoning; what you actually take home is the pair already rehearsed against a doorway and a chair.",
      ],
    },
    {
      eyebrow: "What you take back to Walnut Street",
      title: "Two moves that fit a small apartment and a short 94 sit",
      paragraphs: [
        "For a laptop week in a tight living room, we usually teach a doorway opener you can do between emails, and a mid-back arch you can do in the same dining chair you already sit in. For the freeway, we add a slow chin nod against the headrest, done in the lot before you rejoin 94, not while the car is moving. Both are rehearsed before you go down the stairs. If coming back would be useful, we will hunt for another westbound late-morning opening rather than a 5 p.m. slot into the downtown rush.",
      ],
    },
  ],
  process: {
    title: "Sliding a Lauderdale appointment into a westbound 94 window",
    steps: [
      {
        title: "Pick a late-morning westbound run, not the downtown rush",
        body: "The doors open at half past eight most mornings and close at half past eleven. Wednesday is a short day, from ten until noon. Monday and Thursday reopen from half past two until half past five. From Lauderdale, the westbound 94 trip mid-to-late morning is usually the predictable one. The afternoon reopening is usable if your downtown day ends early, but it is the tighter of the two choices.",
      },
      {
        title: "Say which city line you start from",
        body: "Minneapolis side, Saint Paul side, or a block near Walnut Street. Add whether the week is a laptop in a small room, a desk at the campus edge, a walk in the Lower Campus woods, or some mix. Forms can be sent ahead so you are not filling them in the lot.",
      },
      {
        title: "We watch you stand up from a low chair, then we decide",
        body: "We start with the history and a look at how you actually move: standing from a low seat, turning your head the way you do in traffic, reaching as you do at a small desk. Manual work is offered only after that, and only when it has a reason. If a medical doctor should see you ahead of us, you will hear that in plain language before anyone suggests coming back.",
      },
      {
        title: "Apartment-scale practice, then a clear word on a return visit",
        body: "Nothing is assigned that you have not already rehearsed against a doorway or a chair in this room. You will also leave knowing whether another nine miles is justified, or whether the honest next step sits somewhere other than this suite.",
      },
    ],
  },
  comparison: {
    title: "When the nine miles from Lauderdale are worth booking",
    columns: ["What has been going on", "A sensible first stop"],
    rows: [
      ["Tightness through the neck or the top of the back after the 94 sit, or after a morning at a small desk in the grid", "Starting with an exam in this suite is fair"],
      ["A physician is already following your bone density, or you were evaluated in urgent care in the last few days for the same spinal complaint", "Stay with that physician until they say it is reasonable to add a visit here"],
      ["Chest pressure that does not ease with rest, breath that will not come fully, or a rigid spine that showed up with a fever", "Go to urgent or emergency care. Do not spend the morning getting on 94 toward this office"],
    ],
    note: "If the row is not obvious, phone 952-920-7535 before you join 94.",
  },
  whoFor: {
    title: "Who we already see from this 0.42-square-mile grid",
    fitsTitle: "Reasons Lauderdale residents book",
    notFitsTitle: "Begin somewhere else",
    fits: [
      "Tightness through the neck after a regular I-94 commute between the two downtowns",
      "Stiffness that starts in a dining chair or a laptop on the couch, then gets louder in the car",
      "Walks along the Lower Campus woods, or across the Minneapolis or Saint Paul line, that leave the hips or low back complaining the next morning",
      "People who will set aside nine miles in order to stay with one clinician",
    ],
    notFits: [
      "A leg or arm that has lost strength over hours or days, or a change in bowel or bladder control",
      "Pressure in the chest, or breathing that feels wrong while you are sitting still",
      "A feverish, rigid spine, or weight dropping without an explanation you already understand",
    ],
  },
  provider: {
    title: "The same clinician after that short, busy freeway run",
    body: "Dr. Alan Levitt is the person in the room on a Lauderdale visit, and on any visit that follows. He has practiced in this city of clinics since 1987 and has used Suite 201 on Excelsior Boulevard since 1999. Nine miles is close enough to plan, and far enough that we will not hand the case to a different face the second time you come.",
  },
  faqs: {
    title: "Lauderdale questions",
    items: [
      { q: "How far is it from Walnut Street?", a: "About nine miles. Lauderdale City Hall is at 1891 Walnut Street. The usual path is I-94 west, then I-394 or Highway 100, ending on Excelsior Boulevard in Saint Louis Park." },
      { q: "I live on a short block and work in one of the downtowns. Which time should I ask for?", a: "A late-morning weekday opening is usually the calmest westbound 94 run. If your downtown day ends early, the Monday or Thursday afternoon window can work, but it is the tighter option. Mention the shape of the workday when you call." },
      { q: "Do I get on 94 directly, or do I use 280?", a: "It depends which city line you start from. Some blocks feed 94 more naturally; others are quicker to Highway 280 and then 94. Tell us the starting side and we will talk through the minutes, not a single official route." },
      { q: "Is this a different clinic from the one described on the Falcon Heights page?", a: "No. It is the same office and the same clinician. Falcon Heights is the next city east. The pages differ because the weeks and the ramps differ, not because the clinic does." },
      { q: "Who will I see after I make the drive?", a: "Dr. Levitt. The first visit and any later visit are with him." },
    ],
  },
  related: {
    title: "Related Lauderdale pages",
    links: [
      { href: "/areas-we-serve/lauderdale/custom-foot-orthotics", label: "Orthotics for Lauderdale", note: "When a short-grid walk or the woods is loading the feet" },
      { href: "/areas-we-serve/lauderdale/back-pain-treatments", label: "Back-pain care, Lauderdale", note: "The service write-up, not a conclusion about your case" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "The reasoning behind a two-move list" },
      { href: "/new-patient-center", label: "New patient center", note: "What to have in hand when you come off 94" },
      { href: "/areas-we-serve/falcon-heights", label: "Falcon Heights", note: "The next city east, from the same old township" },
      { href: "/areas-we-serve/roseville", label: "Roseville", note: "The other city that touches both Minneapolis and Saint Paul" },
    ],
  },
  sources: [SRC.lauderdale, SRC.lauderdaleCity, SRC.lutherLower],
  cta: {
    title: "Book from Lauderdale",
    body: "Phone 952-920-7535, or use the form, and say whether the louder problem is the 94 sit or the chair you use at home. We will hold a westbound late-morning opening when one is free.",
  },
};
