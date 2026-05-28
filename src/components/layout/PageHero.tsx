import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TrustStrip } from "@/components/ui/TrustStrip";
import type { PageVisualConfig } from "@/lib/page-visuals";

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  lead?: string;
  visual: PageVisualConfig;
  showTrustStrip?: boolean;
};

export function PageHero({
  breadcrumbs,
  h1,
  lead,
  visual,
  showTrustStrip = true,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-brand-teal/20 bg-brand-dark text-brand-offwhite">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-transparent to-brand-gold/15"
      />
      <div
        aria-hidden="true"
        className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-brand-gold/15 blur-3xl"
      />

      <div className="relative fm-container py-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="fm-fade-up min-w-0">
            <Breadcrumbs items={breadcrumbs} variant="dark" />
            <h1 className="mt-2 text-balance font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.5rem]">
              {h1}
            </h1>
            {lead && (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-offwhite/90 md:text-lg">
                {lead}
              </p>
            )}
          </div>

          <div className="fm-fade-up fm-delay-2 min-w-0">
            <ImagePlaceholder
              label={visual.heroLabel}
              aspect="video"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      {showTrustStrip && <TrustStrip variant="dark" />}
    </section>
  );
}
