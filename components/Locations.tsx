import { ArrowRight, Calculator } from "lucide-react";

const LOCATIONS = [
  {
    city: "Sydney",
    state: "NSW",
    address: "Suite 102, 63 Parramatta Road, Silverwater NSW 2128",
    gradient: "from-navy-700 to-navy-950",
  },
  {
    city: "Brisbane",
    state: "QLD",
    address: "8 Mayfield Road, Moorooka QLD 4105",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    city: "Gold Coast",
    state: "QLD",
    address: "1C/34 High Street, Southport QLD 4215",
    gradient: "from-peach-200 to-orange-400",
  },
];

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
            href="#contact"
            className="bounce-transition inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-navy-900 hover:text-white"
          >
            <Calculator className="h-4 w-4" />
            Travel Fees Calculator
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {LOCATIONS.map(({ city, state, address, gradient }, index) => (
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
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                >
                  More Info
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className={`h-52 bg-gradient-to-br ${gradient}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
