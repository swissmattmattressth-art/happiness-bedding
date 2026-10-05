import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticlesClient from "./ArticlesClient";
import FloatingContactBar from "@/components/FloatingContactBar";

export const metadata = {
  title: "บทความ | Happiness Bedding",
  description: "รวมบทความ ความรู้ และคำแนะนำเรื่องการนอน เพื่อช่วยให้คุณเลือกสิ่งที่เหมาะกับการพักผ่อนมากขึ้นจาก Happiness Bedding",
  openGraph: {
    title: "บทความ | Happiness Bedding",
    description: "รวมบทความ ความรู้ และคำแนะนำเรื่องการนอน เพื่อช่วยให้คุณเลือกสิ่งที่เหมาะกับการพักผ่อนมากขึ้นจาก Happiness Bedding",
    images: ["/images/hero-bed.jpg"],
  },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        <ArticlesClient />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
