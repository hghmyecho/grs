import type { Metadata } from "next";
import { Phone } from "lucide-react";
import FormBuilderEmbed from "@/components/FormBuilderEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Make a Referral",
  description:
    "Refer a participant to Global Rehabilitation Service. Our intake team reviews every referral personally across NSW & QLD.",
  alternates: { canonical: "/make-a-referral" },
};

export default function MakeAReferralPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Make a Referral", href: "/make-a-referral" }]} />
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Make a Referral
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Refer a participant to GRS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Our intake team reviews every referral personally. Fill in as much
            detail as you can below — for urgent needs, please call us
            directly.
          </p>
          <a
            href="tel:1300066716"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            1300 066 716
          </a>
        </div>
      </section>

      <section className="bg-peach-100 px-6 py-16 lg:px-8 lg:py-24">
        <FormBuilderEmbed formId="3241612" title="GRS Online Referral Form" height={2200} />
      </section>
    </>
  );
}
