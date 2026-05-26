import type { FaqItem } from "@/lib/schema";

export const ABOUT_FAQS: FaqItem[] = [
  {
    question: "Who owns FACILITIES MAN?",
    answer:
      "FACILITIES MAN is owned and operated by our founder, who built the business in Newcastle, NSW. The founder is directly involved in every client relationship — from the first site walk-through to ongoing contract management. That owner-led model means decisions and accountability stay close to day-to-day delivery.",
  },
  {
    question: "Where is FACILITIES MAN based?",
    answer:
      "FACILITIES MAN is based in Newcastle, NSW. We are a locally owned and operated business — our team knows the Newcastle area, the Hunter Valley and the Central Coast well. Our Newcastle base allows us to respond quickly across the region, including Maitland, Lake Macquarie, the Hunter Valley and the Central Coast. Local coverage is planned, not ad hoc.",
  },
  {
    question: "How long has FACILITIES MAN been operating?",
    answer:
      "FACILITIES MAN is a new business, and we are open about that. What we have in place from day one: ABN 72 697 453 937, public liability insurance, police-checked staff, documented operating systems and a founder who is directly accountable for every job. We are building our track record and welcome clients who want a fresh, attentive facilities partner.",
  },
  {
    question: "What insurance and compliance does FACILITIES MAN carry?",
    answer:
      "We hold public liability insurance and can provide a certificate of currency on request. All staff have completed national police checks. Staff working in childcare, education or healthcare settings hold current WWVP checks. We operate with documented SWMS for non-standard tasks and are induction-ready for client sites. Our ABN is 72 697 453 937 and we are registered for GST.",
  },
  {
    question: "How can I speak directly with the owner?",
    answer:
      "Call 0450 924 377 — the owner answers directly during business hours (Monday–Saturday, 7am–7pm). Outside those hours, leave a voicemail or email support@facilitiesman.com.au and you will receive a response within 24 hours. We do not use a call centre for initial enquiries — the person you speak with is the person responsible for delivering your service.",
  },
];

export const ABOUT_PROCESS_STEPS = [
  {
    title: "Site Walk-Through",
    body: "We visit your site in person — no remote quoting, no assumptions. The walk-through takes under an hour and costs nothing.",
  },
  {
    title: "Documented Scope of Works",
    body: "We deliver a written scope of works within 48 hours. Every area, every task, every frequency — in plain English, no jargon.",
  },
  {
    title: "On-Job Quality Assurance",
    body: "Our team follows a checklist on every visit. The founder checks in on new contracts personally for the first month.",
  },
  {
    title: "Monthly Reporting",
    body: "You receive a monthly report with photos and completed task logs. Share it with your strata committee, board, or facilities manager. This keeps accountability visible month after month and supports clear operational governance.",
  },
] as const;
