export const appointmentRequestDefaults = {
  home: { label: "Home", href: "/" },
  contact: { label: "Contact", href: "/contact" },
  heading: "Send us a message",
  call: {
    eyebrow: "Prefer to Call?",
    hours: "Mon & Thu: 8:30am – 5:30pm",
  },
  form: {
    eyebrow: "Appointment Form",
    heading: "Tell us about you",
    beforeLink: "New to the practice?",
    linkLabel: "See what to expect",
    linkHref: "/new-patient-center/what-to-expect",
    afterLink: "on your first visit.",
  },
  new: {
    title: "New Patient Appointment",
    subtitle:
      "Fill out the form and our staff will be in touch shortly let&rsquo;s get you on the schedule.",
    eyebrow: "Request a Visit",
    intro:
      "Fill out the appointment request form and our staff will be in touch shortly. Send us a message!",
    reasons: [
      {
        title: "We&rsquo;ll reach out fast",
        body: "Our staff will be in touch shortly to confirm your visit and answer any questions.",
      },
      {
        title: "Flexible scheduling",
        body: "Tell us your preferred days and times we&rsquo;ll do our best to match.",
      },
      {
        title: "First-visit friendly",
        body: "New to the practice? We&rsquo;ll walk you through paperwork and what to expect.",
      },
    ],
    formTitle: "Website Appointment Request Form",
  },
  existing: {
    title: "Existing Patient Appointment",
    subtitle:
      "Already a patient? Fill out the form and our staff will be in touch shortly to get your next visit on the schedule.",
    eyebrow: "Book Your Next Visit",
    intro:
      "Fill out the existing patient appointment form and our staff will be in touch shortly to confirm your visit.",
    reasons: [
      {
        title: "We&rsquo;ll reach out fast",
        body: "Our staff will be in touch shortly to confirm your visit and answer any questions.",
      },
      {
        title: "Flexible scheduling",
        body: "Tell us your preferred days and times we&rsquo;ll do our best to match.",
      },
      {
        title: "Pick up where you left off",
        body: "We&rsquo;ll review your history and continue your care plan from your last visit.",
      },
    ],
    formTitle: "Website Existing Patient Appointment Form",
  },
};
