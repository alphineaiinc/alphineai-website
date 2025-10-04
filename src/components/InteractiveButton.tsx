"use client";

export default function InteractiveButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => alert(`${label} clicked!`)}
      className="mt-6 px-8 py-3 bg-gray-700 text-white rounded-xl
                 hover:bg-gray-600 transition transform hover:scale-105
                 shadow-lg hover:shadow-yellow-400/50"
    >
      {label}
    </button>
  );
}
