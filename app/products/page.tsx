import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsClient from "./ProductsClient";
import ContactCTA from "@/components/ContactCTA";
import FloatingContactBar from "@/components/FloatingContactBar";

export const metadata = {
  title: "สินค้า | Happiness Bedding",
  description: "เลือกชมที่นอนเพื่อสุขภาพ เตียงดีไซน์ โซฟาปรับไฟฟ้า หมอน และเครื่องนอนคุณภาพจาก Happiness Bedding",
  openGraph: {
    title: "สินค้า | Happiness Bedding",
    description: "เลือกชมที่นอนเพื่อสุขภาพ เตียงดีไซน์ โซฟาปรับไฟฟ้า หมอน และเครื่องนอนคุณภาพจาก Happiness Bedding",
    images: ["/images/hero-bed.jpg"],
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        <ProductsClient />
        <ContactCTA
          headline="ต้องการคำแนะนำหรือสั่งทำขนาดพิเศษ?"
          supportingText="ปรึกษาผู้เชี่ยวชาญการนอนโดยตรงกับซ้อเป้ได้ตลอด 24 ชั่วโมง"
        />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
