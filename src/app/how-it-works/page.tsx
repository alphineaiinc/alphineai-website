export default function HowItWorksPage() {
  const sections = [
    {
      title: "Intelligent Conversations",
      desc: "Low-latency voice and text systems that understand intent, context, and emotion while maintaining professional clarity.",
    },
    {
      title: "Participation Intelligence",
      desc: "Privacy-first verification and defensible metrics for gatherings, programs, and digital participation across the world.",
    },
    {
      title: "Engagement Automation",
      desc: "AI that aligns communication and content with brand goals, delivering consistent outreach and measurable outcomes.",
    },
    {
      title: "Knowledge Orchestration",
      desc: "Trusted information retrieval with citations, version control, and access roles—ensuring reliability and accountability.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 bg-white text-black">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        How It Works
      </h1>
      <p className="mt-4 text-gray-800">
        Alphine AI integrates advanced models, secure infrastructure, and human-centered design 
        to create intelligent systems that deliver clarity, accuracy, and dependability. 
        Below is an overview of our core service modules — more detailed diagrams and technical notes 
        will be added soon.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <div
            key={s.title}
            className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold text-[#B8860B]">{s.title}</h2>
            <p className="mt-2 text-gray-800">{s.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-600">
        More implementation details, visuals, and technical flow diagrams will be 
        available soon as the platform progresses through deployment stages.
      </p>
    </div>
  );
}
