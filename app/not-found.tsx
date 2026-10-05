import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import { Home, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "ไม่พบหน้าเว็บ | Happiness Bedding",
  description: "ขออภัย ไม่พบหน้าที่คุณกำลังค้นหาใน Happiness Bedding",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto shadow-inner border border-amber-100">
            <span className="text-4xl font-black font-heading">404</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
              ไม่พบหน้าที่คุณกำลังค้นหา
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              หน้าเว็บที่คุณต้องการเข้าถึงอาจถูกย้าย ลบออก หรือพิมพ์ที่อยู่ URL ไม่ถูกต้อง
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-2xl transition-all shadow-md text-sm"
            >
              <Home className="w-4 h-4" />
              <span>กลับหน้าแรก</span>
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-2xl transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ดูสินค้าทั้งหมด</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
