import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CareerPage as CareerPageContent } from "@/lib/content/careers";

export default function CareerPage({ career }: { career: CareerPageContent }) {
  const { title, tagline, overview, sections } = career;

  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Careers at GRS
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{tagline}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-700">{overview}</p>

          {sections.length > 0 && (
            <div className="mt-12 space-y-10">
              {sections.map((section, i) => (
                <div key={section.heading ?? i}>
                  {section.heading && (
                    <h2 className="font-display text-lg font-bold text-navy-950">
                      {section.heading}
                    </h2>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-900" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-peach-100 p-8">
            <a
              href="/join-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Join Us
            </a>
            <a
              href="/currrent-advertised-positions"
              className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
            >
              See Open Positions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
