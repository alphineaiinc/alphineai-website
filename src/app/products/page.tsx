"use client";

import Link from "next/link";

type Product = {
  title: string;
  problem: string;
  building: string;
  benefits: string[];
};

const products: Product[] = [
  {
    title: "Automated Voice & Conversation Platform (ACA)",
    problem:
      "Organizations lose opportunities when calls go unanswered, conversations aren’t captured, or follow-ups fail. Manual handling is costly, inconsistent, and difficult to measure.",
    building:
      "A real-time, multilingual conversation layer that understands intent, routes requests, and completes tasks. Low-latency speech, explainable decisions, and secure integrations form the backbone.",
    benefits: [
      "Capture every call, 24/7, with consistent quality.",
      "Reduce operational workload with automated routing and summaries.",
      "Plug into CRM, ticketing, and knowledge bases with clear audit trails.",
      "Privacy-first design with minimized retention.",
    ],
  },
  {
    title: "Global Attendance & Participation Intelligence",
    problem:
      "Large gatherings and programs often rely on estimates. Without defensible measurement, planning, safety, and transparency are compromised.",
    building:
      "A secure, privacy-respecting platform for verifying participation across physical and virtual contexts, using geospatial checks, consent flows, and cross-validation techniques.",
    benefits: [
      "Replace speculation with verifiable metrics and confidence intervals.",
      "Improve logistics, safety, and reporting with trustworthy numbers.",
      "Respect regional regulations and cultural expectations.",
      "Actionable dashboards with exportable evidence.",
    ],
  },
  {
    title: "Social & Engagement Automation",
    problem:
      "Teams struggle to maintain consistent, context-aware engagement across channels; insights are fragmented and slow.",
    building:
      "An AI-driven engagement engine that plans, drafts, and analyzes cross-channel communication, tuned for brand voice and measurable outcomes.",
    benefits: [
      "Consistent presence with less manual effort.",
      "Insightful analytics that tie engagement to outcomes.",
      "Rapid experimentation with safe-guardrails.",
      "Reusable knowledge to accelerate future campaigns.",
    ],
  },
  {
    title: "Knowledge Orchestrator & Insight Hub",
    problem:
      "Institutional knowledge is scattered across docs, chats, and tools. Retrieval is slow and context is lost.",
    building:
      "A secure knowledge layer that ingests, normalizes, and retrieves facts with source citations, versioning, and access controls.",
    benefits: [
      "Faster answers with higher confidence.",
      "Source-linked outputs and auditability.",
      "Role-based access and least-privilege by default.",
      "Works with existing storage; no lock-in.",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Products</h1>
      <p className="mt-3 text-gray-700">
        These are the platforms we’re actively building and validating. More will be added soon.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <div key={p.title} className="border rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-bold text-[#B8860B]">{p.title}</h2>
            <div className="mt-3">
              <p className="font-semibold">Problem</p>
              <p className="text-gray-700">{p.problem}</p>
            </div>
            <div className="mt-3">
              <p className="font-semibold">What we’re building</p>
              <p className="text-gray-700">{p.building}</p>
            </div>
            <div className="mt-3">
              <p className="font-semibold">Benefits</p>
              <ul className="list-disc pl-5 text-gray-700">
                {p.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <Link
                href="#demo"
                className="inline-block px-4 py-2 rounded-lg border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition"
              >
                View Demo
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-600">
        Note: Each product is under active development. Demos and technical documentation will be published progressively.
      </p>
    </div>
  );
}
