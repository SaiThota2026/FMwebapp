# FACILITIES MAN — Phase 2: Complete (Handoff for Phase 3)

**Status:** Phase 2 complete  
**Production (Phase 1 baseline):** https://www.facilitiesman.com.au  
**Repository:** https://github.com/SaiThota2026/FMwebapp  
**Vercel project:** `f-mwebapp`  
**Phase 1 final commit:** `5d9632c`  
**Phase 2:** Implemented locally (commit when ready)

---

## ⚠️ Instructions for Phase 3 planning (Perplexity / Cursor)

Use this document as the **single source of truth** for what exists after Phase 2. When generating a Phase 3 prompt or plan:

### DO NOT include in Phase 3 (unless the site owner explicitly asks)

| Excluded by default | Reason |
|---------------------|--------|
| **Real image / photography generation** | All visuals use `ImagePlaceholder` with documented `.webp` filenames in labels |
| **Stock photo sourcing or AI image creation** | Reserved for **final project stage** |
| **Replacing `ImagePlaceholder` with `<Image>` / static assets** | Only when the owner says to run the **asset / image phase** |
| **OG image design beyond existing `/images/og/og-default.jpg`** | Same — final stage |
| **Founder headshot, Google review widgets, certification badges** | Copy placeholders exist; content filled in final stage |

**Owner rule:** *Skip asset generation and do not add real images to the site until the owner explicitly requests the final image/asset phase.*

### DO include in Phase 3 (typical candidates)

- Functional integrations (contact webhook, email, CRM)
- Trust content the owner supplies (reviews text, insurance $, founder name) — **text only**, not generated images
- SEO/analytics enhancements, Lighthouse, Search Console
- More location×service combo pages or blog posts (copy in `src/data/` + MDX)
- Differentiated long-form copy for Phase 2 specialist services (currently share generator structure in `phase2.ts`)
- Production deploy + commit of Phase 2
- Optional: admin, lead dashboard, A/B tests — only if owner wants

---

## Executive summary

Phase 2 expanded the marketing site from **17 routes (Phase 1)** to **52 static/SSG routes**, adding:

- **8 specialist services** (dynamic `/services/[slug]/`)
- **5 industry vertical pages** + industries hub
- **4 new location pages** + locations hub
- **5 location×service combo pages**
- **Blog hub + 5 MDX articles**
- Unified **design system** (PageHero, LinkCard, RevealOnScroll, ProcessSteps) across Phase 1 and Phase 2 pages
- **Responsive QA pass** and **Phase 2 content QC script**

All images remain **placeholders**. Logo and favicon are the only real brand image assets.

---

## Route inventory (52 pages at build)

### Core (Phase 1, unchanged paths)

| Route | Type |
|-------|------|
| `/` | Static homepage |
| `/about/` | Static |
| `/contact/` | Static + server action |
| `/faq/` | Static |
| `/privacy-policy/` | Static (`noindex`) |
| `/services/` | Services hub |

### Services — single dynamic route (Phase 1 + 2 consolidated)

**Route:** `/services/[slug]/` via `src/app/services/[slug]/page.tsx`  
**Data:** `src/data/services/index.ts` → `ALL_SERVICES` (14 services)

| Slug | Phase |
|------|-------|
| `commercial-cleaning` | 1 (dedicated data file) |
| `strata-cleaning` | 1 |
| `facilities-management` | 1 |
| `office-cleaning` | 1 |
| `grounds-maintenance` | 1 |
| `industrial-cleaning` | 1 |
| `medical-cleaning` | 2 (`phase2.ts`) |
| `childcare-cleaning` | 2 |
| `window-cleaning` | 2 |
| `carpet-cleaning` | 2 |
| `pressure-washing` | 2 |
| `warehouse-cleaning` | 2 |
| `sanitary-washroom-services` | 2 |
| `maintenance-trades` | 2 |

**Note:** Legacy per-service `src/app/services/commercial-cleaning/page.tsx` folders were **removed**; URLs unchanged.

### Locations

**Hub:** `/locations/` — `LocationsHubTemplate` with `PageHero`, `LinkCard` grid  
**Detail:** `/locations/[locationSlug]/` — 9 locations

| Slug | Phase |
|------|-------|
| `newcastle`, `maitland`, `lake-macquarie`, `hunter-valley`, `central-coast` | 1 |
| `cessnock`, `port-stephens`, `singleton`, `muswellbrook` | 2 |

