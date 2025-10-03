import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import AccentPicker from "../components/AccentPicker";
import MegaMenu from "../components/MegaMenu";
import ParticleBackground from "../components/ParticleBackground";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Alphine AI",
  description: "AI Solutions for Businesses",
};

// Note: Next.js App Router allows client wrappers via body children. We'll attach a small script for compact header.
function HeaderScript() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    let last = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      if (!header) return;
      if (cur > 24) header.classList.add("header-compact");
      else header.classList.remove("header-compact");
      last = cur;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[image:var(--bg,none)] bg-no-repeat bg-fixed text-gray-900 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300">
        {/* Backdrop particle field */}
        <ParticleBackground />

        {/* Floating/Compact Navbar */}
        <header id="site-header" className="sticky top-0 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image src="/logo.png" alt="Alphine AI Logo" width={44} height={44} priority className="rounded-full group-hover:shadow-neon transition-shadow" />
              <span className="text-xl font-bold">Alphine AI</span>
            </Link>

            <nav className="flex items-center gap-6 font-medium">
              <Link href="/" className="hover:text-accent transition">Home</Link>
              <MegaMenu />
              <Link href="/about" className="hover:text-accent transition">About</Link>
              <Link href="/contact" className="hover:text-accent transition">Contact</Link>
              <Link href="/blog" className="hover:text-accent transition">Blog</Link>
              <div className="hidden md:flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
                <AccentPicker />
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>
        <HeaderScript />

        {/* Page Content */}
        <main className="flex-grow max-w-7xl mx-auto px-6 py-12 relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-gray-900 dark:bg-black text-gray-300 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-accent mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/services" className="hover:text-accent">Services</Link></li>
                <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-accent">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Contact</h4>
              <p>📧 contact@alphineai.com</p>
            </div>
          </div>
          <div className="text-center py-4 border-t border-gray-800 text-gray-400">
            © {new Date().getFullYear()} Alphine AI. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
