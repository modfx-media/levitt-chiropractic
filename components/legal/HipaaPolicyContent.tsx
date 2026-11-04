"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/lib/siteConfig";
import { LocationStrip } from "@/components/services/LocationStrip";
import { ServiceHero } from "@/components/services/ServiceHero";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Item = { title: string; body: React.ReactNode };

// SECTION A How we may use or disclose your health information
const useDisclosureItems: Item[] = [
  {
    title: "Treatment",
    body: (
      <>
        We use medical information about you to provide your medical care. We
        disclose medical information to our employees and others who are
        involved in providing the care you need. For example, we may share
        your medical information with other physicians or other health care
        providers who will provide services that we do not provide. Or we may
        share this information with a pharmacist who needs it to dispense a
        prescription to you, or a laboratory that performs a test. We may also
        disclose medical information to members of your family or others who
        can help you when you are sick or hurt, or after you die.
      </>
    ),
  },
  {
    title: "Payment",
    body: (
      <>
        We use and disclose medical information about you to obtain payment
        for the services we provide. For example, we give your health plan
        the information it requires before it will pay us. We may also
        disclose information to other health care providers to assist them in
        obtaining payment for services they have provided to you.
      </>
    ),
  },
  {
    title: "Health Care Operations",
    body: (
      <>
        We may use and disclose medical information about you to operate this
        medical practice to review and improve the quality of care, evaluate
        the competence of our staff, obtain authorizations from your health
        plan, conduct medical reviews, and perform legal services and audits
        (including fraud detection, compliance programs, and business
        management). We may share your medical information with our business
        associates (such as our billing service) under written contracts that
        require them to protect the confidentiality and security of your
        protected health information. We may also share information with
        other health care providers, clearinghouses, or health plans for
        their quality assessment, patient-safety, population-health,
        protocol-development, case-management, training, accreditation,
        certification, licensing, or fraud-and-abuse compliance activities,
        and within organized health care arrangements (OHCAs) for any of the
        OHCAs&rsquo; health care operations.
      </>
    ),
  },
  {
    title: "Appointment Reminders",
    body: (
      <>
        We may use and disclose medical information to contact and remind you
        about appointments. If you are not home, we may leave this
        information on your answering machine or in a message left with the
        person answering the phone.
      </>
    ),
  },
  {
    title: "Sign-In Sheet",
    body: (
      <>
        We may use and disclose medical information about you by having you
        sign in when you arrive at our office. We may also call out your name
        when we are ready to see you.
      </>
    ),
  },
  {
    title: "Notification & Communication With Family",
    body: (
      <>
        We may disclose your health information to notify or assist in
        notifying a family member, your personal representative, or another
        person responsible for your care about your location, your general
        condition, or, unless you had instructed us otherwise, in the event
        of your death. In the event of a disaster, we may disclose
        information to a relief organization. We may also disclose
        information to someone involved with your care or who helps pay for
        your care. If you are able and available to agree or object, we will
        give you the opportunity to object before making these disclosures.
      </>
    ),
  },
  {
    title: "Marketing",
    body: (
      <>
        Provided we do not receive any payment for making these
        communications, we may contact you to give you information about
        products or services related to your treatment, case management, or
        care coordination, or to direct or recommend other treatments,
        therapies, providers, or settings of care that may be of interest to
        you. We may describe products or services provided by this practice
        and tell you which health plans this practice participates in. We may
        also encourage you to maintain a healthy lifestyle, get recommended
        tests, or participate in a disease-management program. We will not
        otherwise use or disclose your medical information for marketing
        purposes or accept any payment for other marketing communications
        without your prior written authorization.
      </>
    ),
  },
  {
    title: "Sale of Health Information",
    body: (
      <>
        We will not sell your health information without your prior written
        authorization. The authorization will disclose that we will receive
        compensation for your health information if you authorize us to sell
        it, and we will stop any future sales of your information to the
        extent that you revoke that authorization.
      </>
    ),
  },
  {
    title: "Required by Law",
    body: (
      <>
        As required by law, we will use and disclose your health information,
        but we will limit our use or disclosure to the relevant requirements
        of the law.
      </>
    ),
  },
  {
    title: "Public Health",
    body: (
      <>
        We may, and are sometimes required by law, to disclose your health
        information to public health authorities for purposes related to:
        preventing or controlling disease, physical harm, or disability; reporting
        child, elder, or dependent-adult abuse or neglect; reporting domestic
        violence; reporting to the FDA problems with products and reactions
        to medications; and reporting disease or infection exposure.
      </>
    ),
  },
  {
    title: "Health Oversight Activities",
    body: (
      <>
        We may, and are sometimes required by law, to disclose your health
        information to health oversight agencies during audits,
        investigations, inspections, licensure, and other proceedings,
        subject to the limitations imposed by law.
      </>
    ),
  },
  {
    title: "Judicial & Administrative Proceedings",
    body: (
      <>
        We may, and are sometimes required by law, to disclose your health
        information in the course of any administrative or judicial
        proceeding to the extent expressly authorized by a court or
        administrative order, or in response to a subpoena, discovery request
        or other lawful process.
      </>
    ),
  },
  {
    title: "Law Enforcement",
    body: (
      <>
        We may, and are sometimes required by law, to disclose your health
        information to a law enforcement official for purposes such as
        identifying or locating a suspect, fugitive, material witness, or
        missing person, complying with a court order, warrant, grand jury
        subpoena, and other law enforcement purposes.
      </>
    ),
  },
  {
    title: "Coroners",
    body: (
      <>
        We may, and are often required by law, to disclose your health
        information to coroners in connection with their investigations of
        deaths.
      </>
    ),
  },
  {
    title: "Organ or Tissue Donation",
    body: (
      <>
        We may disclose your health information to organizations involved in
        procuring, banking, or transplanting organs and tissues.
      </>
    ),
  },
  {
    title: "Public Safety",
    body: (
      <>
        We may, and are sometimes required by law, to disclose your health
        information to appropriate persons in order to prevent or lessen a
        serious and imminent threat to the health or safety of a particular
        person or the general public.
      </>
    ),
  },
  {
    title: "Proof of Immunization",
    body: (
      <>
        We will disclose proof of immunization to a school that is required
        to have it before admitting a student where you have agreed to the
        disclosure on behalf of yourself or your dependent.
      </>
    ),
  },
  {
    title: "Specialized Government Functions",
    body: (
      <>
        We may disclose your health information for military or national
        security purposes or to correctional institutions or law enforcement
        officers that have you in their lawful custody.
      </>
    ),
  },
  {
    title: "Workers&rsquo; Compensation",
    body: (
      <>
        We may disclose your health information as necessary to comply with
        workers&rsquo; compensation laws. We are also required by law to
        report cases of occupational harm or occupational illness to the
        employer or workers&rsquo; compensation insurer.
      </>
    ),
  },
  {
    title: "Change of Ownership",
    body: (
      <>
        In the event that this medical practice is sold or merged with
        another organization, your health information / record will become
        the property of the new owner, although you will maintain the right
        to request that copies of your health information be transferred to
        another physician or medical group.
      </>
    ),
  },
  {
    title: "Breach Notification",
    body: (
      <>
        In the case of a breach of unsecured protected health information,
        we will notify you as required by law. If you have provided us with
        a current e-mail address, we may use e-mail to communicate
        information related to the breach.
      </>
    ),
  },
];

