export const resourcesHubDefaults = {
  hero: {
    title: "Resources",
    subtitle:
      "Learn more about your spine, your health, and your care articles, tools, and trusted resources.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Resources" },
    ],
  },
  intro: {
    eyebrow: "Patient Education",
    title: "Knowledge is the first step",
    beforePhone:
      "We’ve put together a library of patient resources to help you understand chiropractic care, learn how your spine works, and adopt habits that keep you feeling your best. Browse the topics below or call",
    afterPhone: "with any questions.",
  },
  browse: {
    eyebrow: "Browse by Topic",
    title: "Pick your starting point",
    exploreLabel: "Explore",
    groups: ["Learn", "Wellness"],
    resources: [
      {
        icon: "about",
        title: "About Chiropractic",
        description:
          "What chiropractic actually is and how it works a natural, systemic approach to healing.",
        href: "/resources/about-chiropractic",
        group: "Learn",
      },
      {
        icon: "qa",
        title: "Q & A",
        description:
          "Common questions about adjustments, subluxations, and what to expect answered in plain language.",
        href: "/resources/qa",
        group: "Learn",
      },
      {
        icon: "blog",
        title: "Blog & Insights",
        description:
          "In-depth articles on spinal health, recovery, and getting the most out of chiropractic care.",
        href: "/blog",
        group: "Learn",
      },
      {
        icon: "wellness",
        title: "Spinal Wellness Tips",
        description:
          "Practical daily habits posture, lifting, sleep, hydration that protect your spine for life.",
        href: "/resources/wellness-tips",
        group: "Wellness",
      },
    ],
  },
  closing: {
    eyebrow: "Still Have Questions?",
    title: "Talk to Dr. Levitt directly",
    beforePhone: "Reading helps, but nothing beats a real conversation. Call",
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
