import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CAREERS, type CareerPage } from "@/lib/content/careers";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Career development at Global Rehabilitation Service — clinical supervision, career pathways, professional development, clinical rotations, and current opportunities.",
  alternates: { canonical: "/join-us" },
};

/**
 * Display order + photo placement matches the Figma "Join Us" page
 * (GRS-to-send) — a staggered card wall where only Clinical Supervision
 * and Continued Professional Development carry a photo. No real photo
 * assets exist for career content yet, so those two use the same
 * gradient-placeholder pattern as the team/location cards.
 */
const CARD_ORDER: { slug: string; gradient?: string }[] = [
  { slug: "clinical-supervison", gradient: "from-navy-700 to-navy-950" },
  { slug: "currrent-advertised-positions" },
  { slug: "career-path" },
  { slug: "clinical-rotations" },
  { slug: "continued-professional-development", gradient: "from-orange-400 to-orange-600" },
];

export default function JoinUsPage() {
  const bySlug = new Map(CAREERS.map((c) => [c.slug, c]));

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Join Us", href: "/join-us" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
            Careers
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            GRS welcomes you to join us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            100% clinician-led, with transparent career pathways, real
            supervision, and professional development that goes beyond
            registration requirements.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="columns-1 gap-6 sm:columns-2">
            {CARD_ORDER.map(({ slug, gradient }) => {
              const career = bySlug.get(slug);
              if (!career) return null;
              const { title, tagline } = career as CareerPage;

              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  className="group mb-6 block break-inside-avoid overflow-hidden rounded-2xl border-2 border-honey bg-white transition-shadow hover:shadow-lg"
                >
                  {gradient && (
                    <div className={`h-40 bg-gradient-to-br ${gradient}`} />
                  )}
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-charcoal">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/80">
                      {tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-rust px-4 py-2 text-xs font-semibold text-white shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal/80">
              Ready to see what&apos;s open right now?
            </p>
            <a
              href="/currrent-advertised-positions"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
            >
              Current Advertised Positions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
