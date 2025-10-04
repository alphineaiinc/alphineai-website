import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alphine AI | Global Event Attendance Solution",
  description: "AI-powered attendance and participation verification platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col text-[#F5F5F5]
                   bg-gradient-to-b from-[#2B2B2B] via-[#3A3A3A] to-[#1F1F1F]
                   backdrop-blur-lg"
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gray-800/70 backdrop-blur-lg border-b border-gray-700 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-end px-8 py-4 space-x-6">
            <Link
              href="/about"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-yellow-400 font-medium transition-all duration-300"
            >
              Contact
            </Link>
            <Link
              href="/request-demo"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-yellow-400/40 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-8 px-6 pb-10">
          <div className="max-w-7xl mx-auto p-6 text-sm text-gray-400 border-t border-gray-700">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
              <Link href="/products" className="hover:text-yellow-400 transition">Products</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
              <Link href="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-yellow-400 transition">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-yellow-400 transition">Cookies</Link>
            </div>
            <div className="mt-3 text-center text-gray-500">
              © {new Date().getFullYear()} Alphine AI. All Rights Reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
