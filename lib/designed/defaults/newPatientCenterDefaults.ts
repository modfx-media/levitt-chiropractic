export const newPatientCenterDefaults = {
  newPatientHero: {
    title: "New Patient Center",
    subtitle:
      "Everything you need to start care with Dr. Levitt paperwork, expectations, and a warm welcome.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "New Patient Center" },
    ],
  },
  newPatientIntro: {
    eyebrow: "Welcome",
    heading: "We’ve made starting care easy",
    body: "If chiropractic care is new to you, don’t worry we walk you through every step. Download your forms in advance, see what to expect on your first visit, and call us with any questions. We can’t wait to meet you.",
  },
  startHere: {
    eyebrow: "Start Here",
    heading: "Two ways to prepare",
  },
  startHereCards: [
    {
      icon: "expect",
      title: "What to Expect",
      description:
        "A friendly walkthrough of your first appointment paperwork, exam, goals, and your personalized care plan.",
      href: "/new-patient-center/what-to-expect",
      cta: "Read the Walkthrough",
    },
    {
      icon: "appointment",
      title: "Request an Appointment",
      description:
        "Reach out and our team will follow up to confirm a time. New patients are welcome call us with any questions.",
      href: "/contact/new-patient-appointment",
      cta: "Request a Visit",
    },
  ],
  quickChecklist: {
    eyebrow: "Quick Checklist",
    heading: "Three steps before your visit",
    steps: [
      {
        n: "01",
        title: "Reach out",
        body: "Call us or request an appointment online we&rsquo;ll confirm a time that works for you.",
      },
      {
        n: "02",
        title: "Bring the essentials",
        body: "Photo ID and comfortable clothing you can move in. Plan to arrive 10–15 minutes early.",
      },
      {
        n: "03",
        title: "Meet Dr. Levitt",
        body: "We&rsquo;ll review your history, examine, discuss your goals, and build a plan together.",
      },
    ],
  },
  readyToSchedule: {
    eyebrow: "Ready to Schedule?",
    heading: "Let’s book your first visit",
    closingBefore: "Call ",
    contactLabel: "request an appointment online",
    contactHref: "/contact/new-patient-appointment",
    closingMiddle: " or ",
    closingAfter: ". We’ll be in touch shortly.",
  },
  sidebarBooking: {
    eyebrow: "New Patients Welcome",
    title: "Book your first visit",
    body: "Schedule online or call us today.",
  },
};
