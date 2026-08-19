"use server";

import { createHash } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { saveThemeSeeds } from "@/lib/theme/store";
import type { ThemeSeeds } from "@/lib/theme/palette";

const COOKIE_NAME = "theme_editor_auth";

// The cookie stores a hash of the passphrase, not the passphrase itself
// — a small hygiene touch since this is a long-lived (180 day) cookie.
function expectedAuthValue(): string | null {
  const password = process.env.THEME_EDITOR_PASSWORD;
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
  const expected = process.env.THEME_EDITOR_PASSWORD;

  if (!expected || input !== expected) {
    redirect("/theme-editor?error=1");
  }

  const store = await cookies();
  store.set(COOKIE_NAME, expectedAuthValue()!, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180,
    path: "/theme-editor",
  });
  redirect("/theme-editor");
}

/**
 * Called from the client form. Re-checks auth server-side — never trust
 * that only an authenticated client rendered the form that calls this.
 *
 * Returns a result object rather than throwing: Next.js redacts thrown
 * Server Action error messages down to a generic string in production
 * builds (confirmed while debugging the Global Config write path — real
 * messages only ever reached Runtime Logs, never the client). Returning
 * the message as normal data isn't sanitized, so the client can show it.
 */
export async function saveThemeAction(
  seeds: ThemeSeeds,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const authed = await isAuthenticated();
  if (!authed) return { ok: false, error: "Not authenticated — please sign in again." };

  try {
    await saveThemeSeeds(seeds);
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Something went wrong.",
    };
  }
}
