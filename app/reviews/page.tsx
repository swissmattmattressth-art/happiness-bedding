import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewsClient from "./ReviewsClient";
import ContactCTA from "@/components/ContactCTA";
import FloatingContactBar from "@/components/FloatingContactBar";

export const metadata = {
  title: "รีวิวลูกค้า | Happiness Bedding",
  description: "อ่านรีวิวและความประทับใจจากลูกค้าผู้ใช้งานจริงของ Happiness Bedding การันตีความพึงพอใจด้วยคะแนนเฉลี่ย 4.9 ดาว",
  openGraph: {
    title: "รีวิวลูกค้า | Happiness Bedding",
    description: "อ่านรีวิวและความประทับใจจากลูกค้าผู้ใช้งานจริงของ Happiness Bedding การันตีความพึงพอใจด้วยคะแนนเฉลี่ย 4.9 ดาว",
    images: ["/images/hero-bed.jpg"],
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        <ReviewsClient />
        <ContactCTA />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
