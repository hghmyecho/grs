import { ArrowRight, Bus, Calculator, MapPin, ParkingCircle, Play } from "lucide-react";
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
    introHeadingScript,
    introHeadingBold,
    introVideoImage,
    teamPhotoBand,
    overview,
    approach,
    servicesOffered,
    transport,
    parking,
    clinicNote,
    directionsImages,
    mapEmbedUrl,
    faqs,
  } = location;
  const hasIntro = !!(introHeadingScript || introHeadingBold || introVideoImage);

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

      {/* Full-bleed photo banner hero, matching this page's actual Figma
          layer (node 341:180) layer-for-layer: a horizontal navy-to-
          transparent gradient scrim over a full-bleed photo (same exact
          gradient stops as the Specialist Behaviour Support Stream hero —
          see components/templates/StreamPage.tsx — confirming this is one
          shared "Section" hero component in the Figma file), a plain bold
          honey-orange state label (not a pill), and a large white Seaweed
          Script city title. */}
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
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_right,#14304f_33%,rgba(20,48,79,0.64)_51%,rgba(20,48,79,0)_66%)]"
            />
          </>
        )}
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[28px] font-extrabold text-honey">{state}</span>
          <h1
            className="mt-3 text-4xl text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-script)" }}
          >
            {city}
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">{serviceArea}</p>
        </div>
      </section>

      {hasIntro && (
        // Separate intro section right after the hero, matching this
        // page's Figma frame (node 366:944) layer-for-layer: a 2-part
        // heading (script + bold — one Figma text layer with mixed
        // per-character styling, split here into introHeadingScript/
        // introHeadingBold) beside a video-thumbnail card. No real video
        // source exists for this card yet, so the play button is
        // decorative (see the Location interface's comment in
        // lib/content/locations.ts) — this stream's own `overview` is
        // used here rather than as a standalone paragraph further down,
        // so the main section below skips it when this is present.
        <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {introVideoImage && (
                <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={introVideoImage}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                      <Play className="ml-1 h-6 w-6 fill-navy-800 text-navy-800" />
                    </span>
                  </div>
                </div>
              )}

              <div>
                {introHeadingScript && (
                  <span className="eyebrow-script">{introHeadingScript}</span>
                )}
                {introHeadingBold && (
                  <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-charcoal">
                    {introHeadingBold}
                  </h2>
                )}
                <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{overview}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {teamPhotoBand && (
        // Full-bleed photo band right after the intro section, matching
        // this page's Figma frame (node 368:949) — a plain wide photo
        // strip on a navy backdrop, no text. Figma's own layer is another
        // untitled "Photography placeholder", so this reuses the real
        // GRS group photo (see the Location interface's comment).
        <div className="relative aspect-[1905/427] w-full overflow-hidden bg-navy-800">
          <Image
            src={teamPhotoBand}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {!hasIntro && (
            <p className="text-sm leading-relaxed text-charcoal/80">{overview}</p>
          )}

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

          {mapEmbedUrl && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-charcoal">
                Where we are
              </h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-honey/20">
                <iframe
                  src={mapEmbedUrl}
                  title={`Map of the block around the ${city} clinic`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full sm:h-96"
                />
              </div>
            </div>
          )}

          {directionsImages && directionsImages.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-charcoal">
                Finding us
              </h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {directionsImages.map((d) => (
                  <figure
                    key={d.src}
                    className="overflow-hidden rounded-2xl border border-honey/20 bg-white"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={d.src}
                        alt={d.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-4 text-xs leading-relaxed text-charcoal/70">
                      {d.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

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
