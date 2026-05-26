import type { FaqItem } from "@/lib/schema";

export type FaqSection = {
  heading: string;
  subsections?: { heading: string; faqs: FaqItem[] }[];
  faqs?: FaqItem[];
};

export const FAQ_HUB_INTRO =
  "Find answers to the most common questions about commercial cleaning, strata services and facilities management in Newcastle and NSW. If your question is not covered here, call 0450 924 377 — the owner answers. This hub is designed to give property managers, strata committees and business owners practical guidance before they request a scope or quote.";

export const FAQ_HUB_EXTRA_CONTEXT =
  "Choosing a facilities provider is rarely just about headline price. Buyers need confidence in scope clarity, mobilisation speed, compliance readiness, communication standards, and the provider's ability to adapt when operating conditions change. This FAQ hub explains how FACILITIES MAN handles those practical concerns in plain language. Use it as a checklist when comparing providers: ask for documented scopes, confirm response pathways, review reporting examples, verify insurance and screening controls, and confirm who is accountable when issues occur. A clear process at procurement stage usually predicts stronger service performance after contract start.";

export const FAQ_HUB_FEATURED: FaqItem[] = [
  {
    question: "How much does commercial cleaning cost in Newcastle?",
    answer:
      "Commercial cleaning pricing in Newcastle depends on site size, frequency, scope and access requirements. A small office cleaned weekly will cost less per visit than a large commercial facility cleaned daily. FACILITIES MAN provides free written quotes after a site walk-through. Call 0450 924 377 to discuss your requirements.",
  },
  {
    question: "Are FACILITIES MAN cleaners police-checked and insured?",
    answer:
      "Yes. All FACILITIES MAN staff carry current police checks and, where required (childcare, schools, medical facilities), Working With Vulnerable People (WWVP) clearances. FACILITIES MAN holds public liability insurance and can provide a certificate of currency on request. Our ABN is 72 697 453 937, verifiable on the ABN Lookup website.",
  },
  {
    question: "How quickly can a new contract start?",
    answer:
      "Most new commercial contracts can commence within the same week as quote acceptance. Our onboarding process is: enquiry → site walk-through → written scope and quote → sign-off → service begins. We prioritise fast mobilisation for new clients.",
  },
  {
    question: "What is the difference between cleaning and facilities management?",
    answer:
      "Cleaning is a single service — your premises are cleaned on a scheduled basis. Facilities management coordinates multiple services under one contract and one point of contact — cleaning, grounds, maintenance, trades, and compliance reporting. FACILITIES MAN offers both standalone cleaning contracts and integrated facilities management agreements.",
  },
  {
    question: "Do you service Sydney, Brisbane and beyond Newcastle?",
    answer:
      "Our primary service area is the Hunter region — Newcastle, Maitland, Lake Macquarie, Hunter Valley and the Central Coast. We also service Sydney and Brisbane for clients with multi-site portfolios requiring a Newcastle-based coordinator. Contact us to discuss your specific locations.",
  },
  {
    question: "What insurance does FACILITIES MAN carry?",
    answer:
      "FACILITIES MAN carries public liability insurance. A certificate of currency is available on request. Our ABN is 72 697 453 937, verifiable on the ABN Lookup website. All staff carry current police checks.",
  },
  {
    question: "Can I bundle cleaning, grounds and maintenance under one contract?",
    answer:
      "Yes. FACILITIES MAN offers bundled facilities management contracts covering cleaning, grounds and garden maintenance, trades and reactive maintenance under a single scope of works, one invoice and one point of contact. Bundled contracts typically attract a discount versus individual service pricing.",
  },
];

