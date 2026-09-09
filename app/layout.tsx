import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/siteConfig";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/images/fevicon.png", type: "image/png" }],
    shortcut: "/images/fevicon.png",
    apple: "/images/fevicon.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      { url: "/images/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
   verification: {
    google: [
      "LoV0krtbUGNKX41xVZWN5M1ATO8zIlP_TtBco4Ty84Y",
      "DLvWH-jh8pWWIs6rZ553tSyoMUNIMRrBMV5mS8uBK0o",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.colors.primary,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VSMZZ4S2JN"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSMZZ4S2JN');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased font-sans">
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <JsonLd id="ld-website" data={websiteJsonLd()} />
        <JsonLd id="ld-localbusiness" data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
