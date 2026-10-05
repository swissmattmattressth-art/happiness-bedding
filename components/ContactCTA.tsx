"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";
import ContactModal from "./ContactModal";

interface ContactCTAProps {
  headline?: string;
  supportingText?: string;
}

export default function ContactCTA({
  headline = "กำลังมองหาที่นอน ที่เหมาะกับคุณอยู่ใช่ไหม?",
  supportingText = "ให้ทีม Happiness Bedding ช่วยแนะนำสินค้าและรูปแบบการนอนที่เหมาะกับคุณ",
}: ContactCTAProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 bg-[#111111] text-white overflow-hidden border-t border-b border-gray-800">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF8E26]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Happiness Bedding Sleep Advisor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
            {headline}
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {supportingText}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2.5 text-base cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>พูดคุยกับเรา</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl transition-colors border border-white/20 flex items-center justify-center gap-2.5 text-base"
            >
              <PhoneCall className="w-5 h-5 text-[#FF8E26]" />
              <span>ดูสินค้า</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
