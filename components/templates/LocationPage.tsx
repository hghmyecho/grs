import { ArrowRight, Bus, Calculator, MapPin, ParkingCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/content/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, medicalClinicSchema, schemaGraph } from "@/lib/schema";

export default function LocationPage({ location }: { location: Location }) {
  const {
    slug,
    city,
    state,
    address,
    image,
    phone,
    serviceArea,
    overview,
    approach,
    servicesOffered,
    transport,
    parking,
    clinicNote,
    faqs,
  } = location;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/#locations" },
    { name: city, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={schemaGraph(
          medicalClinicSchema({ city, state, address, phone, url: `/${slug}` }),
          faqSchema(faqs)
        )}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <section className="relative overflow-hidden bg-navy-800 py-16 lg:py-24">
        {image && (
          <>
            <Image
              src={image}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/75" />
          </>
        )}
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white">
            {state}
          </span>
          <h1
            className="mt-4 text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {city}
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">{serviceArea}</p>
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

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-honey/20 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-rust">
                Clinic Address
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{address}</p>
              {clinicNote && (
                <p className="mt-2 text-xs leading-relaxed text-charcoal/60">{clinicNote}</p>
              )}
              <p className="mt-2 text-sm font-semibold text-rust">{phone}</p>
            </div>
            <div className="rounded-2xl border border-honey/20 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey text-white">
                <Bus className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-rust">
                Getting There
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{transport}</p>
            </div>
            <div className="rounded-2xl border border-honey/20 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey text-white">
                <ParkingCircle className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-rust">
                Parking
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-charcoal/80">{parking}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xl font-bold text-charcoal">
              Services offered
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {servicesOffered.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-tan px-4 py-2 text-sm font-medium text-charcoal"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <FaqSection faqs={faqs} />

          <div className="mt-16 rounded-2xl bg-tan p-8 text-center">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Ready to visit our {city} team?
            </h2>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/make-a-referral"
                className="bounce-transition inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:brightness-110"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/calculator"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-charcoal hover:text-white"
              >
                <Calculator className="h-4 w-4" />
                Travel Fees Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
