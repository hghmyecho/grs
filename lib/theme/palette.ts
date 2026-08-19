// Self-serve brand color picker — see app/theme-editor/page.tsx.
//
// The whole site's colors are Tailwind v4 `--color-*` CSS custom
// properties (confirmed by inspecting the compiled stylesheet, Aug 2026 —
// Tailwind v4 always emits `background-color: var(--color-orange-700)`
// etc for every utility class, even for shades this project never
// overrides in app/globals.css, which just fall back to Tailwind's own
// built-in theme values). That means overriding these 12 variables at
// runtime — e.g. via an inline `style` attribute on <html>, which beats
// any stylesheet rule regardless of source order — reskins every button,
// header, card, and gradient across the site with zero rebuild.
//
// Rather than have Fira manage 12 shades individually (easy to end up
// with a clashing palette), she only ever sees 3 swatches — one per
// "anchor" shade that the rest of each ramp is derived from:
//   - navy seed   -> today's navy-900   (buttons, icons, nav pill bg)
//   - orange seed -> today's orange-700 (the CTA color, used everywhere)
//   - peach seed  -> today's peach-200  (soft card/section backgrounds)
//
// The lightness/saturation offsets below were reverse-engineered from
// the real current palette (canvas-decoded computed colors, since
// orange-700/800/100 are Tailwind's stock defaults rather than custom
// values — see git history for the extraction) so leaving all 3 seeds at
// their defaults reproduces today's site exactly, pixel for pixel.
// Picking a different seed hue generalizes reasonably (hue/saturation
// carried through, lightness stepped by the same deltas) but isn't
// guaranteed to be a professionally balanced ramp for every possible
// color — that's an acceptable tradeoff for a self-serve tool.

export interface ThemeSeeds {
  navy: string;
  orange: string;
  peach: string;
}

// Today's real colors (navy-900 / orange-700 / peach-200), so "no change
// yet" in the picker == the current live site.
export const DEFAULT_THEME_SEEDS: ThemeSeeds = {
  navy: "#002766",
  orange: "#ca3500",
  peach: "#fdd8b0",
};

interface Hsl {
  h: number;
  s: number;
  l: number;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function hexToHsl(hex: string): Hsl {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return { h: 0, s: 0, l: l * 100 };

  const delta = max - min;
  const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let h: number;
  switch (max) {
    case r:
      h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
      break;
    case g:
      h = ((b - r) / delta + 2) * 60;
      break;
    default:
      h = ((r - g) / delta + 4) * 60;
  }

  return { h, s: s * 100, l: l * 100 };
}

function hslToHex({ h, s, l }: Hsl): string {
  const sN = s / 100;
  const lN = l / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;

  let [r, g, b] = [0, 0, 0];
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  const toHex = (n: number) =>
    Math.round(clamp((n + m) * 255, 0, 255))
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Nudge a seed's lightness/saturation by fixed deltas, hue unchanged. */
function step(seed: Hsl, deltaL: number, deltaS = 0): string {
  return hslToHex({
    h: seed.h,
    s: clamp(seed.s + deltaS, 0, 100),
    l: clamp(seed.l + deltaL, 0, 100),
  });
}

/**
 * Derives every brand CSS variable the site uses from the 3 seed colors.
 * Returns a map ready to spread into an inline `style` object (as
 * `React.CSSProperties`, cast — custom properties aren't in its type).
 */
export function deriveThemeVars(seeds: ThemeSeeds): Record<string, string> {
  const navy = hexToHsl(seeds.navy);
  const orange = hexToHsl(seeds.orange);
  const peach = hexToHsl(seeds.peach);

  return {
    "--color-navy-950": step(navy, -10),
    "--color-navy-900": step(navy, 0),
    "--color-navy-700": step(navy, 8, -14),
    "--color-navy-500": step(navy, 22, -44),

    "--color-orange-800": step(orange, -8),
    "--color-orange-700": step(orange, 0),
    "--color-orange-600": step(orange, 4),
    "--color-orange-500": step(orange, 14),
    "--color-orange-400": step(orange, 23),
    "--color-orange-100": step(orange, 52),

    "--color-peach-200": step(peach, 0),
    "--color-peach-100": step(peach, 11, -3),
  };
}
