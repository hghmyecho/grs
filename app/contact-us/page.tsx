import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Global Rehabilitation Service. Call, email, or send a message and our team will get back to you.",
  alternates: { canonical: "/contact-us" },
};

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call us",
    description: "Speak with our team directly, Monday to Friday.",
    links: [{ label: "1300 066 716", href: "tel:1300066716" }],
  },
  {
    icon: Mail,
    title: "Email us",
    description: "NSW and QLD enquiries",
    links: [
      { label: "info.nsw@grs.health", href: "mailto:info.nsw@grs.health" },
      { label: "info.qld@grs.health", href: "mailto:info.qld@grs.health" },
    ],
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Clinics across Sydney, Brisbane & Gold Coast.",
    links: [{ label: "View locations", href: "/#locations" }],
  },
];

export default function ContactUsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact Us", href: "/contact-us" }]} />
      <section className="bg-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Contact Us
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            We're here to help
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Questions about our services, a clinic, or something else
            entirely? Reach out and our team will get back to you.
          </p>
        </div>
      </section>

      <section className="bg-peach-100 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy-950">
              Get in touch
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Prefer to reach us directly? Here's how to find us.
            </p>

            <div className="mt-8 space-y-8">
              {CONTACT_METHODS.map(({ icon: Icon, title, description, links }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-peach-100 text-orange-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-700">{description}</p>
                    <div className="mt-2 flex flex-col gap-1">
                      {links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-sm font-semibold text-orange-700 hover:text-orange-800"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
