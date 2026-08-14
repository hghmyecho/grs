// Shared source of truth for all 4 clinical stream pages — see
// lib/content/disciplines.ts for the same pattern. Content ported
// verbatim (lightly tidied) from the live grs.health stream pages,
// Aug 2026.
export interface StreamConditionGroup {
  heading: string;
  items: string[];
}

export interface Stream {
  slug: string;
  title: string;
  description: string;
  panelBg: string;
  panelImage?: string;
  panelText: string;
  badgeBg: string;
  badgeText: string;
  ringColor: string;
  overview: string;
  conditionGroups: StreamConditionGroup[];
}

export const STREAMS: Stream[] = [
  {
    slug: "physical-disability",
    title: "Physical Disability",
    description:
      "Support for people navigating limits on movement, self-care, and independent daily living.",
    panelBg: "bg-navy-950",
    panelText: "text-white",
    badgeBg: "bg-white/15",
    badgeText: "text-white",
    ringColor: "text-orange-400/40",
    overview:
      "People with disabilities may experience restrictions in their physical abilities. These impairments may affect their ability to mobilise, undertake self-care tasks, and self-manage. GRS delivers comprehensive therapeutic support for individuals managing various physical disabilities through multiple intervention approaches.",
    conditionGroups: [
      {
        heading: "Neurological Disorders",
        items: [
          "Acquired Brain Injury / Traumatic Brain Injury (ABI/TBI)",
          "Cerebral Vascular Accidents (Stroke)",
          "Multiple System Atrophy (MSA)",
          "Multiple Sclerosis (MS)",
          "Motor Neurone Disease (MND)",
          "Spinal Cord Injury (SCI)",
          "Cerebral Palsy (CP)",
          "Spina Bifida",
          "Epilepsy",
          "Muscular Dystrophy (MD)",
          "Tourette Syndrome",
          "Visual Impairments",
        ],
      },
      {
        heading: "Physical Conditions",
        items: [
          "Limb Amputations",
          "Heart failure / multiple organ failure",
          "Cystic Fibrosis (CF)",
          "Arthritis",
          "Scoliosis",
        ],
      },
    ],
  },
  {
    slug: "paediatrics",
    title: "Paediatrics",
    description:
      "Helping kids build skills to learn, play, move, communicate, and connect with others.",
    panelBg: "bg-orange-500",
    panelImage: "/backgrounds/paediatrics-blob.png",
    panelText: "text-white",
    badgeBg: "bg-white/20",
    badgeText: "text-white",
    ringColor: "text-white/40",
    overview:
      "GRS offers comprehensive support for individuals under 18 years of age. Children with disabilities may experience restrictions to their physical, cognitive, social and emotional abilities — impairments that can affect their ability to learn, play, move, communicate, care for themselves, and socialise.",
    conditionGroups: [
      {
        heading: "Ages 0–7: Early Childhood Early Intervention (ECEI)",
        items: [
          "Autistic Spectrum Disorder (ASD) levels 1–3",
          "Attention-Deficit/Hyperactivity Disorder (ADHD)",
          "Avoidant Restrictive Food Intake Disorder (ARFID)",
          "Learning Difficulty",
          "Down Syndrome",
          "Global Developmental Delay",
          "Cerebral Palsy",
          "Spina Bifida",
          "Cystic Fibrosis",
        ],
      },
      {
        heading: "Ages 7–17: School-Aged Services",
        items: [
          "Autistic Spectrum Disorder (ASD), ADHD",
          "Learning and intellectual disabilities",
          "Anxiety, depression, and PTSD from childhood trauma",
        ],
      },
    ],
  },
  {
    slug: "psychosocial-disability",
    title: "Psychosocial Disability",
    description:
      "Care for communication, social participation, learning, and everyday self-management.",
    panelBg: "bg-peach-200",
    panelImage: "/backgrounds/psychosocial-disability-blob.png",
    panelText: "text-navy-950",
    badgeBg: "bg-navy-950/10",
    badgeText: "text-navy-900",
    ringColor: "text-navy-900/25",
    overview:
      "People with disabilities may experience restrictions in their mental abilities. These impairments may affect their ability to communicate, engage in social interactions, learn, self-care and self-manage. GRS provides comprehensive support for various psychosocial disabilities.",
    conditionGroups: [
      {
        heading: "Mental Health Conditions",
        items: [
          "Schizophrenia",
          "Functional Neurological Disorder (FND)",
          "Post-Traumatic Stress Disorder (PTSD)",
          "Bipolar Affective Disorder (BPAD)",
          "Depression",
          "Borderline Personality Disorder (BPD)",
          "Anxiety",
          "Obsessive-Compulsive Disorder (OCD)",
        ],
      },
      {
        heading: "Psychosocial Conditions",
        items: [
          "Intellectual Disability",
          "Autistic Spectrum Disorder (ASD)",
          "Down Syndrome",
        ],
      },
    ],
  },
  {
    slug: "specialist-behaviour-support-stream",
    title: "Specialist Behavioural Support",
    description:
      "Positive, evidence-based support for safety, wellbeing, and cognitive-social adaptation.",
    panelBg: "bg-navy-700",
    panelImage: "/backgrounds/specialist-behavioural-support-blob.png",
    panelText: "text-white",
    badgeBg: "bg-white/15",
    badgeText: "text-white",
    ringColor: "text-peach-200/40",
    overview:
      "People with disabilities may experience cognitive, emotional, social, and physical impairments that affect their ability to behave in socially appropriate ways or maintain physical safety and emotional wellness. GRS operates as an NDIS-registered Specialist Behaviour Support provider, delivering services through the Positive Behaviour Support Framework.",
    conditionGroups: [
      {
        heading: "GRS's Specialist Behaviour Support Workflow",
        items: [
          "Intake — risk assessment, practitioner assignment, clinical handover, stakeholder meetings, and initiation of restrictive practice approvals if needed",
          "Assessment (0–1 months) — Functional Behaviour Assessment, engaging support networks, interim behaviour support plan, provider education",
          "Implementation (within 6 months) — ongoing data collection, comprehensive plan development, staff training, regular stakeholder communication",
          "Review & Maintenance (ongoing) — initial review at one month post-draft, formal reviews at least annually, restrictive practice monitoring",
        ],
      },
    ],
  },
];

export function getStream(slug: string) {
  return STREAMS.find((s) => s.slug === slug);
}
