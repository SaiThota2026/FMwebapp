import { FeaturePanel } from "@/components/ui/FeaturePanel";

type ContentSectionProps = {
  heading: string;
  body: string[];
  imageLabel: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
};

/** Thin alias — prefer FeaturePanel for new call sites. */
export function ContentSection({
  heading,
  body,
  imageLabel,
  imageSrc,
  imagePosition = "right",
}: ContentSectionProps) {
  return (
    <FeaturePanel
      heading={heading}
      body={body}
      imageLabel={imageLabel}
      imageSrc={imageSrc}
      mediaPosition={imagePosition}
    />
  );
}
