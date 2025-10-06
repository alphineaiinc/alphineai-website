import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Case Studies Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies | Alphine AI",
  description:
    "Explore Alphine AI’s upcoming case studies focused on real-world validation of our AI products, measuring performance, accuracy, and societal impact through transparent, data-driven trials.",
  path: "/case-studies",
  keywords: [
    "Alphine AI case studies",
    "AI validation",
    "AI pilot results",
    "AI performance measurement",
    "AI impact analysis",
    "ethical AI research",
  ],
});

export default function CaseStudiesPage() {
  const items = [
    {
      title: "Conversation Platform (ACA)",
      plan:
        "Pilot deployments to measure answer rates, resolution speed, and customer satisfaction. Compare cost-per-conversation vs. manual handling.",
    },
    {
      title: "Attendance & Participation",
      plan:
        "Run controlled trials to validate verification accuracy and reporting transparency under varied network and regional conditions.",
    },
    {
      title: "Engagement Automation",
      plan:
        "A/B testing for content quality, cadence, and conversion impact; build repeatable playbooks aligned with brand voice.",
    },
    {
      title: "Knowledge Orchestrator",
      plan:
        "Evaluate retrieval accuracy, source coverage, and time-to-answer; measure agent productivity gains with audit trails.",
    },
  ];

  // ---------- JSON-LD Structured Data ----------
  const articlesSchema = items.map((i) => ({
    "@type": "Article",
    headline: i.title,
    description: i.plan,
    author: {
      "@type": "Organization",
      name: "Alphine AI",
    },
    publisher: {
      "@type": "Organization",
      name: "Alphine AI",
      url: "https://www.alphineai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.alphineai.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.alphineai.com/case-studies`,
    },
  }));

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Case Studies | Alphine AI",
          description:
            "Explore Alphine AI’s upcoming case studies focused on real-world validation of our AI products, measuring performance, accuracy, and societal impact through transparent, data-driven trials.",
          path: "/case-studies",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <JsonLd json={{ "@context": "https://schema.org", "@graph": articlesSchema }} />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Case Studies (Planned)
      </h1>
      <p className="mt-3 text-gray-700">
        We are outlining objective, verifiable studies for each product. Results will be shared transparently as pilots complete.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {items.map((i) => (
          <div key={i.title} className="border rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold text-[#B8860B]">{i.title}</h2>
            <p className="mt-2 text-gray-800">{i.plan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
