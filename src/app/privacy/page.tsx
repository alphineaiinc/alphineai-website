import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Privacy Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Alphine AI",
  description:
    "Read Alphine AI’s privacy policy to understand how we protect user data, ensure transparency, and uphold ethical data practices.",
  path: "/privacy",
  keywords: [
    "Alphine AI privacy policy",
    "AI data protection",
    "ethical AI",
    "data transparency",
    "AI compliance",
  ],
});

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Privacy Policy | Alphine AI",
          description:
            "Read Alphine AI’s privacy policy to understand how we protect user data, ensure transparency, and uphold ethical data practices.",
          path: "/privacy",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          name: "Privacy Policy",
          url: "https://www.alphineai.com/privacy",
          description:
            "Alphine AI's privacy policy explains data protection, encryption, consent, and retention practices for users and partners.",
          publisher: {
            "@type": "Organization",
            name: "Alphine AI",
            url: "https://www.alphineai.com",
          },
        }}
      />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Privacy Policy
      </h1>
      <p className="mt-4 text-gray-800 leading-relaxed">
        Alphine AI follows a strict security-first design philosophy. We practice least-privilege access,
        encryption in transit and at rest, and minimized data retention by default. Our systems are audited
        periodically for compliance and reliability. A full privacy documentation page will be added soon
        to explain data handling, consent, and user control measures.
      </p>
    </div>
  );
}
