import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const roseville: PseoHub = {
  slug: "roseville",
  heroSubtitle:
    "Roseville is about nine miles from Suite 201. Most people take Highway 36 to I-35W or Highway 280, then I-94 or I-394 toward Excelsior Boulevard.",
  keyFacts: [
    { label: "From Roseville", value: "About 9 miles" },
    { label: "Counted in 2020", value: "36,254 residents", sourceId: "roseville" },
    { label: "Mapped area", value: "13.84 square miles", sourceId: "roseville" },
    { label: "How people drive here", value: "I-35W, Highways 36, 51 and 280", sourceId: "roseville" },
  ],
  intro: {
    eyebrow: "Roseville",
    title: "A nine-mile trip with more than one good route",
    paragraphs: [
      "Roseville sits about nine miles from our office at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. There is no single “correct” path. Many people take Highway 36 to I-35W, others use Highway 280 to I-94, and some stay on Snelling Avenue (Highway 51) before joining a freeway. We ask which one you actually use, because mid-morning on 36 does not feel like late afternoon on 35W.",
      "In 2020 the census counted 36,254 people. The city covers 13.84 square miles, of which 13.00 are land and 0.84 are water[^roseville]. It incorporated as a village in 1948 after rapid growth in the 1930s and 1940s, when Rose Township was still the older name on the map[^roseville].",
      "Roseville is also a retail and office city, which shapes what we see. People who work at the malls or spend a lot of time on their feet have a different week than people who sit in an office near Highway 36. The first visit is where we sort that out, rather than handing every Roseville patient the same list of movements.",
    ],
  },
  atAGlance: {
    title: "Roseville quick facts",
    items: [
      { label: "Older name", value: "Rose Township, established 1858 and named for settler Isaac Rose", sourceId: "roseville" },
      { label: "Village", value: "Incorporated 1948; Falcon Heights and Lauderdale followed, and the township ended", sourceId: "roseville" },
      { label: "45th parallel", value: "A marker stands at Cleveland Avenue and Loren Road", sourceId: "roseville" },
      { label: "Retail firsts", value: "Minnesota's first McDonald's (1957) and the first Target store (May 3, 1962)", sourceId: "roseville" },
    ],
  },
  localFacts: {
    title: "Roseville details that change how we talk about a visit",
    cards: [
      {
        title: "A township before it was a city",
        body: "The first white settlers arrived in 1843, and Rose Township was established in 1858. It originally included land that later became Roseville, Lauderdale and Falcon Heights, along with parts of present-day Saint Paul and Minneapolis, and it shrank as those cities expanded.",
        sourceId: "roseville",
      },
      {
        title: "Firsts that still mean long days on hard floors",
        body: "Minnesota's first McDonald's was built in Roseville in 1957. The first Target store opened here on May 3, 1962, and was later replaced by a SuperTarget in 2005. Roseville was also home to the first Barnes & Noble bookstore outside New York City. Those openings are history now, but retail and restaurant work is still a big part of the local week.",
        sourceId: "roseville",
      },
      {
        title: "A 225-acre park in the middle of town",
        body: "Central Park covers 225 acres, with Bennett Lake inside it, and is one of the larger urban parks in Ramsey County. Reservoir Woods and the Guidant John Rose Minnesota Oval are the other outdoor names we hear most. A first long walk or skate of the season is a common reason the low back or a hip suddenly becomes the main topic.",
        sourceId: "roseville",
      },
      {
        title: "A computer plant that ran for fifty-six years",
        body: "From 1961 to 2017, UNIVAC designed and manufactured mainframe computers at a plant in Roseville[^roseville]. That is a long stretch of bench, floor and desk work in one city, and it is the kind of local work history we still ask about, even if the plant itself is gone. If your week still looks like that, tell us about the setup in front of you, not only the name of the company.",
        sourceId: "roseville",
      },
    ],
  },
  diagram: {
    title: "Roseville to Suite 201",
    caption: "Two common freeway combinations, drawn as a simple sketch. If you already come through Minneapolis for work, we can often time the visit to ride along with that trip.",
    stops: [
      { label: "Roseville", note: "Highway 36, 51 or 280" },
      { label: "I-35W or I-94", note: "Toward Minneapolis" },
      { label: "I-394 or Highway 100", note: "To Excelsior Boulevard" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 9 },
    ],
    legs: ["36 or 280 to a freeway", "Across toward Saint Louis Park", "Excelsior exit"],
  },
  sections: [
    {
      eyebrow: "Retail weeks and park weekends",
      title: "Feet, hips and a stiff neck from the same city",
      paragraphs: [
        "Rosedale Center and Har Mar Mall are still the commercial anchors, and the city's restaurant count is a point of local pride[^roseville]. If your week is mostly on your feet, the exam spends more time on shoes, standing surfaces and how the hips are sharing the load. If your week is a Highway 36 desk, we start higher up, with the cervical spine and the mid-back, just below the neck.",
        "A 2015 Cochrane review found that manipulation and mobilisation can produce short-term relief for neck pain in some patients, similar to some other active treatments. We treat that as a reason to examine carefully and to be honest about expected timelines, not as a promise that every stiff neck will settle in a single visit.",
      ],
    },
    {
      eyebrow: "The 45th parallel, and a practical reason we mention it",
      title: "A small marker, and a larger point about place",
      paragraphs: [
        "A marker at the northeast corner of Cleveland Avenue and Loren Road notes that the 45th parallel crosses Roseville[^roseville]. It is a small piece of geography, but it is also a reminder that this is a distinct city with its own streets, not a generic northern suburb. We would rather write about Cleveland and Loren, Snelling and Highway 36, than use filler language that could sit on any page.",
        "That same habit shows up in the care plan. If you already walk in Central Park, we will use that walk rather than invent a new routine you will not keep. If ice is useful after a new strain, our {cryotherapy|/areas-we-serve/roseville/cryotherapy} page explains when we use it in the office.",
      ],
    },
    {
      eyebrow: "Close neighbors",
      title: "Falcon Heights, Lauderdale and Saint Paul",
      paragraphs: [
        "{Falcon Heights|/areas-we-serve/falcon-heights} and {Lauderdale|/areas-we-serve/lauderdale} were part of the same township story, and {Saint Paul|/areas-we-serve/saint-paul} is right on the southern edge. If your daily life crosses those lines, tell us. The nine-mile figure is an average, not a promise that every Roseville driveway is the same distance from Suite 201.",
        "For questions about a disc that has been named on an image, the {degenerative disc disease|/areas-we-serve/roseville/degenerative-disc-disease} page is a reasonable first read. It does not replace an exam, and we will say so if the findings belong somewhere else.",
      ],
    },
  ],
  process: {
    title: "Setting up a first visit from Roseville",
    steps: [
      { title: "Say whether you are starting near Rosedale, Central Park, or the Saint Paul line", body: "Those starting points do not use Highway 36 or 35W the same way. A mid-morning appointment is usually the calmer trip." },
      { title: "Bring identification and whatever paperwork you already have", body: "An older film or a brief written report, if you have one, saves us from asking you to come back just to fetch it." },
      { title: "Get an honest reading before you get back on Highway 36", body: "Dr. Levitt will explain what he found and tell you whether coming back down Highway 36 is worthwhile, or whether another setting should come first." },
      { title: "Leave with homework that can live next to a Rosedale or desk week", body: "A few movements you can keep after a day at a store or a screen. We check them when you return, rather than handing you a long list you will not use." },
    ],
  },
  comparison: {
    title: "Standing week versus sitting week",
    columns: ["Kind of week", "What we hear most", "What the exam usually emphasizes"],
    rows: [
      ["Retail or restaurant shifts", "A Rosedale or restaurant shift that leaves the feet cooked and the hips aching", "Footwear, standing breaks, hip strength"],
      ["Office along 36 or 280", "Stiff neck and upper back", "Screen height, upper-back mobility, short breaks"],
      ["Park or Oval weekend", "A long outing in the park or at the Oval that leaves the hips, or the lumbar spine, unhappy afterward", "Pacing, terrain, and what to keep doing afterward"],
    ],
  },
  whoFor: {
    title: "Roseville situations we are set up to help",
    fitsTitle: "A good reason to come down from Roseville",
    notFitsTitle: "Begin in another setting first",
    fits: [
      "A desk or retail week near Rosedale that leaves the neck stiff by Friday",
      "A long day on hard floors that leaves the feet cooked and the hips aching",
      "A Central Park or Reservoir Woods outing that has you moving carefully the next morning because the hips tightened, or the low back did",
      "Homework you can keep between trips, rather than a calendar that assumes a new Highway 36 drive every few days",
    ],
    notFits: [
      "New weakness in an arm or a leg is an emergency-department problem, not a Highway 36 errand",
      "A pressing feeling in the chest, or air that suddenly feels scarce, belongs in medical care first",
      "If the backache arrives with a fever, or you feel ill in a way that is more than stiffness, start at a medical clinic, not this office",
    ],
  },
  provider: {
    title: "The chiropractor on a Roseville visit",
    body: "Roseville patients see Dr. Alan Levitt on every visit. He graduated from Northwestern in 1986, has practiced since the following year, and has used this suite as the clinic address from 1999 on.",
  },
  faqs: {
    title: "Roseville FAQs",
    items: [
      { q: "What is the usual route down from Roseville?", a: "Most drivers use Highway 36 or I-35W toward Minneapolis, then either take the Highway 100 exit or the Excelsior Boulevard ramp off 394. You will arrive at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, about nine miles from most of Roseville." },
      { q: "Is a nine-mile trip still in range for this clinic?", a: "It is. Nine miles sits comfortably inside the 15-mile line. The drive is still long enough that we try not to waste it on a visit that could have been a phone call." },
      { q: "Can appointments work around a Rosedale shift?", a: "Often. An earlier Highway 36 run is usually smoother than a late-afternoon one. Call 952-920-7535 and ask for a slot that still leaves room for a full exam, not a squeezed lunch break." },
      { q: "Do you have Saturday openings?", a: "Some weekend times can be reserved. If a weekday Highway 36 trip is the problem, ask for the Saturday list at 952-920-7535." },
    ],
  },
  related: {
    title: "Roseville pages, and the cities that once shared Rose Township",
    links: [
      { href: "/areas-we-serve/roseville/cryotherapy", label: "Cryotherapy in Roseville", note: "For a new, irritated strain" },
      { href: "/areas-we-serve/roseville/degenerative-disc-disease", label: "Degenerative disc questions", note: "Read this before you assume the cause" },
      { href: "/areas-we-serve/falcon-heights", label: "Falcon Heights", note: "A closer township neighbor" },
      { href: "/areas-we-serve/saint-paul", label: "Saint Paul", note: "Along the southern edge" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.roseville, SRC.rosedale],
  cta: {
    title: "Book from Roseville",
    body: "Say whether you use Highway 36, 280 or Snelling, and we will propose a time that makes the nine miles calmer.",
  },
};
