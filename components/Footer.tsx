import { Mail, Phone } from "lucide-react";
import { LOCATIONS } from "@/lib/content/locations";

const STATE_CONTACTS = [
  { state: "NSW", email: "info.nsw@grs.health" },
  { state: "QLD", email: "admin.qld@grs.health" },
];

function NdisBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-full bg-[#5c2d6d] leading-none text-white">
        <span className="text-[9px] font-semibold tracking-wide">we</span>
        <svg viewBox="0 0 24 24" fill="#a3e635" className="my-0.5 h-2.5 w-2.5">
          <path d="M12 21s-7.5-4.6-10-9.2C.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.4C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.8 19.5 16.4 12 21 12 21Z" />
        </svg>
        <span className="text-[9px] font-semibold tracking-wide">ndis</span>
      </div>
      <div className="text-xs leading-tight">
        <p className="font-medium text-white/90">Registered NDIS Provider</p>
        <p className="text-white/50">No. : 4-FZ477GD</p>
        <p className="text-white/50">No. : 4050083180</p>
      </div>
    </div>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.25 8.25h4.31v2.01h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.75c0-1.61-.03-3.68-2.24-3.68-2.25 0-2.6 1.75-2.6 3.56V23h-4.5V8.25Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-navy-800 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="lg:max-w-[220px] lg:shrink-0">
            <span className="inline-flex rounded-xl bg-white p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/grs-logo.svg"
                alt="Global Rehabilitation Service"
                width={265}
                height={80}
                className="h-8 w-auto"
              />
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Global Rehabilitation Service — multidisciplinary allied health
              across NSW &amp; QLD.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rust"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rust"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-rust"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex-1">
            <div>
              <p className="text-sm font-semibold text-white">Locations</p>
              <ul className="mt-3 flex flex-col gap-3">
                {LOCATIONS.map((location) => (
                  <li key={location.slug}>
                    <p className="text-sm font-semibold text-white/90">{location.city}</p>
                    <p className="text-sm">{location.address}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Contact Us</p>
              <div className="mt-3 flex flex-col gap-3">
                <a
                  href="tel:1300066716"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-honey"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  1300 066 716
                </a>
                {STATE_CONTACTS.map(({ state, email }) => (
                  <div key={state}>
                    <p className="flex items-center gap-2 text-sm font-semibold text-white/90">
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      {state}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm transition-colors hover:text-honey"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <NdisBadge />
          <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-4">
            <a href="/privacy-policy" className="transition-colors hover:text-honey">
              Privacy Policy
            </a>
            <p>
              Copyright © Global Rehabilitation Service ABN 51626759019 - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
