import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const richfield: PseoHub = {
  slug: "richfield",
  heroSubtitle:
    "From Richfield, Suite 201 is roughly six miles away. Most people take the Crosstown, Highway 62, over to Highway 100 and come up to Excelsior Boulevard.",
  keyFacts: [
    { label: "Trip length", value: "Near 6 miles" },
    { label: "Richfield population", value: "36,994 (2020 census)", sourceId: "richfield" },
    { label: "City area", value: "About 7 square miles", sourceId: "richfield" },
    { label: "Freeways", value: "I-35W, I-494, Hwys 62 and 77", sourceId: "richfield" },
  ],
  intro: {
    eyebrow: "Richfield",
    title: "Crosstown, then Highway 100",
    paragraphs: [
      "Richfield is boxed in by freeways: Interstates 35W and 494 and Highways 62 and 77 are its main routes[^richfield]. That sounds like a lot of concrete, but it means getting out of town is easy. For our office at 6200 Excelsior Blvd, Suite 201 in Saint Louis Park, the usual route is the Crosstown over to Highway 100, then a short run up to the Excelsior Boulevard exit. Around six miles, give or take, depending on which side of the city you live on.",
      "Richfield has changed a lot since its farm-town days. The township once stretched from Lake Street down to the Minnesota River and covered about 63 square miles; the city today is about seven[^richfield]. Those seven square miles hold close to 37,000 people, plenty of houses with basement stairs, and a major corporate headquarters.",
      "Low back pain is the main reason Richfield residents call us. It often starts with something small, like carrying laundry baskets down steep basement steps or bending to pull weeds along a fence line, and then it lingers. We take it seriously without catastrophizing it, because most low back pain does improve.",
    ],
  },
  atAGlance: {
    title: "Richfield facts",
    items: [
      { label: "Nature center", value: "Wood Lake, 150 acres, opened 1971", sourceId: "wood-lake" },
      { label: "Big employer", value: "Best Buy headquarters, in the city since 2003", sourceId: "richfield" },
      { label: "Early settler", value: "Riley Bartholomew's 1852 house on Wood Lake", sourceId: "richfield" },
    ],
  },
  figure: {
    src: "/images/adjustment-1.jpg",
    alt: "A chiropractor adjusting the lower back of a patient lying on her side",
    caption: "A side-lying lower-back adjustment, one of several positions used. Photo from the practice's existing site library.",
    width: 1697,
    height: 1131,
  },
  localFacts: {
    title: "Wood Lake and walking",
    intro: "Walking is one of the simplest things we can suggest for an aching back, and Richfield has a good place for it.",
    cards: [
      {
        title: "Three miles of easy trail",
        body: "Wood Lake Nature Center has about three miles of walking trails and boardwalks around the lake, paved or crushed limestone, which makes them accessible during the warmer months.",
        sourceId: "wood-lake",
      },
      {
        title: "An early urban nature center",
        body: "When Wood Lake opened in 1971 it was one of the nation's first urban nature centers. It is a flat, quiet loop, which is exactly what a sore back usually tolerates best.",
        sourceId: "richfield",
      },
      {
        title: "Lots of daytime workers",
        body: "Best Buy moved its corporate headquarters to Richfield in 2003 and became the city's largest employer. Desk-heavy jobs mean a lot of neck and upper-back complaints alongside the lower backs.",
        sourceId: "richfield",
      },
      {
        title: "Six miles is close, but the Crosstown still has a clock",
        body: "A headquarters campus in Richfield is only about six miles from Suite 201. That is close enough for a mid-morning visit to fit around a desk day, and far enough that a late-afternoon Crosstown run can still eat the hour. If you work on that campus, tell us the shift, not only the city, so we can pick a time that still leaves room for a full exam and, if walking is part of the plan, a loop at Wood Lake on a different day rather than on the same rushed afternoon. People who jump onto 35W at 5 p.m. often wish they had used Highway 62 to Highway 100 in the morning instead; when you book, say which of those two you actually drive.",
        sourceId: "richfield",
      },
    ],
  },
  diagram: {
    title: "Richfield to Saint Louis Park",
    caption: "Hand-drawn by us, not a map. The Crosstown and Highway 100 junction is where Richfield drivers usually lose time.",
    stops: [
      { label: "Central Richfield", note: "Near Highway 62" },
      { label: "Highway 62 (Crosstown)" },
      { label: "Highway 100, then the Excelsior Blvd exit" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 6 },
    ],
    legs: ["City streets to the Crosstown", "Crosstown, then Hwy 100", "Exit and follow Excelsior"],
  },
  sections: [
    {
      eyebrow: "The evidence on low backs",
      title: "What guidelines actually recommend",
      paragraphs: [
        "It helps to know what the major guidelines say, so you can judge any plan, including ours. For acute and subacute low back pain, the American College of Physicians recommends starting with non-drug care: superficial heat has moderate-quality evidence, while massage, acupuncture and spinal manipulation have lower-quality evidence. The same guideline points out that most people improve over time regardless of treatment[^qaseem-2017].",
        "For pain of six weeks or less, a 2017 JAMA review found spinal manipulation was associated with modest improvements in pain and function, with mostly minor, short-lived side effects such as soreness[^paige-2017]. For pain lasting months, a 2019 BMJ review found manipulation worked about as well as other recommended therapies[^rubinstein-2019].",
        "Put plainly: manipulation is a reasonable option, not a miracle. We combine it with walking and a couple of targeted movements, and we watch whether things change. If they do not, we change the plan or refer you on. You can read more on our {back pain treatments|/back-pain-treatments} page.",
      ],
    },
    {
      eyebrow: "Behind the wheel",
      title: "Freeway commutes and the driver's seat",
      paragraphs: [
        "Living between 35W, 494 and the Crosstown means a lot of Richfield residents spend real time in a car seat. Seat setup gets overlooked. A seat tilted far back pushes the head forward to see the road, and a wallet in the back pocket tips the pelvis for the whole drive. Neither feels like much on Monday. By Friday the right hip and the base of the neck have opinions.",
        "Small fixes help. Sit upright enough that the headrest is close behind your head, bring the seat forward so your knees stay slightly bent at the pedals, and move the wallet to a jacket or the console. On longer drives, a stop to stand and walk for two minutes does more for a stiff back than squirming in the seat.",
        "We ask Richfield patients about the commute in the first visit for exactly this reason. If the pain is worst after driving, we check the hips and mid-back along with the lower back, and we may suggest one stretch to do in the parking lot before heading inside at work.",
      ],
    },
    {
      eyebrow: "At home",
      title: "Stairs, laundry and the garden",
      paragraphs: [
        "Plenty of Richfield homes have basement stairs. Carrying a heavy basket down them, twisted to one side, is a reliable way to aggravate a back. Two smaller loads held in front of you are easier on it. If bending to the dryer bothers you, kneel on one knee rather than folding at the waist.",
        "In the garden, short sessions with breaks beat one marathon afternoon. A kneeling pad, a stool for low beds, and switching sides every so often all help. These are small changes, but people tell us they make the difference between a good week and a bad one.",
      ],
    },
  ],
  process: {
    title: "How a Richfield visit unfolds",
    steps: [
      { title: "Book a time", body: "Call 952-920-7535 or request online. Monday and Thursday afternoons are available along with weekday mornings." },
      { title: "Describe the pain plainly", body: "Point to where it sits, say whether it shoots toward a knee or foot, and mention the heating pad or pills you have leaned on so far." },
      { title: "Get examined", body: "Expect bending, leg raises and a reflex hammer. Imaging is ordered only if those tests raise a question that a picture would answer." },
      { title: "Agree on a plan and a checkpoint", body: "We set a point to recheck the same movements. If they are not improving, the plan changes." },
    ],
  },
  comparison: {
    title: "Acute versus chronic low back pain",
    columns: ["", "Acute or subacute (under 12 weeks)", "Chronic (12 weeks or more)"],
    rows: [
      ["Guideline first steps", "Heat, massage, acupuncture or manipulation[^qaseem-2017]", "Exercise and other non-drug options, with manipulation among them[^qaseem-2017]"],
      ["What manipulation studies show", "Modest short-term improvement[^paige-2017]", "Similar to other recommended therapies[^rubinstein-2019]"],
      ["Our usual approach", "Settle the flare, keep you moving", "Build strength and change daily habits along with hands-on care"],
    ],
  },
  whoFor: {
    title: "Who should book, and who should not wait",
    fitsTitle: "Good reasons to book",
    notFitsTitle: "Seek urgent care",
    fits: [
      "Low back pain after lifting, bending or gardening",
      "Pain that keeps returning every few months",
      "Neck and shoulder tension from desk work",
      "Hoping to avoid medication if possible",
    ],
    notFits: [
      "Saddle-area numbness or trouble controlling urine",
      "Leg weakness that is getting worse",
      "A sore back plus a fever, or past cancer and a new backache",
    ],
  },
  provider: {
    title: "Who treats you",
    body: "Every visit is with Dr. Alan Levitt, a 1986 graduate of Northwestern College of Chiropractic in Bloomington, practicing since 1987 and at this Saint Louis Park address since 1999.",
  },
  faqs: {
    title: "Richfield questions",
    items: [
      { q: "Which way should I drive from Richfield?", a: "The Crosstown to Highway 100 is the usual choice, about six miles in all, to 6200 Excelsior Blvd, Suite 201, Saint Louis Park." },
      { q: "Is chiropractic care backed by research for low back pain?", a: "Major guidelines list spinal manipulation among non-drug options, and reviews put its benefit roughly level with other accepted options[^qaseem-2017][^rubinstein-2019]." },
      { q: "Should I rest until it stops hurting?", a: "Usually not completely. Gentle activity like walking tends to help ordinary back pain more than bed rest, unless something in your exam says otherwise." },
      { q: "How many visits will I need?", a: "It depends on the exam and how you respond. We set a checkpoint early, and if progress stalls, we say so." },
    ],
  },
  related: {
    title: "Related pages for Richfield",
    links: [
      { href: "/areas-we-serve/richfield/back-pain-treatments", label: "Back pain care for Richfield", note: "The exam and the plan" },
      { href: "/areas-we-serve/richfield/degenerative-disc-disease", label: "Disc problems", note: "Worn or bulging discs" },
      { href: "/areas-we-serve/edina", label: "Edina", note: "Richfield's neighbor across Highway 62" },
      { href: "/areas-we-serve/minneapolis", label: "Minneapolis", note: "Just across the northern city line" },
      { href: "/therapeutic-exercise", label: "Therapeutic exercise", note: "Movements we teach" },
    ],
  },
  sources: [SRC.richfield, SRC.woodLake, SRC.qaseem, SRC.paige, SRC.rubinstein],
  cta: {
    title: "Book from Richfield",
    body: "Call or send a request. Mention the moment your back gave out; it shapes how we use the first hour.",
  },
};
