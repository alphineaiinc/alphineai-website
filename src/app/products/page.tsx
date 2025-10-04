export default function ProductsPage() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">Our Products</h1>

      <p className="max-w-4xl text-gray-300 leading-relaxed text-lg mb-10">
        Alphine AI develops advanced AI platforms that bridge the gap between physical
        presence and digital intelligence. Our flagship innovation — the
        <span className="text-yellow-400 font-semibold"> Global Event Attendance & Verification System </span> —
        transforms the way humanity measures participation at scale.
      </p>

      <div className="max-w-5xl text-left text-gray-300 space-y-6">
        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🛰️ Event Attendance Intelligence</h2>
          <p>
            This system combines GPS-based clustering, mobile validation, satellite imagery, and
            secure AI inference to estimate live crowd density and verify unique attendance
            counts in real time. Governments can use it for safety and logistics; organizations
            can use it for auditing and reporting; citizens can use it to trust the numbers they
            read in the news.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">📞 Automated Call Attender (ACA)</h2>
          <p>
            Our secondary platform revolutionizes how small and medium businesses handle inbound
            calls using voice AI trained on business knowledge, enabling instant, multilingual
            conversation with customers — increasing productivity while maintaining a human touch.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">📊 Smart Data & Insight Layer</h2>
          <p>
            Every Alphine AI solution integrates with a centralized analytics layer that provides
            secure dashboards, anomaly detection, and predictive modeling. This gives event
            organizers and authorities early warnings about potential overcrowding, flow patterns,
            or under-reported participation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🔐 Privacy-First Design</h2>
          <p>
            We implement encryption at every stage, anonymize personal identifiers, and store
            sensitive information in compliance with global privacy laws such as GDPR, ensuring
            transparency without compromising individual rights.
          </p>
        </div>
      </div>
    </section>
  );
}
