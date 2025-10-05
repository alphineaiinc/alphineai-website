// src/app/privacy/page.tsx
export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Privacy Policy</h1>
      <p className="mt-4 text-gray-800">We practice least-privilege access, encryption, and minimized retention by default. Full policy coming soon.</p>
    </div>
  );
}

// src/app/terms/page.tsx
export default function TermsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Terms of Service</h1>
      <p className="mt-4 text-gray-800">Clear, fair terms for responsible use. Full details coming soon.</p>
    </div>
  );
}

// src/app/copyright/page.tsx
export default function CopyrightPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#B8860B]">Copyright</h1>
      <p className="mt-4 text-gray-800">© {new Date().getFullYear()} Alphine AI. All rights reserved. Licenses and notices will be added here.</p>
    </div>
  );
}
