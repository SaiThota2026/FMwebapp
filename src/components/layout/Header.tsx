"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { COMPANY_LINKS, LOCATIONS, SERVICES, SITE } from "@/lib/site";

function NavDropdown({
  label,
  items,
  footerLink,
}: {
  label: string;
  items: readonly { name: string; href: string }[];
  footerLink?: { name: string; href: string };
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 py-2 font-medium text-brand-offwhite hover:text-brand-gold"
        aria-haspopup="true"
      >
        {label}
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-[240px] rounded-md border border-brand-teal/30 bg-brand-dark py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-brand-offwhite hover:bg-brand-teal/20 hover:text-brand-gold"
          >
            {item.name}
          </Link>
        ))}
        {footerLink && (
          <>
            <hr className="my-2 border-brand-teal/20" />
            <Link
              href={footerLink.href}
              className="block px-4 py-2 text-sm font-semibold text-brand-gold transition-colors hover:text-brand-offwhite"
            >
              {footerLink.name}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const aboutLink = COMPANY_LINKS.find((l) => l.name === "About Us");
  const faqLink = COMPANY_LINKS.find((l) => l.name === "FAQ");

  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo variant="header" />

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          <NavDropdown
            label="Services"
            items={SERVICES}
            footerLink={{ name: "View All Services", href: "/services/" }}
          />
          <NavDropdown label="Locations" items={LOCATIONS} />
          {aboutLink && (
            <Link
              href={aboutLink.href}
              className="font-medium text-brand-offwhite hover:text-brand-gold"
            >
              About
            </Link>
          )}
          {faqLink && (
            <Link
              href={faqLink.href}
              className="font-medium text-brand-offwhite hover:text-brand-gold"
            >
              FAQ
            </Link>
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="font-semibold text-brand-offwhite hover:text-brand-gold"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded p-2 text-brand-offwhite lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="text-2xl">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-[80px] z-40 flex flex-col bg-brand-dark lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <button
              type="button"
              className="flex w-full items-center justify-between py-3 font-semibold text-brand-offwhite"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <ul className="mb-4 ml-4 space-y-2 border-l border-brand-teal/30 pl-4">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-brand-offwhite/90 hover:text-brand-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services/"
                    className="font-semibold text-brand-gold"
                    onClick={() => setMobileOpen(false)}
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            )}

            <button
              type="button"
              className="flex w-full items-center justify-between py-3 font-semibold text-brand-offwhite"
              onClick={() => setLocationsOpen(!locationsOpen)}
            >
              Locations
              <span>{locationsOpen ? "−" : "+"}</span>
            </button>
            {locationsOpen && (
              <ul className="mb-4 ml-4 space-y-2 border-l border-brand-teal/30 pl-4">
                {LOCATIONS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-brand-offwhite/90 hover:text-brand-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {aboutLink && (
              <Link
                href={aboutLink.href}
                className="block py-3 font-semibold text-brand-offwhite"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            )}
            {faqLink && (
              <Link
                href={faqLink.href}
                className="block py-3 font-semibold text-brand-offwhite"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </Link>
            )}
          </div>

          <div className="border-t border-brand-teal/30 p-4">
            <a
              href={`tel:${SITE.phone}`}
              className="mb-3 block text-center text-lg font-semibold text-brand-gold"
            >
              {SITE.phoneDisplay}
            </a>
            <Link
              href="/contact/"
              className="block w-full rounded-md bg-brand-gold py-3 text-center font-semibold text-brand-dark"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
