"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, QrCode, ShieldCheck } from "lucide-react";
import { SITE_INFO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start">
              <div className="flex items-center text-white font-extrabold text-2xl tracking-wider font-heading">
                <span>HAPPIN</span>
                <span className="e-bars" aria-hidden="true">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
                <span>SS</span>
              </div>
              <span className="text-xs font-semibold text-gray-400 tracking-[0.45em] uppercase w-full text-right -mt-1 font-heading">
                BEDDING
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              โรงงานผลิตที่นอนเพื่อสุขภาพ โซฟาปรับไฟฟ้า และเตียงดีไซน์ โดยซ้อเป้ ประสบการณ์กว่า 20 ปี สั่งทำตามสรีระ แก้ปวดหลัง ปวดเอว จัดส่งฟรีทั่วไทย
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F57C3D] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>รับประกันโครงสร้างสูงสุด 15 ปี</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-bold font-heading uppercase tracking-wider">
              เมนูเว็บไซต์
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#F57C3D] transition-colors">
                  หน้าแรก (Home)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F57C3D] transition-colors">
                  แคตตาล็อกสินค้า (Products)
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#F57C3D] transition-colors">
                  รีวิวจากลูกค้าจริง (Reviews)
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#F57C3D] transition-colors">
                  บทความเรื่องการนอน (Articles)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F57C3D] transition-colors">
                  เรื่องราวจากซ้อเป้ (About Us)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white text-base font-bold font-heading uppercase tracking-wider">
              ติดต่อเรา (Contact Us)
            </h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F57C3D] flex-shrink-0 mt-1" />
                <span>{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F57C3D] flex-shrink-0" />
                <a href={`tel:${SITE_INFO.phone.replace(/-/g, "")}`} className="hover:text-white transition-colors">
                  {SITE_INFO.phone}, {SITE_INFO.secondaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F57C3D] flex-shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors">
                  {SITE_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* LINE QR Code Section */}
          <div className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 flex flex-col items-center text-center justify-center space-y-3">
            <div className="relative w-28 h-28 bg-white p-2 rounded-xl shadow-md">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://line.me/ti/p/~${SITE_INFO.lineId}`}
                alt="LINE QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                รับสิทธิพิเศษมากมาย
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                ผ่าน LINE {SITE_INFO.lineId}
              </p>
            </div>
            <a
              href={SITE_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-[#06C755] text-white text-xs font-bold rounded-xl hover:bg-[#05b34c] transition-colors"
            >
              เพิ่มเพื่อนทาง LINE
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Happiness Bedding. All Rights Reserved.</p>
          <p className="italic text-gray-400">
            "ลงทุนกับการนอน คือการลงทุนเพื่อสุขภาพ"
          </p>
        </div>
      </div>
    </footer>
  );
}