// SECTION C Your Health Information Rights
const rightsItems: Item[] = [
  {
    title: "Right to Request Special Privacy Protections",
    body: (
      <>
        You have the right to request restrictions on certain uses and
        disclosures of your health information by a written request
        specifying what information you want to limit. If you tell us not to
        disclose information to your commercial health plan concerning
        health care items or services for which you paid for in full
        out-of-pocket, we will abide by your request, unless we must
        disclose the information for treatment or legal reasons.
      </>
    ),
  },
  {
    title: "Right to Request Confidential Communications",
    body: (
      <>
        You have the right to request that you receive your health
        information in a specific way or at a specific location. For
        example, you may ask that we send information to a particular e-mail
        account or to your work address. We will comply with all reasonable
        requests submitted in writing.
      </>
    ),
  },
  {
    title: "Right to Inspect and Copy",
    body: (
      <>
        You have the right to inspect and copy your health information, with
        limited exceptions. To access your medical information, submit a
        written request detailing what information you want access to,
        whether you want to inspect or get a copy of it, and your preferred
        form and format. We will charge a reasonable fee for labor, supplies,
        postage, and (if requested) an explanation or summary.
      </>
    ),
  },
  {
    title: "Right to Amend or Supplement",
    body: (
      <>
        You have the right to request that we amend your health information
        that you believe is incorrect or incomplete. You must make the
        request in writing, including the reasons. We are not required to
        change your health information, and we will provide you with
        information about a denial and how you can disagree with it.
      </>
    ),
  },
  {
    title: "Right to an Accounting of Disclosures",
    body: (
      <>
        You have the right to receive an accounting of disclosures of your
        health information made by this medical practice, with certain
        exceptions described in this Notice (including treatment, payment,
        health care operations, family notification, and specialized
        government functions).
      </>
    ),
  },
  {
    title: "Right to a Paper or Electronic Copy of This Notice",
    body: (
      <>
        You have the right to a paper copy of this Notice of Privacy
        Practices, even if you have previously requested it by e-mail.
      </>
    ),
  },
];

