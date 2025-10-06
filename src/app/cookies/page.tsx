import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Cookies Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Cookies Policy | Alphine AI",
  description:
    "Learn how Alphine AI uses essential and analytics cookies to improve user experience while maintaining privacy and transparency.",
  path: "/cookies",
  keywords: [
    "Alphine AI cookies policy",
    "AI website cookies",
    "cookie preferences",
    "analytics cookies",
    "privacy and tracking",
  ],
});

export default function Cookies() {
  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Cookies Policy | Alphine AI",
          description:
            "Learn how Alphine AI uses essential and analytics cookies to improve user experience while maintaining privacy and transparency.",
          path: "/cookies",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Cookies Policy", path: "/cookies" },
        ])}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          name: "Cookies Policy",
          url: "https://www.alphineai.com/cookies",
          description:
            "Alphine AI’s cookies policy outlines our use of essential and analytics cookies to improve functionality and performance while ensuring transparency.",
          publisher: {
            "@type": "Organization",
            name: "Alphine AI",
            url: "https://www.alphineai.com",
          },
        }}
      />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-4xl font-bold">Cookies</h1>
      <p>
        We use essential cookies for site functionality and optional analytics cookies to improve
        performance. You can change preferences via your browser. Third-party providers may set their
        own cookies subject to their policies.
      </p>
    </div>
  );
}
