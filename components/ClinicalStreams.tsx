import { ArrowRight } from "lucide-react";
import { STREAMS, type Stream } from "@/lib/content/streams";

function TextPanel({ stream }: { stream: Stream }) {
  const { slug, title, description, panelBg, panelImage, panelText } = stream;

  return (
    <a
      href={`/${slug}`}
      className={`group relative flex min-h-[220px] flex-col justify-end overflow-hidden p-7 transition-opacity duration-300 hover:opacity-90 lg:min-h-[280px] ${panelBg} ${panelText}`}
    >
      {panelImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={panelImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
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

function PhotoPanel({ index, image, alt }: { index: number; image?: string; alt?: string }) {
  if (image) {
    return (
      <div className="relative min-h-[220px] overflow-hidden bg-white lg:min-h-[280px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt ?? ""}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[220px] overflow-hidden bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 lg:min-h-[280px]">
      <div
        className={`absolute inset-0 mix-blend-color ${
          index % 2 === 0 ? "bg-orange-500/40" : "bg-navy-900/40"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white/80">
        Photography placeholder
      </div>
    </div>
  );
}

export default function ClinicalStreams() {
  const cells = [
    { type: "text" as const, stream: STREAMS[0] },
    {
      type: "photo" as const,
      index: 0,
      image: "/photos/clinical-physical-disability.png",
      alt: "Portrait of a client supported through our Physical Disability stream",
    },
    { type: "text" as const, stream: STREAMS[1] },
    {
      type: "photo" as const,
      index: 1,
      image: "/photos/clinical-paediatrics.png",
      alt: "Portrait of a client supported through our Paediatrics stream",
    },
    {
      type: "photo" as const,
      index: 2,
      image: "/photos/clinical-psychosocial-disability.png",
      alt: "Portrait of a client supported through our Psychosocial Disability stream",
    },
    { type: "text" as const, stream: STREAMS[2] },
    {
      type: "photo" as const,
      index: 3,
      image: "/photos/clinical-specialist-behavioural-support.png",
      alt: "Portrait of a parent and child supported through our Specialist Behavioural Support stream",
    },
    { type: "text" as const, stream: STREAMS[3] },
  ];

  return (
    <section id="services" className="bg-[#f5f5f5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Our Clinical Streams
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
            Care organised around the people we support
          </h2>
          <p className="mt-4 text-slate-700">
            Every stream is led by clinicians who specialise in that area of
            need, working as one team around each participant.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {cells.map((cell, i) =>
              cell.type === "text" ? (
                <TextPanel key={cell.stream.title} stream={cell.stream} />
              ) : (
                <PhotoPanel
                  key={`photo-${i}`}
                  index={cell.index}
                  image={cell.image}
                  alt={cell.alt}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
