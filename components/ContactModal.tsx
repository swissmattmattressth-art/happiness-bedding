"use client";

import React, { useState, useEffect } from "react";
import { X, MessageCircle, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function ContactModal({ isOpen, onClose, defaultProduct }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: defaultProduct || "ที่นอนเพื่อสุขภาพ",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="ปิดหน้าต่างช่องทางติดต่อ"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6 text-center sm:text-left pr-8">
          <div className="inline-block px-3 py-1 bg-amber-50 text-[#FF8E26] text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
            Happiness Bedding Direct Contact
          </div>
          <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading">
            ปรึกษาปัญหาการนอน <span className="text-[#FF8E26]">กับซ้อเป้</span>
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            โรงงานผลิตเองโดยตรง พร้อมให้คำแนะนำจัดส่งฟรีทั่วไทย
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 font-heading">ส่งข้อมูลเรียบร้อยแล้วค่ะ</h4>
            <p className="text-gray-600 max-w-sm text-sm">
              ซ้อเป้และทีมงาน Happiness Bedding จะติดต่อกลับโดยเร็วที่สุดนะคะ
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Quick Contact Buttons (LINE, Phone, Facebook) */}
            <div className="space-y-2.5">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                เลือกช่องทางติดต่อด่วน:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={CONTACT_INFO.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-[#06C755] text-white rounded-2xl font-bold text-xs hover:bg-[#05b34c] transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>LINE {CONTACT_INFO.lineId}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/-/g, "")}`}
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-[#1a1a1a] text-white rounded-2xl font-bold text-xs hover:bg-black transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-[#FF8E26]" />
                  <span>โทร {CONTACT_INFO.phone}</span>
                </a>
                <a
                  href={CONTACT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-[#1877F2] text-white rounded-2xl font-bold text-xs hover:bg-[#166fe5] transition-all shadow-sm active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                หรือฝากข้อความให้ติดต่อกลับ
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  ชื่อผู้ติดต่อ *
                </label>
                <input
                  type="text"
                  required
                  placeholder="กรอกชื่อของคุณ"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8E26] text-sm bg-gray-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    เบอร์โทรศัพท์ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08X-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8E26] text-sm bg-gray-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    สนใจสินค้าหมวดไหน
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8E26] text-sm bg-gray-50/50 text-gray-800"
                  >
                    <option value="ที่นอนเพื่อสุขภาพ">ที่นอนเพื่อสุขภาพ (แก้ปวดหลัง)</option>
                    <option value="โซฟาปรับไฟฟ้า">โซฟาปรับไฟฟ้า (Monaco)</option>
                    <option value="เตียงดีไซน์">เตียงดีไซน์หรูหรา</option>
                    <option value="ท็อปเปอร์ยางพารา">ท็อปเปอร์ยางพาราแท้</option>
                    <option value="สั่งทำพิเศษตามสรีระ">สั่งทำพิเศษตามสรีระ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  รายละเอียดเพิ่มเติม (ถ้ามี)
                </label>
                <textarea
                  rows={3}
                  placeholder="เช่น ปัญหาสุขภาพปวดหลัง, ขนาดห้องนอน, หรือสอบถามโปรโมชั่น..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF8E26] text-sm bg-gray-50/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#FF8E26] text-white font-bold rounded-2xl hover:bg-[#E07A1B] transition-all shadow-lg hover:shadow-orange-500/20 active:scale-98 text-base cursor-pointer"
              >
                ส่งข้อมูลให้ซ้อเป้ติดต่อกลับ
              </button>
            </form>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 border-t border-gray-100 gap-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF8E26]" />
                <span>บางไทร จ.พระนครศรีอยุธยา</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#FF8E26]" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
