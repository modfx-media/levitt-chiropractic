import type { PseoHub } from "../types";
import { SRC } from "../sources";

export const fridley: PseoHub = {
  slug: "fridley",
  heroSubtitle:
    "Fridley is about eleven miles from Suite 201. University Avenue (Highway 47) or Highway 65 will get you to I-694, and from there Highway 100 or I-94 takes you toward Excelsior Boulevard.",
  keyFacts: [
    { label: "From Fridley", value: "About 11 miles" },
    { label: "2020 count", value: "29,590 residents", sourceId: "fridley" },
    { label: "Size", value: "10.88 square miles", sourceId: "fridley" },
    { label: "Roads people use", value: "Highway 65, Highway 47, I-694", sourceId: "fridley" },
  ],
  intro: {
    eyebrow: "Fridley",
    title: "An eleven-mile trip along a very old trail",
    paragraphs: [
      "Fridley sits about eleven miles from the office at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. A common path is Central Avenue (Highway 65) or University Avenue down to the beltway, then Highway 100 or I-94 for the last stretch toward Excelsior Boulevard. It is a longer trip than Golden Valley or Robbinsdale, and we plan the first visit accordingly.",
      "The 2020 count was 29,590 people, in a city of 10.88 square miles[^fridley]. It was named for Abram M. Fridley, who was elected the first territorial representative for the area in 1855; the township took his name in 1879, became a village in 1949, and became a city in 1957[^fridley].",
      "Two local patterns show up often here: long shifts at large employers along 694 and 65, and weekends at Springbrook Nature Center. The exam changes with which of those is actually bothering you, so we start by asking about the week you just had, not a generic one. A smaller piece of local history also comes up in conversation: John Banfill, the first settler in 1847, built the Banfill Tavern the same year, and a post office was operating by 1853, a year before a ferry started crossing the Mississippi here[^fridley]. It is a reminder that this was a river crossing long before it was a 694 campus town.",
    ],
  },
  atAGlance: {
    title: "Fridley background",
    items: [
      { label: "Older name", value: "Manomin, from the Ojibwe word for wild rice", sourceId: "fridley" },
      { label: "Village, then city", value: "Incorporated as a village in 1949 and as a city in 1957", sourceId: "fridley" },
      { label: "Early trail", value: "The 1844 Red River ox-cart Woods trail followed what is now East River Road", sourceId: "fridley" },
      { label: "Large employer", value: "Medtronic's operational headquarters opened in 2001 at I-694 and Highway 65", sourceId: "fridley" },
    ],
  },
  localFacts: {
    title: "Fridley history that still belongs on a care page",
    cards: [
      {
        title: "Before it was Fridley, it was Manomin",
        body: "John Banfill settled here in 1847, when the township was called Manomin, a variant of the Ojibwe word for wild rice. The area then included land that later became Columbia Heights, Fridley, Hilltop and Spring Lake Park. A ferry across the Mississippi was established in 1854, and the town post office opened a year earlier.",
        sourceId: "fridley",
      },
      {
        title: "Springbrook: trails, a new center, and a long memory",
        body: "Fridley began buying land for Springbrook Nature Center in 1970. The park has more than three miles of hiking trails through woods and wetlands and draws about 150,000 visitors a year. A new interpretive center was dedicated on July 30, 2016, after the Springbrook Nature Center Foundation raised $5.5 million toward the expansion.",
        sourceId: "springbrook",
      },
      {
        title: "A campus on a former drive-in",
        body: "In 2001, Medtronic opened its new world headquarters on the site of the 100 Twin Drive-in, at Interstate 694 and Highway 65. As of 2019 it remained the operational headquarters, with a reported 3,366 employees in the city. Totino's also opened a frozen-pizza factory here in 1970. Long standing or long sitting at those campuses is a familiar story in this office.",
        sourceId: "fridley",
      },
      {
        title: "The name, and a county that lasted only a few years",
        body: "In 1855, Abram M. Fridley was elected the first territorial representative for the area, and in 1879 the Minnesota Legislature, of which he was still a member, gave the township his name. In between, in 1857, the area left Ramsey County to become Manomin County, at the time the smallest county in the nation, with only 18 sections[^fridley]. It is a reminder that this place has been redrawn more than once, which is one reason we still ask whether you are starting from the river side or from closer to Spring Lake Park.",
        sourceId: "fridley",
      },
      {
        title: "Totino's in 1970, and a shift that still shows up in the exam",
        body: "Totino's opened a frozen-pizza factory in Fridley in 1970, as the company was growing into a national business, and the operation was sold to Pillsbury in 1975[^fridley]. That is a very specific kind of local work history — long standing, early starts, a plant floor rather than a desk — and it is still the kind of week we hear about, even from people who have never set foot in that building. If your shift looks like that, or like the later campus work at the 694 and 65 interchange, tell us the hours and whether you sit or stand. The exam follows the shift, not a generic Fridley outline, and the eleven-mile return trip is planned around that same clock.",
        sourceId: "fridley",
      },
    ],
  },
  diagram: {
    title: "Fridley to Suite 201",
    caption: "How the eleven miles usually go: 65 or 47, then 694, then 100 or 94 toward Excelsior Boulevard. Mid-morning is generally kinder than the 694 afternoon peak.",
    stops: [
      { label: "Fridley", note: "Highway 65 or University Avenue" },
      { label: "I-694", note: "The beltway" },
      { label: "Highway 100 or I-94", note: "Toward Saint Louis Park" },
      { label: "6200 Excelsior Blvd, Suite 201", mi: 11 },
    ],
    legs: ["65 or 47 to 694", "694 to 100 or 94", "Excelsior exit"],
  },
  sections: [
    {
      eyebrow: "Campus weeks",
      title: "When the job is along 694 and 65",
      paragraphs: [
        "Fridley is a job city as well as a home city. Besides Medtronic, major employers have included BAE Systems, Cummins, Unity Medical Center and a Target distribution center[^fridley]. If your week is a long shift on a campus or a factory floor, tell us how long you stand or sit and what the floor is like. The exam will include hips and feet, not only the spine.",
        "A well-known trial of neck care found that a short home-exercise plan with advice did about as well as hands-on treatment for some people with recent neck pain. That is one reason we teach a short routine in the room and check it the next time, rather than assuming every visit has to be hands-on.",
      ],
    },
    {
      eyebrow: "Springbrook weekends",
      title: "Woods, wetlands and a sore hip on Monday",
      paragraphs: [
        "On July 18, 1986, a tornado spent 16 minutes inside Springbrook, destroying thousands of century-old trees. The woods grew back, and the trails are busy again[^springbrook]. A first long hike of the season, especially on roots and boardwalks, is a common reason Fridley patients call the following week.",
        "If the soreness is easing and staying local, we can usually work with that. If discomfort is traveling, or a foot is getting weak, say so when you book, not after you have already come down 694. Our {back pain treatments|/areas-we-serve/fridley/back-pain-treatments} page is a useful place to read ahead for that kind of question.",
      ],
    },
    {
      eyebrow: "Neighbors and the distance",
      title: "Columbia Heights, New Brighton and Spring Lake Park",
      paragraphs: [
        "If you live near {Columbia Heights|/areas-we-serve/columbia-heights}, {New Brighton|/areas-we-serve/new-brighton} or {Spring Lake Park|/areas-we-serve/spring-lake-park}, the eleven-mile figure may be a little short or a little long. Tell us the actual starting point. We would rather adjust the appointment time than pretend every Fridley driveway is the same.",
        "Because the trip is longer than it is for our closest cities, we try not to stack early visits tightly. A solid first exam and a home plan you will keep usually beats two rushed trips in the same week.",
      ],
    },
  ],
  process: {
    title: "Making the eleven-mile trip count",
    steps: [
      { title: "Book around the 694 clock, not against it", body: "A mid-morning appointment usually misses the beltway crush. The clinic opens at 8:30 most weekdays; Wednesday mornings begin at 10." },
      { title: "Do not leave records at home if you already have them", body: "Bring an ID, and if a prior image or written report is already in the house, pack it. We would rather read it once than send you back up 694 for a paper." },
      { title: "Get a direct answer before you get back on 694", body: "You will hear what the exam showed and whether another trip down from Fridley is actually worth your time, or whether a different setting would be the smarter next step." },
      { title: "Leave with homework that fits a 694-corridor week", body: "We teach two or three movements in the room. They have to be realistic after a campus or factory shift, not a program that only looks good on paper." },
    ],
  },
  comparison: {
    title: "Campus shift versus trail weekend",
    columns: ["How the week looks", "What tends to show up", "What we tend to work on"],
    rows: [
      ["A 694-campus or factory shift", "Feet, hips and a low back that feel spent, or a neck that stiffens from sitting", "Shoes or the chair, real breaks, and a brief daily routine"],
      ["A Springbrook or river-road weekend", "A hip or low back that is unhappy after a long walk on roots or boardwalks", "How far you went, the terrain, and a weekday routine that does not pick a fight"],
      ["Sitting on 694", "A stiff back after the beltway stretch", "Getting out of the car and walking a minute before you come in"],
    ],
  },
  whoFor: {
    title: "Fridley weeks this office is built for",
    fitsTitle: "A good reason to make the drive",
    notFitsTitle: "Skip the eleven miles and go elsewhere first",
    fits: [
      "Tightness after a long shift at a workplace along 694 or Highway 65",
      "A hip or low back that complains after a Springbrook walk on roots or boardwalks",
      "You want a plan that does not assume you can come down from Fridley several times a week",
      "You need a first exam that can honestly say whether this kind of care belongs in the picture at all",
    ],
    notFits: [
      "Numbness spreading down a limb, or strength that drops off quickly, is an emergency-department matter",
      "A weight on the chest, or breathing that has become a struggle, needs medical care first",
      "If you are running a temperature on top of a sore back, call a medical clinic before you call us",
    ],
  },
  provider: {
    title: "The chiropractor you will actually meet",
    body: "Fridley patients work with Dr. Alan Levitt himself. He is a 1986 graduate of Northwestern College of Chiropractic, has been in practice since the year after that, and has used this Excelsior Boulevard suite as the clinic home since 1999.",
  },
  faqs: {
    title: "Fridley questions",
    items: [
      { q: "What is the usual drive from Fridley?", a: "About eleven miles, with the last stop at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. A common pattern is Central Avenue or University Avenue down to I-694, then Highway 100 or I-94 for the approach to Excelsior Boulevard." },
      { q: "Is eleven miles inside the area you cover?", a: "Yes. Fridley sits inside our 15-mile line. We still treat the beltway part of the trip as something to plan around, especially at rush hour." },
      { q: "Can you keep the return visits from piling up?", a: "Yes, that is the idea for an eleven-mile trip. You leave with a short list of movements to keep after a 694-corridor shift, and the next visit is only if reviewing them in the room would change course." },
      { q: "Do you have Saturday times?", a: "Some Saturdays can be reserved. If a weekday run down 694 is the problem, the front desk at 952-920-7535 can tell you whether a weekend time is still free." },
    ],
  },
  related: {
    title: "More for Fridley",
    links: [
      { href: "/areas-we-serve/fridley/back-pain-treatments", label: "Back pain care for Fridley", note: "Campus weeks and trail weekends" },
      { href: "/areas-we-serve/fridley/functional-medicine", label: "Functional medicine", note: "When the questions are broader" },
      { href: "/areas-we-serve/spring-lake-park", label: "Spring Lake Park", note: "A close neighbor with a slightly longer trip" },
      { href: "/areas-we-serve/columbia-heights", label: "Columbia Heights", note: "On the way toward Minneapolis" },
      { href: "/contact", label: "Contact", note: "Hours and directions" },
    ],
  },
  sources: [SRC.fridley, SRC.springbrook, SRC.springbrookCity],
  cta: {
    title: "Book from Fridley",
    body: "Say whether you are coming from a 694 campus or from a neighborhood near Springbrook, and we will suggest an earlier slot that usually makes the eleven miles easier than a late-afternoon beltway run.",
  },
};
