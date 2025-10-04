export default function CaseStudiesPage() {
  return (
    <section className="min-h-[95vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">Case Studies & Pilot Projects</h1>

      <p className="max-w-4xl text-gray-300 text-lg leading-relaxed mb-10">
        Alphine AI’s technology has been quietly tested in diverse real-world scenarios to prove
        its scalability, accuracy, and social benefit. Each pilot demonstrates how verified
        attendance data can transform planning, safety, and transparency.
      </p>

      <div className="max-w-5xl text-left text-gray-300 space-y-10">
        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">
            🎉 Religious Festival Attendance Analysis – India
          </h2>
          <p>
            During a multi-day pilgrimage attracting over one million visitors, Alphine AI combined
            satellite imagery and geo-tagged checkpoints to calculate real-time density and entry
            flow. The system helped local authorities manage crowd logistics and emergency routes
            more efficiently than ever before.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">
            🏃 National Marathon Tracking Pilot – Canada
          </h2>
          <p>
            By integrating GPS pings from participant apps with checkpoint IoT sensors, Alphine AI
            produced verified live counts of runners completing each stage. The data informed
            dynamic hydration-point resupply and improved volunteer allocation by 27%.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">
            🎓 University Convocation Verification – United States
          </h2>
          <p>
            Large-scale hybrid convocations often struggle with attendance validation.
            Alphine AI’s virtual + physical fusion layer identified unique logins, seat scans,
            and QR check-ins to deliver a tamper-proof participation certificate for each graduate.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-yellow-400 mb-2">
            🎵 Music Festival Smart Entry – United Kingdom
          </h2>
          <p>
            Partnering with event organizers, Alphine AI tested AI-enabled gates capable of counting
            verified entrants per second while maintaining privacy using anonymized face
            embeddings. The pilot eliminated ticket-fraud incidents and reduced wait time by 43%.
          </p>
        </div>
      </div>
    </section>
  );
}
