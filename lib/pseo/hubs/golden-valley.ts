import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const goldenValley: PseoHub = {
  slug: "golden-valley",
  heroSubtitle:
    "Golden Valley borders Saint Louis Park. A typical trip is about four miles down Highway 100, the old Lilac Way, to the Excelsior Boulevard exit.",
  keyFacts: [
    { label: "Distance", value: "About 4 miles south" },
    { label: "Golden Valley population", value: "22,552 (2020 census)", sourceId: "golden-valley" },
    { label: "Incorporated", value: "December 17, 1886", sourceId: "golden-valley" },
    { label: "Big park", value: "Theodore Wirth, 759 acres", sourceId: "wirth-wiki" },
  ],
  intro: {
    eyebrow: "Golden Valley, just north",
    title: "Highway 100 makes this an easy trip",
    paragraphs: [
      "Golden Valley and Saint Louis Park meet along Interstate 394, and Highway 100 ties the two together[^golden-valley]. For most households in Golden Valley, getting to 6200 Excelsior Blvd, Suite 201 means getting on Highway 100, staying on it past the I-394 interchange and exiting at Excelsior Boulevard. It is a trip of around four miles, which makes a mid-morning appointment and a return to the home office very doable.",
      "Highway 100 has some history worth knowing. It was started in 1935 as a New Deal project, and the Golden Valley Garden Club backed planting lilacs along it, which is how it earned the name Lilac Way[^hwy-100]. Most drivers today know it more for merges than flowers, but it is still the spine of this trip.",
      "Golden Valley is a city of trails, ski hills and quiet residential streets, and the people we see from here are often active. Their questions tend to be practical: will this let me keep skiing at Wirth this winter, or keep up my run around the lakes, or garden without paying for it the next day. We like those questions, because they give the plan a clear goal.",
    ],
  },
  atAGlance: {
    title: "Golden Valley quick facts",
    items: [
      { label: "Main routes", value: "I-394, US 169, Highways 55 and 100", sourceId: "golden-valley" },
      { label: "Land area", value: "About 10.5 square miles", sourceId: "golden-valley" },
      { label: "A landmark", value: "A 45th-parallel marker at Wirth Parkway and Golden Valley Road", sourceId: "wirth-wiki" },
    ],
  },
  localFacts: {
    title: "Wirth Park, and why it shows up in our notes",
    intro: "Theodore Wirth Park straddles Minneapolis and Golden Valley, and a lot of Golden Valley activity happens there.",
    cards: [
      {
        title: "Nearly Central Park sized",
        body: "The park covers 759 acres, about 90 percent of the size of New York's Central Park. Hills, trails and the lake make it a full-body workout, and sore hips and knees after a new season of trail running are a familiar story.",
        sourceId: "wirth-wiki",
      },
      {
        title: "Started small in 1889",
        body: "The park board bought the first 64 acres in 1889, when the land was called Saratoga Park. It was renamed for parks superintendent Theodore Wirth in 1938.",
        sourceId: "wirth-mprb",
      },
      {
        title: "Home of a first",
        body: "Three acres were set aside here for what became the first public wildflower garden in the United States. A slow walk on its paths is a good low-impact option when a back is flared up.",
        sourceId: "wirth-wiki",
      },
    ],
  },
  diagram: {
    title: "Golden Valley to the office",
    caption: "Drawn in-house to show the idea, not every lane. The 100 and 394 interchange is the one spot that tends to clog.",
    stops: [
      { label: "Central Golden Valley", note: "Near Highway 55" },
      { label: "Highway 100 at I-394", note: "Interchange" },
      { label: "Excelsior Boulevard exit" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 4 },
    ],
    legs: ["Hwy 55 to Highway 100", "South on Lilac Way", "Excelsior, a minute more"],
  },
  sections: [
    {
      eyebrow: "Cold, laser and ice",
      title: "The tools besides the adjustment",
      paragraphs: [
        "After the exam, some Golden Valley patients get more than an adjustment. A tendon that stays sore weeks after a ski day, or a neck that has been stiff for months, can be a reason to try {cold laser therapy|/cold-laser-therapy}. It is a handheld light, not a heat treatment, and it does not hurt. The evidence for neck pain is encouraging: a 2009 Lancet review of 16 randomized trials found that low-level laser reduced pain right after treatment in acute neck pain and for up to 22 weeks after treatment ended in chronic neck pain[^chow-2009]. We still use it alongside movement, not instead of it.",
        "A fresh strain is different. When something is hot and newly irritated, targeted cold is usually the first tool, which is what our {cryotherapy|/cryotherapy} page covers. For simple at-home care, we also show you how to use an {ice pack|/ice-pack-cryotherapy} properly: a thin cloth between pack and skin, and a timer, so you do not overdo it.",
      ],
    },
    {
      eyebrow: "After the visit",
      title: "Getting back on the trails",
      paragraphs: [
        "Most active people want one thing from us: permission and a plan to keep moving. We usually give both. Full rest for an ordinary back or neck ache tends to make it stiffer, so unless something in the exam says otherwise, we encourage you to keep walking and to keep doing what does not make the pain spread or sharpen.",
        "We also tell you what would change our minds. Pain that travels further down a leg, a foot that starts to drag, or numbness that is spreading are reasons to call before the next scheduled visit, not after.",
      ],
    },
    {
      eyebrow: "A job city as much as a home city",
      title: "More people work here than live here",
      paragraphs: [
        "Golden Valley's residential population is about 22,552, but more than 30,000 people work in the city because of large employers, including General Mills, whose main corporate headquarters is here, Pentair's U.S. headquarters, and the former Minneapolis-Honeywell campus that now holds Resideo offices[^golden-valley]. KARE, the local NBC affiliate, is also based in Golden Valley. Midday appointments often work well for people whose workplace is already in town, even if their house is a few minutes farther up Highway 100.",
        "If your week is a General Mills or Pentair desk, tell us that when you book. The exam will spend more time on the neck and upper back, and we can often pick a time that fits a lunch-hour loop down Highway 100 to 6200 Excelsior Blvd, Suite 201, rather than a separate evening trip. Living in Golden Valley and working in Golden Valley is a different scheduling problem than living here and commuting somewhere else, and we would rather hear the actual pattern.",
      ],
    },
  ],
  process: {
    title: "A first visit for a Golden Valley patient",
    steps: [
      { title: "Bring your activity log", body: "Skiing, trail running, biking or gardening: tell us what you do and how often. It shapes both the exam and the goal." },
      { title: "History and exam", body: "Dr. Levitt watches you move, tests the muscles and nerves around the sore spot, and only sends for X-rays if what he sees warrants it." },
      { title: "Choose the tools", body: "Adjustment, cold laser, targeted cold, or a mix. We explain why each is chosen, and you can say no to any of them." },
      { title: "Plan the return to activity", body: "You leave knowing what to keep doing, what to pause, and what signs mean you should call." },
    ],
  },
  comparison: {
    title: "Cold laser, targeted cold and an ice pack",
    columns: ["Tool", "What it is", "Usually used for"],
    rows: [
      ["Cold laser", "Low-level light from a handheld device; no heat", "Lingering soreness, including chronic neck pain[^chow-2009]"],
      ["Targeted cryotherapy", "Concentrated cold applied to one area in the office", "A new, irritated strain"],
      ["Ice pack at home", "A wrapped pack for a set time", "Short-term relief between visits"],
    ],
    note: "None of these replace the exam. They are picked after it.",
  },
  whoFor: {
    title: "Who we help from Golden Valley",
    fitsTitle: "Common reasons to book",
    notFitsTitle: "Not a chiropractic first stop",
    fits: [
      "Sore hips or knees after a new season of trail running",
      "A back that tightens after a day of skiing or shoveling",
      "Neck stiffness that has lasted months",
      "Wanting to stay active without relying on pain pills",
    ],
    notFits: [
      "A hard fall with a head strike, confusion or vomiting: emergency care first",
      "A foot that has suddenly gone weak or is dragging",
      "Back pain with a fever or unexplained weight loss",
    ],
  },
  provider: {
    title: "Your chiropractor",
    body: "Dr. Alan Levitt trained at Northwestern College of Chiropractic, graduating in 1986, and has treated patients in this area since 1987. He has seen Golden Valley skiers and runners through many Minnesota winters.",
  },
  faqs: {
    title: "Golden Valley FAQs",
    items: [
      { q: "How long is the drive from Golden Valley?", a: "About four miles. Most people take Highway 100 to the Excelsior Boulevard exit. The office is at 6200 Excelsior Blvd, Suite 201, Saint Louis Park." },
      { q: "Does cold laser hurt?", a: "No. It is a low-level light, and most people feel nothing or mild warmth from the device resting on the skin." },
      { q: "Should I stop skiing until my back settles?", a: "Not necessarily. It depends on the exam. Many people can keep moving with some changes, and we will tell you if something needs to pause." },
      { q: "Do you see children or teens?", a: "Call 952-920-7535 to talk through your situation, and we will tell you whether this office is the right fit." },
      { q: "I work in Golden Valley but live a little farther up the road. Can I come at midday?", a: "Often, yes. The employment base is larger than the residential population, and a mid-day loop down Highway 100 is a common way people fit a visit in." },
    ],
  },
  related: {
    title: "More for Golden Valley",
    links: [
      { href: "/areas-we-serve/golden-valley/cold-laser-therapy", label: "Cold laser for Golden Valley", note: "How the light is used after the exam" },
      { href: "/areas-we-serve/golden-valley/cryotherapy", label: "Targeted cold", note: "For new, irritated strains" },
      { href: "/areas-we-serve/robbinsdale", label: "Robbinsdale", note: "Up Highway 100 from Golden Valley" },
      { href: "/areas-we-serve/minneapolis", label: "Minneapolis", note: "Sharing Wirth Park with Golden Valley" },
      { href: "/areas-we-serve/saint-louis-park", label: "Saint Louis Park", note: "Four miles down Highway 100" },
      { href: "/new-patient-center/what-to-expect", label: "What to expect", note: "The first appointment" },
    ],
  },
  sources: [SRC.goldenValley, SRC.hwy100, SRC.wirthWiki, SRC.wirthMprb, SRC.chow],
  cta: {
    title: "Book from Golden Valley",
    body: "Let us know what you want to get back to, whether that is the ski trail or the garden, and we will build the first visit around it.",
  },
};
