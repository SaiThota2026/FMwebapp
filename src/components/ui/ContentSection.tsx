import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type ContentSectionProps = {
  heading: string;
  body: string[];
  imageLabel: string;
  imagePosition?: "left" | "right";
};

export function ContentSection({
  heading,
  body,
  imageLabel,
  imagePosition = "right",
}: ContentSectionProps) {
  const text = (
    <div>
      <h2 className="font-display text-3xl font-bold text-brand-dark">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-brand-dark/90">
        {body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </div>
  );

  const visual = (
    <ImagePlaceholder label={imageLabel} aspect="video" />
  );

  return (
    <section className="mt-16">
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
          imagePosition === "left" ? "" : ""
        }`}
      >
        {imagePosition === "left" ? (
          <>
            {visual}
            {text}
          </>
        ) : (
          <>
            {text}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}
