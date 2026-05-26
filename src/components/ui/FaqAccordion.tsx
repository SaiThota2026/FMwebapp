"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/schema";

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-brand-teal/20 rounded-lg border border-brand-teal/20 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                className="fm-touch-target flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-display text-base font-semibold text-brand-dark transition-colors hover:bg-brand-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30 sm:gap-4 sm:px-5 sm:py-4 sm:text-lg"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="min-w-0 pr-2">{faq.question}</span>
                <span
                  className="shrink-0 text-xl text-brand-teal"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div className="px-4 pb-4 text-base leading-relaxed text-brand-dark/90 sm:px-5">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
