// Flat catch-all for the 4 "shared template per group" content types —
// disciplines, clinical streams, locations, and career sub-pages. Kept as
// ONE dynamic segment at the root (not nested under /disciplines/[slug]
// etc.) specifically so the URLs stay flat and match the original
// grs.health site exactly (e.g. /physiotherapy, /brisbane, /join-us) —
// see the project memory's SEO-parity note. Static routes elsewhere in
// app/ (our-story, contact-us, join-us, etc.) always take precedence over
// this dynamic segment for the same path, so there's no collision risk.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DISCIPLINES, getDiscipline } from "@/lib/content/disciplines";
import { STREAMS, getStream } from "@/lib/content/streams";
import { LOCATIONS, getLocation } from "@/lib/content/locations";
import { CAREERS, getCareer } from "@/lib/content/careers";
import DisciplinePage from "@/components/templates/DisciplinePage";
import StreamPage from "@/components/templates/StreamPage";
import LocationPage from "@/components/templates/LocationPage";
import CareerPage from "@/components/templates/CareerPage";

export function generateStaticParams() {
  return [
    ...DISCIPLINES.map((d) => ({ slug: d.slug })),
    ...STREAMS.map((s) => ({ slug: s.slug })),
    ...LOCATIONS.map((l) => ({ slug: l.slug })),
    ...CAREERS.map((c) => ({ slug: c.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const discipline = getDiscipline(slug);
  if (discipline) {
    return {
      title: discipline.title,
      description: discipline.description,
      alternates: { canonical: `/${slug}` },
    };
  }

  const stream = getStream(slug);
  if (stream) {
    return {
      title: stream.title,
      description: stream.description,
      alternates: { canonical: `/${slug}` },
    };
  }

  const location = getLocation(slug);
  if (location) {
    return {
      title: `GRS ${location.city}`,
      description: location.serviceArea,
      alternates: { canonical: `/${slug}` },
    };
  }

  const career = getCareer(slug);
  if (career) {
    return {
      title: career.title,
      description: career.tagline,
      alternates: { canonical: `/${slug}` },
    };
  }

  return {};
}

export default async function ContentSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const discipline = getDiscipline(slug);
  if (discipline) return <DisciplinePage discipline={discipline} />;

  const stream = getStream(slug);
  if (stream) return <StreamPage stream={stream} />;

  const location = getLocation(slug);
  if (location) return <LocationPage location={location} />;

  const career = getCareer(slug);
  if (career) return <CareerPage career={career} />;

  notFound();
}
