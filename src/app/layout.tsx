import "./globals.css";
import type { Metadata } from "next";
import ClientShell from "@/components/ClientShell";
import { siteMeta, orgJsonLd, webSiteJsonLd, JsonLd } from "@/lib/seo";

// ---------- Global Metadata ----------
export const metadata: Metadata = {
  title: {
    default: "Alphine AI — Intelligence for a Connected World",
    template: "%s | Alphine AI",
  },
  description: "Ethical, dependable AI for a connected world.",
  metadataBase: new URL("https://www.alphineai.com"),
  alternates: {
    canonical: "https://www.alphineai.com",
    languages: { en: "https://www.alphineai.com" },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: { icon: "/favicon.ico" },
};

// ✅ layout.tsx remains a Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        {/* ---------- Performance Meta Tags ---------- */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Preload example for fonts or logo (optional future assets) */}
        {/* <link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        {/* <link rel="preload" href="/logo.png" as="image" /> */}

        {/* ---------- Structured Data (JSON-LD) ---------- */}
        <JsonLd json={orgJsonLd()} />
        <JsonLd json={webSiteJsonLd()} />

        {/* ---------- Accessibility & Indexing ---------- */}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://www.alphineai.com" />
        <link rel="alternate" hrefLang="en" href="https://www.alphineai.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ---------- Google Analytics (GA4) ---------- */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              id="ga4"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* ---------- Meta Pixel (Facebook) ---------- */}
        {META_PIXEL_ID && (
          <>
            <script
              id="meta-pixel"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
      </head>

      <body className="min-h-screen flex flex-col">
        {/* ClientShell renders Header + Footer client-side */}
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
