"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";
import ContactModal from "./ContactModal";

export default function FloatingContactBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Expanded compact options */}
        {expanded && (
          <div className="bg-[#1a1a1a]/95 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-2.5 animate-fade-in text-white text-xs w-48 mb-1">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 px-1">
              <span className="font-bold text-[#FF8E26] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                ช่องทางติดต่อ
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="text-gray-400 hover:text-white"
                aria-label="ปิดเมนูช่องทางติดต่อ"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <a
              href={CONTACT_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05b34c] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>แชท LINE</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/-/g, "")}`}
              className="flex items-center gap-2.5 px-3 py-2 bg-[#FF8E26] text-white font-bold rounded-xl hover:bg-[#E07A1B] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>โทร {CONTACT_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setExpanded(false);
                setModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              <span>ฝากข้อความติดต่อกลับ</span>
            </button>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="สอบถามข้อมูลที่นอนเพิ่มเติม"
          className="px-5 py-3.5 bg-[#FF8E26] text-white rounded-full flex items-center gap-2.5 shadow-2xl hover:bg-[#E07A1B] active:scale-95 transition-all duration-200 border-2 border-white/80 cursor-pointer font-bold text-sm tracking-wider uppercase group"
        >
          <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
          <span>สอบถาม</span>
        </button>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
