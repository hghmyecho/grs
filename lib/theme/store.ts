import { get } from "@vercel/global-config";
import { DEFAULT_THEME_SEEDS, type ThemeSeeds } from "./palette";

const STORE_ID = "ecfg_k1egbhzvvzfsfp7vznpccja2ggva"; // grs-global-config — not a secret, just an id
const ITEM_KEY = "themeSeeds";

/**
 * Reads the current theme seeds. Falls back to DEFAULT_THEME_SEEDS
 * (today's real colors) if the Global Config store isn't reachable
 * (e.g. local dev without GLOBAL_CONFIG set) or nothing's been saved
 * yet.
 */
export async function getThemeSeeds(): Promise<ThemeSeeds> {
  try {
    const stored = await get<ThemeSeeds>(ITEM_KEY);
    if (stored && stored.navy && stored.orange && stored.peach) return stored;
  } catch {
    // No GLOBAL_CONFIG locally, or a transient read error — fall back.
  }
  return DEFAULT_THEME_SEEDS;
}

/**
 * Writes new theme seeds via the Vercel REST API (the Global Config SDK
 * is read-only by design). Requires VERCEL_API_TOKEN, a token scoped to
 * just this project — server-only, never exposed to the browser.
 */
export async function saveThemeSeeds(seeds: ThemeSeeds): Promise<void> {
  const token = process.env.VERCEL_API_TOKEN;
  if (!token) {
    throw new Error(
      "VERCEL_API_TOKEN isn't configured — can't save theme changes here.",
    );
  }

  const res = await fetch(
    `https://api.vercel.com/v1/edge-config/${STORE_ID}/items`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ operation: "upsert", key: ITEM_KEY, value: seeds }],
      }),
    },
  );

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Failed to save theme (${res.status}): ${body.slice(0, 300)}`);
  }
}
