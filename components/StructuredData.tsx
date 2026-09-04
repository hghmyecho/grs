const siteUrl = "https://grs-nu.vercel.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Global Rehabilitation Service",
  alternateName: "GRS",
  url: siteUrl,
  logo: `${siteUrl}/grs-logo.svg`,
  image: `${siteUrl}/opengraph-image`,
  description:
    "GRS delivers holistic occupational therapy, physiotherapy, speech pathology, psychology, dietetics, art and music therapy in clinic and community settings across NSW and QLD.",
  telephone: "1300066716",
  areaServed: [
    { "@type": "State", name: "New South Wales" },
    { "@type": "State", name: "Queensland" },
  ],
  department: [
    {
      "@type": "MedicalClinic",
      name: "GRS Sydney",
      telephone: "1300066716",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Suite 102, 63 Parramatta Road",
        addressLocality: "Silverwater",
        addressRegion: "NSW",
        postalCode: "2128",
        addressCountry: "AU",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "GRS Brisbane",
      telephone: "1300066716",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8 Mayfield Road",
        addressLocality: "Moorooka",
        addressRegion: "QLD",
        postalCode: "4105",
        addressCountry: "AU",
      },
    },
    {
      "@type": "MedicalClinic",
      name: "GRS Gold Coast",
      telephone: "1300066716",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1203/56 Scarborough Street",
        addressLocality: "Southport",
        addressRegion: "QLD",
        postalCode: "4215",
        addressCountry: "AU",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
