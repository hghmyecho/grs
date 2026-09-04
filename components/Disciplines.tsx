"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { DISCIPLINES } from "@/lib/content/disciplines";

export default function Disciplines() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        window.scrollBy(0, event.deltaY);
      }
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    return () => track.removeEventListener("wheel", handleWheel);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 300) + 24;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section id="disciplines" className="overflow-hidden bg-navy-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow-script">Our Disciplines</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-cream sm:text-4xl">
              One team, eight ways to support you
            </h2>
            <p className="mt-4 text-cream/60">
              Clinicians across every discipline collaborate on shared goals,
              so care never feels fragmented.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="bounce-transition flex h-11 w-11 items-center justify-center rounded-full bg-rust text-white transition-all duration-300 hover:scale-110 hover:brightness-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="bounce-transition flex h-11 w-11 items-center justify-center rounded-full bg-rust text-white transition-all duration-300 hover:scale-110 hover:brightness-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="carousel-track no-scrollbar mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
      >
        {DISCIPLINES.map(({ slug, tags, title, description, gradient, image }, index) => (
            <div
              key={title}
              data-card
              className={`bounce-transition group relative flex w-[300px] shrink-0 snap-start flex-col transition-all duration-300 hover:-translate-y-2 hover:rotate-0 sm:w-[340px] ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div
                aria-hidden
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[20px] bg-honey"
              />
              <div className="relative flex flex-1 flex-col overflow-hidden rounded-[20px] border-2 border-honey bg-cream">
                <div className="relative p-6">
                  <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-honey text-white group-hover:animate-wiggle">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="flex flex-wrap gap-2 pr-9">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-honey"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/80">
                    {description}
                  </p>
                </div>

                <div
                  className={`relative min-h-[300px] flex-1 overflow-hidden bg-gradient-to-br ${gradient}`}
                >
                  {image && (
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="340px"
                      className="object-cover object-top"
                    />
                  )}

                  <a
                    href={`/${slug}`}
                    aria-label={`Read more about ${title}`}
                    className="bounce-transition absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:brightness-110 active:scale-95"
                  >
                    Read More
                    <span className="sr-only"> about {title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        <div aria-hidden className="w-px shrink-0" />
      </div>
    </section>
  );
}
