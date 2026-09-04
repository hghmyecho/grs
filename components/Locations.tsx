import { ArrowRight, Calculator } from "lucide-react";
import Image from "next/image";
import { LOCATIONS } from "@/lib/content/locations";

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
          {LOCATIONS.map(({ slug, city, state, address, gradient, image }, index) => (
            <div
              key={city}
              className={`bounce-transition flex flex-col overflow-hidden rounded-2xl border-2 border-honey bg-cream transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-xl ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-charcoal">
                  {city}
                  <span className="ml-2 text-sm font-medium text-honey">
                    {state}
                  </span>
                </h3>
                <p className="mt-3 min-h-[46px] text-sm leading-relaxed text-charcoal/80">
                  {address}
                </p>

                <a
                  href={`/${slug}`}
                  aria-label={`More info about GRS ${city}`}
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full bg-rust px-4 py-2 text-sm font-semibold text-white transition-colors hover:brightness-110"
                >
                  More Info
                  <span className="sr-only"> about GRS {city}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div
                className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
