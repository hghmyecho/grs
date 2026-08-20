import type { Metadata } from "next";
import { ClipboardList, FileCheck, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Our Governance",
  description:
    "How Global Rehabilitation Service governs clinical and business decisions — our governance committees, policies, and procedures.",
  alternates: { canonical: "/our-governance" },
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Governance Committees",
    description:
      "Bodies that support the Director's leadership and enable effective decision-making around GRS's objectives and operations.",
  },
  {
    icon: FileCheck,
    title: "Policies",
    description:
      "Documents that establish the principles, responsibilities, and accountabilities guiding our clinical and administrative service delivery.",
  },
  {
    icon: ClipboardList,
    title: "Procedures",
    description:
      "Supporting documents that implement how each policy operates and is applied in practice.",
  },
];

const COMMITTEES = [
  {
    acronym: "GPCC",
    name: "Group Policy and Compliance Committee",
    description:
      "Offers assurance regarding compliance management and internal and external accountability, aligned with legislation and standards.",
  },
  {
    acronym: "CERC",
    name: "Clinical Excellence and Risk Management Committee",
    description:
      "Directs clinical excellence and risk management efforts, focused on optimising service-user outcomes, safety improvements, evidence-based practice, and multidisciplinary collaboration.",
  },
  {
    acronym: "FBMC",
    name: "Finance and Business Management Committee",
    description:
      "Reports to the Director on strategic resource decisions, budget development, financial controls, funding risks, and business project development.",
  },
];

export default function OurGovernancePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Governance", href: "/our-governance" }]} />
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Governance
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Corporate governance built for accountability and care
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Our governance framework provides a balance between performance,
            accountability, and quality — supporting optimal clinical
            outcomes, efficient use of resources, and ethical decision-making
            across GRS.
          </p>
        </div>
      </section>

      <section className="bg-peach-100 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-lg font-bold text-navy-950">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
              Our Committees
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-950 sm:text-3xl">
              Who oversees what
            </h2>
          </div>

          <div className="mt-10 space-y-6">
            {COMMITTEES.map(({ acronym, name, description }) => (
              <div
                key={acronym}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-8 sm:flex-row sm:items-start"
              >
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-navy-950 font-display text-sm font-bold text-white">
                  {acronym}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-950">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
