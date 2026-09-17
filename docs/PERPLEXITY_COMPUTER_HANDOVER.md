# FACILITIES MAN — Perplexity Computer Handover

**Audience:** Perplexity Computer agents and human operators continuing this project  
**Site:** https://www.facilitiesman.com.au  
**Repo:** https://github.com/SaiThota2026/FMwebapp  
**Vercel project:** `f-mwebapp` (sai-thota-s-projects)  
**Handover date:** 2026-09-17  
**Local workspace:** `C:\Users\Sai_PrintPOP\Desktop\FMWebApp\FMwebapp`  
**Owner / engineer:** PrintPOP (Sai)

---

## 0. How to use this document

1. Read **§1 Current state** for the live snapshot.
2. Read **§2 Chronology** for everything done from the start of this Cursor session arc.
3. Use **§3 Inventory** as the technical map of the codebase.
4. Use **§4–§6** for images, placeholders, and crawlability.
5. Use **§7–§9** for deploy, constraints, and next actions.
6. Machine-readable site maps for agents live at:
   - https://www.facilitiesman.com.au/llms.txt
   - https://www.facilitiesman.com.au/llms-full.txt
   - https://www.facilitiesman.com.au/sitemap.xml
   - https://www.facilitiesman.com.au/sitemap/ (HTML)
   - https://www.facilitiesman.com.au/site-index.json
   - https://www.facilitiesman.com.au/robots.txt

**Master planning source:** Perplexity master SEO/content PDF provided by the owner (`Downloads\New file pp.pdf` / “newfile”). Tier 1 launch → Tier 2 expand → Tier 3 later metros/shells were implemented against that document.

---

## 1. Current state (snapshot)

| Metric | Value |
|--------|-------|
| Total indexable marketing pages | **57** |
| Images in Option C library | **418** unique PNGs in `public/images/content/` |
| Min images per page | **≥ 3** (audit min 3, avg ~6.8, max 28) |
| Image binary duplicates | **0** (each file unique bytes + unique basename) |
| Framework | Next.js **16.2.6** App Router, React **19.2.4**, TypeScript, Tailwind **v4** |
| DB | Supabase PostgreSQL via Prisma **7** (`DATABASE_URL` pooler + `DIRECT_URL`) |
| Contact leads | Written to Prisma `Lead` model (`source: WEBSITE_CONTACT`) |
| Trailing slashes | Enabled (`next.config.ts` → `trailingSlash: true`) |
| React Compiler | Enabled |
| GA4 | `G-D26DLPW4CN` |
| Brand | FACILITIES MAN — ABN `72 697 453 937` — phone `0450 924 377` — `support@facilitiesman.com.au` |
| Primary region | Newcastle / Hunter / Lake Macquarie / Central Coast NSW; metros Sydney, Brisbane, Melbourne added |

### 1.1 Page count breakdown

| Group | Count | Notes |
|-------|------:|-------|
| Static hubs / singles | 13 | `/`, about, certifications, reviews, case-studies, sitemap, services, locations, industries, faq, blog, contact, privacy |
| Service detail pages | 14 | 6 core + 8 Phase 2 |
| Location pages | 12 | 9 Hunter-region + Sydney + Brisbane + Melbourne |
| Industry pages | 5 | |
| Blog posts | 5 | MDX |
| Location × service combos | 8 | 5 regional + 3 Sydney |
| **Total** | **57** | |

### 1.2 What is intentionally NOT finished

Owner-supplied placeholders remain (see `docs/PLACEHOLDERS_CHECKLIST.md` + PDF). Do **not** invent:

- Public liability $ amount, PI cover, insurance PDF, ISO target dates
- Founder legal name / real headshot identity claims beyond current copy
- Fake Google reviews or `AggregateRating` JSON-LD
- Fabricated case studies

Case studies + reviews pages are **shells** ready for real content.

---

## 2. Chronology — everything finished from the beginning of this work arc

