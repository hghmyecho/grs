import type { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  BookOpen,
  GraduationCap,
  Repeat,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { CAREERS } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Career development at Global Rehabilitation Service — clinical supervision, career pathways, professional development, clinical rotations, and current opportunities.",
  alternates: { canonical: "/join-us" },
};

const ICONS: Record<string, typeof Users> = {
  "clinical-supervison": ShieldCheck,
  "career-path": Briefcase,
  "continued-professional-development": GraduationCap,
  "clinical-rotations": Repeat,
  "currrent-advertised-positions": BookOpen,
};

export default function JoinUsPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Careers
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            GRS welcomes you to join us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            100% clinician-led, with transparent career pathways, real
            supervision, and professional development that goes beyond
            registration requirements.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {CAREERS.map(({ slug, title, tagline }, index) => {
              const Icon = ICONS[slug] ?? Sparkles;
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  className={`bounce-transition group flex flex-col rounded-2xl border border-slate-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold text-navy-950">
                    {title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                    {tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-slate-700">
              Ready to see what&apos;s open right now?
            </p>
            <a
              href="/currrent-advertised-positions"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-800"
            >
              Current Advertised Positions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
