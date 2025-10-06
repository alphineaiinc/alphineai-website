"use client";
import { JsonLd, webPageJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import Reveal from "@/components/Reveal";

export default function ResearchPage() {
  // ---------- JSON-LD Structured Data ----------
  const researchSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Research & Innovation",
        url: "https://www.alphineai.com/research",
        description:
          "Alphine AI’s research division explores multimodal reasoning, ethical intelligence, and geospatial cognition.",
      },
      {
        "@type": "ResearchProject",
        name: "Participation Intelligence Model (PIM)",
        description:
          "A hybrid transformer that fuses spatial embeddings with conversational context to understand crowd behavior in real time.",
        funder: { "@type": "Organization", name: "Alphine AI" },
        url: "https://www.alphineai.com/research",
      },
      {
        "@type": "ResearchProject",
        name: "Ethical AI Scoring Framework",
        description:
          "A reproducible evaluation metric for fairness, accountability, and interpretability in event-scale AI systems.",
        funder: { "@type": "Organization", name: "Alphine AI" },
        url: "https://www.alphineai.com/research",
      },
      {
        "@type": "ResearchProject",
        name: "Open Dataset Initiative",
        description:
          "An anonymized global attendance dataset initiative enabling transparent benchmarking of ethical AI models.",
        funder: { "@type": "Organization", name: "Alphine AI" },
        url: "https://www.alphineai.com/research",
      },
    ],
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center text-center px-8 space-y-8">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Research & Innovation | Alphine AI",
          description:
            "Explore Alphine AI’s research in multimodal reasoning, ethical AI, and geospatial cognition. Our open initiatives drive transparency and global collaboration in artificial intelligence.",
          path: "/research",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Research & Innovation", path: "/research" },
        ])}
      />
      <JsonLd json={researchSchema} />

      {/* ---------- Page Content (unchanged) ---------- */}
      <Reveal>
        <h1 className="text-5xl font-bold text-yellow-400 mt-10">
          Research & Innovation
        </h1>
        <p className="max-w-4xl text-gray-300 mt-4 text-lg leading-relaxed">
          Alphine AI’s research division explores multimodal reasoning,
          ethical machine intelligence, and geospatial cognition.
          Our scientists and engineers publish open papers and datasets to
          advance transparent AI worldwide.
        </p>
      </Reveal>

      <Reveal>
        <div className="max-w-5xl text-left space-y-6 text-gray-300">
          <div className="glass p-6">
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">
              Participation Intelligence Model (PIM)
            </h3>
            <p>
              A hybrid transformer that fuses spatial embeddings with
              conversational context to understand crowd behavior in real time.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">
              Ethical AI Scoring Framework
            </h3>
            <p>
              A reproducible evaluation metric for fairness, accountability, and
              interpretability in event-scale AI systems.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">
              Open Dataset Initiative
            </h3>
            <p>
              Alphine AI is preparing anonymized global attendance datasets for
              researchers and civic organizations to benchmark ethical AI models.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
