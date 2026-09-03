# ToDo

## Styling

- [ ] Hero headshot uses default center crop (`object-cover`); add `object-position` if the face sits off-center in the circle.

## Bugs/Fixes

- [x] **Mercury entry in experience.js:** fixed — frontend corrected to Next.js/TypeScript, "with CI/CD" reworded to auto-migrations on deploy; Cloudflare kept (confirmed in use at the DNS/proxy level, not visible in the repo).

- [x] Hero's `nextSeason()` now computes client-only (useEffect) — prerendered HTML says just "Taking on projects", the browser fills in " for fall 2026" etc. No more per-season staleness or hydration mismatch.

## MVP Features

- [ ] **Review the three new essays before deploying** — `/pricing-transparency/`, `/do-you-need-custom-software/`, `/outgrown-your-spreadsheet/`. Pricing ranges approved 2026-09-02; sliding scale is explicitly non-profits-only.
- [ ] Site-name fix (WebSite JSON-LD + og:site_name) needs a Google recrawl to show — register Search Console (personal account) and request indexing of the homepage; expect days-to-weeks.
- [ ] **Domain email — hello@gkats.dev → georgioscabro@gmail.com** (runbook, Sept 2026). Layers verified: registrar Squarespace; DNS managed in Squarespace's panel (served on legacy Google nameservers); site on GitHub Pages — DNS/email don't touch Pages. (1) Squarespace → Domains → gkats.dev → **Email forwarding**: hello@ → georgioscabro@gmail.com (adds MX itself; no nameserver move). (2) Test-mail hello@; if nothing arrives, replace the `v=spf1 -all` TXT with Squarespace's recommended SPF. (3) Gmail → Accounts and Import → Send mail as: hello@gkats.dev via smtp.gmail.com:587, username georgioscabro@gmail.com + App Password (needs 2-Step Verification; myaccount.google.com/apppasswords) — do *after* forwarding works, the verification code arrives at hello@; pick "Reply from the same address the message was sent to". (4) Gmail filter `deliveredto:hello@gkats.dev` → label "gkats.dev" (+ optional Multiple Inboxes section `label:gkats.dev`). Fallback if Squarespace forwarding is missing: Cloudflare Email Routing (personal account, free) — requires moving nameservers to Cloudflare and deleting the old SPF TXT when it adds its own. After it's live: switch site contact email + README. **Status Sept 3, 2026:** forwarding LIVE (verified end-to-end — Gmail's send-as code arrived through it); Gmail send-as configured; site now shows hello@ only (footer + FormSubmit target). **Outstanding:** (a) DMARC in the live zone is still `p=reject`/`sp=reject` — send-as mail bounces until the `_dmarc` TXT is edited to `p=none`/`sp=none` in Squarespace DNS settings (1h TTL); (b) Gmail filter `deliveredto:hello@gkats.dev` → label "gkats.dev".

- [x] Write one real case study (problem → build → outcome) — done: `/case-study/` (Mercury).
- [ ] Work through SEO.md — remaining items are all yours: Search Console (submit the now-live sitemap.xml), essays, App Store URL, NTEN, location mention. Full technical batch (prerender, JSON-LD, canonical, robots/sitemap, self-hosted fonts, image attrs, title tune) is done.
- [ ] **After deploying:** submit the contact form once yourself — the FormSubmit target changed to hello@gkats.dev, so FormSubmit sends a fresh one-time activation email (arrives via forwarding); until you click it, submissions are not delivered.

## IceBox Features

- [ ] **Mercury testimonial quote** — on ice while the quote is being worked on (as of Sept 2026); drop it into the case study's "The result" section when it lands.

- [ ] Cite Kitten card now links to the App Store; the old landing page (https://gkatsikis.github.io/citekitten/) is no longer linked from the site — decide whether it should reappear anywhere.
- [ ] HL7 Converter demo sleeps on Render's free tier — first visit after idle takes ~30–60s to wake. Fine for a demo; move to an always-on host if it ever matters.
