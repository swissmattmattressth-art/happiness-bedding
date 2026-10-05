"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_INFO } from "@/data/content";
import ContactModal from "./ContactModal";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "ปรึกษาปัญหาการนอนและเลือกที่นอนกับซ้อเป้",
  description = "โรงงานผลิตเองโดยตรง พร้อมให้คำแนะนำจัดส่งฟรีทั่วไทย รับประกันสูงสุด 15 ปี",
}: CTASectionProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 bg-[#111111] text-white overflow-hidden border-t border-b border-gray-800">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F57C3D]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-[#F57C3D] text-xs font-bold rounded-full border border-[#F57C3D]/20 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Happiness Bedding Direct Factory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            {title}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#06C755] hover:bg-[#05b34c] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-green-500/20 flex items-center justify-center gap-3 text-base group"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>คุยกับซ้อเป้ทาง LINE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-colors border border-white/20 flex items-center justify-center gap-3 text-base cursor-pointer"
            >
              <Phone className="w-5 h-5 text-[#F57C3D]" />
              <span>ฝากข้อมูลติดต่อกลับ</span>
            </button>
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
