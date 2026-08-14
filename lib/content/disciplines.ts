// Shared source of truth for all 8 discipline pages — the homepage
// Disciplines carousel (components/Disciplines.tsx) uses the card-facing
// fields (tags/title/description/gradient/image); the individual detail
// pages (app/[slug]/page.tsx via components/templates/DisciplinePage.tsx)
// use the fuller `overview`/`serviceGroups` content. Content ported
// verbatim (lightly tidied) from the live grs.health discipline pages,
// Aug 2026 — see project memory for the source-of-truth caveat.
export interface DisciplineServiceGroup {
  heading?: string;
  items: string[];
}

export interface Discipline {
  slug: string;
  tags: string[];
  title: string;
  description: string;
  gradient: string;
  image?: string;
  overview: string;
  benefits?: string[];
  serviceGroups: DisciplineServiceGroup[];
}

export const DISCIPLINES: Discipline[] = [
  {
    slug: "occupational-therapy",
    tags: ["All ages", "Daily living"],
    title: "Occupational Therapy",
    description: "Building skills for independence in everyday life.",
    gradient: "from-navy-700 to-navy-950",
    image: "/photos/discipline-occupational-therapy.png",
    overview:
      "GRS Occupational Therapists work with clients across all ages and abilities, collaborating with patients and families to enhance quality of life and foster independence. The approach begins with evaluating functional abilities and discussing objectives, then establishing achievable goals.",
    serviceGroups: [
      {
        heading: "General Scope",
        items: [
          "Independent Living Skill / Functional Capacity Assessment",
          "Supported Independent Living (SIL), Specialist Disability Accommodation (SDA), and Individual Living Options (ILO) assessment and application",
          "NDIS Plan Review Assessments and Reports",
        ],
      },
      {
        heading: "Physical Stream",
        items: [
          "Home Modifications (basic and complex)",
          "Assistive Technology Prescription & Reports",
          "Neurological Assessment and Rehabilitation",
          "Upper Limb Assessment and Therapy / Hand Therapy",
          "Pressure Injury Management",
          "Falls Prevention & Management",
        ],
      },
      {
        heading: "Psychosocial Stream",
        items: [
          "Cognitive Assessment and Therapy",
          "Sensory Assessment and Sensory Integration Intervention",
          "Independent living skill training",
          "Leisure activities engagement and development",
          "Social skill development",
        ],
      },
      {
        heading: "Paediatric Stream (0 to School-Aged)",
        items: [
          "Behaviour assessment and intervention",
          "Sensory Assessment and Integration",
          "Functional Ability Assessment and intervention",
          "Feeding issues management",
          "Play and social skills assessment and development",
          "Fine and gross motor skills assessment and development",
          "Academic skills and school-based assessment / intervention",
          "Assistive Technology Assessment and Prescription",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy",
    tags: ["All ages", "Mobility"],
    title: "Physiotherapy",
    description: "Movement-focused care to build strength and function.",
    gradient: "from-orange-400 to-orange-600",
    image: "/photos/discipline-physiotherapy.png",
    overview:
      "GRS physiotherapists are qualified professionals who assess, treat, and prevent various health conditions and movement disorders across all age groups. They work with individuals experiencing disability, heart and lung conditions, neurological and musculoskeletal issues, and age-related conditions. Practitioners evaluate current capabilities and collaborate with clients to establish realistic goals, offering either short-term or extended care plans tailored to individual needs.",
    benefits: [
      "Mobility and balance improvements",
      "Enhanced movement of limbs",
      "Increased muscle strength and fitness",
      "Support for daily activities, sports, and hobbies",
      "Pain and chronic condition management",
      "Weight management assistance",
      "Mobility equipment assessment and prescription",
    ],
    serviceGroups: [
      {
        items: [
          "Functional Mobility Assessment and Rehabilitation",
          "Movement assessment tools (TUGT, Movement ABC, AIMS)",
          "Mobility aid prescriptions",
          "Balance Assessment and Retraining (Berg Balance Scale)",
          "Strength and Endurance Assessment",
          "Exercise program development",
          "Hydrotherapy",
          "Falls Prevention",
          "Pain Management",
        ],
      },
    ],
  },
  {
    slug: "speech-pathology",
    tags: ["All ages", "Communication"],
    title: "Speech Pathology",
    description: "Support for communication, language, and swallowing.",
    gradient: "from-peach-200 to-orange-400",
    image: "/photos/discipline-speech-pathology.png",
    overview:
      "Speech Pathologists at GRS work with individuals experiencing communication and swallowing difficulties stemming from various conditions including developmental delays, strokes, brain injuries, learning disabilities, intellectual disabilities, cerebral palsy, dementia, and hearing loss. Sessions are customised to individual needs and support transitions to school or employment, while also assisting family members, caregivers, and educators.",
    benefits: [
      "Developing spoken language",
      "Enhancing language understanding",
      "Improving practical language skills for social interaction",
      "Communication strategy development",
      "Assistive technology provision",
      "Addressing motor speech disorders and dyspraxia",
      "Literacy improvement",
      "Behavioural management and emotional regulation support",
    ],
    serviceGroups: [
      {
        items: [
          "Dysphasia (speech) assessment and intervention",
          "Dysphagia (swallowing) assessment and mealtime management",
          "Feeding assessment and Sequential-Oral-Sensory (SOS) feeding interventions",
          "Augmentative and Alternative Communication (AAC) assessment and prescription",
          "Communication skills training using standardised assessments (CELF Preschool-3, PLS-5)",
          "School-based learning and productivity assessment",
        ],
      },
    ],
  },
  {
    slug: "psychology",
    tags: ["Adults", "Mental health"],
    title: "Psychology",
    description: "Evidence-based therapy for mental health and wellbeing.",
    gradient: "from-navy-500 to-navy-900",
    image: "/photos/discipline-psychology.png",
    overview:
      "Psychologists at GRS provide therapeutic interventions to help individuals positively manage disability impacts. They work with participants and families addressing psychological and behavioural issues across all ages, offering clinic, telehealth, and community appointments.",
    serviceGroups: [
      {
        heading: "Service Areas",
        items: [
          "Mood and behavioural difficulties like depression, anxiety, or challenging behaviours in home / school / work settings",
          "Coping skills development",
          "School and life stage transitions",
          "Social skills enhancement",
          "Family relationship improvement",
          "Behavioural management strategies for support services",
        ],
      },
      {
        heading: "Specialised Assessments",
        items: [
          "Cognitive assessments (WPPSI-IV, WISC-V, WAIS-IV)",
          "Adaptive functioning evaluations",
          "Diagnostic assessments using DSM-V and ADOS-2",
          "Emotional and behavioural assessments (BASC-3, VABS-3, ABAS-3)",
          "Pre-NDIS needs assessments",
          "Positive Behaviour Support evaluations",
        ],
      },
      {
        heading: "Psychological Interventions",
        items: [
          "Emotional regulation and mood management",
          "Social skills enhancement",
          "Life stage transitions and disability adjustment support",
          "Coping strategies, parent/system interventions, and early childhood programs",
        ],
      },
    ],
  },
  {
    slug: "dietetics",
    tags: ["All ages", "Nutrition"],
    title: "Dietetics",
    description: "Personalised nutrition support for better health.",
    gradient: "from-orange-500 to-navy-900",
    image: "/photos/discipline-dietetics.png",
    overview:
      "Dietetics contributes to health promotion and illness prevention by optimising nutritional intake. GRS dietitians use scientific principles and methods to influence food intake and eating behaviour across a range of settings (Dietitians Australia, 2015).",
    serviceGroups: [
      {
        items: [
          "Comprehensive Nutrition Assessment",
          "Supplement Prescription",
          "Malnutrition Assessment and Intervention",
          "Nutrition Support for Texture Modified Diets",
          "PEG Feeding Setup and Support",
          "Dietary and Lifestyle Coaching",
          "Nutrition to promote wound healing",
        ],
      },
    ],
  },
  {
    slug: "art-therapy",
    tags: ["All ages", "Creative"],
    title: "Art Therapy",
    description: "Creative expression as a pathway to healing.",
    gradient: "from-navy-900 to-orange-500",
    image: "/photos/discipline-art-therapy.png",
    overview:
      "Art Psychotherapists serve all age groups with disabilities or mental health challenges. This approach is particularly valuable for those with communication difficulties, providing a non-verbal, sensory way to express experiences, feelings, thoughts, ideas, fears, hopes and dreams in a creative manner. Participants explore goals and barriers through mediums including painting, drawing, collage, clay, and sand — no prior artistic experience is necessary. Therapists foster a calm, supportive, non-judgemental environment that nurtures your creative process and personal expression.",
    benefits: [
      "Communication and social engagement improvements",
      "Building confidence and independence",
      "Identity exploration",
      "Functional capacity development",
      "Processing personal issues (trauma, grief, abuse, body image)",
      "Depression symptom relief",
      "Stress and anxiety reduction",
      "Self-regulation skill development",
      "Creative problem-solving",
      "Personal insight and forward progress",
    ],
    serviceGroups: [],
  },
  {
    slug: "music-therapy",
    tags: ["All ages", "Creative"],
    title: "Music Therapy",
    description: "Using music to support emotional and social growth.",
    gradient: "from-peach-200 to-navy-700",
    image: "/photos/discipline-music-therapy.png",
    overview:
      "Music therapy is a research-based, allied health profession in which music is used to actively support people as they aim to improve their health, functioning and wellbeing. Clients need not possess musical ability — GRS music therapists plan and provide musical experiences for their clients. Sessions are individualised, and therapists work across the full age spectrum from newborn children through to older adults.",
    serviceGroups: [
      {
        heading: "Mental Health & Wellbeing",
        items: [
          "Reduce anxiety or stress",
          "Regulate mood and energy levels",
          "Increase motivation",
          "Manage anger and frustration",
          "Manage challenging behaviours",
        ],
      },
      {
        heading: "Speech, Communication & Social Skills",
        items: [
          "Improve verbal and non-verbal communication",
          "Improve physical speech function",
          "Increase social communication skills and interaction",
          "Increase independence",
          "Provide positive coping mechanisms",
        ],
      },
      {
        heading: "Physical Function",
        items: [
          "Improve gross and fine motor function and control",
          "Improve balance and physical independence",
          "Regulate heart rate, breathing rate and blood pressure",
          "Improve respiratory strength and sleep",
        ],
      },
      {
        heading: "Cognitive Function & Pain Management",
        items: [
          "Enhance executive functions, memory and attention",
          "Reduce pain perception",
          "Support faster recovery from medical procedures",
        ],
      },
    ],
  },
  {
    slug: "specialist-behaviour-support-disciplines",
    tags: ["All ages", "PBS"],
    title: "Specialist Behaviour Support",
    description: "Positive support that reduces restrictive practices.",
    gradient: "from-orange-600 to-navy-950",
    image: "/photos/discipline-specialist-behaviour-support.png",
    overview:
      "Specialist Behaviour Support provides focused support and training to people with disability and their support networks to improve their wellbeing, quality of life and reduce challenging behaviours. GRS employs a multidisciplinary approach — psychologists, occupational therapists and speech pathologists work together to develop comprehensive behaviour support plans as well as training for people with disability and their support networks — aimed at improving relationships and quality of life through a holistic, person-centred, strength-based approach.",
    serviceGroups: [
      {
        heading: "Within NDIS Plans",
        items: [
          "Functional Behaviour Assessments",
          "Behaviour Support Intervention and Management Plans",
          "Interim and Comprehensive Specialist Positive Behaviour Support Plans (PBSP) — with or without restrictive practices",
          "Ongoing data collection and PBSP / restrictive practice reviews",
          "Training to PBSP-implementing providers, stakeholders, and support workers",
        ],
      },
    ],
  },
];

export function getDiscipline(slug: string) {
  return DISCIPLINES.find((d) => d.slug === slug);
}
