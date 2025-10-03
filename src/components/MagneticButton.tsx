"use client";
import { useRef } from "react";

export default function MagneticButton(
  { children, className, href }: { children: React.ReactNode; className?: string; href?: string }
) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transform = `translate(0,0)`;
  };

  const inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`neon-hover inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--accent)] text-black font-semibold shadow-lg border border-transparent ${className || ""}`}
    >
      {children}
    </div>
  );

  if (href) {
    return <a href={href} className="inline-block">{inner}</a>;
  }
  return inner;
}
