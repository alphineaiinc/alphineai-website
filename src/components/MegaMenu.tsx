"use client";
import Link from "next/link";
import { useState } from "react";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="hover:text-accent transition">Services ▾</button>

      {open && (
        <div className="absolute right-0 mt-3 w-[560px] glass rounded-xl p-6 shadow-lg z-[60]">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-accent mb-2">Conversation AI</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#aca" className="neon-hover border border-transparent rounded-md px-2 py-1 block">Automated Call Attender</Link></li>
                <li><Link href="/services#chatbots" className="neon-hover border border-transparent rounded-md px-2 py-1 block">Website & WhatsApp Chatbots</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-2">Growth AI</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#sma" className="neon-hover border border-transparent rounded-md px-2 py-1 block">Social Media Automation</Link></li>
                <li><Link href="/services#analytics" className="neon-hover border border-transparent rounded-md px-2 py-1 block">Insights & Analytics</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-xs mt-4 text-gray-500 dark:text-gray-400">
            Explore how Alphine AI boosts customer experience & revenue.
          </div>
        </div>
      )}
    </div>
  );
}
