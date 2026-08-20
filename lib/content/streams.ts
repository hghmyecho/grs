// Shared source of truth for all 4 clinical stream pages — see
// lib/content/disciplines.ts for the same pattern. Original short-form
// content ported verbatim (lightly tidied) from the live grs.health stream
// pages, Aug 2026; `overview`/`approach`/`faqs` expanded Aug 20 2026 for
// SEO word-count/E-E-A-T depth.
import type { FaqItem } from "@/lib/schema";

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
  approach: string;
  conditionGroups: StreamConditionGroup[];
  faqs: FaqItem[];
}

export const STREAMS: Stream[] = [
  {
    slug: "physical-disability",
    title: "Physical Disability",
    description:
      "Support for people navigating limits on movement, self-care, and independent daily living.",
    panelBg: "bg-navy-950",
    panelImage: "/backgrounds/physical-disability-blob.png",
    panelText: "text-white",
    badgeBg: "bg-white/15",
    badgeText: "text-white",
    ringColor: "text-orange-400/40",
    overview:
      "Physical disability affects the way a person moves, cares for themselves, and manages daily tasks, and it can arise from a wide range of neurological and physical conditions, from acquired brain injury and spinal cord injury to conditions like multiple sclerosis, cerebral palsy, or limb amputation. For many people, the impact reaches beyond mobility, touching independence, confidence, and participation in everyday life, work, and community. GRS is an NDIS-registered provider supporting people of all ages living with physical disability, working alongside participants, families, and support networks to build practical, achievable pathways toward greater independence. Our multidisciplinary team, including occupational therapists, physiotherapists, speech pathologists, psychologists, dietitians, and allied health assistants, draws on each discipline's expertise to address the physical, functional, and personal goals that matter most to each participant. Support is person-centred and tailored to the individual's diagnosis, environment, and stage of life, whether that means building strength and mobility, adapting a home or equipment, developing self-care routines, or supporting participation in study, work, or community activities. GRS works within each participant's NDIS plan, coordinating care across disciplines so that therapy remains consistent, relevant, and aligned with their broader goals.",
    approach:
      "GRS supports people with physical disability through a coordinated, multidisciplinary approach that brings together occupational therapy, physiotherapy, speech pathology, psychology, dietetics, and allied health assistance as needed. Support begins with a thorough assessment of the person's function, environment, goals, and NDIS plan, so that therapy targets what matters most to them and their family. From there, GRS clinicians collaborate with the participant, their family, and existing support network, including support coordinators, GPs, and specialists, to set realistic, meaningful goals and agree on how progress will be tracked. Where a participant's needs span multiple disciplines, GRS coordinates internally so therapists share information and work toward the same goals rather than in isolation. Plans are reviewed regularly and adjusted as circumstances, capacity, or NDIS plans change, keeping support relevant over time. Throughout, the participant's voice and preferences guide decisions about how, where, and how often support is delivered.",
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
    faqs: [
      {
        question: "What conditions are included under the Physical Disability stream at GRS?",
        answer:
          "GRS supports a broad range of conditions affecting movement and physical function, including neurological conditions such as ABI/TBI, stroke, multiple sclerosis, motor neurone disease, spinal cord injury, cerebral palsy, and spina bifida, as well as physical conditions like limb amputation, organ failure, cystic fibrosis, arthritis, and scoliosis. Support is tailored to each person's specific diagnosis and needs.",
      },
      {
        question: "Which GRS services typically support people with a physical disability?",
        answer:
          "Depending on individual goals, people in this stream may work with occupational therapists, physiotherapists, speech pathologists, psychologists, dietitians, and allied health assistants. The combination of services is chosen based on each person's functional needs, whether that involves mobility, self-care, communication, nutrition, or emotional wellbeing.",
      },
      {
        question: "Is support for physical disability available at any age?",
        answer:
          "Yes. GRS supports children, adults, and older people living with physical disability, with therapy adapted to each person's age, stage of life, and living situation. Younger participants may also access support through GRS's paediatric services where relevant to their diagnosis and needs.",
      },
      {
        question: "How does GRS coordinate care when I see more than one type of therapist?",
        answer:
          "GRS's multidisciplinary team communicates regularly so that therapists working with the same participant are aligned on goals and progress. This coordination helps ensure therapy is consistent, avoids duplication, and reflects a shared understanding of the person's needs across every discipline involved.",
      },
      {
        question: "Is this support funded through the NDIS?",
        answer:
          "Yes, GRS is an NDIS-registered provider and delivers physical disability support in line with participants' NDIS plans. Funding and the specific supports available depend on each participant's plan, so GRS works with participants and their support coordinators to align therapy with approved funding.",
      },
      {
        question: "How do I get started with GRS for physical disability support?",
        answer:
          "You can get started by contacting GRS directly or through a referral from a support coordinator, GP, or specialist. GRS will discuss your goals, NDIS plan, and needs to determine which disciplines and services are the right fit before support begins.",
      },
      {
        question: "Can support change as my physical disability progresses or changes over time?",
        answer:
          "Yes, GRS regularly reviews goals and support plans, so therapy can adapt if your condition, function, or circumstances change over time. This ongoing review ensures your support remains relevant, whether your needs are progressing, stabilising, or improving.",
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
    panelText: "text-navy-950",
    badgeBg: "bg-navy-950/10",
    badgeText: "text-navy-900",
    ringColor: "text-navy-900/25",
    overview:
      "Paediatrics at GRS covers support for children and young people under 18 who experience delays or difficulties in their physical, cognitive, social, or emotional development. This can include children accessing Early Childhood Early Intervention (ECEI) support from birth to age seven, as well as school-aged children and adolescents navigating conditions such as autism, ADHD, learning or intellectual disability, or difficulties linked to anxiety, depression, or past trauma. These challenges can affect a child's ability to learn, play, move, communicate, care for themselves, and build relationships with family, peers, and the wider community. GRS is an NDIS-registered provider delivering multidisciplinary paediatric support, bringing together occupational therapists, speech pathologists, physiotherapists, psychologists, and behaviour support practitioners as relevant to each child. Support is family-centred, recognising that parents, carers, and educators play a central role in a child's progress, and that therapy works best when it is woven into everyday routines at home, at school, and in the community. GRS works closely with families to understand each child's strengths, needs, and NDIS plan, shaping support that helps children build the skills and confidence to participate fully in childhood and everyday life.",
    approach:
      "GRS's approach to paediatric support starts with understanding each child within the context of their family, routines, and environment. Assessment considers the child's developmental stage, diagnosis, and the priorities identified by parents or carers, forming the basis for collaborative goal-setting that reflects what matters most at home, in early childhood settings, or at school. Depending on the child's needs, therapists from different disciplines, such as occupational therapy, speech pathology, physiotherapy, and psychology, work together and communicate with each other so support is joined up rather than delivered in isolation. GRS also liaises with educators, other allied health providers, and support coordinators where relevant, helping build a consistent picture of the child's progress across settings. Therapy is aligned with the child's NDIS plan, and goals and strategies are reviewed regularly with families to ensure support continues to reflect the child's changing needs as they grow and develop new skills.",
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
    faqs: [
      {
        question: "What age range does the GRS paediatrics stream cover?",
        answer:
          "GRS supports children and young people from birth to 18 years. This includes Early Childhood Early Intervention (ECEI) support for children aged 0 to 7, and school-aged services for children and adolescents aged 7 to 17, with therapy tailored to each stage of development.",
      },
      {
        question: "What kinds of conditions do you support in children?",
        answer:
          "GRS supports a range of conditions including autism spectrum disorder, ADHD, ARFID, learning difficulties, Down syndrome, global developmental delay, cerebral palsy, spina bifida, and cystic fibrosis, as well as anxiety, depression, or PTSD linked to childhood trauma in older children and teenagers.",
      },
      {
        question: "Which therapists might my child work with at GRS?",
        answer:
          "Depending on your child's needs, they may be supported by occupational therapists, speech pathologists, physiotherapists, and psychologists, sometimes alongside behaviour support practitioners. GRS selects the right mix of disciplines based on your child's diagnosis, goals, and the areas of development you would like to focus on.",
      },
      {
        question: "How involved will I be as a parent or carer?",
        answer:
          "Very involved. GRS takes a family-centred approach, working with parents and carers to set goals, share progress, and build strategies that fit into everyday routines at home, at school, or in early childhood settings, since consistency across these environments supports a child's progress.",
      },
      {
        question: "Is paediatric support through GRS funded by the NDIS?",
        answer:
          "Yes, GRS is an NDIS-registered provider and delivers paediatric therapy in line with a child's NDIS plan. The specific supports available depend on the plan in place, and GRS works with families and support coordinators to align therapy with funded goals.",
      },
      {
        question: "How do we start accessing paediatric support at GRS?",
        answer:
          "You can contact GRS directly or come through a referral from a paediatrician, GP, early childhood partner, or support coordinator. GRS will discuss your child's needs and NDIS plan to determine which services and disciplines are the best fit to begin support.",
      },
      {
        question: "Can my child access support through GRS before receiving an official diagnosis?",
        answer:
          "In some cases, yes — particularly through Early Childhood Early Intervention (ECEI) pathways, which can support developmental concerns before a formal diagnosis is confirmed. It's best to discuss your child's specific situation with GRS or your NDIS early childhood partner directly.",
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
      "Psychosocial disability refers to the impact that mental health conditions can have on a person's everyday functioning, including their ability to communicate, engage socially, learn, self-care, and manage day-to-day life. It can affect people living with conditions such as schizophrenia, bipolar affective disorder, depression, anxiety, OCD, PTSD, borderline personality disorder, or functional neurological disorder, as well as people whose psychosocial needs relate to an intellectual disability, autism, or Down syndrome. These experiences can fluctuate over time and often intersect with other areas of a person's life, from relationships and study to work and community participation. GRS is an NDIS-registered provider delivering multidisciplinary support for people with psychosocial disability, drawing on psychology, occupational therapy, speech pathology, and specialist behaviour support as appropriate to each person's circumstances. Support is person-centred and recovery-oriented, focused on helping people build skills, confidence, and routines that support their independence and participation in everyday life. GRS works collaboratively with participants, their families or carers, and any other treating professionals involved, ensuring support is coordinated, consistent with each person's NDIS plan, and responsive to changes in their needs over time.",
    approach:
      "GRS supports people with psychosocial disability through a coordinated, recovery-oriented approach that begins with understanding each person's history, current needs, and goals. Assessment and goal-setting are collaborative, involving the participant and, where appropriate, their family, carers, or existing treating team, so that support reflects what matters to the person and fits alongside any clinical or psychiatric care already in place. Depending on individual needs, GRS clinicians from psychology, occupational therapy, speech pathology, and specialist behaviour support work together, sharing information so that support remains consistent across disciplines. Therapy is aligned with each participant's NDIS plan and focuses on building practical skills for communication, social participation, learning, and self-management. Because psychosocial needs can change over time, GRS maintains regular review of goals and strategies, adjusting support as circumstances shift, and working flexibly with participants to ensure the right level and type of support continues to be in place.",
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
    faqs: [
      {
        question: "What conditions fall under the psychosocial disability stream?",
        answer:
          "This stream supports people living with mental health conditions such as schizophrenia, bipolar affective disorder, depression, anxiety, OCD, PTSD, borderline personality disorder, and functional neurological disorder, as well as people whose psychosocial support needs relate to intellectual disability, autism, or Down syndrome.",
      },
      {
        question: "What does psychosocial disability actually affect day to day?",
        answer:
          "Psychosocial disability can affect a person's ability to communicate, engage in social situations, learn, self-care, and manage everyday tasks. The impact can vary over time, which is why GRS's support is flexible and responsive to how a person is going at any given point.",
      },
      {
        question: "Which GRS professionals support people with psychosocial disability?",
        answer:
          "People in this stream commonly work with psychologists, occupational therapists, and speech pathologists, and may also access specialist behaviour support where relevant. The mix of services depends on each person's goals, whether that is building social skills, daily routines, communication, or emotional coping strategies.",
      },
      {
        question: "Will GRS work alongside my psychiatrist or other mental health treatment?",
        answer:
          "Yes, GRS aims to coordinate with any existing treating team, such as a psychiatrist, GP, or mental health clinician, so that NDIS-funded supports complement rather than duplicate clinical treatment already in place, keeping everyone aligned around the same goals for the person's wellbeing and recovery.",
      },
      {
        question: "Is psychosocial disability support funded through the NDIS?",
        answer:
          "Yes, GRS is an NDIS-registered provider and delivers psychosocial disability support in line with a participant's NDIS plan. Available supports depend on individual plan funding, and GRS works with participants and support coordinators to align therapy with what has been approved.",
      },
      {
        question: "How can I start accessing support for psychosocial disability at GRS?",
        answer:
          "You can contact GRS directly or be referred by a support coordinator, GP, psychiatrist, or other treating professional. GRS will talk through your needs, goals, and NDIS plan to work out which services and clinicians are the right fit to begin.",
      },
      {
        question: "Can support intensity change if I'm having a harder time than usual?",
        answer:
          "Yes, GRS's support for psychosocial disability is designed to be flexible, recognising that needs can fluctuate. If you're going through a more difficult period, your team can discuss adjusting the type or frequency of support to better match what you need at that time.",
      },
      {
        question: "Does GRS provide crisis support for psychosocial disability?",
        answer:
          "GRS's psychosocial disability support is not a crisis service. If you or someone you support is in crisis, please contact emergency services or a crisis line directly; GRS can still be contacted separately to discuss ongoing, non-crisis therapeutic support.",
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
      "Specialist behaviour support is for people whose cognitive, emotional, social, or physical impairments affect their ability to behave in safe or socially appropriate ways, or place their safety and emotional wellbeing at risk. This can include people who display behaviours of concern, who are at risk of using or experiencing restrictive practices, or whose support needs mean families, carers, and support workers require guidance on how to respond safely and consistently. GRS is an NDIS-registered Specialist Behaviour Support provider, delivering support through the Positive Behaviour Support (PBS) framework, an evidence-based, person-centred approach that seeks to understand the reasons behind behaviour and build positive, sustainable ways of meeting a person's needs. Our specialist behaviour support practitioners work closely with participants, families, support workers, and other treating professionals to design strategies that improve quality of life while reducing reliance on restrictive practices where possible. GRS's support spans from initial risk assessment through to ongoing assessment, implementation, and long-term review, ensuring strategies remain current as a person's circumstances change. This support can benefit people across a wide range of ages and disability types, wherever behaviour support needs have been identified as part of their NDIS plan.",
    approach:
      "GRS's specialist behaviour support follows a structured pathway that moves from understanding a person's needs through to long-term, sustainable strategies. Support typically begins with intake and a risk assessment, so the right practitioner and priorities are identified early, followed by a period of assessment to understand the function of behaviours of concern within the person's environment and relationships. From there, GRS practitioners work with participants, families, and support workers to implement practical strategies and provide training so everyone involved can respond consistently and safely. Behaviour support plans are developed collaboratively, reflecting the participant's own preferences and goals wherever possible, and are aligned with their NDIS plan. Because behaviour and circumstances can change, GRS maintains ongoing review of plans, including monitoring of any restrictive practices, to ensure strategies stay appropriate, effective, and focused on improving the person's overall quality of life over time.",
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
    faqs: [
      {
        question: "Who is specialist behaviour support for?",
        answer:
          "This support is for people whose cognitive, emotional, social, or physical impairments affect their ability to behave safely or in socially appropriate ways. It can benefit people of any age or disability type where behaviours of concern, safety risks, or restrictive practices have been identified as part of their NDIS plan.",
      },
      {
        question: "What is Positive Behaviour Support and does GRS use it?",
        answer:
          "Positive Behaviour Support (PBS) is an evidence-based, person-centred framework that focuses on understanding the reasons behind behaviour and building positive strategies to meet a person's needs, rather than simply managing behaviour. GRS is a registered Specialist Behaviour Support provider and delivers all support through this framework.",
      },
      {
        question: "What does the process of getting a behaviour support plan involve?",
        answer:
          "Support generally begins with an intake and risk assessment, followed by an assessment period to understand the behaviours of concern, before a plan is developed and implemented with training for family and support workers. Plans are then reviewed regularly to make sure strategies remain effective and current.",
      },
      {
        question: "Will my family or support workers be involved?",
        answer:
          "Yes, families, carers, and support workers are central to specialist behaviour support. GRS practitioners work closely with everyone involved in a person's daily life, providing guidance and training so that strategies can be applied consistently across home, community, and other support settings.",
      },
      {
        question: "Is specialist behaviour support funded through the NDIS?",
        answer:
          "Yes, GRS is an NDIS-registered Specialist Behaviour Support provider and delivers this support in line with each participant's NDIS plan, including funding for behaviour support assessments and plans where this has been approved, and works with support coordinators to confirm what is covered.",
      },
      {
        question: "How do I start the process with GRS for behaviour support?",
        answer:
          "You can contact GRS directly or be referred by a support coordinator, family member, or another service already involved in a person's care. GRS will begin with an intake process to understand the situation and assess how best to proceed.",
      },
      {
        question:
          "Does specialist behaviour support only apply where restrictive practices are already in use?",
        answer:
          "No, support can be provided even where restrictive practices aren't currently in use, particularly where there's a risk of behaviours of concern affecting safety or wellbeing. Early support can help reduce the likelihood of restrictive practices being needed in the first place.",
      },
    ],
  },
];

export function getStream(slug: string) {
  return STREAMS.find((s) => s.slug === slug);
}
