import seedsJson from "./seeds.json";
import type { ThemeSeeds } from "./palette";

// Reads/writes lib/theme/seeds.json directly through the GitHub Contents
// API rather than Vercel Global Config. Global Config was the original
// plan (instant, no redeploy) but its write/list REST endpoints reject
// every token configuration with a permission error whose response body
// still names the pre-rebrand "edgeConfigItem" resource — Edge Config
// was very recently renamed to Global Config (confirmed via Vercel's own
// docs, both last-updated within weeks of this build), and that internal
// naming mismatch looks like a genuine platform bug from the transition,
// not anything fixable from a token/scope on our end. Filed as a known
// issue; this file can move back to Global Config later if Vercel fixes
// it — see git history (Aug 19 2026) for the full debugging trail.
//
// Trade-off vs Global Config: saving here commits straight to master,
// which redeploys the whole site (~40s) rather than reflecting in
// seconds. GitHub's Contents API has no equivalent all-tokens-fail bug,
// so this is the reliable path today.

const OWNER = "hghmyecho";
const REPO = "grs";
const FILE_PATH = "lib/theme/seeds.json";
const BRANCH = "master";

/**
 * Reads the current theme seeds. This is the value baked into the
 * current deployment's build — a save commits a new value and triggers
 * a fresh deploy, so the next build picks it up. Async to keep the same
 * call shape as the Global Config version this replaced.
 */
export async function getThemeSeeds(): Promise<ThemeSeeds> {
  return seedsJson as ThemeSeeds;
}

/**
 * Writes new theme seeds by committing lib/theme/seeds.json straight to
 * master via the GitHub Contents API. Requires GITHUB_CONTENTS_TOKEN, a
 * fine-grained PAT scoped to just this repo with Contents: Read and
 * write — server-only, never exposed to the browser.
 */
export async function saveThemeSeeds(seeds: ThemeSeeds): Promise<void> {
  const token = process.env.GITHUB_CONTENTS_TOKEN;
  if (!token) {
    throw new Error(
      "GITHUB_CONTENTS_TOKEN isn't configured — can't save theme changes here.",
    );
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  // Updating a file through this API requires the current file's blob
  // SHA, not just its content.
  const currentRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`,
    { headers },
  );
  if (!currentRes.ok) {
    const body = await currentRes.text().catch(() => "");
    throw new Error(
      `Couldn't read the current theme file (${currentRes.status}): ${body.slice(0, 200)}`,
    );
  }
  const current = (await currentRes.json()) as { sha: string };

  const content = Buffer.from(JSON.stringify(seeds, null, 2) + "\n").toString(
    "base64",
  );

  const putRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: "Update site colors via theme editor",
        content,
        sha: current.sha,
        branch: BRANCH,
      }),
    },
  );

  if (!putRes.ok) {
    const body = await putRes.text().catch(() => "");
    throw new Error(
      `Failed to save theme (${putRes.status}): ${body.slice(0, 300)}`,
    );
  }
}
