"use client";

import Image from "next/image";

export default function LogoHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="Alphine AI Logo"
        width={120}
        height={120}
        priority
      />
      <h1
        className="mt-4 text-5xl font-extrabold text-black 
                   relative animate-pulse transition duration-300"
      >
        <span className="relative group">
          Alphine <span className="text-yellow-500 drop-shadow-[0_0_10px_gold]">AI</span>
          <span className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:animate-ping text-yellow-400">
            ✨
          </span>
        </span>
      </h1>
    </div>
  );
}
