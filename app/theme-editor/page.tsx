import type { Metadata } from "next";
import { Palette } from "lucide-react";
import { getThemeSeeds } from "@/lib/theme/store";
import { authenticateAction, isAuthenticated } from "./actions";
import ThemeEditorForm from "@/components/ThemeEditorForm";

export const metadata: Metadata = {
  title: "Theme Editor",
  robots: { index: false, follow: false },
};

const inputStyles =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/15";

export default async function ThemeEditorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const authed = await isAuthenticated();

  if (!authed) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-16">
        <form
          action={authenticateAction}
          className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-peach-100 text-orange-600">
            <Palette className="h-5 w-5" />
          </span>
          <h1 className="mt-4 text-center font-display text-xl font-bold text-navy-950">
            Theme Editor
          </h1>
          <p className="mt-2 text-center text-sm text-slate-600">
            Enter the passphrase to continue.
          </p>
          <input
            type="password"
            name="password"
            required
            autoFocus
            placeholder="Passphrase"
            className={`mt-5 ${inputStyles}`}
          />
          {error && (
            <p className="mt-2 text-center text-sm text-red-600">
              Incorrect passphrase — please try again.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-800"
          >
            Continue
          </button>
        </form>
      </section>
    );
  }

  const seeds = await getThemeSeeds();

  return (
    <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h1 className="font-display text-3xl font-extrabold leading-tight text-navy-950 sm:text-4xl">
          Site Colors
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-700">
          Pick your 3 brand colors below — the preview updates instantly.
          Save publishes them across the whole site within about a minute.
        </p>
      </div>
      <ThemeEditorForm initialSeeds={seeds} />
    </section>
  );
}