**Combos:** `/locations/[locationSlug]/[serviceSlug]/` — 5 pages

| URL |
|-----|
| `/locations/maitland/commercial-cleaning/` |
| `/locations/lake-macquarie/strata-cleaning/` |
| `/locations/newcastle/office-cleaning/` |
| `/locations/newcastle/industrial-cleaning/` |
| `/locations/hunter-valley/facilities-management/` |

**Routing fix:** Location detail uses `[locationSlug]` (not `[slug]`) to match combo segment name — required by Next.js App Router.

### Industries

**Hub:** `/industries/`  
**Detail:** `/industries/[slug]/` — 5 slugs

| Slug |
|------|
| `strata-body-corporate` |
| `healthcare` |
| `education-childcare` |
| `commercial-property` |
| `government` |

### Blog

**Hub:** `/blog/`  
**Posts:** `/blog/[slug]/` — MDX in `src/content/blog/`

| Slug |
|------|
| `how-often-office-cleaning` |
| `how-to-choose-commercial-cleaning-newcastle` |
| `industrial-cleaning-safety-nsw` |
| `strata-cleaning-checklist` |
| `what-is-facilities-management` |

**Stack:** `gray-matter` + `next-mdx-remote/rsc` + `src/lib/blog.ts`

---

## All Phase 2 tasks performed

### Navigation & site config

- [x] Extended `src/lib/site.ts` — 14 services, 9 locations, 5 industries, blog link, industry footer group
- [x] Header — Industries dropdown (desktop + mobile), “View All Locations”, “View All Industries”
- [x] Footer — industry links + “View All Industries”; NewyTechs credit → https://www.newytechs.com.au/

### Schema (JSON-LD)

- [x] `servicePageSchema`, `industryPageSchema`, `locationPageSchema`, `comboPageSchema`, `blogPostSchema`, `blogHubSchema` in `src/lib/schema.ts`

### Data layer & templates

- [x] `src/data/services/phase2.ts` — 8 specialist services via `makeServiceData()` helper
- [x] `src/data/industries/` — types + index (5 industries)
- [x] `src/data/combos/` — types + index (5 combos)
- [x] `src/data/locations-hub.ts` + 4 new location datasets
- [x] `src/data/engagement-steps.ts` — shared ProcessSteps copy
- [x] `src/lib/page-visuals.ts` — SERVICE, LOCATION, INDUSTRY, COMBO visual configs
- [x] `IndustryPageTemplate`, `ServiceLocationTemplate`, `BlogHubTemplate`, `BlogPostTemplate`
- [x] `IndustriesHubTemplate`, `LocationsHubTemplate`
- [x] `LinkCard` — shared hub/detail card component

### App routes

- [x] `src/app/services/[slug]/page.tsx`
- [x] `src/app/industries/page.tsx` + `src/app/industries/[slug]/page.tsx`
- [x] `src/app/locations/page.tsx` + `src/app/locations/[locationSlug]/page.tsx`
- [x] `src/app/locations/[locationSlug]/[serviceSlug]/page.tsx`
- [x] `src/app/blog/page.tsx` + `src/app/blog/[slug]/page.tsx`

### Design integration (Phase 1 parity)

- [x] `RevealOnScroll`, `fm-hover-lift`, `fm-tap`, `ProcessSteps` on hubs and key Phase 1 pages (home, about, FAQ)
- [x] About + FAQ + Locations hub upgraded to `PageHero` (dark hero pattern)
- [x] Homepage — `LinkCard` for services/locations/industries; shared engagement steps

### Internal linking (Section 11–style)

- [x] `src/data/home.ts` — industry teasers → `/industries/...`
- [x] `src/data/services-hub.ts` — core vs specialist services with real hrefs
- [x] Cross-links in location/service prose; FAQ hub additions
- [x] Blog MDX internal links to services/locations/industries

### Responsive & cross-platform QA

- [x] Global overflow/word-wrap for headings and blog links
- [x] `min-width: 0` on main layout grids; responsive map iframes
- [x] Scrollable desktop nav dropdowns (14 services)
- [x] Mobile nav safe-area, touch targets, body scroll lock
- [x] `prefers-reduced-motion` on reveal animations

### Content QC

