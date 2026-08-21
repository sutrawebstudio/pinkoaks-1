import type { Metadata } from "next";
import { Lora, Poppins, Great_Vibes } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pink Oaks | Luxury 3 & 4 BHK Residences in Bani Park, Jaipur",
  description:
    "A Private Floor Above The City. Experience timeless architecture, modern indulgence, and 20+ world-class Vastu-compliant amenities in Bani Park, Jaipur. Possession June 2026.",
  keywords: [
    "Pink Oaks",
    "Pink Oaks Jaipur",
    "Luxury Apartments Bani Park",
    "3 BHK Jaipur",
    "4 BHK Jaipur",
    "Pink Oaks Bani Park",
    "Real Estate Jaipur",
  ],
  authors: [{ name: "Pink Oaks Properties" }],
  openGraph: {
    title: "Pink Oaks | Bani Park, Jaipur",
    description:
      "Luxury 3, 3+ Utility & 4 BHK Residences starting at INR 1.98 Cr onwards. Possession June 2026.",
    url: "https://pinkoaks.com",
    siteName: "Pink Oaks",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} ${greatVibes.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FBF8F4] text-[#241C20] selection:bg-[#C74B66] selection:text-[#FBF8F4] font-sans font-light">
        {children}
      </body>
    </html>
  );
}

