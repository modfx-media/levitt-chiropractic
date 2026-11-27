import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const savage: PseoHub = {
  slug: "savage",
  heroSubtitle:
    "Savage is the Scott County river town that used to be called Hamilton, renamed in 1904 for the man who owned Dan Patch. It sits on the south bank of the Minnesota River, and reaching our office means crossing that river first. Plan on about 14 miles.",
  keyFacts: [
    { label: "McColl Drive to the suite", value: "About 14 miles" },
    { label: "People in 2020", value: "32,465", sourceId: "savage" },
    { label: "Renamed from Hamilton", value: "1904", sourceId: "savage-history" },
    { label: "Main local roads", value: "Highway 13 and County Road 42", sourceId: "savage" },
  ],
  intro: {
    eyebrow: "Savage, south of the river",
    title: "A former river landing that grew into a south-metro suburb with a large park reserve",
    paragraphs: [
      "The 2020 census put Savage at 32,465 people[^savage]. The town began in the 1850s as Hamilton Landing, where Scottish and Irish settlers stepped off steamboats from Fort Snelling near the mouth of the Credit River[^savage-history]. Rail arrived in 1865. In 1904 residents renamed the village after Marion W. Savage, the Minneapolis feed-company owner who kept the pacer Dan Patch at his stock farm along the river[^savage-history].",
      "Downtown is the roughly 17 blocks of the old village along Highway 13, and Highway 13 and County Road 42 are the roads most residents drive every day[^savage]. Interstate 35W and U.S. 169 both run close to the city. City Hall sits at 6000 McColl Drive[^savage-city]. Pieces of the Minnesota Valley National Wildlife Refuge and the Murphy-Hanrehan Park Reserve fall inside the city limits, which is why parts of Savage still feel undeveloped[^savage].",
      "Our office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. From Savage, the river is the first decision. Some drivers go east to 35W and cross there; others go west and take 169 north across the river. Both end on Excelsior Boulevard. Either way it is about 14 miles, which puts Savage near the edge of the area we serve. We would rather schedule one thorough visit than ask you to make the crossing three times a week.",
      "Savage also has a working riverfront. Port Cargill, once a World War II shipyard where Cargill built 18 fuel carriers and four towboats for the Navy, now takes in truckloads of Minnesota corn, wheat, and soybeans every day[^savage-history]. If you drive for a living, a long day in a truck cab tells us more than the zip code does.",
    ],
  },
  atAGlance: {
    title: "Savage in brief",
    items: [
      { label: "Named for", value: "Marion W. Savage, owner of the pacer Dan Patch", sourceId: "savage-history" },
      { label: "City Hall", value: "6000 McColl Drive, Savage, MN 55378", sourceId: "savage-city" },
      { label: "Park reserve", value: "Murphy-Hanrehan, at 15501 Murphy Lake Road", sourceId: "murphy-hanrehan" },
      { label: "County", value: "Scott, on the south bank of the Minnesota River", sourceId: "savage" },
    ],
  },
  figure: {
    src: "/images/chronic-lower-back-pain.jpg",
    alt: "A man holding his lower back, with an illustrated spine drawn over the photo",
    caption: "A truck cab, a ski trail, and a Highway 13 office chair each put a different kind of strain on a low back. The first visit sorts out which one you bring.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "What Savage residents bring to the conversation",
    cards: [
      {
        title: "Murphy-Hanrehan is hilly, wooded, and demanding",
        body: "Three Rivers Park District describes Murphy-Hanrehan as glacial ridges and thick forest, with about 21.4 miles of very hilly hiking trail, a 10-mile mountain-bike loop series, and nine miles of groomed ski trail meant for advanced skiers[^murphy-hanrehan]. Those are steep climbs and descents. If your weekends are on those trails, we want to know whether the trouble shows up on the climbs, on the way down, or the next morning.",
        sourceId: "murphy-hanrehan",
      },
      {
        title: "Port Cargill brings daily truck traffic",
        body: "The City of Savage notes that hundreds of trucks unload grain at Port Cargill every day[^savage-history]. Whether you drive one of those trucks or work in the yard, long seated hours with vibration, then climbing in and out of a cab, are a pattern we ask about directly. It changes what we look at and what we suggest for the drive home.",
        sourceId: "savage-history",
      },
      {
        title: "The farm that gave the town its name is mostly gone",
        body: "Marion Savage's International Stock Food Farm had a one-mile track, a covered half-mile track, and a heated stable with an onion-shaped dome; the stables were later destroyed by fire[^savage-history]. In 1906 Dan Patch paced a mile in 1:55 at the Minnesota State Fair, a world record at the time[^savage-history]. We mention this because it comes up in conversation, not because it changes care. A Savage first visit is usually about a commute and a weekend, not about horses.",
        sourceId: "savage-history",
      },
    ],
  },
  diagram: {
    title: "Across the Minnesota River and north",
    caption: "Two common ways from Savage, drawn as one line because they meet near the end. Cross the river on 35W or on 169, head north, and the last stretch is Excelsior Boulevard. Roughly 14 miles by either bridge. Not a live traffic map.",
    stops: [
      { label: "Highway 13 or County Road 42 in Savage", note: "Near McColl Drive or downtown" },
      { label: "The river crossing", note: "Interstate 35W to the east, or U.S. 169 to the west" },
      { label: "North through Bloomington and Edina", note: "Which streets depends on the bridge" },
      { label: "Upstairs at Suite 201", note: "Lot next to the building" },
    ],
    legs: ["Out to 35W or 169", "Across the river", "North to Excelsior"],
  },
  sections: [
    {
      eyebrow: "Commute, cab, or trail",
      title: "We ask which part of your Savage week you feel the most",
      paragraphs: [
        "In a city like Savage, three very different weeks can sit under the same roof. One person sits at a desk in an office park off Highway 13. Another spends the day in a truck cab running grain to the port. A third barely notices the workweek because their weekend is Murphy-Hanrehan: a long hike up the glacial ridges or a cold morning on the advanced ski loops. We ask which of those weeks is yours, and which part of it you feel afterward.",
        "That matters because the home routine follows it. A trucker's plan looks nothing like a trail runner's plan. If someone tells us their low back is worst after climbing out of a cab at the end of a run, we watch them do that motion, step down and all, in the office. If someone says it is the downhill sections at Murphy-Hanrehan, we look at how they load a step going down.",
        "Feet and shoes can be a factor for hikers and for anyone who stands in a yard all day. If that seems to be the case, {custom foot orthotics|/custom-foot-orthotics} may be part of the discussion. The general approach to home movement is on the {therapeutic exercise page|/therapeutic-exercise}. This page covers Savage; the service pages cover the care itself.",
      ],
    },
    {
      eyebrow: "What goes back across the river with you",
      title: "Short routines matched to a cab, a trail, or a desk",
      paragraphs: [
        "For drivers we usually start with a seated pelvic tilt you can do at a loading dock while you wait, plus a standing back extension to do once you are out of the cab, hands on the door frame. For hikers and skiers we prefer a slow step-down off a low stair and a hip hinge you can do with a trekking pole or ski pole for balance. For office weeks it is usually a chair-based shoulder blade squeeze and a short walk before the drive home.",
        "Whatever the pair is, we practice it here until you are comfortable. Then we tell you whether coming back would be worth the drive. If it is, we will try to time it so the 35W or 169 crossing is not at its busiest.",
      ],
    },
  ],
  process: {
    title: "What a first visit from Savage looks like",
    steps: [
      {
        title: "Pick a mid-morning time that avoids the bridge rush",
        body: "Weekday hours start at 8:30 a.m. and end at 11:30, with Wednesday running 10 a.m. to noon instead. On Mondays and Thursdays there is also an afternoon block from 2:30 to 5:30 p.m. From Savage, a mid-morning appointment usually puts you on the river crossing after the commuter wave. Saturdays are by appointment.",
      },
      {
        title: "Tell us whether it is a cab, a desk, or a trail",
        body: "When you call, say how your week usually goes and which part makes things worse. If you drive for work, mention roughly how many hours you are seated. If it is Murphy-Hanrehan, say whether it is hiking, biking, or skiing. Download the forms from the new patient center and fill them in before you leave home.",
      },
      {
        title: "History, then movement",
        body: "Dr. Levitt asks about the week, then watches you do the movements that bother you: stepping down, climbing into a seat, reaching, bending. He uses hands-on care only if it suits what he sees. If anything suggests a physician should be involved first, he will tell you plainly and will not start treatment.",
      },
      {
        title: "Practice the routine and make a plan",
        body: "You practice the two movements before leaving. Then you get a straight answer on whether more visits make sense, and how often, so you can decide whether the crossing is worth it.",
      },
    ],
  },
  comparison: {
    title: "Savage situations and where to begin",
    intro: "Not a diagnosis. A guide to the first call.",
    columns: ["Situation", "What we would suggest", "What to bring up"],
    rows: [
      ["Low back stiff after long hours in a truck cab or at a desk off Highway 13", "Book a visit here", "Hours seated per day, and how you get in and out of the seat"],
      ["Hips or knees sore after hilly hikes or the advanced ski loops at Murphy-Hanrehan", "Book a visit here", "Which trail, how far, and whether the climbs or the descents are worse"],
      ["A physician or specialist is already treating the same area, or monitoring bone density", "Check with them first", "Their name, so we can coordinate if they agree"],
      ["Sudden weakness, chest pain, fever with back pain, or a change in bladder or bowel control", "Go to urgent or emergency care, or call 911", "Do not drive across the river to see us first"],
    ],
    note: "Not sure where you fit? Call 952-920-7535 before getting on the highway.",
  },
  whoFor: {
    title: "Who comes up from Savage",
    fitsTitle: "Typical reasons to make the trip",
    notFitsTitle: "Start somewhere else",
    fits: [
      "Drivers whose low back tightens after a long day in the cab",
      "Hikers, mountain bikers, and skiers who use Murphy-Hanrehan's hilly trails",
      "Office workers along Highway 13 whose neck and shoulders stiffen by afternoon",
      "Anyone who wants to see the same doctor each time, even if it means a longer drive",
    ],
    notFits: [
      "A leg or arm that is suddenly weak or numb",
      "Loss of bladder or bowel control",
      "Back pain together with fever, chills, or weight loss you cannot explain",
    ],
  },
  provider: {
    title: "The doctor you meet is the doctor you keep",
    body: "Dr. Alan Levitt sees every Savage patient himself. He graduated from Northwestern College of Chiropractic in December 1986, started practicing in 1987, and moved into this Excelsior Boulevard suite in 1999. There is no handoff to an associate on the second visit. If you are crossing the river to see him, you will see him every time.",
  },
  faqs: {
    title: "Savage questions",
    items: [
      { q: "How far is the office from Savage City Hall?", a: "About 14 miles from 6000 McColl Drive. You cross the Minnesota River on either 35W or 169, then go north to Excelsior Boulevard in Saint Louis Park." },
      { q: "Which river crossing is better, 35W or 169?", a: "It depends on where in Savage you start and the time of day. In general the east side of town is closer to 35W and the west side is closer to 169. Leave a little extra time the first visit, whichever you choose." },
      { q: "I drive a truck. Can I come in my work clothes?", a: "Yes. Come as you are. If you can, tell us roughly how many hours you are seated and how often you climb in and out of the cab." },
      { q: "I ski at Murphy-Hanrehan. Should I wait until spring?", a: "No need to wait. If the advanced loops are bothering your knees or hips, coming in during ski season lets Dr. Levitt look at the problem while it is active." },
      { q: "Is there anything closer to Savage?", a: "Not from us. There is a single office, upstairs on Excelsior Boulevard in Saint Louis Park. That is why the first visit is built to give you a clear answer." },
    ],
  },
  related: {
    title: "More for Savage",
    links: [
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "How we pick the home routine" },
      { href: "/back-pain-treatments", label: "Back pain care", note: "The service page, with the clinical detail" },
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If trail miles or yard shifts load the feet" },
      { href: "/new-patient-center", label: "New patient center", note: "Download the forms before the drive" },
      { href: "/areas-we-serve/burnsville", label: "Burnsville", note: "The neighbor to the east, also south of the river" },
      { href: "/areas-we-serve/bloomington", label: "Bloomington", note: "Across the river, on the way north" },
    ],
  },
  sources: [SRC.savage, SRC.savageCity, SRC.savageHistory, SRC.murphyHanrehan],
  cta: {
    title: "Book from Savage",
    body: "Call 952-920-7535 or fill out the request form. Tell us whether your week is a cab, a desk, or a trail, and which bridge you plan to take. We will look for a mid-morning slot that keeps the crossing easy.",
  },
};
