"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import TiltCard from "../components/TiltCard";
import Counters from "../components/Counters";
import Testimonials from "../components/Testimonials";
import Timeline from "../components/Timeline";
import ScrollSpy from "../components/ScrollSpy";
import { useEffect } from "react";

export default function Home() {
  // animated spotlight that follows mouse (radial fade)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mx", `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--my", `${(e.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <main className="text-gray-900 dark:text-gray-100 relative">
      <ScrollSpy />

      {/* ===== HERO (snap) ===== */}
      <section id="hero" className="snap-section relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 
                                    bg-animated-gradient dark:bg-animated-gradient-dark
                                    bg-[length:200%_200%] animate-[pulse_12s_ease-in-out_infinite] 
                                    before:absolute before:inset-0 before:bg-radial-fade">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold 
                     bg-[conic-gradient(from_180deg_at_50%_50%,var(--accent),#fff)] 
                     bg-clip-text text-transparent drop-shadow"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Empowering Businesses with AI
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl max-w-2xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          From automated call attendants to intelligent chatbots and social growth—built for SMBs, engineered to scale.
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <MagneticButton href="#contact">🚀 Book a Demo</MagneticButton>
          <a
            href="#products"
            className="neon-hover inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 
                       hover:bg-gray-100 dark:hover:bg-gray-800 font-semibold"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12">
          {/* lazy blur image demo */}
          <Image
            src="/hero-ai.jpg"
            alt="AI Patterns"
            width={1100}
            height={520}
            className="rounded-2xl shadow-xl mx-auto blur-up"
            onLoadingComplete={(img) => img.classList.add("loaded")}
            priority
          />
        </div>
      </section>

      {/* ===== PRODUCTS (snap) ===== */}
      <section id="products" className="snap-section px-6 py-24 bg-white dark:bg-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our AI Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Automated Call Attender",
              desc: "Answer customer calls 24/7 with natural, multilingual AI voices that handle bookings and inquiries.",
              icon: "📞",
            },
            {
              title: "AI Chatbots",
              desc: "Engage instantly on your website or WhatsApp with intelligent chatbots that convert.",
              icon: "💬",
            },
            {
              title: "Social Media AI",
              desc: "Create and schedule engaging posts that grow your online presence automatically.",
              icon: "📲",
            },
          ].map((p, i) => (
            <TiltCard key={i} className="glass rounded-2xl p-8 neon-hover">
              <div className="text-5xl">{p.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 text-accent">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">{p.desc}</p>
              <a href="/services" className="inline-block mt-4 text-sm underline hover:text-accent">Explore →</a>
            </TiltCard>
          ))}
        </div>

        <div className="mt-16">
          <Counters />
        </div>
      </section>

      {/* ===== ABOUT (snap) ===== */}
      <section id="about" className="snap-section px-6 py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl accent-shadow" />
            <Image
              src="/team-ai.jpg"
              alt="AI Innovation"
              width={700}
              height={520}
              className="rounded-2xl shadow-xl relative z-10 blur-up"
              onLoadingComplete={(img) => img.classList.add("loaded")}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">About Alphine AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
              We power SMBs with the same AI capabilities used by the largest enterprises—without the complexity.
              We focus on speed, measurable ROI, and world-class support.
            </p>

            <div className="mt-8">
              <Timeline />
            </div>

            <div className="mt-8">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT (snap) ===== */}
      <section id="contact" className="snap-section px-6 py-24 bg-white dark:bg-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to bring AI into your business? Book a demo or drop us a message.
        </p>

        <form
          className="max-w-xl mx-auto space-y-4 text-left mt-10 glass rounded-2xl p-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
            const formData = new FormData(form);
            btn.disabled = true; btn.textContent = "Sending…";

            try {
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                }),
              });
              const data = await res.json();
              if (data.success) {
                btn.textContent = "✅ Sent!";
                form.reset();
              } else {
                btn.textContent = "Try Again";
                alert("❌ Failed to send message: " + (data.error || "Unknown error"));
              }
            } catch (err) {
              btn.textContent = "Try Again";
              alert("❌ Something went wrong sending the message.");
            } finally {
              setTimeout(() => { btn.disabled = false; btn.textContent = "Send Message"; }, 1200);
            }
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500 
                       bg-white dark:bg-gray-800 
                       focus:outline-none focus:border-accent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500 
                       bg-white dark:bg-gray-800 
                       focus:outline-none focus:border-accent"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500 
                       bg-white dark:bg-gray-800 
                       focus:outline-none focus:border-accent"
            required
          />
          <button
            type="submit"
            className="w-full accent-bg hover:brightness-110 text-black font-semibold py-3 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
