"use client";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { quote: "Alphine AI boosted our bookings instantly!", name: "Arusuvai Kitchen" },
  { quote: "Our support wait time dropped by 60%.", name: "Fresco Eatery" },
  { quote: "Setup was fast, ROI even faster.", name: "Cafe Aurora" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = useRef<number | null>(null);

  useEffect(() => {
    t.current = window.setInterval(() => setI((p) => (p + 1) % ITEMS.length), 3500);
    return () => { if (t.current) window.clearInterval(t.current); };
  }, []);

  return (
    <div className="glass rounded-2xl p-8 max-w-3xl mx-auto text-center">
      <div className="text-xl md:text-2xl italic">“{ITEMS[i].quote}”</div>
      <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">— {ITEMS[i].name}</div>
      <div className="mt-4 flex justify-center gap-2">
        {ITEMS.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full ${i === idx ? "bg-accent" : "bg-gray-300 dark:bg-gray-600"}`} />
        ))}
      </div>
    </div>
  );
}
