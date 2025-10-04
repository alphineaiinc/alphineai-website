"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const setRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect();
    (e.target as HTMLButtonElement).style.setProperty("--x", `${e.clientX - rect.left}px`);
    (e.target as HTMLButtonElement).style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const goldDustRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const layer = goldDustRef.current;
    if (!layer) return;

    const handleMove = (e: MouseEvent | DeviceOrientationEvent) => {
      let x = 0, y = 0;
      if (e instanceof MouseEvent) {
        x = (e.clientX / window.innerWidth - 0.5) * 20;
        y = (e.clientY / window.innerHeight - 0.5) * 20;
      } else if (e.beta && e.gamma) {
        x = e.gamma / 5;
        y = e.beta / 5;
      }
      layer.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("deviceorientation", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("deviceorientation", handleMove);
    };
  }, []);

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section
        id="hero"
        className="pt-10 pb-12 relative flex flex-col items-center text-center px-4 overflow-hidden"
      >
        <div ref={goldDustRef} className="hero-gold-dust">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="gold-dust"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="hero-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${4 + Math.random() * 6}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <Image
          src="/logo.png"
          alt="Alphine AI Logo"
          width={100}
          height={100}
          className="mb-3 sm:mb-4 relative z-10 logo-gold"
        />

        <h1 className="text-4xl sm:text-6xl font-extrabold hero-gold sparkle-hover relative z-10 leading-tight">
          Alphine AI
        </h1>

        <p className="max-w-2xl mx-auto mt-5 glass p-3 sm:p-4 relative z-10 text-base sm:text-lg">
          Transforming global events and intelligence with real-time AI analytics.  
          From roadshows and rallies to virtual summits — we capture every voice, presence, and pulse on Earth.
        </p>

        {/* FIXED HERO BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center relative z-10 w-full max-w-sm mx-auto">
          <Link href="/products" className="btn-glass-glow w-full sm:w-auto text-center">
            Explore Solutions
          </Link>
          <Link href="/how-it-works" className="btn-glass-glow w-full sm:w-auto text-center">
            How It Works
          </Link>
          <Link href="/case-studies" className="btn-glass-glow w-full sm:w-auto text-center">
            Case Studies
          </Link>
          <Link href="/media" className="btn-glass-glow w-full sm:w-auto text-center">
            Media
          </Link>
          <Link href="/contact" className="btn-glass-glow w-full sm:w-auto text-center">
            Contact Us
          </Link>
          <Link href="/request-demo" className="btn-glass-glow w-full sm:w-auto text-center">
            Request Demo
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-white opacity-80 text-sm">
        © {new Date().getFullYear()} Alphine AI — Pioneering global AI attendance and intelligence platforms.
      </footer>
    </div>
  );
}
