import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { TrustStrip } from "@/components/ui/TrustStrip";

type PageIntroProps = {
  breadcrumbs: BreadcrumbItem[];
  h1: string;
  lead?: string;
  showTrustStrip?: boolean;
};

export function PageIntro({
  breadcrumbs,
  h1,
  lead,
  showTrustStrip = true,
}: PageIntroProps) {
  return (
    <div className="border-b border-brand-teal/10 bg-brand-cream">
      <div className="fm-container py-10 md:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl md:text-4xl">
          {h1}
        </h1>
        {lead && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-dark/90 md:text-lg">
            {lead}
          </p>
        )}
      </div>
      {showTrustStrip && <TrustStrip variant="light" />}
    </div>
  );
}
