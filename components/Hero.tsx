import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-2">
      <div className="relative grid overflow-hidden lg:grid-cols-2">
        {/* Left: copy panel */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-navy-800 px-8 py-14 sm:px-12 lg:py-20">
          <div className="blob-float pointer-events-none absolute -left-16 -top-16 h-64 w-64 bg-flame/25 blur-3xl" />
          <div className="blob-shape pointer-events-none absolute -bottom-20 right-0 h-56 w-56 bg-peach-200/10 blur-2xl [animation-delay:-3s]" />

          <span className="relative inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-flame/15 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wide text-honey">
            <Sparkles className="h-3.5 w-3.5" />
            Global Rehabilitation Service
          </span>

          <h1 className="relative mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Holistic care, built around your{" "}
            <span className="relative inline-block">
              whole story
              <svg
                aria-hidden
                viewBox="0 0 200 16"
                className="absolute -bottom-2 left-0 h-3 w-full text-honey"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10.5C34 2.5 66 2.5 98 8.5C130 14.5 166 4.5 198 6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="relative mt-5 max-w-md text-base leading-relaxed text-white/75">
            Multidisciplinary allied health delivered in our clinics, at
            home, and in the community — across NSW &amp; QLD.
          </p>

          <a
            href="/make-a-referral"
            className="bounce-transition group relative mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-navy-800 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:scale-105 active:scale-95"
          >
            Make a Referral
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: team photo panel */}
        <div className="relative min-h-[480px] overflow-hidden bg-navy-800 p-6 lg:min-h-[640px]">
          <Image
            src="/photos/hero-team-2026.png"
            alt="The GRS team"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
