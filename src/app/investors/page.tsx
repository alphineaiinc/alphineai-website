import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Investors Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Investors | Alphine AI",
  description:
    "Invest in a future where intelligence meets ethics. Alphine AI transforms innovation into measurable impact with transparency, security, and long-term value creation for global progress.",
  path: "/investors",
  keywords: [
    "Alphine AI investors",
    "AI investment",
    "AI funding opportunities",
    "ethical AI investment",
    "AI venture partnerships",
    "AI innovation funding",
  ],
});

export default function InvestorsPage() {
  // ---------- JSON-LD Structured Data ----------
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Investors",
    url: "https://www.alphineai.com/investors",
    description:
      "Investor information and mission overview for Alphine AI, outlining opportunities to support ethical, transparent, and impactful AI innovation.",
    publisher: {
      "@type": "Organization",
      name: "Alphine AI",
      url: "https://www.alphineai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.alphineai.com/logo.png",
      },
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Investors | Alphine AI",
          description:
            "Invest in a future where intelligence meets ethics. Alphine AI transforms innovation into measurable impact with transparency, security, and long-term value creation for global progress.",
          path: "/investors",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Investors", path: "/investors" },
        ])}
      />
      <JsonLd json={aboutSchema} />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Investors
      </h1>
      <p className="mt-4 text-gray-800">
        We believe capital is most powerful when it accelerates purpose. Alphine AI invests in a
        future where intelligence is ethical, dependable, and globally accessible. Our vision,
        roadmap, and operating discipline aim to convert funding into durable, measurable impact.
        We welcome partners who align with this mission and share our commitment to transparency,
        security, and long-term value creation.
      </p>
      <p className="mt-4 text-gray-800">
        When companies lack a strong aim, investment risks becoming wasted time and effort. Our
        direction is clear: build platforms that solve hard, high-impact problems with verifiable
        results. If you resonate with this thesis, let’s build together.
      </p>
    </div>
  );
}
