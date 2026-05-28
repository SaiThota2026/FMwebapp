"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { COMPANY_LINKS, INDUSTRIES, LOCATIONS, SERVICES, SITE } from "@/lib/site";

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
        className="fm-touch-target flex items-center gap-1 py-2 font-medium text-brand-offwhite hover:text-brand-gold"
        aria-haspopup="true"
      >
        {label}
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </button>
      <div className="invisible absolute left-0 top-full z-50 max-h-[min(70vh,22rem)] min-w-[240px] overflow-y-auto overscroll-contain rounded-md border border-brand-teal/30 bg-brand-dark py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const aboutLink = COMPANY_LINKS.find((l) => l.name === "About Us");
  const faqLink = COMPANY_LINKS.find((l) => l.name === "FAQ");

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.classList.toggle("fm-nav-open", mobileOpen);
    return () => document.body.classList.remove("fm-nav-open");
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark shadow-md pt-[env(safe-area-inset-top,0px)]">
      <div className="fm-container flex items-center justify-between gap-4 py-3">
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
          <NavDropdown
            label="Industries"
            items={INDUSTRIES}
            footerLink={{ name: "View All Industries", href: "/industries/" }}
          />
          <NavDropdown
            label="Locations"
            items={LOCATIONS}
            footerLink={{ name: "View All Locations", href: "/locations/" }}
          />
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
            className="fm-touch-target inline-flex items-center rounded-md bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/40"
          >
            Get a Free Quote
          </Link>
        </div>

        <button
          type="button"
          className="fm-touch-target -mr-1 inline-flex min-w-11 items-center justify-center rounded-md text-brand-offwhite lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-brand-dark/60 lg:hidden"
            aria-label="Close menu"
            onClick={closeMobile}
          />
          <div
            id="mobile-nav-panel"
            className="fixed inset-x-0 bottom-0 z-50 flex max-h-[min(85dvh,32rem)] flex-col border-t border-brand-teal/30 bg-brand-dark shadow-2xl lg:hidden"
            style={{ top: "max(4.5rem, calc(4.5rem + env(safe-area-inset-top, 0px)))" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <button
                type="button"
                className="fm-touch-target flex w-full items-center justify-between py-2 font-semibold text-brand-offwhite"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <ul className="mb-3 ml-4 space-y-2 border-l border-brand-teal/30 pl-4">
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block py-1 text-brand-offwhite/90 hover:text-brand-gold"
                        onClick={closeMobile}
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services/"
                      className="block py-1 font-semibold text-brand-gold"
                      onClick={closeMobile}
                    >
                      View All Services
                    </Link>
                  </li>
                </ul>
              )}

              <button
                type="button"
                className="fm-touch-target flex w-full items-center justify-between py-2 font-semibold text-brand-offwhite"
                aria-expanded={industriesOpen}
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                Industries
                <span aria-hidden="true">{industriesOpen ? "−" : "+"}</span>
              </button>
              {industriesOpen && (
                <ul className="mb-3 ml-4 space-y-2 border-l border-brand-teal/30 pl-4">
                  {INDUSTRIES.map((i) => (
                    <li key={i.href}>
                      <Link
                        href={i.href}
                        className="block py-1 text-brand-offwhite/90 hover:text-brand-gold"
                        onClick={closeMobile}
                      >
                        {i.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/industries/"
                      className="block py-1 font-semibold text-brand-gold"
                      onClick={closeMobile}
                    >
                      View All Industries
                    </Link>
                  </li>
                </ul>
              )}

              <button
                type="button"
                className="fm-touch-target flex w-full items-center justify-between py-2 font-semibold text-brand-offwhite"
                aria-expanded={locationsOpen}
                onClick={() => setLocationsOpen(!locationsOpen)}
              >
                Locations
                <span aria-hidden="true">{locationsOpen ? "−" : "+"}</span>
              </button>
              {locationsOpen && (
                <ul className="mb-3 ml-4 space-y-2 border-l border-brand-teal/30 pl-4">
                  {LOCATIONS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block py-1 text-brand-offwhite/90 hover:text-brand-gold"
                        onClick={closeMobile}
                      >
                        {l.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/locations/"
                      className="block py-1 font-semibold text-brand-gold"
                      onClick={closeMobile}
                    >
                      View All Locations
                    </Link>
                  </li>
                </ul>
              )}

              {aboutLink && (
                <Link
                  href={aboutLink.href}
                  className="fm-touch-target block py-2 font-semibold text-brand-offwhite"
                  onClick={closeMobile}
                >
                  About
                </Link>
              )}
              {faqLink && (
                <Link
                  href={faqLink.href}
                  className="fm-touch-target block py-2 font-semibold text-brand-offwhite"
                  onClick={closeMobile}
                >
                  FAQ
                </Link>
              )}
            </div>

            <div className="shrink-0 border-t border-brand-teal/30 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))]">
              <a
                href={`tel:${SITE.phone}`}
                className="fm-touch-target mb-3 flex items-center justify-center text-lg font-semibold text-brand-gold"
              >
                {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact/"
                className="fm-touch-target block w-full rounded-md bg-brand-gold py-3 text-center font-semibold text-brand-dark"
                onClick={closeMobile}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
