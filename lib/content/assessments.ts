// Individual pages for the Specialist Assessments homepage section (see
// components/SpecialistAssessments.tsx). Covers the 3 non-featured cards
// (Functional Capacity, Autism Diagnostic, Home Modification & Assistive
// Technology) — the featured OT Driving Assessments banner still links
// straight to /make-a-referral rather than a standalone page, per the
// client's "3 cards" framing of this request.
import type { FaqItem } from "@/lib/schema";

export interface Assessment {
  slug: string;
  title: string;
  description: string;
  overview: string;
  whatToExpect: string;
  faqs: FaqItem[];
}

export const ASSESSMENTS: Assessment[] = [
  {
    slug: "functional-capacity-assessments",
    title: "Functional Capacity Assessments",
    description:
      "Independent evaluations of a person's function and support needs, delivered by experienced OTs to inform NDIS plans and reviews.",
    overview:
      "A Functional Capacity Assessment (FCA) looks at how a person's disability affects their everyday function — self-care, mobility, communication, and community participation — and translates that into clear, practical recommendations. GRS occupational therapists conduct FCAs for NDIS participants at every stage of their journey, whether that's an initial plan application, a plan review, or a change in circumstances that needs to be reflected in funded supports. The assessment draws on structured clinical tools, observation, and conversations with the participant and their support network, so the resulting report reflects both objective findings and what actually matters to the person day to day.",
    whatToExpect:
      "An FCA typically starts with a conversation about the participant's goals, daily routines, and the areas where they need support, followed by a hands-on assessment of function — this might happen in our clinic, at home, or in the community, depending on what's most relevant to accurately assess capacity. Our occupational therapists then prepare a detailed report mapping findings against NDIS support categories, with clear recommendations that support coordinators, plan managers, and the NDIA can act on directly. We aim to turn reports around promptly and are available to answer follow-up questions from the participant's broader support team once a report is submitted.",
    faqs: [
      {
        question: "Who is a Functional Capacity Assessment for?",
        answer:
          "FCAs are relevant for NDIS participants of any age who need documented evidence of their functional support needs — commonly for a new plan application, a plan reassessment, or a review triggered by a change in circumstances or diagnosis.",
      },
      {
        question: "How long does an FCA take?",
        answer:
          "The assessment session itself usually takes 60–90 minutes, though this varies depending on complexity. Report preparation typically follows within a couple of weeks of the assessment, and we'll confirm expected timeframes when a referral is booked.",
      },
      {
        question: "Can a support coordinator or plan manager refer someone for an FCA?",
        answer:
          "Yes — support coordinators, plan managers, GPs, and families can all refer a participant for an FCA. Use our referral form or call our team directly and we'll confirm the details needed to get started.",
      },
      {
        question: "Is a Functional Capacity Assessment covered by the NDIS?",
        answer:
          "FCAs are typically funded under Capacity Building supports in an NDIS plan. Our team can help confirm how a participant's specific plan and funding category applies before booking.",
      },
    ],
  },
  {
    slug: "autism-diagnostic-assessments",
    title: "Autism Diagnostic Assessments",
    description:
      "ADOS-based diagnostic assessments led by our psychology team, with practical reports to guide next steps and support planning.",
    overview:
      "GRS psychologists conduct comprehensive autism diagnostic assessments using the Autism Diagnostic Observation Schedule (ADOS-2) alongside developmental history, standardised questionnaires, and clinical observation. A formal diagnosis can be an important step toward accessing the right supports, whether that's NDIS funding, school-based accommodations, or a clearer understanding of a person's needs within their family. We work with children, adolescents, and adults, tailoring the assessment process to the person's age and presentation.",
    whatToExpect:
      "The process usually begins with an intake conversation to gather developmental and family history, followed by one or more assessment sessions involving structured observation and, where relevant, input from parents, carers, teachers, or other people who know the person well. Once complete, our psychologists prepare a detailed report outlining the assessment findings, a diagnostic outcome where appropriate, and practical, individualised recommendations for support — whether that's therapy, educational adjustments, or referrals to other specialists. We take the time to talk through the results with families rather than simply handing over a report.",
    faqs: [
      {
        question: "What age groups do you assess for autism?",
        answer:
          "Our psychology team assesses children, adolescents, and adults. The assessment approach and tools used are adapted to suit the person's age, communication style, and presenting concerns.",
      },
      {
        question: "How many appointments does the assessment involve?",
        answer:
          "Most assessments involve an initial intake session plus one or two further sessions for structured observation and any additional questionnaires, followed by a feedback session once the report is complete.",
      },
      {
        question: "Will I receive a written report?",
        answer:
          "Yes. Every assessment concludes with a comprehensive written report covering assessment findings, diagnostic outcome (where applicable), and clear recommendations for next steps and support.",
      },
      {
        question: "Can this assessment support an NDIS application?",
        answer:
          "A formal diagnostic report from a qualified psychologist can support an NDIS access request or plan review. We can talk you through how the report fits into the broader application process.",
      },
    ],
  },
  {
    slug: "home-modification-assistive-technology-assessments",
    title: "Home Modification & Assistive Technology Assessments",
    description:
      "On-site evaluations of home and equipment needs, backed by our physical disability team's experience recommending practical solutions.",
    overview:
      "Home modification and assistive technology (AT) assessments look at how a person's home environment and equipment either support or limit their independence, safety, and participation in daily life. GRS occupational therapists conduct these assessments on-site wherever possible, since seeing the actual home, bathroom, entryways, and daily routines in context leads to far more accurate and practical recommendations than an assessment done remotely.",
    whatToExpect:
      "An assessment typically involves a home visit where our occupational therapist observes the person moving through their usual daily tasks — showering, toileting, getting in and out of bed, entering and exiting the home — and identifies specific barriers to safety and independence. From there, we prepare a report recommending appropriate equipment (such as shower chairs, rails, or hospital beds) and, where needed, home modifications (from minor changes like grab rails through to complex modifications like ramps or bathroom redesigns), scaled to what's actually necessary and proportionate to the person's needs and NDIS plan.",
    faqs: [
      {
        question: "Do you assess minor and major home modifications?",
        answer:
          "Yes — we assess and report on both minor modifications (like grab rails or lever taps) and major/complex modifications (like bathroom redesigns, ramps, or doorway widening), scaled to what the participant genuinely needs.",
      },
      {
        question: "Does the assessment happen at my home?",
        answer:
          "Wherever possible, yes. An on-site visit lets our occupational therapist see the actual environment and equipment in use, which leads to more accurate and practical recommendations than an assessment conducted off-site.",
      },
      {
        question: "How does this connect to my NDIS plan?",
        answer:
          "Our reports are structured to align with NDIS requirements for home modification and assistive technology funding, so support coordinators, plan managers, and the NDIA can review and action recommendations directly.",
      },
      {
        question: "What happens after the assessment?",
        answer:
          "You'll receive a written report with prioritised recommendations. Our team can also help clarify next steps, including how to source recommended equipment or engage a builder for approved modifications.",
      },
    ],
  },
];

export function getAssessment(slug: string) {
  return ASSESSMENTS.find((a) => a.slug === slug);
}
