import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/ui/CookieBanner";
import BackToTop from "@/components/ui/BackToTop";
import GoogleAnalytics from "@/components/ui/GoogleAnalytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3 Coiffeurs — Barbershop à Nanterre | Barbe & Cheveux",
  description:
    "Salon de coiffure et barbershop à Nanterre (92). Coupes homme à 12 €, barbe à 5 €. Ouvert 7j/7 de 9h à 20h30.",
  openGraph: {
    title: "3 Coiffeurs — Barbershop à Nanterre",
    description:
      "Salon de coiffure et barbershop à Nanterre (92). Coupes homme à 12 €, barbe à 5 €. Ouvert 7j/7 de 9h à 20h30.",
    images: [{ url: "/images/og/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
    locale: "fr_FR",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://3coiffeurs.fr"
  ),
};

const barberShopSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "3 Coiffeurs",
  description:
    "Salon de coiffure et barbershop à Nanterre. Coupes homme, coupe enfant, taille de barbe.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://3coiffeurs.fr",
  telephone: "+33766082702",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 Rue Henri Barbusse",
    addressLocality: "Nanterre",
    postalCode: "92000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8924,
    longitude: 2.2077,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:30",
    },
  ],
  priceRange: "€",
  sameAs: ["https://x.com/3Nanterre"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(barberShopSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
        <CookieBanner />
        <BackToTop />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
