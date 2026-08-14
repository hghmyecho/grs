import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "COVID-19 Safety",
  description: "GRS's COVID-19 management policy.",
  alternates: { canonical: "/covid-19-safety" },
};

// NOTE: the live site's equivalent page (grs.health/covid-19-safety) is
// just a link out to a "Covid-19 management policy.pdf" download, with no
// policy detail rendered on the page itself. That PDF wasn't available to
// port over, so this keeps the same "here's where the full policy lives"
// framing rather than fabricating specific policy claims — swap in the
// real PDF (public/documents/covid-19-management-policy.pdf) once the
// client provides it, and this page can link to it directly.
export default function Covid19SafetyPage() {
  return (
    <section className="bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          GRS COVID-19 Policy
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Our full COVID-19 management policy is available as a downloadable
          document. Get in touch with our team and we&apos;ll send it
          through.
        </p>
        <div className="mt-8">
          <a
            href="/contact-us"
            className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
