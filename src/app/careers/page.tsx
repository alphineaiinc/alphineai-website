"use client";

import { JsonLd, webPageJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import { useState } from "react";  // ✅ Add this line
import type { Metadata } from "next";

export default function CareersPage() {
  const roles = [
    "AI/ML Engineer (NLP, ASR, LLM Orchestration)",
    "Full-Stack Engineer (Next.js, Node.js)",
    "Backend Engineer (Node.js, Postgres, Redis)",
    "DevOps/SRE (Docker, CI/CD, Cloud, Observability)",
    "Product Designer (Systems, Accessibility)",
    "Security Engineer (AppSec, Threat Modeling, IAM)",
    "Technical Program Manager (Delivery, Compliance)",
    "Data Engineer (Pipelines, ETL, Governance)",
  ];

  const [state, setState] = useState<{ ok?: boolean; msg?: string }>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setState({ ok: data.ok, msg: data.message });
    if (data.ok) (e.currentTarget as HTMLFormElement).reset();
  }

  // ---------- JSON-LD Structured Data ----------
  const jobPostings = roles.map((title) => ({
    "@type": "JobPosting",
    title,
    description:
      "Join Alphine AI’s mission to build ethical and dependable artificial intelligence systems. Work in a collaborative environment focused on privacy, fairness, and innovation.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Alphine AI",
      sameAs: "https://www.alphineai.com",
      logo: "https://www.alphineai.com/logo.png",
    },
    employmentType: "FULL_TIME",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Global",
    },
    jobLocationType: "TELECOMMUTE",
    datePosted: "2025-10-05",
  }));

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      {/* ---------- Structured Data (JSON-LD) ---------- */}
      <JsonLd
        json={webPageJsonLd({
          title: "Careers | Alphine AI",
          description:
            "Join Alphine AI’s global mission to create ethical and dependable artificial intelligence. Explore roles in AI/ML engineering, DevOps, design, and leadership as we shape the future of responsible AI.",
          path: "/careers",
        })}
      />
      <JsonLd
        json={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@graph": jobPostings,
        }}
      />

      {/* ---------- Page Content ---------- */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Careers</h1>
      <p className="mt-3 text-gray-800">
        We’re building ethical, dependable AI for global impact. If you’re rigorous, humble, and mission-driven, join us.
      </p>

      <h2 className="mt-8 text-xl font-bold text-[#B8860B]">Who We’re Looking For</h2>
      <ul className="mt-3 grid md:grid-cols-2 gap-2 text-gray-800 list-disc pl-5">
        {roles.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold text-[#B8860B]">Core Skills & Tech</h2>
      <p className="mt-2 text-gray-800">
        TypeScript, Node.js, Next.js, Postgres, Redis, WebSockets, REST/GraphQL, Docker, CI/CD, Cloud Platforms, Security by Design,
        Observability, Prompt/Function-Calling, STT/TTS, Vector Search, Geospatial, and Privacy-first engineering.
      </p>

      <h2 className="mt-10 text-xl font-bold text-[#B8860B]">Apply Now</h2>
      <form onSubmit={onSubmit} className="mt-4 border rounded-2xl p-6 bg-white shadow-sm grid gap-4">
        <input name="name" required placeholder="Full Name" className="border p-3 rounded-md" />
        <input name="email" required type="email" placeholder="Email" className="border p-3 rounded-md" />
        <input name="role" required placeholder="Role You’re Applying For" className="border p-3 rounded-md" />
        <textarea
          name="about"
          required
          placeholder="Why Alphine AI? (short note)"
          className="border p-3 rounded-md min-h-[120px]"
        />
        <input name="linkedin" placeholder="LinkedIn (optional)" className="border p-3 rounded-md" />
        <input name="portfolio" placeholder="Portfolio/GitHub (optional)" className="border p-3 rounded-md" />
        <button
          className="justify-self-start px-4 py-2 rounded-lg border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition"
          type="submit"
        >
          Submit Application
        </button>
        {state.msg && (
          <p className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.msg}</p>
        )}
      </form>
    </div>
  );
}
