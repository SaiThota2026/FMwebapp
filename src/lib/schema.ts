import { SITE } from "./site";

export function globalSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#org`,
        name: SITE.name,
        url: SITE.url,
        logo: SITE.logoUrl,
        telephone: SITE.phone,
        email: SITE.email,
        founder: {
          "@type": "Person",
          name: "FACILITIES MAN Founder",
        },
        foundingDate: "2026",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Newcastle",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            contactType: "customer service",
            areaServed: "AU",
            availableLanguage: ["en-AU"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "07:00",
              closes: "19:00",
            },
          },
        ],
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.name,
        image: `${SITE.url}/images/og/og-default.jpg`,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Newcastle",
          addressRegion: "NSW",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "07:00",
            closes: "19:00",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Newcastle" },
          { "@type": "City", name: "Maitland" },
          { "@type": "City", name: "Lake Macquarie" },
          { "@type": "AdministrativeArea", name: "Hunter Valley" },
          { "@type": "AdministrativeArea", name: "Central Coast" },
          { "@type": "AdministrativeArea", name: "New South Wales" },
        ],
      },
      {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function locationLocalBusinessSchema(
  data: {
    name: string;
    path: string;
    areaServed: Array<{ type: string; name: string }>;
  },
) {
  return {
    "@type": "LocalBusiness",
    name: `FACILITIES MAN — ${data.name}`,
    url: `${SITE.url}${data.path}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newcastle",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: data.areaServed.map((area) => ({
      "@type": area.type,
      name: area.name,
    })),
    priceRange: "$$",
    openingHours: "Mo-Sa 07:00-19:00",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE.url}/`,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE.url}${item.path}`,
      })),
    ],
  };
}

export function servicePageSchema(data: {
  name: string;
  description: string;
  path: string;
  areas: string[];
  faqs: FaqItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: data.name,
        serviceType: data.name,
        description: data.description,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE.url}/#localbusiness`,
        },
        areaServed: data.areas.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "AUD",
          url: `${SITE.url}${data.path}`,
        },
      },
      breadcrumbSchema([
        { name: "Services", path: "/services/" },
        { name: data.name, path: data.path },
      ]),
      faqPageSchema(data.faqs),
    ],
  };
}

export function industryPageSchema(data: {
  name: string;
  description: string;
  path: string;
  faqs: FaqItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Service", "WebPage"],
        name: `${data.name} — FACILITIES MAN`,
        description: data.description,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE.url}/#localbusiness`,
        },
        url: `${SITE.url}${data.path}`,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Hunter Region, NSW, Australia",
        },
      },
      breadcrumbSchema([
        { name: "Industries", path: "/industries/" },
        { name: data.name, path: data.path },
      ]),
      faqPageSchema(data.faqs),
    ],
  };
}

export function locationPageSchema(data: {
  name: string;
  path: string;
  areaServed: Array<{ type: string; name: string }>;
  faqs: FaqItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      locationLocalBusinessSchema({
        name: data.name,
        path: data.path,
        areaServed: data.areaServed,
      }),
      breadcrumbSchema([{ name: data.name, path: data.path }]),
      faqPageSchema(data.faqs),
    ],
  };
}

export function comboPageSchema(data: {
  serviceName: string;
  locationName: string;
  description: string;
  path: string;
  faqs: FaqItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${data.serviceName} — ${data.locationName}`,
        serviceType: data.serviceName,
        description: data.description,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE.url}/#localbusiness`,
        },
        areaServed: { "@type": "City", name: data.locationName },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "AUD",
          url: `${SITE.url}${data.path}`,
        },
      },
      breadcrumbSchema([
        { name: "Locations", path: "/locations/" },
        { name: data.locationName, path: `/locations/${data.path.split("/")[2]}/` },
        { name: data.serviceName, path: data.path },
      ]),
      faqPageSchema(data.faqs),
    ],
  };
}

export function blogPostSchema(data: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${SITE.url}/blog/${data.slug}/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: data.title,
        description: data.description,
        url,
        datePublished: data.datePublished,
        dateModified: data.dateModified ?? data.datePublished,
        author: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: SITE.logoUrl,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      },
      breadcrumbSchema([
        { name: "Blog", path: "/blog/" },
        { name: data.title, path: `/blog/${data.slug}/` },
      ]),
    ],
  };
}

export function blogHubSchema(posts: { title: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "FACILITIES MAN Blog — Facilities Management & Cleaning Insights",
    url: `${SITE.url}/blog/`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${SITE.url}/blog/${p.slug}/`,
    })),
  };
}

