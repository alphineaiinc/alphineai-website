"use client";
import Reveal from "@/components/Reveal";
import GoldDivider from "@/components/GoldDivider";

export default function HowItWorksPage() {
  return (
    <section
      className="min-h-[95vh] flex flex-col items-center text-center px-8
                 bg-fixed bg-[url('/patterns/gold-dust.png')] bg-cover bg-center
                 relative overflow-hidden"
    >
      <Reveal>
        <h1 className="text-5xl font-bold text-yellow-400 mb-6 drop-shadow-[0_0_10px_#FFD70080]">
          How the Alphine AI Event Attendance System Works
        </h1>
      </Reveal>

      <Reveal>
        <p className="max-w-4xl text-gray-300 text-lg leading-relaxed mb-10">
          The challenge of measuring human participation at scale goes far beyond counting
          heads. Alphine AI’s Event Attendance Intelligence Framework blends advanced sensing,
          geospatial AI, and encrypted analytics to verify how people truly come together —
          whether in stadiums, city streets, or online spaces. Our goal is to turn the world’s
          largest gatherings into transparent, data-driven narratives of collective action.
        </p>
      </Reveal>

      <GoldDivider />

      <div className="max-w-5xl text-left text-gray-300 space-y-10">
        <Reveal>
          <div>
            <h2 className="text-2xl text-yellow-400 mb-2">🛰️ 1. Data Acquisition & Sensing</h2>
            <p>
              Alphine AI begins by aggregating data from multiple independent sources — mobile
              GPS clusters, voluntary app check-ins, satellite imagery, and authorized IoT sensors
              placed near entry or exit zones. Each layer acts as a witness to presence. When
              combined, they form a truthful, timestamped footprint of verified attendance that
              is orders of magnitude more accurate than visual crowd estimates.
            </p>
          </div>
        </Reveal>

        <GoldDivider />

        <Reveal>
          <div>
            <h2 className="text-2xl text-yellow-400 mb-2">🧠 2. AI Fusion & Verification</h2>
            <p>
              Our proprietary AI pipeline performs real-time fusion of incoming signals. Spatial
              AI distinguishes overlapping clusters, while deep-learning models analyze crowd
              flow and detect duplicates. Natural-language models parse digital participation in
              virtual events. The result: one unified, trustworthy count that reflects reality
              without bias or inflation.
            </p>
          </div>
        </Reveal>

        <GoldDivider />

        <Reveal>
          <div>
            <h2 className="text-2xl text-yellow-400 mb-2">🔒 3. Privacy & Security Architecture</h2>
            <p>
              Privacy sits at the heart of the Alphine AI system. All identifiers are hashed and
              encrypted using zero-knowledge protocols, ensuring no personal data is exposed.
              Raw GPS or face data is never stored — only anonymized, aggregate insights. The
              platform complies fully with GDPR, CCPA, and India’s DPDP Act, proving that
              large-scale analytics and personal privacy can coexist.
            </p>
          </div>
        </Reveal>

        <GoldDivider />

        <Reveal>
          <div>
            <h2 className="text-2xl text-yellow-400 mb-2">📊 4. Real-Time Analytics Dashboard</h2>
            <p>
              Organizers gain access to live dashboards that visualize verified attendance counts,
              density heatmaps, and region-specific metrics. AI-driven alerts flag abnormal crowd
              surges, ensuring safety. Exportable analytics provide auditable transparency for
              journalists, governments, and the public alike — making every dataset a permanent,
              trustworthy record of participation.
            </p>
          </div>
        </Reveal>

        <GoldDivider />

        <Reveal>
          <div>
            <h2 className="text-2xl text-yellow-400 mb-2">🌍 5. Impact & Scalability</h2>
            <p>
              From pilgrimages and political gatherings to educational conferences and global
              charity drives, Alphine AI adapts seamlessly. The platform scales across continents,
              languages, and device infrastructures, turning fragmented data into a unified
              understanding of human movement. With each verified event, we move closer to a world
              where truth, accountability, and participation are measurable — and trusted by all.
            </p>
          </div>
        </Reveal>
      </div>

      <GoldDivider />

      <Reveal>
        <p className="max-w-3xl text-gray-400 text-md mt-10 italic">
          Alphine AI — bringing clarity to crowds, accountability to events, and trust to data.
        </p>
      </Reveal>
    </section>
  );
}
