export default function ContactPage() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">Contact Alphine AI</h1>

      <p className="max-w-3xl text-gray-300 leading-relaxed text-lg mb-8">
        We believe in open collaboration. Whether you are a government agency, NGO, research
        institution, or private event organizer, Alphine AI welcomes partnerships that aim to
        make human gatherings smarter, safer, and more transparent.
      </p>

      <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg max-w-md w-full mb-8">
        <p className="text-gray-400 mb-2">Email us directly:</p>
        <a
          href="mailto:contact@alphineai.com"
          className="text-yellow-400 hover:text-yellow-300 font-semibold text-lg"
        >
          contact@alphineai.com
        </a>

        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
          Alphine AI Headquarters<br />
          Mississauga, Ontario, Canada<br />
          Operating globally with partners in Asia, Europe, and North America.
        </div>
      </div>

      <p className="max-w-3xl text-gray-300 leading-relaxed text-lg">
        Reach out if you want to collaborate, pilot our technology for an event, or simply learn
        how AI can make participation measurement more accurate and ethical.
      </p>
    </section>
  );
}
