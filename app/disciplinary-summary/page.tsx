import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DISCIPLINES } from "@/lib/content/disciplines";

export const metadata: Metadata = {
  title: "Disciplinary Summary",
  description:
    "A quick summary of every allied health discipline GRS offers — Occupational Therapy, Physiotherapy, Speech Pathology, Dietetics, Psychology, Music Therapy, Art Therapy, and Specialist Behaviour Support.",
  alternates: { canonical: "/disciplinary-summary" },
};

export default function DisciplinarySummaryPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Disciplinary Summary
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            We offer support through Occupational Therapy, Physiotherapy,
            Speech Pathology, Dietetics, Psychology, Music Therapy & Art
            Therapy.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl divide-y divide-slate-200">
          {DISCIPLINES.map(({ slug, title, description }) => (
            <a
              key={slug}
              href={`/${slug}`}
              className="group flex items-center justify-between gap-4 py-5 transition-colors hover:bg-peach-100/50"
            >
              <div>
                <h2 className="font-display text-base font-bold text-navy-950">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-navy-900 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
