import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the clinicians and staff behind Global Rehabilitation Service — a multidisciplinary team of occupational therapists, physiotherapists, speech pathologists, psychologists and more across NSW & QLD.",
  alternates: { canonical: "/our-team" },
};

const LEADERSHIP = [
  {
    name: "Haozhi (Nick) Jiang",
    role: "Founder, Business Development Manager, Occupational Therapist",
    gradient: "from-navy-700 to-navy-950",
  },
  {
    name: "Howard Law",
    role: "Co-Founder, NSW Service Manager, Occupational Therapist",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    name: "Dan Bock",
    role: "QLD Service Manager, Occupational Therapist",
    gradient: "from-peach-200 to-orange-400",
  },
  {
    name: "Marco Chan",
    role: "NSW OT Team Lead — Psychosocial",
    gradient: "from-navy-500 to-navy-900",
  },
  {
    name: "Kristin McConkey",
    role: "QLD Assistant Service Manager, Speech Pathology Team Leader",
    gradient: "from-orange-500 to-navy-700",
  },
  {
    name: "Rachael Truong",
    role: "NSW Physiotherapy Team Leader",
    gradient: "from-navy-950 to-orange-600",
  },
  {
    name: "Lorie Koll",
    role: "NSW SLP Team Lead & Clinical Educator",
    gradient: "from-peach-200 to-navy-700",
  },
  {
    name: "Bronwyn Wright",
    role: "QLD Psychology Team Leader, Psychologist",
    gradient: "from-orange-400 to-navy-950",
  },
];

const SENIOR_CLINICIANS = [
  "Tarryn Kleinert — Senior Occupational Therapist, Physical",
  "Vinod Kanthan — Senior Physiotherapist",
  "Macarena Zamorano — Senior Occupational Therapist, Psychosocial",
  "Ryan Ip — Senior Occupational Therapist",
  "Skye Kembery — Senior Occupational Therapist, Psychosocial",
  "Priscilla Ho — Senior Occupational Therapy Team Clinical Educator",
  "Yogeshni Rao — Senior Speech Pathologist",
  "Joy Liu — NSW Occupational Therapy Clinical Lead, Paediatrics",
  "Minami Nakaseko — Senior Speech Pathologist",
  "Hong Bi — Senior Occupational Therapist, Paediatric",
  "Clement Tang — Senior Occupational Therapist, Driving Assessor",
];

const GENERAL_CLINICIANS = [
  "Laura Tran — Exercise Physiologist",
  "Hannah Pascoe — Dietitian",
  "Jasmine Lee — Speech Pathologist",
  "Sophia Dwyer — Speech Pathologist",
  "Amelia Dinjar — Occupational Therapist",
  "Jaimison Simpson — Occupational Therapist",
  "Ellie Gibson — Occupational Therapist",
  "Mimi McCauley — Occupational Therapist",
  "Georgia Prichard — Speech Pathologist",
  "Shane Trevorrow — Occupational Therapist",
  "Ashley Glennie — Registered Psychologist",
  "Emily Williams — Registered Psychologist",
  "Teri Gallivan — Registered Psychologist",
  "Mark Hellmrick — Music Therapist",
  "Daisy Leung — Occupational Therapist",
  "Wendy Dolan — Registered Psychologist",
  "Chantel Preston — Occupational Therapist",
  "Karina Lai — Speech Pathologist",
  "Laura Neufeld — Speech Pathologist",
  "Latisha Branch — Speech Pathologist",
  "Monica Nguyen — Speech Pathologist",
  "Kevin Lim — Physiotherapist",
];

const ADMIN_TEAM = [
  "Nina Papadopoulos — Senior Administrative Officer",
  "Molly Trost — Senior Administrative Officer",
  "Leticia Shirai Mendes — Administration Officer",
  "Mia Bock — Administrative Officer",
];

function StaffList({ title, people }: { title: string; people: string[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-navy-950">
        {title}
      </h2>
      <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm text-slate-700 sm:grid-cols-2">
        {people.map((person) => {
          const [name, role] = person.split(" — ");
          return (
            <li key={person} className="leading-relaxed">
              <span className="font-semibold text-navy-950">{name}</span>
              {role ? <span> — {role}</span> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Our Team
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            The people behind your care
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Our team is made up of individuals from diverse cultural,
            linguistic, and professional backgrounds and age groups. We are
            proud of each other and support each other as a team, with one
            goal: to provide the highest quality interventions possible.
          </p>
        </div>
      </section>

      <section className="bg-peach-100 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
              Leadership
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
              Management clinicians
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map(({ name, role, gradient }) => (
              <div
                key={name}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className={`h-32 bg-gradient-to-br ${gradient}`} />
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-navy-950">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          <StaffList title="Senior Clinicians" people={SENIOR_CLINICIANS} />
          <StaffList title="General Clinicians" people={GENERAL_CLINICIANS} />
          <StaffList
            title="Administration & Accounting Team"
            people={ADMIN_TEAM}
          />

          <div className="rounded-2xl bg-peach-100 p-8 text-center">
            <h2 className="font-display text-xl font-bold text-navy-950">
              Interested in joining GRS?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-700">
              We&apos;re always looking for clinicians who share our
              commitment to quality, evidence-based, client-directed care.
            </p>
            <a
              href="mailto:info@grs.health"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-800"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
