export default function AboutPage() {
  return (
    <section
      className="
        min-h-screen bg-gradient-to-b from-white via-[#fafafa] to-[#f4f4f4]
        px-6 py-16 font-inter
        text-black [&_*]:text-black
      "
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Logo + Title (black text with gold glow) */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/logo.png"
            alt="Alphine AI Logo"
            className="w-24 h-24 mb-4 transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_28px_#e4c65a]"
          />
          <h1
            className="
              text-5xl md:text-6xl font-extrabold tracking-wide
              text-black drop-shadow-[0_0_28px_#c5a100cc]
              transition-transform duration-500 hover:scale-105
            "
          >
            Alphine AI
          </h1>
          <p className="mt-3 text-lg text-[#222] max-w-3xl">
            Building the foundation for an ethical, disciplined, and transformative AI future.
          </p>
        </div>

        {/* Vision & Story */}
        <div className="space-y-6 leading-relaxed text-lg">
          <p>
            <strong>Alphine AI</strong> was founded with a simple yet profound purpose —
            to ensure that artificial intelligence benefits society through discipline,
            innovation, and responsibility. We are at the dawn of an AI-driven era, and
            Alphine AI is positioning itself to become one of the pioneers that shape this future.
          </p>

          <p>
            Our founder and CEO <em>(to be announced soon)</em> brings over <strong>17 years of experience</strong> in
            information technology — spanning banking, insurance, and enterprise data — combined with an extensive
            understanding of AI and its limitless potential. With this foundation, Alphine AI aims to build technologies
            that not only solve problems but also create measurable, sustainable impact.
          </p>

          <p>
            As the world moves toward complete AI integration, Alphine AI stands ready with a clear vision and a firm
            commitment: to build responsible AI ecosystems that serve humanity with precision and purpose. Every product,
            every decision, every collaboration is guided by ethics, transparency, and accountability.
          </p>
        </div>

        {/* Goals & Values */}
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#b38c00] mb-4">Our Goal & Core Values</h2>
          <p className="text-lg leading-relaxed">
            Our goal is to bring AI-driven solutions to society’s most pressing challenges while ensuring quality and
            trust in everything we do. We combine innovation with integrity so clients receive not just technology, but
            durable confidence.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-1">
            <li><strong>Integrity:</strong> Ethics above everything.</li>
            <li><strong>Innovation:</strong> Pushing AI boundaries responsibly.</li>
            <li><strong>Impact:</strong> Delivering measurable results for society.</li>
          </ul>
        </div>

        {/* Investors */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#b38c00]">For Investors</h2>
          <p className="text-lg leading-relaxed">
            Investing in Alphine AI means investing in the future. We’re shaping the AI landscape with discipline,
            ethics, and purpose. We welcome strategic investors who believe in creating value beyond profit to join us.
          </p>
        </div>

        {/* Careers */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#b38c00]">For Career Seekers</h2>
          <p className="text-lg leading-relaxed">
            Alphine AI is where visionaries build the future. We’re seeking people passionate about AI, data science,
            cloud systems, and ethical innovation to grow with us.
          </p>
          <div className="pt-2">
            <a
              href="/careers"
              className="inline-block bg-[#c5a100] hover:bg-[#a68900] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
            >
              View Careers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
