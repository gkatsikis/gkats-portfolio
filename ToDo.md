# ToDo

## Styling

- [ ] Hero headshot uses default center crop (`object-cover`); add `object-position` if the face sits off-center in the circle.

## Bugs/Fixes

- [ ] Add `og:image` (absolute URL, e.g. https://gkats.dev/headshot.jpg) + `twitter:card` meta — link previews on LinkedIn/Slack/iMessage currently have no image.
- [ ] Footer polish: tagline "Building digital experiences" → positioning line; "© All rights reserved" → add name.

- [ ] Verify the About stat "2 Products Live Today" — Cite Kitten is now live on the App Store; bump the number if it wasn't already counted.
- [ ] Pre-existing: the JS bundle is 5.2 MB (2 MB gzip) — likely react-icons/framer-motion imports; worth code-splitting or trimming icon imports for first-load speed.

## MVP Features

- [ ] Consider a short services blurb ("What I build for non-profits & healthcare") to back the new positioning with concrete offerings.

## IceBox Features

- [ ] Cite Kitten card now links to the App Store; the old landing page (https://gkatsikis.github.io/citekitten/) is no longer linked from the site — decide whether it should reappear anywhere.
