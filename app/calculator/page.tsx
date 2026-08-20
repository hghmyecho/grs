import type { Metadata } from "next";
import { Calculator } from "lucide-react";
import TravelFeeCalculator from "@/components/TravelFeeCalculator";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Travel Fees Calculator",
  description: "Estimate the travel fee for a home-based GRS appointment.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Travel Fees Calculator", href: "/calculator" }]} />
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
        <div className="mx-auto max-w-2xl">
          <TravelFeeCalculator />
        </div>
      </section>
    </>
  );
}
