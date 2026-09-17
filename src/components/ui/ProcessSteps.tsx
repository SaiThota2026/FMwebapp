import type { ReactNode } from "react";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  heading: string;
  steps: ProcessStep[];
  footer?: ReactNode;
  className?: string;
};

const stepDelayClass = ["fm-delay-1", "fm-delay-2", "fm-delay-3"] as const;

export function ProcessSteps({
  heading,
  steps,
  footer,
  className = "",
}: ProcessStepsProps) {
  return (
    <section
      className={`fm-panel border-brand-teal/15 bg-brand-cream fm-panel-pad ${className}`}
    >
      <h2 className="fm-section-heading text-[1.35rem] sm:text-2xl lg:text-[1.65rem]">
        {heading}
      </h2>
      <ol
        className={`mt-6 grid gap-4 sm:grid-cols-2 ${
          steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`rounded-lg border border-brand-teal/10 bg-white p-5 shadow-sm fm-hover-lift fm-tap fm-fade-up ${stepDelayClass[Math.min(index, 2)] ?? ""}`}
          >
            <span className="font-display text-2xl font-bold text-brand-gold">
              {index + 1}
            </span>
            <p className="mt-2 text-sm font-semibold text-brand-teal">
              {step.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-dark/90">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      {footer && <div className="mt-5 text-sm text-brand-dark/90">{footer}</div>}
    </section>
  );
}