Dates are Australia/Sydney (session timestamps). Earlier Phase 1/2 site scaffolding already existed on `main` (`feat: complete Phase 2 site expansion and deploy-ready polish`). This arc continued from infra + images through master-doc completion.

### Phase A — Hosting & database (2026-09-16)

1. **Wired project to Vercel** (`f-mwebapp`).
2. **Wired Supabase PostgreSQL**:
   - Prisma schema + `src/lib/prisma.ts` (Prisma 7 + `@prisma/adapter-pg`)
   - `.env.example` documents `DATABASE_URL` (transaction pooler :6543) and `DIRECT_URL` (session/direct :5432)
   - `prisma/seed.ts` upserts services + locations from TypeScript data
   - Contact form → `createWebsiteLead()` in `src/lib/leads.ts`
3. Owner requested **local-first workflow**: develop on localhost; push/deploy live only when explicitly asked.
4. Passwords were rotated during setup; **never store credentials in docs/repo**. Use Vercel/Supabase dashboards + local `.env.local` only.

### Phase B — Image strategy (2026-09-16)

1. Audited all image placeholders for context.
2. Chose **Option C**: one unique photorealistic content image per slot via `contentImg(basename)` → `/images/content/{basename}.png`.
3. Constraint: **no page may have fewer than 3 images**, including blog posts.
4. Built shot list tooling:
   - `scripts/image-shot-list.mjs` → `scripts/image-shot-list.json` (**418** entries)
   - `scripts/validate-content-img-refs.mjs`
   - `scripts/copy-generated-assets.mjs`
5. Generated images with Cursor `GenerateImage` (photorealistic, NSW commercial context, no text/logos/watermarks).
6. Pilot: homepage batch, then **all remaining slots** filled and copied into `public/images/content/`.

### Phase C — Layout regressions & Contained Section System (2026-09-16 → 2026-09-17)

1. An intermediate layout pass broke mobile and heading alignment (commercial cleaning).
2. Owner requested revert to “images generated and loaded” baseline, then a proper redesign.
3. Screenshots provided; alignment of pictures/headings/body fixed iteratively.
4. Owner rejected incremental tweaks → approved **Contained Section System**:
   - `SectionPanel`, `FeaturePanel`, `FeatureCardGrid`
   - CSS: `.fm-container`, `.fm-section-stack`, `.fm-panel`, `.fm-panel-pad`, `.fm-section-heading`
   - Design principle: each major block in a contained panel; consistent structure across templates
5. FAQ accordion on desktop fixed to **full container width** (removed `max-w-3xl` constraint).

### Phase D — Master document alignment (2026-09-17)

1. Located Perplexity master PDF (`Downloads\New file pp.pdf`).
2. Clarified stage: end of Tier 2 with Tier 3 gaps.
3. Confirmed combo pages already existed for selected pairs (e.g. `/locations/newcastle/office-cleaning/`).
4. **Finished remaining master-doc Tier 3 work:**
   - `/about/certifications/`
   - `/reviews/` (shell; GBP URL placeholder)
   - `/case-studies/` (shell)
   - `/sitemap/` HTML sitemap + SiteNavigationElement schema
   - Location pages: Sydney, Brisbane, Melbourne
   - Sydney combos: commercial-cleaning, strata-cleaning, facilities-management
   - Nav/footer via `COMPANY_LINKS` / `LOCATIONS` in `src/lib/site.ts`
   - Schema helpers in `src/lib/schema.ts`
   - Tier-3 image queue (58) generated + copied; shot list total **418**
5. Created **`docs/PLACEHOLDERS_CHECKLIST.md`** (+ PDF export).
6. Fixed `src/lib/leads.ts` TypeScript predicate typing so `tsc` passes.

### Phase E — Handover + AI crawlability + live deploy (2026-09-17)

1. This document (`docs/PERPLEXITY_COMPUTER_HANDOVER.md`).
2. Explicit AI-bot allow rules in robots generation, `llms.txt`, `llms-full.txt`, `site-index.json`, head link to `llms.txt`.
3. Push to GitHub `main` and Vercel production deploy.

