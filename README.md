# Green Planet Services — Melbourne cleaning website

Next.js (App Router) marketing site optimised for **Australian SEO**, responsive layout, and scalable content structure.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set production URL for canonicals and sitemap:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.greenplanetservices.com.au
```

## Project structure

```
src/
  app/                    # Routes (each page exports metadata for SEO)
    page.tsx              # Landing page
    services/[slug]/      # Static service detail pages
    robots.ts / sitemap.ts
  components/
    layout/               # Header, footer, page chrome
    sections/             # Landing page sections (Figma-aligned)
    forms/
    seo/                  # JSON-LD helpers
    ui/                   # Buttons, container, headings
  config/
    site.ts               # Business details (phone, address, AU locale)
    navigation.ts         # Nav + footer links + services mega menu
    services.ts           # Service catalogue (single source of truth)
  lib/
    seo/metadata.ts       # Shared Metadata / Open Graph builder
```

## SEO (Australia)

- `lang="en-AU"` and Open Graph `locale: en_AU`
- Per-route `metadata` via `createPageMetadata()`
- `LocalBusiness` + `WebSite` JSON-LD (Melbourne geo)
- Auto `sitemap.xml` and `robots.txt`
- Semantic headings and service URLs under `/services/[slug]`

## Next Figma pages

Share designs page-by-page; we map each to a route under `src/app/` and reusable sections under `src/components/sections/`.

Replace placeholder copy, images, and `site.ts` contact details with final client assets.