export const FAQ_HUB_SECTIONS: FaqSection[] = [
  {
    heading: "Pricing & Quoting",
    subsections: [
      {
        heading: "How is commercial cleaning priced?",
        faqs: [
          {
            question: "How much does commercial cleaning cost in Newcastle?",
            answer:
              "Pricing depends on site size, frequency, scope and access. We provide free written quotes after a site walk-through — no obligation. Call 0450 924 377 to discuss your site. The quote includes a documented scope so inclusions are transparent.",
          },
          {
            question: "How do you calculate a cleaning quote?",
            answer:
              "We visit your site, measure areas, assess access and frequency, then deliver a written scope of works within 48 hours. Every task is listed in plain English so you know exactly what you are paying for. This method reduces surprises when contracts begin.",
          },
        ],
      },
      {
        heading: "What affects the cost?",
        faqs: [
          {
            question: "Do you have minimum contract terms?",
            answer:
              "Contract terms are agreed during quoting. We offer flexible arrangements for one-off, periodic and ongoing programmes. There is no long lock-in without clear scope documentation. Terms are designed to match site risk and service complexity.",
          },
          {
            question: "Are there call-out or emergency cleaning fees?",
            answer:
              "Reactive and emergency cleans are quoted separately based on scope and mobilisation time. We confirm pricing before attending. Same-day response is often available across Newcastle and adjacent LGAs. Clear pricing approval protects both parties during urgent jobs.",
          },
        ],
      },
    ],
  },
  {
    heading: "Scope & Services",
    faqs: [
      {
        question: "What does a scope of works document include?",
        answer:
          "Every area, every task, every frequency — in plain English. It covers inclusions, exclusions, consumables, access requirements and reporting. You receive it within 48 hours of the site walk-through.",
      },
      {
        question: "Can I bundle cleaning, grounds and maintenance under one contract?",
        answer:
          "Yes — see our facilities management service. Bundled contracts typically attract a discount versus individual service pricing. Bundling also reduces administration because you manage one provider instead of several.",
      },
      {
        question: "How often are cleaning services delivered?",
        answer:
          "Daily, weekly, fortnightly, monthly or ad hoc — frequency is set in your scope of works based on site use and presentation requirements. Frequencies can be adjusted as occupancy or operational pressure changes. Updates are documented before implementation.",
      },
      {
        question: "Can I change my scope after we start?",
        answer:
          "Yes. Scope changes are documented in writing and quoted before implementation so there are no surprises on your invoice. This keeps governance clean for managers and committees. It also protects service quality during change periods.",
      },
    ],
  },
  {
    heading: "Compliance, Insurance & Safety",
    subsections: [
      {
        heading: "Insurance",
        faqs: [
          {
            question: "What insurance does FACILITIES MAN carry?",
            answer:
              "Public liability insurance is held. Certificate of currency available on request. ABN 72 697 453 937. Insurance details can be shared during procurement or onboarding.",
          },
        ],
      },
      {
        heading: "Police Checks & WWVP",
        faqs: [
          {
            question: "Are your cleaners police-checked?",
            answer:
              "Yes. All staff hold current national police checks before commencing on client sites. Checks are reviewed as part of internal compliance controls. Additional screening is applied where site categories require it.",
          },
          {
            question: "Do your staff have WWVP clearances?",
            answer:
              "Staff working in childcare, education, aged care or healthcare hold current Working With Vulnerable People clearances where required. This is built into mobilisation planning for regulated site categories. Compliance readiness is confirmed before first attendance.",
          },
        ],
      },
      {
        heading: "WHS & Safety",
        faqs: [
          {
            question: "How do you manage WHS on-site?",
            answer:
              "SWMS are prepared for non-standard work. We are induction-ready for client sites and hold relevant tickets including EWP and confined-space where applicable. WHS documentation is aligned to site rules before service commencement.",
          },
        ],
      },
    ],
  },
  {
    heading: "Onboarding & Mobilisation",
    faqs: [
      {
        question: "How quickly can a new cleaning contract start?",
        answer:
          "Most contracts can commence within the same week as quote acceptance. Enquiry → walk-through → quote → sign-off → service begins. Mobilisation timing is confirmed in writing so internal teams can coordinate access and communications.",
      },
      {
        question: "What do I need to provide for the site walk-through?",
        answer:
          "Site access, a contact person, and any existing scope or compliance requirements. The walk-through takes under an hour. Providing key operational constraints upfront helps us produce a more accurate first scope.",
      },
      {
        question: "What happens on the first day of service?",
        answer:
          "Our team follows the documented scope and checklist. The founder checks in on new contracts personally for the first month. Early oversight helps resolve onboarding friction before it becomes a recurring issue.",
      },
      {
        question: "Do you offer trial periods or first-clean inspections?",
        answer:
          "We can arrange a first-clean review for new contracts. Discuss this during quoting. Trial-style review points are useful when transitioning from another provider.",
      },
      {
        question: "You are a new business — why should I trust you?",
        answer:
          "We are open about being new. What we have from day one: ABN 72 697 453 937, public liability insurance, police-checked staff, documented operating systems, and a founder who is directly accountable. We offer founding-customer attention and a 24-hour response promise.",
      },
    ],
  },
  {
    heading: "Contracts & Service Performance",
    faqs: [
      {
        question: "How do you track service quality over time?",
        answer:
          "Service quality is tracked through documented checklists and scheduled reporting. New contracts receive closer founder oversight during the first month to stabilise routines quickly. Ongoing reports provide visibility on completed work and improvement actions.",
      },
      {
        question: "Can we review performance quarterly?",
        answer:
          "Yes. Quarterly reviews are available for clients who want formal service checkpoints. These reviews cover scope fit, incident trends and opportunities to optimise frequency or task allocation. They are especially useful for strata committees and portfolio managers.",
      },
      {
        question: "What happens if service quality drops?",
        answer:
          "Any quality issue is logged and escalated to the owner-managed operations pathway. Corrective actions are agreed, implemented and then verified at the next service cycle. This process keeps accountability clear and prevents repeat issues.",
      },
      {
        question: "Can we start with one site and expand later?",
        answer:
          "Absolutely. Many clients begin with one pilot site before rolling out to additional properties. We document the operating model early so expansion is controlled and consistent. This reduces onboarding friction when new locations are added.",
      },
      {
        question: "Do you support multi-site reporting?",
        answer:
          "Yes. Multi-site clients can receive reporting in a consistent format across all properties. That structure makes it easier to compare service outcomes and identify trends. It also supports internal governance and board-level updates.",
      },
      {
        question: "What should we prepare before requesting a formal quote?",
        answer:
          "Preparing a few key details upfront makes quoting faster and more accurate. Share your property type, approximate size, current service frequency, preferred attendance windows, access constraints, and any compliance requirements such as inductions, police checks or site-specific WHS rules. If you already have a scope of works, service logs, or pain points from your current provider, include those as well so we can identify gaps quickly. When this information is available at the start, your first proposal is usually more precise, easier to compare, and faster to approve internally.",
      },
    ],
  },
  {
    heading: "Service-Specific FAQs",
    subsections: [
      {
        heading: "Commercial Cleaning",
        faqs: [
          {
            question: "What types of commercial sites do you clean?",
            answer:
              "Offices, retail, mixed-use, healthcare-adjacent and hospitality venues across Newcastle and the Hunter region. Scope depth is tailored to each environment's risk and presentation expectations. We document inclusions clearly so site teams know what to expect.",
          },
        ],
      },
      {
        heading: "Strata Cleaning",
        faqs: [
          {
            question: "Do you provide strata committee reporting?",
            answer:
              "Yes. Monthly reports with photos and completed task logs are available for strata committees. Reporting is formatted to support committee discussion and manager oversight. This makes service performance easier to evidence.",
          },
        ],
      },
      {
        heading: "Office Cleaning",
        faqs: [
          {
            question: "Can you clean after hours?",
            answer:
              "Yes. After-hours and early-morning programmes are common for CBD and suburban offices. Access procedures are documented during onboarding for consistency. This keeps delivery secure and predictable.",
          },
        ],
      },
      {
        heading: "Industrial Cleaning",
        faqs: [
          {
            question: "Do you clean Hunter Valley industrial sites?",
            answer:
              "Yes. Industrial cleaning is a headline service in the Hunter Valley with WHS documentation and site induction readiness. Delivery is planned around shift and operational constraints. Safety and reporting standards are documented from the start.",
          },
        ],
      },
      {
        heading: "Grounds & Gardens",
        faqs: [
          {
            question: "Can grounds be bundled with cleaning?",
            answer:
              "Yes — grounds and garden maintenance can be included in a facilities management contract. Bundled delivery reduces contractor handovers and admin overhead. It also improves consistency across interior and exterior presentation.",
          },
        ],
      },
      {
        heading: "Facilities Management",
        faqs: [
          {
            question: "What does facilities management include?",
            answer:
              "Coordinated cleaning, grounds, maintenance, trades and compliance reporting under one contract and one point of contact. This model simplifies operational governance for multi-service properties. It also provides clearer accountability when urgent issues arise.",
          },
        ],
      },
    ],
  },
];

export function allFaqHubItems(): FaqItem[] {
  const items: FaqItem[] = [...FAQ_HUB_FEATURED];
  for (const section of FAQ_HUB_SECTIONS) {
    if (section.faqs) items.push(...section.faqs);
    if (section.subsections) {
      for (const sub of section.subsections) items.push(...sub.faqs);
    }
  }
  return items;
}
