"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Alphine AI Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl tracking-wide">Alphine AI</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-300">
          <a href="#products" className="hover:text-gold">Products</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow px-6 py-20">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Future of AI for Businesses
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Alphine AI helps small & medium businesses grow with powerful AI tools —
          from automated call attendants to AI-driven social media.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-xl shadow-lg text-lg transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          🚀 Book a Demo
        </motion.a>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 py-20 bg-brand-slate">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our AI Products
        </h2>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Automated Call Attender",
              desc: "Answer customer calls 24/7 with natural, multilingual AI voices that handle bookings and inquiries.",
              icon: "📞",
            },
            {
              title: "AI Chatbots",
              desc: "Engage visitors instantly on your website or WhatsApp with intelligent chatbots that drive sales.",
              icon: "💬",
            },
            {
              title: "Social Media AI",
              desc: "Create and schedule engaging posts that grow your online presence automatically.",
              icon: "📲",
            },
          ].map((product, i) => (
            <motion.div
              key={i}
              className="p-8 bg-black rounded-2xl shadow-lg border border-gray-700 hover:border-gold transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-semibold text-gold">{product.title}</h3>
              <p className="text-gray-300 mt-4">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-black text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Alphine AI
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Alphine AI is on a mission to empower small and medium businesses with the
          same cutting-edge AI tools used by the world’s largest companies.  
          From local restaurants to global enterprises, our solutions make AI practical, 
          affordable, and effective.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-brand-slate text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          Ready to bring AI into your business? Book a demo or drop us a message.
        </motion.p>

        <form
  className="max-w-xl mx-auto space-y-4 text-left"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message: " + data.error);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("❌ Something went wrong sending the message.");
    }
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
    required
  />
  <button
    type="submit"
    className="w-full bg-gold hover:bg-gold-dark text-black font-semibold py-3 rounded-lg shadow-md transition-colors"
  >
    Send Message
  </button>
</form>

      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Alphine AI — All Rights Reserved
      </footer>
    </main>
  );
}
