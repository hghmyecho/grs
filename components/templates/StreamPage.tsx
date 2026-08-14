import { ArrowRight } from "lucide-react";
import type { Stream } from "@/lib/content/streams";

export default function StreamPage({ stream }: { stream: Stream }) {
  const { title, description, overview, conditionGroups } = stream;

  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Clinical Stream
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{description}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-700">{overview}</p>

          {conditionGroups.length > 0 && (
            <div className="mt-12 space-y-10">
              {conditionGroups.map((group) => (
                <div key={group.heading}>
                  <h2 className="font-display text-lg font-bold text-navy-950">
                    {group.heading}
                  </h2>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 rounded-2xl bg-peach-100 p-8 text-center">
            <h2 className="font-display text-lg font-bold text-navy-950">
              Want to know if we can help?
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Refer a client or get in touch with our team.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/make-a-referral"
                className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact-us"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-navy-900 hover:text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
