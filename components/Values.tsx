import { Flame, Heart, Sparkles } from "lucide-react";

const VALUES = [
  {
    icon: Flame,
    title: "Passion",
    description:
      "We show up energised by the outcomes we help create, not just the appointments we keep.",
  },
  {
    icon: Sparkles,
    title: "Professionalism",
    description:
      "Evidence-based practice, clear communication, and accountability in every interaction.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We meet people where they are, and design care around their goals — not the other way around.",
  },
];

export default function Values() {
  return (
    <section id="about" className="bg-tan py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow-script">Why Families Choose GRS</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Exceptional healthcare experiences, by design
          </h2>
          <p className="mt-4 text-charcoal/80">
            Quality, safety, and innovation guide how our multidisciplinary
            team shows up for every participant, every day.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-3">
          {/* Decorative connector: two dark dots + a loose wavy thread
              strung between each adjacent pair of cards, cork-board style */}
          <svg
            aria-hidden
            viewBox="0 0 100 6"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -top-2.5 left-0 hidden h-5 w-full sm:block"
          >
            {[
              [31, 35.3],
              [64.7, 69],
            ].map(([x1, x2]) => (
              <g key={x1}>
                <path
                  d={`M${x1} 3 Q ${(x1 + x2) / 2} 6 ${x2} 3`}
                  fill="none"
                  stroke="var(--color-charcoal)"
                  strokeWidth="0.6"
                />
                <circle cx={x1} cy={3} r="1.6" fill="var(--color-charcoal)" />
                <circle cx={x2} cy={3} r="1.6" fill="var(--color-charcoal)" />
              </g>
            ))}
          </svg>

          {VALUES.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-honey"
              />
              <div
                className={`bounce-transition group relative rounded-2xl border-2 border-charcoal bg-cream p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 ${
                  index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                }`}
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-honey text-white group-hover:animate-wiggle">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-charcoal">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
