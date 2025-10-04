"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  // Ripple button effect
  const setRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
    (e.target as HTMLButtonElement).style.setProperty("--x", `${e.clientX - rect.left}px`);
    (e.target as HTMLButtonElement).style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // Parallax gold-dust reference and logic
  const goldDustRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const layer = goldDustRef.current;
    if (!layer) return;

    const handleMove = (e: MouseEvent | DeviceOrientationEvent) => {
      let x = 0, y = 0;
      if (e instanceof MouseEvent) {
        x = (e.clientX / window.innerWidth - 0.5) * 20;
        y = (e.clientY / window.innerHeight - 0.5) * 20;
      } else if (e.beta && e.gamma) {
        x = e.gamma / 5;
        y = e.beta / 5;
      }
      layer.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("deviceorientation", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("deviceorientation", handleMove);
    };
  }, []);

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section
        id="hero"
        className="pt-10 pb-12 relative flex flex-col items-center text-center px-4 overflow-hidden"
      >
        {/* Gold-dust parallax layer */}
        <div ref={goldDustRef} className="hero-gold-dust">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="gold-dust"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Particle glow layer */}
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
          width={100}
          height={100}
          className="mb-3 sm:mb-4 relative z-10 logo-gold"
        />

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold hero-gold sparkle-hover relative z-10 leading-tight">
          Alphine AI
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mt-5 glass p-3 sm:p-4 relative z-10 text-base sm:text-lg">
          Transforming global events and intelligence with real-time AI analytics.  
          From roadshows and rallies to virtual summits — we capture every voice, presence, and pulse on Earth.
        </p>

        {/* Hero Buttons */}
        <div
          id="demo"
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full max-w-sm mx-auto"
        >
          <a href="#products" className="btn-glass-glow w-full sm:w-auto text-center">
            Explore Solutions
          </a>
          <a href="#contact" className="btn-glass-glow w-full sm:w-auto text-center">
            Contact Us
          </a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-20 px-4">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">Event Intelligence Platform (EIP)</h3>
            <p>
              Measure real and virtual attendance for rallies, concerts, and global events using AI vision,
              GPS, and heat-map analytics. See true participation in real time — on the ground and online.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn-glass-glow">Request Demo</a>
            </div>
          </div>

          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">AI Communication Suite</h3>
            <p>
              Next-generation voice and chat automation for campaigns, conferences, and enterprises.
              Engage millions simultaneously with natural, intelligent dialogue.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn-glass-glow">Request Demo</a>
            </div>
          </div>

          <div className="glass p-6">
            <h3 className="text-xl font-semibold mb-2">AI Data Orchestrator</h3>
            <p>
              Connect voice, text, and sensor data into one cognitive layer.  
              Convert raw participation metrics into real-time insights and predictive intelligence.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn-glass-glow">Request Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 px-4">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          About Alphine AI
        </h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          <p>
            Alphine AI is redefining how humanity measures and understands presence.  
            We build intelligent systems that detect, analyze, and visualize global participation — from
            political roadshows to international gatherings — combining computer vision, sensor fusion,
            and conversational AI.
          </p>
          <p>
            <strong>Vision:</strong> To create a futuristic, data-driven planet where every event,
            interaction, and decision is empowered by AI transparency and precision.
          </p>
          <p>
            <strong>Mission:</strong> Deliver ethical, scalable AI infrastructure that bridges physical
            and virtual worlds — providing clarity, accountability, and real-time intelligence for global
            organizations, governments, and enterprises.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass p-4">
              <b>Values</b>
              <div>
                <strong>Futurism • Integrity • Impact</strong><br />
                Every solution is designed to move humanity closer to a smarter, more connected future.
              </div>
            </div>
            <div className="glass p-4">
              <b>Technology</b>
              <div>
                AI Vision, Heat-Map Analytics, Conversational AI, and Geo-Intelligence
                unified for one purpose — truth through data.
              </div>
            </div>
            <div className="glass p-4">
              <b>Motto</b>
              <div>“Intelligence. Clarity. Growth.”</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-20 px-4">
        <h2 className="text-3xl font-bold text-center glass inline-block px-4 py-2 title-turquoise">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto mt-8 glass p-4 sm:p-6">
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="glass px-4 py-2 w-full" />
            <input type="email" placeholder="Your Email" className="glass px-4 py-2 w-full" />
            <textarea placeholder="Message" rows={5} className="glass px-4 py-2 w-full"></textarea>
            <button type="submit" className="btn-glass-glow">Send Message</button>
          </form>
          <div className="text-sm mt-4 opacity-80">
            For partnerships, enterprise deployments or media queries, email us at 
            <strong> contact@alphineai.com</strong>.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-white opacity-80 text-sm">
        © {new Date().getFullYear()} Alphine AI — Pioneering global AI attendance and intelligence platforms.
      </footer>
    </div>
  );
}
