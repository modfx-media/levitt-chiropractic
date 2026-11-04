/** 11 services that power the per-city programmatic pages.
 *  Each entry is consumed by app/areas-we-serve/[city]/[service]/page.tsx
 *  to produce a unique, content-rich landing page when paired with a city.
 */

export type PseoService = {
  slug: string;
  name: string;
  /** Short noun phrase used inline (e.g. "spinal adjustments and manipulation"). */
  inlineNoun: string;
  /** Quick visitor-facing tagline for hero subtitle. */
  tagline: string;
  /** 4-6 evidence-based bullet points specific to this service. */
  benefits: string[];
  /** 2-3 condition / use-case examples. */
  conditions: string[];
  /** Frequent-questions block tailored per service. */
  faqs: { q: string; a: string }[];
  /** Schema.org service type override (optional). */
  serviceType?: string;
};

export const pseoServices: PseoService[] = [
  {
    slug: "adjustments-and-manipulation",
    name: "Chiropractic Adjustments & Manipulation",
    inlineNoun: "spinal adjustments and manipulation",
    tagline:
      "Hands-on chiropractic care that restores alignment, mobility and pain-free movement.",
    benefits: [
      "Restores spinal alignment and joint motion",
      "Reduces nerve compression and referred pain",
      "Diversified, Zone Therapy and Torque Release techniques",
      "Gentle, evidence-informed and tailored to each patient",
      "Drug-free, non-surgical pain relief",
    ],
    conditions: ["chronic back and neck pain", "tension headaches", "limited range of motion"],
    faqs: [
      { q: "Are chiropractic adjustments safe?", a: "When performed by a licensed Doctor of Chiropractic, adjustments are very safe. Dr. Levitt evaluates each patient before any technique is used and selects the gentlest approach that will restore motion." },
      { q: "How many adjustments will I need?", a: "It depends on the issue. Acute pain often resolves in a handful of visits; long-standing problems may need a structured plan over several weeks. We always discuss this up front." },
    ],
  },
  {
    slug: "cryotherapy",
    name: "Cryotherapy",
    inlineNoun: "cryotherapy",
    tagline:
      "Targeted cold therapy that reduces pain, swelling and inflammation safely and naturally.",
    benefits: [
      "Reduces acute inflammation and swelling",
      "Numbs nerve endings to ease pain",
      "Supports faster recovery between sessions",
      "Drug-free pain management",
    ],
    conditions: ["acute back and neck pain", "post-injury swelling", "joint inflammation"],
    faqs: [
      { q: "How long is a cryotherapy session?", a: "Targeted ice-pack cryotherapy sessions typically run 15-20 minutes per region treated." },
      { q: "Is cryotherapy uncomfortable?", a: "There is a brief cold sensation, then numbness. Most patients describe it as relieving rather than uncomfortable." },
    ],
  },
  {
    slug: "ice-pack-cryotherapy",
    name: "Ice Pack Cryotherapy",
    inlineNoun: "ice pack cryotherapy",
    tagline:
      "Localized ice therapy used in chiropractic rehab to reduce pain and inflammation.",
    benefits: [
      "Reduces pain, swelling and bruising",
      "Slows nerve impulses to interrupt pain signals",
      "Easy to combine with adjustments and soft-tissue work",
      "Used widely in rehabilitation and recovery",
    ],
    conditions: ["acute injury swelling", "joint sprains", "post-treatment soreness"],
    faqs: [
      { q: "How often can I use ice pack cryotherapy?", a: "Typically 15-20 minutes at a time, several times a day during the acute phase. Dr. Levitt will give you a personalized protocol." },
      { q: "Should I use heat or ice?", a: "Ice is generally best in the first 48-72 hours after an injury. After that, the right choice depends on the condition we'll guide you." },
    ],
  },
  {
    slug: "cold-laser-therapy",
    name: "Cold Laser Therapy",
    inlineNoun: "cold laser therapy",
    tagline:
      "Low-level laser therapy that stimulates cellular healing drug-free, painless, and fast.",
    benefits: [
      "Stimulates cellular ATP production for faster healing",
      "Reduces inflammation and pain",
      "Painless and non-invasive",
      "Effective for back pain, arthritis, tendonitis, fibromyalgia and more",
    ],
    conditions: ["chronic back and neck pain", "tendonitis and bursitis", "carpal tunnel syndrome"],
    faqs: [
      { q: "Is cold laser therapy painful?", a: "No. There is no heat, no needles and no medication. Most patients feel nothing during treatment." },
      { q: "How many sessions will I need?", a: "It varies by condition. Acute issues often respond in 4-6 sessions; chronic conditions may need more." },
    ],
  },
  {
    slug: "custom-foot-orthotics",
    name: "Custom Foot Orthotics",
    inlineNoun: "custom foot orthotics",
    tagline:
      "Prescription orthotics fit precisely to your foot supporting knees, hips and the spine itself.",
    benefits: [
      "Precision-fit, prescription-grade",
      "Lasts 1+ year (far longer than over-the-counter inserts)",
      "Reduces knee, foot, hip and back pain",
      "Improves posture from the ground up",
    ],
    conditions: ["plantar fasciitis", "knee tracking pain", "low-back pain linked to gait"],
    faqs: [
      { q: "Are custom orthotics worth it?", a: "Yes for many patients with foot, knee, hip or back pain, the difference vs. OTC inserts is dramatic and measurable." },
      { q: "Do orthotics work with all shoes?", a: "Most everyday and athletic shoes accept them. We discuss footwear during fitting." },
    ],
  },
  {
    slug: "common-chiropractic-conditions",
    name: "Treatment for Common Chiropractic Conditions",
    inlineNoun: "chiropractic care",
    tagline:
      "Headaches, sciatica, fibromyalgia, joint dysfunction and more treated with a whole-person approach.",
    benefits: [
      "Treats a wide range of musculoskeletal and neurological conditions",
      "Combines adjustments, soft-tissue work, exercise and modalities",
      "Drug-free and non-surgical",
      "Personalized to each patient's history and goals",
    ],
    conditions: ["headaches and migraines", "sciatica", "fibromyalgia", "carpal tunnel syndrome"],
    faqs: [
      { q: "Can chiropractic care help conditions other than back pain?", a: "Yes. Many headache, sciatica, joint and even allergy-related symptoms respond well to spinal and structural care." },
      { q: "How quickly will I notice results?", a: "It varies by condition. Many patients feel relief within the first few visits, while chronic patterns often take a structured plan over several weeks." },
    ],
  },
  {
    slug: "back-pain-treatments",
    name: "Back Pain Treatment",
    inlineNoun: "back pain treatment",
    tagline:
      "Drug-free, personalized care for acute and chronic back pain adjustments, laser, exercise and more.",
    benefits: [
      "Identifies the underlying cause, not just the symptom",
      "Combines adjustments, cold laser, soft-tissue work and exercise",
      "Drug-free and non-invasive",
      "Long-term relief, not short-term masking",
    ],
    conditions: ["lumbar strain and sprain", "disc-related back pain", "posture-driven back pain"],
    faqs: [
      { q: "How long until back pain improves?", a: "Many acute episodes settle in 2-3 weeks of structured care. Chronic patterns take longer but typically respond well to a multi-modal plan." },
      { q: "Will I need imaging?", a: "Sometimes. Dr. Levitt will recommend imaging only when it would change your treatment plan." },
    ],
  },
  {
    slug: "degenerative-disc-disease",
    name: "Degenerative Disc Disease Care",
    inlineNoun: "degenerative disc disease care",
    tagline:
      "Conservative care for disc degeneration, herniation and spinal stenosis built around your imaging and symptoms.",
    benefits: [
      "Detailed evaluation of disc and nerve symptoms",
      "Conservative, non-surgical treatment plans",
      "Adjustments, decompression-style mobilization and laser",
      "Coordinated with your other providers",
    ],
    conditions: ["herniated and bulging discs", "spinal stenosis", "chronic radiating leg pain"],
    faqs: [
      { q: "Can chiropractic help degenerative disc disease?", a: "For many patients, yes. Conservative care reduces pain, improves mobility and can delay or avoid surgery." },
      { q: "Is treatment safe with a herniated disc?", a: "When appropriate. Dr. Levitt screens carefully and adjusts technique to your specific imaging and exam findings." },
    ],
  },
  {
    slug: "therapeutic-exercise",
    name: "Therapeutic Exercise",
    inlineNoun: "therapeutic exercise",
    tagline:
      "Endurance, resistance and flexibility training to restore mobility, strength and quality of life.",
    benefits: [
      "Restores stability and mobility after injury",
      "Strengthens spine and joint support muscles",
      "Endurance, resistance and flexibility components",
      "Tailored to your daily life and goals",
    ],
    conditions: ["post-injury rehab", "chronic low-back pain", "deconditioning after surgery"],
    faqs: [
      { q: "Do I need a gym membership?", a: "No. Most prescribed exercises can be done at home with minimal equipment." },
      { q: "How often should I do them?", a: "Typically 3-5 times per week. We design programs that actually fit your schedule." },
    ],
  },
  {
    slug: "functional-medicine",
    name: "Functional Medicine",
    inlineNoun: "functional medicine",
    tagline:
      "Whole-person, root-cause care for chronic pain and chronic illness built around your unique biology.",
    benefits: [
      "Addresses underlying causes, not just symptoms",
      "Whole-person evaluation: chemical, structural, lifestyle",
      "Personalized nutritional and lifestyle plans",
      "Complements traditional chiropractic care",
    ],
    conditions: ["chronic fatigue", "ongoing inflammation", "stubborn musculoskeletal pain"],
    faqs: [
      { q: "How is functional medicine different?", a: "It looks at the whole system rather than chasing isolated symptoms which is why it's especially useful for chronic, multi-symptom cases." },
      { q: "Will I have to give up my current medications?", a: "No. Functional medicine is complementary we work alongside your other providers." },
    ],
  },
  {
    slug: "alternative-medicine",
    name: "Alternative Medicine",
    inlineNoun: "alternative medicine",
    tagline:
      "Natural, drug-free therapies chiropractic, nutrition and lifestyle care led by Dr. Alan Levitt.",
    benefits: [
      "Natural, drug-free therapies",
      "Backed by 39 years of clinical experience",
      "Complementary to conventional care",
      "Whole-person, individualized approach",
    ],
    conditions: ["chronic musculoskeletal pain", "stress-related symptoms", "wellness optimization"],
    faqs: [
      { q: "Is alternative medicine right for me?", a: "It's a fit for patients who want to address root causes naturally and prefer non-pharmaceutical, non-invasive care first." },
      { q: "Do you work with other doctors?", a: "Yes. Most of Dr. Levitt's patients keep their primary care provider we collaborate where it helps." },
    ],
  },
];

export function getServiceBySlug(slug: string): PseoService | undefined {
  return pseoServices.find((s) => s.slug === slug);
}
