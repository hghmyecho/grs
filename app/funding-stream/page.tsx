import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Funding Streams",
  description:
    "GRS is a registered provider for NDIS, Medicare, Home Care Packages, and private health fund clients — allied health funding streams across NSW & QLD.",
  alternates: { canonical: "/funding-stream" },
};

// Real scheme/provider logos (matching GRS-to-send Figma node 190:5392)
// rather than generic icons — GRS is a registered/current provider for
// each of these, same as the NDIS badge already shown in the footer.
const FUNDING_STREAMS = [
  {
    logo: "/logos/ndis.png",
    logoSize: 70,
    title: "NDIS",
    description:
      "The funding scheme designed for eligible participants to cover their daily living and therapeutic support care needs.",
    accent: "#6a2a78",
  },
  {
    logo: "/logos/private-health.png",
    logoSize: 70,
    title: "Private Health Fund Clients",
    description:
      "One of the largest chronic disease management programs in Australia. This Medibank-developed program supports the better management of chronic and complex health conditions.",
    accent: "#07a9f0",
  },
  {
    logo: "/logos/home-care-package.png",
    logoSize: 104,
    title: "Home Care Package",
    description:
      "One of the ways older Australians can access affordable care services at home. Designed for those with more complex care needs than the Commonwealth Home Support Programme can provide.",
    accent: "#040707",
  },
  {
    logo: "/logos/medicare.png",
    logoSize: 70,
    title: "Medicare",
    description:
      "Provides a range of coverage for allied health services, including the Chronic Disease Management (formerly Extended Primary Care) Plan and the Mental Health Care Plan.",
    accent: "#009448",
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
            {FUNDING_STREAMS.map(({ logo, logoSize, title, description, accent }) => (
              <div key={title} className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl"
                  style={{ backgroundColor: accent }}
                />
                <div className="relative flex items-start gap-4 rounded-2xl border border-charcoal bg-cream p-8">
                  <Image
                    src={logo}
                    alt=""
                    aria-hidden
                    width={logoSize}
                    height={logoSize}
                    className="shrink-0 object-contain"
                    style={{ width: logoSize, height: logoSize }}
                  />
                  <div>
                    <h2
                      className="font-display text-lg font-bold"
                      style={{ color: accent }}
                    >
                      {title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                      {description}
                    </p>
                  </div>
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
