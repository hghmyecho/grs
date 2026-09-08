import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { GROUP_LABELS, getTeamByGroup, type TeamMember } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the clinicians and staff behind Global Rehabilitation Service — a multidisciplinary team of occupational therapists, physiotherapists, speech pathologists, psychologists and more across NSW & QLD.",
  alternates: { canonical: "/our-team" },
};

function LeadershipGrid({ people }: { people: TeamMember[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {people.map(({ slug, name, role, gradient, hasProfile }) => {
        const card = (
          <>
            <div className={`h-32 bg-gradient-to-br ${gradient}`} />
            <div className="p-6">
              <h3 className="font-display text-base font-bold text-charcoal">{name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-charcoal/80">{role}</p>
            </div>
          </>
        );

        const className = "flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm";

        return hasProfile ? (
          <Link
            key={slug}
            href={`/${slug}`}
            className={`${className} transition-shadow hover:shadow-md`}
          >
            {card}
          </Link>
        ) : (
          <div key={slug} className={className}>
            {card}
          </div>
        );
      })}
    </div>
  );
}

function StaffList({ title, people }: { title: string; people: TeamMember[] }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-charcoal">{title}</h2>
      <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm text-charcoal/80 sm:grid-cols-2">
        {people.map(({ slug, name, role, hasProfile }) => (
          <li key={slug} className="leading-relaxed">
            {hasProfile ? (
              <Link href={`/${slug}`} className="font-semibold text-charcoal hover:underline">
                {name}
              </Link>
            ) : (
              <span className="font-semibold text-charcoal">{name}</span>
            )}
            {role ? <span> — {role}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OurTeamPage() {
  const leadership = getTeamByGroup("leadership");
  const senior = getTeamByGroup("senior");
  const general = getTeamByGroup("general");
  const admin = getTeamByGroup("admin");

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Team", href: "/our-team" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
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

      <section className="bg-tan px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="eyebrow-script">
              Leadership
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Management clinicians
            </h2>
          </div>

          <LeadershipGrid people={leadership} />
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          <StaffList title={GROUP_LABELS.senior} people={senior} />
          <StaffList title={GROUP_LABELS.general} people={general} />
          <StaffList title={GROUP_LABELS.admin} people={admin} />

          <div className="rounded-2xl bg-tan p-8 text-center">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Interested in joining GRS?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-charcoal/80">
              We&apos;re always looking for clinicians who share our
              commitment to quality, evidence-based, client-directed care.
            </p>
            <a
              href="mailto:info@grs.health"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
