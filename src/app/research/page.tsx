"use client";
import Reveal from "@/components/Reveal";

export default function ResearchPage() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center text-center px-8 space-y-8">
      <Reveal>
        <h1 className="text-5xl font-bold text-yellow-400 mt-10">Research & Innovation</h1>
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
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">Participation Intelligence Model (PIM)</h3>
            <p>
              A hybrid transformer that fuses spatial embeddings with
              conversational context to understand crowd behavior in real time.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">Ethical AI Scoring Framework</h3>
            <p>
              A reproducible evaluation metric for fairness, accountability, and
              interpretability in event-scale AI systems.
            </p>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl text-yellow-300 font-semibold mb-2">Open Dataset Initiative</h3>
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
