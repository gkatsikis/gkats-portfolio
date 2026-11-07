"""Paints an obsidian-glass glare onto brand/logo-1024.png, on the obsidian pixels only.
Bone glyphs, the terracotta period and the white corners are masked out by luminance."""
import math, sys
from PIL import Image, ImageChops, ImageDraw, ImageFilter

SRC, OUT = sys.argv[1], sys.argv[2]
base = Image.open(SRC).convert('RGB')
W, H = base.size
BONE, DEEP = (227, 218, 201), (6, 6, 6)

# Obsidian mask: full at the tile's luminance (~13), gone by 60, so glyph edges stay clean.
mask = base.convert('L').point(lambda v: int(max(0, min(255, (60 - v) * 255 / 47))))

def L(): return Image.new('L', (W, H), 0)
def bump(peak, width):  # a soft band across a 0..255 linear gradient
    return lambda t: int(255 * math.exp(-(((t / 255) - peak) / width) ** 2))

def band(angle, peak, width, strength):
    g = Image.linear_gradient('L').resize((W * 2, H * 2)).point(bump(peak, width))
    g = g.rotate(angle, resample=Image.BICUBIC).crop((W // 2, H // 2, W // 2 + W, H // 2 + H))
    return g.point(lambda v: int(v * strength))

# 1. Depth: edges fall toward the deep band colour.
vig = Image.radial_gradient('L').resize((W, H)).point(lambda v: int(min(255, max(0, (v - 90) * 1.6)) * 0.6))
base = Image.composite(Image.new('RGB', (W, H), DEEP), base, ImageChops.multiply(vig, mask))

glare = L()
# 2. The main reflection: a narrow, crisp-edged diagonal band, the hard specular glass gives.
glare = ImageChops.add(glare, band(-28, 0.33, 0.055, 0.34))
# 3. Its double, thinner and fainter, offset the way a second surface reflects.
glare = ImageChops.add(glare, band(-28, 0.455, 0.022, 0.14))
# 4. A window reflection: a defined bright shape near the top edge, softened only at its border.
win = L(); ImageDraw.Draw(win).ellipse((110, 30, 560, 200), fill=255)
glare = ImageChops.add(glare, win.filter(ImageFilter.GaussianBlur(22)).point(lambda v: int(v * 0.36)))
# 5. Conchoidal fracture: a few irregular rings from one corner, faint, seeded so the file rebuilds the same.
import random; rnd = random.Random(7)
rings = L(); d = ImageDraw.Draw(rings); r = 90
while r < 1500:
    d.ellipse((150 - r, 1130 - r, 150 + r, 1130 + r), outline=255, width=2)
    r += rnd.randint(44, 96)
rings = rings.filter(ImageFilter.GaussianBlur(1.0)).point(lambda v: int(v * 0.055))
glare = ImageChops.add(glare, rings)
# 6. A lit rim along the inside of the tile's top edge, fading out by mid-height.
rim = ImageChops.subtract(mask, mask.filter(ImageFilter.MinFilter(7)))
fade = Image.linear_gradient('L').resize((W, H)).point(lambda v: int(max(0, 255 - v * 2.4)))
glare = ImageChops.add(glare, ImageChops.multiply(rim, fade).point(lambda v: int(v * 0.45)))

glare = ImageChops.multiply(glare, mask)
out = Image.composite(Image.new('RGB', (W, H), BONE), base, glare)
out.save(OUT)
print('wrote', OUT)
