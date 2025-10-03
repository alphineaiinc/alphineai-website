"use client";

const STEPS = [
  { title: "Discovery", desc: "Understand goals & customer journeys." },
  { title: "Prototype", desc: "Rapid build with best-practice flows." },
  { title: "Pilot", desc: "Ship MVP → measure calls, conversions." },
  { title: "Scale", desc: "Add channels, languages, analytics." },
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {STEPS.map((s, i) => (
          <li key={i} className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-black ring-8 ring-white dark:ring-gray-950">
              {i + 1}
            </span>
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
