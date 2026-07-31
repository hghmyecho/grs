import { Accessibility, Baby, Brain, HeartHandshake } from "lucide-react";

const STREAMS = [
  {
    icon: Accessibility,
    title: "Physical Disability",
    description:
      "Individuals with disabilities may encounter limitations in their physical capacities, which can impact their ability to move, perform self-care tasks, and manage their daily lives independently.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Baby,
    title: "Paediatrics",
    description:
      "Children with disabilities may encounter challenges in their physical, cognitive, social, and emotional capacities, which can impact their ability to learn, engage in play, move, communicate, perform self-care tasks, and interact with others.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Brain,
    title: "Psychosocial Disability",
    description:
      "Individuals with disabilities may face challenges in their psychosocial functioning, which can influence their ability to communicate, participate in social interactions, learn, and independently carry out self-care and self-management tasks.",
    iconBg: "bg-slate-200",
    iconColor: "text-slate-600",
  },
  {
    icon: HeartHandshake,
    title: "Specialist Behavioural Support",
    description:
      "Individuals with disabilities may face challenges in their cognitive, emotional, and social abilities, which can influence their capacity to adapt to social needs, maintain physical safety, achieve emotional well-being, and engage cognitively.",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
];

export default function ClinicalStreams() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STREAMS.map(({ icon: Icon, title, description, iconBg, iconColor }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-slate-300"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-navy-950">
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
