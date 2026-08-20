import { ArrowRight, Calculator } from "lucide-react";
import Image from "next/image";
import { LOCATIONS } from "@/lib/content/locations";

export default function Locations() {
  return (
    <section id="locations" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
              Where We Work
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
              Three cities, one standard of care
            </h2>
          </div>
          <a
            href="/calculator"
            className="bounce-transition inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-navy-900 hover:text-white"
          >
            <Calculator className="h-4 w-4" />
            Travel Fees Calculator
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map(({ slug, city, state, address, gradient, image }, index) => (
            <div
              key={city}
              className={`bounce-transition flex flex-col overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:border-transparent hover:shadow-xl ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-navy-950">
                  {city}
                  <span className="ml-2 text-sm font-medium text-orange-700">
                    {state}
                  </span>
                </h3>
                <p className="mt-3 min-h-[46px] text-sm leading-relaxed text-slate-700">
                  {address}
                </p>

                <a
                  href={`/${slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                >
                  More Info
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
