# ToDo

## Styling

- [ ] Hero headshot uses default center crop (`object-cover`); add `object-position` if the face sits off-center in the circle.

## Bugs/Fixes

- [x] **Mercury entry in experience.js:** fixed — frontend corrected to Next.js/TypeScript, "with CI/CD" reworded to auto-migrations on deploy; Cloudflare kept (confirmed in use at the DNS/proxy level, not visible in the repo).

- [x] Hero's `nextSeason()` now computes client-only (useEffect) — prerendered HTML says just "Taking on projects", the browser fills in " for fall 2026" etc. No more per-season staleness or hydration mismatch.

## MVP Features

- [ ] **Review the three new essays before deploying** — `/pricing-transparency/`, `/do-you-need-custom-software/`, `/outgrown-your-spreadsheet/`. Pricing ranges approved 2026-09-02; sliding scale is explicitly non-profits-only.
- [ ] Site-name fix (WebSite JSON-LD + og:site_name) needs a Google recrawl to show — register Search Console (personal account) and request indexing of the homepage; expect days-to-weeks.
- [x] **Domain email — hello@gkats.dev → georgioscabro@gmail.com** (Sept 3, 2026): Squarespace email forwarding LIVE (verified end-to-end); site shows hello@ only (footer + FormSubmit target); documented in README. **Receive-only for now** — replies go out from the personal Gmail; sending *as* hello@ is iceboxed (see below). Small leftover: Gmail filter `deliveredto:hello@gkats.dev` → label "gkats.dev" for the separate-tab view.

- [x] Write one real case study (problem → build → outcome) — done: `/case-study/` (Mercury).
- [ ] Work through SEO.md — remaining items are all yours: Search Console (submit the now-live sitemap.xml), essays, App Store URL, NTEN, location mention. Full technical batch (prerender, JSON-LD, canonical, robots/sitemap, self-hosted fonts, image attrs, title tune) is done.
- [ ] **After deploying:** submit the contact form once yourself — the FormSubmit target changed to hello@gkats.dev, so FormSubmit sends a fresh one-time activation email (arrives via forwarding); until you click it, submissions are not delivered.

## IceBox Features

- [ ] **Mercury testimonial quote** — on ice while the quote is being worked on (as of Sept 2026); drop it into the case study's "The result" section when it lands.
- [ ] **Send email AS hello@gkats.dev** — currently bounces: Squarespace email forwarding force-adds a locked `p=reject` DMARC record (can't edit/delete while forwarding rules exist; known issue, 9-page Squarespace forum thread). Gmail send-as via smtp.gmail.com:587 + app password is already configured and verified — it starts working once DMARC is sane. Fix when wanted: delete the Squarespace forwarding rules (their DNS records auto-remove), move nameservers to Cloudflare (personal account, free) per the original runbook, use Cloudflare Email Routing for hello@ → Gmail, add own `p=none` DMARC. Alternative: paid mailbox (Zoho ~$1/mo) for fully aligned DKIM.

- [ ] Cite Kitten card now links to the App Store; the old landing page (https://gkatsikis.github.io/citekitten/) is no longer linked from the site — decide whether it should reappear anywhere.
- [ ] HL7 Converter demo sleeps on Render's free tier — first visit after idle takes ~30–60s to wake. Fine for a demo; move to an always-on host if it ever matters.
