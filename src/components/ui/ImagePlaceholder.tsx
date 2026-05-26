type ImagePlaceholderProps = {
  label: string;
  aspect?: "video" | "square" | "wide";
  className?: string;
};

/** Dashed placeholder block — matches homepage pattern until real assets are added. */
export function ImagePlaceholder({
  label,
  aspect = "video",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <div
      className={`flex ${aspectClass} w-full items-center justify-center rounded-lg border-2 border-dashed border-brand-teal/40 bg-brand-cream px-4 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <p className="font-medium text-sm text-brand-dark/80 md:text-base">
        [PLACEHOLDER — {label}]
      </p>
    </div>
  );
}
