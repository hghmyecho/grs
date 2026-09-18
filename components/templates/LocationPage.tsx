import {
  ArrowRight,
  Bus,
  Calculator,
  DoorOpen,
  Heart,
  MapPin,
  ParkingCircle,
  Play,
  Share2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Location } from "@/lib/content/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, medicalClinicSchema, schemaGraph } from "@/lib/schema";

// One icon per approachHighlights entry, matched by slug — Figma's own
// icons are hand-drawn illustrations with no exportable asset, so these
// are plain lucide-react stand-ins instead. Keeps icon choice out of the
// plain content data, same pattern as StreamPage/DisciplinePage.
const APPROACH_ICONS: Record<string, [LucideIcon, LucideIcon, LucideIcon]> = {
  sydney: [Share2, Heart, DoorOpen],
};

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
    findUsUrl,
    mapEmbedUrl,
    faqs,
    approachHighlights,
  } = location;
  const hasIntro = !!(introHeadingScript || introHeadingBold || introVideoImage);
  const approachIcons = APPROACH_ICONS[slug] ?? [Share2, Heart, DoorOpen];

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
            {/* Matches this page's Figma frame (node 341:168) exactly:
                centered, uppercase, honey-orange heading (Figma's own
                textCase: UPPER — "Our Approach" content stays as typed,
                CSS does the casing) and a justified paragraph, rather
                than the small left-aligned heading this section
                previously had. */}
            <h2 className="text-center font-display text-3xl font-extrabold uppercase text-honey sm:text-4xl">
              Our Approach
            </h2>
            <p className="mt-4 text-justify text-sm leading-relaxed text-charcoal/80">{approach}</p>

            {approachHighlights && approachHighlights.length > 0 && (
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {approachHighlights.map((label, i) => {
                  const Icon = approachIcons[i] ?? Heart;
                  return (
                    <div key={label} className="flex flex-col items-center text-center">
                      <Icon className="h-9 w-9 text-honey" strokeWidth={1.5} />
                      <span className="mt-3 text-sm font-medium text-honey">{label}</span>
                    </div>
                  );
                })}
              </div>
            )}
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

          {findUsUrl && (
            <div className="mt-12">
              <h2 className="font-display text-xl font-bold text-charcoal">
                Finding us
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                For a step-by-step walkthrough with photos of the carpark,
                entrances and lift lobby, see our detailed directions guide.
              </p>
              <Link
                href={findUsUrl}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rust hover:underline"
              >
                View detailed directions & photos
                <ArrowRight className="h-4 w-4" />
              </Link>
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
