import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-tan py-20 lg:py-24"
    >
      <div className="blob-float pointer-events-none absolute -left-10 -top-10 h-56 w-56 bg-flame/15 blur-3xl" />
      <div className="blob-shape pointer-events-none absolute -bottom-16 right-0 h-64 w-64 bg-honey/10 blur-3xl [animation-delay:-3s]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
          Ready to start the referral process?
        </h2>
        <p className="mt-4 text-charcoal/70">
          Our team responds to every referral personally — no call centres,
          no waiting in the dark.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:1300066716"
            className="bounce-transition inline-flex w-full items-center justify-center gap-2 rounded-full bg-rust px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rust/20 transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:scale-105 hover:brightness-110 active:scale-95 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call 1300 066 716
          </a>
          <a
            href="#footer-contact"
            className="bounce-transition group inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/30 px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:scale-105 hover:bg-charcoal/10 active:scale-95 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Email Referrals
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
