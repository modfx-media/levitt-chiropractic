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
      "Minnetonka sits about ten miles from Minneapolis, on the eastern side of Lake Minnetonka[^minnetonka], and it covers a lot of ground. A household near Ridgedale and one down by the Minnetonka Mills area are not making the same drive. From most of the city, the trip to 6200 Excelsior Blvd, Suite 201 in Saint Louis Park runs about seven miles, typically US 169 down to Excelsior Boulevard and then through Hopkins.",
      "Because the drive is longer than it is for our closest neighbors, we plan Minnetonka visits a bit more carefully. We try to avoid stacking appointments early in a plan, and we lean more on home exercise between visits so that progress does not depend on being in the office every few days.",
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
        "Our {therapeutic exercise|/areas-we-serve/minnetonka/therapeutic-exercise} page explains the approach. If feet and gait are part of the picture, we may also discuss {custom foot orthotics|/areas-we-serve/minnetonka/custom-foot-orthotics}.",
      ],
    },
  ],
  process: {
    title: "Planning around the drive from Minnetonka",
    steps: [
      { title: "Choose a time that dodges the worst traffic", body: "Mid-morning slots are often easier for this trip. Office hours start at 8:30 on most weekdays and at 10 on Wednesday." },
      { title: "Bring everything to the first visit", body: "Photo ID, any imaging, and a list of what you have tried. It saves a second trip." },
      { title: "Exam and a frank opinion", body: "Dr. Levitt explains what he finds and whether chiropractic care is a good fit." },
      { title: "A plan with more homework, fewer trips", body: "Visits are spaced with the drive in mind, with a home routine doing more of the work." },
    ],
  },
  comparison: {
    title: "Weekday versus weekend strain",
    columns: ["Pattern", "Typical complaint", "What we usually focus on"],
    rows: [
      ["Desk week", "Stiff neck, upper-back ache, tension headaches", "Upper-back mobility, screen setup, short movement breaks"],
      ["Lake or yard weekend", "Low back soreness after lifting or carrying", "Lifting technique, hip strength, pacing"],
      ["Long drive", "Back and hip stiffness after sitting", "Getting up and moving at stops, seat position"],
    ],
  },
  whoFor: {
    title: "When a Minnetonka visit is a good idea",
    fitsTitle: "Good fit",
    notFitsTitle: "Not something to drive across town for",
    fits: [
      "Neck and upper-back stiffness from desk-heavy weeks",
      "Low back soreness after lake or yard weekends",
      "Wanting a plan that relies on home exercise between visits",
      "Foot or hip aches from long days standing",
    ],
    notFits: [
      "Sudden severe pain with weakness or numbness: go to an emergency department",
      "Chest pain or shortness of breath with back pain",
      "Back pain with fever or feeling generally unwell",
    ],
  },
  provider: {
    title: "Meet your chiropractor",
    body: "Dr. Alan Levitt has been in practice since 1987, after graduating from Northwestern College of Chiropractic in 1986. Minnetonka patients see him at each visit, at the same Saint Louis Park office he has run since 1999.",
  },
  faqs: {
    title: "Minnetonka FAQs",
    items: [
      { q: "How far is it from Minnetonka?", a: "About seven miles from the Ridgedale area to 6200 Excelsior Blvd, Suite 201, Saint Louis Park, usually by US 169 and Excelsior Boulevard." },
      { q: "Can I come less often because of the drive?", a: "Often, yes. We can space visits further apart and put more weight on home exercise." },
      { q: "My back hurts after putting the dock in. Should I come in?", a: "If it is not improving after a few days, or the pain travels down a leg, an exam is a good idea. Leg weakness or bladder changes need urgent care." },
      { q: "Are Saturday appointments possible?", a: "Saturdays are by appointment. Call 952-920-7535 to check." },
    ],
  },
  related: {
    title: "More for Minnetonka",
    links: [
      { href: "/areas-we-serve/minnetonka/back-pain-treatments", label: "Back pain care for Minnetonka", note: "From docks to desks" },
      { href: "/areas-we-serve/minnetonka/therapeutic-exercise", label: "Exercise plans", note: "Home routines between visits" },
      { href: "/areas-we-serve/hopkins", label: "Hopkins", note: "On the way to the office" },
      { href: "/meet-the-doctor", label: "Meet Dr. Levitt", note: "Background and training" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.minnetonka, SRC.ridgedale, SRC.minnehaha],
  cta: {
    title: "Book from Minnetonka",
    body: "Let us know which part of Minnetonka you are driving from, and we will suggest times that make the trip easier.",
  },
};
