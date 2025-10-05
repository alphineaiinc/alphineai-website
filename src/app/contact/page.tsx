"use client";

import { useState } from "react";

export default function ContactPage() {
  const [state, setState] = useState<{ ok?: boolean; msg?: string }>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    setState({ ok: data.ok, msg: data.message });
    if (data.ok) (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Contact</h1>
      <p className="mt-3 text-gray-800">Send us a note. We’ll get back to you promptly.</p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4 border rounded-2xl p-6 bg-white">
        <input name="name" required placeholder="Full Name" className="border p-3 rounded-md" />
        <input name="email" type="email" required placeholder="Email" className="border p-3 rounded-md" />
        <input name="subject" required placeholder="Subject" className="border p-3 rounded-md" />
        <textarea name="message" required placeholder="Your message" className="border p-3 rounded-md min-h-[140px]" />
        <button
          className="justify-self-start px-4 py-2 rounded-lg border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition"
          type="submit"
        >
          Send
        </button>
        {state.msg && <p className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.msg}</p>}
      </form>
    </div>
  );
}
