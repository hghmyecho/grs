import type { Metadata } from "next";
import { ArrowRight, Calculator, MapPin } from "lucide-react";
import { LOCATIONS } from "@/lib/content/locations";

export const metadata: Metadata = {
  title: "Travel Fees Calculator",
  description: "Estimate the travel fee for a home-based GRS appointment.",
  alternates: { canonical: "/calculator" },
};

// NOTE: this is deliberately NOT a working fee calculator. The live
// site's widget (grs.health/calculator) renders client-side and its
// actual fields/formula couldn't be extracted — and fabricating a
// distance-based rate here risks showing prospective clients a wrong
// dollar figure, which is worse than no calculator at all. This is an
// honest placeholder that explains the concept and routes to a real quote
// instead. Swap in the real widget/formula once the client confirms the
// actual travel fee schedule.
export default function CalculatorPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <Calculator className="h-6 w-6" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Travel Fees Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            For home-based appointments outside our clinics, a small travel
            fee may apply based on distance from your nearest GRS team.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-slate-700">
            Travel fees vary by location and appointment type. Let us know
            where you&apos;re based and our team will confirm the exact fee
            for your appointment before it&apos;s booked.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {LOCATIONS.map(({ slug, city, state }) => (
              <a
                key={slug}
                href={`/${slug}`}
                className="bounce-transition flex items-center gap-3 rounded-2xl border border-slate-200 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold text-navy-950">
                    {city}
                  </span>
                  <span className="block text-xs text-slate-500">{state} team</span>
                </span>
              </a>
            ))}
          </div>

          <a
            href="/contact-us"
            className="bounce-transition mt-10 inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
          >
            Get a Travel Fee Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
