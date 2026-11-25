import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const hopkins: PseoHub = {
  slug: "hopkins",
  heroSubtitle:
    "Hopkins and Saint Louis Park share Excelsior Boulevard, so the trip from Mainstreet to Suite 201 is about four miles on one road, or a ride on the regional trail when the weather allows.",
  keyFacts: [
    { label: "From Mainstreet", value: "About 4 miles" },
    { label: "Hopkins population", value: "19,079 (2020 census)", sourceId: "hopkins" },
    { label: "City size", value: "About 4 square miles", sourceId: "hopkins" },
    { label: "Main roads", value: "Highway 7, US 169", sourceId: "hopkins" },
  ],
  intro: {
    eyebrow: "Hopkins, one road over",
    title: "Same boulevard, different city",
    paragraphs: [
      "If you live in Hopkins, you probably already know Excelsior Boulevard better than you would like. It runs past the old Hopkins Depot at US 169[^cedar-lake-trail] and carries straight on into Saint Louis Park. Our office sits on that same boulevard at number 6200, Suite 201, so for most of town the drive is a straight shot of about four miles with no freeway needed.",
      "Hopkins is compact. The whole city fits in roughly four square miles and is wrapped by Minnetonka, Edina and Saint Louis Park[^hopkins]. That small footprint means two things for us. The trip is predictable, and plenty of people who live here are close enough to consider walking or biking part of the way when it is not January.",
      "The patients we see from Hopkins are a mixed group. Some work on their feet in shops along Mainstreet; others commute downtown and spend most of the day in a chair. A good number are retired and simply want to keep gardening and walking without a stiff back slowing them down. We try not to treat those as the same problem, because they are not.",
    ],
  },
  atAGlance: {
    title: "Hopkins notes",
    items: [
      { label: "Creek fact", value: "The north branch of Nine Mile Creek starts at 13th Ave S and Excelsior Blvd", sourceId: "hopkins" },
      { label: "Transit", value: "Three planned Green Line Extension stations in town", sourceId: "hopkins" },
      { label: "Trail", value: "A paved trail links Hopkins and Saint Louis Park", sourceId: "cedar-lake-trail" },
    ],
  },
  figure: {
    src: "/images/therapeutic-exercise.jpg",
    alt: "A clinician guiding an older man through a resistance-band exercise",
    caption: "Resistance-band work like this is a common part of the home routine we teach. Photo from the practice's existing site library.",
    width: 1095,
    height: 730,
  },
  localFacts: {
    title: "Hopkins details that come up in the exam room",
    cards: [
      {
        title: "A trail built for bike commuting",
        body: "The paved path known as the North Cedar Lake Regional Trail runs about 4.2 miles through Saint Louis Park to Hopkins. Riders who use it regularly often ask about neck and wrist strain from long stretches on the bars.",
        sourceId: "cedar-lake-trail",
      },
      {
        title: "Light rail is coming through",
        body: "Hopkins is planned to have three stations on the Metro Green Line Extension, at Shady Oak Road, Downtown Hopkins and Blake Road. Once it opens, a train ride will be another way to cross into Saint Louis Park.",
        sourceId: "hopkins",
      },
      {
        title: "Recreation is shared with Minnetonka",
        body: "The city runs its recreation programs jointly with Minnetonka. Adult leagues and classes are a common place for a calf, hamstring or low back to start complaining in the first week of a new season.",
        sourceId: "hopkins",
      },
    ],
  },
  diagram: {
    title: "Mainstreet to Suite 201",
    caption: "Our sketch, not to scale. Most Hopkins patients drive it; a few ride the trail into Saint Louis Park when it is warm.",
    stops: [
      { label: "Downtown Hopkins (Mainstreet)", note: "Start" },
      { label: "Excelsior Blvd at US 169", note: "Near the old Hopkins Depot" },
      { label: "Into Saint Louis Park on Excelsior Blvd" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 4, note: "Second-floor office" },
    ],
    legs: ["Mainstreet to Excelsior", "Under US 169", "Straight on to number 6200"],
  },
  sections: [
    {
      eyebrow: "Two kinds of Hopkins day",
      title: "Standing all shift, or sitting all day",
      paragraphs: [
        "A shift behind a counter loads the body differently than a day in front of a monitor. People who stand for hours usually point to the low back, the heels, or the outside of the hip, and they notice it most at the end of the week. People who sit tend to describe a neck that will not turn fully when checking a blind spot, or a dull ache between the shoulder blades. When we take your history, we ask which of those days you live most often, because the home exercises we suggest change depending on the answer.",
        "Neck pain is common among working adults. A large international task force found that roughly a quarter to nearly half of workers report neck pain in a given year, and around one in ten have their activities limited by it[^cote-2008]. Hearing that it is common will not fix it, but it does take some of the worry out of the first conversation.",
        "For standing workers, footwear and the surface you stand on come up quickly. If the exam suggests the feet are feeding the problem, we may talk about {custom foot orthotics|/areas-we-serve/hopkins/custom-foot-orthotics}. If not, we leave them alone.",
      ],
    },
    {
      eyebrow: "Between visits",
      title: "What we ask Hopkins patients to do at home",
      paragraphs: [
        "We keep homework short. Two movements done most days beat a sheet of twelve that gets lost on the fridge. For a sitter, that might be a chin tuck and a gentle upper-back extension over the back of a chair. For someone on their feet, it might be a hip hinge drill and a calf stretch on the curb outside the shop. We show you each one in the room and watch you do it.",
        "If you ride the trail, bring the bike details: handlebar height, how long the ride is, whether the pain starts during the ride or the next morning. Those small facts often explain more than the scan does. More on our approach to movement is on the {therapeutic exercise|/therapeutic-exercise} page.",
      ],
    },
  ],
  process: {
    title: "Planning a visit from Hopkins",
    steps: [
      { title: "Pick a time that suits your day", body: "Weekday office hours start at 8:30, except Wednesday, which starts at 10. Monday and Thursday also have afternoon hours, which suit people finishing an early shift." },
      { title: "Fill in the intake", body: "Arrive 10 to 15 minutes early, or ask about completing paperwork ahead of time." },
      { title: "Exam and history", body: "Expect questions about your workday, sleep position and activities, then a hands-on exam of motion, strength and sensation." },
      { title: "Treatment and homework", body: "If treatment is appropriate that day, it starts after the exam. You leave with one or two exercises you have already practiced." },
    ],
  },
  comparison: {
    title: "Getting from Hopkins to the office",
    columns: ["Option", "Good for", "Watch out for"],
    rows: [
      ["Car on Excelsior Blvd", "Any season; simplest for a first visit", "Signals near US 169 and Highway 7 at peak hours"],
      ["Bike on the regional trail", "Mild weather, regular riders", "The trail connects the two cities but does not end at our door; plan the last stretch on streets"],
      ["Future light rail", "Once the Green Line Extension opens", "Not running yet; check the planned stations before relying on it"],
    ],
    note: "Trail and rail details come from public sources listed below.",
  },
  whoFor: {
    title: "Is this office right for what you have?",
    fitsTitle: "Usually yes",
    notFitsTitle: "Get urgent care instead",
    fits: [
      "Back or hip soreness after long shifts on your feet",
      "Stiff neck that makes shoulder checks while driving awkward",
      "Achy upper back from cycling or desk work",
      "Older adults wanting a gentle approach to stay active",
    ],
    notFits: [
      "Numbness in the groin area or changes in bladder control",
      "Pain after a serious fall that you have not had checked",
      "Chest pain or shortness of breath alongside upper-back pain",
    ],
  },
  provider: {
    title: "One doctor, start to finish",
    body: "Dr. Alan Levitt has practiced since 1987 and has been at this Saint Louis Park address since 1999. Hopkins patients see him at every appointment rather than being handed off to rotating staff.",
  },
  faqs: {
    title: "Hopkins questions",
    items: [
      { q: "How far is the office from downtown Hopkins?", a: "About four miles, nearly all of it on Excelsior Boulevard. The address is 6200 Excelsior Blvd, Suite 201, Saint Louis Park." },
      { q: "Can I bike there?", a: "The regional trail links Hopkins and Saint Louis Park and is popular in warmer months. The trail does not end at the building, so plan a short street section at the end." },
      { q: "I stand all day at work. Should I bring my shoes?", a: "Yes. Bring the shoes you wear most at work. Wear patterns can tell us a lot about how you load your feet and hips." },
      { q: "Do you take walk-ins?", a: "Appointments are preferred so you are not left waiting. Call 952-920-7535 or use the online request form." },
      { q: "Is it safe for someone in their seventies?", a: "Often, yes. Gentler techniques such as Torque Release and Zone Therapy are available, and the exam screens for anything that would make adjustments a poor idea." },
      { q: "I work on Mainstreet and was wondering if the four-mile drive is even worth scheduling.", a: "For many Hopkins shop-and-shift workers, yes, because the road is Excelsior Boulevard the whole way and the visit stays with one doctor. The four miles are predictable when you are not fighting the 169/Highway 7 signals at the worst hour. If you stand a Mainstreet shift, say so when you book; the Monday or Thursday later window is often the one that actually fits." },
      { q: "The depot and the trail come up in conversation here. Should I mention if I use them?", a: "Please do. The old Hopkins Depot sits where Excelsior meets US 169, and the paved regional trail is how some people prefer to travel in warmer months. If you bike the trail, tell us how long the ride is and whether any ache starts on the bars or the next morning. Those details change the homework more than a general 'I ride' does." },
      { q: "Three Green Line stations are planned in Hopkins. Does that change anything now?", a: "Not yet, because the extension is not running. It is useful context for later, and we mention it so you do not plan a first visit around a train that is still in the future. For now, the car on Excelsior Boulevard, or the trail in good weather, is the practical way here." },
      { q: "I share recreation programs with Minnetonka. Should I mention a new league or class?", a: "Yes, especially in the first two weeks of a season. Hopkins runs a good deal of adult recreation jointly with Minnetonka, and a new class is a common time for a calf, a hamstring, or a low back to start complaining. Naming the class and the surface is more useful than saying you 'started exercising.'" },
      { q: "I work a split shift on Mainstreet. Is there a time that actually fits that?", a: "The later Monday and Thursday hours, which run until 5:30, are the ones split-shift people from Mainstreet use most. Wednesday is a short day and does not start until 10, so it is a poor fit if you are already mid-shift by then. Tell us the shape of the shift when you book." },
    ],
  },
  related: {
    title: "Related reading for Hopkins",
    links: [
      { href: "/areas-we-serve/hopkins/therapeutic-exercise", label: "Exercise plans for Hopkins", note: "Short routines that fit a work week" },
      { href: "/areas-we-serve/hopkins/custom-foot-orthotics", label: "Orthotics for Hopkins", note: "For people on their feet all shift" },
      { href: "/adjustments-and-manipulation", label: "Adjustments", note: "The three techniques used here" },
      { href: "/new-patient-center", label: "New patient center", note: "Forms and first steps" },
      { href: "/areas-we-serve/minnetonka", label: "Minnetonka", note: "Hopkins' larger neighbor" },
      { href: "/areas-we-serve/edina", label: "Edina", note: "Just across the southern border" },
    ],
  },
  sources: [SRC.hopkins, SRC.cedarLake, SRC.cote],
  cta: {
    title: "Book from Hopkins",
    body: "Call or send a request, and mention whether you stand or sit most of the day. It helps us plan the first visit.",
  },
};
