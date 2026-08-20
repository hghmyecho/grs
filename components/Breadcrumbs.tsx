import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

// Visible breadcrumb trail + matching BreadcrumbList JSON-LD, used at the
// top of every discipline/stream/location/career page (see
// components/templates/*.tsx). `items` should include the current page as
// the last entry (rendered as plain text, not a link) with its own href —
// Google recommends including a url for every item, including the last.
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-slate-50">
      <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-1.5 px-6 py-3 text-xs text-slate-500 lg:px-8">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0 text-slate-300" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy-900">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  prefetch={false}
                  className="transition-colors hover:text-navy-900 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={{ "@context": "https://schema.org", ...breadcrumbSchema(items) }} />
    </nav>
  );
}
