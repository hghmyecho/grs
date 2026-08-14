import type { Metadata } from "next";
import { ArrowRight, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Online",
  description: "Online booking at GRS.",
  alternates: { canonical: "/book-online" },
};

// Matches the live site's current state (grs.health/book-online) — no
// online booking widget is active there either. Rather than build a fake
// booking form, this mirrors that honestly and routes people to a real
// next step (referral or phone) instead.
export default function BookOnlinePage() {
  return (
    <section className="bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h1 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Nothing to book right now
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Check back soon — in the meantime, the fastest way to get started
          is a referral or a call to our team.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/make-a-referral"
            className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800"
          >
            <FileText className="h-4 w-4" />
            Make a Referral
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:1300066716"
            className="bounce-transition inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            1300 066 716
          </a>
        </div>
      </div>
    </section>
  );
}
