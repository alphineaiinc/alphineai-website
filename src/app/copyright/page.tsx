import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Copyright Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Copyright | Alphine AI",
  description:
    "Learn about Alphine AI’s copyright and licensing terms, including intellectual property protection and attribution policies.",
  path: "/copyright",
  keywords: [
    "Alphine AI copyright",
    "AI intellectual property",
    "AI licensing terms",
    "AI content attribution",
    "Alphine AI legal",
  ],
});

export default function CopyrightPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Copyright | Alphine AI",
          description:
            "Learn about Alphine AI’s copyright and licensing terms, including intellectual property protection and attribution policies.",
          path: "/copyright",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Copyright", path: "/copyright" },
        ])}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Copyright Policy",
          url: "https://www.alphineai.com/copyright",
          creator: {
            "@type": "Organization",
            name: "Alphine AI",
            url: "https://www.alphineai.com",
          },
          copyrightHolder: {
            "@type": "Organization",
            name: "Alphine AI",
          },
          copyrightYear: currentYear,
          license: "https://www.alphineai.com/copyright",
          description:
            "Alphine AI’s copyright policy covering ownership, attribution, and licensing for its content, media, and open-source components.",
        }}
      />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Copyright
      </h1>
      <p className="mt-4 text-gray-800 leading-relaxed">
        © {currentYear} Alphine AI. All rights reserved. All trademarks, logos, and intellectual
        property appearing on this website are the property of their respective owners. Licensing and
        attribution details will be added as new assets and open-source components are published.
      </p>
    </div>
  );
}
