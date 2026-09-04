import type { Metadata } from "next";
import { ArrowRight, FileText, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "GRS doesn't take direct online bookings — appointments follow our intake process. Send an inquiry if you're unsure we're the right fit, or make a referral (no doctor's referral needed) to get started.",
  alternates: { canonical: "/book-online" },
};

// GRS doesn't run appointments through direct self-service booking — every
// new client goes through intake first. Rather than show an empty booking
// widget, this page forks people toward the right next step: an inquiry
// (call or the contact form) if they're unsure GRS is a fit, or a referral
// (no doctor's referral required) if they're ready to get started.
export default function BookOnlinePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Book Online", href: "/book-online" }]} />
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <span className="eyebrow-script">
            Book Online
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            We don&apos;t take bookings directly
          </h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Every new client goes through our intake process first, so
            appointments aren&apos;t booked straight from the website. Pick
            whichever path below fits where you&apos;re at.
          </p>
        </div>
      </section>

      <section className="bg-tan px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <span className="blob-shape flex h-14 w-14 items-center justify-center bg-honey text-white">
              <HelpCircle className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-charcoal">
              Not sure if we&apos;re the right fit?
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/80">
              Give our team a call or send a quick online inquiry — no
              referral needed. We&apos;re happy to talk through your needs
              and how GRS can help before you commit to anything.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:1300066716"
                className="bounce-transition inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-tan"
              >
                <Phone className="h-4 w-4" />
                1300 066 716
              </a>
              <Link
                href="/contact-us"
                className="bounce-transition group inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-navy-800"
              >
                Send an Inquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-navy-800 p-8 shadow-sm sm:p-10">
            <span className="blob-shape flex h-14 w-14 items-center justify-center bg-honey text-white">
              <FileText className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
              Complete our online referral form. You don&apos;t need a
              doctor&apos;s referral — participants, families, and support
              coordinators can all refer directly.
            </p>
            <div className="mt-6">
              <Link
                href="/make-a-referral"
                className="bounce-transition group inline-flex items-center gap-2 rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:brightness-110"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
