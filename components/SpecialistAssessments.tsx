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
    slug: "functional-capacity-assessments",
  },
  {
    icon: Puzzle,
    title: "Autism Diagnostic Assessments",
    description:
      "ADOS-based diagnostic assessments led by our psychology team, with practical reports to guide next steps and support planning.",
    slug: "autism-diagnostic-assessments",
  },
  {
    icon: Home,
    title: "Home Modification & Assistive Technology Assessments",
    description:
      "On-site evaluations of home and equipment needs, backed by our physical disability team's experience recommending practical solutions.",
    slug: "home-modification-assistive-technology-assessments",
  },
];

const [FEATURED, ...REST] = ASSESSMENTS;

export default function SpecialistAssessments() {
  const FeaturedIcon = FEATURED.icon;

  return (
    <section id="assessments" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow-script">Specialist Assessments</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Looking for a specific assessment?
          </h2>
          <p className="mt-4 text-charcoal/80">
            Access specialised allied health assessments with clear
            recommendations, practical reports and coordinated follow up.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Link
            href="/make-a-referral"
            className="bounce-transition group relative overflow-hidden rounded-3xl bg-navy-800 p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl lg:col-span-3 lg:flex lg:items-center lg:justify-between lg:p-10"
          >
            <div
              aria-hidden
              className="blob-shape pointer-events-none absolute -right-10 -top-10 h-48 w-48 bg-flame/15 blur-3xl"
            />
            <div className="relative flex items-start gap-5 lg:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-honey text-white group-hover:animate-wiggle">
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
            <span className="bounce-transition relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2 lg:mt-0 lg:shrink-0">
              Enquire now
              <span className="sr-only"> about {FEATURED.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>

          {REST.map(({ icon: Icon, title, description, slug }, index) => (
            <Link
              key={title}
              href={`/${slug}`}
              className={`bounce-transition group relative flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div
                aria-hidden
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-3xl bg-honey"
              />
              <div className="relative flex flex-1 flex-col rounded-3xl border-2 border-honey bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-honey text-white group-hover:animate-wiggle">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/80">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-rust">
                  Learn more
                  <span className="sr-only"> about {title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
