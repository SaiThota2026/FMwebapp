# FACILITIES MAN — Placeholders Checklist

**Purpose:** Single checklist of owner-supplied content still marked `[PLACEHOLDER …]` (or trust shells) across the webapp.  
**Generated:** 2026-09-17  
**Scope:** Source under `src/` (UI copy and FAQs). Does not include dashed `ImagePlaceholder` fallbacks when a `src` is missing.

Tick each item when the real value is confirmed and the placeholder string is removed from code.

---

## Priority A — Business / compliance (blocks “production-ready trust”)

| Done | Placeholder | Where | Notes |
|------|-------------|-------|-------|
| [ ] | Public liability insurance **amount** (e.g. $20M) | `src/components/layout/Footer.tsx` | Footer trust line |
| [ ] | Public liability insurance **amount** | `src/components/home/HomePage.tsx` | Trust band |
| [ ] | Public liability insurance **amount** | `src/data/home.ts` | Homepage FAQ / trust copy |
| [ ] | Public liability insurance **amount** | `src/components/certifications/CertificationsPage.tsx` | Body + FAQ (multiple) |
| [ ] | Professional indemnity — **confirm if held** | `src/components/certifications/CertificationsPage.tsx` | Body + FAQ |
| [ ] | Insurance certificate **issue / renewal date** | `src/components/certifications/CertificationsPage.tsx` | FAQ |
| [ ] | Insurance certificate **PDF link** | `src/components/certifications/CertificationsPage.tsx` | “Certifications we hold” list |
| [ ] | ISO 9001 **target date** | `src/components/certifications/CertificationsPage.tsx` | Roadmap |
| [ ] | ISO 14001 **target date** | `src/components/certifications/CertificationsPage.tsx` | Roadmap |
| [ ] | ISO 45001 **target date** | `src/components/certifications/CertificationsPage.tsx` | Roadmap |

---

## Priority B — Founder / brand identity

| Done | Placeholder | Where | Notes |
|------|-------------|-------|-------|
| [ ] | **Founder name** + headshot | `src/components/home/HomePage.tsx` | About teaser on home |
| [ ] | Founder name (if still generic “Our founder”) | `src/components/about/AboutPage.tsx` | Confirm named bio |

---

## Priority C — Reviews / Google Business Profile

| Done | Placeholder | Where | Notes |
|------|-------------|-------|-------|
| [ ] | First Google review **stars + text** | `src/components/home/HomePage.tsx` | Trust strip / band |
| [ ] | Google Business Profile **review URL** | `src/components/reviews/ReviewsPage.tsx` | `GBP_REVIEW_URL` constant |
| [ ] | Google Reviews **embed / widget** | `src/components/reviews/ReviewsPage.tsx` | Shell empty state |
| [ ] | Home “Reviews & Recognition” trust block | `src/components/home/HomePage.tsx` | Replace trust placeholder section |
| [ ] | First **industry certification badge** (graphic + name) | `src/components/home/HomePage.tsx` | Trust band |

---

## Priority D — Forms / UX copy leftovers

| Done | Placeholder | Where | Notes |
|------|-------------|-------|-------|
| [x] | CTA note: “full quote form submits on Contact page” | `src/components/ui/CtaSection.tsx` | **Done 2026-09-17** — real Contact-page copy + “Go to the full quote form” CTA |

---

## Priority E — Case studies / earned content shells

**Merged 2026-09-17** from Downloads Priority D & E package (patch + `case-study-readiness.ts`).  
Example Scope Profiles + filters + metro Local Case Reference blocks are live in code. **No new URL routes** were added (still **57** pages).

| Done | Item | Where | Notes |
|------|------|-------|-------|
| [ ] | First **earned / published** case study | `src/components/case-studies/CaseStudiesPage.tsx` | Still pending real client-approved outcomes. **13 Example Scope Profiles** shipped as transparent non-case-study content (`src/data/case-study-readiness.ts`) |
| [x] | Case study filters with items | same + `case-study-readiness.ts` | **Done** — service / industry / location filters over 13 example scopes |
| [x] | Local case reference blocks on metro location pages | Sydney / Brisbane / Melbourne + `LocationPageTemplate` | **Done** — master-doc H2 “Local Case Reference” with transparency wording |

---

## Already filled (no action)

| Item | Status |
|------|--------|
| Business name, ABN, phone, email, trading hours | Set in `src/lib/site.ts` |
| GA4 measurement ID | `SITE.ga4Id` |
| Brand colours / logo | In CSS + `public/images/brand/` |
| Hosting (Vercel) / Next.js stack | Live project `f-mwebapp` |
| XML sitemap | `public/sitemap.xml` via next-sitemap |
| HTML sitemap | `/sitemap/` page added |

---

## How to clear a placeholder

1. Confirm the real value with the business owner.
2. Search the repo for the exact `[PLACEHOLDER — …]` string.
3. Replace in every listed file (amounts often appear in **multiple** places).
4. Re-check this checklist and tick the row.
5. For reviews / AggregateRating schema: **do not** add `AggregateRating` JSON-LD until verified Google reviews exist (see master doc + `ReviewsPage`).

---

## Quick search

```bash
rg "PLACEHOLDER|TRUST PLACEHOLDER" src --glob "*.{ts,tsx,mdx}"
```
