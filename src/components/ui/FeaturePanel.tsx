import type { ReactNode } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionPanel";

type FeaturePanelProps = {
  heading: string;
  body: string[];
  imageLabel: string;
  imageSrc?: string;
  /** Flips media/text columns inside the panel only. Default: media on the right. */
  mediaPosition?: "left" | "right";
  footer?: ReactNode;
  mediaFooter?: ReactNode;
  tone?: "plain" | "cream";
};

/**
 * Self-contained editorial panel: heading + body | capped media.
 * Mobile: heading → image → body (all inside the same panel).
 */
export function FeaturePanel({
  heading,
  body,
  imageLabel,
  imageSrc,
  mediaPosition = "right",
  footer,
  mediaFooter,
  tone = "plain",
}: FeaturePanelProps) {
  const mediaOnLeft = mediaPosition === "left";

  return (
    <section
      className={`fm-panel overflow-hidden fm-panel-pad ${
        tone === "cream"
          ? "border-brand-teal/15 bg-brand-cream"
          : "border-brand-teal/15 bg-white"
      }`}
    >
      <div className="grid min-w-0 grid-cols-1 items-start gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-4">
        <SectionHeading
          className={`order-1 ${
            mediaOnLeft ? "lg:col-start-2" : "lg:col-start-1"
          } lg:row-start-1`}
        >
          {heading}
        </SectionHeading>

        <div
          className={`order-2 min-w-0 ${
            mediaOnLeft ? "lg:col-start-1" : "lg:col-start-2"
          } lg:row-span-2 lg:row-start-1`}
        >
          <ImagePlaceholder
            label={imageLabel}
            src={imageSrc}
            aspect="photo"
            className="rounded-xl shadow-sm"
          />
          {mediaFooter ? <div className="mt-4">{mediaFooter}</div> : null}
        </div>

        <div
          className={`order-3 min-w-0 ${
            mediaOnLeft ? "lg:col-start-2" : "lg:col-start-1"
          } lg:row-start-2`}
        >
          <div className="space-y-4 text-brand-dark/90">
            {body.map((para) => (
              <p key={para} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          {footer ? <div className="mt-5">{footer}</div> : null}
        </div>
      </div>
    </section>
  );
}
