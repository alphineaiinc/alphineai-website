"use client";

import Image from "next/image";

export default function Home() {
  // Ripple button effect
  const setRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
    (e.target as HTMLButtonElement).style.setProperty("--x", `${e.clientX - rect.left}px`);
    (e.target as HTMLButtonElement).style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section id="hero" className="pt-6 relative flex flex-col items-center text-center">
        {/* Golden particles background */}
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <Image
  src="/logo.png"
  alt="Alphine AI Logo"
  width={120}
  height={120}
  className="mb-4 relative z-10 logo-gold"
/>


        {/* Title */}
        <h1 className="text-6xl font-extrabold hero-gold sparkle-hover relative z-10">
          Alphine AI
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-6 glass p-4 relative z-10">
          The future of AI for businesses — chat, voice, and automation that actually moves your metrics.
        </p>

        {/* Hero Buttons */}
        <div id="demo" className="mt-6 flex flex-wrap gap-4 justify-center relative z-10">
          <a href="#contact" className="btn-glass-glow">Book a Demo</a>
          <a href="#products" className="btn-glass-glow">See Products</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          Products
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">Automated Call Attender (ACA)</h3>
            <p>Real-time voice agent that answers calls, takes orders, and handles FAQs with live STT/TTS.</p>
            <div className="mt-4"><a href="#contact" className="btn-glass-glow">Request Demo</a></div>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
            <p>Website and WhatsApp chatbots with retrieval, function-calling, and analytics.</p>
            <div className="mt-4"><a href="#contact" className="btn-glass-glow">Request Demo</a></div>
          </div>
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">Social Media AI</h3>
            <p>Generate, schedule, and monitor posts across platforms with brand-safe prompts.</p>
            <div className="mt-4"><a href="#contact" className="btn-glass-glow">Request Demo</a></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          About Alphine AI
        </h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          <p>
            Alphine AI builds practical AI for small and medium businesses. We focus on voice bots, chat automation,
            and operational AI that shortens response times and drives revenue.
          </p>
          <p>
            Our pillars: <strong>Trust</strong> (data minimization & encryption), <strong>Value</strong> (rapid ROI),
            and <strong>Clarity</strong> (explainable decisions and transparent metrics).
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-4"><b>Vision</b><div>Make high-quality AI accessible to every local business.</div></div>
            <div className="glass p-4"><b>Mission</b><div>Deliver measurable outcomes with delightful customer experiences.</div></div>
            <div className="glass p-4"><b>Motto</b><div>“Intelligence. Clarity. Growth.”</div></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto mt-8 glass p-6">
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="glass px-4 py-2 w-full" />
            <input type="email" placeholder="Your Email" className="glass px-4 py-2 w-full" />
            <textarea placeholder="Message" rows={5} className="glass px-4 py-2 w-full"></textarea>
            <button type="submit" className="btn-glass-glow">Send Message</button>
          </form>
          <div className="text-sm text-gray-600 mt-4">Or email: contact@alphineai.com</div>
        </div>
      </section>

      <footer className="text-center py-6 text-white opacity-80 text-sm">
  © {new Date().getFullYear()} Alphine AI. All rights reserved.
</footer>

    </div>
  );
}
