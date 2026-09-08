import teamDataJson from "@/lib/content/team-data.json";
import type { TeamMember } from "@/lib/content/team";

// Reads/writes lib/content/team-data.json through the GitHub Contents API
// — same pattern as lib/theme/store.ts (see that file's header comment for
// why: Vercel Global Config's write/list endpoints reject every token
// configuration with a permission error, a platform bug from the Edge
// Config → Global Config rename, not anything fixable on our end).
//
// Trade-off: saving here commits straight to master, which redeploys the
// whole site (~40s) rather than reflecting instantly. Acceptable for a
// roster that changes occasionally, same as it is for site colors.

const OWNER = "hghmyecho";
const REPO = "grs";
const FILE_PATH = "lib/content/team-data.json";
const BRANCH = "master";

/**
 * Reads the current team roster. This is the value baked into the current
 * deployment's build — a save commits a new value and triggers a fresh
 * deploy, so the next build picks it up. Async to keep the same call shape
 * as saveTeam.
 */
export async function getTeam(): Promise<TeamMember[]> {
  return teamDataJson as TeamMember[];
}

/**
 * Writes the full roster by committing lib/content/team-data.json straight
 * to master via the GitHub Contents API. Requires GITHUB_CONTENTS_TOKEN, a
 * fine-grained PAT scoped to just this repo with Contents: Read and write
 * (the same token the theme editor uses) — server-only, never exposed to
 * the browser.
 */
export async function saveTeam(members: TeamMember[]): Promise<void> {
  const token = process.env.GITHUB_CONTENTS_TOKEN;
  if (!token) {
    throw new Error(
      "GITHUB_CONTENTS_TOKEN isn't configured — can't save team changes here.",
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
      `Couldn't read the current team file (${currentRes.status}): ${body.slice(0, 200)}`,
    );
  }
  const current = (await currentRes.json()) as { sha: string };

  const content = Buffer.from(JSON.stringify(members, null, 2) + "\n").toString(
    "base64",
  );

  const putRes = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: "Update team roster via team editor",
        content,
        sha: current.sha,
        branch: BRANCH,
      }),
    },
  );

  if (!putRes.ok) {
    const body = await putRes.text().catch(() => "");
    throw new Error(
      `Failed to save team roster (${putRes.status}): ${body.slice(0, 300)}`,
    );
  }
}
