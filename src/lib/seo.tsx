// src/lib/seo.ts
import type { Metadata } from "next";

export const siteMeta = {
  baseUrl: "https://www.alphineai.com",
  brand: "Alphine AI",
  tagline: "Intelligence for a Connected World",
  logo: "/logo.png",
  favicon: "/favicon.ico",
  twitterHandle: "@AlphineAI",
  defaultLocale: "en",
  locales: ["en"], // ready for future: e.g., ["en","fr","ta","hi"]
  contactEmail: "contact@alphineai.com", // placeholder until you register
  // social profiles (add later when available)
  sameAs: [] as string[],
};

// Common OG/Twitter defaults
export const commonMeta = {
  openGraphDefaults: {
    type: "website",
    siteName: siteMeta.brand,
    locale: "en_US",
    images: [{ url: siteMeta.logo, width: 1200, height: 630, alt: "Alphine AI Logo" }],
  },
  twitterDefaults: {
    card: "summary_large_image",
    creator: siteMeta.twitterHandle,
    images: [siteMeta.logo],
  },
};

// Helpers
export const canonicalFor = (path = "/") =>
  new URL(path.replace(/\/+$/, "") || "/", siteMeta.baseUrl).toString();

export const alternatesFor = (path = "/") => {
  const langs: Record<string, string> = {};
  siteMeta.locales.forEach((lng) => {
    langs[lng] = canonicalFor(path);
  });
  return langs;
};

// Structured Data (JSON-LD)
export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMeta.brand,
  url: siteMeta.baseUrl,
  logo: canonicalFor(siteMeta.logo),
  email: siteMeta.contactEmail,
  sameAs: siteMeta.sameAs,
});

export const webSiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteMeta.brand,
  url: siteMeta.baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteMeta.baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const webPageJsonLd = (opts: {
  title: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: opts.title,
  description: opts.description,
  url: canonicalFor(opts.path),
  isPartOf: {
    "@type": "WebSite",
    url: siteMeta.baseUrl,
    name: siteMeta.brand,
  },
});

export const breadcrumbsJsonLd = (segments: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: segments.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    item: canonicalFor(s.path),
  })),
});

// Minimal helper to inject JSON-LD
export function JsonLd({ json }: { json: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    ></script>
  );
}


// Factory to build per-page Metadata quickly
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = canonicalFor(path);
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteMeta.baseUrl),
    alternates: {
      canonical: url,
      languages: alternatesFor(path),
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      ...commonMeta.openGraphDefaults,
      title,
      description,
      url,
    },
    twitter: {
      ...commonMeta.twitterDefaults,
      title,
      description,
    },
    icons: { icon: siteMeta.favicon },
  };
}
