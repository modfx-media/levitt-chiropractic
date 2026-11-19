import { qaFaqs } from "@/lib/qaFaqs";

export const qaDefaults = {
  hero: {
    title: "Q & A",
    subtitle:
      "Common questions about chiropractic care, adjustments, subluxations, and what to expect answered.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Resources", href: "/resources" },
      { label: "Q & A" },
    ],
  },
  intro: {
    eyebrow: "Questions, Answered",
    title: "Everything you wanted to know",
    lead: "Tap any question below to see the full answer. Don’t see what you’re looking for?",
    contactLabel: "Contact us",
    contactHref: "/contact",
    beforePhone: "or call",
    afterPhone: "we’re always happy to hear from you!",
  },
  faq: {
    eyebrow: "7 Common Questions",
    title: "Start exploring",
    items: qaFaqs.map((faq) => ({ q: faq.q, a: faq.a.slice() })),
  },
  closing: {
    eyebrow: "Still Curious?",
    title: "Get answers from Dr. Levitt himself",
    beforePhone: "Call",
    beforeLink: "or",
    linkLabel: "send us a message",
    linkHref: "/contact",
    afterLink: "every question gets a real answer.",
  },
  cta: {
    eyebrow: "Have a Question?",
    title: "Book a consultation",
    body: "Schedule a visit and ask anything in person.",
  },
};
