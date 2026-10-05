"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS_DATA, CATEGORIES } from "@/data/products";
import { Layers, Bed, Sofa, BedDouble, Layers3, HeartPulse, Sparkles } from "lucide-react";

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = activeCategory === "all"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "mattress": return <Bed className="w-4 h-4" />;
      case "bed": return <BedDouble className="w-4 h-4" />;
      case "sofa": return <Sofa className="w-4 h-4" />;
      case "topper": return <Layers3 className="w-4 h-4" />;
      case "pillow": return <HeartPulse className="w-4 h-4" />;
      case "bedding": return <Sparkles className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Page Hero Banner */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-block px-3.5 py-1 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
            Happiness Bedding Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            แคตตาล็อกสินค้า (Product Catalog)
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            เลือกชมที่นอนเพื่อสุขภาพ เตียงดีไซน์ โซฟาปรับไฟฟ้า หมอน และเครื่องนอนที่ตอบโจทย์การพักผ่อนของคุณ
          </p>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="py-8 bg-[#FCFBF8] border-b border-gray-100 sticky top-[65px] z-20 backdrop-blur-md bg-opacity-95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? PRODUCTS_DATA.length
                : PRODUCTS_DATA.filter((p) => p.category === cat.id).length;
              
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
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            badge={
              activeCategory === "all"
                ? "All Collections"
                : CATEGORIES.find((c) => c.id === activeCategory)?.name || "Catalog"
            }
            title={
              activeCategory === "all"
                ? "รายการสินค้าทั้งหมด"
                : `หมวดหมู่ ${CATEGORIES.find((c) => c.id === activeCategory)?.name}`
            }
            highlightedText="Happiness Bedding"
            description="ราคาโปรโมชั่นพิเศษจากโรงงานโดยตรง สั่งทำขนาดพิเศษตามสรีระคุณได้"
          />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4">
              <p className="text-gray-500 text-base">ไม่พบสินค้าในหมวดหมู่นี้</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-2.5 bg-[#FF8E26] text-white text-xs font-bold rounded-xl"
              >
                ชมสินค้าทั้งหมด
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
