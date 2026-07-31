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
    <section id="about" className="bg-peach-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-700">
            Why Families Choose GRS
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
            Exceptional healthcare experiences, by design
          </h2>
          <p className="mt-4 text-slate-700">
            Quality, safety, and innovation guide how our multidisciplinary
            team shows up for every participant, every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`bounce-transition group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-xl ${
                index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
              }`}
            >
              <span className="blob-shape mx-auto flex h-14 w-14 items-center justify-center bg-navy-900 text-white group-hover:animate-wiggle">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
