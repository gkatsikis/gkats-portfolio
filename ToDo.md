# ToDo

## Styling

- [ ] Hero headshot uses default center crop (`object-cover`); add `object-position` if the face sits off-center in the circle.

## Bugs/Fixes

- [x] **Mercury entry in experience.js:** fixed — frontend corrected to Next.js/TypeScript, "with CI/CD" reworded to auto-migrations on deploy; Cloudflare kept (confirmed in use at the DNS/proxy level, not visible in the repo).

- [x] Hero's `nextSeason()` now computes client-only (useEffect) — prerendered HTML says just "Taking on projects", the browser fills in " for fall 2026" etc. No more per-season staleness or hydration mismatch.

## MVP Features

- [ ] Write one real case study (problem → build → outcome); Mercury's multi-tenant story is the strongest candidate. Testimonial quote when one exists.
- [ ] Work through SEO.md — remaining items are all yours: Search Console (submit the now-live sitemap.xml), essays, App Store URL, NTEN, location mention. Full technical batch (prerender, JSON-LD, canonical, robots/sitemap, self-hosted fonts, image attrs, title tune) is done.
- [ ] **After deploying the contact form:** submit it once yourself — FormSubmit sends a one-time activation email to georgioscabro@gmail.com; until you click it, submissions are not delivered.

## IceBox Features

- [ ] Cite Kitten card now links to the App Store; the old landing page (https://gkatsikis.github.io/citekitten/) is no longer linked from the site — decide whether it should reappear anywhere.
- [ ] HL7 Converter demo sleeps on Render's free tier — first visit after idle takes ~30–60s to wake. Fine for a demo; move to an always-on host if it ever matters.
