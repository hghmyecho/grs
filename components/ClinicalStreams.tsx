import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { STREAMS, type Stream } from "@/lib/content/streams";

const PANEL_SIZES = "(min-width: 1024px) 25vw, 50vw";

function TextPanel({ stream }: { stream: Stream }) {
  const { slug, title, description, panelBg, panelImage, panelText } = stream;

  return (
    <a
      href={`/${slug}`}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden p-7 transition-opacity duration-300 hover:opacity-90 lg:min-h-[280px] ${panelBg} ${panelText}`}
    >
      {panelImage && (
        <Image
          src={panelImage}
          alt=""
          aria-hidden
          fill
          sizes={PANEL_SIZES}
          className="object-cover"
        />
      )}

      <div className="relative">
        <h3 className="font-display text-xl font-extrabold leading-snug sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed opacity-80">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

function PhotoPanel({ href, image, alt }: { href: string; image: string; alt: string }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group relative block min-h-[220px] overflow-hidden bg-white lg:min-h-[280px]"
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={PANEL_SIZES}
        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}

export default function ClinicalStreams() {
  return (
    <section id="services" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-display text-[28px] font-extrabold leading-none text-honey sm:text-[32px]">
            Our Clinical Streams
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Care organised around the people we support
          </h2>
          <p className="mt-4 text-charcoal/80">
            Every stream is led by clinicians who specialise in that area of
            need, working as one team around each participant.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            <TextPanel stream={STREAMS[0]} />
            <PhotoPanel
              href="/physical-disability"
              image="/photos/clinical-physical-disability.png"
              alt="Portrait of a client supported through our Physical Disability stream"
            />
            <TextPanel stream={STREAMS[1]} />
            <PhotoPanel
              href="/paediatrics"
              image="/photos/clinical-paediatrics.png"
              alt="Portrait of a child supported through our Paediatrics stream"
            />
            <PhotoPanel
              href="/psychosocial-disability"
              image="/photos/clinical-psychosocial-disability.png"
              alt="Portrait of clients supported through our Psychosocial Disability stream"
            />
            <TextPanel stream={STREAMS[2]} />
            <PhotoPanel
              href="/specialist-behaviour-support-stream"
              image="/photos/clinical-specialist-behavioural-support.png"
              alt="Portrait of a client supported through our Specialist Behavioural Support stream"
            />
            <TextPanel stream={STREAMS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
