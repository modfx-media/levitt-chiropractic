export const servicesDefaults = {
  hero: {
    title: "Our Services",
    subtitle: "Comprehensive chiropractic and integrative care from routine adjustments to whole-body wellness.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Services" },
    ],
  },
  intro: {
    eyebrow: "Personalized Chiropractic Care",
    title: "One office, every step of your recovery",
    beforeAddress:
      "These are the kinds of care we provide, not a second explanation of each one. Dr. Alan G. Levitt, DC, has been in practice since 1987 and at",
    afterAddress: " since 1999. The phone is",
    afterPhone: ". There is one office. The cards below are problems and tools, not extra locations.",
    bodyPart:
      "Start with the body part if you know it. Neck stiffness, arm symptoms, and headaches that begin at the skull base go to neck pain. Low-back pain and leg pain go to back pain. A scan that says herniated disc belongs with disc care.",
    conditions: { href: "/common-chiropractic-conditions", label: "Common conditions" },
    afterConditions: "help if two of those might be true.",
    tools:
      "Start with the tool only if you already know you are asking about that tool. An adjustment is a joint contact, chosen from Diversified, Zone Therapy, or Torque Release after an exam. Cold laser therapy is a handheld light, not heat. Cryotherapy here is targeted cold, not a walk-in chamber, and the pack instructions are part of ice pack care. Exercise is a short home list. Orthotics are prescription devices when the feet are part of the load. Functional medicine adds sleep and food questions. Alternative medicine is the non-operative stance, not a different clinic.",
    flags:
      "You do not have to choose correctly before you call. The first visit is a history and an exam. X-rays are taken when they would change the plan. The service is what the exam supports, and it is withheld when the story is a red flag: progressive weakness, groin numbness, bowel or bladder change, fever with spinal pain, or a hard fall or impact that has not been medically screened. Those go to emergency care.",
    stats: [
      { value: "1987", label: "Practice began" },
      { value: "1999", label: "This office" },
      { value: "One", label: "Saint Louis Park location" },
    ],
  },
  catalog: {
    eyebrow: "Browse by Category",
    title: "What we offer",
    learnMore: "Learn More",
    groups: ["Spinal Care", "Conditions", "Therapies", "Whole-Body Wellness"],
    services: [
      {
        title: "Adjustments & Manipulation",
        description: "Gentle, precise spinal adjustments to restore alignment, relieve nerve pressure, and let your body heal itself.",
        href: "/adjustments-and-manipulation",
        group: "Spinal Care",
      },
      {
        title: "Common Chiropractic Conditions",
        description: "Sciatica, headaches, vertebral subluxation, and more explained simply with practical care options.",
        href: "/common-chiropractic-conditions",
        group: "Conditions",
      },
      {
        title: "Back Pain Treatments",
        description: "Drug-free, personalized back pain relief through spinal care, soft-tissue therapy, and therapeutic exercise.",
        href: "/back-pain-treatments",
        group: "Conditions",
      },
      {
        title: "Degenerative Disc Disease",
        description: "Chiropractic evaluation and care for spinal disc changes that come with age, strain, or wear.",
        href: "/degenerative-disc-disease",
        group: "Conditions",
      },
      {
        title: "Cold Laser Therapy",
        description: "Low-level laser stimulates cellular healing for arthritis, tendonitis, fibromyalgia, carpal tunnel, and more.",
        href: "/cold-laser-therapy",
        group: "Therapies",
      },
      {
        title: "Cryotherapy",
        description: "Targeted cold therapy reduces inflammation and accelerates recovery for acute and chronic conditions.",
        href: "/cryotherapy",
        group: "Therapies",
      },
      {
        title: "Therapeutic Exercise",
        description: "Custom exercise programs that restore mobility, flexibility, and strength right in your own home.",
        href: "/therapeutic-exercise",
        group: "Therapies",
      },
      {
        title: "Custom Foot Orthotics",
        description: "Doctor-designed orthotics that align your stance from the ground up and ease pressure on your spine.",
        href: "/custom-foot-orthotics",
        group: "Whole-Body Wellness",
      },
      {
        title: "Functional Medicine",
        description: "A whole-person approach that addresses the root cause of chronic pain and chronic illness not just symptoms.",
        href: "/functional-medicine",
        group: "Whole-Body Wellness",
      },
      {
        title: "Neck Pain",
        description: "Stiffness, arm symptoms, and headaches that start in the neck.",
        href: "/neck-pain",
        group: "Conditions",
      },
      {
        title: "Alternative Medicine",
        description: "A non-surgical, non-opioid start when the exam says that is safe. Not a rejection of your physician.",
        href: "/alternative-medicine",
        group: "Whole-Body Wellness",
      },
    ],
  },
  plan: {
    eyebrow: "How a plan is chosen",
    title: "The cards are not a menu you order from",
    boxes: "A new patient does not check twelve boxes. Dr. Levitt asks where it hurts, what changes it, and what has already been tried, then tests motion and, when a limb is involved, strength and sensation. The plan might be one adjustment. It might be ice today and exercise for the week. It might be “see a physician before anyone adjusts you.” Leaving with that last answer is a finished visit.",
    bundle: "Several tools can share a visit without becoming a bundle. Laser does not replace an adjustment. Ice does not move a joint. Orthotics do not fix a disc that has nothing to do with the feet. Functional questions do not cancel a structural finding. If someone offers you a package that uses every card in one visit, that offer did not come from this office.",
    payment: "What this office does not provide: surgery, injections, and prescription medication. It also does not publish prices here. Payment at the desk is cash, check, or major credit card, and a payment plan can be discussed.",
    beforeExpect: "First-visit logistics match the",
    expect: { href: "/new-patient-center/what-to-expect", label: "what to expect" },
    beforeForm: ": a photo ID, 10 to 15 minutes for paperwork, clothes you can move in. New patients use",
    form: { href: "/contact/new-patient-appointment", label: "this form" },
    afterForm: ". People who already have a chart use the existing-patient form. Cancel with at least 24 hours’ notice. A fee may be charged for a no-show or a late cancellation. That policy is described under about the practice. It is not a treatment.",
    recovery: "Recovery is described the same way for every service. Some mechanical problems become more comfortable as motion returns and the daily load changes. Some do not. There is no visit count and no date promised in advance. If the same tests are not changing, the plan changes or you are referred. Feeling better is the hope. It is not a guarantee, and “drug-free” describes the tools, not a rule that medicine is never appropriate.",
    beforeDoctor: "Dr. Levitt’s training and the chemical, nutritional, and structural frame are on",
    doctor: { href: "/meet-the-doctor", label: "meet the doctor" },
    afterDoctor: "Read that if you want the biography. Stay here if you want to know which kind of care matches the problem you have today.",
  },
  reading: {
    title: "Reading the cards without booking all of them",
    paragraphs: [
      "If your sentence is about a body part, ignore the therapy cards until the condition itself shows a tool is relevant. Neck pain does not require you to understand laser. Back pain does not require orthotics. Trying to combine every option yourself is unnecessary. The exam combines what belongs together, or it says a combination does not.",
      "If you are asking about a device you saw online, learn its limit before you request it by name. Cold laser therapy has a limit. Targeted cold has a limit. Orthotics have a limit. Asking for the device and skipping the limit is how visits start in the wrong room. Ask for the exam and name the device. That is the useful request.",
      "Hours are listed at the bottom of each service, and they are the real hours: mornings most weekdays, longer days Monday and Thursday, Wednesday late morning, Saturday by appointment, Sunday closed. Do not invent a walk-in window. If the online form is the wrong door because you are already a patient, use the existing-patient form. New problems in an existing patient are still an exam, not a request to repeat last year’s plan.",
      "The Saint Louis Park address does not change by service. You are not traveling to a laser clinic and then an orthotics clinic. Suite 201 is the same door. You should not feel as if laser and orthotics are different businesses. They are not. Tell us if a description made them sound that way.",
    ],
  },
  faqs: {
    eyebrow: "Questions",
    title: "Questions about choosing a service",
    intro: "The cards help you describe the problem. The exam decides the care.",
    items: [
      {
        q: "Where should I start?",
        a: "Match the body part. Neck pain, back pain, and disc problems are each explained with that kind of care. If you only know the tool you heard about, cold laser, ice, adjustments, exercise, and orthotics are listed below. If you are unsure, book the exam and describe the symptom.",
      },
      {
        q: "Do I need to pick a service before I call?",
        a: "No. New patients start with a history and an exam. The service is chosen after that. Calling 952-920-7535 or using the new-patient form is enough. Existing patients use the other appointment form.",
      },
      {
        q: "Do you list prices?",
        a: "No. The office does not publish a fee schedule here. Payment accepted at the visit is cash, check, or major credit card, and a payment plan can be discussed.",
      },
      {
        q: "Is every card a different clinic?",
        a: "No. One chiropractor, Dr. Alan Levitt, at 6200 Excelsior Blvd, Suite 201, Saint Louis Park, MN 55416. The cards are different problems and tools, not different offices.",
      },
      {
        q: "What will you not do from this list?",
        a: "Surgery, injections, and prescription medication. We also do not promise a recovery date. Red-flag symptoms belong in emergency care before any of these services.",
      },
    ],
  },
  closing: {
    eyebrow: "Not Sure Where to Start?",
    title: "Let’s find the right care for you",
    beforePhone: "Every body is different. Call",
    beforeVisit: "or",
    visit: { href: "/contact/new-patient-appointment", label: "request a visit" },
    afterVisit: "we’ll match you with the services that fit your goals and your life.",
  },
  cta: {
    eyebrow: "Take the Next Step",
    title: "Book a consultation",
    body: "Talk with Dr. Levitt about a plan that fits you.",
  },
};
