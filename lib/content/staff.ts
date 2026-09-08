// Individual profile pages for GRS clinicians, following the Figma "Staff
// Profile Template" (see file "GRS-to-send", node 450-622). Rendered
// through the flat app/[slug]/page.tsx catch-all alongside disciplines,
// streams, locations, careers and assessments — see that file's header
// comment for why the URL stays flat rather than nested under /our-team/.
//
// Only populate an entry here once real bio content (about copy, training,
// qualifications, previous roles) has been confirmed for that person — the
// gradient placeholders on /our-team are fine to leave unlinked otherwise.
// Do not invent qualifications or employment history for a real staff
// member; leave them off this list until their content is supplied.
export interface StaffMember {
  slug: string;
  name: string;
  /** Short subtitle under the name, e.g. "QLD Psychology Team Leader · Psychologist" */
  role: string;
  /** Pills under the name — region, supervisor status, years of experience, etc. */
  badges: string[];
  /** Placeholder photo gradient (from/to Tailwind classes), matching the /our-team cards until real headshots exist */
  gradient: string;
  /** "About {firstName}" body copy, one paragraph per array entry */
  about: string[];
  trainingApproaches: string[];
  qualifications: string;
  previousRoles: string[];
}

export const STAFF: StaffMember[] = [
  {
    slug: "bronwyn-wright",
    name: "Bronwyn Wright",
    role: "QLD Psychology Team Leader · Psychologist",
    badges: ["QLD", "Approved Supervisor", "15+ years experience"],
    gradient: "from-orange-400 to-navy-950",
    about: [
      "Bronwyn has 15yrs experience working with mental health consumers with a variety of difficulties including anxiety, depression, bipolar affective disorder, borderline personality disorder, post traumatic stress disorder, eating disorders and psychotic disorders. She has a special interest in supporting people with emotional dysregulation build skills to obtain a ‘life worth living’.",
      "Bronwyn is a Psychology Board of Australia approved supervisor and is passionate about supporting her team to meet their potential. She draws on her previous leadership roles and training to promote a culture of excellence within the psychology team and across GRS.",
    ],
    trainingApproaches: [
      "Dialectical Behavioural Therapy",
      "Acceptance & Commitment Therapy",
      "Neuroscience of Mindfulness",
      "Trauma Counselling (complex PTSD)",
      "EMDR",
      "Emerging Clinical Leaders Program",
    ],
    qualifications: "Bachelor of Science / Bachelor of Psychology (Hons), James Cook University, 2002",
    previousRoles: [
      "Team Leader, Beenleigh Adult Mental Health, Qld Health",
      "Senior Psychologist, Beenleigh Adult Mental Health, Qld Health",
    ],
  },
];

export function getStaffMember(slug: string): StaffMember | undefined {
  return STAFF.find((s) => s.slug === slug);
}
