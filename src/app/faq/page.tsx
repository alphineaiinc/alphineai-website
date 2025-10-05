const faqs: { q: string; a: string }[] = [
  { q: "What is Alphine AI’s core focus?", a: "Building ethical, dependable AI platforms for communication, participation, engagement, and knowledge." },
  { q: "Are your products available today?", a: "We’re actively developing pilots; public releases will roll out progressively." },
  { q: "Do you support multiple languages?", a: "Yes. Multilingual understanding is a core design goal across products." },
  { q: "How do you handle privacy?", a: "Least privilege, encryption in transit/at rest, minimized retention, and transparent logs." },
  { q: "Do you lock customers into your stack?", a: "No. We prioritize interoperability and clear data portability." },
  { q: "What industries do you serve?", a: "Our platforms are horizontal and adapt to many sectors where clarity and responsiveness matter." },
  { q: "Do you provide APIs?", a: "Yes. Integration is a priority; product docs will include API references." },
  { q: "Can we host on our cloud?", a: "Roadmap includes flexible deployment patterns; details to be announced." },
  { q: "How do you measure accuracy?", a: "Through benchmarking, pilot evaluations, and published constraints." },
  { q: "What makes you different?", a: "Security-by-default, explainability, and measurable outcomes—not hype." },
  { q: "Do you provide demos?", a: "We’ll publish demos and schedules as each product matures." },
  { q: "How do you price?", a: "Outcome-oriented pricing with transparent, predictable tiers." },
  { q: "Do you offer support SLAs?", a: "Yes, SLAs and escalation paths will accompany enterprise plans." },
  { q: "How do you prevent bias?", a: "Data governance, periodic audits, and human-in-the-loop where necessary." },
  { q: "Is there a roadmap?", a: "Yes. We share timelines with partners and update public notes as features ship." },
  { q: "Do you handle compliance?", a: "We design for regulatory alignment and provide audit artifacts where applicable." },
  { q: "What about uptime and reliability?", a: "We aim for high availability with observability and graceful degradation." },
  { q: "Can we request features?", a: "Absolutely. We prioritize requests that drive measurable value." },
  { q: "How do pilots work?", a: "Scoping, success metrics, limited rollout, measurement, and iteration." },
  { q: "What data do you store?", a: "Only what’s necessary; retention is configurable and minimized." },
  { q: "Can we export our data?", a: "Yes. We support exports and interoperable formats." },
  { q: "Do you share datasets?", a: "We respect data ownership and confidentiality; any sharing requires explicit consent." },
  { q: "How do you handle security incidents?", a: "With clear playbooks, rapid response, and transparent communication." },
  { q: "Are you hiring?", a: "Yes—see Careers for open roles and apply directly." },
  { q: "How do we contact you?", a: "Use the Contact page form; we’ll respond promptly." },
];

export default function FAQPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="border rounded-xl p-5">
            <h2 className="font-bold text-[#B8860B]">{f.q}</h2>
            <p className="mt-2 text-gray-800">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