---

## 3. Technical inventory

### 3.1 Stack

| Layer | Choice |
|-------|--------|
| App | Next.js 16 App Router only (no Pages Router; no `src/app/api` routes) |
| UI | React 19, Tailwind 4, Inter + Plus Jakarta Sans |
| Content | TypeScript modules in `src/data/*` + MDX blog in `src/content/blog/` |
| DB | Prisma 7 → PostgreSQL (Supabase) |
| SEO sitemap | `next-sitemap` on `postbuild` |
| Hosting | Vercel |

### 3.2 Important config files

| File | Role |
|------|------|
| `next.config.ts` | `reactCompiler: true`, `trailingSlash: true` |
| `next-sitemap.config.js` | XML sitemap + robots.txt policies (including AI bots) |
| `prisma/schema.prisma` | User, Job, Service, Lead, Location, Content |
| `prisma.config.ts` | Prisma CLI URL selection |
| `src/lib/site.ts` | Brand, services, locations, industries, company links |
| `src/lib/content-images.ts` | `contentImg()` |
| `src/lib/home-images.ts` | Homepage image map |
| `src/lib/page-visuals.ts` | Visual label strings |
| `src/lib/schema.ts` | JSON-LD builders (no AggregateRating) |
| `src/lib/metadata.ts` | `createPageMetadata()` |
| `src/lib/leads.ts` | Lead creation |
| `src/lib/prisma.ts` | DB client |
| `src/app/actions/contact.ts` | Server action for quote form |
| `AGENTS.md` / `CLAUDE.md` | Cursor/Next agent rules (read Next docs under `node_modules/next/dist/docs/` for this version) |

### 3.3 Route map (all trailing-slash)

#### Static (13)

- `/`
- `/about/`
- `/about/certifications/`
- `/reviews/`
- `/case-studies/`
- `/sitemap/`
- `/services/`
- `/locations/`
- `/industries/`
- `/faq/`
- `/blog/`
- `/contact/`
- `/privacy-policy/`

#### Services (14) — `/services/{slug}/`

`commercial-cleaning`, `strata-cleaning`, `facilities-management`, `office-cleaning`, `grounds-maintenance`, `industrial-cleaning`, `medical-cleaning`, `childcare-cleaning`, `window-cleaning`, `carpet-cleaning`, `pressure-washing`, `warehouse-cleaning`, `sanitary-washroom-services`, `maintenance-trades`

#### Locations (12) — `/locations/{slug}/`

`newcastle`, `maitland`, `lake-macquarie`, `hunter-valley`, `central-coast`, `cessnock`, `port-stephens`, `singleton`, `muswellbrook`, `sydney`, `brisbane`, `melbourne`

#### Combos (8) — `/locations/{location}/{service}/`

| Location | Service |
|----------|---------|
| maitland | commercial-cleaning |
| lake-macquarie | strata-cleaning |
| newcastle | office-cleaning |
| newcastle | industrial-cleaning |
| hunter-valley | facilities-management |
| sydney | commercial-cleaning |
| sydney | strata-cleaning |
| sydney | facilities-management |

#### Industries (5) — `/industries/{slug}/`

`strata-body-corporate`, `healthcare`, `education-childcare`, `commercial-property`, `government`

#### Blog (5) — `/blog/{slug}/`

- `what-is-facilities-management`
- `industrial-cleaning-safety-nsw`
- `how-often-office-cleaning`
- `strata-cleaning-checklist`
- `how-to-choose-commercial-cleaning-newcastle`

### 3.4 UI system (Contained)

| Component | Path |
|-----------|------|
| SectionPanel | `src/components/ui/SectionPanel.tsx` |
| FeaturePanel | `src/components/ui/FeaturePanel.tsx` |
| FeatureCardGrid | `src/components/ui/FeatureCardGrid.tsx` |
| ImagePlaceholder | `src/components/ui/ImagePlaceholder.tsx` |
| PageHero | `src/components/layout/PageHero.tsx` |
| CtaSection / FaqAccordion / LinkCard / ProcessSteps / TrustStrip / RevealOnScroll / JsonLd | `src/components/ui/*` |

