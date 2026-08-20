// Shared source of truth for all 8 discipline pages — the homepage
// Disciplines carousel (components/Disciplines.tsx) uses the card-facing
// fields (tags/title/description/gradient/image); the individual detail
// pages (app/[slug]/page.tsx via components/templates/DisciplinePage.tsx)
// use the fuller `overview`/`approach`/`serviceGroups`/`faqs` content.
// Original short-form content ported verbatim (lightly tidied) from the
// live grs.health discipline pages, Aug 2026; `overview`/`approach`/`faqs`
// expanded Aug 20 2026 for SEO word-count/E-E-A-T depth — see project
// memory for the source-of-truth caveat.
import type { FaqItem } from "@/lib/schema";

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
  approach: string;
  benefits?: string[];
  serviceGroups: DisciplineServiceGroup[];
  faqs: FaqItem[];
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
      "Occupational therapy helps people build the practical skills and confidence they need for everyday life, whether that means getting dressed independently, returning to study or work, moving safely around the home, or taking part in social and leisure activities. GRS occupational therapists work with clients of all ages and abilities, including children, adults and older people, and collaborate closely with clients and their families throughout the process. Rather than applying a one-size-fits-all model, each therapist begins by evaluating a person's current functional abilities and talking through what matters most to them, before establishing realistic, achievable goals together. From there, therapy may focus on physical function, psychosocial wellbeing, or early childhood development, depending on individual need. GRS occupational therapists also assist with practical NDIS-related tasks, such as functional capacity assessments and reports that support plan reviews and housing decisions. The overall aim is always the same: to enhance quality of life and foster genuine independence, using an approach that respects each person's goals, environment and support network as central to the process, rather than treating therapy as something done to a person rather than with them.",
    approach:
      "GRS delivers occupational therapy through an assessment-led process, starting with a thorough look at a person's functional abilities, environment and daily routines before any goals are set. Clients and families are treated as partners in this process, helping shape goals that are realistic and meaningful to them, and these goals are reviewed regularly as circumstances and priorities change. As an NDIS-registered provider, GRS structures assessments and reports to align with plan requirements, including functional capacity and plan review documentation. Depending on what a client needs, sessions may take place in our clinics, via telehealth, in the community, or through home visits, which are particularly useful for home modification and assistive technology assessments. Where appropriate, occupational therapists work alongside physiotherapists, speech pathologists, psychologists and behaviour support practitioners to ensure therapy is coordinated rather than delivered in isolation. Throughout, the approach stays person-centred and strengths-based, building on what a client can already do while working steadily toward greater independence.",
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
    faqs: [
      {
        question: "Who can benefit from occupational therapy at GRS?",
        answer:
          "GRS occupational therapy supports people of all ages and abilities, including children with developmental or sensory needs, adults recovering from injury or illness, and people with physical, neurological or psychosocial disability. Therapy is tailored to each person's goals, whether that involves daily living skills, home safety, cognitive function, or social participation.",
      },
      {
        question: "What happens in a first occupational therapy session?",
        answer:
          "The first session usually involves discussing your goals and daily challenges, followed by an assessment of your current functional abilities. Your therapist will ask about your home environment, routines and support needs, then work with you to set achievable goals that will guide the therapy plan going forward.",
      },
      {
        question: "Is occupational therapy covered under the NDIS?",
        answer:
          "Yes, GRS is an NDIS-registered provider and occupational therapy is a commonly funded support under NDIS plans. Depending on your plan's category and goals, funding may cover assessments, therapy sessions, assistive technology recommendations, and reports for plan reviews or supports applications.",
      },
      {
        question: "Can occupational therapy be delivered at home or via telehealth?",
        answer:
          "Yes. Many occupational therapy assessments, particularly those involving home modifications or assistive technology, are best done through a home visit. Telehealth and community-based sessions are also available depending on the type of support needed and what suits the client best.",
      },
      {
        question: "How is occupational therapy different from physiotherapy?",
        answer:
          "While both disciplines address physical function, occupational therapy focuses on building the practical skills needed for everyday activities and independence, such as dressing, home safety or return to school, whereas physiotherapy focuses more directly on movement, strength and rehabilitation of the body itself.",
      },
      {
        question: "How do I get started with GRS occupational therapy?",
        answer:
          "You can get started with a referral from your support coordinator, GP, or by contacting GRS directly to discuss your NDIS plan and goals. Our team will help determine whether occupational therapy is the right fit and organise an initial assessment suited to your needs.",
      },
      {
        question: "Can occupational therapy support NDIS plan reviews?",
        answer:
          "Yes, GRS occupational therapists prepare functional capacity assessments and reports that can support NDIS plan reviews, helping demonstrate current needs and progress. These reports are written to align with NDIS documentation requirements, making them useful evidence for planning meetings or reassessments.",
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
      "Physiotherapy focuses on movement, strength and function, helping people recover from injury, manage chronic conditions, or maintain physical capability as they age. GRS physiotherapists are qualified professionals who assess, treat and help prevent a wide range of health conditions and movement disorders across all age groups, including people living with disability, heart and lung conditions, neurological and musculoskeletal issues, and age-related changes in mobility. Each physiotherapy journey begins with an evaluation of a person's current physical capabilities, followed by a collaborative conversation about what they want to achieve, whether that is walking more confidently, managing pain, returning to a hobby, or building the strength needed for daily tasks. From there, realistic goals are set together with the client, and therapy is adjusted as progress is made. GRS physiotherapists also assess and prescribe mobility equipment where needed, supporting people to move safely and independently in their homes and communities. The overarching aim is to help each client improve function, reduce discomfort, and build the physical foundation for a fuller, more active life, guided by their own goals and circumstances rather than a generic treatment plan.",
    approach:
      "GRS physiotherapy begins with a thorough functional and physical assessment, using recognised tools to understand mobility, balance, strength and endurance before any treatment plan is developed. Clients are involved as active participants in goal-setting, ensuring therapy targets what matters most to them, whether that's independence at home, participation in sport and hobbies, or pain management. As an NDIS-registered provider, GRS structures physiotherapy to align with plan goals and funding categories, and progress is reviewed regularly to keep therapy relevant as needs change. Services are delivered flexibly across clinic, telehealth, community and home-visit settings, depending on what suits the client and the nature of the support required. Where a client's needs overlap with other disciplines, such as occupational therapy or psychology, physiotherapists collaborate as part of a broader team to ensure coordinated care. Throughout, the approach remains person-centred and strengths-based, building on existing ability while working steadily toward improved movement, strength and everyday function.",
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
    faqs: [
      {
        question: "What conditions does physiotherapy at GRS help with?",
        answer:
          "GRS physiotherapists work with people experiencing disability, neurological conditions, musculoskeletal issues, heart and lung conditions, and age-related mobility changes. Physiotherapy can support goals such as improving balance, building strength, managing pain, and increasing independence in daily activities, sports or hobbies.",
      },
      {
        question: "What can I expect at my first physiotherapy appointment?",
        answer:
          "Your first appointment will typically involve an assessment of your current mobility, strength and balance, using recognised assessment tools where relevant. Your physiotherapist will discuss your goals and any pain or limitations you're experiencing, then work with you to develop a realistic, achievable treatment plan.",
      },
      {
        question: "Does the NDIS fund physiotherapy?",
        answer:
          "Yes, physiotherapy is a commonly funded support for eligible NDIS participants, and GRS is an NDIS-registered provider. Whether it's funded under your plan depends on your individual goals and plan categories, which our team can help you understand during your initial consultation.",
      },
      {
        question: "Is telehealth or home-visit physiotherapy available?",
        answer:
          "Yes, GRS physiotherapy can be delivered through clinic appointments, telehealth, community visits, or home visits, depending on your needs and mobility. Home visits can be particularly useful for mobility equipment assessments or when travelling to a clinic is difficult.",
      },
      {
        question: "Can physiotherapy help with mobility equipment?",
        answer:
          "Yes, GRS physiotherapists assess and prescribe mobility aids and equipment as part of therapy, helping ensure clients have the right supports to move safely and confidently at home and in the community, alongside their broader treatment goals.",
      },
      {
        question: "How do I start physiotherapy with GRS?",
        answer:
          "You can start by getting a referral from your GP, support coordinator, or by contacting GRS directly. Our team will discuss your goals and NDIS plan, then arrange an initial assessment to determine the right physiotherapy approach for you.",
      },
      {
        question: "Will I need a referral to see a GRS physiotherapist?",
        answer:
          "A referral isn't always required, but many clients come to GRS physiotherapy through a GP, specialist, or support coordinator referral, particularly when funded through the NDIS. Contacting GRS directly is also a straightforward way to check what's needed for your specific circumstances.",
      },
      {
        question: "How long does a course of physiotherapy typically last?",
        answer:
          "The length of physiotherapy varies depending on your goals and condition, ranging from a short block focused on a specific issue to an ongoing program supporting long-term mobility and strength. Your physiotherapist will discuss expected timeframes with you as part of your treatment plan.",
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
      "Speech pathology supports people who experience difficulties with communication, language, or swallowing, whether these arise from developmental delays, stroke, brain injury, learning or intellectual disability, cerebral palsy, dementia, or hearing loss. GRS speech pathologists work with clients across the lifespan, tailoring sessions to individual needs rather than applying a generic program. For some clients this means developing spoken language and improving understanding, while for others it involves building practical communication skills for social interaction, addressing motor speech difficulties, or supporting literacy development. Speech pathology at GRS also covers swallowing and mealtime support, which is particularly important for clients at risk of feeding difficulties. Sessions are customised to each person's goals and stage of life, and can support important transitions, such as starting school or moving into employment, where communication skills play a central role. Behavioural and emotional regulation support may also form part of therapy, recognising that communication difficulties often intersect with broader wellbeing. Throughout, the focus stays on helping each client communicate and eat safely in the ways that matter most to their daily life.",
    approach:
      "GRS speech pathology begins with a tailored assessment of a client's communication or swallowing needs, using recognised tools appropriate to their age and presentation. From there, therapists work collaboratively with clients and families to set goals that reflect real, everyday priorities, whether that's building spoken language, supporting mealtime safety, or preparing for a transition such as starting school. As an NDIS-registered provider, GRS aligns therapy planning and reporting with plan goals and funding requirements. Sessions can be delivered across clinic, telehealth, and community settings, allowing flexibility for clients of different ages and circumstances. Where communication or swallowing needs intersect with broader developmental, physical or behavioural goals, speech pathologists collaborate with occupational therapists, psychologists, and other allied health professionals to keep support coordinated. Goals and strategies are reviewed regularly to ensure therapy continues to reflect a client's progress and changing needs, always grounded in a person-centred approach that respects each client's communication style and preferences.",
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
    faqs: [
      {
        question: "Who can speech pathology help?",
        answer:
          "Speech pathology at GRS supports people of all ages experiencing communication or swallowing difficulties, including those related to developmental delay, stroke, brain injury, intellectual disability, cerebral palsy, dementia or hearing loss. Support can range from language development to mealtime safety and social communication skills.",
      },
      {
        question: "What happens in a first speech pathology session?",
        answer:
          "Your first session will involve an assessment of your communication or swallowing needs, using tools suited to your age and situation. The speech pathologist will discuss your goals and daily challenges with you or your family, then begin developing a therapy plan tailored to your circumstances.",
      },
      {
        question: "Is speech pathology funded by the NDIS?",
        answer:
          "Yes, speech pathology is a commonly funded NDIS support, and GRS is a registered provider. Whether it's included in your plan depends on your individual goals, so our team can help clarify this during your first consultation or plan review.",
      },
      {
        question: "Does GRS offer telehealth speech pathology?",
        answer:
          "Yes, speech pathology sessions can be delivered via telehealth as well as in clinic or community settings, depending on what suits the client best. This flexibility can be especially helpful for families balancing school, work, or travel considerations.",
      },
      {
        question: "How does speech pathology support swallowing difficulties?",
        answer:
          "Speech pathologists assess swallowing difficulties, known as dysphagia, and provide mealtime management strategies to support safe eating and drinking. This can include feeding assessments and tailored interventions for clients experiencing feeding challenges, particularly children and older adults.",
      },
      {
        question: "How do I get started with GRS speech pathology?",
        answer:
          "You can begin with a referral from a GP, paediatrician, or support coordinator, or by contacting GRS directly. Our team will discuss your or your family member's needs and NDIS plan, then arrange an initial assessment to guide the therapy approach.",
      },
      {
        question: "Can speech pathology help adults, or is it mainly for children?",
        answer:
          "Speech pathology at GRS supports people across the full lifespan, not just children. Adults recovering from stroke or brain injury, or living with conditions like dementia or hearing loss, can also benefit from speech pathology support tailored to their communication or swallowing needs.",
      },
      {
        question: "What does AAC (augmentative and alternative communication) involve?",
        answer:
          "AAC refers to tools and strategies that support communication for people who are non-verbal or have limited speech, ranging from picture-based systems to speech-generating devices. GRS speech pathologists assess individual needs and recommend the AAC approach best suited to each client.",
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
      "Psychology at GRS provides therapeutic support to help people manage the psychological and emotional impacts of disability, illness, or life transitions. Psychologists work with participants and their families across all ages, addressing a broad range of psychological and behavioural concerns, from mood difficulties such as depression and anxiety to challenging behaviours, coping skills, and social functioning. Sessions may also focus on supporting families through major life transitions, such as changes in schooling or care arrangements, and on strengthening relationships within the family unit. In addition to therapeutic intervention, GRS psychologists conduct specialised assessments, including cognitive, adaptive functioning, diagnostic, and emotional-behavioural evaluations, which can inform NDIS planning and support decisions. Recognising that access can be a genuine barrier for many families, GRS offers psychology appointments through clinic visits, telehealth, and community-based sessions, allowing clients to engage in the setting that works best for them. The overall goal is to help individuals positively manage the impacts of disability on their wellbeing, using evidence-based therapeutic approaches suited to each person's age, needs, and circumstances.",
    approach:
      "GRS delivers psychology services through an individualised, assessment-informed approach, beginning with understanding a client's psychological, behavioural or developmental concerns before therapy goals are established. Clients and families are involved throughout, ensuring therapy addresses what matters most in daily life, whether that's emotional regulation, social skills, or navigating a difficult transition. As an NDIS-registered provider, GRS aligns specialised assessments and interventions with plan requirements, supporting both therapeutic goals and broader planning needs. Appointments are available across clinic, telehealth, and community settings, giving families flexibility in how and where they access support. Psychologists frequently collaborate with occupational therapists, speech pathologists, and behaviour support practitioners where a client's needs span multiple disciplines, ensuring a coordinated, holistic approach rather than fragmented care. Goals are reviewed over time to reflect a client's progress and changing circumstances. Throughout, the approach remains person-centred, respecting each client's pace, preferences, and cultural or family context as central to effective psychological support.",
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
    faqs: [
      {
        question: "What kinds of concerns can GRS psychologists help with?",
        answer:
          "GRS psychologists support mood and behavioural difficulties such as depression, anxiety and challenging behaviours, as well as coping skills, social skills, family relationships, and life transitions. They also conduct specialised cognitive, diagnostic and behavioural assessments for children and adults.",
      },
      {
        question: "What happens in a first psychology appointment?",
        answer:
          "A first appointment typically involves discussing your or your family member's concerns, history and goals. Depending on the referral reason, the psychologist may begin a formal assessment or start with therapeutic conversation, tailoring the approach to what will be most helpful for your situation.",
      },
      {
        question: "Is psychology funded under the NDIS?",
        answer:
          "Yes, psychology is a commonly funded NDIS support, and GRS is a registered provider offering both therapeutic sessions and specialised assessments that can support plan applications and reviews. Funding depends on individual plan goals and categories.",
      },
      {
        question: "Can psychology sessions be done via telehealth?",
        answer:
          "Yes, GRS offers psychology appointments through clinic, telehealth, and community settings. This flexibility allows clients and families to choose the format that best suits their circumstances, comfort level, and location.",
      },
      {
        question: "What kinds of assessments do GRS psychologists offer?",
        answer:
          "GRS psychologists conduct cognitive assessments, adaptive functioning evaluations, diagnostic assessments, and emotional-behavioural assessments using recognised tools. These assessments can support diagnosis, NDIS planning, and the development of tailored behaviour support strategies.",
      },
      {
        question: "How do I get started with GRS psychology?",
        answer:
          "You can start with a referral from a GP, paediatrician, or support coordinator, or by contacting GRS directly to discuss your needs. Our team will help identify whether therapy, assessment, or both would best support your goals.",
      },
      {
        question: "Can GRS psychologists provide reports for NDIS plan applications?",
        answer:
          "Yes, GRS psychologists conduct specialised assessments, such as cognitive, diagnostic, and adaptive functioning evaluations, which can produce reports used to support NDIS plan applications or reviews. These assessments are tailored to the client's age and presenting concerns.",
      },
      {
        question: "How long does a course of psychology therapy usually take?",
        answer:
          "The length of psychology support depends on individual goals and needs, ranging from short-term, focused interventions to longer-term ongoing therapy. Your psychologist will discuss what's likely to be helpful for your situation as part of your initial assessment.",
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
      "Dietetics focuses on optimising nutrition to support health, prevent illness, and improve quality of life. GRS dietitians use evidence-based scientific principles to understand and influence food intake and eating behaviour, working with clients across a range of settings and life stages. This can involve helping someone manage a specific health condition through diet, supporting safe and adequate nutrition for people with swallowing or feeding difficulties, or providing practical dietary and lifestyle coaching to support long-term wellbeing. Dietetic support is especially important for clients who are at risk of malnutrition, require texture-modified diets, or rely on enteral feeding such as PEG feeding, where careful nutritional oversight is essential. GRS dietitians also consider nutrition's role in wound healing, recognising that adequate intake can meaningfully support recovery. As with other disciplines at GRS, dietetics is approached individually, starting with a comprehensive nutrition assessment and building toward practical, achievable dietary strategies that fit each client's health needs, preferences, and daily routine, rather than generic nutrition advice.",
    approach:
      "GRS dietetics begins with a comprehensive nutrition assessment to understand a client's current dietary intake, health conditions, and any specific risks such as malnutrition or swallowing difficulties. From there, dietitians work collaboratively with clients and families to set practical, achievable nutrition goals suited to their lifestyle, culture, and preferences. As an NDIS-registered provider, GRS aligns dietetic support with relevant plan goals, including reporting where required for supports such as texture-modified diets or supplement prescriptions. Appointments can be delivered in clinic, via telehealth, or in community and home settings, depending on what best suits the client, particularly where mobility or complex health needs make travel difficult. Dietitians often work alongside speech pathologists, occupational therapists, and medical professionals where nutrition intersects with swallowing, feeding equipment, or broader health management, ensuring coordinated care. Nutrition plans are reviewed and adjusted over time as a client's health, goals, or circumstances change, always grounded in an approach that respects individual preferences alongside sound nutritional principles.",
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
    faqs: [
      {
        question: "Who benefits from seeing a dietitian at GRS?",
        answer:
          "GRS dietetics supports people managing malnutrition risk, swallowing or feeding difficulties, wound healing, or general health goals through nutrition. This includes clients requiring texture-modified diets, PEG feeding support, or general dietary and lifestyle coaching tailored to their circumstances.",
      },
      {
        question: "What happens during a first dietetics appointment?",
        answer:
          "Your first appointment involves a comprehensive nutrition assessment, looking at your current diet, health conditions, and any specific risks or needs. Your dietitian will discuss your goals and preferences, then begin developing a practical nutrition plan suited to your daily routine.",
      },
      {
        question: "Is dietetics covered by the NDIS?",
        answer:
          "Yes, dietetics can be a funded NDIS support, particularly where nutrition is linked to a participant's disability-related needs, such as swallowing difficulties or malnutrition risk. GRS is a registered provider and can help clarify what's included in your specific plan.",
      },
      {
        question: "Can dietetics support be provided via telehealth or at home?",
        answer:
          "Yes, GRS dietitians can see clients in clinic, via telehealth, or through community and home visits, depending on individual circumstances. This flexibility is especially useful for clients with complex health needs or limited mobility.",
      },
      {
        question: "How does dietetics support PEG feeding or texture-modified diets?",
        answer:
          "GRS dietitians assess nutritional needs for clients requiring PEG feeding or texture-modified diets and provide ongoing support to ensure intake remains safe and adequate. This often involves close collaboration with speech pathologists and medical teams.",
      },
      {
        question: "How do I start with a GRS dietitian?",
        answer:
          "You can start with a referral from a GP, specialist, or support coordinator, or by contacting GRS directly to discuss your needs. Our team will help arrange an initial nutrition assessment tailored to your health circumstances and NDIS plan.",
      },
      {
        question: "Can a dietitian help if I don't have a specific diagnosed condition?",
        answer:
          "Yes, dietetics support isn't limited to people with a diagnosed condition. GRS dietitians also provide general dietary and lifestyle coaching for clients wanting support with healthy eating habits, weight management, or building sustainable routines around food.",
      },
      {
        question: "How often will I need to see a dietitian?",
        answer:
          "This depends on your goals and any specific health needs, such as malnutrition risk or texture-modified diets, which may require more regular review. Your dietitian will recommend an appropriate schedule after your initial nutrition assessment, based on your circumstances.",
      },
      {
        question: "Can dietetics support be combined with speech pathology for swallowing needs?",
        answer:
          "Yes, dietetics and speech pathology are often combined for clients with swallowing difficulties, since safe swallowing and adequate nutrition are closely linked. GRS dietitians and speech pathologists collaborate to ensure dietary recommendations align with any texture modifications or mealtime strategies in place.",
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
      "Art therapy uses creative expression as a pathway to emotional wellbeing and personal insight, offering a non-verbal, sensory way for people to explore experiences, feelings, and ideas that can be difficult to put into words. GRS art psychotherapists work with people of all ages who are living with disability or facing mental health challenges, and this approach can be especially valuable for clients who find verbal communication challenging. Through mediums such as painting, drawing, collage, clay, and sand, clients are supported to explore personal goals at their own pace, with no prior artistic experience or skill required. Art therapy can support a wide range of needs, from processing difficult experiences such as trauma, grief or body image concerns, to building confidence, exploring identity, and developing functional and social capacities. Because the process is creative rather than clinical in tone, many clients find it a more accessible and comfortable way to engage with therapeutic work. GRS approaches art therapy as a genuinely individual process, shaped around each client's comfort, interests, and goals rather than a fixed program.",
    approach:
      "GRS art therapy begins by understanding a client's goals, communication style, and comfort with creative expression, recognising that art therapy works best when paced to the individual rather than following a rigid structure. Sessions are collaborative, with clients and families involved in shaping what the therapy aims to achieve, whether that's emotional processing, confidence-building, or improved communication and social engagement. As an NDIS-registered provider, GRS aligns art therapy with relevant plan goals and reviews progress over time to ensure sessions remain meaningful. Sessions are typically delivered in clinic or community settings, offering a calm, supported space for creative work. Where appropriate, art therapists collaborate with psychologists, speech pathologists, or occupational therapists to ensure therapy complements a client's broader supports. Above all, the approach is person-centred and strengths-based, using the creative process itself as the therapeutic tool, allowing clients to explore and express at their own pace without pressure to produce a particular outcome or artistic result.",
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
    faqs: [
      {
        question: "Who can benefit from art therapy at GRS?",
        answer:
          "Art therapy suits people of all ages living with disability or mental health challenges, particularly those who find verbal communication difficult. It can support emotional processing, confidence building, identity exploration, and social engagement through creative, non-verbal expression.",
      },
      {
        question: "Do I need artistic skill to try art therapy?",
        answer:
          "No, art therapy at GRS requires no prior artistic experience or skill. The focus is on the creative process and what it helps you express and explore, not on producing a polished piece of art, so anyone can take part comfortably.",
      },
      {
        question: "What happens in a first art therapy session?",
        answer:
          "A first session usually involves getting to know your art psychotherapist and discussing your goals and comfort level with creative expression. You may begin exploring simple creative mediums such as drawing or clay, at a pace that feels comfortable for you.",
      },
      {
        question: "Is art therapy funded under the NDIS?",
        answer:
          "Art therapy can be included as a funded support within eligible NDIS plans, depending on individual goals. GRS can help clarify whether art therapy aligns with your plan during an initial discussion with our team.",
      },
      {
        question: "How is art therapy different from a general art class?",
        answer:
          "Unlike an art class, art therapy is led by a trained art psychotherapist and focuses on emotional and therapeutic goals rather than skill development. The creative activity is a tool for expression and processing, guided by your individual therapeutic needs.",
      },
      {
        question: "How do I get started with GRS art therapy?",
        answer:
          "You can get started with a referral from a support coordinator, GP, or by contacting GRS directly to discuss your goals. Our team will help determine whether art therapy is a good fit and arrange an initial session.",
      },
      {
        question: "Can art therapy be delivered alongside other GRS disciplines?",
        answer:
          "Yes, art therapy is often delivered alongside other supports such as psychology, occupational therapy, or speech pathology, particularly where a client's goals span emotional wellbeing and other areas of development. GRS therapists collaborate to ensure these supports complement rather than duplicate each other.",
      },
      {
        question: "Is art therapy suitable for young children?",
        answer:
          "Yes, art therapy can suit clients of a wide age range, including young children, since creative mediums like drawing, clay, and collage offer accessible ways to engage without relying on verbal communication. Sessions are adapted to suit each child's developmental stage and comfort level.",
      },
    ],
  },
  {
    slug: "music-therapy",
    tags: ["All ages", "Creative"],
    title: "Music Therapy",
    description: "Using music to support emotional and social growth.",
    gradient: "from-peach-200 to-navy-700",
    image: "/photos/discipline-music-therapy.png",
    overview:
      "Music therapy is a research-based allied health profession that uses music intentionally to support people's health, functioning, and overall wellbeing. At GRS, sessions are delivered by qualified music therapists and are individualised to each client's needs, spanning the full age spectrum from young children to older adults. Importantly, clients do not need any musical ability or experience to take part, as the focus is on how music can be used therapeutically rather than on musical performance or skill. Music therapy can support a wide range of goals, including emotional regulation, reducing anxiety and stress, improving communication and social skills, and supporting physical function such as gross and fine motor movement. It can also assist with cognitive function, including memory and attention, and has a role in supporting pain management and recovery in some clinical contexts. Because music engages people in an enjoyable and often deeply personal way, it can be a particularly effective tool for clients who find other forms of therapy less accessible or engaging. GRS tailors each program around the individual, drawing on musical elements that resonate with that person's preferences and goals.",
    approach:
      "GRS music therapy begins with understanding a client's goals, preferences, and how they respond to music, since no musical ability is required and every program is built around the individual rather than a set curriculum. Clients and families are involved in shaping goals, whether these relate to emotional wellbeing, communication, physical function, or cognitive support, and progress is reviewed regularly to keep sessions relevant. As an NDIS-registered provider, GRS aligns music therapy with plan goals where applicable. Sessions are typically delivered in clinic or community settings, providing a supportive space for engagement through music. Where a client's goals overlap with other areas of need, music therapists collaborate with speech pathologists, psychologists, or occupational therapists to ensure therapy is coordinated as part of a broader support plan. The approach remains person-centred and strengths-based throughout, using music as an engaging, flexible medium that can be adapted to each client's abilities, interests, and therapeutic goals over time.",
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
    faqs: [
      {
        question: "Who can benefit from music therapy at GRS?",
        answer:
          "Music therapy suits people across the full age spectrum, supporting goals related to emotional wellbeing, communication, physical function, and cognitive skills. It can be especially helpful for clients who respond well to music or find other therapeutic approaches less engaging.",
      },
      {
        question: "Do I need musical skills to participate in music therapy?",
        answer:
          "No, music therapy does not require any musical ability or prior experience. Sessions are designed around therapeutic goals, using music as a tool for engagement, expression, and development rather than focusing on musical performance or skill.",
      },
      {
        question: "What happens in a first music therapy session?",
        answer:
          "A first session typically involves your music therapist getting to know your goals, preferences, and how you respond to different musical elements. From there, they begin shaping a program tailored to your needs, whether that's emotional, communicative, physical, or cognitive.",
      },
      {
        question: "Is music therapy funded under the NDIS?",
        answer:
          "Music therapy can be a funded NDIS support depending on individual plan goals. GRS is an NDIS-registered provider and can help clarify whether music therapy fits within your plan during an initial conversation with our team.",
      },
      {
        question: "Can music therapy help with communication and social skills?",
        answer:
          "Yes, music therapy can support verbal and non-verbal communication, social interaction, and independence, alongside emotional regulation and coping strategies. It's often used as part of a broader approach to communication development.",
      },
      {
        question: "How do I get started with GRS music therapy?",
        answer:
          "You can start with a referral from a support coordinator, GP, or by contacting GRS directly to discuss your goals. Our team will help determine whether music therapy suits your needs and arrange an initial session.",
      },
      {
        question: "How long is a typical music therapy program?",
        answer:
          "The length of a music therapy program depends on individual goals, ranging from short-term support around a specific need to an ongoing program integrated into a broader care plan. Your music therapist will discuss an appropriate timeframe based on your circumstances and progress.",
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
      "Specialist Behaviour Support provides focused support and training to people with disability and their support networks, aiming to improve wellbeing and quality of life while reducing challenging behaviours and the use of restrictive practices. Rather than treating behaviour in isolation, GRS takes a multidisciplinary approach, drawing on psychologists, occupational therapists, and speech pathologists to understand the underlying causes of behaviours of concern. This collaborative model allows the team to develop comprehensive behaviour support plans that address the root causes of behaviour, not just its outward expression. The approach is holistic, person-centred, and strengths-based, recognising that behaviour is often a form of communication shaped by a person's environment, health, relationships, and unmet needs. Support extends beyond the individual to their family, carers, and support workers, who are trained to understand and respond consistently to behaviour support strategies. The ultimate goal is to improve relationships and quality of life, helping participants feel understood and supported while reducing reliance on restrictive practices wherever possible, in line with contemporary, rights-based approaches to behaviour support.",
    approach:
      "GRS delivers specialist behaviour support through a structured, assessment-led process, beginning with a functional behaviour assessment to understand what is driving a person's behaviours of concern. From there, a multidisciplinary team, which may include psychologists, occupational therapists, and speech pathologists, works collaboratively with the participant, their family, and support network to develop a comprehensive behaviour support plan. As an NDIS-registered provider, GRS develops both interim and comprehensive plans in line with NDIS requirements, including plans that address restrictive practices where relevant. Ongoing data collection and regular reviews ensure that plans remain responsive to a participant's changing needs and circumstances. Training is provided to support workers, families, and other stakeholders implementing the plan, ensuring strategies are applied consistently across environments. Throughout, the approach stays person-centred, strengths-based, and focused on improving relationships and quality of life, rather than simply managing or suppressing behaviour, reflecting a genuinely collaborative and holistic model of support.",
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
    faqs: [
      {
        question: "Who is specialist behaviour support for?",
        answer:
          "Specialist behaviour support is for people with disability who experience behaviours of concern that affect their wellbeing, relationships, or quality of life. It also supports their families, carers, and support workers, helping the whole network respond consistently and constructively.",
      },
      {
        question: "What happens in an initial behaviour support consultation?",
        answer:
          "An initial consultation typically involves a functional behaviour assessment to understand the causes and patterns behind a person's behaviours of concern. The team gathers information from the participant, family, and support workers to begin developing a tailored behaviour support plan.",
      },
      {
        question: "Is specialist behaviour support funded by the NDIS?",
        answer:
          "Yes, specialist behaviour support is a recognised NDIS support, and GRS is a registered provider developing interim and comprehensive behaviour support plans, including those addressing restrictive practices, in line with NDIS requirements.",
      },
      {
        question: "What is a comprehensive behaviour support plan?",
        answer:
          "A comprehensive behaviour support plan is a detailed, evidence-based plan developed after thorough assessment, outlining strategies to address behaviours of concern and any restrictive practices in use. It's developed collaboratively and reviewed regularly as circumstances change.",
      },
      {
        question: "Does GRS train support workers and families?",
        answer:
          "Yes, GRS provides training to support workers, family members, and other stakeholders responsible for implementing a behaviour support plan, helping ensure strategies are applied consistently across home, community, and other settings.",
      },
      {
        question: "How do I access specialist behaviour support through GRS?",
        answer:
          "You can access specialist behaviour support with a referral from a support coordinator, GP, or by contacting GRS directly. Our multidisciplinary team will discuss the participant's needs and begin the assessment and planning process.",
      },
      {
        question: "How long does it take to develop a behaviour support plan?",
        answer:
          "Timeframes vary depending on complexity, but the process typically begins with a functional behaviour assessment before moving to an interim plan, followed by a more detailed comprehensive plan. GRS keeps participants and families informed of expected timeframes throughout the process.",
      },
      {
        question: "Does specialist behaviour support only apply to children?",
        answer:
          "No, specialist behaviour support at GRS is available to people of all ages, including adults, wherever behaviours of concern or restrictive practices have been identified as part of their NDIS plan. Support is tailored to the person's age, environment, and circumstances.",
      },
      {
        question:
          "Can specialist behaviour support help reduce reliance on restrictive practices already in place?",
        answer:
          "Yes, a key aim of specialist behaviour support is to reduce reliance on restrictive practices over time, where safe and appropriate to do so. This is done gradually through evidence-based strategies, ongoing monitoring, and close collaboration with the participant's support network.",
      },
    ],
  },
];

export function getDiscipline(slug: string) {
  return DISCIPLINES.find((d) => d.slug === slug);
}
