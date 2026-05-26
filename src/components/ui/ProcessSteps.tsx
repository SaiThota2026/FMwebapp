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
      className={`rounded-xl border border-brand-teal/20 bg-brand-cream p-6 md:p-8 ${className}`}
    >
      <h2 className="font-display text-xl font-semibold text-brand-dark md:text-2xl">
        {heading}
      </h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={`rounded-lg bg-white p-5 shadow-sm fm-hover-lift fm-fade-up ${stepDelayClass[Math.min(index, 2)] ?? ""}`}
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
