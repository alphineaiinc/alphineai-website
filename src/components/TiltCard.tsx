"use client";
import { useRef } from "react";

export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10; // deg
    const rotateX = (py - 0.5) * -10;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const onLeave = () => {
    const el = ref.current!;
    el.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`[transform-style:preserve-3d] transition-transform duration-300 ${className || ""}`}
    >
      {children}
    </div>
  );
}
