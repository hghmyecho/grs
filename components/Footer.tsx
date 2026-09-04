function NdisBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full bg-[#5c2d6d] leading-none text-white">
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

const FOOTER_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Join Us", href: "#" },
  { label: "Locations", href: "#locations" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="inline-flex rounded-xl bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/grs-logo.svg"
                alt="Global Rehabilitation Service"
                width={265}
                height={80}
                className="h-9 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Global Rehabilitation Service — multidisciplinary allied health
              across NSW &amp; QLD.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange-500"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-orange-500"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <NdisBadge />
          <p className="text-xs">
            Copyright © Global Rehabilitation Service ABN 51626759019 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
