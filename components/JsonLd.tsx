// Tiny render helper for JSON-LD structured data — see lib/schema.ts for
// the builder functions that produce `data`.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
