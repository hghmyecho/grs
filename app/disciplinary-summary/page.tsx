import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DISCIPLINES } from "@/lib/content/disciplines";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disciplinary Summary",
  description:
    "A quick summary of every allied health discipline GRS offers — Occupational Therapy, Physiotherapy, Speech Pathology, Dietetics, Psychology, Music Therapy, Art Therapy, and Specialist Behaviour Support.",
  alternates: { canonical: "/disciplinary-summary" },
};

/** Per-discipline accent color, matching the card-colored grid in Figma (GRS-to-send, "Disciplinary Summary" page). */
const ACCENTS: Record<string, { border: string; text: string }> = {
  "occupational-therapy": { border: "border-orange-600", text: "text-orange-700" },
  physiotherapy: { border: "border-blue-600", text: "text-blue-700" },
  "speech-pathology": { border: "border-emerald-600", text: "text-emerald-700" },
  psychology: { border: "border-rose-500", text: "text-rose-600" },
  dietetics: { border: "border-green-600", text: "text-green-700" },
  "art-therapy": { border: "border-purple-600", text: "text-purple-700" },
  "music-therapy": { border: "border-indigo-600", text: "text-indigo-700" },
  "specialist-behaviour-support-disciplines": { border: "border-red-600", text: "text-red-700" },
};

export default function DisciplinarySummaryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Disciplinary Summary", href: "/disciplinary-summary" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
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

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {DISCIPLINES.map(({ slug, title, description, gradient, image }) => {
              const accent = ACCENTS[slug] ?? { border: "border-honey", text: "text-honey" };
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  className={`group flex flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-shadow hover:shadow-md ${accent.border}`}
                >
                  <div className={`relative h-32 overflow-hidden bg-gradient-to-br sm:h-36 ${gradient}`}>
                    {image && (
                      <Image
                        src={image}
                        alt=""
                        aria-hidden
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h2 className={`font-display text-sm font-bold sm:text-base ${accent.text}`}>
                      {title}{" "}
                      <ArrowRight
                        className={`inline h-3.5 w-3.5 shrink-0 align-middle transition-transform duration-300 group-hover:translate-x-1 ${accent.text}`}
                      />
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/80">
                      {description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
