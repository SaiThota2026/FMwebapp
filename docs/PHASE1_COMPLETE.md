# FACILITIES MAN — Phase 1: Tasks Performed

**Status:** Phase 1 complete  
**Production:** https://www.facilitiesman.com.au  
**Repository:** https://github.com/SaiThota2026/FMwebapp  
**Vercel project:** `f-mwebapp`  
**Final commit:** `5d9632c`

---

## All tasks performed

### Project setup & infrastructure

- [x] Created Next.js 16 app (App Router) with React 19, TypeScript, Tailwind CSS v4
- [x] Configured Inter + Plus Jakarta Sans via `next/font`
- [x] Enabled React Compiler in `next.config.ts`
- [x] Set `trailingSlash: true` for URL consistency
- [x] Added Prisma 7 with `prisma.config.ts` (dotenv, `DIRECT_URL`)
- [x] Fixed invalid Prisma generator block that failed Vercel builds
- [x] Connected Supabase Postgres and defined Prisma schema
- [x] Linked Vercel project and GitHub auto-deploy on `main`
- [x] Configured custom domains (`www.facilitiesman.com.au`, `facilitiesman.com.au`)
- [x] Diagnosed and fixed production `NOT_FOUND` (Vercel set to “Other” + `public/` output)
- [x] Added `vercel.json` with `"framework": "nextjs"`

### Site configuration & constants

- [x] Created `src/lib/site.ts` — business name, ABN, phone, email, URL, trading hours, GA4 ID, geo coordinates
- [x] Defined `SERVICES` and `LOCATIONS` navigation arrays
- [x] Defined `COMPANY_LINKS` for footer

### Content architecture

- [x] Implemented content-as-data pattern under `src/data/`
- [x] Wrote homepage content (`src/data/home.ts`) — hero, services, industries, locations, why choose, process, FAQ, CTAs
- [x] Wrote services hub content (`src/data/services-hub.ts`)
- [x] Wrote 6 service page datasets (`src/data/services/*.ts`) with typed models
- [x] Wrote 5 location page datasets (`src/data/locations/*.ts`) with typed models and location index
- [x] Wrote about page content (`src/data/about.ts`)
- [x] Wrote contact page content (`src/data/contact.ts`)
- [x] Wrote FAQ hub content (`src/data/faq-hub.ts`)
- [x] Wrote privacy policy content (inline in page component)

### Pages built (17 routes)

- [x] `/` — Homepage
- [x] `/about/` — About
- [x] `/contact/` — Contact & quote
- [x] `/faq/` — FAQ hub
- [x] `/services/` — Services hub
- [x] `/services/commercial-cleaning/`
- [x] `/services/strata-cleaning/`
- [x] `/services/facilities-management/`
- [x] `/services/office-cleaning/`
- [x] `/services/grounds-maintenance/`
- [x] `/services/industrial-cleaning/`
- [x] `/locations/newcastle/`
- [x] `/locations/maitland/`
- [x] `/locations/lake-macquarie/`
- [x] `/locations/hunter-valley/`
- [x] `/locations/central-coast/`
- [x] `/privacy-policy/` — Privacy (`noindex, follow`)

### Layout & shared components

- [x] Root layout — fonts, GA4 script, global JSON-LD, metadata defaults
- [x] `Header` — logo, primary nav, Services dropdown, Locations dropdown, mobile menu
- [x] Mobile menu — backdrop, body scroll lock, Escape to close, touch-friendly targets
- [x] `Footer` — services, locations, company links, contact block, ABN
- [x] `Logo` — static `<img>` (replaced `next/image` to fix Chrome loading spinner)
- [x] Logo preload `<link>` in root layout
- [x] `Breadcrumbs` — light and dark variants
- [x] `PageIntro` — hub page intros
- [x] `PageHero` — dark hero for service/location pages
- [x] `TrustStrip` — ABN, insured, police-checked, locally owned
- [x] `CtaSection` — quote + phone CTAs
- [x] `FaqAccordion` — accessible FAQ UI
- [x] `ProcessSteps` — 3-step enquiry process cards
- [x] `ContentSection` — alternating text + image blocks
- [x] `RevealOnScroll` — scroll-in animation (respects `prefers-reduced-motion`)

### Page-level components

- [x] `HomePage` — full homepage layout and sections
- [x] `AboutPage`
- [x] `ContactPage` + `QuoteForm`
- [x] `FaqHubPage`
- [x] `PrivacyPage`
- [x] `ServicesHubPage`
- [x] `ServicePageTemplate` — hero, sections, areas, map block, process, FAQ, CTA
- [x] `LocationPageTemplate` — hero, services grid, suburbs, map iframe, industries, FAQ, CTA
- [x] Dynamic location route `src/app/locations/[slug]/page.tsx`

### Image placeholder system (site-wide)

- [x] Built `ImagePlaceholder` component — dashed border, brand styling, `[PLACEHOLDER — label]` format, `role="img"` + `aria-label`
- [x] Added `src/lib/page-visuals.ts` — per-slug labels and hero copy for services and locations
- [x] Wired placeholders into homepage (hero-adjacent blocks, service/location cards, founder card, map card, trust/review block)
- [x] Wired placeholders into all service pages via `ServicePageTemplate` and `ContentSection`
- [x] Wired placeholders into all location pages via `LocationPageTemplate`
- [x] Wired placeholders into `PageHero` hero images
- [x] Documented target `.webp` filenames in placeholder labels for final-stage asset generation
- [x] Prepared `public/images/og/` directory for social images

