"use server";

import { createHash } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { saveTeam } from "@/lib/team/store";
import type { TeamMember } from "@/lib/content/team";

const COOKIE_NAME = "team_editor_auth";
const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// The cookie stores a hash of the passphrase, not the passphrase itself —
// same hygiene touch as the theme editor's cookie (see app/theme-editor/actions.ts).
function expectedAuthValue(): string | null {
  const password = process.env.TEAM_EDITOR_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(password).digest("hex");
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = expectedAuthValue();
  if (!expected) return false;
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === expected;
}

export async function authenticateAction(formData: FormData) {
  const input = String(formData.get("password") ?? "");
  const expected = process.env.TEAM_EDITOR_PASSWORD;

  if (!expected || input !== expected) {
    redirect("/team-editor?error=1");
  }

  const store = await cookies();
  store.set(COOKIE_NAME, expectedAuthValue()!, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180,
    path: "/team-editor",
  });
  redirect("/team-editor");
}

function validate(members: TeamMember[]): string | null {
  const seenSlugs = new Set<string>();
  for (const m of members) {
    if (!m.name.trim()) return "Every person needs a name.";
    if (!m.role.trim()) return `${m.name || "Someone"} needs a role.`;
    if (!SLUG_PATTERN.test(m.slug)) {
      return `"${m.slug || m.name}" needs a valid URL slug (lowercase letters, numbers and hyphens only).`;
    }
    if (seenSlugs.has(m.slug)) {
      return `Two people share the slug "${m.slug}" — slugs must be unique.`;
    }
    seenSlugs.add(m.slug);
    if (m.hasProfile && !m.profile) {
      return `${m.name} is marked as having a full profile page but is missing profile content.`;
    }
  }
  return null;
}

/**
 * Called from the client form. Re-checks auth server-side — never trust
 * that only an authenticated client rendered the form that calls this.
 *
 * Returns a result object rather than throwing: Next.js redacts thrown
 * Server Action error messages down to a generic string in production
 * builds — see app/theme-editor/actions.ts for where this was confirmed.
 */
export async function saveTeamAction(
  members: TeamMember[],
): Promise<{ ok: true } | { ok: false; error: string }> {
  const authed = await isAuthenticated();
  if (!authed) return { ok: false, error: "Not authenticated — please sign in again." };

  const validationError = validate(members);
  if (validationError) return { ok: false, error: validationError };

  try {
    await saveTeam(members);
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Something went wrong.",
    };
  }
}
