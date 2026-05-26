import type { FaqItem } from "@/lib/schema";

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "What is the best way to contact FACILITIES MAN?",
    answer:
      "The fastest way is to call 0450 924 377 — the owner answers directly during business hours (Monday–Saturday, 7am–7pm). If you prefer, complete the quote form on this page or email support@facilitiesman.com.au. All three methods receive the same 24-hour response commitment. For urgent or after-hours matters, leave a voicemail and you will hear back first thing the following business day.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "We respond to every enquiry within 24 hours — that is a commitment backed by the owner, not a call-centre policy. In most cases, enquiries received during business hours receive a same-day response. We will confirm receipt of your enquiry and outline next steps, including scheduling a free site walk-through if required.",
  },
  {
    question: "Can FACILITIES MAN come on-site to assess?",
    answer:
      "Yes. We offer free site walk-throughs across Newcastle, Maitland, Lake Macquarie, Hunter Valley and the Central Coast. The walk-through typically takes under an hour and allows us to scope the job accurately before providing a written quote. No obligation — you receive the written scope and quote, and decide from there.",
  },
  {
    question: "Do you offer emergency or after-hours cleaning?",
    answer:
      "Yes, emergency and after-hours cleaning is available. Call 0450 924 377 to discuss your situation. After-hours rates may apply depending on the nature and urgency of the work. We have experience mobilising quickly for flood damage, post-event clean-ups and urgent commercial site preparation.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "The more detail you provide, the faster we can quote accurately. Useful information includes: the type and approximate size of the site (e.g. 800m² retail store, 12-unit strata complex), the services you need and your preferred frequency, any access requirements (after-hours, security passes), and photos or a floor plan if available. Use the photo upload field in the form above or email files to support@facilitiesman.com.au.",
  },
];

export const TRADING_HOURS = [
  { day: "Monday", hours: "7:00am – 7:00pm" },
  { day: "Tuesday", hours: "7:00am – 7:00pm" },
  { day: "Wednesday", hours: "7:00am – 7:00pm" },
  { day: "Thursday", hours: "7:00am – 7:00pm" },
  { day: "Friday", hours: "7:00am – 7:00pm" },
  { day: "Saturday", hours: "7:00am – 7:00pm" },
  {
    day: "Sunday",
    hours: "Closed (emergency enquiries: email or leave voicemail)",
  },
] as const;
