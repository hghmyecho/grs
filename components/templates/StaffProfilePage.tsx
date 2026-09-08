import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { StaffPageContent } from "@/lib/content/team";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { personSchema, schemaGraph } from "@/lib/schema";

// Matches the Figma "Staff Profile Template" (file "GRS-to-send", node
// 450-622): a light header (photo + name + badges) rather than the navy
// hero band the discipline/stream/location/career templates use, since
// this is a person's profile, not a service page. Section headings reuse
// the sitewide .eyebrow-script treatment full-size (as in the Figma) —
// elsewhere that class is a small label above a bold h1/h2, but here it
// *is* the heading.
export default function StaffProfilePage({ staff }: { staff: StaffPageContent }) {
  const { slug, name, role, badges, gradient, about, trainingApproaches, qualifications, previousRoles } =
    staff;
  const firstName = name.split(" ")[0];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" },
    { name, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={schemaGraph(personSchema({ name, jobTitle: role, url: `/${slug}` }))}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-tan px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div
              className={`h-32 w-32 shrink-0 rounded-2xl bg-gradient-to-br ${gradient} sm:h-36 sm:w-36`}
            />
            <div>
              <h1 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
                {name}
              </h1>
              <p className="mt-1.5 text-sm text-charcoal/70 sm:text-base">{role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-charcoal/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl divide-y divide-charcoal/10">
          <div className="pb-10">
            <span className="eyebrow-script">About {firstName}</span>
            <div className="mt-4 space-y-4">
              {about.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-charcoal/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="py-10">
            <span className="eyebrow-script">Training &amp; Approaches</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {trainingApproaches.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-honey/40 px-3.5 py-1.5 text-xs font-semibold text-honey"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 pt-10 sm:grid-cols-2">
            <div>
              <span className="eyebrow-script">Qualifications</span>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{qualifications}</p>
            </div>
            <div>
              <span className="eyebrow-script">Previous Roles</span>
              <ul className="mt-4 space-y-1.5">
                {previousRoles.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-charcoal/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