### Homepage sections (built)

- [x] Hero with gradient background and primary CTAs
- [x] Trust strip
- [x] Services grid (6 services)
- [x] Industries served grid
- [x] **Where We Work** — 5 location cards (`HOME_LOCATIONS`) + service-area map placeholder card
- [x] **Why Choose** — 3 numbered benefit cards + founder placeholder card
- [x] Process / how-it-works steps
- [x] Homepage FAQ accordion
- [x] Final CTA section

### SEO & structured data

- [x] Created `src/lib/metadata.ts` — title/description helpers, canonical URLs, Open Graph
- [x] Per-page `generateMetadata` on all routes
- [x] Set `metadataBase` to production URL
- [x] Created `src/lib/schema.ts` — Organization, WebSite, LocalBusiness, BreadcrumbList, FAQPage, Service, etc.
- [x] `JsonLd` component for injecting JSON-LD scripts
- [x] Global schema graph in root layout
- [x] Page-specific schema on service, location, FAQ, and hub pages

### Sitemap & robots

- [x] Added `next-sitemap` and `next-sitemap.config.js`
- [x] Postbuild generation of `public/sitemap.xml` and `public/robots.txt`
- [x] Excluded `/privacy-policy/` from sitemap
- [x] Priority/changefreq rules for home, services, locations, FAQ
- [x] Trailing-slash URLs in sitemap output

### Contact form

- [x] Built quote form UI — name, business, phone, email, service checkboxes, site address, frequency, notes, file input UI, privacy checkbox
- [x] Server action `submitContactForm` in `src/app/actions/contact.ts`
- [x] Field-level validation and error messages
- [x] Support for `CONTACT_FORM_ENDPOINT` env (POST JSON webhook)
- [x] Console logging fallback when endpoint not configured
- [x] Success message on valid submission

### Styling & brand

- [x] Brand CSS tokens in `src/app/globals.css` — teal, gold, cream, dark, offwhite
- [x] Utility classes — `.fm-container`, `.fm-section`, `.fm-btn-primary`, `.fm-btn-secondary`, `.fm-input`, `.fm-hover-lift`, `.fm-fade-up`, `.fm-reveal`
- [x] Added `facilities-man-logo.png` and `facilities-man-favicon.png` under `public/images/brand/`
- [x] Added `src/app/icon.png` and `src/app/apple-icon.png`

### Responsive design

- [x] Viewport meta with `viewportFit: cover`
- [x] Safe-area padding on `.fm-container`
- [x] Responsive header and mobile-only nav behavior
- [x] Responsive grids and stacked CTAs on small screens
- [x] Form inputs at 16px minimum (iOS zoom prevention)
- [x] Disabled hover-lift on coarse pointers
- [x] Restored desktop typography and section spacing after responsive pass (H2 sizes, `py-16 md:py-20`, logo `md:h-24`)

### Analytics

- [x] Integrated Google Analytics 4 (`G-D26DLPW4CN`) in root layout

### Quality assurance

- [x] Added `scripts/qa-audit.mjs` — metadata length, word counts, FAQ depth checks
- [x] Added `scripts/final-qa.mjs` — final QA gate
- [x] Added `scripts/check-rendered-meta.mjs` — rendered meta verification
- [x] Verified `npm run build` passes
- [x] Verified `npm run lint` passes
- [x] Verified production deployment serves all routes

### Git & deployment (Phase 1 marketing commits)

- [x] `54ee8fa` — Phase 1 marketing site (17 pages, SEO, sitemap, brand, QA scripts, logo fix)
- [x] `4e6197c` — Vercel Next.js framework fix
- [x] `12d9f34` — Service/location visuals, motion, placeholder sections
- [x] `5d9632c` — Responsive polish and homepage location/why-choose cards

---

## Tech stack (as built)

| Layer | Technology |
|--------|------------|
| Framework | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Database | Prisma 7 + Supabase Postgres (configured) |
| Analytics | GA4 |
| Hosting | Vercel |
| Sitemap | next-sitemap |

---

## Key paths

```
src/app/                 # Routes
src/components/          # UI and page templates
src/data/                # Page copy and structure
src/lib/site.ts          # Business constants
src/lib/metadata.ts      # SEO helpers
src/lib/schema.ts        # JSON-LD
src/lib/page-visuals.ts  # Placeholder labels per page
scripts/                 # QA scripts
public/images/brand/
public/images/og/
next-sitemap.config.js
vercel.json
prisma/schema.prisma
```

---

## Business details (in site)

| Field | Value |
|-------|--------|
| Brand | FACILITIES MAN |
| ABN | 72 697 453 937 |
| Phone | 0450 924 377 |
| Email | support@facilitiesman.com.au |
| Base | Newcastle, NSW |
| Service areas | Newcastle, Maitland, Lake Macquarie, Hunter Valley, Central Coast |
