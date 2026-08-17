# SEO — recommendations & status

Realistic frame: a one-page portfolio wins **name searches** easily; commercial
queries ("custom software for nonprofits") are won by **content and backlinks**,
not meta tags. Items in rough order of impact.

## Done

- Bundle cut 5.2 MB → 332 KB (react-icons tree-shaking fix) — page speed feeds ranking.
- `og:image` + `twitter:card` meta — link previews show the headshot.
- "Built by Cabro Insight LLC" credits linking to gkats.dev added to Wisely,
  Mindful Companion, HL7 Converter, and Mercury frontends (each needs deploying
  to activate its backlink).

## High impact — only you can do these

- **Deploy the credit lines** — every live product footer is a permanent,
  legitimate backlink to gkats.dev.
- **Write the essay(s).** Articles rank for buyer queries ("case management
  software for small nonprofits"); the homepage never will. Essays need real
  URLs (static pages, not SPA anchors) — ask Claude to scaffold that when ready.
- **Google Search Console** — register gkats.dev under `geo.bjj.kat@gmail.com`
  (personal account, never the ocean one); submit the sitemap once it exists.
- **Cite Kitten's App Store listing** — set its marketing/support URL to
  gkats.dev; a link from apple.com is a strong one.
- **NTEN** (nonprofit tech network) membership/directory — where nonprofit
  buyers actually look. Skip Clutch-style listing farms.
- **Location mention** ("based in Connecticut, working remotely") only if you
  want geo-flavored leads — makes "custom software for nonprofits CT" winnable.

## Technical batch — Claude can do this in one pass, say the word

- JSON-LD Person schema (name, engineer + LMSW, `sameAs` → GitHub/LinkedIn).
- `<link rel="canonical" href="https://gkats.dev/">`.
- `robots.txt` + one-URL `sitemap.xml`.
- Self-host Fraunces/Inter woff2 (files already fetched during the brand-kit
  work) — removes the render-blocking Google Fonts `@import` chain.
- `width`/`height` attributes + `loading="lazy"` on images — kills layout shift.
- Title tune: "Georgios Katsikis — Custom Software for Non-Profits & Healthcare".

## Deliberately skipped

- **Hidden/invisible text** — classic penalty pattern; the credits are small
  but visible for exactly this reason.
- **Pre-rendering/SSG** — Google renders the one-page SPA fine; the build
  complexity buys nothing until essays add real routes.