export default function HipaaPolicyContent() {
  return (
    <>
      <ServiceHero
        title="Notice of Privacy Practices"
        subtitle="HIPAA Notice describing how medical information about you may be used and disclosed, and how you can access this information."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "HIPAA Policy" },
        ]}
      />

      {/* SECTION 2 WHITE: INTRO BANNER */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Please Review Carefully
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              How we protect your medical information
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 border-l-4 border-[#F97316] pl-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              <strong className="font-semibold text-[#0F172A]">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE
                USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS
                INFORMATION. PLEASE REVIEW IT CAREFULLY.
              </strong>
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              We understand the importance of privacy and are committed to
              maintaining the confidentiality of your medical information. We
              make a record of the medical care we provide and may receive
              such records from others. We use these records to provide or
              enable other health care providers to provide quality medical
              care, to obtain payment for services provided to you as allowed
              by your health plan, and to enable us to meet our professional
              and legal obligations to operate this medical practice
              properly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              We are required by law to maintain the privacy of protected
              health information, to provide individuals with notice of our
              legal duties and privacy practices with respect to protected
              health information, and to notify affected individuals
              following a breach of unsecured protected health information.
              This notice describes how we may use and disclose your medical
              information. It also describes your rights and our legal
              obligations with respect to your medical information.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              If you have any questions about this Notice, please contact our
              Privacy Officer at{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 SLATE: SECTION A Use & Disclosure */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Section A
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              How we may use or disclose your health information
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              This medical practice collects health information about you and
              stores it in a chart and on a computer. This is your medical
              record. The medical record is the property of this medical
              practice, but the information in the medical record belongs to
              you. The law permits us to use or disclose your health
              information for the following purposes:
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useDisclosureItems.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-lg font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-heading text-base font-bold text-[#0F172A]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </div>
                <div className="mt-3 text-sm leading-relaxed text-slate-700">
                  {item.body}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 DARK NAVY: SECTION B */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 text-white sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[140px]"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-400">
              Section B
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              When we may not use or disclose your health information
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
            <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
              Except as described in this Notice of Privacy Practices, this
              medical practice will, consistent with its legal obligations,
              not use or disclose health information which identifies you
              without your written authorization. If you do authorize this
              medical practice to use or disclose your health information for
              another purpose, you may revoke your authorization in writing
              at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 WHITE: SECTION C Rights */}
      <section className="relative bg-white py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Section C
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Your health information rights
            </h2>
            <span
              aria-hidden
              className="mt-4 block h-1 w-16 rounded-full bg-[#F97316]"
            />
          </motion.div>

          <div className="space-y-5">
            {rightsItems.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-2xl border-l-4 border-[#F97316] bg-slate-50 p-6 ring-1 ring-slate-100 sm:p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-2xl font-black text-[#F97316]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8 text-base leading-relaxed text-slate-700"
          >
            If you would like to have a more detailed explanation of these
            rights or if you would like to exercise one or more of these
            rights, contact our Privacy Officer at{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
            >
              {siteConfig.phone}
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* SECTION 6 SLATE: SECTIONS D + E */}
      <section className="relative bg-slate-50 py-12 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-2xl font-black text-[#F97316]/70">
                D
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                Changes to this Notice of Privacy Practices
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We reserve the right to amend this Notice of Privacy Practices
              at any time in the future. Until such amendment is made, we are
              required by law to comply with the terms of this Notice
              currently in effect. After an amendment is made, the revised
              Notice of Privacy Protections will apply to all protected
              health information that we maintain, regardless of when it was
              created or received. We will keep a copy of the current notice
              posted in our reception area and on our website, and a copy
              will be available at each appointment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border-l-4 border-[#F97316] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-2xl font-black text-[#F97316]/70">
                E
              </span>
              <h3 className="font-heading text-xl font-bold text-[#0F172A] sm:text-2xl">
                Complaints
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Complaints about this Notice of Privacy Practices or how this
              medical practice handles your health information should be
              directed to our Privacy Officer at{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              If you are not satisfied with the manner in which this office
              handles a complaint, you may submit a formal complaint to{" "}
              <a
                href="mailto:OCRMail@hhs.gov"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                OCRMail@hhs.gov
              </a>
              . The complaint form may be found at{" "}
              <a
                href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/hipcomplaint.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F97316] underline-offset-4 hover:underline"
              >
                hhs.gov/ocr/privacy/hipaa/complaints/hipcomplaint.pdf
              </a>
              . You will not be penalized in any way for filing a complaint.
            </p>
          </motion.div>
        </div>
      </section>

      <LocationStrip />
    </>
  );
}
