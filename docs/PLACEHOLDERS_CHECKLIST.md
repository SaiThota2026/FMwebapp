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
| [ ] | CTA note: “full quote form submits on Contact page” | `src/components/ui/CtaSection.tsx` | Replace with clearer copy once OK |

---

## Priority E — Case studies / earned content shells

These pages are intentionally empty until real work exists. Replace shell copy when ready (not always `[PLACEHOLDER]` syntax).

| Done | Item | Where | Notes |
|------|------|-------|-------|
| [ ] | First published case study | `src/components/case-studies/CaseStudiesPage.tsx` | Empty-state / founding-customer offer |
| [ ] | Case study filters with real items | same | Service / industry / location |
| [ ] | Local case reference blocks on metro location pages | Sydney / Brisbane / Melbourne location data | Master doc H2 “Local Case Reference” — currently omitted or generic; add when earned |

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
