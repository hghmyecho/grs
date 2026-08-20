// JSON-LD builder functions shared across the discipline/stream/location/
// career templates (components/templates/*.tsx). Kept as plain object
// builders (not components) so templates can compose multiple schemas into
// a single @graph and render one <script> tag per page — see
// components/JsonLd.tsx for the render side.
const SITE_URL = "https://grs-nu.vercel.app";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

// Used for discipline + clinical stream pages — signals the page is about
// a specific therapy/support type, without asserting clinical claims of
// our own (no medicalAudience/guideline claims fabricated).
export function medicalWebPageSchema({
  name,
  description,
  url,
  therapyName,
}: {
  name: string;
  description: string;
  url: string;
  therapyName?: string;
}) {
  return {
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Global Rehabilitation Service",
      url: SITE_URL,
    },
    about: {
      "@type": "MedicalTherapy",
      name: therapyName ?? name,
    },
  };
}

// Page-level clinic schema for the 3 location pages — complements (doesn't
// replace) the sitewide MedicalBusiness schema in components/StructuredData
// by giving each location its own addressable @id and page url.
export function medicalClinicSchema({
  city,
  state,
  address,
  phone,
  url,
}: {
  city: string;
  state: string;
  address: string;
  phone: string;
  url: string;
}) {
  return {
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}${url}#clinic`,
    name: `Global Rehabilitation Service ${city}`,
    url: `${SITE_URL}${url}`,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: city,
      addressRegion: state,
      addressCountry: "AU",
    },
    parentOrganization: {
      "@type": "MedicalBusiness",
      name: "Global Rehabilitation Service",
      url: SITE_URL,
    },
  };
}

// Wraps multiple schema objects into a single @graph so each page emits one
// <script> tag rather than several.
export function schemaGraph(...schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
