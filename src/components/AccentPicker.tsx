"use client";
import { useEffect, useState } from "react";

const PRESETS = [
  { name: "Gold", value: "#facc15" },
  { name: "Teal", value: "#14b8a6" },
  { name: "Violet", value: "#8b5cf6" },
  { name: "Rose", value: "#fb7185" },
  { name: "Blue", value: "#60a5fa" },
];

export default function AccentPicker() {
  const [accent, setAccent] = useState<string>("#facc15");

  useEffect(() => {
    const stored = localStorage.getItem("accent") || "#facc15";
    setAccent(stored);
    document.documentElement.style.setProperty("--accent", stored);
  }, []);

  const choose = (val: string) => {
    setAccent(val);
    localStorage.setItem("accent", val);
    document.documentElement.style.setProperty("--accent", val);
  };

  return (
    <div className="flex items-center gap-2">
      {PRESETS.map((p) => (
        <button
          key={p.value}
          onClick={() => choose(p.value)}
          className="w-5 h-5 rounded-full border border-white/40 shadow"
          style={{ background: p.value, outline: accent === p.value ? `2px solid ${p.value}` : "none" }}
          aria-label={`Accent ${p.name}`}
          title={`Accent ${p.name}`}
        />
      ))}
    </div>
  );
}
