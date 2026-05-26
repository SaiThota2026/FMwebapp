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
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
          {h1}
        </h1>
        {lead && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-dark/90">
            {lead}
          </p>
        )}
      </div>
      {showTrustStrip && <TrustStrip variant="light" />}
    </div>
  );
}
