import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CareerPage as CareerPageContent } from "@/lib/content/careers";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, schemaGraph } from "@/lib/schema";

export default function CareerPage({ career }: { career: CareerPageContent }) {
  const { slug, title, tagline, overview, approach, sections, faqs } = career;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Join Us", href: "/join-us" },
    { name: title, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd data={schemaGraph(faqSchema(faqs))} />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
            Careers at GRS
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{tagline}</p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-charcoal/80">{overview}</p>

          <div className="mt-12">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Our Approach
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{approach}</p>
          </div>

          {sections.length > 0 && (
            <div className="mt-12 space-y-10">
              {sections.map((section, i) => (
                <div key={section.heading ?? i}>
                  {section.heading && (
                    <h2 className="font-display text-lg font-bold text-charcoal">
                      {section.heading}
                    </h2>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <FaqSection faqs={faqs} />

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tan p-8">
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Join Us
            </Link>
            <Link
              href="/currrent-advertised-positions"
              className="bounce-transition inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:brightness-110"
            >
              See Open Positions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
