import { ArrowRight, Sparkles } from "lucide-react";
import { ImageStreamHero, type StreamImage } from "@/components/ui/image-stream-hero";

const GALLERY: StreamImage[] = [
  { src: "/photos/discipline-occupational-therapy.png", alt: "Occupational therapy session" },
  { src: "/photos/discipline-physiotherapy.png", alt: "Physiotherapy session" },
  { src: "/photos/discipline-speech-pathology.png", alt: "Speech pathology session" },
  { src: "/photos/discipline-psychology.png", alt: "Psychology session" },
  { src: "/photos/discipline-music-therapy.png", alt: "Music therapy session" },
  { src: "/photos/discipline-art-therapy.png", alt: "Art therapy session" },
  { src: "/photos/discipline-dietetics.png", alt: "Dietetics session" },
];

export default function Hero() {
  return (
    <ImageStreamHero
      images={GALLERY}
      speed={30}
      className="min-h-[560px] w-full sm:min-h-[620px] lg:min-h-[680px]"
    >
      {/* white scrim so the (dark) copy stays legible without hiding the photos */}
      <div className="pointer-events-none absolute inset-0 bg-white/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        {/* doodle accent */}
        <svg
          aria-hidden
          className="pointer-events-none absolute right-[8%] top-8 hidden h-16 w-20 text-orange-400/70 sm:block"
          viewBox="0 0 110 90"
          fill="none"
        >
          <path
            d="M10 8C40 6 78 14 92 42C99 56 96 66 90 74"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M78 65L91 76L100 62"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="relative inline-flex -rotate-2 items-center gap-1.5 rounded-full bg-orange-500/15 px-3.5 py-1.5 text-sm font-semibold uppercase tracking-wide text-orange-600">
          <Sparkles className="h-3.5 w-3.5" />
          Global Rehabilitation Service
        </span>

        <h1 className="relative mx-auto mt-5 max-w-2xl font-display text-4xl font-extrabold leading-tight text-navy-950 sm:text-5xl">
          Holistic care, built around your{" "}
          <span className="relative inline-block">
            whole story
            <svg
              aria-hidden
              viewBox="0 0 200 16"
              className="absolute -bottom-2 left-0 h-3 w-full text-orange-400"
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

        <p className="relative mx-auto mt-5 max-w-md text-base leading-relaxed text-navy-900/70">
          Multidisciplinary allied health delivered in our clinics, at
          home, and in the community — across NSW &amp; QLD.
        </p>

        <a
          href="/make-a-referral"
          className="bounce-transition group relative mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:scale-105 active:scale-95"
        >
          Make a Referral
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </ImageStreamHero>
  );
}
