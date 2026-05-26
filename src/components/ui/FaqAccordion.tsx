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
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-semibold text-brand-dark transition-colors hover:bg-brand-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/30"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`shrink-0 text-brand-teal transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div className="px-5 pb-4 text-brand-dark/90 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
