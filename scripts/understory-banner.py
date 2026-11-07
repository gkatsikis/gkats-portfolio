#!/usr/bin/env python3
"""Builds public/understory/ from the iPhone simulator captures in ../iSeedling/screenshots-check:
three phone screens with rounded corners for the lightbox, and a 1600x540 banner of their top
halves side by side for the project card. Needs Pillow. Run after refreshing the captures."""
from pathlib import Path
from PIL import Image, ImageDraw

SRC = Path(__file__).resolve().parent.parent.parent / 'iSeedling' / 'screenshots-check'
OUT = Path(__file__).resolve().parent.parent / 'public' / 'understory'
SCREENS = {'sit': 'ax-sit.png', 'meditations': 'pro17-reflection.png', 'together': 'ax-together.png'}
PAPER, INK = '#F7F7F5', '#111111'  # the app's own palette, branding-kit/tokens/seedling.json


def rounded(img, radius):
    mask = Image.new('L', img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, img.width - 1, img.height - 1), radius, fill=255)
    out = img.convert('RGBA')
    out.putalpha(mask)
    return out


OUT.mkdir(exist_ok=True)
shots = {}
for name, file in SCREENS.items():
    img = Image.open(SRC / file).convert('RGB')
    shots[name] = img
    h = 1400
    w = round(img.width * h / img.height)
    rounded(img.resize((w, h), Image.LANCZOS), round(150 * h / img.height)).save(OUT / f'{name}.webp', quality=82)

# Banner: the phones run off the bottom edge on purpose, so the card shows their top halves.
W, H, PW, GAP, TOP, BEZEL, R = 1600, 540, 400, 80, 40, 8, 50
banner = Image.new('RGB', (W, H), PAPER)
x = (W - 3 * PW - 2 * GAP) // 2
for name in SCREENS:
    img = shots[name]
    ph = round(img.height * PW / img.width)
    phone = rounded(img.resize((PW, ph), Image.LANCZOS), R)
    bezel = Image.new('RGBA', (PW + 2 * BEZEL, ph + 2 * BEZEL), (0, 0, 0, 0))
    ImageDraw.Draw(bezel).rounded_rectangle((0, 0, bezel.width - 1, bezel.height - 1), R + BEZEL, fill=INK)
    bezel.alpha_composite(phone, (BEZEL, BEZEL))
    banner.paste(bezel, (x - BEZEL, TOP - BEZEL), bezel)
    x += PW + GAP
banner.save(OUT / 'banner.webp', quality=85)
print('wrote', *sorted(p.name for p in OUT.iterdir()))
