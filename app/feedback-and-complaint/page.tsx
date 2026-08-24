import type { Metadata } from "next";
import FormBuilderEmbed from "@/components/FormBuilderEmbed";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Feedback & Complaints",
  description:
    "Share a compliment, complaint, or feedback with Global Rehabilitation Service. We review every submission personally.",
  alternates: { canonical: "/feedback-and-complaint" },
};

export default function FeedbackAndComplaintPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Feedback & Complaints", href: "/feedback-and-complaint" }]} />
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Feedback &amp; Complaints
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Tell us how we're doing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            An effective feedback, compliment and complaint handling system
            addresses visibility, responsiveness, assessment, and service
            excellence. GRS is committed to providing high quality care —
            please let us know what we do well and where we can improve.
          </p>
        </div>
      </section>

      <section className="bg-peach-100 px-6 py-16 lg:px-8 lg:py-24">
        <FormBuilderEmbed formId="6364113" title="GRS Feedback & Complaints Form" />
      </section>
    </>
  );
}
