export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p>We collect and process only what’s needed to deliver our services. We don’t sell personal data. We use encryption in transit and at rest, apply least-privilege access, and retain logs minimally. Contact privacy@alphineai.com for requests.</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Data we collect: account/contact details, usage logs, content you submit.</li>
        <li>Purposes: service delivery, security, support, analytics.</li>
        <li>Sharing: processors under contract only; no sale of personal data.</li>
        <li>Rights: access, correction, deletion where applicable.</li>
        <li>Security: encryption, access controls, ongoing monitoring.</li>
      </ul>
    </div>
  );
}
