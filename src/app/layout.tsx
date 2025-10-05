import "./globals.css";
import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Alphine AI",
  description: "Ethical, dependable AI for a connected world.",
};

// ✅ layout.tsx remains a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* ClientShell renders Header + Footer client-side */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