Tokens in `src/app/globals.css`: brand offwhite, gold `#d68511`, dark `#11161b`, teal `#12787b`, cream `#fbf9f3`.

### 3.5 Forms & leads

- UI: `src/components/contact/QuoteForm.tsx`
- Action: `submitContactForm` in `src/app/actions/contact.ts`
- Persistence: `createWebsiteLead` → Prisma `Lead`
- Optional webhook: `CONTACT_FORM_ENDPOINT` (if set, POST after DB write)
- Fields: fullName, businessName, phone, email, siteAddress, frequency, services[], additionalInfo, privacyAccepted

### 3.6 Scripts

| Script | Purpose |
|--------|---------|
| `scripts/image-shot-list.mjs` | Rebuild shot list JSON |
| `scripts/image-shot-list.json` | 418 slot definitions + prompts |
| `scripts/validate-content-img-refs.mjs` | Ensure `contentImg()` refs exist |
| `scripts/copy-generated-assets.mjs` | Copy generated PNGs into public |
| `scripts/list-tier3-images.mjs` / `tier3-*.json|mjs` | Tier-3 image ops |
| `scripts/qa-audit.mjs` / `phase2-qc.mjs` / `final-qa.mjs` / `check-rendered-meta.mjs` | QA helpers |

---

## 4. Image system (Option C) — details agents must not break

1. Prefer `contentImg("basename")` — never invent ad-hoc remote URLs for content slots.
2. Files live only under `public/images/content/{basename}.png`.
3. Shot list is source of truth for prompts/aspect; keep basename stable.
4. Homepage uses `HOME_IMAGE_SRC` from `src/lib/home-images.ts`.
5. Templates wire hero/section/card/map/region slots by naming convention, e.g.:
   - `services-{slug}-hero|section-1|section-2|section-3|areas`
   - `locations-{slug}-hero|region|section-local|section-industries|cluster-*|card-*`
   - `combos-{loc}-{service}-hero|body|region|section-1`
   - `blog-{slug}-hero|mid|sidebar`
6. If a `src` is missing, `ImagePlaceholder` shows a dashed `[PLACEHOLDER — label]` box (UI fallback — not the same as copy placeholders).
7. About page references `about-location-{slug}` for all locations; metro about cards for sydney/brisbane/melbourne may be absent while about still has ≥3 images from founder/walkthrough/compliance + regional cards.

---

## 5. Placeholders checklist (owner action)

Full tickable list: `docs/PLACEHOLDERS_CHECKLIST.md` and `docs/PLACEHOLDERS_CHECKLIST.pdf`.

**Priority A (compliance trust):** insurance $ amount (Footer, Home, home.ts, Certifications), PI confirm, insurance issue date, PDF link, ISO 9001/14001/45001 target dates.

**Priority B:** founder name + headshot on home; named bio on about.

**Priority C:** Google review text/stars, GBP review URL, reviews embed, home trust band, certification badge graphic.

**Priority D:** CTA copy leftover in `CtaSection.tsx`.

**Priority E:** real case studies; metro “Local Case Reference” blocks when earned.

Search: `rg "PLACEHOLDER|TRUST PLACEHOLDER" src --glob "*.{ts,tsx,mdx}"`

---

## 6. AI / Perplexity Computer crawlability

### 6.1 Policy

The business **wants** Perplexity Computer agents and other AI agents to crawl and cite the public marketing site. Training/search bots are explicitly **Allowed** in robots policies. Disallowed only: `/api/`, `/admin/` (reserved; no public app routes there today).

### 6.2 Files

