import { SITE } from "@/lib/site";

export function TrustStrip({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        isDark
          ? "border-t-2 border-brand-gold bg-brand-dark py-4 text-brand-offwhite"
          : "border border-brand-teal/20 bg-brand-cream py-4 text-brand-dark"
      }
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-center text-sm md:text-base">
        <li>ABN {SITE.abn}</li>
        <li aria-hidden="true" className="hidden text-brand-gold md:inline">
          |
        </li>
        <li>Public liability insurance held</li>
        <li aria-hidden="true" className="hidden text-brand-gold md:inline">
          |
        </li>
        <li>Fully Insured</li>
        <li aria-hidden="true" className="hidden text-brand-gold md:inline">
          |
        </li>
        <li>Police-Checked Staff</li>
        <li aria-hidden="true" className="hidden text-brand-gold md:inline">
          |
        </li>
        <li>Locally Owned Newcastle</li>
      </ul>
    </div>
  );
}
