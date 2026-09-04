import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { Discipline } from "@/lib/content/disciplines";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, medicalWebPageSchema, schemaGraph } from "@/lib/schema";

export default function DisciplinePage({ discipline }: { discipline: Discipline }) {
  const { slug, title, description, overview, approach, benefits, serviceGroups, tags, faqs } =
    discipline;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Disciplines", href: "/#disciplines" },
    { name: title, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={schemaGraph(
          medicalWebPageSchema({
            name: title,
            description,
            url: `/${slug}`,
            therapyName: title,
          }),
          faqSchema(faqs)
        )}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{description}</p>
        </div>
      </section>

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-charcoal/80">{overview}</p>

          <div className="mt-12">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Our Approach
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{approach}</p>
          </div>

          {benefits && benefits.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-charcoal">
                Key benefits
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-honey text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-charcoal/80">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {serviceGroups.length > 0 && (
            <div className="mt-12 space-y-10">
              <h2 className="font-display text-xl font-bold text-charcoal">
                What we offer
              </h2>
              {serviceGroups.map((group, i) => (
                <div key={group.heading ?? i}>
                  {group.heading && (
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-rust">
                      {group.heading}
                    </h3>
                  )}
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
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

          <div className="mt-16 rounded-2xl bg-tan p-8 text-center">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Ready to get started with {title}?
            </h2>
            <p className="mt-2 text-sm text-charcoal/80">
              Refer a client or get in touch with our team.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/make-a-referral"
                className="bounce-transition inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:brightness-110"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-charcoal hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
