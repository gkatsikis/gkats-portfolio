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
