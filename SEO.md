# SEO — recommendations & status

Realistic frame: a one-page portfolio wins **name searches** easily; commercial
queries ("custom software for nonprofits") are won by **content and backlinks**,
not meta tags. Items in rough order of impact.

## Done

- Bundle cut 5.2 MB → 332 KB (react-icons tree-shaking fix) — page speed feeds ranking.
- `og:image` + `twitter:card` meta — link previews show the headshot.
- "Built by Cabro Insight LLC" credits linking to gkats.dev added to Wisely,
  Mindful Companion, HL7 Converter, and Mercury frontends — deployed, backlinks
  live.
- **Build-time prerender** — `npm run build` now injects the fully rendered
  page into `dist/index.html` (`scripts/prerender.mjs`), so non-JS crawlers,
  link scanners, and AI tools see all content in the raw HTML.
- JSON-LD Person schema (name, Software Engineer, LMSW, `sameAs` →
  GitHub/LinkedIn) in `index.html`.
- `<link rel="canonical" href="https://gkats.dev/">`.
- `robots.txt` + one-URL `sitemap.xml` in `public/`.
- Self-hosted Fraunces/Inter variable woff2 (latin + latin-ext, `public/fonts/`)
  — removed the render-blocking Google Fonts `@import` chain.
- Headshot `width`/`height`; project images `loading="lazy"` + `decoding="async"`
  (project cards already sit in fixed-height boxes, so no per-image dims needed).
- Title: "Georgios Katsikis — Custom Software for Non-Profits & Healthcare".
- **Site name in Google results** — `WebSite` JSON-LD (name "Georgios
  Katsikis", alternateName "Software for Non-Profits & Healthcare") +
  `og:site_name` on the homepage, so the SERP shows the name instead of the
  bare "gkats.dev" domain. Google picks it up after a homepage recrawl —
  request one in Search Console once registered.
- **Three commercial-intent essays** — `/pricing-transparency/` (ranges +
  sliding scale), `/do-you-need-custom-software/` (build-vs-buy guide),
  `/outgrown-your-spreadsheet/` (7-signs listicle). Static routes in the
  sitemap, cross-linked with the two original essays and the homepage footer;
  closing CTAs added to both older essays.

## High impact — only you can do these

- **Review the essays.** Five are drafted as real static routes —
  `/the-process/` (Ocean), `/case-study/` (Mercury), `/pricing-transparency/`,
  `/do-you-need-custom-software/`, `/outgrown-your-spreadsheet/` — linked from
  the homepage footer and in the sitemap. Read them before deploying: the
  voice and judgment calls are Claude's draft, and a client quote or outcome
  number in the Mercury piece would strengthen it.
- Pricing ranges (discovery $1.5–3k, focused build $6–18k, platform $20–60k)
  approved 2026-09-02; sliding scale is stated as non-profits-only. Mercury
  testimonial quote is in progress (tracked in ToDo IceBox).
- **Google Search Console** — register gkats.dev under `geo.bjj.kat@gmail.com`
  (personal account, never the ocean one); submit the now-live sitemap.xml.
- **Cite Kitten's App Store listing** — set its marketing/support URL to
  gkats.dev; a link from apple.com is a strong one.
- **NTEN** (nonprofit tech network) membership/directory — where nonprofit
  buyers actually look. Skip Clutch-style listing farms.
- **Location mention** ("based in Connecticut, working remotely") only if you
  want geo-flavored leads — makes "custom software for nonprofits CT" winnable.

## Deliberately skipped

- **Hidden/invisible text** — classic penalty pattern; the credits are small
  but visible for exactly this reason.
- ~~**Pre-rendering/SSG**~~ — done after all (see Done): non-Google crawlers,
  link scanners, and AI tools don't run JS, and the zero-dependency prerender
  turned out to be ~30 lines. Essays adding real routes will need the
  prerender script extended to multiple pages.
