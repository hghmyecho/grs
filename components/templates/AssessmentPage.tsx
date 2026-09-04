import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Assessment } from "@/lib/content/assessments";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, medicalWebPageSchema, schemaGraph } from "@/lib/schema";

export default function AssessmentPage({ assessment }: { assessment: Assessment }) {
  const { slug, title, description, overview, whatToExpect, faqs } = assessment;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Specialist Assessments", href: "/#assessments" },
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
          <span className="eyebrow-script">
            Specialist Assessments
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
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
              What to Expect
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{whatToExpect}</p>
          </div>

          <FaqSection faqs={faqs} />

          <div className="mt-16 rounded-2xl bg-tan p-8 text-center">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Ready to arrange a {title.toLowerCase()}?
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
