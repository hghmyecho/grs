// Single source of truth for everyone listed on /our-team, managed by
// Nick (or any admin) through the passphrase-gated /team-editor rather
// than by editing code — see lib/team/store.ts for how a save there
// commits lib/content/team-data.json straight to master (same pattern as
// lib/theme/store.ts's color editor).
import teamData from "./team-data.json";

export type TeamGroup = "leadership" | "senior" | "general" | "admin";

export const GROUPS: TeamGroup[] = ["leadership", "senior", "general", "admin"];

export const GROUP_LABELS: Record<TeamGroup, string> = {
  leadership: "Leadership",
  senior: "Senior Clinicians",
  general: "General Clinicians",
  admin: "Administration & Accounting Team",
};

export interface StaffProfile {
  /** Pills under the name — region, supervisor status, years of experience, etc. */
  badges: string[];
  /** "About {firstName}" body copy, one paragraph per array entry */
  about: string[];
  trainingApproaches: string[];
  qualifications: string;
  previousRoles: string[];
}

export interface TeamMember {
  /** Stable id used as the React key and, when hasProfile is true, the /[slug] URL. Kebab-case, unique. */
  slug: string;
  name: string;
  /** Short subtitle shown next to the name everywhere this person appears */
  role: string;
  group: TeamGroup;
  /** Placeholder photo gradient (Tailwind from/to classes) — see GRADIENT_OPTIONS */
  gradient: string;
  hasProfile: boolean;
  profile?: StaffProfile;
}

/** Preset gradient swatches offered in the team editor, matching the brand palette already in use across the leadership cards. */
export const GRADIENT_OPTIONS: { classes: string; label: string }[] = [
  { classes: "from-navy-700 to-navy-950", label: "Navy" },
  { classes: "from-orange-400 to-orange-600", label: "Orange" },
  { classes: "from-peach-200 to-orange-400", label: "Peach → Orange" },
  { classes: "from-navy-500 to-navy-900", label: "Navy (mid)" },
  { classes: "from-orange-500 to-navy-700", label: "Orange → Navy" },
  { classes: "from-navy-950 to-orange-600", label: "Navy → Orange" },
  { classes: "from-peach-200 to-navy-700", label: "Peach → Navy" },
  { classes: "from-orange-400 to-navy-950", label: "Orange (deep)" },
];

export const TEAM: TeamMember[] = teamData as TeamMember[];

export function getTeamByGroup(group: TeamGroup): TeamMember[] {
  return TEAM.filter((m) => m.group === group);
}

/** Flattened shape consumed by components/templates/StaffProfilePage.tsx */
export interface StaffPageContent {
  slug: string;
  name: string;
  role: string;
  gradient: string;
  badges: string[];
  about: string[];
  trainingApproaches: string[];
  qualifications: string;
  previousRoles: string[];
}

export function getStaffProfile(slug: string): StaffPageContent | undefined {
  const member = TEAM.find((m) => m.slug === slug);
  if (!member || !member.hasProfile || !member.profile) return undefined;

  return {
    slug: member.slug,
    name: member.name,
    role: member.role,
    gradient: member.gradient,
    ...member.profile,
  };
}
