import { ArrowRight, FileCheck, Search, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Stream } from "@/lib/content/streams";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema, medicalWebPageSchema, schemaGraph } from "@/lib/schema";

// 3 icons for the "What We Offer" cards, matching DisciplinePage's own
// HIGHLIGHT_ICONS entry for this same topic (specialist-behaviour-support-
// disciplines) — only Specialist Behaviour Support currently sets
// `highlights`, but keyed by slug in case another stream adopts this
// richer layout later.
const HIGHLIGHT_ICONS: Record<string, [typeof Search, typeof FileCheck, typeof Users]> = {
  "specialist-behaviour-support-stream": [Search, FileCheck, Users],
};

export default function StreamPage({ stream }: { stream: Stream }) {
  const { slug, title, description, heroCollage, highlights, overview, approach, conditionGroups, faqs } = stream;
  const highlightIcons = HIGHLIGHT_ICONS[slug] ?? [Search, FileCheck, Users];

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Clinical Specialities", href: "/#services" },
    { name: title, href: `/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={schemaGraph(
          medicalWebPageSchema({
            name: title,
            description,
            url: `/${slug}`,
            therapyName: title,
          }),
          faqSchema(faqs)
        )}
      />
      <Breadcrumbs items={breadcrumbItems} />

      {heroCollage && heroCollage.length > 0 ? (
        // Image-collage-left / text-right hero, matching this page's exact
        // Figma layer geometry (see the heroCollage entry in streams.ts for
        // the maths) — currently only Specialist Behaviour Support Stream
        // sets this; the other 3 streams fall through to the plain centered
        // hero below.
        <section className="bg-navy-800 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto aspect-[554/521] w-full max-w-lg lg:order-1">
                {heroCollage.map((photo, i) => (
                  <div
                    key={i}
                    className="absolute overflow-hidden rounded-2xl shadow-xl"
                    style={{ left: photo.left, top: photo.top, width: photo.width, height: photo.height, zIndex: photo.z }}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 30vw, 60vw"
                      className="object-cover"
                      style={photo.focus ? { objectPosition: photo.focus } : undefined}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center lg:order-2 lg:text-left">
                <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-white/70 lg:mx-0">{description}</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-navy-800 py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="eyebrow-script">
              Clinical Speciality
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">{description}</p>
          </div>
        </section>
      )}

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-charcoal/80">{overview}</p>

          <div className="mt-12">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Our Approach
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{approach}</p>
          </div>

          {highlights && highlights.length > 0 && (
            <div className="mt-12">
              <h2 className="text-center font-display text-xl font-bold text-charcoal">
                What We Offer
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {highlights.map(({ title: hTitle, description: hDescription }, i) => {
                  const Icon = highlightIcons[i] ?? Search;
                  return (
                    <div
                      key={hTitle}
                      className="rounded-2xl border border-honey/20 bg-white p-6 text-center shadow-sm"
                    >
                      <Icon className="mx-auto h-8 w-8 text-rust" strokeWidth={1.5} />
                      <h3 className="mt-3 font-display text-sm font-bold text-charcoal">
                        {hTitle}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-charcoal/80">
                        {hDescription}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {conditionGroups.length > 0 && (
            <div className="mt-12 space-y-10">
              {conditionGroups.map((group) => (
                <div key={group.heading}>
                  <h2 className="font-display text-lg font-bold text-charcoal">
                    {group.heading}
                  </h2>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/80"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-honey" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <FaqSection faqs={faqs} />

          <div className="mt-16 rounded-2xl bg-tan p-8 text-center">
            <h2 className="font-display text-lg font-bold text-charcoal">
              Want to know if we can help?
            </h2>
            <p className="mt-2 text-sm text-charcoal/80">
              Refer a client or get in touch with our team.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/make-a-referral"
                className="bounce-transition inline-flex items-center gap-2 rounded-full bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:brightness-110"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-charcoal hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
