"use client";

import { useState, type CSSProperties } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { deriveThemeVars, type ThemeSeeds } from "@/lib/theme/palette";
import { saveThemeAction } from "@/app/theme-editor/actions";

const FIELDS: { key: keyof ThemeSeeds; label: string; hint: string }[] = [
  { key: "navy", label: "Header & Footer", hint: "Also headings and buttons" },
  { key: "orange", label: "Buttons & Links", hint: "The main accent color" },
  { key: "peach", label: "Soft Backgrounds", hint: "Cards and gentle highlights" },
];

export default function ThemeEditorForm({ initialSeeds }: { initialSeeds: ThemeSeeds }) {
  const [seeds, setSeeds] = useState<ThemeSeeds>(initialSeeds);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const previewStyle = deriveThemeVars(seeds) as CSSProperties;

  const handleSave = async () => {
    setStatus("saving");
    setError(null);
    try {
      const result = await saveThemeAction(seeds);
      if (result.ok) {
        setStatus("saved");
      } else {
        setStatus("error");
        setError(result.error);
      }
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong — please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-6 sm:grid-cols-3">
        {FIELDS.map(({ key, label, hint }) => (
          <label key={key} className="block text-center">
            <span className="block text-sm font-semibold text-navy-900">{label}</span>
            <span className="mt-1 block text-xs text-slate-500">{hint}</span>
            <input
              type="color"
              value={seeds[key]}
              onChange={(event) => {
                setSeeds((s) => ({ ...s, [key]: event.target.value }));
                setStatus("idle");
              }}
              className="mx-auto mt-3 h-16 w-16 cursor-pointer rounded-full border-4 border-white shadow-md"
            />
            <span className="mt-2 block font-mono text-xs uppercase text-slate-500">
              {seeds[key]}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={status === "saving"}
          className="bounce-transition inline-flex items-center gap-2 rounded-full bg-orange-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:bg-orange-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 disabled:hover:rotate-0"
        >
          {status === "saving" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving…
            </>
          ) : (
            "Save & Publish"
          )}
        </button>
        {status === "saved" && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            Saved — the site is rebuilding now and will update within about
            a minute.
          </p>
        )}
        {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      </div>

      <div className="mt-12">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
          Live Preview
        </p>
        <div
          style={previewStyle}
          className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="flex items-center justify-between bg-navy-950 px-6 py-5">
            <span className="font-display text-sm font-bold text-white sm:text-base">
              Global Rehabilitation Service
            </span>
            <span className="rounded-full bg-orange-700 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
              Make a Referral
            </span>
          </div>
          <div className="bg-peach-100 p-6 sm:p-8">
            <p className="font-display text-lg font-bold text-navy-950">
              Sample card heading
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              This is what a card, its background, and body text look like
              together with your picks.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
              Learn more →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
