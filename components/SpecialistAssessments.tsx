import { ArrowRight, Car, ClipboardList, Home, Puzzle } from "lucide-react";
import Link from "next/link";

const ASSESSMENTS = [
  {
    icon: Car,
    title: "OT Driving Assessments",
    description:
      "On-road and off-road evaluations to determine safe driving capacity, with clear recommendations for licensing or vehicle modifications.",
  },
  {
    icon: ClipboardList,
    title: "Functional Capacity Assessments",
    description:
      "Independent evaluations of a person's function and support needs, delivered by experienced OTs to inform NDIS plans and reviews.",
  },
  {
    icon: Puzzle,
    title: "Autism Diagnostic Assessments",
    description:
      "ADOS-based diagnostic assessments led by our psychology team, with practical reports to guide next steps and support planning.",
  },
  {
    icon: Home,
    title: "Home Modification & Assistive Technology Assessments",
    description:
      "On-site evaluations of home and equipment needs, backed by our physical disability team's experience recommending practical solutions.",
  },
];

const [FEATURED, ...REST] = ASSESSMENTS;

export default function SpecialistAssessments() {
  const FeaturedIcon = FEATURED.icon;

  return (
    <section id="assessments" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Specialist Assessments
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
            Looking for a specific assessment?
          </h2>
          <p className="mt-4 text-slate-700">
            Access specialised allied health assessments with clear
            recommendations, practical reports and coordinated follow up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link
            href="/make-a-referral"
            className="bounce-transition group relative overflow-hidden rounded-3xl bg-navy-950 p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:col-span-3 lg:flex lg:items-center lg:justify-between lg:p-10"
          >
            <div
              aria-hidden
              className="blob-shape pointer-events-none absolute -right-10 -top-10 h-48 w-48 bg-orange-500/15 blur-3xl"
            />
            <div className="relative flex items-start gap-5 lg:items-center">
              <span className="blob-shape flex h-14 w-14 shrink-0 items-center justify-center bg-orange-500 text-white group-hover:animate-wiggle">
                <FeaturedIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {FEATURED.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  {FEATURED.description}
                </p>
              </div>
            </div>
            <span className="bounce-transition relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2 lg:mt-0 lg:shrink-0">
              Enquire now
              <span className="sr-only"> about {FEATURED.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {REST.map(({ icon: Icon, title, description }, index) => (
            <Link
              key={title}
              href="/make-a-referral"
              className={`bounce-transition group flex flex-col rounded-3xl bg-peach-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-xl ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <span className="blob-shape flex h-12 w-12 items-center justify-center bg-navy-900 text-white group-hover:animate-wiggle">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-navy-950">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                Enquire now
                <span className="sr-only"> about {title}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
