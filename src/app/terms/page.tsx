import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Terms of Service Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Alphine AI",
  description:
    "Understand Alphine AI’s terms of service outlining user rights, responsibilities, and acceptable use of our platforms and APIs.",
  path: "/terms",
  keywords: [
    "Alphine AI terms of service",
    "AI usage policy",
    "acceptable use policy",
    "AI legal terms",
    "AI platform agreement",
  ],
});

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Terms of Service | Alphine AI",
          description:
            "Understand Alphine AI’s terms of service outlining user rights, responsibilities, and acceptable use of our platforms and APIs.",
          path: "/terms",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "TermsOfService",
          name: "Terms of Service",
          url: "https://www.alphineai.com/terms",
          description:
            "Alphine AI's terms of service define acceptable use, intellectual property, and dispute resolution policies for all users and partners.",
          publisher: {
            "@type": "Organization",
            name: "Alphine AI",
            url: "https://www.alphineai.com",
          },
        }}
      />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Terms of Service
      </h1>
      <p className="mt-4 text-gray-800 leading-relaxed">
        These terms govern your use of Alphine AI’s platforms, APIs, and associated services.
        We emphasize fairness, transparency, and responsible usage across all integrations.
        Detailed policy documents will be added soon to define acceptable use, intellectual property
        protection, and dispute resolution mechanisms.
      </p>
    </div>
  );
}
