// Shared source of truth for site navigation — consumed by both
// components/Header.tsx (mega-menu) and components/Footer.tsx (sitemap
// columns), so the footer always mirrors whatever's in the header nav
// without the two lists drifting apart.
import {
  BookOpen,
  Briefcase,
  Calculator,
  FileText,
  Layers,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

export const NAV_LINKS: NavGroup[] = [
  {
    label: "About Us",
    href: "#about",
    items: [
      {
        label: "Our Story",
        description: "How GRS started and where we're headed",
        href: "/our-story",
        icon: BookOpen,
      },
      {
        label: "Our Team",
        description: "Meet the clinicians behind your care",
        href: "/our-team",
        icon: Users,
      },
      {
        label: "Governance",
        description: "Clinical governance and quality standards",
        href: "/our-governance",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "Our Services",
    href: "#services",
    items: [
      {
        label: "Clinical Streams",
        description: "Physical disability, paediatrics, and more",
        href: "#services",
        icon: Layers,
      },
      {
        label: "Disciplines",
        description: "OT, physiotherapy, speech pathology, and more",
        href: "#services",
        icon: Stethoscope,
      },
      {
        label: "Funding Streams",
        description: "NDIS, Medicare, and private funding options",
        href: "/funding-stream",
        icon: Wallet,
      },
    ],
  },
  {
    label: "Locations",
    href: "#locations",
    items: [
      {
        label: "Sydney",
        description: "Our founding clinic, NSW",
        href: "/sydney",
        icon: MapPin,
      },
      {
        label: "Brisbane",
        description: "South East Queensland",
        href: "/brisbane",
        icon: MapPin,
      },
      {
        label: "Gold Coast",
        description: "Community & clinic-based support",
        href: "/goldcoast",
        icon: MapPin,
      },
      {
        label: "Travel Fees Calculator",
        description: "Estimate community visit costs",
        href: "/calculator",
        icon: Calculator,
      },
    ],
  },
  {
    label: "Careers",
    href: "/join-us",
    items: [
      {
        label: "Join Us",
        description: "Career development at GRS",
        href: "/join-us",
        icon: Sparkles,
      },
      {
        label: "Career Path",
        description: "Transparent roles and progression",
        href: "/career-path",
        icon: Briefcase,
      },
      {
        label: "Current Positions",
        description: "See what's open right now",
        href: "/currrent-advertised-positions",
        icon: FileText,
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    items: [
      {
        label: "Make a Referral",
        description: "Start the referral process",
        href: "/make-a-referral",
        icon: FileText,
      },
      {
        label: "Feedback",
        description: "Share a compliment or concern",
        href: "/feedback-and-complaint",
        icon: MessageSquare,
      },
    ],
  },
];
