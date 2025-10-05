"use client";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function TeamPage() {
  const members = [
    { name: "PremKumar V", title: "Founder & CEO", img: "/team/founder.jpg" },
    { name: "L. Chen", title: "Chief AI Scientist", img: "/team/ai.jpg" },
    { name: "M. Garcia", title: "Head of Engineering", img: "/team/eng.jpg" },
    { name: "R. Patel", title: "Director of Data Ethics", img: "/team/ethics.jpg" },
  ];
  return (
    <section className="min-h-[90vh] flex flex-col items-center text-center px-8 space-y-8">
      <Reveal>
        <h1 className="text-5xl font-bold text-yellow-400 mt-10">Leadership Team</h1>
        <p className="max-w-4xl text-gray-300 mt-4 text-lg leading-relaxed">
          Alphine AI is led by technologists and researchers who blend vision
          with execution. Our leadership represents decades of experience in
          AI ethics, cloud architecture, and civic innovation.
        </p>
      </Reveal>

      <Reveal>
        <div className="grid md:grid-cols-4 gap-8 mt-10 max-w-6xl">
          {members.map((m) => (
            <div key={m.name} className="glass p-4 rounded-xl">
              <Image src={m.img} alt={m.name} width={180} height={180} className="mx-auto rounded-full mb-3" />
              <h3 className="text-yellow-300 font-semibold text-lg">{m.name}</h3>
              <p className="text-gray-400 text-sm">{m.title}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
