// Shared source of truth for all 3 location pages (Sydney, Brisbane, Gold
// Coast) — see lib/content/disciplines.ts for the same pattern. Original
// short-form content ported verbatim (lightly tidied) from the live
// grs.health location pages, Aug 2026. Orange was added during the Aug 14
// 2026 pass, then removed a few days later — GRS no longer operates that
// outpost. `overview`/`approach`/`faqs` added Aug 20 2026 for SEO
// word-count/E-E-A-T depth — these pages previously had no long-form body
// copy at all, just the address/services/transport facts below.
import type { FaqItem } from "@/lib/schema";

export interface Location {
  slug: string;
  city: string;
  state: string;
  address: string;
  gradient: string;
  image?: string;
  phone: string;
  serviceArea: string;
  overview: string;
  approach: string;
  servicesOffered: string[];
  transport: string;
  parking: string;
  clinicNote?: string;
  faqs: FaqItem[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "sydney",
    city: "Sydney",
    state: "NSW",
    address: "Suite 102, 63 Parramatta Road, Silverwater NSW 2128",
    gradient: "from-navy-700 to-navy-950",
    image: "/photos/location-sydney.jpg",
    phone: "1300 066 716",
    serviceArea:
      "Home-based services across Sydney from Hornsby (north) to Sutherland (south), Cabramatta (west) to Manly (east), plus clinic-based services at Silverwater.",
    overview:
      "GRS Sydney supports NDIS participants and their families across Greater Sydney, from Hornsby in the north to Sutherland in the south, and from Cabramatta in the west to Manly in the east. Our team blends home-based visits, where therapists come to you in your own environment, with clinic-based sessions at our Silverwater location for those who prefer to attend in person. Set within Gateway Business Park's Small Tower, the Silverwater clinic includes a large sensory and physio gym, giving participants access to purpose-built equipment alongside their everyday supports. Whether you are newly approved for NDIS funding or looking to change providers, our multidisciplinary team brings together Occupational Therapy, Physiotherapy, Speech Pathology, Dietetics, Music Therapy and Art Therapy, making it easier to coordinate care across the different goals in your plan. We work with participants of all ages, alongside the families, carers and support coordinators around them, to build supports that fit real life rather than a fixed template. Whether you are new to GRS or new to the NDIS altogether, you can expect a warm welcome, clear communication, and a team genuinely interested in understanding what matters to you before recommending a way forward together.",
    approach:
      "At GRS Sydney, Occupational Therapy, Physiotherapy, Speech Pathology, Dietetics, Music Therapy and Art Therapy work together rather than in isolation. Where a participant's plan includes several supports, our clinicians share observations and adjust their own input so therapy goals reinforce one another instead of pulling in different directions. Every plan of support starts with what matters to the person and their family, then maps back to the goals in their NDIS plan. We stay in regular contact with support coordinators, plan managers, families and carers, so everyone understands what is happening and why. Because we offer both home visits and clinic-based sessions at Silverwater, we can move between the two as circumstances change, using the sensory and physio gym when it adds value, and meeting people at home when that suits them better. The result is a flexible, joined-up approach built around the person, not around a single service in isolation.",
    servicesOffered: [
      "Occupational Therapy",
      "Physiotherapy",
      "Speech Pathology",
      "Dietetics",
      "Music Therapy",
      "Art Therapy",
    ],
    clinicNote:
      "The Silverwater clinic (Gateway Business Park, Small Tower) features a large sensory and physio gym in a newly established facility.",
    transport:
      "Accessible by bus or Lidcombe Station.",
    parking:
      "Free onsite visitor parking and street parking on Wetherill St. South and Adderley St. East, with additional parking at Auburn Redyard Shopping Complex across the street.",
    faqs: [
      {
        question: "What areas does GRS Sydney service?",
        answer:
          "We provide home-based services right across Sydney, from Hornsby in the north to Sutherland in the south, and Cabramatta in the west to Manly in the east. We also offer clinic-based appointments at our Silverwater location for participants and families who prefer to attend in person rather than have a therapist visit at home.",
      },
      {
        question: "What services are available at the Sydney location?",
        answer:
          "GRS Sydney offers Occupational Therapy, Physiotherapy, Speech Pathology, Dietetics, Music Therapy and Art Therapy. Depending on your NDIS plan, you can access one or several of these supports through the same team, which can make it easier to coordinate care when your goals span more than one discipline.",
      },
      {
        question: "Is parking available at the Silverwater clinic?",
        answer:
          "Yes. There is free onsite visitor parking as well as street parking on Wetherill Street South and Adderley Street East. Additional parking is also available across the road at the Auburn Redyard Shopping Complex, so there are several convenient options if you are attending an appointment in person.",
      },
      {
        question: "How do I get to the clinic without a car?",
        answer:
          "The Silverwater clinic is accessible by bus, and Lidcombe Station is also within reach for those travelling by train. If you are unsure of the best route from your area, our team can help point you in the right direction when you book your appointment.",
      },
      {
        question: "Do you offer home visits, or only clinic appointments?",
        answer:
          "Both. Most participants receive home-based support, with a therapist visiting them where they feel most comfortable, while others prefer to attend the Silverwater clinic, which includes a large sensory and physio gym. You can discuss which option, or combination, suits you best with our team.",
      },
      {
        question: "How do I get started with GRS Sydney?",
        answer:
          "You can get in touch with our team by calling 1300 066 716, or arrange a referral through your support coordinator, plan manager or GP. We will talk through your NDIS plan and goals with you and help work out which services and delivery style best suit your circumstances.",
      },
      {
        question: "Can I switch between the Silverwater clinic and home visits over time?",
        answer:
          "Yes, many participants use a mix of both, choosing clinic-based sessions at Silverwater for some appointments and home visits for others, depending on what suits them at the time. Our team can help arrange whichever combination works best for your circumstances.",
      },
    ],
  },
  {
    slug: "brisbane",
    city: "Brisbane",
    state: "QLD",
    address: "8 Mayfield Road, Moorooka QLD 4105",
    gradient: "from-orange-400 to-orange-600",
    image: "/photos/location-brisbane.jpg",
    phone: "1300 066 716",
    serviceArea:
      "Home-based services throughout Greater Brisbane, covering suburbs from Redcliffe (north) to Mt Gravatt (south), Ipswich (west), and the Redlands (east).",
    overview:
      "GRS Brisbane supports NDIS participants and their families right across Greater Brisbane, from Redcliffe in the north to Mt Gravatt in the south, out to Ipswich in the west and the Redlands in the east. Our team is based at Moorooka and delivers home-based therapy, visiting participants where they feel most comfortable, whether that is at home, at school, or out in the community. Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support all sit under one roof at GRS Brisbane, which means participants with several supports written into their plan can draw on a genuinely multidisciplinary team rather than juggling separate providers. We work with children, adults and older participants, and with the family members, carers and support coordinators who support them day to day. If you are just starting out with the NDIS, changing providers, or simply looking for a team that will take the time to understand your goals, GRS Brisbane offers a welcoming, practical starting point. Our focus is on building trust early, listening carefully to what participants and families want to achieve, and turning that into supports that make a genuine difference in everyday life across Brisbane and its surrounding suburbs.",
    approach:
      "At GRS Brisbane, Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support work as a connected team rather than as separate services. Where a participant has more than one type of support in their plan, our clinicians communicate regularly so strategies line up rather than conflict. Planning starts with the participant and their family, identifying what really matters to them, then linking that back to the specific goals in their NDIS plan. We keep support coordinators, plan managers and family members informed as things progress, so decisions are made together rather than in isolation. Because our therapists deliver services in the home, at school or out in the community, support can be shaped around each participant's routine rather than asking families to fit around ours. This person-centred, collaborative way of working underpins everything we do at GRS Brisbane, from the first conversation through to ongoing therapy.",
    servicesOffered: [
      "Occupational Therapy",
      "Psychology",
      "Speech Pathology",
      "Dietetics",
      "Specialist Behaviour Support",
    ],
    transport:
      "Accessible by bus (5-minute walk) or Moorooka Station train (approximately 20-minute walk).",
    parking:
      "Four reserved free customer parking spaces onsite, plus free street parking nearby on Goodwin Terrace and Mayfield Road with unlimited hours.",
    faqs: [
      {
        question: "What areas does GRS Brisbane service?",
        answer:
          "We provide home-based services throughout Greater Brisbane, covering suburbs from Redcliffe in the north to Mt Gravatt in the south, out to Ipswich in the west and across to the Redlands in the east. If you are unsure whether your suburb falls within this range, our team can confirm this when you get in touch.",
      },
      {
        question: "What services are available through GRS Brisbane?",
        answer:
          "GRS Brisbane offers Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support. Many participants access more than one of these supports at a time, and having them delivered by one connected team can make coordinating care across different NDIS goals much simpler.",
      },
      {
        question: "Is parking available near the Moorooka office?",
        answer:
          "Yes. There are four reserved free customer parking spaces onsite, plus free street parking nearby on Goodwin Terrace and Mayfield Road with unlimited hours. This makes it straightforward for families and support workers visiting the office for meetings or appointments.",
      },
      {
        question: "How accessible is the office by public transport?",
        answer:
          "The Moorooka office is accessible by bus, roughly a five-minute walk away, and by train via Moorooka Station, which is around a twenty-minute walk. If public transport is your main option, it is worth factoring in this walking time when planning your visit.",
      },
      {
        question: "Do GRS Brisbane therapists come to my home?",
        answer:
          "Yes, home-based support is central to how GRS Brisbane works. Our therapists visit participants at home, at school, or in the community, wherever they feel most comfortable and where therapy is likely to be most effective, rather than requiring families to travel for every appointment.",
      },
      {
        question: "How do I start receiving support from GRS Brisbane?",
        answer:
          "You can call our team on 1300 066 716, or ask your support coordinator, plan manager or GP to make a referral on your behalf. From there, we will discuss your NDIS plan and goals with you to work out which services and approach will suit you best.",
      },
      {
        question: "Can GRS Brisbane support participants who live outside the specified suburbs?",
        answer:
          "If you're just outside the usual service area listed, it's still worth getting in touch, as coverage can extend depending on individual circumstances and team availability. Our team can confirm whether home-based support is available in your specific location.",
      },
    ],
  },
  {
    slug: "goldcoast",
    city: "Gold Coast",
    state: "QLD",
    address: "1C/34 High Street, Southport QLD 4215",
    gradient: "from-peach-200 to-orange-400",
    image: "/photos/location-goldcoast.jpg",
    phone: "1300 066 716",
    serviceArea:
      "Home-based services across Northern NSW and the Greater Gold Coast area, spanning from Beenleigh to Tweed Heads, with a fully equipped clinic in Southport as an alternative to in-home appointments.",
    overview:
      "GRS Gold Coast supports NDIS participants and families across the Greater Gold Coast and Northern NSW, spanning from Beenleigh in the north down to Tweed Heads in the south. Our team offers both home-based visits, where a therapist comes to you, and clinic-based appointments at our fully equipped Southport clinic for those who prefer or need to attend in person. Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support are all available at this location, giving participants with multiple supports in their plan access to a genuinely joined-up team. Whether you are new to the NDIS, relocating to the region, or looking for a provider who will take the time to understand your goals, GRS Gold Coast aims to make that first step straightforward and welcoming. We work with participants across all ages, alongside the families, carers and support coordinators who help guide their journey. Southport's central location makes the clinic an easy option for those who live nearby or are already travelling into town, while our home-based team continues to reach participants further afield across the Gold Coast and into Northern NSW, wherever they feel most comfortable receiving support.",
    approach:
      "At GRS Gold Coast, Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support work together as one team rather than as separate, disconnected services. Where a participant's plan includes several supports, our clinicians communicate regularly so strategies build on one another instead of working at cross purposes. Every plan of support begins with the person and their family, exploring what genuinely matters to them, then linking that back to the goals set out in their NDIS plan. We stay in close contact with support coordinators, plan managers and families throughout, so everyone is working from the same page. Because we offer both home visits and clinic-based sessions at Southport, we can move between the two as needs change, using the clinic when it suits and visiting participants at home when that works better for them. This flexible, collaborative approach is central to how GRS Gold Coast supports the community.",
    servicesOffered: [
      "Occupational Therapy",
      "Psychology",
      "Speech Pathology",
      "Dietetics",
      "Specialist Behaviour Support",
    ],
    transport:
      "Nerang St Station is accessible by bus or light rail, a 5-minute walk behind the clinic on Nerang Street.",
    parking:
      "2 hours of free customer parking onsite, 2-hour street parking on Little High Street, and Athol Patterson Park Car Park nearby (from $2/hour, up to $6/day).",
    faqs: [
      {
        question: "What areas does GRS Gold Coast service?",
        answer:
          "We provide home-based services across the Greater Gold Coast and Northern NSW, spanning from Beenleigh in the north down to Tweed Heads in the south. We also offer clinic-based appointments at our Southport location for participants who prefer to attend in person rather than have a therapist visit at home.",
      },
      {
        question: "What services are offered at the Gold Coast location?",
        answer:
          "GRS Gold Coast offers Occupational Therapy, Psychology, Speech Pathology, Dietetics and Specialist Behaviour Support. Depending on your NDIS plan, you may access one or several of these through the same team, which can make coordinating support across different goals considerably easier.",
      },
      {
        question: "Is there parking at the Southport clinic?",
        answer:
          "Yes. There are 2 hours of free customer parking onsite and 2-hour street parking on Little High Street. Athol Patterson Park Car Park is also nearby, with rates from $2 per hour up to $6 per day, giving you a few options depending on how long you need.",
      },
      {
        question: "How do I reach the clinic by public transport?",
        answer:
          "Nerang St Station is a short, roughly five-minute walk behind the clinic on Nerang Street, and is accessible by both bus and light rail. This makes the Southport clinic a convenient option for participants and families travelling in from across the Gold Coast.",
      },
      {
        question: "Can I choose between home visits and clinic appointments?",
        answer:
          "Yes. GRS Gold Coast offers both, so you can have a therapist visit you at home or attend our fully equipped Southport clinic instead, whichever suits your circumstances best. Some participants use a mix of both, depending on the type of support and how they are feeling.",
      },
      {
        question: "How do I get started with GRS Gold Coast?",
        answer:
          "You can contact our team directly on 1300 066 716, or ask your support coordinator, plan manager or GP to arrange a referral. We will then talk through your NDIS plan and goals with you to work out which services and delivery option will suit you best.",
      },
      {
        question: "Does GRS Gold Coast support clients in Northern NSW as well as Queensland?",
        answer:
          "Yes, the Gold Coast team's service area extends into Northern NSW, reaching as far as Tweed Heads, alongside the Greater Gold Coast region. This cross-border coverage means participants don't need to worry about which side of the border they're on.",
      },
    ],
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