| URL | Purpose |
|-----|---------|
| `/robots.txt` | Generated by next-sitemap; Allow AI bots + `*` |
| `/llms.txt` | Curated LLM entry map (llmstxt.org style) |
| `/llms-full.txt` | Expanded page inventory for agents |
| `/site-index.json` | Machine-readable JSON of all 57 routes + metadata |
| `/sitemap.xml` | XML sitemap index |
| `/sitemap/` | Human HTML sitemap |

### 6.3 Explicitly allowed user-agents (robots)

Including but not limited to: `PerplexityBot`, `Perplexity-User`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `anthropic-ai`, `Claude-Web`, `Google-Extended`, `Googlebot`, `bingbot`, `Applebot`, `Applebot-Extended`, `CCBot`, `Bytespider`, `meta-externalagent`.

### 6.4 Agent operating tips

- Prefer HTML pages + JSON-LD already embedded.
- Prefer `/llms.txt` then deep links; use `/site-index.json` for exhaustive enumeration.
- Do not invent AggregateRating or testimonials.
- Quote form posts via the Contact page UI / server action — not a public REST lead API.
- Respect trailing slashes on all URLs.

---

## 7. Local development & deploy

### 7.1 Local

```bash
npm install
# configure .env.local with DATABASE_URL + DIRECT_URL
npx prisma db push
npm run db:seed
npm run dev
# http://localhost:3000
```

### 7.2 Deploy (when asked)

```bash
git push origin main
npx vercel --prod --yes
```

Or rely on Vercel Git integration after push.

### 7.3 Env on Vercel

Must set `DATABASE_URL` (and ideally `DIRECT_URL` if CLI runs in CI). Optional: `CONTACT_FORM_ENDPOINT`.

**Never commit** `.env`, `.env.local`, or database passwords.

---

## 8. Hard constraints & product rules

1. **No fake reviews / AggregateRating** until verified GBP reviews exist.
2. **Placeholders stay placeholders** until owner supplies real values.
3. **Do not deploy** unless the owner explicitly asks (this handover deploy was explicitly requested).
4. Next.js 16 APIs may differ from training data — read `node_modules/next/dist/docs/` before changing framework usage (`AGENTS.md`).
5. Keep Contained Section System patterns; do not regress to free-floating messy sections.
6. Keep ≥3 unique content images per page.
7. Prefer TypeScript content modules over inventing a CMS unless scoped.

---

## 9. Recommended next actions for Perplexity Computer

1. Clear Priority A–C placeholders with owner-supplied facts; update every listed file.
2. Connect real GBP reviews embed + URL; only then consider AggregateRating schema.
3. Publish first real case study; remove empty-state shell copy.
4. Optionally expand more location×service combos if SEO plan requires denser coverage (master doc Tier logic).
5. Re-run `npm run build` after content changes so `next-sitemap` refreshes XML.
6. Run `node scripts/validate-content-img-refs.mjs` after image/slot changes.
7. Run `node scripts/final-qa.mjs` against production base URL for title/H1/canonical/JSON-LD smoke checks.
8. Confirm custom domain DNS still points at current Vercel production deployment.

---

## 10. Related documents in-repo

| Document | Path |
|----------|------|
| Placeholders checklist (MD) | `docs/PLACEHOLDERS_CHECKLIST.md` |
| Placeholders checklist (PDF) | `docs/PLACEHOLDERS_CHECKLIST.pdf` |
| This handover | `docs/PERPLEXITY_COMPUTER_HANDOVER.md` |
| Agent rules | `AGENTS.md`, `CLAUDE.md` |
| Shot list | `scripts/image-shot-list.json` |

---

## 11. Contact constants (public)

```
Name: FACILITIES MAN
ABN: 72 697 453 937
Phone: 0450 924 377 (+61450924377)
Email: support@facilitiesman.com.au
URL: https://www.facilitiesman.com.au
Address line: Newcastle, NSW, Australia
Hours: Monday–Saturday, 7am–7pm
GA4: G-D26DLPW4CN
```

---

*End of handover. Prefer this file + `/llms.txt` + `/site-index.json` as the agent onboarding pack.*
