"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { Eye, MessageCircle, Check, Sparkles, ArrowRight } from "lucide-react";
import LightboxModal from "./LightboxModal";
import ContactModal from "./ContactModal";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  const images = product.images && product.images.length > 0
    ? product.images
    : ["/images/hero-bed.jpg"];

  const primaryImage = images[0];

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg card-hover flex flex-col justify-between group">
        <div>
          {/* Product Image Container */}
          <Link href={`/products/${product.slug}`} className="block relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer">
            <img
              src={primaryImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#FF8E26] text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {product.badge}
              </span>
            )}
            {product.thickness && (
              <span className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                {typeof product.thickness === "number" ? `หนา ${product.thickness} นิ้ว` : product.thickness}
              </span>
            )}

            {/* Quick View Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-gray-900 rounded-full font-bold text-xs hover:bg-white transition-colors shadow-lg flex items-center gap-2">
                <span>ดูรายละเอียดสินค้า</span>
                <ArrowRight className="w-4 h-4 text-[#FF8E26]" />
              </span>
            </div>
          </Link>

          {/* Product Details Content */}
          <div className="p-6 space-y-4">
            <div>
              <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <Link href={`/products/${product.slug}`} className="block">
                <h3 className="text-xl font-bold text-gray-900 font-heading mt-0.5 leading-snug hover:text-[#FF8E26] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
            </div>

            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Highlights bullet points */}
            {product.features && product.features.length > 0 && (
              <ul className="space-y-1.5 pt-1 border-t border-gray-100">
                {product.features.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                    <Check className="w-4 h-4 text-[#FF8E26] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Pricing Section */}
            <div className="bg-amber-50/60 p-3.5 rounded-2xl border border-amber-100/60 mt-3 flex items-center justify-between">
              <div>
                <span className="block text-[11px] text-gray-500 font-medium">ราคาเริ่มต้นเพียง</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-[#FF8E26] font-heading">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="text-xs font-bold text-gray-900 hover:text-[#FF8E26] flex items-center gap-1 transition-colors"
              >
                <span>ดูรายละเอียด</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
          <Link
            href={`/products/${product.slug}`}
            className="w-full py-2.5 px-3 bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-4 h-4 text-gray-500" />
            <span>รายละเอียด</span>
          </Link>
          <button
            onClick={() => setContactOpen(true)}
            className="w-full py-2.5 px-3 bg-[#FF8E26] text-white hover:bg-[#E07A1B] font-bold rounded-2xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md hover:shadow-orange-500/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>สอบถามซ้อเป้</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={(idx) => setActiveImageIndex(idx)}
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
