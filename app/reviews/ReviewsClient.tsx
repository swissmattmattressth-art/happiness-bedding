"use client";

import React, { useState } from "react";
import LightboxModal from "@/components/LightboxModal";
import { REVIEWS_DATA, PHOTO_GALLERY_ITEMS, REVIEW_CATEGORIES } from "@/data/reviews";
import { CONTACT_INFO } from "@/config/contact";
import {
  Star,
  Quote,
  Award,
  Truck,
  ShieldCheck,
  UserCheck,
  Layers,
  MapPin,
  Camera,
  ExternalLink
} from "lucide-react";

export default function ReviewsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const filteredReviews = activeCategory === "all"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter((r) => r.customerTypeCategory === activeCategory);

  const featuredReviews = REVIEWS_DATA.filter((r) => r.featured);
  const galleryImages = PHOTO_GALLERY_ITEMS.map((item) => item.image);

  return (
    <>
      {/* Page Hero Banner */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-block px-3.5 py-1 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
            Happiness Bedding Testimonials
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            เสียงจากลูกค้าของเรา
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            ทุกความไว้วางใจ คือแรงบันดาลใจของ Happiness Bedding
          </p>
        </div>
      </section>

      {/* FEATURED REVIEWS EDITORIAL SECTION (Top 2-3 reviews) */}
      {featuredReviews.length > 0 && (
        <section className="py-16 bg-[#FCFBF8] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                Featured Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                เรื่องราวความประทับใจยอดเยี่ยม
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                >
                  <div className="sm:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-gray-100">
                    <img
                      src={rev.reviewImage || rev.customerImage || "/images/hero-bed.jpg"}
                      alt={rev.customerName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-[#FF8E26] text-white text-[10px] font-bold rounded-full shadow-xs uppercase">
                      {rev.customerType}
                    </span>
                  </div>

                  <div className="sm:col-span-7 space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-amber-100 absolute -top-3 -left-2 opacity-50" />
                      <p className="text-gray-800 text-sm leading-relaxed relative z-10 italic">
                        "{rev.reviewText}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm font-heading">{rev.customerName}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 text-[#FF8E26]" />
                          <span>{rev.location}</span>
                        </div>
                      </div>
                      {rev.productName && (
                        <span className="text-[11px] font-semibold text-[#FF8E26] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/50">
                          {rev.productName}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Review Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[65px] z-20 backdrop-blur-md bg-opacity-95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
            {REVIEW_CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? REVIEWS_DATA.length
                : REVIEWS_DATA.filter((r) => r.customerTypeCategory === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#FF8E26] text-white shadow-md shadow-orange-500/20 scale-102"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>{cat.name} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEW CARD GRID (3 cols desktop, 2 cols tablet, 1 col mobile) */}
      <section className="py-16 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md card-hover flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  {/* Customer header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-100 text-[#FF8E26] flex items-center justify-center font-bold text-sm font-heading overflow-hidden border border-amber-200">
                        {rev.customerImage ? (
                          <img src={rev.customerImage} alt={rev.customerName} className="w-full h-full object-cover" loading="lazy" />
                        ) : (
                          <span>{rev.customerName.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm font-heading leading-tight">{rev.customerName}</h4>
                        <span className="text-[11px] text-gray-500">{rev.location}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-50 text-[#FF8E26] text-[10px] font-bold rounded-full border border-amber-200/50">
                      {rev.customerType}
                    </span>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    "{rev.reviewText}"
                  </p>

                  {/* Optional Review Image */}
                  {rev.reviewImage && (
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xs">
                      <img src={rev.reviewImage} alt={rev.customerName} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="truncate max-w-[150px] font-medium text-gray-700">{rev.productName || "Happiness Bedding"}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO REVIEW GALLERY ("ภาพจากลูกค้าจริง") */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
              Photo Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              ภาพจากลูกค้าจริง
            </h2>
            <p className="text-gray-600 text-sm">
              คลิกชมภาพบรรยากาศห้องนอน เตียง และการจัดส่งที่นอนทั่วประเทศ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHOTO_GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveGalleryIndex(idx);
                  setLightboxOpen(true);
                }}
                className="group relative rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 card-hover aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#FF8E26] font-bold mb-1">
                    <Camera className="w-4 h-4" />
                    <span>{item.category} • {item.location}</span>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACEBOOK REVIEWS CTA SECTION */}
      <section className="py-20 bg-[#FCFBF8] border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1877F2] uppercase tracking-wider">
              Official Facebook Community
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              ดูรีวิวและผลงานเพิ่มเติม
            </h2>
          </div>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            ติดตามรีวิวจากลูกค้า ภาพส่งสินค้าจริง และผลงานของ Happiness Bedding ได้ทาง Facebook
          </p>

          <div className="pt-2">
            <a
              href={CONTACT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold rounded-2xl transition-all shadow-lg text-base cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>ดูเพิ่มเติมบน Facebook</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SECTION ("ความไว้วางใจที่เกิดขึ้น จากคุณภาพและการบริการ") */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
              Trust & Quality Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              ความไว้วางใจที่เกิดขึ้น <br />
              <span className="text-[#FF8E26]">จากคุณภาพและการบริการ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FCFBF8] p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base font-heading">1. คุณภาพสินค้า</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                คัดสรรวัสดุยางพาราแท้ฉีด 100% ควบคุมกระบวนการผลิตตรงจากโรงงาน
              </p>
            </div>

            <div className="bg-[#FCFBF8] p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                <UserCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base font-heading">2. การให้คำแนะนำ</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                ให้คำปรึกษาสรีระและปัญหาสุขภาพการนอนฟรีโดยตรงกับซ้อเป้
              </p>
            </div>

            <div className="bg-[#FCFBF8] p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base font-heading">3. บริการจัดส่ง</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                จัดส่งฟรีทั่วไทย พร้อมบริการยกสินค้าขึ้นห้องนอนโดยทีมงานมืออาชีพ
              </p>
            </div>

            <div className="bg-[#FCFBF8] p-6 rounded-3xl border border-gray-100 shadow-sm text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base font-heading">4. บริการหลังการขาย</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                รับประกันโครงสร้างสูงสุด 15 ปี ดูแลและตอบคำถามตลอดอายุการใช้งาน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Photo Gallery */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={activeGalleryIndex}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(idx) => setActiveGalleryIndex(idx)}
        title={PHOTO_GALLERY_ITEMS[activeGalleryIndex]?.title || "ภาพจากลูกค้าจริง"}
      />
    </>
  );
}
