#!/bin/sh
# Builds gkats.dev/cultivar/sources/ from Cultivar's Habits.md, so the public evidence page is the
# same text the app is built on and cannot drift from it. Runs before every `npm run build`.
# Everything above the first "## " is the repo's own preamble; the template's introduction
# replaces it. Needs pandoc and ../Cultivar next to this repo, and fails loudly without either.
set -eu
here=$(dirname "$0")
src="$here/../../Cultivar/Habits.md"
out="$here/../public/cultivar/sources/index.html"
mkdir -p "$(dirname "$out")"
awk 'f || /^## /{f=1} f' "$src" |
  pandoc -f gfm -t html5 --toc --toc-depth=2 \
    --template="$here/cultivar-sources.html" \
    --metadata pagetitle="Cultivar — The evidence" \
    -o "$out"
echo "wrote $out"
