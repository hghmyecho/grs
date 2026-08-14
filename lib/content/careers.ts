// The 7 career-development sub-pages linked from the /join-us hub (see
// app/join-us/page.tsx) — see lib/content/disciplines.ts for the same
// registry pattern. None of this existed anywhere in the redesign before
// this pass; content ported verbatim (lightly tidied) from the live
// grs.health career pages, Aug 2026.
export interface CareerSection {
  heading?: string;
  items: string[];
}

export interface CareerPage {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  sections: CareerSection[];
}

export const CAREERS: CareerPage[] = [
  {
    slug: "career-path",
    title: "Career Path",
    tagline: "Transparent roles, built around your strengths.",
    overview:
      'GRS assists clinicians in pursuing their professional objectives by recognising individual strengths and developing customised roles. All positions are based on the Health Professional Award (2022) framework, establishing transparent role definitions and progression pathways — so clinicians receive equitable compensation assessments grounded in their competencies and contributions. GRS uses a Performance Appraisal & Development Plan (PADP) tool to formally evaluate performance and create structured development plans.',
    sections: [
      {
        heading: "Clinical Specialty",
        items: [
          "Physical Disability",
          "Psychological Disability",
          "Paediatrics",
          "Specialist Behaviour Support",
          "Generalist",
        ],
      },
      {
        heading: "Team Leadership",
        items: [
          "Clinical Education",
          "Clinical Supervision",
          "Team HR Management",
          "Clinical Resources Management",
          "Team Performance Enhancement",
        ],
      },
      {
        heading: "Business / Project Development",
        items: [
          "Quality Improvement",
          "Project Management",
          "Workflow Design",
          "Group Policy Development",
          "Client Resources Management",
        ],
      },
    ],
  },
  {
    slug: "clinical-educators",
    title: "Clinical Educators",
    tagline:
      "The power centre for our standards of excellence and clinical support through evidence-based practice.",
    overview:
      'Our clinical educator teams consist of experienced clinicians across the multi-disciplinary team and clinical streams, working toward a shared mission: helping clinicians reach their potential through clinical support and resources that build competency with current evidence-based approaches.',
    sections: [
      {
        heading: "Clinical Excellence",
        items: [
          "Clinical resource development — internal practice guidelines, templates, and physical resources",
          "Identifying current clinical needs and organising internal/external training sessions",
          "Direct clinical supervision to junior clinicians, and facilitating supervision relationships among other clinicians",
        ],
      },
      {
        heading: "Group Clinical Policy Development & Consultation",
        items: [
          "Reviewing and identifying clinical workflow improvement strategies",
          "Leading updates to group policies related to clinical practice",
          "Conducting regular internal audits of clinical practice and consulting with team leaders on ongoing clinical team development",
        ],
      },
    ],
  },
  {
    slug: "clinical-rotations",
    title: "Clinical Rotations",
    tagline:
      "Broaden your horizon of knowledge across every clinical stream.",
    overview:
      'GRS offers novice clinicians the opportunity to gain varied clinical experience by rotating through multiple clinical streams, so they can "provide a better service to the clients who might have issues across a few different clinical streams." The experience also helps clinicians identify and strengthen their clinical interests, supporting future career specialisation — improving patient care while supporting individual career development.',
    sections: [
      {
        heading: "Clinical Streams You'll Rotate Through",
        items: [
          "Physical Disability",
          "Psychosocial Disability",
          "Paediatrics",
          "Specialist Behaviour Support",
        ],
      },
    ],
  },
  {
    slug: "clinical-supervison",
    title: "Clinical Supervision",
    tagline: "The cornerstone of our quality reassurance.",
    overview:
      "GRS provides a high standard of clinical supervision for all of our staff, following AHPRA (Australian Health Practitioner Regulation Agency) guidelines. We offer group, peer, and individual supervision tailored to different experience levels, with senior therapists and clinical educators developing frameworks that connect clinicians with primary and supporting supervisors.",
    sections: [],
  },
  {
    slug: "continued-professional-development",
    title: "Continued Professional Development",
    tagline: "CPD is more than just for AHPRA registration.",
    overview:
      "We highly value CPD activities and provide a variety of forms of continued professional development support, including monthly clinical in-services, peer review sessions, group external training workshops, and annual individual training funds — organised by our clinical educators across our Sydney, Brisbane, and Gold Coast teams. Staff are expected to actively contribute by sharing professional knowledge with the wider team.",
    sections: [],
  },
  {
    slug: "currrent-advertised-positions",
    title: "Current Advertised Positions",
    tagline: "See what's open right now.",
    overview:
      "Our current open roles span Occupational Therapy, Psychology, and administrative support across our Queensland and NSW teams. GRS holds an Indeed Employer Rating of 4.4 out of 5, based on 31 reviews.",
    sections: [
      {
        heading: "Open Roles",
        items: [
          "Senior Paediatric Occupational Therapist — Queensland (Gold Coast/Brisbane), full-time",
          "Paediatric Occupational Therapist – Team Lead — NSW (Sydney), full-time",
          "Occupational Therapist — NSW (Sydney), full-time",
          "Administrative Officer — NSW (Sydney)",
        ],
      },
    ],
  },
  {
    slug: "aha-aht-novice-therapist-program",
    title: "AHA/AHT/Novice Therapist Program",
    tagline: "Building an innovative framework for our next generation of great clinicians.",
    overview:
      'Our Queensland team is reforming its support system for allied health assistants and trainees, based on feedback from previous participants and new graduate therapists — building "a sustainable, supportive & feasible framework to help our new generation of clinicians to grow."',
    sections: [
      {
        heading: "Key Areas of Change",
        items: [
          "Progressive role and task adjustments based on trainee experience and availability",
          "Assignment of primary supervisors for regular supervision and support",
          "Rotational caseload exposure across physical, psychosocial, and paediatric areas",
          "AHA/AHT participation in professional development and quality improvement",
          "Loyalty and performance rewards for successful transitions to graduate/novice clinician roles",
        ],
      },
      {
        heading: "Employment Tiers",
        items: [
          "AHA (01) — Casual, for undergraduates/early postgraduates; case-based supervision with program implementation duties",
          "AHA (02) — Block days during placement breaks; increased assessment participation under supervision",
          "AHT (03) — Full-time; supervised autonomy in assessments/therapy with rotational caseload",
          "AHT-Candidate (04) — Full-time new graduate role with higher autonomy and coordination development opportunities",
        ],
      },
    ],
  },
];

export function getCareer(slug: string) {
  return CAREERS.find((c) => c.slug === slug);
}
