import type { Metadata } from "next";
import { Flame, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Global Rehabilitation Service started during the 2017 NDIS rollout and grew into a clinician-led, multidisciplinary allied health provider across NSW & QLD.",
  alternates: { canonical: "/our-story" },
};

const VALUES = [
  {
    icon: Flame,
    title: "Passionate",
    description:
      "We show up energised by the outcomes we help create, not just the appointments we keep.",
  },
  {
    icon: Sparkles,
    title: "Professional",
    description:
      "Evidence-based practice, clear communication, and accountability in every interaction.",
  },
  {
    icon: Heart,
    title: "Compassionate",
    description:
      "We meet people where they are, and design care around their goals — not the other way around.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Our Story
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Built by clinicians, for the people they serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            GRS started with a simple idea: bring the quality and rigour of
            the public health system to a private, multidisciplinary service
            that&apos;s efficient, flexible, and genuinely tailored to each
            person.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-bold text-navy-950">
                Where it began
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                GRS was founded with a vision to deliver high-quality,
                multidisciplinary healthcare for the disability sector. Our
                founding clinicians trained and worked extensively in
                Australia&apos;s public health system, where they saw
                firsthand the constraints therapists faced and the challenges
                people with disability encountered accessing services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-950">
                A different kind of provider
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                During the 2017 NDIS rollout, our founders identified an
                opportunity to establish a private multidisciplinary service
                offering therapeutic care that is efficient, individually
                tailored, and flexible — while maintaining the public health
                system&apos;s standards for quality assurance and
                evidence-based care.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-950">
                How we&apos;ve grown
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                In the years since, our team has expanded and the way we
                deliver care has evolved to meet changing client needs. Every
                step of that growth has stayed 100% directed and managed by
                clinicians, in pursuit of a simple goal: to become a
                benchmark for quality and client satisfaction.
              </p>
            </div>

            <blockquote className="rounded-2xl bg-peach-100 p-8 text-center">
              <p className="font-display text-lg font-semibold italic leading-relaxed text-navy-950">
                &ldquo;100% directed and managed by clinicians.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="mt-16">
            <h2 className="text-center font-display text-2xl font-bold text-navy-950">
              The values behind every decision
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 p-8 text-center"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-slate-700">
              Want to experience our approach for yourself?
            </p>
            <a
              href="/make-a-referral"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-800"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
