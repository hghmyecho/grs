// The 5 career-development sub-pages linked from the /join-us hub (see
// app/join-us/page.tsx) — see lib/content/disciplines.ts for the same
// registry pattern. Original short-form content ported verbatim (lightly
// tidied) from the live grs.health career pages, Aug 2026. Clinical
// Educators and the AHA/AHT/Novice Therapist Program were removed a few
// days later — GRS no longer has those roles/programs built into its
// service. `overview`/`approach`/`faqs` expanded Aug 20 2026 for SEO
// word-count depth.
import type { FaqItem } from "@/lib/schema";

export interface CareerSection {
  heading?: string;
  items: string[];
}

export interface CareerPage {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  approach: string;
  sections: CareerSection[];
  faqs: FaqItem[];
}

export const CAREERS: CareerPage[] = [
  {
    slug: "career-path",
    title: "Career Path",
    tagline: "Transparent roles, built around your strengths.",
    overview:
      "At GRS, career progression is treated as something built with you rather than handed down as a fixed ladder. GRS assists clinicians in pursuing their professional objectives by recognising individual strengths and developing customised roles, so a clinician's path can reflect their actual interests, whether that leans towards direct clinical work, leadership, or business development. All positions are based on the Health Professional Award (2022) framework, establishing transparent role definitions and progression pathways, which means clinicians always know what a role involves and what the next step looks like, rather than progression feeling ad hoc or dependent on who you know. This structure also underpins equitable compensation assessments grounded in competencies and contributions, not just years of service or job title. It means two clinicians doing genuinely different work are assessed against genuinely different, clearly documented expectations. To keep this fair and current over time, GRS uses a Performance Appraisal & Development Plan (PADP) tool to formally evaluate performance and create structured development plans, giving clinicians a documented, regularly revisited record of their growth and a real say in shaping where their career goes next within the organisation, rather than leaving progression to chance or informal conversation.",
    approach:
      "In practice, role customisation starts with an honest conversation about what you're good at and what you want more of. A clinician with a strong interest in paediatrics and an emerging interest in team leadership, for example, might build a role that blends clinical caseload with mentoring newer staff, rather than being forced to choose one path over the other. Progression isn't limited to a single clinical or management track — the three streams of clinical specialty, team leadership, and business or project development can be combined or moved between as interests evolve. Because everything sits on the Health Professional Award (2022) framework, clinicians can see exactly what's expected at each level before committing to a change of direction, and PADP reviews give a structured point to raise new interests, flag a stretch goal, or ask for support to build a skill. It's a model that suits clinicians who want their career to genuinely reflect their strengths, rather than fitting themselves into a role description written for someone else.",
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
    faqs: [
      {
        question: "How is my role actually decided?",
        answer:
          "Your role is shaped around a conversation about your strengths, interests, and where you want to grow, rather than a generic job description. It's mapped against the Health Professional Award (2022) framework so expectations and progression are clear from the outset, and revisited through your PADP reviews as your interests develop over time.",
      },
      {
        question: "Can I combine clinical work with leadership or business development?",
        answer:
          "Yes. GRS's three streams — clinical specialty, team leadership, and business or project development — aren't mutually exclusive. Many clinicians build roles that blend elements of more than one, such as maintaining a caseload while taking on clinical education or quality improvement responsibilities.",
      },
      {
        question: "How often is my performance reviewed?",
        answer:
          "Performance is formally reviewed through the PADP (Performance Appraisal & Development Plan) process, which evaluates your current performance and builds a structured development plan with you. It's designed as an ongoing tool for growth rather than a one-off assessment, giving you a documented record to track progress against.",
      },
      {
        question: "How is pay determined alongside career progression?",
        answer:
          "Compensation is assessed against the Health Professional Award (2022) framework, using demonstrated competencies and contributions as the basis for equitable review. This gives clinicians a transparent reference point for how their role and responsibilities relate to their pay, rather than leaving it open to guesswork.",
      },
      {
        question:
          "What if I want to specialise deeply in one clinical stream instead of rotating or diversifying?",
        answer:
          "That's absolutely supported. The career path model is built around your strengths, so if deep specialisation in an area like paediatrics or specialist behaviour support is where you want to focus, your role and development plan can be shaped around that goal.",
      },
      {
        question: "How do I find out more about career opportunities at GRS?",
        answer:
          "The best starting point is our /join-us hub, which links through to current openings and the other ways GRS supports clinicians. If you'd like to talk through what a customised career path could look like for you specifically, get in touch with GRS directly.",
      },
      {
        question: "Does the career path model apply to part-time or casual clinicians too?",
        answer:
          "Yes, role customisation and the Health Professional Award (2022) framework apply regardless of whether you work full-time, part-time, or casually. Your PADP reviews and development conversations are shaped around your role and availability, not just full-time positions.",
      },
    ],
  },
  {
    slug: "clinical-rotations",
    title: "Clinical Rotations",
    tagline:
      "Broaden your horizon of knowledge across every clinical stream.",
    overview:
      "Starting out as a clinician often means facing clients whose needs don't sit neatly within one clinical stream, and GRS designed its rotation model with exactly that reality in mind. GRS offers novice clinicians the opportunity to gain varied clinical experience by rotating through multiple clinical streams, so they can \"provide a better service to the clients who might have issues across a few different clinical streams,\" rather than referring complexity elsewhere or feeling underprepared for it. Rather than being placed in a single stream from day one and expected to specialise immediately, new clinicians get structured exposure to different client groups, presentations, and ways of working, under the guidance of experienced clinicians in each area. The experience also helps clinicians identify and strengthen their clinical interests, supporting future career specialisation, so decisions about long-term focus are grounded in genuine hands-on experience rather than assumption or guesswork. For many clinicians, this is where a career direction they hadn't previously considered — behaviour support, or paediatrics, for instance — becomes a clear and confident choice, made with the breadth of exposure to compare it against, rather than in isolation.",
    approach:
      "A typical rotation cycle for a new grad or early-career clinician is less about being thrown in the deep end and more about deliberate, supported exposure. You'll move through streams such as physical disability, psychosocial disability, paediatrics, and specialist behaviour support, working alongside clinicians who already know that caseload well, so questions get answered in real time rather than after the fact. Rotations give you a working vocabulary across streams you might otherwise never encounter early in your career, which matters enormously in disability and community health settings where a single client's presentation can touch several of these areas at once. It also means your first genuine specialisation choice is an informed one — made after trying the work, not just reading a position description. Clinicians who value variety, want to build broad clinical confidence before narrowing their focus, or simply aren't sure yet which stream suits them best tend to find this structure a natural fit, and a strong foundation for whatever direction they choose next.",
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
    faqs: [
      {
        question: "Who is the rotation program actually for?",
        answer:
          "It's designed with novice and early-career clinicians in mind — those who benefit most from varied exposure before settling into a specialisation. If you're newer to the field or simply want to broaden your experience across streams, this is the pathway built with you in mind.",
      },
      {
        question: "Which clinical streams will I rotate through?",
        answer:
          "Rotations cover GRS's core clinical streams: physical disability, psychosocial disability, paediatrics, and specialist behaviour support. Each stream exposes you to genuinely different client presentations, referral types, and ways of working, giving you a broad, well-rounded base of clinical experience to draw on for the rest of your career.",
      },
      {
        question: "Do I get to choose my specialisation afterwards?",
        answer:
          "Yes — the rotation experience exists specifically to help you identify and strengthen your clinical interests based on real exposure, not guesswork. Once you've rotated through the streams, you're well placed to pursue the specialisation that genuinely suits your interests and strengths.",
      },
      {
        question: "Will I be supported while working in an unfamiliar stream?",
        answer:
          "You'll be working alongside clinicians who are already experienced in that stream as you rotate through it, so you're never navigating unfamiliar territory entirely alone. This supported structure, rather than a sink-or-swim approach, is central to how GRS designs the rotation experience for newer clinicians.",
      },
      {
        question: "Is clinical rotation only relevant to certain professions, like OT?",
        answer:
          "The rotation model applies across the clinical streams GRS works in, so it's relevant to a range of allied health disciplines, not just one profession. Get in touch with GRS to discuss how rotations apply to your specific discipline and experience level.",
      },
      {
        question: "How do I apply for a rotation-based role at GRS?",
        answer:
          "Visit /join-us to see current openings and learn more about how GRS supports early-career clinicians more broadly. If a rotation-based role isn't currently advertised, reaching out directly is a good way to express your interest ahead of future opportunities opening up.",
      },
      {
        question: "How is my performance assessed while I'm rotating through different streams?",
        answer:
          "Feedback during rotations typically comes from the experienced clinicians you're working alongside in each stream, alongside your usual supervision and PADP review process. This gives you input from multiple perspectives as you build experience across different clinical areas.",
      },
      {
        question: "Can I request to skip a rotation stream I'm not interested in?",
        answer:
          "Rotations are designed to give broad exposure before specialising, so the program generally covers all core streams. If you have strong existing experience or a clear specialisation in mind, it's worth discussing this directly with GRS to see what flexibility might be possible.",
      },
    ],
  },
  {
    slug: "clinical-supervison",
    title: "Clinical Supervision",
    tagline: "The cornerstone of our quality reassurance.",
    overview:
      "Clinical supervision is one of the areas where GRS invests the most consistently, because it directly shapes both the quality of care clients receive and how supported clinicians feel in their day-to-day practice. GRS provides a high standard of clinical supervision for all of our staff, following AHPRA (Australian Health Practitioner Regulation Agency) guidelines, so the structure isn't ad hoc — it's built to meet the professional standards that govern registered practice in Australia. Rather than a one-size-fits-all model, we offer group, peer, and individual supervision tailored to different experience levels, recognising that a new graduate and a senior clinician need very different kinds of support to practise safely and develop well. Senior therapists and clinical educators are actively involved in developing frameworks that connect clinicians with primary and supporting supervisors, so every clinician has a considered, appropriately matched supervisory relationship rather than whoever happens to be available. This matters particularly in disability and allied health work, where complex presentations and ethically difficult decisions are common, and having a genuine, well-structured space to reflect on practice, seek guidance, and be challenged constructively is central to sustainable, high-quality clinical work over the course of a career.",
    approach:
      "A supervision session at GRS is built to be a genuine working space, not a box-ticking check-in. Depending on your experience level and needs, this might mean a one-on-one conversation with a primary supervisor working through a specific client presentation, an ethical grey area, or a decision you're unsure about; a peer session where clinicians at a similar stage compare approaches and support one another; or a group session bringing together a wider team to discuss shared clinical challenges and learn from each other's cases. Newer clinicians typically lean more heavily on individual and primary supervisor relationships as they build confidence and clinical judgement, while more experienced clinicians often value peer and group formats that let them contribute their own expertise while still having a space to reflect and be challenged. Because senior therapists and clinical educators are involved in matching clinicians with primary and supporting supervisors, the relationship is set up deliberately rather than left to chance. For clinicians who want supervision to be a real source of clinical growth and support — not just an AHPRA formality — this structured, multi-format approach is a significant part of what makes practising at GRS feel genuinely supported.",
    sections: [
      {
        heading: "How Supervision Is Structured",
        items: [
          "Individual supervision with a primary supervisor",
          "Peer supervision with clinicians at a similar experience level",
          "Group supervision across the wider team",
          "Frameworks developed and matched by senior therapists and clinical educators",
          "Aligned with AHPRA (Australian Health Practitioner Regulation Agency) guidelines",
        ],
      },
    ],
    faqs: [
      {
        question: "What types of supervision does GRS offer?",
        answer:
          "GRS offers group, peer, and individual supervision, tailored to different experience levels. Newer clinicians often have more structured individual supervision as they build confidence, while more experienced clinicians may draw more on peer or group formats, alongside ongoing access to a primary supervisor.",
      },
      {
        question: "How is my supervisor chosen?",
        answer:
          "Senior therapists and clinical educators develop the frameworks that connect clinicians with primary and supporting supervisors, so matching is considered rather than random. It takes into account your clinical stream, experience level, and development needs, so the relationship is genuinely useful, not just a formality.",
      },
      {
        question: "Does GRS's supervision model meet professional registration requirements?",
        answer:
          "Yes — GRS's clinical supervision follows AHPRA (Australian Health Practitioner Regulation Agency) guidelines, so it's structured to support your ongoing registration requirements as well as your clinical development. It's built as a genuine professional standard, not simply a minimum to get by on.",
      },
      {
        question: "How often will I have supervision?",
        answer:
          "Frequency depends on your role, experience level, and clinical stream, since supervision is tailored rather than one-size-fits-all. Newer or more junior clinicians can generally expect more regular contact; for specifics relevant to a particular role, it's best to ask directly when you enquire.",
      },
      {
        question: "Is supervision only for less experienced clinicians?",
        answer:
          "No — GRS provides a high standard of supervision for all staff, regardless of seniority. Senior clinicians typically engage more through peer and group supervision, using the space to reflect on complex cases and contribute expertise, rather than stepping away from supervision altogether.",
      },
      {
        question: "How do I ask more about the supervision model before applying?",
        answer:
          "The best way is to get in touch with GRS directly, or start at /join-us to see current roles and learn more about how the team supports clinicians. Supervision structure is a reasonable thing to ask about during the application or interview process.",
      },
      {
        question: "What happens if the supervisor match isn't working well for me?",
        answer:
          "If a supervisory relationship isn't working as well as it could, it's worth raising this with your clinical educator or senior therapist so the framework can be reviewed. Matching is intended to be a considered, ongoing process, not a fixed arrangement you're locked into.",
      },
    ],
  },
  {
    slug: "continued-professional-development",
    title: "Continued Professional Development",
    tagline: "CPD is more than just for AHPRA registration.",
    overview:
      "For allied health clinicians, CPD is often treated as a compliance requirement to satisfy at registration renewal time, but at GRS it's approached as an ongoing, genuinely valued part of clinical practice. We highly value CPD activities and provide a variety of forms of continued professional development support, including monthly clinical in-services, peer review sessions, group external training workshops, and annual individual training funds, giving clinicians multiple regular touchpoints to build knowledge rather than relying on a single annual course. This is organised by our clinical educators across our Sydney, Brisbane, and Gold Coast teams, so the offering reflects the realities and clinical focus of each region while still connecting clinicians across the organisation. Staff are expected to actively contribute by sharing professional knowledge with the wider team, which means CPD at GRS runs in both directions — clinicians aren't just recipients of training, they're also expected to bring their own expertise, case learnings, and clinical interests back to the group. For clinicians who want their professional development to feel like a genuine, collaborative part of their working life rather than an obligation squeezed in around it, this structure is designed with that expectation in mind.",
    approach:
      "CPD at GRS works as a genuine mix of structured and self-directed activity, all of which counts towards the CPD hours clinicians need to maintain their AHPRA registration. Monthly clinical in-services and peer review sessions give a regular, built-in rhythm of learning that doesn't depend on individually sourcing every activity yourself, while group external training workshops bring in outside expertise on topics the team identifies as valuable. Annual individual training funds then let clinicians pursue development specific to their own interests or specialisation, whether that's a particular course, conference, or certification relevant to their clinical stream. Because staff are expected to actively contribute by sharing professional knowledge with the wider team, presenting back on a course you've attended or a case you've learned from is a normal, expected part of the process, not an optional extra — which means your CPD also builds your visibility and standing within the team. Clinicians who want their professional development to actually stick, rather than sitting as a box ticked once a year, tend to find this collaborative, regularly-scheduled approach a meaningful part of why they stay.",
    sections: [
      {
        heading: "Forms of CPD Support",
        items: [
          "Monthly clinical in-services",
          "Peer review sessions",
          "Group external training workshops",
          "Annual individual training funds",
          "Organised by clinical educators across Sydney, Brisbane, and Gold Coast",
        ],
      },
    ],
    faqs: [
      {
        question: "What CPD activities does GRS actually provide?",
        answer:
          "GRS provides monthly clinical in-services, peer review sessions, group external training workshops, and annual individual training funds. Between these, clinicians get a mix of regular, team-based learning and the flexibility to pursue development specific to their own clinical interests or specialisation.",
      },
      {
        question: "Do these activities count towards my AHPRA CPD hours?",
        answer:
          "CPD activities offered through GRS are designed to support the professional development clinicians need for their ongoing registration. For specifics on how a particular activity applies to your own AHPRA CPD requirements, it's worth checking directly with GRS or your registering body.",
      },
      {
        question: "Who organises CPD, and is it consistent across locations?",
        answer:
          "CPD is organised by clinical educators across our Sydney, Brisbane, and Gold Coast teams, so each region's offering can reflect local clinical focus while clinicians remain connected to the wider organisation. It's a coordinated effort rather than something left to individual teams alone.",
      },
      {
        question: "Do I have to contribute to CPD, or just attend?",
        answer:
          "Both. Staff are expected to actively contribute by sharing professional knowledge with the wider team, so presenting on training you've completed or a case you've learned from is a normal part of participating, not an optional extra on top of attending.",
      },
      {
        question: "Can I choose training relevant to my own specialisation?",
        answer:
          "Yes — annual individual training funds exist specifically so clinicians can pursue development aligned with their own clinical interests or specialisation, alongside the broader monthly in-services and group workshops that the whole team takes part in together as a shared learning activity.",
      },
      {
        question: "How do I find out more about CPD support before joining GRS?",
        answer:
          "The best approach is to raise it directly when you enquire or apply — start at /join-us to see current roles, or contact GRS to ask specifically how CPD support would apply to your discipline, experience level, and clinical interests going forward.",
      },
      {
        question: "Are CPD activities available to part-time and casual staff as well?",
        answer:
          "Yes, CPD support such as monthly clinical in-services and peer review sessions is generally available across the team regardless of employment type. Specifics on individual training funds or particular activities are best confirmed directly with GRS for your role.",
      },
    ],
  },
  {
    slug: "currrent-advertised-positions",
    title: "Current Advertised Positions",
    tagline: "See what's open right now.",
    overview:
      "Looking at current openings is often the most direct way to get a sense of where an organisation is growing and what it actually needs right now, and GRS keeps this list reflective of real, active hiring rather than evergreen placeholder ads. Our current open roles span Occupational Therapy, Psychology, and administrative support across our Queensland and NSW teams, giving a snapshot of the disciplines and locations where GRS is expanding its clinical and operational capacity at any given time. Because roles are reviewed and updated regularly, what's advertised here reflects genuine current need, whether that's a senior clinical position, a team leadership role, or entry points for clinicians newer to a particular stream. Beyond the specifics of any one role, it's worth knowing what other clinicians think of working here: GRS holds an Indeed Employer Rating of 4.4 out of 5, based on 31 reviews, which offers an independent, external perspective on day-to-day experience at GRS from people who've actually worked here, rather than relying solely on what an employer says about itself. If a role that fits isn't listed today, it's still worth reaching out, since positions open regularly across our growing Queensland and NSW teams.",
    approach:
      "Applying for a role at GRS generally starts with submitting an application against a specific advertised position, followed by a conversation with the team to talk through your experience, clinical interests, and what you're looking for next — much like any considered clinical recruitment process, rather than a purely transactional one. Because GRS builds roles around individual strengths through its career path model, conversations at this stage often go beyond the position description itself, exploring where you might sit within the clinical specialty, team leadership, or business development streams over time. Once you're on board, onboarding is designed to connect you with the right supervisory and team supports early, including being matched with a primary supervisor as part of the broader clinical supervision framework, rather than leaving you to find your feet alone. For clinicians who've experienced recruitment processes that feel impersonal or purely box-ticking, a process grounded in genuine conversation about fit, interests, and long-term direction — backed by an Indeed Employer Rating of 4.4 out of 5 from people who've been through it themselves — tends to stand out.",
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
    faqs: [
      {
        question: "How do I apply for one of the current open roles?",
        answer:
          "Visit /join-us to see the current advertised positions and apply directly, or get in touch with GRS if you'd like to ask a question before applying. Applications are generally reviewed against the specific advertised role, so it helps to check what's currently open first.",
      },
      {
        question: "Are new graduates considered for these roles?",
        answer:
          "It depends on the specific role advertised at the time — some positions suit more experienced clinicians, while others may suit newer graduates, particularly alongside GRS's clinical rotation and supervision structures. It's best to check the current listing or ask directly about a specific role.",
      },
      {
        question: "Does GRS offer relocation support for interstate applicants?",
        answer:
          "This isn't something specified generally on our current listings, so it's best to raise directly with GRS when you apply or enquire about a specific role, particularly given openings span both Queensland and NSW teams and circumstances may genuinely vary from one role to the next.",
      },
      {
        question: "What's the interview process generally like?",
        answer:
          "It typically involves a conversation about your experience, clinical interests, and what you're looking for in a role, rather than a purely procedural process. Exact steps can vary by position, so it's worth asking directly what to expect for the specific role you've applied for.",
      },
      {
        question: "If no current role suits me, should I still get in touch?",
        answer:
          "Yes — roles open up regularly across our Queensland and NSW teams, so reaching out even without a perfectly matching advertised position can be worthwhile. It lets GRS know you're interested ahead of time, ready for when a suitable opening does come up.",
      },
      {
        question: "How reliable is GRS's Indeed rating as a sign of what it's like to work there?",
        answer:
          "GRS holds an Indeed Employer Rating of 4.4 out of 5, based on 31 reviews, from people who've actually worked there. It's a genuine, independent data point worth weighing alongside your own conversations with the team during the application process.",
      },
      {
        question: "Are these roles open to clinicians currently living overseas?",
        answer:
          "This depends on the specific role, visa requirements, and registration considerations, which can vary considerably. If you're based overseas and interested in a current or future opening, it's best to reach out to GRS directly to discuss your situation.",
      },
    ],
  },
];

export function getCareer(slug: string) {
  return CAREERS.find((c) => c.slug === slug);
}
