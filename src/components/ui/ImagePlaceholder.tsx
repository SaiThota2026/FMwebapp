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
      className={`flex ${aspectClass} w-full min-w-0 items-center justify-center rounded-lg border-2 border-dashed border-brand-teal/40 bg-brand-cream px-3 py-4 text-center sm:px-4 ${className}`}
      role="img"
      aria-label={label}
    >
      <p className="max-w-full break-words font-medium text-xs leading-snug text-brand-dark/80 sm:text-sm md:text-base">
        [PLACEHOLDER — {label}]
      </p>
    </div>
  );
}
