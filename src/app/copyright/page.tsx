export default function CopyrightPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">
        Copyright
      </h1>
      <p className="mt-4 text-gray-800">
        © {new Date().getFullYear()} Alphine AI. All rights reserved.
        Licenses, attribution notices, and open-source acknowledgments will be added soon.
      </p>
    </div>
  );
}
