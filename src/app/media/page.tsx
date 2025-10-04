export default function MediaPage() {
  return (
    <section className="min-h-[95vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">Media & Public Updates</h1>

      <p className="max-w-4xl text-gray-300 text-lg leading-relaxed mb-10">
        Alphine AI operates at the intersection of technology, governance, and civic transparency.
        Here’s how the global community and press are talking about our mission to verify human
        participation in the 21st century.
      </p>

      <div className="max-w-5xl text-left text-gray-300 space-y-10">
        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">📰 Featured Articles</h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <span className="text-yellow-400">Tech World Today (2025): </span>
              “AI for Accountability — How Alphine AI Redefines Event Data Integrity.”
            </li>
            <li>
              <span className="text-yellow-400">Global Data Review (2025): </span>
              “Privacy First: Inside the Encryption Layer of Alphine AI’s Crowd Engine.”
            </li>
            <li>
              <span className="text-yellow-400">Smart Cities Digest (2024): </span>
              “From Traffic Control to Crowd Trust — Alphine AI Bridges Governance and AI.”
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">🎙️ Press Contact</h2>
          <p>
            For media inquiries, interviews, or speaking engagements, please reach out to:
          </p>
          <p className="mt-2">
            <a
              href="mailto:press@alphineai.com"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              press@alphineai.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">📸 Community Stories</h2>
          <p>
            Alphine AI regularly features citizen-led projects that use our data for public
            awareness — from NGOs tracking relief-camp attendance to universities studying
            migration patterns. Future blog entries will include deep dives, tutorials, and
            collaborative open-data releases.
          </p>
        </div>
      </div>
    </section>
  );
}
