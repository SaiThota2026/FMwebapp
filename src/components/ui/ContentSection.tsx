import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

type ContentSectionProps = {
  heading: string;
  body: string[];
  imageLabel: string;
  imagePosition?: "left" | "right";
};

function SectionText({
  heading,
  body,
}: {
  heading: string;
  body: string[];
}) {
  return (
    <div className="min-w-0">
      <h2 className="font-display text-2xl font-bold text-brand-dark lg:text-3xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-brand-dark/90">
        {body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </div>
  );
}

export function ContentSection({
  heading,
  body,
  imageLabel,
  imagePosition = "right",
}: ContentSectionProps) {
  return (
    <section className="mt-12 first:mt-0 lg:mt-16">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className={`order-1 min-w-0 ${
            imagePosition === "left" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <SectionText heading={heading} body={body} />
        </div>
        <div
          className={`order-2 min-w-0 ${
            imagePosition === "left" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <ImagePlaceholder label={imageLabel} aspect="video" />
        </div>
      </div>
    </section>
  );
}
