import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const edina: PseoHub = {
  slug: "edina",
  heroSubtitle:
    "Edina sits right next door. Most people here reach Suite 201 by Highway 100 and the Excelsior Boulevard exit, a trip of roughly three miles from the Morningside side of town.",
  keyFacts: [
    { label: "Miles from Edina", value: "Roughly 3" },
    { label: "Edina population", value: "53,494 (2020 census)", sourceId: "edina" },
    { label: "Usual road", value: "Highway 100", sourceId: "hwy-100" },
    { label: "County", value: "Hennepin" },
  ],
  intro: {
    eyebrow: "Edina, close to home",
    title: "A Saint Louis Park office that Edina already drives past",
    paragraphs: [
      "Plenty of our Edina patients tell us they found the office because they pass it. The building at 6200 Excelsior Blvd, Suite 201, Saint Louis Park is a short hop over the city line, and for people living near 50th & France or in Morningside it is often closer than errands on the far side of their own city. That proximity matters more than it sounds. Care that fits between school pickup and a meeting tends to get finished; care that needs a half-day trip tends to get dropped after visit two.",
      "Edina is not a small place to cross, though. The city covers almost 16 square miles[^edina], so a family near Braemar or the southwest neighborhoods has a different trip than someone off France Avenue. We ask where you start from when you book, not to be nosy, but so the first appointment lands at an hour that will not leave you rushing back across town.",
      "What brings Edina residents in is ordinary and specific at the same time: a neck that stiffened during a long stretch at a laptop, a low back that complains after hauling bags through a store, a shoulder blade that aches after a weekend raking under the oaks. Dr. Alan Levitt has been treating that kind of mechanical pain since 1987, and he would rather spend the first visit understanding which movement provokes it than guessing from the description alone.",
    ],
  },
  atAGlance: {
    title: "Edina at a glance",
    items: [
      { label: "Incorporated", value: "1888, one of the first Minneapolis suburbs", sourceId: "edina" },
      { label: "Creek", value: "Minnehaha Creek runs through town", sourceId: "minnehaha-creek" },
      { label: "Big employer", value: "Fairview Southdale Hospital", sourceId: "edina" },
      { label: "Clinic hours", value: "Mon–Fri mornings, Mon & Thu afternoons, Sat by appointment" },
    ],
  },
  localFacts: {
    title: "Things that shape an Edina visit",
    intro: "A few facts about Edina that change how we plan a first appointment for people who live there.",
    cards: [
      {
        title: "Mall walking is real exercise",
        body: "Southdale Center opened in 1956 as the first fully enclosed, climate-controlled shopping mall in the country. On January mornings its indoor loop is where a lot of people keep walking, and walking is often part of the home plan we write.",
        sourceId: "southdale",
      },
      {
        title: "A creek-side history",
        body: "Edina started as a farming and milling settlement along Minnehaha Creek in the 1860s. The creek path still pulls people outdoors, and an uneven trail is one of the more common places a cranky ankle or knee shows up.",
        sourceId: "edina",
      },
      {
        title: "The hospital is in town",
        body: "Fairview Southdale Hospital is among the largest employers in Edina. If a hospital or urgent-care visit already ruled out something serious, bring that paperwork; it saves repeating tests and lets us start where they stopped.",
        sourceId: "edina",
      },
      {
        title: "A mall trip is not a first exam",
        body: "Southdale is close enough that some Edina patients hope to attach a visit to an errand they are already making at the mall. That can work for a short follow-up. A first visit is a full exam, not a stop between stores. If you want to combine the two, tell us when you book, and we will look for a morning time that does not rush the exam or the walk through the 1956 building.",
        sourceId: "southdale",
      },
    ],
  },
  diagram: {
    title: "Edina to Suite 201",
    caption: "Our own sketch of the usual Edina trip. Evening traffic on Highway 100 stretches it; mid-morning is usually calmer.",
    stops: [
      { label: "50th & France or Morningside", note: "Common starting point" },
      { label: "Highway 100 (Lilac Way)", note: "North toward Saint Louis Park" },
      { label: "Excelsior Boulevard exit" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 3, note: "Second floor" },
    ],
    legs: ["France Ave or local streets", "Highway 100 northbound", "A short run on Excelsior"],
  },
  sections: [
    {
      eyebrow: "What people bring in",
      title: "The complaints we hear most from Edina",
      paragraphs: [
        "Desk necks lead the list. Hybrid work means the kitchen island has quietly become an office, and the screen sits too low for eight hours. People describe a band of tightness at the base of the skull that turns into a headache by mid-afternoon. In the exam we check how far the head turns and tips, which joints in the upper back have stopped moving, and whether anything travels into the arm. Tingling or weakness in a hand changes the plan, so we look for it early.",
        "Low backs come next, often tied to something that felt minor: lifting a toddler out of a car seat, loading a cooler for the cabin, an afternoon of shoveling heavy spring snow. Most of these settle with time, but the stiffness can hang on longer than people expect. A 2017 guideline from the American College of Physicians puts heat, massage, acupuncture and manipulation ahead of pills for a back that went out recently, and it is frank that these backs tend to get better on their own as well[^qaseem-2017]. We say that out loud on the first visit, because honest expectations make the plan easier to follow.",
        "Feet and knees round it out. A long day at a retail counter or on a hard floor can show up as heel or arch pain, and that sometimes leads to a conversation about {custom foot orthotics|/custom-foot-orthotics}. We will not push an orthotic on someone whose problem is clearly somewhere else.",
      ],
    },
    {
      eyebrow: "The hands-on part",
      title: "How the adjustment itself is chosen",
      paragraphs: [
        "Dr. Levitt uses three approaches, and he picks after the exam, not before. Diversified is the familiar quick, specific push to a stiff joint. Zone Therapy and Torque Release are gentler, and he leans toward them when a disc is irritable, when someone is nervous, or when an older patient simply prefers less force. You can ask for the gentler route at any point; nothing about the plan depends on hearing a pop.",
        "The research on manipulation is useful without being magic. A 2019 review in the BMJ found that for chronic low back pain it worked about as well as the other approaches guidelines endorse, and it reminded clinicians to explain possible side effects such as short-lived soreness[^rubinstein-2019]. That is roughly how we present it: one tool among several, combined with movement you do at home.",
      ],
    },
  ],
  process: {
    title: "Your first appointment, from Edina",
    intro: "The first visit runs longer than later ones. Here is the order of things so nothing is a surprise.",
    steps: [
      { title: "Leave a few minutes early", body: "Highway 100 can back up near the Excelsior Boulevard exit at rush hour. Arriving 10 to 15 minutes early leaves time for intake forms." },
      { title: "Tell us what set it off", body: "Jot down on your phone the day it began, the positions that aggravate it and any remedies you have tried. Memory gets fuzzy on an exam table." },
      { title: "Hands-on testing", body: "Dr. Levitt moves the sore area through its range, tests strength and nerve function, and orders an X-ray only when something he finds justifies one." },
      { title: "A plan you can actually follow", body: "You leave knowing what we think is going on, what we will do, roughly how often, and one or two movements to do at home between visits." },
    ],
  },
  comparison: {
    title: "Three adjustment styles used here",
    intro: "Patients often ask what the difference is. A plain-language comparison:",
    columns: ["Approach", "What it feels like", "Often chosen when"],
    rows: [
      ["Diversified", "A quick, specific thrust; sometimes an audible release", "A joint is clearly restricted and the person is comfortable with a firmer touch"],
      ["Zone Therapy", "Slower, lighter contact", "Pain is flared up, or the patient wants a softer start"],
      ["Torque Release", "A small instrument delivers a light, precise impulse", "A gentler option is preferred, including for many older adults"],
    ],
    note: "Which one is used depends on your exam. You can always ask for a different approach.",
  },
  whoFor: {
    title: "When an Edina visit makes sense, and when it does not",
    fitsTitle: "A good fit",
    notFitsTitle: "Go elsewhere first",
    fits: [
      "Neck or upper-back stiffness that builds over a workweek",
      "Low back pain that started with lifting, bending or a long drive",
      "Heel or arch pain linked to long hours standing",
      "Preferring to try hands-on care before prescriptions",
    ],
    notFits: [
      "An arm or leg that suddenly turns weak, or any loss of control over the bladder: that belongs in an ER today",
      "Back pain with fever, or after a serious fall with numbness",
      "A severe, sudden headache unlike any you have had",
    ],
  },
  provider: {
    title: "Who you will see",
    body: "Dr. Alan Levitt earned his degree at Northwestern College of Chiropractic in nearby Bloomington in 1986 and has run this office at 6200 Excelsior Blvd since 1999. He sees every patient himself, so the person who examined you is the person who treats you.",
  },
  faqs: {
    title: "Questions Edina residents ask",
    items: [
      { q: "Is there an office in Edina?", a: "No. There is one office, at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. From most of Edina it is about a three-mile drive by Highway 100." },
      { q: "Does my Edina physician have to send me?", a: "No referral is needed to see a chiropractor in Minnesota. If your physician has given you restrictions, bring them and we will work within them." },
      { q: "Can I come on a Saturday?", a: "Saturday visits are by appointment. Weekday hours are Monday through Friday mornings, plus Monday and Thursday afternoons. Call 952-920-7535 to set one up." },
      { q: "I walk the Southdale loop in winter. Is that enough exercise for my back?", a: "For many people steady walking is a solid base. We may add one or two specific movements depending on what the exam shows, and we keep the list short on purpose." },
      { q: "Will it hurt?", a: "Most people feel pressure, not pain. Mild soreness for a day afterward is common and usually fades quickly[^rubinstein-2019]. If you prefer a lighter touch, say so; there are gentler techniques." },
      { q: "I shop or work around Southdale and thought the office was farther than it is. Is that a regular story?", a: "Yes. People who spend their week at Southdale often overestimate the remaining distance to Suite 201. Once they have done the trip once, many of them start treating it as a local errand rather than a special outing. Mention Southdale when you book if that is your starting point; it helps us suggest a time that does not fight the mall traffic." },
      { q: "Does it matter which Edina neighborhood I am coming from?", a: "It does, a little. A start near the creek or the Country Club side is not the same drive as a start near Southdale, and the week that goes with those neighborhoods is often different too. Tell us the neighborhood by name. We would rather hear 'near 50th and France' or 'near Southdale' than a vague 'I live in Edina.'" },
    ],
  },
  related: {
    title: "Pages Edina patients read next",
    links: [
      { href: "/areas-we-serve/edina/back-pain-treatments", label: "Back pain care for Edina", note: "What the exam looks for in the lower back" },
      { href: "/areas-we-serve/edina/custom-foot-orthotics", label: "Orthotics for Edina", note: "When feet are part of the problem" },
      { href: "/neck-pain", label: "Neck pain", note: "Desk necks and tension headaches" },
      { href: "/new-patient-center/what-to-expect", label: "What to expect", note: "The first visit, step by step" },
      { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "Training and background" },
      { href: "/areas-we-serve/richfield", label: "Richfield", note: "Next door to Edina, across Highway 62" },
    ],
  },
  sources: [SRC.edina, SRC.southdale, SRC.minnehaha, SRC.hwy100, SRC.qaseem, SRC.rubinstein],
  cta: {
    title: "Book from Edina",
    body: "Tell us which part of Edina you are coming from, and we will suggest a time that keeps Highway 100 out of its worst hour.",
  },
};
