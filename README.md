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

## Essays

The essay pages (`the-process/`, `case-study/`, `pricing-transparency/`,
`do-you-need-custom-software/`, `outgrown-your-spreadsheet/`) are plain
static HTML pages (no React) built as extra Vite entries — they share the
site's CSS/fonts and deploy as real URLs (e.g. `gkats.dev/the-process/`).
To add another essay: copy one, add its path to `vite.config.js`
(`rollupOptions.input`), `tailwind.config.js` (`content`), and
`public/sitemap.xml`.

## Domain email

`hello@gkats.dev` forwards to georgioscabro@gmail.com via Squarespace email
forwarding (Domains → gkats.dev → Email tab; runs on Mailgun MX records —
don't delete the MX/SPF/DMARC records in Squarespace DNS). Gmail is
configured to "send as" hello@gkats.dev through smtp.gmail.com:587 with an
app password. The site shows only hello@ (footer + contact form target).

The contact form posts to `formsubmit.co/ajax/hello@gkats.dev` — after the
first deployed submission, FormSubmit emails a one-time activation link to
hello@ (arrives via the forwarding); until it's clicked, submissions are
not delivered.

## Customize

Edit the data files in `src/data/`:
- `technologies.js` - tech stack
- `experience.js` - work history
- `projects.js` - portfolio projects

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
