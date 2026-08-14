import { ArrowRight, Calculator, MapPin, Phone } from "lucide-react";
import type { Location } from "@/lib/content/locations";

export default function LocationPage({ location }: { location: Location }) {
  const {
    city,
    state,
    address,
    phone,
    serviceArea,
    servicesOffered,
    transport,
    parking,
    clinicNote,
  } = location;

  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            {state}
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            GRS {city}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{serviceArea}</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-base font-bold text-navy-950">
                Clinic Address
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{address}</p>
              {clinicNote && (
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{clinicNote}</p>
              )}
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-base font-bold text-navy-950">
                Get In Touch
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">{phone}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xl font-bold text-navy-950">
              Services offered
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {servicesOffered.map((s) => (
                <li
                  key={s}
                  className="rounded-full bg-peach-100 px-4 py-2 text-sm font-medium text-navy-900"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-lg font-bold text-navy-950">
                Getting there
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{transport}</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-navy-950">Parking</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{parking}</p>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-peach-100 p-8 text-center">
            <h2 className="font-display text-lg font-bold text-navy-950">
              Ready to visit our {city} team?
            </h2>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/make-a-referral"
                className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/calculator"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-navy-900 hover:text-white"
              >
                <Calculator className="h-4 w-4" />
                Travel Fees Calculator
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
