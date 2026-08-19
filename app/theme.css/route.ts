import { deriveThemeVars } from "@/lib/theme/palette";
import { getThemeSeeds } from "@/lib/theme/store";

// Served as a real <link rel="stylesheet"> from the root layout, NOT
// fetched via client JS and NOT read inside the layout's render tree.
// That's deliberate: it keeps every other page's static prerendering
// completely untouched (no Cache Components / PPR needed here — this
// project doesn't have cacheComponents enabled) while still reflecting
// a saved theme change within seconds, since the browser re-requests
// this resource on every navigation like any other stylesheet.
//
// `!important` on every property, rather than relying on this
// stylesheet loading after app/globals.css in the document, guarantees
// the override wins regardless of Next.js's internal <head> ordering.
export const dynamic = "force-dynamic";

export async function GET() {
  const seeds = await getThemeSeeds();
  const vars = deriveThemeVars(seeds);

  const css = `:root {\n${Object.entries(vars)
    .map(([name, value]) => `  ${name}: ${value} !important;`)
    .join("\n")}\n}\n`;

  return new Response(css, {
    headers: {
      "Content-Type": "text/css; charset=utf-8",
      // No caching: a saved color change should reach every visitor on
      // their next navigation, not wait out a stale-while-revalidate
      // window. Global Config's own reads are already edge-fast, so
      // there's no real cost to skipping HTTP caching here.
      "Cache-Control": "no-store",
    },
  });
}
