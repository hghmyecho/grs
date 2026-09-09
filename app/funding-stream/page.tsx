import type { Metadata } from "next";
import { HeartHandshake, Home, Stethoscope, Wallet } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Funding Streams",
  description:
    "GRS is a registered provider for NDIS, Medicare, Home Care Packages, and private health fund clients — allied health funding streams across NSW & QLD.",
  alternates: { canonical: "/funding-stream" },
};

const FUNDING_STREAMS = [
  {
    icon: Wallet,
    title: "NDIS",
    description:
      "The funding scheme designed for eligible participants to cover their daily living and therapeutic support care needs.",
    border: "border-purple-600",
    heading: "text-purple-700",
    iconBg: "bg-purple-600/10 text-purple-700",
  },
  {
    icon: HeartHandshake,
    title: "Private Health Fund Clients",
    description:
      "One of the largest chronic disease management programs in Australia. This Medibank-developed program supports the better management of chronic and complex health conditions.",
    border: "border-blue-600",
    heading: "text-blue-700",
    iconBg: "bg-blue-600/10 text-blue-700",
  },
  {
    icon: Home,
    title: "Home Care Package",
    description:
      "One of the ways older Australians can access affordable care services at home. Designed for those with more complex care needs than the Commonwealth Home Support Programme can provide.",
    border: "border-charcoal",
    heading: "text-charcoal",
    iconBg: "bg-charcoal/10 text-charcoal",
  },
  {
    icon: Stethoscope,
    title: "Medicare",
    description:
      "Provides a range of coverage for allied health services, including the Chronic Disease Management (formerly Extended Primary Care) Plan and the Mental Health Care Plan.",
    border: "border-teal",
    heading: "text-teal",
    iconBg: "bg-teal/10 text-teal",
  },
];

export default function FundingStreamPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Funding Streams", href: "/funding-stream" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
            Funding Streams
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ways to fund your care with GRS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            GRS is a current provider for the following funding streams.
          </p>
        </div>
      </section>

      <section className="bg-tan px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {FUNDING_STREAMS.map(({ icon: Icon, title, description, border, heading, iconBg }) => (
              <div
                key={title}
                className={`flex items-start gap-4 rounded-2xl border-2 bg-white p-8 shadow-sm ${border}`}
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className={`font-display text-lg font-bold ${heading}`}>
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy-800 p-8 text-center sm:p-12">
            <h2 className="font-display text-xl font-bold text-white">
              Not sure which funding stream applies to you?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/70">
              Our intake team can help you work out how to access care —
              whether that&apos;s through the NDIS, Medicare, or another
              stream.
            </p>
            <a
              href="/contact-us"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-charcoal shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
