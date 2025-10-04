export default function RequestDemoPage() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center text-center px-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">
        Request a Demo of Alphine AI
      </h1>

      <p className="max-w-4xl text-gray-300 leading-relaxed text-lg mb-10">
        Seeing is believing. Our demo environment shows how Alphine AI’s Event Attendance
        Intelligence Platform captures, validates, and visualizes participation in real time.
        Whether you’re tracking 100 attendees or 10 million, our system scales effortlessly
        with zero compromise on accuracy or privacy.
      </p>

      <p className="max-w-4xl text-gray-300 leading-relaxed text-lg mb-8">
        By requesting a demo, you’ll experience the core modules: crowd-density estimation,
        geofenced verification, live AI dashboards, and analytics exports. We’ll also provide a
        customized walk-through tailored to your use case — political rallies, public ceremonies,
        concerts, educational summits, or emergency gatherings.
      </p>

      <form className="flex flex-col gap-4 w-full max-w-md bg-gray-800/50 p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-700 text-gray-200"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-700 text-gray-200"
          required
        />
        <input
          type="text"
          placeholder="Organization / Event Name"
          className="p-3 rounded bg-gray-700 text-gray-200"
        />
        <textarea
          placeholder="Describe your event and what you’d like to measure"
          className="p-3 rounded bg-gray-700 text-gray-200"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-yellow-400/40 transition"
        >
          Submit Request
        </button>
      </form>

      <p className="max-w-2xl text-gray-400 text-sm mt-6">
        Your information is encrypted in transit and stored securely. An Alphine AI representative
        will reach out within 48 hours to schedule your demo.
      </p>
    </section>
  );
}
