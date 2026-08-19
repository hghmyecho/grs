// The 5 career-development sub-pages linked from the /join-us hub (see
// app/join-us/page.tsx) — see lib/content/disciplines.ts for the same
// registry pattern. Content ported verbatim (lightly tidied) from the live
// grs.health career pages, Aug 2026. Clinical Educators and the AHA/AHT/
// Novice Therapist Program were removed a few days later — GRS no longer
// has those roles/programs built into its service.
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
];

export function getCareer(slug: string) {
  return CAREERS.find((c) => c.slug === slug);
}