- [x] `scripts/phase2-qc.mjs` — metadata, word counts, blog depth, route presence
- [x] Updated `scripts/qa-audit.mjs` — Phase 2 routes in link allowlist
- [x] Updated `scripts/final-qa.mjs` — sample Phase 2 URLs
- [x] Expanded Phase 2 location copy + blog posts to meet QC thresholds
- [x] `npm run build` — 52 pages, sitemap postbuild OK

### Dependencies added

- [x] `next-mdx-remote`, `gray-matter`

---

## Architecture (for Phase 3 agents)

```
src/
├── app/
│   ├── services/[slug]/page.tsx          # All 14 services
│   ├── locations/
│   │   ├── page.tsx                      # Locations hub
│   │   ├── [locationSlug]/page.tsx       # 9 locations
│   │   └── [locationSlug]/[serviceSlug]/ # 5 combos
│   ├── industries/[slug]/page.tsx        # 5 industries
│   ├── blog/[slug]/page.tsx              # 5 MDX posts
│   └── actions/contact.ts                # DO NOT break without owner approval
├── components/
│   ├── layout/     Header, Footer, PageHero, PageIntro, Breadcrumbs, Logo
│   ├── ui/         LinkCard, ImagePlaceholder, RevealOnScroll, ProcessSteps, ...
│   ├── home/       HomePage
│   ├── services/   ServicePageTemplate, ServicesHubPage
│   ├── locations/  LocationPageTemplate, LocationsHubTemplate
│   ├── industries/ IndustryPageTemplate, IndustriesHubTemplate
│   ├── combos/     ServiceLocationTemplate
│   └── blog/       BlogHubTemplate, BlogPostTemplate
├── content/blog/*.mdx
├── data/           All copy — no CMS
└── lib/
    ├── site.ts
    ├── metadata.ts
    ├── schema.ts
    ├── page-visuals.ts
    └── blog.ts
```

**Conventions (must preserve):**

- `trailingSlash: true` on all internal URLs
- Content in `src/data/*.ts` and `src/content/blog/*.mdx` — not hardcoded in components
- `ImagePlaceholder` only — labels encode target filename e.g. `services-commercial-cleaning.webp`
- `createPageMetadata()` from `src/lib/metadata.ts` for every page
- Phase 1 page **logic** was not rewritten except navigation, linking, and design polish

---

## Tech stack (unchanged from Phase 1)

| Layer | Technology |
|--------|------------|
| Framework | Next.js 16.2.6, React 19, TypeScript |
| Styling | Tailwind CSS v4, `@theme` brand tokens |
| MDX | next-mdx-remote (RSC), gray-matter |
| DB | Prisma 7 + Supabase (schema present; marketing site is static) |
| Analytics | GA4 `G-D26DLPW4CN` |
| Sitemap | next-sitemap (postbuild) |
| Hosting | Vercel (`vercel.json` framework: nextjs) |

**Agent note:** Read `node_modules/next/dist/docs/` before changing Next.js APIs — project uses current conventions with breaking changes vs older training data.

---

## Business constants (unchanged)

| Field | Value |
|-------|--------|
| Brand | FACILITIES MAN |
| ABN | 72 697 453 937 |
| Phone | 0450 924 377 |
| Email | support@facilitiesman.com.au |
| URL | https://www.facilitiesman.com.au |
| GA4 | G-D26DLPW4CN |
| Base | Newcastle, NSW |

---

## Placeholder inventory (final asset phase only)

These remain **intentional** until the owner runs the image/asset phase:

| Location | Placeholder purpose |
|----------|---------------------|
| `ImagePlaceholder` site-wide | Hero/section images per `page-visuals.ts` labels |
| Homepage | Trust/review block, founder card, map (partial) |
| Footer / home / about | Public liability insurance amount |
| `CtaSection` | Note that full form is on contact page |
| Schema `aggregateRating` | Commented until first Google review |

**Do not use AI image tools or stock libraries in Phase 3** unless the owner explicitly overrides the rule above.

---

## Content quality notes (honest state for Phase 3)

| Area | State |
|------|--------|
| Phase 1 services (6) | Unique, hand-written datasets per file |
| Phase 2 services (8) | Unique titles/leads/FAQs; **section bodies share `makeServiceData()` template** in `phase2.ts` |
| Industries (5) | Generated via `makeIndustry()` — sector-specific leads; shared structure |
| Combos (5) | `makeCombo()` template with local ref strings |
| Phase 2 locations (4) | Expanded in QC pass; still shorter than Phase 1 flagship pages |
| Blog (5) | 400–420 words each; practical guides with internal links |

