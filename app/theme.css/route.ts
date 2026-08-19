import { deriveThemeVars } from "@/lib/theme/palette";
import { getThemeSeeds } from "@/lib/theme/store";

// Served as a real <link rel="stylesheet"> from the root layout, NOT
// fetched via client JS and NOT read inside the layout's render tree.
// That's deliberate: it keeps every other page's static prerendering
// completely untouched — no Cache Components / PPR needed here (this
// project doesn't have cacheComponents enabled).
//
// Colors are read from lib/theme/seeds.json, a value baked into this
// deployment's build (saving from /theme-editor commits a new value and
// triggers a fresh deploy — see lib/theme/store.ts for why this isn't
// Vercel Global Config). No dynamic APIs are used here, so Next.js
// statically generates this route once at build time, same as any other
// static asset — exactly right, since the value can only change via a
// new build anyway.
//
// `!important` on every property, rather than relying on this
// stylesheet loading after app/globals.css in the document, guarantees
// the override wins regardless of Next.js's internal <head> ordering.

export async function GET() {
  const seeds = await getThemeSeeds();
  const vars = deriveThemeVars(seeds);

  const css = `:root {\n${Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value} !important;`)
    .join("\n")}\n}\n`;

  return new Response(css, {
    headers: { "Content-Type": "text/css; charset=utf-8" },
  });
}
