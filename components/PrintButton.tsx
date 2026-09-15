"use client";

import { Printer } from "lucide-react";

// Screen-only control for the goldcoast/find-us info sheet — triggers the
// browser's native print dialog so staff can produce a hard copy or "print
// to PDF" to attach in an email, without needing a separate PDF pipeline.
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="bounce-transition inline-flex items-center gap-2 rounded-full border border-honey/40 bg-white px-4 py-2 text-xs font-semibold text-charcoal shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-105"
    >
      <Printer className="h-4 w-4" />
      Print / Save as PDF
    </button>
  );
}
