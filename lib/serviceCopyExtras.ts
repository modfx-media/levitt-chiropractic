import type { PseoService } from "./pseoServices";

export type ServiceCopyExtra = {
  whoItsFor: string;
  visitFlow: string;
  notFor: string;
};

const EXTRAS: Record<string, ServiceCopyExtra> = {
  "adjustments-and-manipulation": {
    whoItsFor:
      "People who feel “locked” in the neck or low back, lose rotation looking over a shoulder in traffic, or keep stretching with only a day or two of relief. Also a fit when headaches start at the base of the skull after a desk week.",
    visitFlow:
      "History and a hands-on exam come first. Dr. Levitt chooses among Diversified, Zone Therapy, and Torque Release — not a one-move routine. You should know what was found and what the next visit is for before you leave.",
    notFor:
      "A high-velocity adjustment is not the opening move after unexplained weight loss, night pain, bowel or bladder changes, or recent major trauma. Those are medical red flags. We screen first and refer out when the story is not a mechanical spine problem.",
  },
  injuries: {
    whoItsFor:
      "Sprains, strains, and “I thought it would be gone in a week” injuries from work, sport, or a fall. Early care matters more than waiting until the pattern is six months old.",
    visitFlow:
      "We map what was hurt, what still moves, and what imaging would actually change. Treatment is usually a mix of adjustments, ice or laser, and a few exercises you can do at home — not a gadget tour.",
    notFor:
      "Open wounds, suspected fracture, or a patient who needs the ER. If Methodist or another hospital already cleared the acute danger, we pick up the soft-tissue and joint piece.",
  },
  "personal-injury": {
    whoItsFor:
      "Minnesota crash, slip, bike, or workplace cases where you need both care and a chart that makes sense later. Minnesota no-fault (PIP) can cover chiropractic medical expense after an auto crash; we still examine you as a patient, not as a claim.",
    visitFlow:
      "Bring ER or urgent-care notes if you have them, plus a plain-language timeline of the incident. We document findings, treat what is mechanical, and provide records when an attorney asks — without turning the visit into a legal seminar.",
    notFor:
      "We do not fabricate injury, “guarantee” a settlement, or treat someone who has not been medically screened after high-energy trauma. If you only need a letter and no exam, that is not this office.",
  },
  cryotherapy: {
    whoItsFor:
      "Hot, swollen, or angry tissue in the first days after a strain — or a flare on top of a longer back problem. Targeted ice-pack work, not a social-media freeze chamber.",
    visitFlow:
      "We use cold on the region that actually needs it, usually 15–20 minutes, often on the same visit as an adjustment or laser. You leave with a home-ice protocol that will not wreck your skin.",
    notFor:
      "Cold is a poor fit over poor circulation, certain neuropathies, or if you cannot feel the skin you are icing. We will say so.",
  },
  "ice-pack-cryotherapy": {
    whoItsFor:
      "The practical version of cold care: a sprained joint, a post-visit flare, or the first 48–72 hours after you overdid a weekend.",
    visitFlow:
      "Placement, time, and what to do when you get home. Heat vs ice is not a slogan here — it depends on whether the tissue is still irritable.",
    notFor:
      "Do not ice numb skin, open skin, or a joint we have not looked at if you also have fever or redness that looks infectious.",
  },
  "cold-laser-therapy": {
    whoItsFor:
      "Stubborn tendon, joint, or spinal irritation where we want a non-drug, non-heat stimulus. Many patients feel nothing during the session and notice less guarding afterward.",
    visitFlow:
      "Laser is a tool inside a plan, not a standalone miracle. Acute problems often get a short cluster of visits; chronic ones take longer. We stop if it is not changing the exam.",
    notFor:
      "Not for use over the eyes, over known cancer in the field, or as a substitute for imaging when red flags are present.",
  },
  "custom-foot-orthotics": {
    whoItsFor:
      "Heel pain, plantar fascia irritation, knee tracking that started in the feet, or low-back pain that keeps returning in the same gait pattern. Also the “can a chiropractor help heel spurs?” question — we can often calm the tissue and the mechanics; we cannot sand a spur off with a laser.",
    visitFlow:
      "We look at stance, shoes, and how the spine is compensating. If a custom device is the right lever, it is prescribed to your foot, not pulled from a wall rack. OTC inserts are cheaper and often the wrong shape.",
    notFor:
      "A fracture, an active infection, or a foot that needs a surgeon first. Orthotics also will not fix a hip problem that is not coming from the ground up.",
  },
  "common-chiropractic-conditions": {
    whoItsFor:
      "Headaches, sciatica, joint “catching,” and the grab-bag of mechanical problems that are not a single named syndrome. Wrist pain belongs here too when it is joint or repetitive strain — not when it is a fracture.",
    visitFlow:
      "We name what we think it is, what would change our mind, and which tools (adjustment, laser, exercise, orthotic) are actually on the table.",
    notFor:
      "Chest pain, sudden neuro change, or a story that sounds like infection or cancer. Those leave the chiropractic column until a physician clears the danger.",
  },
  "back-pain-treatments": {
    whoItsFor:
      "The desk-plus-commute lumbar pattern we see from Highway 100, 394, and 35W, plus the weekend-warrior disc that “went” lifting a cooler or a kid. Acute or chronic — the exam decides the mix.",
    visitFlow:
      "Find the driver (joint, disc, hip, or deconditioning), treat what is safe to treat, and give you two or three things to do between visits. Imaging only when it would change the plan.",
    notFor:
      "Progressive weakness, saddle anesthesia, or bowel/bladder change is an emergency, not an adjustment. Fever plus back pain is not “just a strain.”",
  },
  "degenerative-disc-disease": {
    whoItsFor:
      "People who already have imaging that says degeneration, herniation, or stenosis and still want a conservative plan. Age on an MRI is not a life sentence; symptoms and the exam are.",
    visitFlow:
      "We read the film in light of what you can actually do, then choose gentler mobilization, laser, and exercise rather than a one-size crack. Your other doctors stay in the loop when that helps.",
    notFor:
      "Cauda equina signs, rapidly worsening neurology, or a surgeon who has already scheduled you for a reason we are not going to argue with in a blog paragraph.",
  },
  "therapeutic-exercise": {
    whoItsFor:
      "Anyone whose pain eases after an adjustment and then returns because the supporting muscles were never asked to work. Also post-injury rehab that should happen at home, not only on our table.",
    visitFlow:
      "A few movements done well beat a 12-page packet. We match endurance, resistance, and mobility to your actual week — including the weeks you do not come in.",
    notFor:
      "Exercise is paused when pain is truly inflammatory-unstable, after certain surgeries until cleared, or if you are dizzy and unsafe to load.",
  },
  "functional-medicine": {
    whoItsFor:
      "The person whose musculoskeletal pain sits on top of sleep, gut, or energy problems and who wants those named, not ignored. Complementary to — not a replacement for — your primary doctor.",
    visitFlow:
      "Structural care still happens. Lifestyle and nutritional questions are added when the history says they matter. No protocol-in-a-box.",
    notFor:
      "We do not take you off prescribed medication or treat a medical diagnosis that belongs in a specialist’s office.",
  },
  "alternative-medicine": {
    whoItsFor:
      "Patients who want drug-free, hands-on care first and are willing to do the unglamorous parts (sleep, walking, the home exercises). “Alternative” here means non-surgical and non-opioid, not anti-medicine.",
    visitFlow:
      "Same clinical standards as the rest of the practice: exam, plan, and a willingness to refer when the body is telling a medical story.",
    notFor:
      "Not a substitute for emergency care, cancer treatment, or psychiatric crisis. We collaborate; we do not compete with your internist.",
  },
};

export function serviceExtra(service: Pick<PseoService, "slug">): ServiceCopyExtra {
  return (
    EXTRAS[service.slug] ?? {
      whoItsFor: "Patients whose exam points to a mechanical problem we can actually treat.",
      visitFlow: "History, exam, then the smallest set of tools that matches the findings.",
      notFor: "Red-flag medical problems that need a physician or the ER first.",
    }
  );
}
