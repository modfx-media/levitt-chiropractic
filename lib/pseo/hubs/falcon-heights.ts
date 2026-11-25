import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const falconHeights: PseoHub = {
  slug: "falcon-heights",
  heroSubtitle:
    "Falcon Heights is about ten miles from Suite 201. From the fairgrounds or Larpenteur Avenue the usual trip is Snelling or Highway 280 to I-94, then I-394 or Highway 100 to Excelsior Boulevard.",
  keyFacts: [
    { label: "From Falcon Heights", value: "About 10 miles" },
    { label: "People living here, 2020", value: "5,369", sourceId: "falcon-heights" },
    { label: "A small map", value: "2.24 square miles, two-thirds of it public land", sourceId: "falcon-heights" },
    { label: "Unusual fact", value: "About two-thirds of the city is public land", sourceId: "falcon-heights" },
  ],
  intro: {
    eyebrow: "Falcon Heights",
    title: "A small city that spends most of its land on a university and a fair",
    paragraphs: [
      "Falcon Heights covers only 2.24 square miles. The 2020 census counted 5,369 people, but the city does not behave like a typical small suburb[^falcon-heights]. About two-thirds of the city is public land, chiefly the University of Minnesota and the Minnesota State Fairgrounds[^falcon-heights]. The trip to 6200 Excelsior Blvd, Suite 201, Saint Louis Park is about ten miles, usually by Snelling Avenue or Larpenteur to Highway 280 or I-94, then I-394 or Highway 100 to Excelsior Boulevard.",
      "That mix of a quiet residential grid and two very large public campuses is the reason we write this page carefully. A household on a short residential street has a different week than someone who works on the university fields or spends long days on the fairgrounds. The exam has to hear which of those is actually yours.",
      "Ten miles is inside our range and is often a calm mid-morning trip. Late afternoon through the Snelling and 94 junction is a different story, especially in late August. When you book, tell us whether fair season or a campus calendar is part of your week.",
    ],
  },
  atAGlance: {
    title: "Falcon Heights background",
    items: [
      { label: "Early farmstead", value: "Heman Gibbs settled near Cleveland and Larpenteur in the 1850s; the homestead is a county museum and is listed on the National Register", sourceId: "falcon-heights" },
      { label: "An early airfield", value: "Curtiss Northwest Airport stood at Snelling and Larpenteur from the 1910s into the 1930s; the land is now Curtiss Field park", sourceId: "falcon-heights" },
      { label: "Schools", value: "Served by the Roseville Area School District; Falcon Heights Elementary is the school inside the city", sourceId: "falcon-heights" },
      { label: "Township roots", value: "Part of Rose Township until mid-century incorporation, along with Roseville and Lauderdale", sourceId: "roseville" },
    ],
  },
  localFacts: {
    title: "Falcon Heights facts you will not find on a generic city page",
    cards: [
      {
        title: "The Gibbs farm is still there",
        body: "Heman Gibbs settled in the 1850s near the modern intersection of Cleveland and Larpenteur Avenues. His homestead is on the National Register of Historic Places and is now a Ramsey County museum. It is one of the few places in the city where the older farm story is still visible.",
        sourceId: "falcon-heights",
      },
      {
        title: "Lindbergh landed here, and the field became a park",
        body: "Curtiss Northwest Airport, at Snelling and Larpenteur, was important in Minnesota aviation history and hosted Charles Lindbergh, Speed Holman and Phoebe Fairgrave. Part of that land is now Curtiss Field, a city park. A walk there is a common, low-key way people in this city stay moving.",
        sourceId: "falcon-heights",
      },
      {
        title: "A fair that has been on this ground since 1885",
        body: "The Minnesota State Fair first opened on this site — then the Ramsey County Poor Farm — on September 7, 1885. The grounds covered 210 acres then and cover 322 acres now. The fair has run 12 days since 1975, and the site was chosen in part because it sat about halfway between Minneapolis and Saint Paul.",
        sourceId: "state-fair",
      },
      {
        title: "One elementary school, and a district next door",
        body: "Falcon Heights is served by the Roseville Area School District. Falcon Heights Elementary is the only school inside the city boundary, and its park has two playgrounds, one of them built in 2006[^falcon-heights]. If a school-year drop-off is part of how you move through the morning, tell us; it is often easier to place a mid-morning visit after that loop than to invent a new commute.",
        sourceId: "falcon-heights",
      },
    ],
  },
  diagram: {
    title: "Falcon Heights to Suite 201",
    caption: "From the fairgrounds, Snelling is usually the first decision. Mid-morning is calmer than late afternoon, and late August needs an even wider window.",
    stops: [
      { label: "Falcon Heights", note: "Fairgrounds, Larpenteur or Cleveland" },
      { label: "Snelling or Highway 280", note: "To I-94" },
      { label: "I-394 or Highway 100" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 10 },
    ],
    legs: ["Snelling or 280 to 94", "94 toward 394 or 100", "Excelsior exit"],
  },
  sections: [
    {
      eyebrow: "Fair season is a real scheduling problem",
      title: "Twelve days, 322 acres, and a lot of standing",
      paragraphs: [
        "If you work the fair, or if you spend long days walking it, tell us. Twelve days of standing, carrying and walking 322 acres is an ordinary way for the feet, hips, and low back to flare, and it is also a terrible week to invent a complicated freeway appointment. We would rather see you before the fair, or after it, than in the middle of the worst traffic of the year.",
        "The official fair site lists dates, maps and accessibility information each year[^state-fair-official]. For care, the useful part is simpler: say whether your week is a fair week. The exam and the appointment time both change with that answer.",
      ],
    },
    {
      eyebrow: "A residential city in the leftover third",
      title: "Quiet streets, and a ten-mile trip that is still worth planning",
      paragraphs: [
        "The residential part of Falcon Heights is small and close-grained, and many people already run errands in {Roseville|/areas-we-serve/roseville} or {Saint Paul|/areas-we-serve/saint-paul}. If that is your pattern, we can often set the visit next to a trip you are already making through those cities.",
        "Long days on the fairgrounds, or a campus week that leaves the low back sore, are ordinary reasons people in Falcon Heights book a visit. Skim the {back pain treatments|/areas-we-serve/falcon-heights/back-pain-treatments} page if you want a sense of how we usually start. The appointment remains an exam, and if what we find says you should start somewhere else, we would rather tell you that before you plan another run down Snelling or I-94.",
      ],
    },
    {
      eyebrow: "Neighbors from the same township",
      title: "Roseville and Lauderdale",
      paragraphs: [
        "Rose Township once included the land that became Roseville, Lauderdale and Falcon Heights[^roseville]. {Lauderdale|/areas-we-serve/lauderdale} is a very small neighbor with a short trip of its own. If you live near that line, tell us; the ten-mile average may be a little long or a little short.",
        "For a first read on what a visit usually includes, our {common chiropractic conditions|/areas-we-serve/falcon-heights/common-chiropractic-conditions} page is a reasonable starting point. It is not a substitute for the exam.",
      ],
    },
    {
      eyebrow: "A small city with two calendars",
      title: "The fair, the campus, and a short residential grid",
      paragraphs: [
        "Most of Falcon Heights is not a typical suburban street grid. About two-thirds of the city is public land, chiefly the University of Minnesota and the State Fairgrounds, and the residential part is close-grained around that[^falcon-heights]. A household on a short residential street has a different morning than someone who works on the campus or who works the fair. We ask which of those weeks you are actually living, because a ten-mile trip that is calm in February can be a different drive in late August.",
        "Falcon Heights Elementary is the only school inside the city, and a school-year drop-off often shapes the morning more than the freeway does[^falcon-heights]. If that loop is already part of how you move, it is usually easier to place a visit after it than to invent a new commute. Curtiss Field, on land that was once Curtiss Northwest Airport, is the walk a lot of people already take; if that is your ordinary loop, say so, and we will try to use it rather than invent a new one on paper.",
      ],
    },
  ],
  process: {
    title: "What a first Falcon Heights visit looks like",
    steps: [
      { title: "Say if you are leaving from the fairgrounds, the campus, or a residential street", body: "Late August and a campus calendar change the ten miles. A mid-morning time is usually quieter than a late-afternoon run through the Snelling and 94 junction." },
      { title: "Come with a license, and with any report already sitting at home", body: "If a film or a brief summary is already in a drawer, pack it with your ID so the first appointment does not have to stop early." },
      { title: "Leave knowing if hands-on care here is actually a fit", body: "By the end of the visit, Dr. Levitt will tell you whether staying here is likely to help, or whether you should start in another setting first." },
      { title: "Take homework that can sit next to a campus or fair week", body: "A couple of movements that can live on a short residential street, or after a long day on the fairgrounds. We look at those same ones the next time you are here." },
    ],
  },
  comparison: {
    title: "Fair week, campus week and a quiet residential week",
    columns: ["The week in question", "What usually hurts afterward", "What we usually address first"],
    rows: [
      ["Fair or long walking days", "Fair or campus days on your feet that leave the soles spent and the hips worn down", "Footwear, pacing, recovery after a long day"],
      ["Campus or desk week", "Stiff neck and upper back", "Screen setup, short breaks, upper-back mobility"],
      ["Ordinary residential week", "Everyday stiffness from work, chores or a first long walk of the season", "A short home routine you can keep"],
    ],
  },
  whoFor: {
    title: "Falcon Heights weeks this clinic already recognizes",
    fitsTitle: "A Falcon Heights morning is a reasonable use of the trip when",
    notFitsTitle: "Do not come down Snelling or 94 for this",
    fits: [
      "Fair or campus days on your feet that leave the soles spent and the hips worn down",
      "A desk or lab week that has the neck locked up by the time you walk in the door",
      "A walk at Curtiss Field, or around the neighborhood, that leaves you walking carefully the next morning because the hips or the low back tightened overnight",
      "A plan that can pause or adapt during the twelve days of the State Fair",
    ],
    notFits: [
      "If a hand or a foot suddenly will not do its usual job, go to an emergency department",
      "Tightness through the chest, or breath that comes in short pulls, is a medical emergency",
      "Feeling ill all over, or a fever with the backache, means a medical visit comes first",
    ],
  },
  provider: {
    title: "Who Falcon Heights patients meet",
    body: "The doctor a Falcon Heights patient meets is Dr. Alan Levitt, each time. He completed the chiropractic program at Northwestern in 1986, began practice the next year, and moved the clinic into its current Excelsior Boulevard suite in 1999.",
  },
  faqs: {
    title: "Falcon Heights FAQs",
    items: [
      { q: "What is the usual way down from Falcon Heights?", a: "You are heading about ten miles to 6200 Excelsior Blvd, Suite 201, Saint Louis Park. A common path is Snelling Avenue or Highway 280 onto I-94, then a leave for 394, or for Highway 100, just before you reach the office." },
      { q: "Does the State Fair change how you schedule?", a: "Yes. If late August will change your week or the drive, tell us when you book. We will look for a mid-morning time that keeps the ten miles predictable." },
      { q: "Do you treat fair or campus workers who commute from another city?", a: "Yes. Tell us the work site and the home city so the time matches the actual commute, not only a Falcon Heights mailing address." },
      { q: "Are Saturday times available?", a: "Weekend openings are reserved in advance. You can reach us at 952-920-7535 to ask whether one is still free this week." },
    ],
  },
  related: {
    title: "Falcon Heights pages, plus Roseville, Lauderdale, and Saint Paul",
    links: [
      { href: "/areas-we-serve/falcon-heights/common-chiropractic-conditions", label: "Common conditions", note: "A first read before the exam" },
      { href: "/areas-we-serve/roseville", label: "Roseville", note: "The larger township neighbor" },
      { href: "/areas-we-serve/lauderdale", label: "Lauderdale", note: "A very small neighbor from the same township" },
      { href: "/areas-we-serve/saint-paul", label: "Saint Paul", note: "Along the city's southern edge" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.falconHeights, SRC.stateFair, SRC.stateFairOfficial, SRC.roseville],
  cta: {
    title: "Book from Falcon Heights",
    body: "If late August or a campus calendar will change the drive, tell us that when you book. We will look for a mid-morning time that keeps the ten miles predictable.",
  },
};
