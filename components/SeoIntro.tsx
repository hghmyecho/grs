import Link from "next/link";

// Long-form SEO/informational block for the homepage, sitting directly
// under the FAQ section. Deliberately lower visual weight (small type,
// muted background) than the rest of the homepage's marketing sections —
// this exists for search engines and researching families, not as a
// primary visual section. Internal links are anchored on their first
// natural mention only (not every repeat occurrence) to keep anchor text
// looking editorial rather than keyword-stuffed.
//
// The bulk of the copy sits behind a native <details>/<summary> toggle
// (same pattern as components/FaqSection.tsx) so the page stays compact
// by default. This is safe for SEO: Google has confirmed content inside
// native disclosure widgets is fully indexed and weighted the same as
// visible content, since it's present in the server-rendered HTML from
// first load — nothing is injected only after the click.
const linkCls =
  "font-medium text-orange-700 underline decoration-orange-300 underline-offset-2 hover:text-orange-800";

export default function SeoIntro() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 text-sm leading-relaxed text-slate-600 lg:px-8">
        <h2 className="font-display text-lg font-bold text-navy-950 sm:text-xl">
          Trusted NDIS Allied Health Support Across NSW and QLD
        </h2>

        <p className="mt-4">
          Global Rehabilitation Service (GRS) is a registered NDIS allied
          health provider supporting individuals of all ages across New
          South Wales and Queensland. From our teams in{" "}
          <Link href="/sydney" prefetch={false} className={linkCls}>
            Sydney
          </Link>
          ,{" "}
          <Link href="/brisbane" prefetch={false} className={linkCls}>
            Brisbane
          </Link>
          , and the{" "}
          <Link href="/goldcoast" prefetch={false} className={linkCls}>
            Gold Coast
          </Link>
          , we deliver{" "}
          <Link
            href="/occupational-therapy"
            prefetch={false}
            className={linkCls}
          >
            occupational therapy
          </Link>
          ,{" "}
          <Link href="/speech-pathology" prefetch={false} className={linkCls}>
            speech pathology
          </Link>
          ,{" "}
          <Link href="/psychology" prefetch={false} className={linkCls}>
            psychology
          </Link>
          ,{" "}
          <Link href="/physiotherapy" prefetch={false} className={linkCls}>
            physiotherapy
          </Link>
          ,{" "}
          <Link href="/dietetics" prefetch={false} className={linkCls}>
            dietetics
          </Link>
          ,{" "}
          <Link href="/art-therapy" prefetch={false} className={linkCls}>
            art therapy
          </Link>
          ,{" "}
          <Link href="/music-therapy" prefetch={false} className={linkCls}>
            music therapy
          </Link>
          , and{" "}
          <Link
            href="/specialist-behaviour-support-disciplines"
            prefetch={false}
            className={linkCls}
          >
            specialist behaviour support
          </Link>{" "}
          — all under one clinician-led organisation built specifically
          around the needs of NDIS participants and their families.
        </p>

        <details className="group mt-5">
          <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-navy-900 marker:content-none">
            Read more about GRS and NDIS allied health support
            <span
              aria-hidden
              className="text-lg leading-none text-orange-700 transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <div className="mt-4">
        <p className="mt-4">
          Unlike many larger providers, GRS was founded and continues to be
          directed by practising clinicians who understand what genuinely
          good allied health care looks like, because they have delivered it
          themselves within Australia&rsquo;s public health system. That
          clinical foundation shapes everything we do, from how we match
          participants with the right therapist, to how we structure
          supervision and professional development for our own team. When
          you refer to GRS, you&rsquo;re referring to a service built by
          clinicians, for clinicians and clients alike.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          Support for Every Stage and Every Need
        </h3>
        <p className="mt-3">
          We work with people across the full spectrum of NDIS support
          categories, including{" "}
          <Link href="/physical-disability" prefetch={false} className={linkCls}>
            physical disability
          </Link>
          ,{" "}
          <Link href="/paediatrics" prefetch={false} className={linkCls}>
            paediatric development
          </Link>
          ,{" "}
          <Link
            href="/psychosocial-disability"
            prefetch={false}
            className={linkCls}
          >
            psychosocial disability
          </Link>
          , and complex behavioural needs requiring{" "}
          <Link
            href="/specialist-behaviour-support-stream"
            prefetch={false}
            className={linkCls}
          >
            specialist behaviour support
          </Link>
          . Whether you&rsquo;re a parent seeking early intervention for a
          young child, an adult navigating a new physical disability, or a
          support coordinator looking for a psychosocial disability
          specialist for a client, our multidisciplinary team is equipped to
          help.
        </p>
        <p className="mt-3">
          Our approved NDIS registration groups include Behaviour Support,
          Early Childhood Supports, and Therapeutic Supports — recognising
          both the breadth and the depth of what we offer. This isn&rsquo;t
          a generalist service that happens to touch on disability support;
          it&rsquo;s a provider structured from the ground up around the
          specific, sometimes highly specialised, needs of NDIS
          participants.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          Allied Health Services We Provide
        </h3>
        <p className="mt-3">
          <Link
            href="/occupational-therapy"
            prefetch={false}
            className={linkCls}
          >
            Occupational therapy
          </Link>{" "}
          helps clients build independence in daily life, from home
          modifications and assistive technology assessments to developing
          the skills needed for school, work, and community participation.{" "}
          <Link href="/speech-pathology" prefetch={false} className={linkCls}>
            Speech pathology
          </Link>{" "}
          supports communication, language development, and swallowing
          needs, including augmentative and alternative communication (AAC)
          for non-verbal or minimally verbal clients.{" "}
          <Link href="/psychology" prefetch={false} className={linkCls}>
            Psychology
          </Link>{" "}
          services address emotional wellbeing, behaviour, and mental
          health, tailored to each participant&rsquo;s goals and
          circumstances.
        </p>
        <p className="mt-3">
          Our{" "}
          <Link href="/physiotherapy" prefetch={false} className={linkCls}>
            physiotherapy
          </Link>{" "}
          team focuses on mobility, strength, and physical independence,
          while our{" "}
          <Link href="/dietetics" prefetch={false} className={linkCls}>
            dietetics
          </Link>{" "}
          service supports healthy eating and mealtime management for
          clients with complex nutritional needs. For clients who benefit
          from creative and expressive approaches, our{" "}
          <Link href="/art-therapy" prefetch={false} className={linkCls}>
            art therapy
          </Link>{" "}
          and{" "}
          <Link href="/music-therapy" prefetch={false} className={linkCls}>
            music therapy
          </Link>{" "}
          programs offer alternative pathways to communication, emotional
          regulation, and engagement — particularly valuable for children
          and individuals who find traditional talk-based therapy
          challenging.
        </p>
        <p className="mt-3">
          Finally, our{" "}
          <Link
            href="/specialist-behaviour-support-disciplines"
            prefetch={false}
            className={linkCls}
          >
            specialist behaviour support
          </Link>{" "}
          practitioners develop and implement Positive Behaviour Support
          Plans for participants managing complex or challenging
          behaviours, working within the NDIS Commission&rsquo;s regulatory
          framework to ensure every plan is safe, ethical, and genuinely
          effective.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          Local Teams in Sydney, Brisbane, and the Gold Coast
        </h3>
        <p className="mt-3">
          GRS operates from local teams in three key locations — Sydney,
          Brisbane, and the Gold Coast — allowing us to combine the
          consistency of a single clinical organisation with genuinely
          local service delivery. Our clinicians travel to clients&rsquo;
          homes, schools, and community settings, as well as offering
          clinic-based appointments, so families and participants can access
          support in whichever setting works best for them. Wherever
          you&rsquo;re located across NSW or QLD, our team can talk you
          through what&rsquo;s available in your area and how travel
          arrangements work under your NDIS plan.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          How NDIS Funding Works With GRS
        </h3>
        <p className="mt-3">
          We support participants across all NDIS funding management types —
          NDIA-managed, plan-managed, and self-managed — and our team can
          help clarify which funding category applies to occupational
          therapy, speech pathology, psychology, or any of our other
          services. If you&rsquo;re a support coordinator, plan manager, or
          referring professional, our{" "}
          <Link href="/funding-stream" prefetch={false} className={linkCls}>
            Funding Streams page
          </Link>{" "}
          breaks down exactly how each service maps to NDIS support
          categories, so you can refer with confidence.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          Why Families and Coordinators Choose GRS
        </h3>
        <p className="mt-3">
          Choosing an allied health provider is rarely a small decision — it
          means trusting a team with someone&rsquo;s development,
          independence, or wellbeing. Families and support coordinators
          choose GRS because we combine clinical rigour with genuine
          warmth: our clinicians are experienced, our governance and
          compliance standards meet NDIS Commission requirements, and our
          team takes the time to understand each participant&rsquo;s
          specific goals rather than applying a one-size-fits-all approach.
        </p>
        <p className="mt-3">
          Our size works in your favour, too. As a clinician-led, mid-sized
          provider rather than a large national chain, our clients get more
          continuity of care, more direct communication with their treating
          clinician, and a team that genuinely knows their case — not just
          their file number.
        </p>

        <h3 className="mt-8 font-display text-base font-bold text-navy-950">
          Making a Referral
        </h3>
        <p className="mt-3">
          Referring a client to GRS is straightforward, whether you&rsquo;re
          a parent, carer, GP, or NDIS support coordinator. Once a referral
          is submitted, our team reviews the details, reaches out to confirm
          next steps, and works to match the participant with the right
          clinician for their needs and location. We aim to keep families
          and referrers informed throughout the process, so there&rsquo;s
          clarity about timelines and what to expect at every stage.
        </p>
        <p className="mt-3">
          If you&rsquo;re ready to get started, explore our{" "}
          <a href="#services" className={linkCls}>
            Clinical Streams
          </a>{" "}
          and{" "}
          <a href="#disciplines" className={linkCls}>
            Discipline pages
          </a>{" "}
          to learn more about the specific support available, or head to our{" "}
          <Link href="/make-a-referral" prefetch={false} className={linkCls}>
            Make a Referral page
          </Link>{" "}
          to begin the process today. Our team is here to help you navigate
          NDIS-funded allied health support with confidence, across Sydney,
          Brisbane, and the Gold Coast.
        </p>
          </div>
        </details>
      </div>
    </section>
  );
}
