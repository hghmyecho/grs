import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { DISCIPLINES } from "@/lib/content/disciplines";

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-navy-800 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map(({ slug, tags, title, description, gradient, image }, index) => (
            <div
              key={title}
              className={`bounce-transition group relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:rotate-0 ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <div
                aria-hidden
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[20px] bg-honey"
              />
              <div className="relative flex flex-col overflow-hidden rounded-[20px] border-2 border-honey bg-cream">
                <div className="relative p-5">
                  <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg bg-honey text-white group-hover:animate-wiggle">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="flex flex-nowrap gap-1.5 pr-9">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-honey"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 min-h-[3.25rem] font-display text-xl font-bold leading-snug text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-charcoal/80">
                    {description}
                  </p>
                </div>

                <div
                  className={`relative h-44 overflow-hidden bg-gradient-to-br ${gradient}`}
                >
                  {image && (
                    <Image
                      src={image}
                      alt=""
                      aria-hidden
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  )}

                  <a
                    href={`/${slug}`}
                    aria-label={`Read more about ${title}`}
                    className="bounce-transition absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-rust px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:-rotate-2 hover:brightness-110 active:scale-95"
                  >
                    Read More
                    <span className="sr-only"> about {title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
