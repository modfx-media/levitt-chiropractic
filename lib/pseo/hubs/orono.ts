import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const orono: PseoHub = {
  slug: "orono",
  heroSubtitle:
    "Orono is a 15.92-square-mile lakeshore city on the north side of Lake Minnetonka, with settlements at Navarre, Crystal Bay, Stubbs Bay, and the original Orono village. From there, the trip here is about 14 miles, usually on County 15 or Highway 12 and then toward Excelsior Boulevard. The first visit is timed for a lakeshore start, not for a gap between errands.",
  keyFacts: [
    { label: "Lakeshore drive", value: "About 14 miles", sourceId: "orono-census" },
    { label: "2020 census", value: "8,315 people", sourceId: "orono-census" },
    { label: "Land area", value: "15.92 square miles", sourceId: "orono-census" },
    { label: "Usual roads", value: "County 15 or Highway 12, then toward Excelsior Boulevard", sourceId: "orono-city" },
  ],
  intro: {
    eyebrow: "Orono, from Navarre to Stubbs Bay",
    title: "A small population spread across a large piece of Lake Minnetonka shoreline",
    paragraphs: [
      "The 2020 census counted 8,315 people in Orono, on 15.92 square miles of land[^orono-census]. That is a low density for a Hennepin County suburb, and it is why two people who both “live in Orono” can start the drive from very different bays. The city’s own history page says that when the village was incorporated, effective January 1, 1955, it took in the remaining township settlements of Navarre, Crystal Bay, Orono, and Bederwood, also called Stubbs Bay[^orono-history]. We ask which of those you actually start from.",
      "City Hall is at 2750 Kelley Parkway[^orono-about]. The official community page is the right place for civic hours and current notices[^orono-about]. In this room, the useful detail is the road you drove, not the notice you read. County 15 and the shoreline curves, with Highway 12 as the faster way toward the city when you need it, shape more weeks than a single freeway commute does.",
      "The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about 14 miles from the center of Orono. Most people work along County 15 or Highway 12 and then toward the boulevard. Because the start can be Navarre, Crystal Bay, Stubbs Bay, or a road in between, the clock time is not the same for everyone. Tell us the settlement, not only the city name.",
      "Big Island sits entirely inside Orono’s corporate limits. The city’s Big Island Nature Park covers 56 acres of maple-basswood forest and wetlands, with more than 1.4 miles of undeveloped Lake Minnetonka shoreline, next to Three Rivers’ wildlife preserve on the same island[^orono-big-island]. Getting there is by water, not by car. If dock work, a lift into a boat, or a day on that island is part of your season, it belongs in the first conversation.",
    ],
  },
  atAGlance: {
    title: "Orono, as the city and the census describe it",
    items: [
      { label: "The settlements inside the city", value: "Navarre, Crystal Bay, Orono, and Bederwood (Stubbs Bay), together since 1955", sourceId: "orono-history" },
      { label: "How many people, how much land", value: "8,315 people in 2020, on 15.92 square miles of land", sourceId: "orono-census" },
      { label: "Big Island Nature Park", value: "56 acres and more than 1.4 miles of undeveloped shoreline, inside the city", sourceId: "orono-big-island" },
    ],
  },
  figure: {
    src: "/images/pain-relief.jpg",
    alt: "A clinician working with a patient seated on a treatment table",
    caption: "An Orono week often mixes shoreline curves in the car with seasonal work around a dock or a boat. We want both halves in the history, not only the one that hurts today.",
    width: 623,
    height: 360,
  },
  localFacts: {
    title: "Orono details that belong in the history",
    cards: [
      {
        title: "Navarre is not Crystal Bay, and neither is Stubbs Bay",
        body: "The 1955 incorporation pulled four settlements into one city: Navarre, Crystal Bay, Orono, and Bederwood, known as Stubbs Bay[^orono-history]. A “short trip across town” between those points is often longer than it looks on a map. When you book, name the settlement or the road, so we do not pretend the drive is the same from every bay.",
        sourceId: "orono-history",
      },
      {
        title: "Big Island is in Orono, and the city’s park there is reached by water",
        body: "The city’s community page notes that Big Island is inside Orono, and that the police department covers the island as well[^orono-about]. The Nature Park on the east end is 56 acres with more than 1.4 miles of undeveloped shore, set out in a 2011 management plan the city adopted with the Minnehaha Creek Watershed District[^orono-big-island]. If a day on the island, or the lift in and out of a boat to get there, is in your season, say so. It is a different load than a County 15 sit.",
        sourceId: "orono-about",
      },
      {
        title: "Kelley Parkway is the civic address, not the start of every drive",
        body: "City Hall is at 2750 Kelley Parkway[^orono-about]. Some people start near there. Many more start on a shoreline road and only later reach Highway 12. We would rather hear the first road you actually use than assume everyone comes past the civic campus.",
        sourceId: "orono-city",
      },
    ],
  },
  diagram: {
    title: "From a north-shore settlement into the suite",
    caption: "A sketch. Most Orono patients work along County 15 or Highway 12 and end on Excelsior Boulevard. About 14 miles, with more curves than a freeway trip of the same length, and a start that depends on which settlement you left.",
    stops: [
      { label: "Navarre, Crystal Bay, Stubbs Bay, or your actual start", note: "The city is large; the start matters" },
      { label: "County 15 or Highway 12", note: "The usual way off the lake" },
      { label: "Toward Excelsior Boulevard" },
      { label: "The second-floor office", note: "Suite 201" },
    ],
    legs: ["Off the shoreline roads", "Toward Highway 12", "The last miles on the boulevard"],
  },
  sections: [
    {
      eyebrow: "Four settlements, one lake, one season at a time",
      title: "The exam changes with the bay you start from and the month you are in",
      paragraphs: [
        "In warm months we hear about dock lines, a lift over a gunwale, and a stiff low back the next morning. In car-heavy weeks we hear about a neck that does not like the curves on County 15 between Navarre and Crystal Bay. In winter, the story is often that the same back got quieter and then complained when the boats went back in. The short list is written for the season you are actually in, and for the settlement you actually leave from.",
        "If dock work or a long day on uneven ground is clearly a foot problem, we may look at {custom foot orthotics|/custom-foot-orthotics}. If the week is not about the feet, that subject stays off the table. A {longer note on the home exercises|/therapeutic-exercise} is on the site if you want it; what you practice here is still a short pair, not a packet.",
      ],
    },
    {
      eyebrow: "Going home along the lake",
      title: "Two movements that can live in a driveway on County 15",
      paragraphs: [
        "For a driving week we usually teach a retraction you can do before you pull back onto a shoreline curve, plus a mid-back arch against the seat. For a dock or boat week we usually teach a hip hinge you can run through on the driveway before you walk down to the water. You will have already done the pair in the room. If a second visit would help, we look for a morning opening that does not fight the afternoon traffic toward Highway 12.",
      ],
    },
  ],
  process: {
    title: "Booking from Orono so the start of the drive is honest",
    steps: [
      { title: "Choose a morning when the shoreline roads are calmer", body: "Monday and Thursday are the split days: a morning block, then an afternoon that ends at 5:30. From Navarre or Stubbs Bay we almost always prefer the morning half, because a late departure on County 15 is a longer sit in curves." },
      { title: "Tell us the settlement, the boat, and the road", body: "Navarre, Crystal Bay, Stubbs Bay, or a different start; whether a dock or Big Island is in the week; and what you have already tried. Forms can be sent ahead so the clipboard is already finished when you arrive." },
      { title: "Exam and explanation first, hands-on care only if it belongs", body: "The first twenty minutes are questions and movement, spoken in ordinary words. Hands-on work is a later decision, not the opening move. If a physician should see you first, we tell you that before we ask you to come back from the lake." },
      { title: "A short practiced list, and a clear yes or no on coming back", body: "You leave with the two movements you already rehearsed at the table, and a straight answer on whether a second trip from the lake is justified." },
    ],
  },
  comparison: {
    title: "When a trip in from Orono makes sense",
    columns: ["The pattern", "A reasonable first stop"],
    rows: [
      ["A neck after County 15 curves, or a low back after dock or boat work", "An exam at this office is a fair first step"],
      ["A fall off a dock, or imaging your doctor is already watching", "Call that office first"],
      ["Sudden weakness in a leg, or a change in bladder or bowel control", "That is an emergency visit, not a lakeshore appointment."],
    ],
    note: "If the row is unclear, ring the desk before you leave the bay: 952-920-7535.",
  },
  whoFor: {
    title: "Orono people we already see",
    fitsTitle: "Reasons people book from the north shore",
    notFitsTitle: "Start somewhere else",
    fits: [
      "Neck tightness after repeated curves on County 15 or the shoreline roads",
      "A low back that complains after dock work or a lift into a boat",
      "Weeks that include a trip to Big Island, reached by water",
      "Households that will plan the fourteen miles as a morning appointment",
    ],
    notFits: [
      "Chest pressure, or breath that suddenly will not come the usual way",
      "A high temperature with a painful back",
      "Pounds dropping off when you have no explanation for it",
    ],
  },
  provider: {
    title: "You see the same person after that lakeshore drive",
    body: "He has used the current Excelsior Boulevard suite since 1999. People driving in from the north shore see him on the first visit and on any later one. There is no associate to transfer you to.",
  },
  faqs: {
    title: "Orono questions",
    items: [
      { q: "How long is the trip from Orono?", a: "About fourteen miles, though the minutes change with which settlement you leave from. The suite is at 6200 Excelsior Boulevard, number 201, in Saint Louis Park. County 15 or Highway 12, then toward that boulevard, is the usual way." },
      { q: "I live in Navarre. Is that the same drive as Stubbs Bay?", a: "It is the same city, not the same start. The 1955 incorporation brought Navarre, Crystal Bay, Orono, and Stubbs Bay into one municipality. Tell us which one you are leaving from so we do not under-plan the clock." },
      { q: "I spend time on Big Island. Does that change the exam?", a: "It can. The island is inside Orono, and the city’s Nature Park there is reached by water, not by a road. If a lift into a boat or a day on that shore is in your week, bring it up. It is a different load than a car sit on County 15." },
      { q: "Do I need a doctor’s note first?", a: "You can book without a note from another doctor. Use the contact form and write Orono, plus the settlement if you know it." },
      { q: "Is Saturday an option if the weekday drive is hard?", a: "Saturday is by appointment only, and only when a weekday morning will not work. Call and ask. We will not assume a Saturday opening exists until we look at the book." },
    ],
  },
  related: {
    title: "Related pages for Orono readers",
    links: [
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If dock or uneven-ground work is clearly a foot problem" },
      { href: "/back-pain-treatments", label: "Back-pain care", note: "A longer page if a low back is the main complaint" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "The reasoning behind a short home list" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from County 15 or Highway 12" },
      { href: "/areas-we-serve/wayzata", label: "Wayzata", note: "The next city east along the lake" },
      { href: "/areas-we-serve/long-lake", label: "Long Lake", note: "A nearby starting point off Highway 12" },
    ],
  },
  sources: [SRC.oronoCity, SRC.oronoHistory, SRC.oronoAbout, SRC.oronoCensus, SRC.oronoBigIsland],
  cta: {
    title: "Book from the north shore",
    body: "Use the contact form, or ring the desk, and name Navarre, Crystal Bay, Stubbs Bay, or another start, plus whether a dock or Big Island filled the week. Ask for a morning opening.",
  },
};
