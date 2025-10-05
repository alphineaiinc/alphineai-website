import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright | Alphine AI",
  description:
    "Learn about Alphine AI’s copyright and licensing terms, including intellectual property protection and attribution policies.",
};

export default function CopyrightPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Copyright
      </h1>
      <p className="mt-4 text-gray-800 leading-relaxed">
        © {new Date().getFullYear()} Alphine AI. All rights reserved.
        All trademarks, logos, and intellectual property appearing on this website are the property of
        their respective owners. Licensing and attribution details will be added as new assets and
        open-source components are published.
      </p>
    </div>
  );
}
