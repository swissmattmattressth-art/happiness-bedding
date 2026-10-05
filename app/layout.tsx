import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { CONTACT_INFO } from "@/config/contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://happinessbedding.com"),
  title: "Happiness Bedding | เครื่องนอนเพื่อการพักผ่อนที่ดีกว่า",
  description:
    "Happiness Bedding ผลิตภัณฑ์ที่นอน เตียง หมอน ท็อปเปอร์ และเครื่องนอนคุณภาพ เพื่อการพักผ่อนที่สบายและลงตัวในทุกค่ำคืน",
  keywords: [
    "ที่นอนเพื่อสุขภาพ",
    "เครื่องนอนเพื่อการพักผ่อนที่ดีกว่า",
    "โรงงานที่นอน",
    "ที่นอนยางพารา",
    "Happiness Bedding",
    "ซ้อเป้",
    "ที่นอนสั่งทำ",
    "โซฟาปรับไฟฟ้า",
    "เตียงดีไซน์",
    "หมอนยางพารา",
    "ท็อปเปอร์ยางพารา"
  ],
  authors: [{ name: "ซ้อเป้ Happiness Bedding" }],
  openGraph: {
    title: "Happiness Bedding | เครื่องนอนเพื่อการพักผ่อนที่ดีกว่า",
    description:
      "Happiness Bedding ผลิตภัณฑ์ที่นอน เตียง หมอน ท็อปเปอร์ และเครื่องนอนคุณภาพ เพื่อการพักผ่อนที่สบายและลงตัวในทุกค่ำคืน",
    images: [{ url: "/images/hero-bed.jpg", width: 1200, height: 630, alt: "Happiness Bedding" }],
    type: "website",
    siteName: "Happiness Bedding",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anuphan:wght@300;400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Happiness Bedding",
            url: "https://happinessbedding.com",
            logo: "https://happinessbedding.com/images/hero-bed.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: CONTACT_INFO.phone,
              contactType: "customer service",
              areaServed: "TH",
              availableLanguage: ["Thai"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: CONTACT_INFO.address,
              addressCountry: "TH",
            },
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900 selection:bg-[#FF8E26] selection:text-white">
        {children}
      </body>
    </html>
  );
}
