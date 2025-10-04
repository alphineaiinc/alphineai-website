"use client";

export default function ButtonEffectShowcase() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      <button className="btn-shimmer">Shimmer</button>
      <button className="btn-ripple">Ripple</button>
      <button className="btn-morph">Morph</button>
      <button className="btn-gradient">Gradient Shift</button>
      <button className="btn-particles">Particles</button>
    </div>
  );
}