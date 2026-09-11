import { ArrowRight, Calculator } from "lucide-react";
import Image from "next/image";
import { LOCATIONS } from "@/lib/content/locations";

// Photo-card style redesign (Sep 2026) — full-bleed clinic photo with a
// bottom scrim, per a reference booking-app mockup the client shared. The
// scrim is a fixed dark navy fade (not each location's own brand gradient)
// so white text stays legible over every photo regardless of its content;
// `gradient` is kept only as the fallback background behind the <Image>
// while it loads. No star-rating pill, unlike the reference — GRS doesn't
// have real review data, and fabricating one would be misleading.
export default function Locations() {
  return (
    <section id="locations" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-script">Where We Work</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              Three cities, one standard of care
            </h2>
          </div>
          <a
            href="/calculator"
            className="bounce-transition inline-flex items-center gap-2 rounded-full border border-honey px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-honey hover:text-white"
          >
            <Calculator className="h-4 w-4" />
            Travel Fees Calculator
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map(({ slug, city, state, address, gradient, image, servicesOffered }) => (
            <div
              key={city}
              className={`bounce-transition relative flex h-[460px] flex-col justify-end overflow-hidden rounded-[2rem] border-2 border-honey bg-gradient-to-br ${gradient} shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
            >
              {image && (
                <Image
                  src={image}
                  alt={`${city} clinic`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              )}

              {/* Bottom scrim so the text/button stay legible over any photo */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-950 from-15% via-navy-950/70 via-55% to-transparent"
              />

              <span className="absolute right-4 top-4 z-10 rounded-full bg-navy-950/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {state}
              </span>

              <div className="relative z-10 flex flex-col gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{city}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{address}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {servicesOffered.slice(0, 2).map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href={`/${slug}`}
                  aria-label={`More info about GRS ${city}`}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-charcoal shadow-md transition-colors hover:bg-cream"
                >
                  More Info
                  <span className="sr-only"> about GRS {city}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
