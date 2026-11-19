export const privacyPolicyDefaults = {
  hero: {
    title: "Privacy Policy",
    subtitle:
      "How Levitt Chiropractic Center, P.A. collects, uses, and protects your information.",
    crumbs: [
      { label: "Home", href: "/" },
      { label: "Privacy Policy" },
    ],
  },
  intro: {
    eyebrow: "Effective 1/14/2013",
    title: "Your privacy matters",
    lead: "This privacy policy sets out how Levitt Chiropractic Center, P.A. uses and protects any information that you give Levitt Chiropractic Center, P.A. when you use this website.",
    commitment:
      "Levitt Chiropractic Center, P.A. is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.",
    updates:
      "Levitt Chiropractic Center, P.A. may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 1/14/2013.",
  },
  sections: [
    {
      kind: "list",
      id: "what-we-collect",
      title: "What We May Collect",
      intro: "We may collect the following information:",
      items: [
        { text: "Name and job title" },
        { text: "Contact information including email address" },
        { text: "Demographic information such as postcode, preferences and interests" },
        { text: "Other information relevant to customer surveys and/or offers" },
      ],
    },
    {
      kind: "list",
      id: "how-we-use",
      title: "How We Use Your Information",
      intro:
        "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
      items: [
        { text: "Internal record keeping." },
        { text: "We may use the information to improve our products and services." },
        {
          text: "We may periodically send promotional email about new products, special offers or other information which we think you may find interesting using the email address which you have provided.",
        },
        {
          text: "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.",
        },
        { text: "We may use the information to customize the website according to your interests." },
        {
          text: "We may provide your information to our third party partners for marketing or promotional purposes.",
        },
        { text: "We will never sell your information.", emphasis: true },
      ],
    },
    {
      kind: "paragraphs",
      id: "security",
      title: "Security",
      paragraphs: [
        "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.",
      ],
    },
    {
      kind: "paragraphs",
      id: "cookies",
      title: "How We Use Cookies",
      paragraphs: [
        "A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.",
        "We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.",
        "Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.",
        "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
      ],
    },
    {
      kind: "paragraphs",
      id: "external-links",
      title: "Links to Other Websites",
      paragraphs: [
        "Our website may contain links to enable you to visit other websites of interest easily. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.",
      ],
    },
    {
      kind: "controlling",
      id: "controlling",
      title: "Controlling Your Personal Information",
      intro: "You may choose to restrict the collection or use of your personal information in the following ways:",
      items: [
        {
          text: "Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.",
        },
        {
          text: "If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or calling us at",
          phone: true,
          afterPhone: ".",
        },
      ],
      trailing: [
        {
          text: "We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",
        },
        {
          text: "You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please contact us at",
          phone: true,
          afterPhone: ".",
        },
        {
          text: "If you believe that any information we are holding on you is incorrect or incomplete, please write to or call us as soon as possible at the number above. We will promptly correct any information found to be incorrect.",
        },
      ],
    },
  ],
  cta: {
    eyebrow: "Questions About This Policy?",
    title: "We’re happy to help",
    beforePhone: "For any questions about how we handle your information, contact our office at",
    afterPhone: ".",
  },
};
