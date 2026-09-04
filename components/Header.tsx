"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content/nav";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 py-5 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-6 lg:px-8">
        <Link href="/" prefetch={false} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/grs-logo.svg"
            alt="Global Rehabilitation Service"
            width={265}
            height={80}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-cream p-1.5 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setOpenMenu(link.label)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:bg-white hover:text-charcoal"
              >
                {link.label}
                <ChevronDown className="h-3.5 w-3.5" />
              </a>

              {openMenu === link.label && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-80 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-honey/20">
                    {link.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cream/60"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-honey">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-charcoal">
                            {item.label}
                          </span>
                          <span className="block text-xs leading-relaxed text-charcoal/80">
                            {item.description}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:1300066716"
            className="flex items-center gap-2 text-sm font-semibold text-charcoal"
          >
            <Phone className="h-4 w-4 text-rust" />
            1300 066 716
          </a>
          <a
            href="/make-a-referral"
            className="rounded-full bg-rust px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:brightness-110"
          >
            Make a Referral
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mt-4 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-honey/20 bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-honey/20 py-2">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileMenu((v) =>
                      v === link.label ? null : link.label
                    )
                  }
                  className="flex w-full items-center justify-between py-1 text-sm font-medium text-charcoal"
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openMobileMenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openMobileMenu === link.label && (
                  <div className="mt-2 flex flex-col gap-3 pb-2 pl-2">
                    {link.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-honey">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-charcoal">
                            {item.label}
                          </span>
                          <span className="block text-xs text-charcoal/80">
                            {item.description}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="tel:1300066716"
              className="mt-3 flex items-center gap-2 text-sm font-semibold text-charcoal"
            >
              <Phone className="h-4 w-4 text-rust" />
              1300 066 716
            </a>
            <a
              href="/make-a-referral"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-rust px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Make a Referral
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
