import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Alphine AI",
  description:
    "Understand Alphine AI’s terms of service outlining user rights, responsibilities, and acceptable use of our platforms and APIs.",
};

export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Terms of Service
      </h1>
      <p className="mt-4 text-gray-800 leading-relaxed">
        These terms govern your use of Alphine AI’s platforms, APIs, and associated services.
        We emphasize fairness, transparency, and responsible usage across all integrations.
        Detailed policy documents will be added soon to define acceptable use, intellectual property
        protection, and dispute resolution mechanisms.
      </p>
    </div>
  );
}
