import type { Metadata } from "next";
import { buildPageMetadata, webPageJsonLd, breadcrumbsJsonLd, JsonLd } from "@/lib/seo";

// ---------- Partners Page Metadata ----------
export const metadata: Metadata = buildPageMetadata({
  title: "Partners | Alphine AI",
  description:
    "Partner with Alphine AI to co-develop scalable, ethical AI systems across technology, telecom, enterprise, research, and public sectors. Together, we build trustworthy intelligence for global progress.",
  path: "/partners",
  keywords: [
    "Alphine AI partners",
    "AI collaboration",
    "AI technology partnerships",
    "AI research partnerships",
    "AI enterprise integrations",
    "AI public sector solutions",
  ],
});

export default function PartnersPage() {
  const partners = [
    {
      group: "Technology & Cloud",
      value:
        "Co-develop scalable, secure deployments; integrate observability, identity, and data services.",
    },
    {
      group: "Telecom & Communication",
      value:
        "Enhance real-time experiences with low-latency media streams and global reach.",
    },
    {
      group: "Enterprise Platforms",
      value:
        "Embed intelligence into workflows (CRM, ITSM, ERP) with clear auditability and compliance.",
    },
    {
      group: "Research & Academia",
      value:
        "Advance responsible AI with transparent evaluation, datasets, and joint publications.",
    },
    {
      group: "Public Sector & NGOs",
      value:
        "Build trustworthy participation metrics and inclusive digital services.",
    },
  ];

  // ---------- JSON-LD Structured Data ----------
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alphine AI",
    url: "https://www.alphineai.com",
    description:
      "Global AI company partnering with technology, enterprise, and public-sector organizations to build trustworthy and ethical AI solutions.",
    logo: "https://www.alphineai.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/alphineai",
      "https://twitter.com/AlphineAI",
    ],
    knowsAbout: partners.map((p) => p.group),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Partners | Alphine AI",
          description:
            "Partner with Alphine AI to co-develop scalable, ethical AI systems across technology, telecom, enterprise, research, and public sectors. Together, we build trustworthy intelligence for global progress.",
          path: "/partners",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
        ])}
      />
      <JsonLd json={organizationSchema} />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Partners
      </h1>
      <p className="mt-3 text-gray-700">
        We collaborate with organizations that value openness, accountability, and measurable outcomes.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {partners.map((p) => (
          <div
            key={p.group}
            className="border rounded-2xl p-6 bg-white shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#B8860B]">{p.group}</h2>
            <p className="mt-2 text-gray-800">{p.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
