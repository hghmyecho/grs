import type { Metadata } from "next";
import Image from "next/image";
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
      {/* Full-bleed photo banner hero — matching the style of the location
          pages' hero (components/templates/LocationPage.tsx), per the
          client's request (Sep 2026) to reuse that look here. Text content
          unchanged from the original rounded-card hero, only the styling
          and layout changed. No dedicated governance photo exists (Figma's
          own layer here is an unfilled "Photography placeholder"), so this
          reuses the real GRS team photo, same fallback used for Sydney's
          team photo band. */}
      <section className="relative overflow-hidden bg-navy-800 py-16 lg:py-24">
        <Image
          src="/photos/hero-team-2026.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_right,#14304f_33%,rgba(20,48,79,0.64)_51%,rgba(20,48,79,0)_66%)]"
        />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[28px] font-extrabold text-honey">Governance</span>
          <h1
            className="mt-3 text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Corporate governance built for accountability and care
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Our governance framework provides a balance between
            performance, accountability, and quality — supporting
            optimal clinical outcomes, efficient use of resources, and
            ethical decision-making across GRS.
          </p>
        </div>
      </section>

      <section className="bg-tan px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-honey bg-white p-8 text-center shadow-sm"
              >
                <Icon className="mx-auto h-10 w-10 text-charcoal" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-lg font-bold text-charcoal">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tan px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <span className="eyebrow-script">
              Our Committees
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-charcoal sm:text-3xl">
              Who oversees what
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {COMMITTEES.map(({ acronym, name, description }) => (
              <div key={acronym} className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-rust font-display text-sm font-bold text-white">
                  {acronym}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-charcoal">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
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
