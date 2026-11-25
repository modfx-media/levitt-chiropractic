import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const minnetonka: PseoHub = {
  slug: "minnetonka",
  heroSubtitle:
    "Minnetonka is a big, spread-out city. From the Ridgedale area the trip to Suite 201 is about seven miles, usually by US 169 and Excelsior Boulevard through Hopkins.",
  keyFacts: [
    { label: "From Ridgedale", value: "About 7 miles" },
    { label: "Minnetonka population", value: "53,781 (2020 census)", sourceId: "minnetonka" },
    { label: "Main routes", value: "I-494, I-394, US 169", sourceId: "minnetonka" },
    { label: "Creek", value: "Minnehaha Creek starts here", sourceId: "minnehaha-creek" },
  ],
  intro: {
    eyebrow: "Minnetonka",
    title: "Lakes, creeks and a longer drive",
    paragraphs: [
      "Minnetonka sits about ten miles from Minneapolis, on the eastern side of Lake Minnetonka[^minnetonka], and it covers a lot of ground. A household near Ridgedale and one down by the Minnetonka Mills area are not making the same drive. Most addresses in town sit about seven miles from 6200 Excelsior Blvd, Suite 201, Saint Louis Park. The typical path is U.S. 169 down to Excelsior Boulevard, then through Hopkins.",
      "Those seven miles take more planning than a hop from Hopkins. We try not to stack early appointments, and we lean on a short home routine so progress does not depend on being in the office every few days.",
      "Minnetonka patients are often working professionals at large employers, and they also tend to spend weekends on the water or on the trails. That combination shows up as stiff necks during the week and sore lower backs on Monday morning, after a weekend of docks, kayaks and yard work.",
    ],
  },
  atAGlance: {
    title: "Minnetonka background",
    items: [
      { label: "Major employers", value: "Cargill and UnitedHealth Group are headquartered here", sourceId: "minnetonka" },
      { label: "Ridgedale", value: "Opened 1974, the Twin Cities' fourth \"Dale\" mall", sourceId: "ridgedale" },
      { label: "Early history", value: "Minnetonka Mills, the first permanent settlement west of Minneapolis in Hennepin County", sourceId: "minnetonka" },
    ],
  },
  localFacts: {
    title: "Minnetonka history you might not know",
    cards: [
      {
        title: "Timber for a famous bridge",
        body: "A sawmill on Minnehaha Creek near what is now McGinty Road was the first privately operated mill in Minnesota west of the Mississippi. Its oak timbers went into the first suspension bridge across the Mississippi at Saint Anthony Falls in 1853.",
        sourceId: "minnetonka",
      },
      {
        title: "Where the creek begins",
        body: "Minnehaha Creek is a 22-mile tributary of the Mississippi that starts at Grays Bay Dam on Lake Minnetonka and flows through Minnetonka, Hopkins, Saint Louis Park and Edina. Paddlers know it well, and so do their shoulders.",
        sourceId: "minnehaha-creek",
      },
      {
        title: "A long retail history",
        body: "Ridgedale Center was built on 81.3 acres and opened in 1974. Long days on your feet in retail or long laps around a mall both show up in hips and feet.",
        sourceId: "ridgedale",
      },
    ],
  },
  diagram: {
    title: "Ridgedale to Suite 201",
    caption: "We drew this to show the usual path. From the southern part of Minnetonka, Highway 7 often makes more sense.",
    stops: [
      { label: "Ridgedale area", note: "Near I-394" },
      { label: "US 169", note: "Through Minnetonka and Hopkins" },
      { label: "Excelsior Blvd through Hopkins" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 7 },
    ],
    legs: ["394 over to 169", "169 down to Hopkins", "Excelsior into Saint Louis Park"],
  },
  sections: [
    {
      eyebrow: "Weekdays and weekends",
      title: "Desk weeks, lake weekends",
      paragraphs: [
        "The weekday pattern is familiar: long hours at a computer, video calls, too little movement. Necks tighten, shoulders creep up toward the ears, and by Thursday the upper back aches. The weekend pattern is the opposite: hauling a kayak, putting in a dock, mowing a sloped lawn, then sitting in the car for the drive back. The low back takes the hit.",
        "We try to address both. For the weekday side, that often means a couple of desk-friendly movements and a look at screen height. For the weekend side, it means talking through how you lift and carry, and building a little strength so a dock day does not turn into a lost week.",
      ],
    },
    {
      eyebrow: "Making fewer trips count",
      title: "Why home exercise matters more from further away",
      paragraphs: [
        "When the drive is longer, what happens between visits matters more. We keep the home plan short so it actually gets done: usually two or three movements, demonstrated in the room, and checked at the next visit. If something feels wrong, you call rather than wait.",
        "Our {therapeutic exercise|/areas-we-serve/minnetonka/therapeutic-exercise} page explains how we teach that short routine. When walking mechanics seem to be feeding the same problem, {custom foot orthotics|/areas-we-serve/minnetonka/custom-foot-orthotics} is a conversation we sometimes have in the same visit.",
      ],
    },
    {
      eyebrow: "Three roads, one spread-out city",
      title: "394, 169 or Highway 7, depending on where you start",
      paragraphs: [
        "Minnetonka is large enough that the “about seven miles” figure is only a starting point. From the Ridgedale area, I-394 over to U.S. 169, then down to Excelsior Boulevard, is the route we sketched in the diagram. From the southern part of the city, Highway 7 is often the more honest path. From a house closer to Wayzata, staying on 394 into Saint Louis Park can be simpler than dropping down to 169. When you call, name the starting neighborhood, and we will set the appointment against that specific approach.",
        "The city's name, and the lake's, come from a Dakota phrase often translated as “big water.” Minnehaha Creek leaves the lake at Grays Bay Dam and then runs 22 miles through Minnetonka, Hopkins, Saint Louis Park and Edina before reaching the Mississippi[^minnehaha-creek]. That creek corridor is also a practical reminder that several of our closest city pages sit along the same waterway. If you already pass through {Hopkins|/areas-we-serve/hopkins} on the way in, we can often pick a time that rides along with that trip. {Wayzata|/areas-we-serve/wayzata} patients use the same 394 corridor from the other direction.",
      ],
    },
  ],
  process: {
    title: "How a first Minnetonka visit is planned",
    steps: [
      { title: "Name the road you actually use: 394, 169, or Highway 7", body: "Those three approaches do not fail at the same time of day. From the Ridgedale area the trip is about seven miles; an earlier slot is usually the quieter one." },
      { title: "Pack the older image if you already have one", body: "A driver's license gets the visit started. If another office already mailed a film or a one-page summary, bring that too, so you are not coming back down 394 just to fetch a paper." },
      { title: "Walk out knowing the next step, or knowing it is not here", body: "Before you head back toward Ridgedale, Dr. Levitt will sit with the findings in ordinary language and tell you whether coming back down 169 is worthwhile, or whether a different kind of clinic should come first." },
      { title: "Take a couple of movements back toward Ridgedale", body: "They have to survive a desk week and a weekend on the water. We look at them again only when you are next in the room." },
    ],
  },
  comparison: {
    title: "Weekday versus weekend strain",
    columns: ["Pattern", "Typical complaint", "What we usually focus on"],
    rows: [
      ["Desk week", "A locked neck and an aching upper back by Thursday, sometimes with tension headaches", "How the screen sits, and two short mobility breaks a professional week can actually absorb"],
      ["Lake or yard weekend", "Low back soreness after lifting or carrying", "Lifting technique, hip strength, pacing"],
      ["Long drive", "Back and hip stiffness after sitting", "Getting up and moving at stops, seat position"],
    ],
  },
  whoFor: {
    title: "Minnetonka weeks this office already knows",
    fitsTitle: "The Ridgedale-to-Suite-201 trip is worth making when",
    notFitsTitle: "Skip 394 or 169 for this",
    fits: [
      "Weekday desk hours that have the neck tight and the shoulders up by Thursday",
      "Monday stiffness after a weekend of docks, kayaks, or a sloped lawn",
      "Stiffness after sitting on I-394, Highway 169 or Highway 7",
      "A home routine you can actually keep, because you will not be driving 169 every other day",
    ],
    notFits: [
      "If an arm or a leg suddenly stops doing its job, start at an emergency department, not here",
      "Pressure under the breastbone, or air that will not come easily, is a medical emergency",
      "A sore back that shows up with a fever, or with feeling sick from head to toe, belongs in a medical office, not here",
    ],
  },
  provider: {
    title: "The doctor Minnetonka patients see",
    body: "For Minnetonka visits, Dr. Alan Levitt is the doctor in the room. He finished chiropractic college at Northwestern in the class of 1986, began seeing patients in 1987, and has practiced from the current Excelsior Boulevard suite since the 1999 move.",
  },
  faqs: {
    title: "Minnetonka questions",
    items: [
      { q: "How far is it from Minnetonka?", a: "From the Ridgedale area the trip is about seven miles, and you pull up at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. The three usual approaches are I-394, U.S. 169 and Highway 7; say which of those you actually drive so the slot is chosen against that approach, not a generic average." },
      { q: "Which of those three roads is best?", a: "It depends on the time of day and where you start. Mid-morning is usually calmer than late afternoon on all three. When you book, say the starting area and we will help you choose a slot against that approach, not only against the clock." },
      { q: "Can follow-ups be spaced so a Ridgedale household is not on 394 every week?", a: "Usually. We show two or three movements that still get done after a desk week and a lake weekend, then we set the next in-person check only when reviewing them here would change something." },
      { q: "Is Saturday available?", a: "Weekend times are reserved, not a drop-in block. The number is 952-920-7535; ask specifically whether a Saturday opening remains this week." },
    ],
  },
  related: {
    title: "Minnetonka pages, plus Hopkins and Wayzata",
    links: [
      { href: "/areas-we-serve/minnetonka/back-pain-treatments", label: "Back pain care for Minnetonka", note: "From docks to desks" },
      { href: "/areas-we-serve/minnetonka/therapeutic-exercise", label: "Exercise plans", note: "Home routines between visits" },
      { href: "/areas-we-serve/hopkins", label: "Hopkins", note: "On the way to the office" },
      { href: "/areas-we-serve/wayzata", label: "Wayzata", note: "Farther along the 394 corridor" },
      { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "Background and training" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.minnetonka, SRC.ridgedale, SRC.minnehaha, SRC.lakeMinnetonka],
  cta: {
    title: "Book from Minnetonka",
    body: "Let us know which part of Minnetonka you are driving from, and we will suggest times that make the trip easier.",
  },
};
