import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 pb-6 pt-2 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] lg:grid-cols-2">
        {/* Left: copy panel */}
        <div className="relative bg-navy-900 px-8 py-14 sm:px-12 lg:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

          <span className="relative text-sm font-semibold uppercase tracking-wide text-orange-400">
            Global Rehabilitation Service
          </span>

          <h1 className="relative mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Holistic care, built around your whole story.
          </h1>

          <p className="relative mt-5 max-w-md text-base leading-relaxed text-white/75">
            Multidisciplinary allied health delivered in our clinics, at
            home, and in the community — across NSW &amp; QLD.
          </p>

          <a
            href="/make-a-referral"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Make a Referral
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right: photo panel (placeholder) */}
        <div className="relative min-h-[280px] bg-gradient-to-br from-orange-400 via-orange-500 to-peach-200 lg:min-h-0">
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/70">
            Photography placeholder
          </div>
        </div>
      </div>
    </section>
  );
}
