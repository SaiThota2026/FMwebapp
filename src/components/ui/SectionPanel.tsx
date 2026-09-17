import type { ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  /** Surface tone. Default white. */
  tone?: "plain" | "cream" | "gold";
  /** Internal padding. Use `none` when children manage their own padding (e.g. media flush). */
  padding?: "default" | "none";
  className?: string;
  as?: "section" | "div" | "article";
};

const toneClass = {
  plain: "border-brand-teal/15 bg-white",
  cream: "border-brand-teal/15 bg-brand-cream",
  gold: "border-brand-gold/30 bg-brand-cream",
} as const;

/**
 * Contained page section — every major block lives inside one of these
 * so vertical rhythm comes from panel gaps, not free-floating content.
 */
export function SectionPanel({
  children,
  tone = "plain",
  padding = "default",
  className = "",
  as: Tag = "section",
}: SectionPanelProps) {
  return (
    <Tag
      className={`fm-panel overflow-hidden ${toneClass[tone]} ${
        padding === "default" ? "fm-panel-pad" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Shared H2 used inside panels/cards across templates. */
export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`fm-section-heading ${className}`}>{children}</h2>
  );
}
