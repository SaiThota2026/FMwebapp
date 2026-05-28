import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import {
  COMPANY_LINKS,
  LOCATIONS,
  SERVICES,
  SITE,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const privacy = COMPANY_LINKS.find((l) => l.name === "Privacy Policy");
  const sitemap = COMPANY_LINKS.find((l) => l.name === "Sitemap");
  const isIndustryLink = (
    link: (typeof COMPANY_LINKS)[number],
  ): link is (typeof COMPANY_LINKS)[number] & { group: "Industries" } =>
    "group" in link && link.group === "Industries";
  const companyLinks = COMPANY_LINKS.filter(
    (l) =>
      l.name !== "Sitemap" &&
      l.name !== "Privacy Policy" &&
      !isIndustryLink(l),
  );
  const industryLinks = COMPANY_LINKS.filter(isIndustryLink);

  return (
    <footer className="bg-brand-dark text-brand-offwhite">
      <div className="fm-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="footer" />
          <p className="mt-4 text-sm leading-relaxed">
            Locally owned and operated in Newcastle, NSW
          </p>
          <p className="mt-2 text-sm">ABN {SITE.abn}</p>
          <p className="mt-2 text-sm text-brand-offwhite/80">
            [PLACEHOLDER — insert public liability insurance amount]
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-brand-gold">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services/"
                className="font-semibold text-brand-gold transition-colors hover:text-brand-offwhite"
              >
                View All Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Locations
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-gold">
                  {l.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/locations/"
                className="font-semibold text-brand-gold transition-colors hover:text-brand-offwhite"
              >
                View All Locations
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Company
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-gold">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          {industryLinks.length > 0 && (
            <>
              <h3 className="mt-6 font-display text-xs font-semibold uppercase tracking-wider text-brand-gold/90">
                Industries
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {industryLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-brand-gold">
                      {l.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/industries/"
                    className="font-semibold text-brand-gold transition-colors hover:text-brand-offwhite"
                  >
                    View All Industries
                  </Link>
                </li>
              </ul>
            </>
          )}
          <p className="mt-6 text-sm">
            <a
              href={`tel:${SITE.phone}`}
              className="font-semibold hover:text-brand-gold"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-brand-gold"
            >
              {SITE.email}
            </a>
          </p>
          <p className="mt-1 text-sm">{SITE.address}</p>
        </div>
      </div>

      <div className="border-t border-brand-teal/30">
        <div className="fm-container flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-brand-offwhite/80 md:flex-row md:text-left">
          <p>
            © {year} {SITE.name}. ABN {SITE.abn}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {privacy && (
              <Link href={privacy.href} className="hover:text-brand-gold">
                Privacy Policy
              </Link>
            )}
            {sitemap && (
              <Link href={sitemap.href} className="hover:text-brand-gold">
                Sitemap
              </Link>
            )}
          </div>
          <p className="text-xs">
            Designed and built by{" "}
            <a
              href="https://www.newytechs.com.au/"
              className="font-medium text-brand-gold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              NewyTechs
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
