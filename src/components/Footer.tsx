export default function Footer() {
  return (
    <footer className="mt-16 py-8 text-center glass">
      <div className="max-w-4xl mx-auto space-y-2 text-sm text-gray-600">
        <div>
          <a href="/privacy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms of Service</a>
        </div>
        <div>© {new Date().getFullYear()} Alphine AI. All rights reserved.</div>
        <div>1234 Innovation Way, Tech City, SomeProvince, Canada</div>
      </div>
    </footer>
  );
}
