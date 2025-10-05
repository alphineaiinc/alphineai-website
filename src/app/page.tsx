"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const sections = [
  {
    title: "Our Vision — Intelligence for a Connected World",
    para: `Alphine AI envisions a future where intelligence becomes an accessible foundation for progress across every region and industry. 
    We are driven by the belief that technology should unify humanity, not fragment it. Our vision is to create systems that understand, 
    reason, and respond with integrity — elevating how organizations operate, how societies make decisions, and how individuals engage 
    with opportunity. By combining innovation, responsibility, and purpose, we are building an ecosystem where AI enhances efficiency, 
    transparency, and trust. Alphine AI stands for a world that measures success not by scale alone, but by the positive change 
    intelligence enables globally.`,
  },
  {
    title: "Our Mission — Empower the Planet Through Ethical AI",
    para: `Our mission is to develop dependable and ethical AI platforms that empower organizations, governments, and communities 
    to act with confidence. We design systems that transform data into clarity and automate complexity into understanding. 
    Every Alphine AI solution is guided by principles of privacy, fairness, and measurable value. We aspire to make intelligence 
    universally available — accelerating growth, strengthening institutions, and improving quality of life. Through secure engineering 
    and transparent design, we convert innovation into impact, creating a new standard of digital responsibility for the modern world.`,
  },
  {
    title: "Our Innovation — Transforming Automation into Understanding",
    para: `Innovation at Alphine AI is about giving technology the ability to comprehend context and intent, not just execute commands. 
    Our architectures combine real-time processing, multimodal learning, and scalable reasoning to deliver decisions that are fast, 
    fair, and explainable. We build with precision and humility — documenting limits, benchmarking quality, and improving through evidence. 
    Each breakthrough is engineered to integrate responsibly into global infrastructure while maintaining simplicity for the end user. 
    We innovate not for disruption, but for stability and progress that businesses, institutions, and societies can trust for decades.`,
  },
  {
    title: "Our Global Impact — Intelligence Without Borders",
    para: `Alphine AI operates with a borderless mindset, developing technology that adapts to any language, regulation, or environment. 
    We collaborate with enterprises, researchers, and public sectors to solve problems that transcend geography — from operational 
    efficiency to data transparency and digital inclusion. Our platforms are designed to scale responsibly, using secure architecture 
    that respects regional laws and cultural diversity. By promoting openness, interoperability, and accountability, we foster 
    an ecosystem where intelligence becomes a shared asset for human progress rather than a competitive divide.`,
  },
  {
    title: "Our Future — Purpose at the Speed of Possibility",
    para: `The future of Alphine AI lies in extending intelligence beyond automation — toward foresight, collaboration, and empathy. 
    We will continue to pioneer platforms that anticipate needs, augment human decision-making, and strengthen global resilience. 
    Our roadmap spans intelligent communication, digital infrastructure, and adaptive analytics — all built on the foundations of 
    privacy and trust. We measure success by the stability, inclusiveness, and sustainability our systems enable. 
    Alphine AI’s commitment is unwavering: to shape a future where innovation and ethics move together at the speed of possibility.`,
  },
  {
    title: "Our Origin & Leadership — Building a Legacy of Integrity",
    para: `Founded in August 2025, Alphine AI was created to redefine how intelligence serves humanity. 
    Its founder and CEO, an industry veteran with over a decade of experience in information technology and automation, 
    envisioned an organization where engineering discipline meets ethical ambition. Having led global technology projects 
    across multiple domains, the founder built Alphine AI on the principles of clarity, accountability, and measurable impact. 
    The leadership culture values mentorship, transparency, and long-term thinking. 
    Every initiative reflects a promise to advance innovation responsibly and to create opportunities that outlast trends — 
    a legacy of integrity at global scale.`,
  },
];

export default function AboutPage() {
  const [spark, setSpark] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2B2B2B] via-[#3A3A3A] to-[#1F1F1F] text-gray-200">
      {/* Hero Section — replaced with logo + glowing Alphine AI */}
      <section className="flex flex-col items-center justify-center text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/logo.png"
            alt="Alphine AI Logo"
            width={150}
            height={150}
            priority
            className="drop-shadow-[0_0_25px_rgba(255,215,0,0.7)] select-none"
          />

          <motion.h1
            onMouseEnter={() => setSpark(true)}
            onMouseLeave={() => setSpark(false)}
            className={`mt-6 text-5xl md:text-6xl font-extrabold tracking-wide relative text-[#FFD700]
            drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]
            transition-transform duration-500 ease-in-out
            ${spark ? "scale-105" : "scale-100"}`}
          >
            Alphine AI
            {spark && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 top-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[#FFD700]/25"
              />
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Revolutionizing global intelligence with ethics, precision, and purpose.
          </motion.p>
        </motion.div>
      </section>

      {/* Alternating Sections — unchanged */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20 space-y-12">
        {sections.map((sec, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <motion.section
              key={sec.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/70 border border-gray-700 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className={clsx("flex flex-col md:flex-row items-stretch")}>
                {/* Title */}
                <div
                  className={clsx(
                    "md:w-5/12 p-8 md:p-10 bg-gradient-to-b from-gray-900/70 to-gray-800/50",
                    reverse ? "md:order-2" : "md:order-1"
                  )}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                    {sec.title}
                  </h2>
                  <div className="mt-4 h-1 w-16 bg-[#FFD700]/70 rounded-full" />
                </div>

                {/* Content */}
                <div
                  className={clsx(
                    "md:w-7/12 p-8 md:p-10 text-gray-300 text-justify leading-relaxed",
                    reverse ? "md:order-1" : "md:order-2"
                  )}
                >
                  <p>{sec.para}</p>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}
