"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Alphine AI Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="font-bold text-2xl tracking-wide text-gray-800">
            Alphine AI
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#products" className="hover:text-yellow-500 transition">
            Products
          </a>
          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow px-6 py-24">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Future of AI for Businesses
        </motion.h1>

        <motion.p
          className="mt-6 text-xl md:text-2xl max-w-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Alphine AI helps small & medium businesses grow with powerful AI tools — 
          from automated call attendants to AI-driven social media solutions.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl shadow-lg text-lg transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          🚀 Book a Demo
        </motion.a>
      </section>

      {/* Products Section */}
      <section id="products" className="px-6 py-20 bg-white">
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
              className="p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-600">{product.title}</h3>
              <p className="text-gray-600 mt-4">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-50 text-center">
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
          className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
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
      <section id="contact" className="px-6 py-20 bg-white text-center">
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
          className="text-gray-600 mb-8"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg shadow-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="px-8 py-10 bg-gray-900 text-gray-300 text-sm mt-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
    <div>
      <h4 className="font-semibold text-yellow-400 mb-3">Company</h4>
      <ul className="space-y-2">
        <li><a href="#about" className="hover:text-yellow-400">About</a></li>
        <li><a href="#products" className="hover:text-yellow-400">Products</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-yellow-400 mb-3">Legal</h4>
      <ul className="space-y-2">
        <li><a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
        <li><a href="/terms" className="hover:text-yellow-400">Terms of Service</a></li>
        <li><a href="/cookies" className="hover:text-yellow-400">Cookies</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-semibold text-yellow-400 mb-3">Contact</h4>
      <p>📧 contact@alphineai.com</p>
    </div>
  </div>
  <div className="text-center mt-6 text-gray-500">
    © {new Date().getFullYear()} Alphine AI. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}
