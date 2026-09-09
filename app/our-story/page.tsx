import type { Metadata } from "next";
import { Flame, Heart, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import StoryTimeline from "@/components/StoryTimeline";

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
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Our Story", href: "/our-story" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
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

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <StoryTimeline />

          <div className="mt-16 lg:mt-24">
            <h2 className="text-center font-display text-2xl font-bold text-charcoal">
              The values behind every decision
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {VALUES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-honey/20 p-8 text-center"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-honey text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-charcoal/80">
              Want to experience our approach for yourself?
            </p>
            <a
              href="/make-a-referral"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
            >
              Make a Referral
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
