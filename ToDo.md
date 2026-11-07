# ToDo

## Styling

- [ ] **Obsidian glass ground** (Nov 7, 2026): the page sits on a fixed `body::before` slab with the logo's shine; About, Experience and Projects sections are transparent, Technologies, Social Work, Services and the footer use `band-deep`. The hero gradient is translucent so the slab shows through. Review on a real display at several widths; the reflection band is viewport-relative, so it sits steeper on phones. The favicon stays flat (16 px).
- [ ] **Palette switched to obsidian and bone** (Nov 7, 2026): ground `#0D0D0D`, deep `#060606`, cards `#1A1A1A`, bone `#E3DAC9` for everything that was white; terracotta and dusk unchanged, stone kept for text greys. Review every section and the six essay pages in the browser; the essay pages' `border-stone-800` rules became `border-obsidian-raised`, check the rules still read against the darker ground.
- [ ] Brand kit still lists `georgioscabro@gmail.com` as the contact channel; the site shows `hello@gkats.dev`. Update the Assets table when the kit is next edited.
- [ ] Hero headshot uses default center crop (`object-cover`); add `object-position` if the face sits off-center in the circle.

## Bugs/Fixes

- [x] **Mercury entry in experience.js:** fixed — frontend corrected to Next.js/TypeScript, "with CI/CD" reworded to auto-migrations on deploy; Cloudflare kept (confirmed in use at the DNS/proxy level, not visible in the repo).

- [x] Hero's `nextSeason()` now computes client-only (useEffect) — prerendered HTML says just "Taking on projects", the browser fills in " for fall 2026" etc. No more per-season staleness or hydration mismatch.

## MVP Features

- [ ] **/coming-home/** (final name after several renames): all placeholders are filled; page is 100% real content. Review once in the browser before deploying.
- [x] **Photos on /coming-home/** (Sept 3, 2026): all five slots filled. Originals were 15MB Pixel photos **with GPS EXIF; stripped** (resized to ~1000px, ~570KB total, metadata removed; originals backed up in the session scratchpad, not the repo). Captions and alt text are Claude drafts from the photo contents; review before deploying.

- [ ] **Live Donation Tracker card** (Nov 6, 2026): first project; no live URL, so the card opens a lightbox of three demo-mode screens (`public/donation-tracker/`). Review the copy and the lightbox in the browser (desktop and phone) before deploying. Screenshots name Triangle Community Center in their headers; swap for a renamed demo if the client prefers not to be named.
- [ ] **Understory card** (Nov 7, 2026): second project, App Store link live (id6823761070), "Google Play · TBA" placeholder button. Description is adapted from the /seedling/ landing page and the branding kit; review the words. When the Android build ships, replace `comingSoon` with a Play link (a second live URL needs a small Projects.jsx change).
- [ ] **Review the three new essays before deploying** — `/pricing-transparency/`, `/do-you-need-custom-software/`, `/outgrown-your-spreadsheet/`. Pricing ranges approved 2026-09-02; sliding scale is explicitly non-profits-only.
- [ ] Site-name fix (WebSite JSON-LD + og:site_name) needs a Google recrawl to show — register Search Console (personal account) and request indexing of the homepage; expect days-to-weeks.
- [x] **Domain email — hello@gkats.dev → georgioscabro@gmail.com** (Sept 3, 2026): Squarespace email forwarding LIVE (verified end-to-end); site shows hello@ only (footer + FormSubmit target); documented in README. **Receive-only for now** — replies go out from the personal Gmail; sending *as* hello@ is iceboxed (see below). Small leftover: Gmail filter `deliveredto:hello@gkats.dev` → label "gkats.dev" for the separate-tab view.

- [x] Write one real case study (problem → build → outcome) — done: `/case-study/` (Mercury).
- [ ] Work through SEO.md — remaining items are all yours: Search Console (submit the now-live sitemap.xml), essays, App Store URL, NTEN, location mention. Full technical batch (prerender, JSON-LD, canonical, robots/sitemap, self-hosted fonts, image attrs, title tune) is done.
- [ ] **After deploying:** submit the contact form once yourself — the FormSubmit target changed to hello@gkats.dev, so FormSubmit sends a fresh one-time activation email (arrives via forwarding); until you click it, submissions are not delivered.

## IceBox Features

- [x] **Mercury testimonial quote** (Sept 8, 2026): landed. Brian's full quote sits in `/case-study/` under "The result" as a glass-panel `<figure>` with a terracotta left accent, attributed "Brian · Mercury Marketing". **Confirm with Brian that he's fine being named before deploying.** Deliberately not repeated on the homepage.
- [ ] **Send email AS hello@gkats.dev** — currently bounces: Squarespace email forwarding force-adds a locked `p=reject` DMARC record (can't edit/delete while forwarding rules exist; known issue, 9-page Squarespace forum thread). Gmail send-as via smtp.gmail.com:587 + app password is already configured and verified — it starts working once DMARC is sane. Fix when wanted: delete the Squarespace forwarding rules (their DNS records auto-remove), move nameservers to Cloudflare (personal account, free) per the original runbook, use Cloudflare Email Routing for hello@ → Gmail, add own `p=none` DMARC. Alternative: paid mailbox (Zoho ~$1/mo) for fully aligned DKIM.

- [ ] Cite Kitten card now links to the App Store; the old landing page (https://gkatsikis.github.io/citekitten/) is no longer linked from the site — decide whether it should reappear anywhere.
- [ ] HL7 Converter demo sleeps on Render's free tier — first visit after idle takes ~30–60s to wake. Fine for a demo; move to an always-on host if it ever matters.
