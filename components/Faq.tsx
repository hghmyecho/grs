import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Do I need an NDIS plan to access GRS services?",
    answer:
      "Most of our services are delivered under NDIS funding, but we also accept Medicare, private health, and self-funded referrals for some disciplines.",
  },
  {
    question: "Which areas do you service?",
    answer:
      "We have clinics in Sydney, Brisbane, and the Gold Coast, and provide community and in-home visits across NSW and QLD.",
  },
  {
    question: "How do I make a referral?",
    answer:
      "Call us on 1300 066 716 or use the referral form on this site — our team responds personally to every referral, usually within one business day.",
  },
  {
    question: "What disciplines does GRS offer?",
    answer:
      "Occupational therapy, physiotherapy, speech pathology, psychology, dietetics, art therapy, music therapy, and specialist behaviour support.",
  },
  {
    question: "Do you offer home and community visits?",
    answer:
      "Yes — our clinicians deliver care in clinic, at home, and in the community, depending on what works best for you.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Faq() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="eyebrow-script">FAQs</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Common questions, answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-honey/30 border-y border-honey/30">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-charcoal transition-colors hover:text-rust">
                {faq.question}
                <span className="bounce-transition flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-honey text-white transition-transform duration-300 group-open:rotate-45 group-open:bg-rust">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