**Phase 3 copy improvement (no images):** Optionally rewrite Phase 2 service section bodies to be unique per slug (prompt had ~600+ words per service in original spec).

---

## QA commands

```bash
npm run build
npm run lint
node scripts/phase2-qc.mjs      # Phase 2 content gate — expect 0 failures
node scripts/qa-audit.mjs       # Metadata, word counts, internal links
npm run dev                     # http://localhost:3000

# With dev server running:
node scripts/final-qa.mjs       # Rendered GA, canonical, JSON-LD
```

---

## Suggested Phase 3 scope (for Perplexity to expand into a full prompt)

Copy the block below into Perplexity to generate **FACILITIES_MAN_Phase3_Cursor_Prompt.md**:

---

### Seed text for Perplexity Computer

```
Project: FACILITIES MAN marketing site (Next.js 16, App Router, TypeScript, Tailwind v4).
Phase 1 and Phase 2 are COMPLETE. Read docs/PHASE2_COMPLETE.md in the repo.

CRITICAL CONSTRAINT — ASSETS:
Do NOT generate, source, or install real images, photography, OG artwork, or replace ImagePlaceholder components unless the project owner explicitly requests the "final asset/image phase." Phase 3 must skip all image/asset generation by default.

Current site: 52 SSG routes — 14 services, 9 locations, 5 industries, 5 location×service combos, 5 blog posts, hubs for services/locations/industries/blog, plus about/contact/faq/privacy/home.

Technical constraints:
- trailingSlash: true
- Content in src/data/ and src/content/blog/*.mdx
- Do not modify src/app/actions/contact.ts without explicit approval
- Use existing templates: PageHero, LinkCard, ServicePageTemplate, etc.
- Preserve brand tokens in globals.css

Phase 3 should focus on (prioritise with owner):
1. Production deploy: commit Phase 2, Vercel preview QA, smoke test all 52 routes
2. Contact form: wire CONTACT_FORM_ENDPOINT / email notification / spam protection
3. Trust text placeholders: insurance amount, founder bio, first Google review (TEXT + schema only, no images)
4. SEO: unique meta for all pages, sitemap priorities for /blog/ and /industries/, Lighthouse fixes
5. Copy depth: de-template Phase 2 service bodies in phase2.ts (unique 600w+ per service)
6. Optional: more combo pages, more blog posts, case studies page, careers, service area calculator
7. Analytics: conversion events on quote form and phone clicks

Explicitly OUT OF SCOPE for Phase 3:
- Real photos, webp generation, next/image migration, hero photography, stock images, AI images
- Founder headshot file upload
- Certification badge graphics

Output: A structured Cursor prompt with numbered sections, file paths, acceptance criteria, and test plan — matching the style of the Phase 2 prompt.
```

---

## Files created or significantly changed in Phase 2

| Path | Role |
|------|------|
| `docs/PHASE2_COMPLETE.md` | This document |
| `src/app/services/[slug]/` | Consolidated service routes |
| `src/app/locations/page.tsx` | Locations hub |
| `src/app/locations/[locationSlug]/` | Location + combo routes |
| `src/app/industries/` | Industry hub + pages |
| `src/app/blog/` | Blog hub + MDX posts |
| `src/data/services/phase2.ts` | 8 specialist services |
| `src/data/industries/` | Industry data |
| `src/data/combos/` | Combo data |
| `src/data/locations/{cessnock,port-stephens,singleton,muswellbrook}.ts` | New regions |
| `src/data/locations-hub.ts` | Hub cards + FAQs |
| `src/content/blog/*.mdx` | 5 articles |
| `src/components/ui/LinkCard.tsx` | Shared card |
| `src/data/engagement-steps.ts` | Shared steps |
| `scripts/phase2-qc.mjs` | Phase 2 QC |

---

## Phase 2 complete checklist

- [x] 28 new page types/routes delivered (net +35 URLs vs Phase 1, 52 total build output)
- [x] Navigation, footer, schema, sitemap updated
- [x] Design system aligned across app
- [x] Responsive pass completed
- [x] Content QC script passes (`phase2-qc.mjs` → 0 failures)
- [x] Production build passes
- [ ] **Git commit / deploy Phase 2** — owner action when ready

**Phase 2 is marked complete.** Phase 3 planning should treat image/asset work as a separate final phase gated on explicit owner request.
