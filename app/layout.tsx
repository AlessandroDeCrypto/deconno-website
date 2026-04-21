import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Zurich Airport Transfer",
    "Zurich Airport Pickup",
    "Zurich Chauffeur Service",
    "Zurich City Transfer",
    "Private Driver Switzerland",
    "Airport Transfer Kloten",
        "Interlaken transfer from Zurich Airport",
    "Lucerne transfer from Zurich Airport",
    "Grindelwald private transfer",
    "Lauterbrunnen transfer"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_CH",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "De Conno Limousinen Service",
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: ["Zurich Airport", "Kloten", "Zurich", "Switzerland"],
  serviceType: [
    "Airport transfer",
    "Chauffeur service",
    "Private transport",
    "City transfer",
    "Long-distance transfer"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zurich",
    addressRegion: "Zurich",
    addressCountry: "CH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
