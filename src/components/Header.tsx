"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const linkBase =
    "font-medium transition-colors px-2 py-1";
  const linkStyle = isHome
    ? "text-white hover:text-[#FFD700]"
    : "text-black hover:text-[#B8860B]";

  return (
    <header
      id="site-header"
      className={clsx(
        "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300",
        isHome
          ? "bg-gradient-to-b from-[#2B2B2B] via-[#3A3A3A] to-[#1F1F1F] border-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          : "bg-white border-gray-300 shadow-sm"
      )}
    >
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={clsx(
              "text-2xl font-extrabold tracking-tight",
              isHome ? "text-[#FFD700]" : "text-[#B8860B]"
            )}
          >
            Alphine AI
          </Link>
          <Link
            href="/"
            className={clsx(linkBase, linkStyle)}
          >
            Home
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={clsx(
            "flex flex-wrap gap-5 text-sm font-medium",
            isHome ? "text-white" : "text-black"
          )}
        >
          {[
            { href: "/about", label: "About" },
            { href: "/products", label: "Products" },
            { href: "/how-it-works", label: "How It Works" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/media", label: "Media" },
            { href: "/careers", label: "Careers" },
            { href: "/partners", label: "Partners" },
            { href: "/investors", label: "Investors" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(linkBase, linkStyle)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
