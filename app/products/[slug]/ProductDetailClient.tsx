"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import LightboxModal from "@/components/LightboxModal";
import ContactModal from "@/components/ContactModal";
import {
  Sparkles,
  Check,
  ShieldCheck,
  Truck,
  MessageCircle,
  PhoneCall,
  Eye,
  ChevronRight,
  Award,
  Layers,
  Info
} from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const images = product.images && product.images.length > 0 ? product.images : ["/images/hero-bed.jpg"];
  const currentImage = images[selectedImageIndex] || images[0];

  const currentPrice = product.pricesBySize && product.pricesBySize[selectedSizeIndex]
    ? product.pricesBySize[selectedSizeIndex].price
    : product.price;

  const currentOriginalPrice = product.pricesBySize && product.pricesBySize[selectedSizeIndex]
    ? product.pricesBySize[selectedSizeIndex].originalPrice
    : product.originalPrice;

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="bg-[#FCFBF8] border-b border-gray-100 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#FF8E26] transition-colors">
              หน้าแรก
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href="/products" className="hover:text-[#FF8E26] transition-colors">
              สินค้าทั้งหมด
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero Details (Left Gallery + Right Purchase Info) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* LEFT: Product Photography & Thumbnail Gallery */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Image Frame */}
              <div 
                className="relative aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-md group cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.badge && (
                  <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#FF8E26] text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxOpen(true);
                  }}
                  className="absolute bottom-4 right-4 px-3.5 py-2 bg-black/70 backdrop-blur-md text-white rounded-full text-xs font-semibold hover:bg-black transition-colors flex items-center gap-2 border border-white/20 shadow-lg"
                >
                  <Eye className="w-4 h-4 text-[#FF8E26]" />
                  <span>ขยายภาพ ({selectedImageIndex + 1}/{images.length})</span>
                </button>
              </div>

              {/* Thumbnails list */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                        idx === selectedImageIndex
                          ? "border-[#FF8E26] scale-105 shadow-md"
                          : "border-gray-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Product Buying Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-amber-50 text-[#FF8E26] text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200/50">
                  {product.categoryLabel}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-heading leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Pricing Box */}
              <div className="bg-[#FCFBF8] p-5 rounded-2xl border border-amber-200/60 space-y-2">
                <span className="text-xs text-gray-500 font-medium">ราคาโปรโมชั่นส่งตรงจากโรงงาน:</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF8E26] font-heading">
                    {currentPrice}
                  </span>
                  {currentOriginalPrice && (
                    <span className="text-base text-gray-400 line-through">
                      {currentOriginalPrice}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-gray-500 italic">
                  *ราคารวมภาษีมูลค่าเพิ่มและจัดส่งฟรีทั่วประเทศไทย
                </p>
              </div>

              {/* Size Selection (If available) */}
              {product.pricesBySize && product.pricesBySize.length > 0 && (
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    เลือกขนาดสินค้า (Size Option):
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {product.pricesBySize.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                          idx === selectedSizeIndex
                            ? "border-[#FF8E26] bg-amber-50/80 text-gray-900 font-bold shadow-xs"
                            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        <span className="block text-xs font-semibold">{item.size}</span>
                        <span className="block text-xs font-extrabold text-[#FF8E26] mt-0.5">{item.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Key Features Quick List */}
              <div className="space-y-2 border-t border-b border-gray-100 py-4">
                <span className="block text-xs font-bold text-gray-900 uppercase tracking-wider">
                  จุดเด่นสำคัญ:
                </span>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-[#FF8E26] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary & Secondary CTA Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://line.me/R/oaMessage/@happinessbedding/?สนใจสอบถาม_${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2.5 text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>สอบถามสินค้า (ทาง LINE)</span>
                </a>

                <button
                  onClick={() => setContactOpen(true)}
                  className="w-full py-3.5 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2.5 text-sm cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#FF8E26]" />
                  <span>ติดต่อเรา (ฝากเบอร์โทรกลับ)</span>
                </button>
              </div>

              {/* Trust Guarantees */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-gray-600">
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl">
                  <Truck className="w-4 h-4 text-[#FF8E26]" />
                  <span>จัดส่งฟรีทั่วไทย</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-[#FF8E26]" />
                  <span>{product.warranty}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DETAILED INFORMATION SECTIONS */}
      <section className="py-16 bg-[#FCFBF8] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section 1: รายละเอียดสินค้า */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-[#FF8E26] font-bold text-xs uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>1. รายละเอียดสินค้า (Product Story & Concept)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
              เกี่ยวกับ {product.name}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Section 2: จุดเด่นของสินค้า */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                2. Key Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                จุดเด่นของสินค้า
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center font-bold flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">คุณสมบัติเด่นที่ {idx + 1}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: สเปกและวัสดุ */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-md space-y-6">
            <div className="flex items-center gap-2 text-[#FF8E26] font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>3. สเปกและวัสดุ (Technical Specifications)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
              รายละเอียดทางเทคนิค
            </h2>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-4 text-sm bg-white hover:bg-amber-50/30 transition-colors">
                  <span className="sm:col-span-4 font-bold text-gray-900">{spec.label}</span>
                  <span className="sm:col-span-8 text-gray-600 mt-1 sm:mt-0">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: การรับประกัน */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#FF8E26] font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>4. การรับประกันและบริการหลังการขาย</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                {product.warranty}
              </h3>
              <p className="text-gray-600 text-sm">
                ดูแลหลังการขายโดยตรงโดยซ้อเป้ และทีมงานโรงงาน Happiness Bedding อยุธยา
              </p>
            </div>
            <button
              onClick={() => setContactOpen(true)}
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-2xl text-xs uppercase tracking-wider hover:bg-black transition-colors whitespace-nowrap shadow-md"
            >
              สอบถามเงื่อนไขประกัน
            </button>
          </div>

          {/* Section 5: สินค้าที่คุณอาจสนใจ */}
          {relatedProducts.length > 0 && (
            <div className="space-y-8 pt-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                  5. Recommendations
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                  สินค้าที่คุณอาจสนใจ
                </h2>
                <p className="text-gray-600 text-sm">
                  สินค้าคุณภาพในหมวดหมู่เดียวกันที่ออกแบบเพื่อการพักผ่อนที่ดีที่สุด
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={images}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(idx) => setSelectedImageIndex(idx)}
        title={product.name}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
