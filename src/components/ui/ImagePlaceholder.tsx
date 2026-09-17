type ImagePlaceholderProps = {
  label: string;
  src?: string;
  aspect?: "video" | "square" | "wide" | "photo";
  className?: string;
};

/** Renders a real image when `src` is set; otherwise a dashed label placeholder. */
export function ImagePlaceholder({
  label,
  src,
  aspect = "video",
  className = "",
}: ImagePlaceholderProps) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : aspect === "photo"
          ? "aspect-[4/3]"
          : "aspect-video";

  if (src) {
    return (
      <div
        className={`relative w-full min-w-0 overflow-hidden rounded-lg bg-brand-cream ${aspectClass} ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static public assets during phased image rollout */}
        <img
          src={src}
          alt={label.replace(/\s*—\s*[a-z0-9\-]+\.(webp|png)$/i, "").trim() || label}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

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
