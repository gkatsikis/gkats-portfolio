# gkats-portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

`npm run build` prerenders the page: after the normal Vite build, it renders
the React app to static HTML ([scripts/prerender.mjs](scripts/prerender.mjs))
and injects it into `dist/index.html`, so crawlers and non-JS clients see the
full content. The browser then hydrates that markup (`src/main.jsx`); `npm run
dev` still serves the plain client-rendered app.

## Seedling pages

`public/seedling/` (the landing page Google's sign-in screen links to) and `public/seedling/privacy/` are hand-written.
Their facts follow `../Seedling/ARCHITECTURE.md` (Rules 12 and 13); change them there first.

## Cultivar pages

`public/cultivar/` (the landing page) and `public/cultivar/privacy/` are hand-written. `public/cultivar/sources/` is generated from
`../Cultivar/Habits.md` by [scripts/cultivar-sources.sh](scripts/cultivar-sources.sh), which runs
before every `npm run build` (so `npm run deploy` always ships the current evidence). It needs
`pandoc` and the Cultivar repo next to this one, and fails the build without either. To change
the page, edit Habits.md or [scripts/cultivar-sources.html](scripts/cultivar-sources.html), never
the generated file.

## Essays

The essay pages (`the-process/`, `case-study/`, `pricing-transparency/`,
`do-you-need-custom-software/`, `outgrown-your-spreadsheet/`) and the
personal `coming-home/` page are plain
static HTML pages (no React) built as extra Vite entries — they share the
site's CSS/fonts and deploy as real URLs (e.g. `gkats.dev/the-process/`).
To add another essay: copy one, add its path to `vite.config.js`
(`rollupOptions.input`), `tailwind.config.js` (`content`), and
`public/sitemap.xml`.

## Domain email

`hello@gkats.dev` forwards to georgioscabro@gmail.com via Squarespace email
forwarding (Domains → gkats.dev → Email tab; runs on Mailgun MX records —
don't delete the MX/SPF/DMARC records in Squarespace DNS). The site shows
only hello@ (footer + contact form target). **Receive-only:** Squarespace
force-adds a locked `p=reject` DMARC record, so sending *as* hello@ (Gmail
send-as is configured but unused) bounces at strict receivers — replies go
out from the personal Gmail. The fix, if ever wanted, is iceboxed in
`ToDo.md` (move to Cloudflare Email Routing).

The contact form posts to `formsubmit.co/ajax/hello@gkats.dev` — after the
first deployed submission, FormSubmit emails a one-time activation link to
hello@ (arrives via the forwarding); until it's clicked, submissions are
not delivered.

## Photos

Personal photos for `/coming-home/` live in `public/photos/` (served at
`/photos/<name>.jpg`). The page expects `hero-1.jpg`, `mats-1.jpg`,
`mats-2.jpg`, `table-1.jpg`, `table-2.jpg`; a missing file renders as a
dashed placeholder polaroid instead of a broken image.

## Project screenshots

A project with no public URL carries a `screens` array in `projects.js` instead
of `liveUrl`; the card then opens a lightbox. The Live Donation Tracker's screens
live in `public/donation-tracker/` and come from its demo mode (`../DonationLiveTracker`).
To regenerate them, start the demo, draw the raffle so a winner shows, then
screenshot each page with headless Chrome. The compositor flags are needed or
the thermometer's CSS fill transition never runs and the jellyfish stays grey:

```bash
(cd ../DonationLiveTracker && python3 tracker.py demo &)
curl -s -X POST -H "X-Raffle: draw" http://localhost:8078/raffle/draw
for p in "donations:/" "raffle:/raffle" "auction:/auction"; do
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
    --hide-scrollbars --window-size=1920,1080 --virtual-time-budget=20000 \
    --run-all-compositor-stages-before-draw --disable-threaded-animation \
    --user-data-dir=/tmp/chrome-shot --screenshot=/tmp/${p%%:*}.png "http://localhost:8078${p#*:}"
  cwebp -q 82 -resize 1600 0 /tmp/${p%%:*}.png -o public/donation-tracker/${p%%:*}.webp
done
```

Stop the demo with `python3 tracker.py stop` in its folder, or it exits on its own after 30 minutes.

## Customize

Edit the data files in `src/data/`:
- `technologies.js` - tech stack
- `experience.js` - work history
- `projects.js` - portfolio projects (`screens` for a project shown via lightbox)

## Brand

Brand guidelines and logo exports live in `brand/`. `brand-kit.html` is the
editable source (self-contained, fonts embedded — open in any browser);
`brand-kit.pdf` and `logo-1024.{png,jpg}` are generated from it.

Regenerate the PDF after editing the HTML (Chrome writes the file, then may
hang on exit because of the page's infinite gradient animation — Ctrl-C once
the file appears):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --no-pdf-header-footer --print-to-pdf=brand/brand-kit.pdf brand/brand-kit.html
```
