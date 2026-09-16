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
  const {
    slug, title, description, tags, image, gradient,
    introHeadingScript, introHeadingBold, heroCollage,
    highlights, overview, approach, conditionGroups, faqs,
  } = stream;
  const highlightIcons = HIGHLIGHT_ICONS[slug] ?? [Search, FileCheck, Users];
  const hasIntroCollage = !!(heroCollage && heroCollage.length > 0);

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

      {tags && image ? (
        // DisciplinePage-style tags+photo hero — currently only Specialist
        // Behaviour Support Stream sets tags/image/gradient (per the
        // client's request to match its Figma page); the other 3 streams
        // fall through to the plain centered hero below.
        <section className="bg-navy-800 py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-white/70 lg:mx-0">{description}</p>
              </div>

              <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:mx-0">
                <div
                  aria-hidden
                  className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-honey/20 blur-2xl"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-rust/20 blur-2xl"
                />
                <div
                  className={`relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br shadow-xl ${gradient}`}
                >
                  <Image
                    src={image}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
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

      {hasIntroCollage && (
        // Separate intro section right after the hero — a 2-part heading,
        // the 3-photo staggered collage (left, exact Figma layer geometry —
        // see the heroCollage entry in streams.ts for the maths), and this
        // stream's own overview paragraph (right). Figma's page uses
        // `overview` here rather than as a standalone paragraph further
        // down, so the main section below skips it when this is present.
        <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative mx-auto aspect-[554/521] w-full max-w-lg">
                {heroCollage!.map((photo, i) => (
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

              <div>
                {introHeadingScript && (
                  <span className="eyebrow-script">{introHeadingScript}</span>
                )}
                {introHeadingBold && (
                  <h2 className="mt-2 font-display text-2xl font-bold leading-snug text-charcoal">
                    {introHeadingBold}
                  </h2>
                )}
                <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{overview}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {!hasIntroCollage && (
            <p className="text-sm leading-relaxed text-charcoal/80">{overview}</p>
          )}

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
