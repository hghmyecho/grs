import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrintButton from "@/components/PrintButton";
import { getLocation } from "@/lib/content/locations";

export const metadata: Metadata = {
  title: "We're Moving — Find Our New Gold Coast Clinic",
  description:
    "GRS Gold Coast has moved. Here's the new clinic address, a map of the block, and step-by-step photos to help you find us.",
  alternates: { canonical: "/goldcoast/find-us" },
};

// Standalone A4 info sheet for existing Gold Coast clients navigating to the
// new Southport Central 1 clinic — a trimmed-down version of the /goldcoast
// location page's address/map/photos content, built per Rachael's Sep 2026
// feedback: no overview/approach copy, no services list, no FAQs, no
// referral or travel-calculator CTA — just enough to print, email, or link.
export default function GoldCoastFindUsPage() {
  const location = getLocation("goldcoast");
  if (!location) return null;
  const { address, phone, directionsImages } = location;

  return (
    <>
      <div className="print:hidden">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Gold Coast", href: "/goldcoast" },
            { name: "We're Moving", href: "/goldcoast/find-us" },
          ]}
        />
      </div>

      <section className="bg-cream px-6 py-10 print:bg-white print:px-0 print:py-0 lg:px-8">
        <div className="mx-auto max-w-3xl print:max-w-none">
          <div className="flex items-start justify-between gap-4 print:hidden">
            <div />
            <PrintButton />
          </div>

          <div className="text-center">
            <span className="eyebrow-script">Gold Coast Clinic</span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              We&rsquo;re moving&hellip; here&rsquo;s how to find us
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal/70">
              Our Gold Coast clinic has a new home. Here&rsquo;s the new
              address, a map of the block, and step-by-step photos to help
              you find your way in.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border-2 border-honey bg-white p-6 sm:p-8 print:border print:shadow-none">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey text-white">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <h2 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                    New Clinic Address
                  </h2>
                </div>
                <p className="mt-2 text-base font-semibold text-charcoal">{address}</p>
                <p className="mt-1 text-sm text-charcoal/70">Level 2, Southport Central 1 Tower</p>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey text-white">
                    <Phone className="h-4 w-4" />
                  </span>
                  <h2 className="font-display text-sm font-bold uppercase tracking-wide text-rust">
                    Admin Team
                  </h2>
                </div>
                <p className="mt-2 text-base font-semibold text-charcoal">{phone}</p>
              </div>
            </div>

            <p className="mt-6 border-t border-honey/20 pt-4 text-sm font-semibold text-rust">
              If you have any difficulty finding us, please call our friendly
              Admin Team on {phone} and we can help you further.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-lg font-bold text-charcoal">
              The block, at a glance
            </h2>
            <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-2xl border border-honey/20">
              <Image
                src="/photos/map-goldcoast-directions.png"
                alt="Map of the block around Southport Central, showing the clinic location, the Garden Street car park entry near the roundabout, and the Lawson Street car park entry near Southport Central shopping centre"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <defs>
                  <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                    <path d="M0,0 L6,3 L0,6 Z" fill="#c1592e" />
                  </marker>
                </defs>

                {/* Garden St entry — points at the roundabout leading into
                    Southport Central (pixel-verified via Static Maps + a
                    Web Mercator projection against the Garden St geocode) */}
                <line
                  x1="18" y1="30" x2="33" y2="43.5"
                  stroke="#c1592e" strokeWidth="1.2" markerEnd="url(#arrowhead)"
                />
                <text x="4" y="27" fontSize="4.2" fontWeight="700" fill="#c1592e">
                  Garden St entry
                </text>

                {/* Lawson St entry — points at Southport Central shopping
                    centre's own address (geocoded), near Lawson St */}
                <line
                  x1="72" y1="66" x2="54.5" y2="51"
                  stroke="#c1592e" strokeWidth="1.2" markerEnd="url(#arrowhead)"
                />
                <text x="63" y="74" fontSize="4.2" fontWeight="700" fill="#c1592e">
                  Lawson St entry
                </text>
              </svg>
            </div>
            <p className="mt-2 text-xs text-charcoal/60">
              Garden St leads to the Australia Fair carpark; Lawson St leads
              to the Southport Central carpark. Either way, the clinic is on
              Level 2 of Tower 1.
            </p>
          </div>

          {directionsImages && directionsImages.length > 0 && (
            <div className="mt-10 break-inside-avoid">
              <h2 className="font-display text-lg font-bold text-charcoal">
                Finding us
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 print:grid-cols-2">
                {directionsImages.map((d) => (
                  <figure
                    key={d.src}
                    className="overflow-hidden rounded-2xl border border-honey/20 bg-white break-inside-avoid"
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
                    <figcaption className="p-3 text-xs leading-relaxed text-charcoal/70">
                      {d.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
