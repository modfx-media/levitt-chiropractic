export type HubFaq = { q: string; a: string };
export type HubService = { href: string; label: string; note: string };
export type HubSection = { eyebrow: string; title: string; paragraphs: string[] };

export type PriorityHub = {
  slug: string;
  h1: string;
  subtitle: string;
  description: string;
  sections: HubSection[];
  servicesTitle: string;
  servicesIntro: string;
  services: HubService[];
  faqTitle: string;
  faqs: HubFaq[];
  ctaTitle: string;
  ctaBody: string;
};

const ADDR = "6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416";
const PHONE = "952-920-7535";

function citySvc(city: string, slug: string): string {
  return `/areas-we-serve/${city}/${slug}`;
}

const hubs: PriorityHub[] = [
  {
    slug: "minneapolis",
    h1: "Chiropractic care for Minneapolis",
    subtitle:
      "One clinic, in Saint Louis Park. Southwest neighborhoods are often a short trip along Excelsior Boulevard. Downtown takes longer.",
    description:
      "Minneapolis patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Adjustments, back pain, and cold laser. Call 952-920-7535.",
    servicesTitle: "Care Minneapolis patients ask about",
    servicesIntro:
      "Neck pain that did not start in a crash, and a short list of home exercise, are part of the same Saint Louis Park visit. The topics below are the ones Minneapolis patients book most often.",
    services: [
      { href: citySvc("minneapolis", "back-pain-treatments"), label: "Back pain", note: "Local lumbar pain and leg pain, including after a long downtown sit." },
      { href: citySvc("minneapolis", "degenerative-disc-disease"), label: "Disc problems", note: "Herniated and worn discs, read against the exam rather than the report alone." },
      { href: citySvc("minneapolis", "cold-laser-therapy"), label: "Cold laser", note: "A handheld light used after the exam, not a heat treatment." },
      { href: citySvc("minneapolis", "cryotherapy"), label: "Targeted cold", note: "Ice on a hot, new strain. Not a walk-in cold chamber." },
      { href: citySvc("minneapolis", "ice-pack-cryotherapy"), label: "Ice pack", note: "How a pack is placed, and how long it stays on the skin." },
      { href: citySvc("minneapolis", "adjustments-and-manipulation"), label: "Adjustments", note: "Diversified, Zone Therapy, or Torque Release, chosen after the exam." },
      { href: citySvc("minneapolis", "injuries"), label: "Sports and work strains", note: "Falls, lifts, and bike crashes that were not a car wreck." },
      { href: citySvc("minneapolis", "personal-injury"), label: "Auto accidents", note: "Whiplash and other crash injuries, after emergency problems are cleared." },
      { href: citySvc("minneapolis", "custom-foot-orthotics"), label: "Custom orthotics", note: "When the way you walk is part of the back or knee pain." },
      { href: citySvc("minneapolis", "functional-medicine"), label: "Functional medicine", note: "Sleep, food, and habits alongside the spinal exam." },
      { href: citySvc("minneapolis", "alternative-medicine"), label: "Alternative medicine", note: "A non-surgical start when the exam says that is safe." },
      { href: "/neck-pain", label: "Neck pain", note: "Desk necks and arm symptoms that did not start in a crash." },
      { href: "/therapeutic-exercise", label: "Home exercise", note: "A short list you can do in an apartment, without a gym." },
    ],
    faqTitle: "Questions from Minneapolis",
    ctaTitle: "Book from Minneapolis",
    ctaBody: "Say which neighborhood you are leaving from so the first visit is not rushed.",
    sections: [
      {
        eyebrow: "The drive",
        title: "From Lake Street to Excelsior Boulevard",
        paragraphs: [
          `Southwest Minneapolis and the office share a road. West Lake Street continues west as Excelsior Boulevard, so people leaving Linden Hills, East Harriet, or the lakes often stay on that one corridor to ${ADDR}. In light traffic that trip is often about 10 minutes. It is longer when the lights on Lake Street stack up, and it is not the same trip as leaving downtown.`,
          `From downtown, the usual freeway is I-394 west, then south to Excelsior Boulevard. That drive is often 15 to 25 minutes when traffic is moving, and it can be longer at the end of the day. Northeast and north Minneapolis add still more time. There is no Levitt office inside the city. Dr. Alan Levitt has practiced since 1987, and this clinic has been at Suite 201 since 1999. Call ${PHONE}.`,
          `Uptown and the Midtown Greenway show up in the history for a different reason than the freeway. A week of bike commuting can leave the neck and the mid-back locked even when the ride itself felt fine. Tell us the route you actually ride. The Greenway is flat, and the hills and the car traffic around it are not.`,
        ],
      },
      {
        eyebrow: "Why people come",
        title: "Desk weeks, bike miles, and winter sidewalks",
        paragraphs: [
          `A lot of Minneapolis visits start as a desk problem. Sitting in a downtown office, then a long ride or a packed bus, then a neck that will not turn by Thursday. Medication can dull that. It does not tell us whether the joint is stuck, whether a disc is involved, or whether the arm is getting weaker. The exam does.`,
          `Winter adds slips on packed snow and ice. A fall that leaves you unable to bear weight, or a head strike with confusion or vomiting, belongs in emergency care first. Hennepin Healthcare and other emergency departments clear the dangerous part. If that has already happened, bring the notes. We look at the joint and the soft tissue afterward. We do not repeat an emergency workup.`,
          `A rear-end crash is a separate story from a stiff neck after a screen day. Whiplash and the chart that goes with an auto accident are {personal injury|/personal-injury} care. Neck pain that did not start in a car is {neck pain|/neck-pain}. Low-back pain and sciatica are {back pain|/back-pain-treatments}.`,
        ],
      },
      {
        eyebrow: "The visit",
        title: "What to plan on before you leave the city",
        paragraphs: [
          `Give yourself a few extra minutes the first time, especially if you are coming from downtown at rush hour. Suite 201 is the destination, not a storefront on Hennepin. Bring a photo ID, any imaging, and clothes you can move in. The first visit is a history and an exam. X-rays are taken only when they would change the plan.`,
          `You should leave knowing what we think is mechanical, what we are not willing to call mechanical, and what to do at home in an apartment or a house. A twelve-move sheet that needs a gym does not survive a Minneapolis week. Two movements you will actually do are the usual homework. If strength in an arm or a leg is dropping, or bowel or bladder control changes, that is an emergency, not a follow-up slot.`,
          `We do not quote a fee here, and we do not guess what a health plan or an auto policy will pay. Payment at the desk is cash, check, or card. A payment plan can be discussed. New patients use the appointment form. If you already have a chart, use the existing-patient form.`,
        ],
      },
      {
        eyebrow: "After you are home",
        title: "A plan that fits a Minneapolis week",
        paragraphs: [
          `The useful test is not whether the table felt good for an hour. It is whether you can turn your head on a bike, sit through a downtown afternoon, or walk a snowy sidewalk without the pain spreading. Some recent strains loosen over a short series of visits. A neck or back that has been guarded for months usually needs the chair, the ride, or the lifting habit changed as well. We compare the same movements next time. If they are not changing, the plan changes or we refer you.`,
          `Keep ordinary activity that does not sharply increase arm or leg pain, unless a physician told you not to. Full rest for an ordinary mechanical ache usually makes it stiffer. Stop and call if weakness shows up, if a headache is sudden and severe, or if bowel or bladder control changes. Those are not problems to wait out until the next opening.`,
          `If you live with roommates or in a small apartment, say so. The homework has to fit the floor you actually have. We will not hand you a gym program and call it a failure when you had nowhere to do it. Two movements, done most days, beat a list you abandon after one try.`,
          `A week that mixes the bus, a backpack, and the Greenway is a different neck from a week spent in a car. Note which arm tingles, whether it starts on the ride or at the desk, and whether it fades when you stand up. That detail is more useful than “tight.” A tendon that stays sore after the exam can be a {cold laser|/cold-laser-therapy} question. A hot, new strain is an ice question, covered with {targeted cold|/cryotherapy}. Neither tool comes before the history.`,
          `Northeast and north Minneapolis should not borrow the southwest timing. The lakes corridor is the short version. Leaving downtown, or farther north, is the I-394 version, and it moves with the hour. Name the neighborhood when you book so the visit is not planned as a quick errand from the lakes.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Is the office in Minneapolis?",
        a: `No. The only clinic is ${ADDR}. Southwest neighborhoods often reach it along Excelsior Boulevard in about 10 minutes when traffic is light. Downtown by I-394 is usually longer. Call ${PHONE}.`,
      },
      {
        q: "I ride the Midtown Greenway and my neck locks up. Is that a reason to come in?",
        a: "It can be. Bike-commute tightness in the neck and mid-back is a common Minneapolis story. The exam checks motion and whether the arm is involved. A crash on the bike that left you confused, or a limb you cannot use, needs emergency care first.",
      },
      {
        q: "I was cleared at Hennepin Healthcare after a fall. Can you see me next?",
        a: "Yes, if the dangerous problems were already ruled out. Bring those notes. We look at the joints and soft tissue. We do not repeat the emergency visit, and we do not adjust through a red flag that is still unexplained.",
      },
      {
        q: "Do I need a referral from a downtown clinic?",
        a: "No. Minnesota does not require a physician referral to book a chiropractor. If another clinician gave you restrictions after a surgery or a fracture, bring them. We will not override those.",
      },
      {
        q: "Which problems should not wait for a Saint Louis Park appointment?",
        a: "Progressive weakness, groin numbness, a change in bowel or bladder control, fever with spinal pain, a sudden severe headache, or a crash that has not been medically screened. Those need urgent or emergency care the same day.",
      },
      {
        q: "How do I book?",
        a: `Call ${PHONE} or use the new-patient form. Say which part of Minneapolis you are leaving from if the drive is the part you are worried about. There is no published price list.`,
      },
    ],
  },
  {
    slug: "edina",
    h1: "Chiropractic care for Edina",
    subtitle:
      "The clinic is on Excelsior Boulevard in Saint Louis Park. From 50th and France the trip is often about 10 minutes.",
    description:
      "Edina patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, often about 10 minutes from 50th and France. Call 952-920-7535.",
    servicesTitle: "What Edina patients book",
    servicesIntro:
      "Back pain is the Edina concern people bring most often. A crash, and the exercises you do between visits, are part of the same Saint Louis Park appointment.",
    services: [
      { href: citySvc("edina", "back-pain-treatments"), label: "Back pain and sciatica", note: "The Edina topic we are asked about most, including golf and yard-work strains." },
      { href: citySvc("edina", "custom-foot-orthotics"), label: "Custom orthotics", note: "When walking shoes and golf shoes are part of the knee or back story." },
      { href: citySvc("edina", "cold-laser-therapy"), label: "Cold laser", note: "Light over a tendon or a sore spinal region, after the exam." },
      { href: citySvc("edina", "ice-pack-cryotherapy"), label: "Ice pack", note: "A short, protected pack for a new flare, with a timer." },
      { href: citySvc("edina", "cryotherapy"), label: "Targeted cold", note: "When to use cold, and when a hot joint needs a physician instead." },
      { href: citySvc("edina", "adjustments-and-manipulation"), label: "Adjustments", note: "The hands-on option when a joint is not moving." },
      { href: citySvc("edina", "degenerative-disc-disease"), label: "Disc care", note: "A report that says herniated disc, matched to what the leg can still do." },
      { href: citySvc("edina", "functional-medicine"), label: "Functional medicine", note: "Sleep and daily load, alongside the spinal findings." },
      { href: citySvc("edina", "injuries"), label: "Sports and yard injuries", note: "Strains from golf, tennis, or a lift that were not a car crash." },
      { href: citySvc("edina", "common-chiropractic-conditions"), label: "Other conditions", note: "Headaches, joint pain, and nerve symptoms that are not only the low back." },
      { href: citySvc("edina", "alternative-medicine"), label: "A non-surgical start", note: "When you want hands-on care before anyone talks about an operation." },
      { href: "/personal-injury", label: "After a car crash", note: "Whiplash and auto-accident exams are scheduled at the Saint Louis Park office." },
      { href: "/neck-pain", label: "Neck pain", note: "France Avenue sitting and screen work that show up in the neck." },
      { href: "/therapeutic-exercise", label: "Exercise between visits", note: "A short home list. You do not need a club membership to do it." },
    ],
    faqTitle: "Questions from Edina",
    ctaTitle: "Book from Edina",
    ctaBody: "France Avenue or south Edina changes the drive. Tell us which one.",
    sections: [
      {
        eyebrow: "Getting here",
        title: "France Avenue to Excelsior Boulevard",
        paragraphs: [
          `From 50th and France, the ordinary drive is north on France Avenue to Excelsior Boulevard, then a short distance to ${ADDR}. People who make that trip in light traffic often describe it as about 10 minutes. South Edina, including the 55439 area, is a longer version of the same idea: France Avenue or Highway 100 north, then Excelsior. Rush hour on France changes the clock. We will not pretend it is always 10 minutes.`,
          `There is no second clinic in Edina. Dr. Alan Levitt sees Edina patients in Suite 201, the same room as everyone else. He has been in practice since 1987 and at this address since 1999. The phone is ${PHONE}. Parking is at the building. Give yourself a few extra minutes the first time so the exam does not start with you still looking for the suite.`,
        ],
      },
      {
        eyebrow: "What shows up",
        title: "Golf, yard work, and a stiff neck from the car",
        paragraphs: [
          `Golf at Braemar and weekend yard work are the lumbar stories we hear from Edina. A swing or a day of lifting can leave one side of the low back guarded. That is not automatically a herniated disc, and it is not automatically “just a muscle.” Sitting, bending, and whether the pain passes the knee are the details that sort it. {Back pain|/back-pain-treatments} is the longer explanation.`,
          `France Avenue traffic shows up as a neck problem: shoulders up, rotation limited, sometimes a headache that starts at the base of the skull. If that neck pain followed a crash, it is a personal-injury exam, not a desk-neck visit. If it did not, {neck pain|/neck-pain} is the right description. Foot and knee pain that started as walking in the same shoes, including along a creek trail, is the orthotics question. We look at the shoes. We do not assume a custom pair is the answer.`,
          `A hot, swollen joint, a foot you cannot stand on, or back pain with fever is not a golf story. Those need a physician the same day. Bring any imaging you already have. We do not order films for the sake of having films.`,
        ],
      },
      {
        eyebrow: "A first appointment",
        title: "Make the short drive count",
        paragraphs: [
          `Because the drive is often short, people sometimes treat the visit like an errand between other stops. The exam still takes the time the history takes. Wear clothes you can bend in. Bring the golf shoes or the walking shoes if the feet are part of the pain. A photo ID and a medication list are enough paperwork to start.`,
          `You leave with a named next step: an adjustment if a joint is safe to move, cold or laser if the tissue is irritable, a few home exercises, or a referral. We do not quote a recovery date, and we do not list a fee on the website. Call ${PHONE} or use the new-patient form.`,
        ],
      },
      {
        eyebrow: "Between visits",
        title: "Golf weeks and desk weeks are not the same homework",
        paragraphs: [
          `If the flare started on a course, the next week of swings matters more than a perfect stretch on the living-room floor. We will tell you what to pause and what you can keep. Stopping golf forever is rarely the advice. Swinging through a new line of leg pain is also not the advice. Call if the pain passes the knee or the foot starts to feel weak.`,
          `Desk-day necks from sitting in France Avenue traffic need a change you can do in the car and at the chair, not a routine that takes half an hour you do not have. A short walk and a slower turn of the head are the usual scale. If a headache starts at the base of the skull and builds through the afternoon, mention that pattern. If the headache is the worst of your life, or it follows a hit to the head, use emergency care.`,
          `Shoes that only hurt on a creek path still belong in the conversation. Bring them next time rather than buying a new insert on the way home and hoping it matches the exam. A soft store insert can still be the wrong shape.`,
        ],
      },
      {
        eyebrow: "Season to season",
        title: "A golf week and a shovel morning are not the same back",
        paragraphs: [
          `Braemar in summer and a driveway in January load the low back in different ways. A swing that leaves one side guarded is something we can test: sitting, bending, and whether the pain passes the knee. A shovel morning is often a sudden lift with a twist. The useful detail is whether you could stand up straight afterward. “I overdid it” does not tell us which test to run.`,
          `The creek path is the walking version of that idea. If the heel or the knee only complains on that loop, the shoes you wore belong in the room. A custom pair is a later decision, after the foot is examined, not a product we start with because a path was named. A joint that is hot, red, or impossible to stand on needs a physician the same day. Bring those notes if you come in afterward.`,
          `South Edina and 50th and France can share a morning and still be two drives. If you are leaving from the 55439 area, say so when you call. Highway 100 north is often the calmer choice when France Avenue is stopped, and it still ends on Excelsior Boulevard. Arriving a few minutes early from the highway is a better start than rushing the lights and walking in already braced.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How long is the drive from 50th and France?",
        a: `Often about 10 minutes in light traffic, north on France Avenue to Excelsior Boulevard and ${ADDR}. South Edina takes longer. Rush hour on France can erase the “10 minutes.” Call ${PHONE} if you need a time of day that is usually calmer.`,
      },
      {
        q: "Can you look at a back that hurt after golf?",
        a: "Yes. Golf and yard work are common Edina stories. We check whether the pain stays local or runs down the leg, and whether a joint, a disc, or a muscle in spasm fits the exam. A new foot drop or bowel or bladder change is an emergency, not a golf follow-up.",
      },
      {
        q: "Do you make custom orthotics for walking pain?",
        a: "When the exam shows the feet are loading the knee, hip, or back, a prescription pair can be part of the plan. They are not a shelf insert, and they do not remove a heel spur. Bring the shoes you actually walk in.",
      },
      {
        q: "I was in a fender-bender on France Avenue. Where does that visit belong?",
        a: "With personal injury care at the Saint Louis Park office. Say it was a crash when you book. If you have not been screened after a higher-speed crash, do that before an adjustment.",
      },
      {
        q: "Is a referral required?",
        a: "No. You can book directly. If a surgeon has already limited what you may do, bring that restriction. We follow it.",
      },
      {
        q: "What should I wear?",
        a: "Clothes you can move in, and the shoes that bother you if the feet are part of the story. Plan on a few minutes of paperwork. The suite is 201.",
      },
    ],
  },
  {
    slug: "minnetonka",
    h1: "Chiropractic care for Minnetonka",
    subtitle:
      "Ridgedale is a common starting point. The exam is at Suite 201 on Excelsior Boulevard, not at the mall.",
    description:
      "Minnetonka patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. From Ridgedale, I-394 is a usual route. Call 952-920-7535.",
    servicesTitle: "Services Minnetonka patients use",
    servicesIntro:
      "Adjustments are a frequent Minnetonka question. A crash, and a wider look at headaches or nerve symptoms, are part of the same Saint Louis Park visit.",
    services: [
      { href: citySvc("minnetonka", "adjustments-and-manipulation"), label: "Adjustments", note: "The hands-on visit Minnetonka patients ask about most." },
      { href: citySvc("minnetonka", "custom-foot-orthotics"), label: "Orthotics", note: "Lake-path miles and commuting shoes that keep loading the same knee or hip." },
      { href: citySvc("minnetonka", "back-pain-treatments"), label: "Back pain", note: "Stiffness after a desk week near Ridgedale, or pain that travels down a leg." },
      { href: citySvc("minnetonka", "degenerative-disc-disease"), label: "Disc findings", note: "When an MRI already says herniation and you want the exam matched to the film." },
      { href: citySvc("minnetonka", "therapeutic-exercise"), label: "Exercise", note: "Home movements for the weeks you are not in the office." },
      { href: citySvc("minnetonka", "functional-medicine"), label: "Daily habits", note: "Sleep and workload questions when the joint is not the whole story." },
      { href: citySvc("minnetonka", "cryotherapy"), label: "Targeted cold", note: "For a hot flare, not a whole-body chamber." },
      { href: citySvc("minnetonka", "ice-pack-cryotherapy"), label: "Ice pack", note: "Placement and timing for a new strain." },
      { href: citySvc("minnetonka", "cold-laser-therapy"), label: "Cold laser", note: "A short light treatment when the exam supports it." },
      { href: citySvc("minnetonka", "injuries"), label: "Activity injuries", note: "Trail and yard strains that were not a motor-vehicle crash." },
      { href: citySvc("minnetonka", "alternative-medicine"), label: "Non-surgical care", note: "Hands-on options before anyone discusses an operation." },
      { href: "/neck-pain", label: "Neck pain", note: "Commute stiffness and headaches that start at the base of the skull." },
      { href: "/personal-injury", label: "Car crashes", note: "Whiplash exams are at the Saint Louis Park office." },
    ],
    faqTitle: "Questions from Minnetonka",
    ctaTitle: "Book from Minnetonka",
    ctaBody: "Ridgedale and the south side of the city are different drives. Say which one.",
    sections: [
      {
        eyebrow: "Routes",
        title: "From Ridgedale toward Excelsior Boulevard",
        paragraphs: [
          `Ridgedale sits on I-394. A common drive is east on I-394, then south to Excelsior Boulevard and ${ADDR}. Highway 7 east through Hopkins is the other familiar option when the freeway is ugly. In ordinary traffic the trip is often about 15 to 20 minutes. It is longer when I-394 is slow, and it is a different clock if you are starting from the southern edge of Minnetonka rather than from the mall.`,
          `People sometimes fold the visit into a Ridgedale errand. That can work if you still leave enough time for the history. Suite 201 is not a kiosk at the mall. Dr. Levitt has practiced since 1987 and at this address since 1999. Call ${PHONE}.`,
        ],
      },
      {
        eyebrow: "The usual stories",
        title: "Freeway sits and lake-path miles",
        paragraphs: [
          `A Ridgedale-area desk week plus a freeway commute is a neck and low-back pattern: guarded shoulders, a lumbar ache that likes to sit, and hips that complain on the first steps after the car. Walking the lake loops or the Dakota Trail in the same work shoes is the other half. Those miles are good for you until the tissue that was already irritated has to absorb them.`,
          `Orthotics come up when the gait is clearly part of the load, not because a trail was mentioned. Bring the shoes. {Custom orthotics|/custom-foot-orthotics} explains the difference between a prescription pair and a drugstore insert. {Back pain|/back-pain-treatments} covers sciatica and local lumbar pain. A crash on 394 or on Highway 7 belongs with {personal injury|/personal-injury}, and you should say so when you call.`,
          `Progressive leg weakness, saddle numbness, or a change in bowel or bladder control is an emergency wherever you started the drive. Do not finish the commute to prove the pain is “only a back.”`,
        ],
      },
      {
        eyebrow: "Planning the hour",
        title: "One thorough visit beats two rushed ones",
        paragraphs: [
          `The distance is why the first appointment is built as a full exam, not a pop-in. History, movement, and nerve testing if a limb is involved. X-rays only if they would change the plan. You go home with a small set of things to do on the weeks you cannot come back, because a Minnetonka calendar does not always allow a midweek return.`,
          `We do not publish prices. Payment is cash, check, or card, and a payment plan can be discussed. New patients request a visit online or call ${PHONE}. Existing patients use the other form.`,
        ],
      },
      {
        eyebrow: "Back at home",
        title: "The weeks you cannot cross town",
        paragraphs: [
          `A Minnetonka week often does not include a second trip. The plan has to say what you do on those days: which walk is fine, which lift waits, and which two exercises actually fit before work. If we load you with a list you will not open, that is our miss. Tell us the real morning, including the ones that start with a freeway and end late.`,
          `Lake-path soreness that is gone by the next morning is a different problem from hip pain that changes how you get out of the car at Ridgedale. Track which one you have for a few days if you can. You do not need a spreadsheet. “Left hip, worse after the loop, fine on rest days” is enough to steer the next exam.`,
          `We will not keep you on a standing weekly visit if the tests are flat. Driving in from Minnetonka for a visit that is not changing anything is a poor use of the freeway. If the story turns into weakness, fever, or bladder changes, do not make the drive at all. Use emergency care.`,
        ],
      },
      {
        eyebrow: "Errands and the exam",
        title: "A Ridgedale stop only works if the history still fits",
        paragraphs: [
          `Pairing the visit with a Ridgedale errand makes sense because I-394 already points that direction. It works when the appointment is the first stop. A history taken after a full loop of the mall is a shorter history, and it misses the hip that only hurts once you are back in the car seat. Come in the shoes you will walk in afterward. If you change into dress shoes in the parking ramp, we have looked at the wrong pair.`,
          `Highway 7 east through Hopkins is the road to choose when the freeway is crawling and you still have time. It is a different neck from a long 394 sit: more lights, more shoulder checks, less of that frozen freeway posture. Tell us which road you actually used. A neck that locks after Highway 7 is not the same finding as a neck that locks after an hour of brake lights.`,
          `Lake-path miles and the Dakota Trail show up as hip and heel pain in people whose job is a chair. The trail did not create a worn disc by itself, and the chair did not create a heel by itself. The exam is allowed to find both. If leg pain is new and the foot is getting harder to lift as the week goes on, do not add another loop to walk it off. Call, or use urgent care if the foot is not behaving normally.`,
          `What you do at home in Minnetonka should be two movements and a walking limit. If the only floor you have is a bedroom carpet, say that. If the morning starts with a child who has to be in a car before the freeway fills in, say that too. A list that ignores the real morning will not be done, and the next exam will be easy to misread.`,
          `If the hip only complains after you stand up from the car at home, put that in the history. It is not a side note to ignore until walking changes. Write down whether the lake path, the chair, or the seat started it. A few days of that note is enough to steer the next exam.`,
          `A Ridgedale desk and a lake loop on the same day can irritate the neck and the hip together. Both can be examined once if you say which one limits the afternoon. Saving the second complaint for a later freeway trip usually means it never gets examined.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Which road do people take from Ridgedale?",
        a: `Often I-394 east, then south to Excelsior Boulevard. Highway 7 through Hopkins is the other common choice. The office is ${ADDR}. In light traffic the trip is often about 15 to 20 minutes. Call ${PHONE}.`,
      },
      {
        q: "I walk the Dakota Trail and my hip keeps tightening. Should that be part of the exam?",
        a: "Yes if the hip or the low back is limiting you. Tell us the shoes and how far you go. A custom orthotic is only added when the feet are part of that load. A hip that will not bear weight, or a joint that is hot and you have a fever, needs a physician first.",
      },
      {
        q: "Can the first visit cover both my neck and my low back?",
        a: "Yes. Say which one limits the day. The exam can look at both. Neck pain that started in a crash is scheduled as a personal-injury visit so the history is recorded that way.",
      },
      {
        q: "Do you require a referral?",
        a: "No. Book directly. Bring surgical restrictions if you have them. We will not set them aside.",
      },
      {
        q: "What if I cannot come back every week?",
        a: "Say that at the first visit. Home exercise is written for the weeks you are in Minnetonka, not for an ideal schedule. If the exam is not changing, we change the plan instead of stacking visits you cannot keep.",
      },
      {
        q: "Where do I park?",
        a: "At the building, Suite 201. Give yourself a few extra minutes the first time. There is no mall parking involved once you leave Ridgedale.",
      },
    ],
  },
  {
    slug: "bloomington",
    h1: "Chiropractic care for Bloomington",
    subtitle:
      "West Bloomington and the Mall of America area are different drives. Both end at Suite 201 on Excelsior Boulevard.",
    description:
      "Bloomington patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Drive time varies from the west side to the mall. Call 952-920-7535.",
    servicesTitle: "Bloomington requests we actually see",
    servicesIntro:
      "Back pain, orthotics, and disc findings are the Bloomington topics with the most questions. Ice-pack instructions, sports injuries, and home exercise are explained with the Saint Louis Park services.",
    services: [
      { href: citySvc("bloomington", "back-pain-treatments"), label: "Back pain and sciatica", note: "The problem Bloomington patients ask about most." },
      { href: citySvc("bloomington", "custom-foot-orthotics"), label: "Custom orthotics", note: "Long shifts on hard floors, and walking that keeps the same knee angry." },
      { href: citySvc("bloomington", "degenerative-disc-disease"), label: "Disc problems", note: "A herniated or worn disc, compared with what the leg can still do." },
      { href: citySvc("bloomington", "functional-medicine"), label: "Habits and sleep", note: "When the spinal finding sits on top of a schedule that never recovers." },
      { href: citySvc("bloomington", "adjustments-and-manipulation"), label: "Adjustments", note: "A specific contact after the exam, not a routine crack." },
      { href: citySvc("bloomington", "personal-injury"), label: "Crash injuries", note: "Whiplash and other auto injuries, with the notes from any ER visit." },
      { href: citySvc("bloomington", "cold-laser-therapy"), label: "Cold laser", note: "Handheld light for a tendon or spinal region that stays irritable." },
      { href: citySvc("bloomington", "cryotherapy"), label: "Targeted cold", note: "Cold on a hot area. Not a cryotherapy spa." },
      { href: citySvc("bloomington", "common-chiropractic-conditions"), label: "Other spine problems", note: "Headaches, pinched-nerve symptoms, and joint pain that is not only the low back." },
      { href: citySvc("bloomington", "alternative-medicine"), label: "Non-operative care", note: "A first step that is not surgery and not an opioid." },
      { href: "/neck-pain", label: "Neck pain", note: "Commute necks and headaches that start at the skull base." },
      { href: "/ice-pack-cryotherapy", label: "Ice at home", note: "How to use a pack without injuring the skin." },
      { href: "/therapeutic-exercise", label: "Exercise", note: "A short list for between visits." },
      { href: "/injuries", label: "Work and sports strains", note: "Lifts and falls that were not a car crash." },
    ],
    faqTitle: "Questions from Bloomington",
    ctaTitle: "Book from Bloomington",
    ctaBody: "Tell us whether you are starting near the mall or on the west side.",
    sections: [
      {
        eyebrow: "Two different drives",
        title: "The mall area is not the same trip as west Bloomington",
        paragraphs: [
          `Bloomington is wide. From the Mall of America area, people typically use I-494 west and then north toward Excelsior Boulevard. That is often on the order of 20 minutes when the Crosstown and 494 are moving, and it is a poor bet at peak hour. From west Bloomington, France Avenue or Highway 169 north toward Highway 7 and Excelsior is the more local version, often closer to 15 minutes in light traffic. Both end at ${ADDR}.`,
          `Do not budget a single number for the whole city. If you tell us which side you are leaving from, we can suggest a time of day that is usually less punishing. The clinic has been at Suite 201 since 1999. Dr. Alan Levitt has practiced since 1987. Call ${PHONE}.`,
        ],
      },
      {
        eyebrow: "What hurts",
        title: "Back pain, long floors, and discs that already have a report",
        paragraphs: [
          `Back pain is the Bloomington problem we are asked about most: a lumbar ache after standing, a sit-down job that still hurts, or sciatica that shows up in the car on 494. {Back pain|/back-pain-treatments} is where that pattern is sorted, including the difference between a local ache and a nerve. If you already have a scan that says herniated disc, bring it. The useful question is whether the finding matches the leg, which is {disc care|/degenerative-disc-disease}.`,
          `Orthotics come up for people who stand on hard floors or walk the same loop until a knee or a heel stays angry. A custom pair is prescribed only when the feet are part of the load. They do not sand down a spur. Cold laser is a later tool for a tendon that stays irritable after the exam, not the first thing we sell.`,
          `A crash on 494 or on a local road is {personal injury|/personal-injury} if you want that history in the chart from the start. Neck stiffness that is not from a crash is {neck pain|/neck-pain}. Fever with back pain, a leg that is getting weaker, or groin numbness means turn around and use emergency care.`,
        ],
      },
      {
        eyebrow: "Before you leave",
        title: "Make the longer drive worth the exam",
        paragraphs: [
          `If you are coming from the mall side, do not stack the visit against a shift change. The history takes longer than the freeway estimate. Bring imaging, a photo ID, and shoes if the feet are involved. You should hear a working idea and a next step before you get back on 494.`,
          `There is no fee schedule on the website. Ask when you book. Payment is cash, check, or card. We will not guess insurance. New patients use the online form or call ${PHONE}.`,
        ],
      },
      {
        eyebrow: "After the drive back",
        title: "What should be different on the next shift",
        paragraphs: [
          `The scoreboard for a standing job is the last hour of the shift, not the moment you stand up from the table. If that hour is unchanged after a fair trial of care, we change the plan. Orthotics, a different way of loading a cart, or a referral can each be the change. None of them is automatic.`,
          `People who start near the mall sometimes want the visit to fix a disc an MRI already named. Comfort can improve while the picture stays the same. We will not order another scan to admire it, and we will not tell you a disc went back in. If the leg is weaker on the drive home than it was on the way down, call. Do not wait for the next booking to see if it passes.`,
          `A short walk on a break is usually safer than a week of lying down after an ordinary mechanical backache. Sharp new leg pain is the exception. So is a back that comes with fever. Those are not reasons to finish a shift first.`,
        ],
      },
      {
        eyebrow: "Which side of the city",
        title: "West Bloomington should not inherit a mall-area clock",
        paragraphs: [
          `On the west side, France Avenue or Highway 169 north toward Highway 7 is usually the drive that matches the map. Using a Mall of America estimate for that trip either makes you early and irritated, or it makes you leave late for a road you are not taking. Say “west” or “near the mall” when you book. Those are different arrivals at the same suite.`,
          `Standing on mall concrete through a holiday-season shift is a specific low back: acceptable at the start of the shift, faded by the last hour, then finished off by the car seat. That pattern is not automatically a disc. A disc you already know about can still be irritated by the same shift. Bring the report if you have one. We compare it with the leg. We do not treat the paper.`,
          `Shift work near the airport runs on a clock that is not a mall clock. A body that sleeps at odd hours does not settle a strain the way a regular weekday body does. Tell us the shift. When sleep and the schedule are clearly why a simple ache will not calm down, that belongs with {habits and sleep|/areas-we-serve/bloomington/functional-medicine}. It is not a lab menu, and changing food will not repair a nerve.`,
          `Cold on a hot area after the shift is {targeted cold|/areas-we-serve/bloomington/cryotherapy}, with a time limit so the skin stays intact. A tendon that is still irritable after the exam can be a {cold laser|/areas-we-serve/bloomington/cold-laser-therapy} question. Neither one is scheduled because the drive was long. Both wait on what the exam shows.`,
          `The west side and the mall area also differ in what the car does to a back that was already tired. A shorter local drive can still stiffen a disc that does not like sitting. A longer trip on 494 can be what turns a dull ache into leg pain. Say which drive you had, and whether the leg changed while you were in the seat.`,
          `After a holiday retail shift, a calm morning is a better exam than the same night. A history given while you are still on your feet is thinner than one given after you have slept. If the leg is weaker on the way home than it was at the start of the shift, do not wait for that morning. Call.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How long from the Mall of America?",
        a: `Often around 20 minutes on I-494 when traffic is moving, then north to ${ADDR}. Peak hour can add a lot. West Bloomington by France Avenue or Highway 169 is often shorter. Call ${PHONE} and say which side you are on.`,
      },
      {
        q: "I stand all day and my low back fades by evening. Is that something you see?",
        a: "Yes. Standing shifts and long sits are both common. We check whether the pain stays in the back or runs into the leg, and whether the feet are feeding it. A custom orthotic is not automatic.",
      },
      {
        q: "I already have an MRI that says herniated disc. Should I bring it?",
        a: "Yes. We compare it with the exam. A report by itself does not pick the treatment. New weakness, groin numbness, or a change in bowel or bladder control should not wait on this appointment.",
      },
      {
        q: "Can I be seen after a crash on 494?",
        a: "Yes, as a personal-injury visit, once any emergency screening you needed is done. Bring those records. We do not write an injury letter without an exam.",
      },
      {
        q: "Do I need a referral?",
        a: "No. Book directly unless a surgeon has restricted your activity. Bring that note if it exists.",
      },
      {
        q: "What if I only have a short window between shifts?",
        a: "Say so when you schedule. We would rather pick a calmer hour than shorten the exam until it is useless. The first visit is still a history and a test of motion.",
      },
    ],
  },
  {
    slug: "plymouth",
    h1: "Chiropractic care for Plymouth",
    subtitle:
      "Most drives are long enough to plan. Highway 169 south is the usual spine of the trip to Excelsior Boulevard.",
    description:
      "Plymouth patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Highway 169 south is a common route. Call 952-920-7535.",
    servicesTitle: "Care Plymouth patients schedule",
    servicesIntro:
      "Back pain, orthotics, and sideline strains are what Plymouth patients schedule most. A crash, cold laser, and a wider conditions visit are part of the same Saint Louis Park appointment.",
    services: [
      { href: citySvc("plymouth", "back-pain-treatments"), label: "Back pain and sciatica", note: "Desk weeks, sideline standing, and leg pain after a drive on 169." },
      { href: citySvc("plymouth", "injuries"), label: "Sports and yard injuries", note: "Strains from youth sports on the sideline, or a lift at home." },
      { href: citySvc("plymouth", "custom-foot-orthotics"), label: "Orthotics", note: "Trail miles around Plymouth Creek in shoes that were fine at a desk." },
      { href: citySvc("plymouth", "adjustments-and-manipulation"), label: "Adjustments", note: "When a joint, not only a tired muscle, is limiting motion." },
      { href: citySvc("plymouth", "cryotherapy"), label: "Targeted cold", note: "A hot, new strain. Not a chamber." },
      { href: citySvc("plymouth", "ice-pack-cryotherapy"), label: "Ice pack", note: "Home use after the visit, with a cloth and a timer." },
      { href: citySvc("plymouth", "degenerative-disc-disease"), label: "Disc care", note: "If bending or sitting on the drive lights up a leg." },
      { href: citySvc("plymouth", "functional-medicine"), label: "Sleep and schedule", note: "When the pain sits on a week that never unwinds." },
      { href: citySvc("plymouth", "alternative-medicine"), label: "Non-surgical start", note: "Hands-on care before an operation is the conversation." },
      { href: "/neck-pain", label: "Neck pain", note: "Tech-corridor sitting and the 169 grind in the neck and shoulders." },
      { href: "/personal-injury", label: "Car crashes", note: "Schedule crash care at the Saint Louis Park office and say it was a collision." },
      { href: "/cold-laser-therapy", label: "Cold laser", note: "Light for a stubborn tendon, after the exam says it fits." },
      { href: "/therapeutic-exercise", label: "Home exercise", note: "Written for the weeks you stay in Plymouth." },
    ],
    faqTitle: "Questions from Plymouth",
    ctaTitle: "Book from Plymouth",
    ctaBody: "A 20-minute estimate is for light traffic. Rush hour on 169 is a different trip.",
    sections: [
      {
        eyebrow: "The commute in",
        title: "Highway 169, then toward Excelsior",
        paragraphs: [
          `Plymouth is far enough that the visit should be on purpose. Highway 169 south is the road most people name, then east toward I-394 or straight on toward Excelsior Boulevard and ${ADDR}. From the Plymouth Creek area, Highway 55 is the other familiar start before you drop south. In light traffic the trip is often around 20 minutes. At rush hour, 169 can turn that into a much longer sit. We would rather you pick a calmer hour than arrive clenched from the freeway.`,
          `This is not a drop-in on the way to somewhere else unless you have actually left time. Dr. Alan Levitt has practiced since 1987 and at Suite 201 since 1999. Call ${PHONE}. There is no Plymouth branch.`,
        ],
      },
      {
        eyebrow: "Sidelines and desks",
        title: "Youth sports, trail miles, and a neck from the car",
        paragraphs: [
          `Parents who stand through youth sports, then sit the drive home, describe a low back that fades by the last quarter and a neck that is worse the next morning. The athlete’s injury and the parent’s back are different exams. Tell us which body you are booking. A lift in the garage or a weekend project is the other common story, and it belongs with {injury care|/injuries} when it was not a car crash.`,
          `Plymouth Creek trails add miles in shoes that were chosen for a desk. Heel and knee pain that starts there is an orthotics question only after we watch how you stand. {Back pain|/back-pain-treatments} covers the lumbar ache and sciatica. Neck stiffness from the 169 sit, without a crash, is {neck pain|/neck-pain}.`,
          `Do not drive down if the leg is getting weaker, if you cannot feel the groin normally, or if bowel or bladder control has changed. Those are same-day medical problems. A fever with back pain is the same category.`,
        ],
      },
      {
        eyebrow: "So the drive pays off",
        title: "Leave with work you can do in Plymouth",
        paragraphs: [
          `The first visit is a history, a movement exam, and a plan that survives a week when you cannot come back. Imaging only if it would change that plan. Homework is a few exercises, not a packet. Ice instructions, if the tissue is hot, are specific about time and skin.`,
          `We do not list prices. Ask when you call ${PHONE}. Payment is cash, check, or card. A payment plan can be discussed. New patients use the appointment request. If the problem started in a crash, say that before you are on 169 so the visit is set up as personal injury care.`,
        ],
      },
      {
        eyebrow: "Staying in Plymouth",
        title: "Homework for a week you will not drive back",
        paragraphs: [
          `Most people cannot come down 169 twice in one week, and the plan should admit that. You leave with a walking limit, one or two movements, and a clear stop sign. The stop sign is new weakness, numbness in the groin, or a change in bladder or bowel control. Everything short of that can usually wait for the next booked visit, with the homework in between.`,
          `Ice, if we recommend it, is a pack with a cloth and a clock, not an afternoon with a bag of frozen vegetables against bare skin. The how-to lives with {ice pack care|/ice-pack-cryotherapy}. A tendon that is still sore after the exam, and is not a fresh hot injury, can later be a {cold laser|/cold-laser-therapy} question. Laser is not something to request on the phone before anyone has seen the tissue.`,
          `Write down the drive that actually hurt. Some people are fine in Plymouth and miserable by the time 169 reaches the 394 interchange. Others are fine in the car and stiff the moment they stand up at home. Those are different findings. A one-line note on the passenger seat is enough. You do not need an app.`,
        ],
      },
      {
        eyebrow: "Whose body is the visit",
        title: "The sideline and the athlete are separate exams",
        paragraphs: [
          `Youth sports put two spines in the same household. The parent who stands on a sideline for an hour, then sits the ride home, often has a low back that fades by the last quarter. The athlete who twisted, fell, or came down on one leg needs a different history. Book the person whose body you want examined. A shared story that jumps between the two of you wastes the part of the visit that should have been a test of motion.`,
          `A garage lift or a weekend project is the other Plymouth pattern, and it belongs with injury care when no car was involved. Tell us the weight, the twist, and whether you could walk to the house afterward. Trail miles around Plymouth Creek belong in the shoe conversation. Bring the pair that was fine at a desk and loud on the path. A custom orthotic is considered only after that look, and it does not replace a foot you cannot walk on.`,
          `Highway 55 is the local start from the Plymouth Creek area before you drop south. It is not a shortcut that erases the rest of the trip, and it is not the same road as 169. If you are comparing appointment times, a mid-morning slot usually beats the southbound rush. We would rather see you once, unrushed, than see a neck that is really just the freeway.`,
          `Weekday screen work is the other half of that neck. A laptop that sits off to one side, then a long southbound grind, shows up as a neck that will not check a blind spot. When no car hit you, that is a neck visit. Say how the screen is set and whether the pain reaches an arm. We will not invent a recovery date from a commute story.`,
          `If the only opening you can keep is next week, take it and use the days in between. Which morning was stiffer, which sideline you stood through, and whether the heel cared about the creek path are the notes that make the longer drive worth taking.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Is 20 minutes a fair estimate from Plymouth?",
        a: `Often, in light traffic, using Highway 169 south toward ${ADDR}. Rush hour on 169 can add a lot. Highway 55 is another start from the Plymouth Creek area. Call ${PHONE} if you want a time that is usually easier.`,
      },
      {
        q: "I stand on the sideline and my back hurts. Is that worth a visit?",
        a: "If it keeps limiting you, yes. We sort a local lumbar ache from sciatica and from a hip that is doing the work. The child’s injury, if that is the real question, needs its own history.",
      },
      {
        q: "My heel started hurting after the creek trails. Do you look at shoes?",
        a: "Yes. Bring them. A custom orthotic is used when the foot is loading the heel, knee, or back. It does not remove a bone spur, and it is not the first step for a foot you cannot walk on.",
      },
      {
        q: "Can you see me after a crash on 169?",
        a: "Yes. Book it as personal injury care and bring any emergency notes. We do not document a crash we have not examined.",
      },
      {
        q: "What if I can only come once this month?",
        a: "Tell us. The plan is written for that constraint. If one visit cannot safely answer the question, we will say what has to happen instead, including a physician visit.",
      },
      {
        q: "Is a referral required?",
        a: "No. You can call directly. Bring any activity limits a surgeon already set.",
      },
    ],
  },
  {
    slug: "golden-valley",
    h1: "Chiropractic care for Golden Valley",
    subtitle:
      "Theodore Wirth is the landmark people mention. The clinic is a short drive south to Excelsior Boulevard.",
    description:
      "Golden Valley patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Many drives are about 10 to 15 minutes. Call 952-920-7535.",
    servicesTitle: "What Golden Valley patients come in for",
    servicesIntro:
      "Back pain is the most common Golden Valley question. Crash visits and home exercise are scheduled as Saint Louis Park services.",
    services: [
      { href: citySvc("golden-valley", "back-pain-treatments"), label: "Back pain and sciatica", note: "Trail miles and commuting sits that settle into the low back or the leg." },
      { href: citySvc("golden-valley", "custom-foot-orthotics"), label: "Orthotics", note: "When Wirth miles are happening in shoes that were meant for a desk." },
      { href: citySvc("golden-valley", "adjustments-and-manipulation"), label: "Adjustments", note: "For a neck or back joint that will not move after the drive." },
      { href: citySvc("golden-valley", "common-chiropractic-conditions"), label: "Other conditions", note: "Headaches, joint pain, and nerve symptoms beyond the low back." },
      { href: citySvc("golden-valley", "cold-laser-therapy"), label: "Cold laser", note: "A non-heat option when a tendon or spinal area stays sore." },
      { href: citySvc("golden-valley", "cryotherapy"), label: "Targeted cold", note: "Ice for a new flare after a skate or a trail slip." },
      { href: citySvc("golden-valley", "ice-pack-cryotherapy"), label: "Ice pack", note: "How long, and what the skin should look like afterward." },
      { href: citySvc("golden-valley", "degenerative-disc-disease"), label: "Disc care", note: "A known disc problem that the commute keeps irritating." },
      { href: citySvc("golden-valley", "injuries"), label: "Falls and strains", note: "Winter slips and sports strains that were not a car crash." },
      { href: citySvc("golden-valley", "functional-medicine"), label: "Habits", note: "Sleep and workload when the ache outlasts the weekend." },
      { href: citySvc("golden-valley", "alternative-medicine"), label: "Non-surgical options", note: "Hands-on care as the first conversation." },
      { href: "/neck-pain", label: "Neck and shoulders", note: "The commute that leaves the shoulders up around the ears." },
      { href: "/personal-injury", label: "Auto accidents", note: "Book crash care directly and bring any ER notes." },
      { href: "/therapeutic-exercise", label: "Exercise", note: "A few moves you can do at home between visits." },
    ],
    faqTitle: "Questions from Golden Valley",
    ctaTitle: "Book from Golden Valley",
    ctaBody: "Wirth or the west side of the city changes the roads. Mention it when you call.",
    sections: [
      {
        eyebrow: "A shorter trip",
        title: "South toward Excelsior Boulevard",
        paragraphs: [
          `Golden Valley is close enough that people sometimes under-plan. From the Theodore Wirth side, Wirth Parkway south toward the lakes and then west on the Excelsior Boulevard corridor is one real way to ${ADDR}. From the center of Golden Valley, Winnetka Avenue or Douglas Drive south toward Highway 7 and Excelsior is the other pattern we hear. In light traffic many of those drives are about 10 to 15 minutes. They are still long enough to miss the start of an exam if you leave at the appointment time.`,
          `There is not a Golden Valley suite. Everyone is seen at Suite 201. Dr. Alan Levitt has practiced since 1987 and at this building since 1999. Parking is at the office, which is simpler than hunting for a ramp downtown. Call ${PHONE}.`,
        ],
      },
      {
        eyebrow: "Trails and the ride home",
        title: "Wirth miles, skating stiffness, and a commuter’s neck",
        paragraphs: [
          `Theodore Wirth is the landmark patients name: trail miles in shoes that were fine at a desk, and winter skating that leaves the low back and hips stiff the next day. That is a movement story, not a diagnosis. We still have to see whether a joint is stuck, whether a disc is irritating a nerve, or whether the feet are loading one side. {Back pain|/back-pain-treatments} is the lumbar and sciatica explanation. {Orthotics|/custom-foot-orthotics} is only if the shoes are part of it.`,
          `A lot of Golden Valley households work in Minneapolis and live a few minutes away. The neck complaint is shoulders parked up around the ears after the drive, sometimes with a headache at the base of the skull. That is {neck pain|/neck-pain} unless a crash started it. A crash is {personal injury|/personal-injury}. A slip on winter ice that left you unable to walk, or a head hit with vomiting, is emergency care before either of those.`,
          `We do not promise that trail soreness will be gone in a week. Some mechanical stiffness eases as motion returns. Some of it is a disc or a medical problem, and the exam is how we tell you which.`,
        ],
      },
      {
        eyebrow: "The appointment",
        title: "Use the short drive for a full history",
        paragraphs: [
          `Closeness is not a reason to skip the story. Tell us what the trail or the skate or the desk did, and what the car did afterward. Bring a photo ID and any films. The exam is hands-on. X-rays are selective. You leave with two or three things to do at home, not a program that assumes you live upstairs.`,
          `No prices are posted. Ask ${PHONE}. Payment is cash, check, or card. New patients can request a visit online. If you already come here, use the existing-patient form and say what changed.`,
        ],
      },
      {
        eyebrow: "The next trail day",
        title: "Skating and Wirth miles after the visit",
        paragraphs: [
          `A stiff back the morning after a skate often prefers gentle motion to a day on the couch. A back that will not let you stand, or a hip that collapses under you, is not that story. We will tell you which pause is actually required. Skipping the park until you feel perfect is rarely the advice, and doing the full loop the same night is rarely the advice either.`,
          `Commute shoulders respond to a smaller change than people expect: a moment where you drop the shoulders before you walk into work, and a neck that is allowed to turn instead of being held still out of fear. If turning produces arm numbness, stop and call. New numbness is information, not a cue to stretch harder.`,
          `Because the drive is short, it is tempting to book extra visits just to stay loose. Extra visits are for findings that are changing. If the exam is the same three times, we should be talking about the trail volume, the chair, or a different clinician, not about another Tuesday.`,
        ],
      },
      {
        eyebrow: "Which road south",
        title: "Wirth Parkway, Winnetka, and Douglas are not interchangeable",
        paragraphs: [
          `From the Theodore Wirth side, Wirth Parkway south toward the lakes, then west on the Excelsior Boulevard corridor, is one real way into Suite 201. From the middle of Golden Valley, Winnetka Avenue south toward Highway 7 is another. Douglas Drive south is the third pattern people actually use. Pick the one that starts nearest your door. Switching roads mid-trip to chase a green light is how a 12-minute drive becomes a late arrival.`,
          `Winter skating and a long trail walk leave different stiffness the next morning. Skating tends to show up in the hips and the low back after you sit. A trail mile in desk shoes tends to show up in one heel or one knee, and then the back joins in. Name which one you did. {Ice after a new flare|/areas-we-serve/golden-valley/cryotherapy} is for the hot, recent strain. It is not the plan for a dull ache that has been there since November.`,
          `A fall on winter ice that leaves you unable to bear weight, or a hit to the head with vomiting or confusion, is an emergency visit before any of those roads matter. If that has already been cleared, bring the note. We will look at the joint that is still guarded. We will not talk you out of a restriction another clinician already set.`,
          `Headaches that start at the base of the skull after the commute are worth describing in one sentence: where they start, when they build, and whether an arm goes with them. That pattern is part of {other conditions|/areas-we-serve/golden-valley/common-chiropractic-conditions} when it is not only a low-back story. A headache that is sudden and the worst of your life does not belong in that conversation. Use emergency care.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How far is it from Theodore Wirth?",
        a: `Often about 10 to 15 minutes, south toward the lakes and then west on the Excelsior Boulevard corridor to ${ADDR}. From central Golden Valley, Winnetka or Douglas south toward Highway 7 is another common way. Call ${PHONE}.`,
      },
      {
        q: "My shoulders live up by my ears after the commute. Is that a neck visit?",
        a: "Usually, yes, if there was no crash. We check rotation, headache location, and whether an arm is involved. A crash, even a low-speed one, should be booked as personal injury care so the history is complete.",
      },
      {
        q: "I skate or walk Wirth and the low back is stiff the next day. What do you need to know?",
        a: "How long you were out, what shoes or skates you used, and whether the pain stays in the back or runs down a leg. Weakness, groin numbness, or bladder changes are reasons to use emergency care instead.",
      },
      {
        q: "What hours work if I am coming from a Minneapolis workday?",
        a: "Monday and Thursday include an afternoon block, 2:30 to 5:30. Tuesday and Friday are mornings, 8:30 to 11:30. Wednesday is 10:00 to noon. Saturday is by appointment. Sunday is closed. Call and match a day to the commute instead of guessing.",
      },
      {
        q: "Is a referral required?",
        a: "No. Book directly. Bring restrictions from another clinician if you have them.",
      },
      {
        q: "Where is Suite 201?",
        a: `The building is ${ADDR}. Allow a few extra minutes the first time so you are not still in the stairwell when the exam should start.`,
      },
    ],
  },
  {
    slug: "richfield",
    h1: "Chiropractic care for Richfield",
    subtitle:
      "Penn or Xerxes north to Excelsior Boulevard is the simple version. Highway 62 is the freeway version.",
    description:
      "Richfield patients are seen at 6200 Excelsior Blvd, Suite 201, Saint Louis Park. Penn or Xerxes north is a common drive. Call 952-920-7535.",
    servicesTitle: "Richfield visits, by what hurts",
    servicesIntro:
      "Back pain is by far the Richfield topic people ask about. Disc care is explained with the Saint Louis Park disc service rather than a Richfield link.",
    services: [
      { href: citySvc("richfield", "back-pain-treatments"), label: "Back pain and sciatica", note: "The Richfield problem we hear about most, including pain on the drive." },
      { href: citySvc("richfield", "therapeutic-exercise"), label: "Exercise", note: "A short list for between visits, including after a long retail shift." },
      { href: citySvc("richfield", "cold-laser-therapy"), label: "Cold laser", note: "For a tendon or spinal area that stays sore after the exam." },
      { href: citySvc("richfield", "custom-foot-orthotics"), label: "Orthotics", note: "Wood Lake loops in the same shoes you wear to work." },
      { href: citySvc("richfield", "adjustments-and-manipulation"), label: "Adjustments", note: "When the joint, not only the tired muscle, needs a contact." },
      { href: citySvc("richfield", "personal-injury"), label: "Crash care", note: "Whiplash and other auto injuries, with any urgent-care notes." },
      { href: citySvc("richfield", "functional-medicine"), label: "Sleep and food", note: "When stretching helped for two days and the week undoes it." },
      { href: citySvc("richfield", "injuries"), label: "Strains and falls", note: "Work lifts and slips that were not a car crash." },
      { href: citySvc("richfield", "cryotherapy"), label: "Targeted cold", note: "A hot flare. Not a spa chamber." },
      { href: citySvc("richfield", "ice-pack-cryotherapy"), label: "Ice pack", note: "Time, a cloth barrier, and when to stop." },
      { href: citySvc("richfield", "common-chiropractic-conditions"), label: "Other conditions", note: "Headaches and nerve symptoms that are not only the low back." },
      { href: citySvc("richfield", "alternative-medicine"), label: "A non-drug start", note: "Hands-on care when you would rather not lead with medication." },
      { href: "/neck-pain", label: "Neck pain", note: "Highway 62 sitting that shows up in the neck." },
      { href: "/degenerative-disc-disease", label: "Disc problems", note: "Herniated and worn discs are evaluated at the Saint Louis Park office." },
    ],
    faqTitle: "Questions from Richfield",
    ctaTitle: "Book from Richfield",
    ctaBody: "Say whether you will use Penn, Xerxes, or Highway 62 so the time of day makes sense.",
    sections: [
      {
        eyebrow: "North to the office",
        title: "Penn, Xerxes, or the Crosstown",
        paragraphs: [
          `From much of Richfield the direct drive is north on Penn Avenue or Xerxes Avenue until you can go west on Excelsior Boulevard to ${ADDR}. When the lights cooperate, that is often about 12 to 18 minutes. Highway 62 west, then north to Excelsior, is the freeway version, and it depends entirely on the Crosstown. Wood Lake and the Hub are south of that drive. They are not on the way into the suite. Do not turn the visit into a loop of errands unless you still have time to be early.`,
          `There is one clinic. It has been at Suite 201 since 1999. Dr. Alan Levitt has practiced since 1987. Call ${PHONE}. Richfield sits between the airport and south Minneapolis, and the drive is short only when the roads are moving.`,
        ],
      },
      {
        eyebrow: "Backs, floors, and the lake loop",
        title: "Why back pain dominates the Richfield story",
        paragraphs: [
          `Back pain is the complaint Richfield patients bring more than any other: a lumbar ache after standing near the Hub, hip tightness after walking Wood Lake in work shoes, or sciatica that shows up once you are in the car. Stretching at home that helps for two days and then fades is a familiar sequence. Stretching did not fail because you lacked discipline. It faded because the joint, the disc, or the daily load was still there. {Back pain|/back-pain-treatments} is where that gets sorted.`,
          `Highway 62 is a neck story as often as a back story. Shoulders up, hard to check a lane, sometimes a headache from the skull base. That is {neck pain|/neck-pain} if no one hit your car. If someone did, book {personal injury|/personal-injury} and bring the urgent-care notes. Orthotics are for the Wood Lake loops only when the shoes are part of the hip or heel pain. A disc that already has a name on a report is evaluated with {disc care|/degenerative-disc-disease}.`,
          `Two days of relief from a home stretch is not a result we will try to beat with a promise. Some backs calm as motion and the shoes change. Some need a different clinician. You will hear which one the exam supports.`,
        ],
      },
      {
        eyebrow: "Arriving",
        title: "A short drive still deserves a real exam",
        paragraphs: [
          `Bring the shoes you wore around Wood Lake if that is the pain, a photo ID, and any imaging. The visit is a history and a hands-on exam. X-rays only when they would change the plan. You should leave with a next step you can do in Richfield, not a schedule that assumes you can return every other day.`,
          `Prices are not listed. Ask when you call ${PHONE}. Payment is cash, check, or card. Health coverage and auto coverage are separate questions we will not guess. New patients use the request form. Existing patients use the other one and tell us what changed since last time.`,
        ],
      },
      {
        eyebrow: "The next two days",
        title: "When a home stretch fades",
        paragraphs: [
          `If a stretch helps and the ache is back after the next shift, the shift is part of the finding. Note whether you were standing, lifting, or sitting. That detail changes the plan more than the name of the stretch. We are not collecting a wellness diary. We are trying to see the load that undoes the relief.`,
          `A Wood Lake walk can stay in the week if the hip tolerates it. Shorten the loop before you abandon the walk, and change the shoes before you buy a brace. If hip pain starts to make walking unsafe, stop and call. A walk that was easy on Saturday should not become a limp by Monday without someone looking.`,
          `Highway 62 will still be there after the visit. We cannot remove the freeway. We can tell you whether the neck pain is a joint that is not rotating, a headache pattern from the skull base, or a sign that belongs in urgent care. That distinction matters more than another day of hoping the crosstown is empty.`,
        ],
      },
      {
        eyebrow: "Penn, Xerxes, or 62",
        title: "Choose the road before you choose the clock",
        paragraphs: [
          `Penn Avenue north is the direct surface street for a lot of Richfield. Xerxes Avenue north is the parallel choice when Penn is choked, and it still lets you turn west onto Excelsior Boulevard. Highway 62 is faster only when the Crosstown is actually moving. If you book a time that assumes 62 and then sit on it, the exam starts with a neck that the freeway just built. Leave the margin on the day you already know is ugly.`,
          `Standing near the Hub and walking Wood Lake in the same shoes is a hip story we can test. The loop can stay in the week if the hip tolerates a shorter version. Change the shoes before you buy a brace on the way home. A custom orthotic is considered when the foot is clearly loading the hip or the heel, and only after those shoes have been seen. A foot you cannot stand on is a physician visit, not a loop-length decision.`,
          `A crash on 62 or on a Richfield street should be booked as crash care, with any urgent-care notes in hand. Neck stiffness from the sitting, with no collision, is a different history. Say which one it was when you call. We will not write an injury note for a drive we have not examined, and we will not treat a collision as ordinary desk tightness.`,
          `Exercise between visits is a short list you can do after a retail shift, not a second workout. {That home list|/areas-we-serve/richfield/therapeutic-exercise} is there for the weeks the Crosstown makes a return trip unrealistic. If two movements are all that fit before you sleep, that is the dose. Adding more because the drive felt long does not make the tissue change faster.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Which street do people take north from Richfield?",
        a: `Penn Avenue or Xerxes Avenue north, then west on Excelsior Boulevard to ${ADDR}, is the common surface route. Highway 62 is the freeway option and varies more. In light traffic the surface route is often about 12 to 18 minutes. Call ${PHONE}.`,
      },
      {
        q: "I walk Wood Lake and my hip hurts in my work shoes. Is that an orthotics question?",
        a: "It might be. Bring the shoes. We look at whether the feet are loading the hip or the back. A custom pair is not automatic, and it will not fix a joint that needs a physician because it is hot, red, or impossible to stand on.",
      },
      {
        q: "Stretching helps for two days and then the back pain returns. Is that worth an exam?",
        a: "Yes. Short relief usually means the daily load or a joint is still driving it. We check for sciatica and for findings that should not be adjusted. Back pain is the problem Richfield patients ask about most.",
      },
      {
        q: "My neck hurts after Highway 62. Where does that belong?",
        a: "With neck care if it is the sitting and the shoulders. With personal injury care if a collision started it. A sudden severe headache or weakness in an arm should not wait for either appointment.",
      },
      {
        q: "Do you require a referral?",
        a: "No. You can book directly. Bring notes if another clinician already limited your activity.",
      },
      {
        q: "Can I come on a lunch break from a Richfield shift?",
        a: "Sometimes, if the drive and the exam both fit. Say how long you actually have. We will not pretend a full history fits into a ten-minute gap.",
      },
    ],
  },
];

export function getPriorityHub(slug: string): PriorityHub | undefined {
  return hubs.find((hub) => hub.slug === slug);
}

export function priorityHubSlugs(): string[] {
  return hubs.map((hub) => hub.slug);
}
