import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphine AI",
  description: "AI Solutions for Businesses",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <a href="#hero" className="font-bold text-xl">Alphine AI</a>
            <nav className="flex gap-3">
              <a href="#products" className="btn-glass-glow">Products</a>
              <a href="#about" className="btn-glass-glow">About</a>
              <a href="#contact" className="btn-glass-glow">Contact</a>
              <a href="#demo" className="btn-glass-glow">Book a Demo</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="mt-8 px-6 pb-10">
          <div className="glass max-w-7xl mx-auto p-6 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#about" className="underline">About</a>
              <a href="#products" className="underline">Products</a>
              <a href="#contact" className="underline">Contact</a>
              <Link href="/privacy" className="underline">Privacy Policy</Link>
              <Link href="/terms" className="underline">Terms of Service</Link>
              <Link href="/cookies" className="underline">Cookies</Link>
            </div>
            <div className="mt-3 text-center">© {new Date().getFullYear()} Alphine AI. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
