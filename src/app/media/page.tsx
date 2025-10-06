import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Media Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Media | Alphine AI",
  description:
    "Stay connected with Alphine AI’s latest updates, press releases, media assets, and official announcements as we build the future of ethical artificial intelligence.",
  path: "/media",
  keywords: [
    "Alphine AI media",
    "AI press release",
    "Alphine AI news",
    "AI announcements",
    "AI company updates",
  ],
});

export default function MediaPage() {
  // ---------- JSON-LD Structured Data ----------
  const mediaSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Alphine AI",
    url: "https://www.alphineai.com",
    logo: "https://www.alphineai.com/logo.png",
    description:
      "Official press and media hub for Alphine AI — featuring announcements, interviews, and brand assets.",
    sameAs: [
      "https://www.linkedin.com/company/alphineai",
      "https://twitter.com/AlphineAI",
    ],
    publisher: {
      "@type": "Organization",
      name: "Alphine AI",
    },
  };

  const exampleArticle = {
    "@type": "NewsArticle",
    headline: "Alphine AI Expands Ethical AI Research Initiatives",
    datePublished: "2025-10-05",
    author: {
      "@type": "Organization",
      name: "Alphine AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Alphine AI",
      logo: {
        "@type": "ImageObject",
        url: "https://www.alphineai.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.alphineai.com/media",
    },
    description:
      "Alphine AI announces new research collaborations and product advancements in responsible artificial intelligence.",
  };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Media | Alphine AI",
          description:
            "Stay connected with Alphine AI’s latest updates, press releases, media assets, and official announcements as we build the future of ethical artificial intelligence.",
          path: "/media",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Media", path: "/media" },
        ])}
      />
      <JsonLd json={mediaSchema} />
      <JsonLd json={exampleArticle} />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Media</h1>
      <p className="mt-4 text-gray-800">
        This page will host press releases, interviews, and assets. Updates coming soon.
      </p>
    </div>
  );
}
