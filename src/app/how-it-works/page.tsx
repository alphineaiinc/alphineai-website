export default function HowItWorksPage() {
  return (
    <section className="min-h-[95vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">
        How the Alphine AI Event Attendance System Works
      </h1>

      <p className="max-w-4xl text-gray-300 text-lg leading-relaxed mb-8">
        Measuring human participation at scale requires more than cameras or crowd estimates.
        Alphine AI unites multiple technologies into one transparent framework that can verify
        physical and virtual presence with scientific accuracy while protecting individual privacy.
      </p>

      <div className="max-w-5xl text-left text-gray-300 space-y-8">
        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🛰️ 1. Data Acquisition & Sensing</h2>
          <p>
            Attendance data originates from multiple independent streams — mobile GPS clusters,
            voluntary app check-ins, satellite and aerial imagery, and authorized on-site IoT
            sensors. Each stream alone can be noisy, but combined, they reveal a truthful
            real-world footprint of participation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🧠 2. AI Fusion & Verification</h2>
          <p>
            Proprietary models fuse incoming data in real time to eliminate duplicates and
            anomalies. Computer-vision layers interpret crowd movement; language models
            interpret virtual chat or broadcast attendance; and spatial AI verifies distinct
            participant presence zones within the event perimeter.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🔒 3. Privacy & Security Architecture</h2>
          <p>
            All personally identifiable information is hashed and processed with zero-knowledge
            encryption. Alphine AI never stores raw GPS or facial data. The platform complies with
            GDPR, CCPA, and Indian DPDP standards while still providing trustworthy aggregated
            metrics.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">📊 4. Real-Time Analytics Dashboard</h2>
          <p>
            Organizers receive live dashboards displaying verified attendance counts, crowd density
            heatmaps, movement safety alerts, and region-wise participation charts. All analytics
            are timestamped, exportable, and auditable for public transparency.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🌍 5. Impact & Scalability</h2>
          <p>
            The same framework powers democratic rallies, global conferences, charity marathons,
            and virtual summits — handling populations from a few hundred to tens of millions.
            Each verified datapoint builds trust in collective action and shapes a more accurate
            world record of human engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
