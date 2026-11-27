import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const plymouth: PseoHub = {
  slug: "plymouth",
  heroSubtitle:
    "Plymouth is Hennepin County’s large northwestern suburb, with Medicine Lake inside the city and Clifton E. French Regional Park on the lake’s north shore. From mid-town Plymouth, the trip here is about 9 miles, usually on I-394 or via 169 and I-494, then toward Excelsior Boulevard. We still treat that as a planned visit, even though it is one of the shorter drives we hear about.",
  keyFacts: [
    { label: "Trip from mid-town", value: "About 9 miles on 394 or 169", sourceId: "plymouth-about" },
    { label: "2020 census", value: "81,026 people", sourceId: "plymouth-about" },
    { label: "Medicine Lake", value: "The second-largest lake in Hennepin County, in Plymouth", sourceId: "plymouth-about" },
    { label: "Usual roads", value: "I-394, or 169 to I-494, then toward Excelsior Boulevard", sourceId: "plymouth-about" },
  ],
  intro: {
    eyebrow: "Plymouth, around Medicine Lake",
    title: "The state’s seventh-largest city, nine miles from the suite, with a large lake in the middle of town",
    paragraphs: [
      "The City of Plymouth reports a 2020 census count of 81,026 people, and notes that a later Metropolitan Council estimate still placed it as Minnesota’s seventh-largest city[^plymouth-about]. The U.S. Census Bureau’s QuickFacts agrees on the 2020 figure[^plymouth-census]. This is a large city, not a small lakeshore village, and it is why we ask which part of Plymouth you actually leave from.",
      "City Hall is at 3400 Plymouth Boulevard[^plymouth-about]. That civic address is useful as a landmark, not as the start of every drive. A household leaving from the Medicine Lake shore, one leaving from the west side toward County 6, and one dropping onto I-394 closer to the southeast edge are not the same nine miles, and we would rather hear the actual on-ramp than a generic Plymouth label.",
      "The city’s about page says Medicine Lake, the second-largest lake in Hennepin County, sits in Plymouth and draws anglers and boaters[^plymouth-about]. Clifton E. French Regional Park, operated by Three Rivers Park District, is on the north shore at 12605 Rockford Road, with a swimming beach, a fishing pier, lighted trails, and a visitor center[^french-park]. If a beach day, a trail loop, or time on that water is in your week, it belongs in the history. Three Rivers lists 886 acres of water with that park — Medicine Lake itself, not an upland acreage figure[^french-park]. A beach hour, a pier sit, and a lighted-trail walk are not interchangeable.",
      "The suite is 6200 Excelsior Blvd, number 201, in Saint Louis Park — roughly a nine-mile trip from mid-town Plymouth. Many drivers use I-394. Others come south on 169 and across on I-494, then toward the boulevard. Nine miles can still become a long sit if you leave at the wrong hour on 394, so tell us which of those roads you actually use.",
      "City Hall is at 3400 Plymouth Boulevard[^plymouth-about]. Some people start near the civic campus. Many more start on the west side of the city, or on the Medicine Lake shore, and only later reach 394. The start changes the clock, even when the address on the form is the same.",
    ],
  },
  atAGlance: {
    title: "Plymouth, as the city and Three Rivers describe it",
    items: [
      { label: "How large the city is", value: "81,026 people in 2020; among the state’s largest cities", sourceId: "plymouth-about" },
      { label: "Medicine Lake", value: "Second-largest lake in Hennepin County, inside Plymouth", sourceId: "plymouth-about" },
      { label: "French Regional Park", value: "12605 Rockford Road, north shore, with a beach, pier, and lighted trails", sourceId: "french-park" },
    ],
  },
  figure: {
    src: "/images/3d-spine-simulator.jpg",
    alt: "A model of the spine used to explain a finding in the exam room",
    caption: "A Plymouth week may be a 394 sit, a loop at French Regional Park, or time on Medicine Lake. We explain the finding against the week you actually had, not against a generic “west metro” average.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Plymouth facts we want in the first conversation",
    cards: [
      {
        title: "Medicine Lake is in the city, and it is a large one",
        body: "The city’s about page calls Medicine Lake the second-largest lake in Hennepin County and a magnet for anglers and boaters[^plymouth-about]. Three Rivers lists 886 acres of water at French Regional Park on the north shore, with boat, kayak, and canoe rentals in season and an accessible fishing pier[^french-park]. If a lift into a boat, a day on the pier, or a walk along that shore is in your week, say so. It is a different load than a 394 commute.",
        sourceId: "plymouth-about",
      },
      {
        title: "French Regional Park has a beach, a pier, and lighted trails, not just a parking lot",
        body: "The official Three Rivers page puts Clifton E. French Regional Park at 12605 Rockford Road, on the north shore of Medicine Lake, and lists a swimming beach, a fishing pier, lighted trails, a play area, and a visitor center[^french-park]. A short paved loop between the visitor center and the beach, and a longer outing on the connecting Medicine Lake Regional Trail, do not ask the same things of a hip. Name which one you use.",
        sourceId: "french-park",
      },
      {
        title: "394 and 169 are not interchangeable starts",
        body: "From much of Plymouth, I-394 is the straight road toward the boulevard. From the north or west edge, 169 to I-494 is often the honest line. Nine miles on 394 at 5 p.m. is a different sit than nine miles mid-morning. When you book, name the road, not only the city.",
        sourceId: "plymouth-about",
      },
      {
        title: "The seventh-largest-city figure is a later estimate",
        body: "The city's about page gives the 2020 count of 81,026 and then a later Metropolitan Council estimate that still ranked Plymouth seventh in the state[^plymouth-about]. We use both only as a size check. A large city has more than one edge, and a start near Medicine Lake is not the same nine miles as a start that drops onto 394 closer to the southeast.",
        sourceId: "plymouth-about",
      },

      {
        title: "A short paved loop and a 10.4-mile hiking week are not the same outing",
        body: "Three Rivers lists a paved 1.1-mile Trail at Your Pace near the visitor center, with rest stops every quarter mile, and a paved loop between the visitor center and the beach[^french-park]. Spring through fall, hiking mileage is listed at 10.4 miles; in winter it drops to 2.7 miles. Those are not interchangeable outings, and the first history should say which one you were on.",
        sourceId: "french-park",
      },
      {
        title: "The swimming beach has a published summer window",
        body: "The swimming beach on Medicine Lake is listed as open from Memorial Day weekend through Labor Day, 9 a.m. to 8 p.m. daily[^french-park]. A midsummer beach hour is a different load than a January walk on the Medicine Lake Regional Trail, which Three Rivers notes as a winter walking option from the visitor center.",
        sourceId: "french-park",
      },
      {
        title: "Lighted fall trails, and ski trails that are not for winter walking",
        body: "Lighted trails named Lagoon, Lakeview, and Skyline stay lit until 10 p.m. in the fall until winter trail operations begin, typically after two to three inches of snowfall[^french-park]. Cross-country ski trails are listed at 5.8 miles, starting at the visitor center, and a daily or season pass is required. Hiking on those ski trails in winter is not permitted. A lighted evening walk in October is not a January ski morning.",
        sourceId: "french-park",
      },
      {
        title: "The Nature Exploration Area is thirty ungroomed acres, not the paved loop",
        body: "Dog trails are listed at 4.6 miles, on a six-foot, non-retractable leash, and dogs are not permitted on the ski trails in winter[^french-park]. The 30-acre Nature Exploration Area is an ungroomed turf loop around a pond and wetlands — a different surface than the paved Trail at Your Pace. A pier sit, with nearly a mile of shoreline and an accessible fishing pier listed on the same page, should be named separately from either of those walks.",
        sourceId: "french-park",
      },
    ],
  },
  diagram: {
    title: "From Medicine Lake or 394 into the suite",
    caption: "A sketch. Many people come down I-394 and continue toward Excelsior Boulevard. Others use 169 to I-494. About 9 miles, with more minutes when 394 is slow.",
    stops: [
      { label: "Mid-town Plymouth, the civic campus, or the Medicine Lake shore", note: "The start changes the clock" },
      { label: "I-394, or 169 to I-494", note: "The two usual ways south and east" },
      { label: "Toward Excelsior Boulevard" },
      { label: "Suite 201 on the second floor", note: "Last turn off the boulevard" },
    ],
    legs: ["Onto 394 or 169", "Toward the boulevard", "The last turn into the lot"],
  },
  sections: [
    {
      eyebrow: "A large city, a large lake, a short but busy drive",
      title: "Nine miles can be a 394 week or a lake week",
      paragraphs: [
        "A weekday from Plymouth is often a neck after I-394. A weekend is more often a hip or low back after the beach, the pier, or a trail loop at French Regional Park. A boat week on Medicine Lake adds a lift we want named in the history. We write the short list for whichever of those actually filled the month, not for a blend of all three.",
        "If a trail or shore week is clearly a foot problem, we may discuss {custom foot orthotics|/custom-foot-orthotics}. If the week is not about the feet, we leave the subject out. There is more on {the exercise approach|/therapeutic-exercise} elsewhere on the site; what you leave with is still the two movements already tried here.",
      ],
    },
    {
      eyebrow: "What you take back toward 394",
      title: "Work you can reuse after a 394 sit, or at the visitor-center lot",
      paragraphs: [
        "If 394 is the louder half, the pair is often a chin nod you can do before you rejoin the ramp, and a seated mid-back press. If a park or lake week is louder, we usually teach a hip fold you can repeat at the visitor-center lot before you walk to the beach or the pier. Both will already have been done here. If a later visit is warranted, we will try to hold a morning that avoids the 394 afternoon.",
      ],
    },
  ],
  process: {
    title: "How we place a Plymouth visit so nine miles on 394 is not the whole story",
    steps: [
      { title: "Book a morning, when 394 is usually the kinder road", body: "Weekday mornings are the usual book from Plymouth, because a late run on 394 is a longer sit. Saturday exists only by appointment, and only if a weekday morning will not work; we do not automatically hold one." },
      { title: "Name the road and the shore, not only the city", body: "Whether you use 394 or 169 to 494, and whether French Regional Park or Medicine Lake is in the week, is more useful than a general Plymouth label. The intake can be emailed first, so you are not completing it in the lot." },
      { title: "Watch, explain, then decide", body: "You practice the two movements in the room; we do not send a printout of things you have not tried. Hands-on care, if it belongs, comes after that conversation, not before it." },
      { title: "Leave with two practiced movements and a clear next step", body: "You will know, before you get back on 394, whether a second nine-mile trip is warranted, and you will already have done the work we are sending with you." },
    ],
  },
  comparison: {
    title: "When nine miles from Plymouth is a fair first exam",
    columns: ["The week you describe", "Whether starting here is fair"],
    rows: [
      ["A neck after I-394, or a low back after French Regional Park or a day on Medicine Lake", "An exam here is a fair first call"],
      ["A fall, or a file already open with your physician about bone health", "That file stays with them"],
      ["A leg that gives way, or chest pain with shortness of breath", "Go in as an emergency. Do not drive 394 to this suite first."],
    ],
    note: "If you are unsure of the row, call the clinic before you get on 394.",
  },
  whoFor: {
    title: "Plymouth weeks we already see in this suite",
    fitsTitle: "When nine miles on 394 is worth booking",
    notFitsTitle: "Do not start with a 394 drive",
    fits: [
      "A tight neck or mid-back after I-394 or a 169-to-494 sit",
      "Hips or a low back after the beach, pier, or trails at French Regional Park",
      "Weeks that include a boat or a shore day on Medicine Lake",
      "People who will treat nine miles on 394 as a planned morning visit",
    ],
    notFits: [
      "New trouble with bowel or bladder control",
      "A painful back plus a fever you cannot explain",
      "Weight coming off, with no cause you already know",
    ],
  },
  provider: {
    title: "Dr. Levitt sees you after you have come down 394",
    body: "There is no associate bench. Nine miles down 394 still ends in the same exam room, on the first visit and on any later one we recommend.",
  },
  faqs: {
    title: "Questions we hear from Plymouth",
    items: [
      { q: "How long is the trip in from Plymouth?", a: "About nine miles. The office is at 6200 Excelsior Blvd in Saint Louis Park, suite 201 on the second floor. Most people use I-394, or 169 to I-494, then head toward that boulevard." },
      { q: "I use French Regional Park on weekends. What should I bring?", a: "Wear the pair you used at the beach or on the trails, and be ready to say whether you were on the short paved loop, the fishing pier, or a longer stretch of the Medicine Lake Regional Trail. Also say whether the ache starts while you are out or only the next morning." },
      { q: "Is Medicine Lake actually in Plymouth?", a: "Yes. The city’s about page says Medicine Lake, the second-largest lake in Hennepin County, is located in Plymouth. French Regional Park sits on its north shore at 12605 Rockford Road." },
      { q: "Can I schedule on my own?", a: "Yes. Call the clinic, say Plymouth, and we will look for a weekday morning." },
      { q: "If I come back, who do I see?", a: "Follow-up, if we recommend one, is also with Dr. Levitt." },
      { q: "Are the beach, the pier, and the trails at the same park?", a: "The official Three Rivers page lists a swimming beach, a fishing pier, lighted trails, and a visitor center together at Clifton E. French Regional Park, 12605 Rockford Road, on the north shore of Medicine Lake. Tell us which of those you actually used, and whether you were also on the water. Those are not interchangeable loads." },
      { q: "How long is the short paved loop at French Regional Park?", a: "Three Rivers lists a paved 1.1-mile Trail at Your Pace near the visitor center, with rest stops every quarter mile, plus a paved loop between the visitor center and the beach. Spring through fall, hiking mileage is listed at 10.4 miles; in winter it drops to 2.7 miles." },
      { q: "When is the Medicine Lake swimming beach open?", a: "The official page lists the beach as open from Memorial Day weekend through Labor Day, 9 a.m. to 8 p.m. daily, at Clifton E. French Regional Park, 12605 Rockford Road." },
    ],
  },
  related: {
    title: "Related pages for Plymouth readers",
    links: [
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If a trail, beach, or lot week is clearly a foot problem" },
      { href: "/back-pain-treatments", label: "Back-pain care", note: "A longer page if the low back is what filled the week" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "How we choose work you can reuse at the park or after a 394 sit" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from 394 or 169" },
      { href: "/areas-we-serve/maple-grove", label: "Maple Grove", note: "Just north, toward 169 and Arbor Lakes" },
      { href: "/areas-we-serve/minnetonka", label: "Minnetonka", note: "Just south, toward 394 and Ridgedale" },
    ],
  },
  sources: [SRC.plymouthAbout, SRC.plymouthCensus, SRC.frenchPark],
  cta: {
    title: "Plan the nine miles from Plymouth",
    body: "Call the clinic and say Plymouth. Tell us if 394, French Regional Park, or Medicine Lake is what filled the week, and ask for a weekday morning if one is still open.",
  },
};
