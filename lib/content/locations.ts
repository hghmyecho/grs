// Shared source of truth for all 4 location pages (Sydney, Brisbane, Gold
// Coast, Orange) — see lib/content/disciplines.ts for the same pattern.
// Orange is NEW: it's a real live-site location (grs.health/orange) that
// was missing entirely from the redesign's homepage Locations component
// until this pass — added here and wired into components/Locations.tsx.
// Content ported verbatim (lightly tidied) from the live grs.health
// location pages, Aug 2026.
export interface Location {
  slug: string;
  city: string;
  state: string;
  address: string;
  gradient: string;
  image?: string;
  phone: string;
  serviceArea: string;
  servicesOffered: string[];
  transport: string;
  parking: string;
  clinicNote?: string;
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
  },
  {
    slug: "orange",
    city: "Orange",
    state: "NSW",
    address: "113 Moulder Street, Orange NSW 2800",
    gradient: "from-navy-500 to-orange-500",
    phone: "1300 066 716",
    serviceArea:
      "Home-based and clinic services for Greater Orange residents, including adult and paediatric therapeutic support.",
    servicesOffered: [
      "Occupational Therapy",
      "Speech Pathology (including Early Childhood Intervention)",
    ],
    clinicNote: "Co-located with the Kids HQ clinic.",
    transport:
      "About a 4-minute walk from the nearby bus & train station (Orange Station) — journey planning available via the NSW Transport Planner.",
    parking: "2 hours' free street parking available at Moulder Street.",
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
