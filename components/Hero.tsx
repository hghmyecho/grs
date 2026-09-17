import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pt-6 lg:px-8 lg:pt-8">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] lg:grid-cols-2">
        {/* Left: copy panel — cream/light styling per the client's Sep 2026
            reference (screenshot), replacing the previous dark navy panel.
            Text content unchanged, styling only. */}
        <div className="relative overflow-hidden bg-cream px-8 py-14 sm:px-12 lg:py-20">
          <span className="relative inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-honey">
            <Sparkles className="h-3.5 w-3.5" />
            Global Rehabilitation Service
          </span>

          <h1 className="relative mt-5 font-display text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl">
            Your goals.
            <br />
            Your journey.
            <br />
            Our expertise.
          </h1>

          <p className="relative mt-5 max-w-md text-base leading-relaxed text-charcoal/70">
            Multidisciplinary allied health delivered in our clinics, at
            home, and in the community — across NSW &amp; QLD.
          </p>

          <a
            href="/make-a-referral"
            className="bounce-transition group relative mt-8 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:scale-105 active:scale-95"
          >
            Make a Referral
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Right: team photo panel — swapped (Sep 2026) for a stylized
            cutout graphic (transparent background, decorative stars/blobs
            already baked into the asset) rather than a plain rectangular
            photo, so it needs its own light backdrop + object-contain
            instead of the previous full-bleed object-cover treatment. */}
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-cream lg:min-h-0">
          <Image
            src="/photos/hero-team-illustrated.png"
            alt="Illustrated collage of the GRS team"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-contain p-6"
            priority
          />
        </div>
      </div>
    </section>
  );
}
