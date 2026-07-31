import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-navy-900 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
          Ready to start the referral process?
        </h2>
        <p className="mt-4 text-white/70">
          Our team responds to every referral personally — no call centres,
          no waiting in the dark.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:1300066716"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-800 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            Call 1300 066 716
          </a>
          <a
            href="#footer-contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Email Referrals
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
