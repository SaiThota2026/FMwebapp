import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionPanel";

export type FeatureCardItem = {
  heading: string;
  body: string[];
  imageLabel: string;
  imageSrc?: string;
};

type FeatureCardGridProps = {
  items: FeatureCardItem[];
  /** Optional section label above the grid. */
  heading?: string;
};

/**
 * Equal-structure cards for short multi-section pages (e.g. service detail).
 * Same image → heading → body stack in every card = automatic alignment.
 */
export function FeatureCardGrid({ items, heading }: FeatureCardGridProps) {
  return (
    <section className="min-w-0">
      {heading ? (
        <SectionHeading className="mb-6 sm:mb-8">{heading}</SectionHeading>
      ) : null}
      <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {items.map((item) => (
          <article
            key={item.heading}
            className="fm-panel flex h-full min-w-0 flex-col overflow-hidden border-brand-teal/15 bg-white"
          >
            <ImagePlaceholder
              label={item.imageLabel}
              src={item.imageSrc}
              aspect="video"
              className="rounded-none"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-pretty font-display text-xl font-bold leading-snug tracking-tight text-brand-dark sm:text-[1.35rem]">
                {item.heading}
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-dark/90 sm:text-base">
                {item.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
