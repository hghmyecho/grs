import type { FaqItem } from "@/lib/schema";

// Shared FAQ block for discipline/stream/location/career pages — plain
// <details>/<summary> (no client JS) so it stays fast and crawlable.
// Pair with lib/schema.ts's faqSchema() for the matching FAQPage JSON-LD.
export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-display text-xl font-bold text-charcoal">
        Frequently Asked Questions
      </h2>
      <div className="mt-5 divide-y divide-honey/20 rounded-2xl border border-honey/20">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5">
            <summary className="cursor-pointer list-none text-sm font-semibold text-charcoal marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span
                  aria-hidden
                  className="shrink-0 text-lg leading-none text-rust transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
