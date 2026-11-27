import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const chanhassen: PseoHub = {
  slug: "chanhassen",
  heroSubtitle:
    "Chanhassen sits in Carver County on Highway 5, with Paisley Park on Audubon Road and the Dinner Theatres on West 78th Street. From mid-town Chanhassen, the trip here is about 14 miles, usually on Highway 5 or 212 and then I-494 toward Excelsior Boulevard. We treat that as a planned trip, not a stop between a tour and a curtain time.",
  keyFacts: [
    { label: "Trip from mid-town", value: "About 14 miles on Highway 5 or 212", sourceId: "chanhassen-census" },
    { label: "2020 census", value: "25,947 people", sourceId: "chanhassen-census" },
    { label: "Paisley Park", value: "7801 Audubon Road, Chanhassen", sourceId: "paisley-official" },
    { label: "Usual roads", value: "Highway 5 or 212, then I-494 toward Excelsior Boulevard", sourceId: "chanhassen-census" },
  ],
  intro: {
    eyebrow: "Chanhassen, on Highway 5",
    title: "A Carver County city whose week is often Highway 5, a theatre night, or a tour on Audubon Road",
    paragraphs: [
      "The 2020 census counted 25,947 people in Chanhassen[^chanhassen-census]. The roads that matter for the drive here are Highway 5 and Highway 212, then I-494 toward Excelsior Boulevard, about 14 miles from mid-town to 6200 Excelsior Blvd, Suite 201, Saint Louis Park. We ask which of those you actually use, because a Highway 5 sit and a 212 sit do not leave the neck in the same place at the end of the day.",
      "Paisley Park is at 7801 Audubon Road, in Chanhassen, and is now a museum, recording studio, and event venue open for public tours[^paisley-official]. Tour days and event evenings put more cars on Audubon Road than a quiet Tuesday does. If you work there, volunteer there, or you are simply on those roads when a tour is turning over, say so. It belongs in the history.",
      "Chanhassen Dinner Theatres is at 501 West 78th Street, with free parking on the lot and extra free parking in the Southwest Transit ramp next to the building[^cdt-official]. A long evening in a theatre seat, or a shift on those grounds, is a different week than a straight Highway 5 commute. Tell us which one you are actually describing.",
      "The University of Minnesota Landscape Arboretum’s main gate is in Chaska, at 3675 Arboretum Drive, reached by continuing west on Highway 5 through Chanhassen past State Highway 41[^arboretum-directions]. The Arboretum also lists a farm-gate access at 3210 West 82nd Street, in Chanhassen, used mainly for farm classes and winter trails[^arboretum-directions]. If you walk or work there, we will talk about that outing honestly, without pretending the main gardens are inside this city.",
      "Public tour days at 7801 Audubon Road are listed on the Paisley Park site, not by this office[^paisley-official]. A weekday without a tour is a quieter Audubon Road than a day when a tour is turning over, and those two weeks should not be averaged in the first history.",
    ],
  },
  atAGlance: {
    title: "Chanhassen places that change the first visit",
    items: [
      { label: "Paisley Park", value: "7801 Audubon Road; museum, studio, and event venue with public tours", sourceId: "paisley-official" },
      { label: "Dinner Theatres", value: "501 West 78th Street, with the Southwest Transit ramp next door", sourceId: "cdt-official" },
      { label: "Highway 5 west", value: "The official Arboretum directions run through Chanhassen; the main gate itself is in Chaska", sourceId: "arboretum-directions" },
    ],
  },
  figure: {
    src: "/images/adjustment-1.jpg",
    alt: "A chiropractic adjustment on a treatment table",
    caption: "A Chanhassen week may be a Highway 5 commute, a long theatre seat on West 78th, or a tour-day sit on Audubon Road. The short list at the end of the visit is written for the one that is actually louder.",
    width: 768,
    height: 512,
  },
  localFacts: {
    title: "Chanhassen details we want in the history",
    cards: [
      {
        title: "Audubon Road is quiet until a tour turns over",
        body: "Paisley Park’s official site lists the address as 7801 Audubon Road, Chanhassen, and describes the building as a museum, studio, concert, and event venue with public tours[^paisley-official]. If your workday, volunteer shift, or usual drive shares that road on a tour or event day, the stop-and-start is worth mentioning. It is not the same sit as an empty midweek run on Highway 5.",
        sourceId: "paisley-official",
      },
      {
        title: "West 78th Street has a theatre and a transit ramp, side by side",
        body: "Chanhassen Dinner Theatres publishes its address as 501 West 78th Street, with on-site parking and additional parking in the Southwest Transit ramp next to the theatre[^cdt-official]. A long seated evening, or a shift that includes that ramp and lot, is a different load than a commute that never leaves Highway 5. Name which one you are in.",
        sourceId: "cdt-official",
      },
      {
        title: "Highway 5 through town is not the same as the Arboretum gate in Chaska",
        body: "Official Arboretum directions follow Highway 5 west through Chanhassen and past State Highway 41 to a main entrance in Chaska[^arboretum-directions]. A farm-gate access at 3210 West 82nd Street is in Chanhassen and is used for farm classes and winter trails. If those walks are in your week, tell us the gate you actually used. We will not write Chanhassen copy as if the main gardens were inside this city.",
        sourceId: "arboretum-directions",
      },
      {
        title: "Chanhassen is a Carver County start, not a second clinic",
        body: "The 2020 census places 25,947 people in Chanhassen[^chanhassen-census], a Carver County city. The trip still ends in one Saint Louis Park suite. The county line is mentioned only so the starting map is right: a Highway 5 day in Carver County is not an I-494 day in Eden Prairie, even though both can finish on the same boulevard.",
        sourceId: "chanhassen-census",
      },

      {
        title: "Tours run Thursday through Monday; Tuesday and Wednesday are closed",
        body: "Paisley Park’s official site says the property is open for tours Thursday through Monday; Tuesday and Wednesday are closed[^paisley-official]. Tickets are timed and required for entry. A Thursday tour-day sit on Audubon Road is not a Wednesday, when the building is closed to tours. The same site notes that the NPG Club and Cafe can be visited during regular business hours without a tour ticket — a shorter stop, not a tour.",
        sourceId: "paisley-official",
      },
      {
        title: "Official directions stay on Highway 5 for nine miles through this city",
        body: "From Minneapolis, official Arboretum directions stay on Highway 5 for nine miles through Chanhassen[^arboretum-directions]. Just past State Highway 41 a brown sign marks the approach; the left turn onto Arboretum Drive and the gatehouse are in Chaska, at 3675 Arboretum Drive. That nine-mile stretch through this city is a Highway 5 fact, not a claim that the main gardens sit inside Chanhassen.",
        sourceId: "arboretum-directions",
      },
      {
        title: "The farm gate is for classes, events, and winter trails",
        body: "The additional gated access at 3210 West 82nd Street, Chanhassen, is listed primarily for farm-based classes, events, and winter trails, not as a substitute for the Chaska gatehouse[^arboretum-directions]. A winter-trail morning at that farm gate is a different outing than a Highway 5 sit, and it is not a visit to the main gardens in Chaska.",
        sourceId: "arboretum-directions",
      },
    ],
  },
  diagram: {
    title: "From Highway 5 or 212 into the suite",
    caption: "A sketch. Most people come along Highway 5 or 212, join I-494, and end on Excelsior Boulevard. About 14 miles, with more minutes when 5 is slow or a tour is turning over on Audubon Road.",
    stops: [
      { label: "Mid-town Chanhassen, Audubon Road, or West 78th", note: "Start where you actually get on" },
      { label: "Highway 5 or Highway 212", note: "The usual way east" },
      { label: "I-494 toward Excelsior Boulevard" },
      { label: "Excelsior Boulevard, then the second-floor suite", note: "Number 201" },
    ],
    legs: ["Onto 5 or 212", "East toward 494", "The boulevard into the lot"],
  },
  sections: [
    {
      eyebrow: "A commute, a theatre seat, or a tour day",
      title: "We want the louder Chanhassen week, not an average of all three",
      paragraphs: [
        "From Chanhassen, a weekday visit often begins with a neck after sitting on Highway 5 or 212. An evening visit more often begins with a mid-back or a hip after a long seat at the Dinner Theatres. When a tour is in session, Audubon Road can be the louder part of the week. We write the home pair for whichever of those actually filled the month.",
        "If a parking lot, the transit ramp, or a farm-gate walk is clearly a foot problem, {custom foot orthotics|/custom-foot-orthotics} may come up. If the week is not about the feet, we do not raise it. {Therapeutic exercise|/therapeutic-exercise} has a longer page if you want the background; the work you actually leave with is still the pair done here.",
      ],
    },
    {
      eyebrow: "What you take back down Highway 5",
      title: "Two movements that can live in a parked car, or in a theatre-lot pause",
      paragraphs: [
        "If Highway 5 is the louder half, the pair is often a seated chin tuck before you rejoin the road, and a small extension you can do standing once you park. If a theatre evening is louder, we usually teach a standing extension you can run through in the West 78th lot before you sit again. Both will already have been done here. If a later visit is justified, we will try to hold a late morning that does not fight the afternoon on 5.",
      ],
    },
  ],
  process: {
    title: "Placing a Chanhassen visit around Highway 5 and a curtain time",
    steps: [
      { title: "Prefer a late morning over a 5 p.m. run on Highway 5", body: "Wednesday the clinic is open from 10:00 until noon, which is often the cleanest window around a theatre night or a tour day. We will not try to thread a 5 p.m. trip up Highway 5 if a mid-morning slot is still free." },
      { title: "Tell us Highway 5, Audubon Road, or West 78th", body: "Which road you actually use, whether a tour day or a theatre evening is in the week, and what you have already tried. We can send the intake ahead so the clipboard is already finished when you arrive." },
      { title: "Look, explain, then decide about hands-on care", body: "You will get a spoken plan before anyone puts hands on a joint. If the findings belong with another clinician, we say so before a second trip up Highway 5 is even discussed." },
      { title: "Leave with a practiced pair and a clear next step", body: "The two movements you take back to Highway 5 are the two you already did in the room. We will also say whether a return trip is justified." },
    ],
  },
  comparison: {
    title: "When a trip in from Chanhassen makes sense as a first exam",
    columns: ["The week you describe", "Whether coming here first is fair"],
    rows: [
      ["A neck after Highway 5 or 212, a mid-back after a theatre seat, or a stiff week after tour-day traffic on Audubon Road", "This office is a fair place to begin"],
      ["A physician already following a density issue, or a new fall", "Begin there, not here"],
      ["Pain or pressure in the chest, or breathing that suddenly feels wrong", "Use emergency care. Skip the Highway 5 drive."],
    ],
    note: "If the row is unclear, telephone 952-920-7535 before you start up Highway 5.",
  },
  whoFor: {
    title: "Chanhassen weeks we already see in this suite",
    fitsTitle: "When a Highway 5 trip is worth booking",
    notFitsTitle: "Not a first stop from Highway 5",
    fits: [
      "A tight neck or mid-back after sitting on Highway 5 or 212",
      "A stiff back after a long evening at the Dinner Theatres",
      "Work or volunteer weeks on or near Audubon Road when tours are in session",
      "People who will treat the fourteen miles as a booked visit, not a between-shows stop",
    ],
    notFits: [
      "A limb that goes weak in minutes, or new trouble controlling bowel or bladder",
      "A spine that hurts and a fever that came with it",
      "Weight you cannot account for, coming off week after week",
    ],
  },
  provider: {
    title: "Dr. Levitt sees you after you have come up Highway 5",
    body: "He is the only doctor in the practice. A 14-mile trip from Highway 5 is not handed to someone else, on the first visit or on a later one.",
  },
  faqs: {
    title: "Questions we hear from Chanhassen",
    items: [
      { q: "How long is the trip in from Chanhassen?", a: "About fourteen miles. You are coming to our Saint Louis Park office on Excelsior Boulevard, second floor, suite 201. Most people use Highway 5 or 212, then I-494, then the boulevard." },
      { q: "I work near Paisley Park. Does a tour day change how I should book?", a: "It can, if Audubon Road is part of your usual day. The official site lists public tours and events at 7801 Audubon Road. If you will already be on those roads, a late-morning appointment is usually easier than trying to come up Highway 5 at 5 p.m. Mention it when you call." },
      { q: "Is the Landscape Arboretum in Chanhassen?", a: "The main entrance is in Chaska, at 3675 Arboretum Drive, reached by staying on Highway 5 west through Chanhassen past Highway 41. There is a farm-gate access at 3210 West 82nd Street, in Chanhassen, used mainly for farm classes and winter trails. If you walk there, tell us which gate you used." },
      { q: "Can I schedule without another clinic sending me?", a: "Yes. Telephone the desk, say Chanhassen, and we will find a late-morning opening when one exists." },
      { q: "If I return, do I see Dr. Levitt again?", a: "He takes the first visit and the next one. There is not a second clinician to transfer to." },
      { q: "Where do people park at the Dinner Theatres?", a: "The theatre’s official contact page lists the address as 501 West 78th Street and notes the Southwest Transit ramp next door. If you parked on that ramp, or walked from it to a seat, say so. A ramp walk and a long theatre seat are not the same load." },
      { q: "Is Paisley Park open every weekday?", a: "No. The official site says tours run Thursday through Monday, and that Tuesday and Wednesday are closed. Tickets are timed and required for entry. The NPG Club and Cafe can be visited during regular business hours without a tour ticket." },
      { q: "How much of Highway 5 is actually in Chanhassen on the way to the Arboretum?", a: "Official directions stay on Highway 5 for nine miles through Chanhassen. Just past State Highway 41 a brown sign marks the approach, and the left turn onto Arboretum Drive leads to the gatehouse in Chaska, at 3675 Arboretum Drive." },
    ],
  },
  related: {
    title: "Related pages for Chanhassen readers",
    links: [
      { href: "/custom-foot-orthotics", label: "Custom foot orthotics", note: "If a lot, ramp, or farm-gate walk is clearly a foot problem" },
      { href: "/back-pain-treatments", label: "Back-pain care", note: "More detail if a stiff theatre seat is the main complaint" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "How we pick a short pair you can use between shows" },
      { href: "/new-patient-center", label: "New patient center", note: "Arriving from Highway 5 or 212" },
      { href: "/areas-we-serve/eden-prairie", label: "Eden Prairie", note: "The next city east, where 494 and 212 meet" },
      { href: "/areas-we-serve/excelsior", label: "Excelsior", note: "A nearby starting point toward the lake" },
    ],
  },
  sources: [SRC.chanhassenCensus, SRC.paisleyOfficial, SRC.cdtOfficial, SRC.arboretumDirections],
  cta: {
    title: "Plan the trip from Chanhassen",
    body: "Telephone 952-920-7535. Mention Highway 5, Audubon Road, or a theatre night on West 78th, and ask for a late morning if the book still has one.",
  },
};
