"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Award, Truck } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 bg-white overflow-hidden">
        {/* Subtle right clip background matching Stitch */}
        <div 
          className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-amber-500/5 pointer-events-none -z-0"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-block px-5 py-2 bg-[#FF8E26] text-white text-xs font-bold rounded-full uppercase tracking-[3px] shadow-sm">
                Premium Quality
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] font-heading tracking-tight leading-[1.15]">
                ลงทุนกับการนอน <br />
                <span className="text-[#FF8E26] relative inline-block">
                  เพื่อสุขภาพที่ดีที่สุด
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FF8E26]/20 -z-10 rounded-full" />
                </span>
              </h1>

              <p className="text-[#555555] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-[1.8] font-normal">
                สัมผัสที่สุดของการพักผ่อนที่ออกแบบมาเพื่อสรีระของคุณโดยเฉพาะ ด้วยนวัตกรรมที่นอนที่ตอบโจทย์ทุกความต้องการ สั่งทำตรงจากโรงงาน โดยซ้อเป้
              </p>

              {/* Action Buttons matching Stitch */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto btn-stitch-primary flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>ชมสินค้าทั้งหมด</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full sm:w-auto btn-stitch-secondary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF8E26]" />
                  <span>ปรึกษาผู้เชี่ยวชาญ</span>
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-100 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF8E26] flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1a1a1a] font-heading">จัดส่งฟรีทั่วไทย</h4>
                    <p className="text-[11px] text-[#777777]">รวดเร็ว ทันใจ</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF8E26] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1a1a1a] font-heading">ประกัน 15 ปี</h4>
                    <p className="text-[11px] text-[#777777]">โครงสร้างพรีเมียม</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#FF8E26] flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1a1a1a] font-heading">ประสบการณ์ 20+ ปี</h4>
                    <p className="text-[11px] text-[#777777]">โดยซ้อเป้</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/images/hero-bed.jpg"
                  alt="Happiness Bedding Premium Mattress"
                  className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#FF8E26] flex items-center justify-center font-extrabold text-xl text-white font-heading">
                    20+
                  </div>
                  <div>
                    <p className="text-xs font-bold font-heading uppercase tracking-wider">ปีแห่งประสบการณ์</p>
                    <p className="text-xs text-gray-300">ดูแลสุขภาพการนอนคนไทย</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
