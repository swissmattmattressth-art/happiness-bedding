"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from "@/data/articles";
import { Layers, HeartPulse, Sparkles, BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";

export default function ArticlesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredArticles = activeCategory === "all"
    ? ARTICLES_DATA
    : ARTICLES_DATA.filter((a) => a.category === activeCategory);

  const featuredArticle = ARTICLES_DATA.find((a) => a.isFeatured) || ARTICLES_DATA[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "mattress-knowledge": return <BookOpen className="w-4 h-4" />;
      case "sleep-health": return <HeartPulse className="w-4 h-4" />;
      case "bedding-selection": return <Sparkles className="w-4 h-4" />;
      case "sleep-tips": return <Sparkles className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Page Hero Banner */}
      <section className="bg-[#111111] text-white py-16 sm:py-20 relative overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="inline-block px-3.5 py-1 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
            Sleep Knowledge & Wellness
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            เรื่องราวดี ๆ <br />
            <span className="text-[#FF8E26]">เพื่อการนอนที่ดีกว่า</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            รวมบทความ ความรู้ และคำแนะนำ เพื่อช่วยให้คุณเลือกสิ่งที่เหมาะกับการพักผ่อนมากขึ้น
          </p>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="py-8 bg-[#FCFBF8] border-b border-gray-100 sticky top-[65px] z-20 backdrop-blur-md bg-opacity-95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
            {ARTICLE_CATEGORIES.map((cat) => {
              const count = cat.id === "all"
                ? ARTICLES_DATA.length
                : ARTICLES_DATA.filter((a) => a.category === cat.id).length;

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

      {/* Articles Section Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* FEATURED ARTICLE HERO (Show when showing all) */}
          {activeCategory === "all" && featuredArticle && (
            <div className="bg-[#FCFBF8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Large Image */}
              <Link href={`/articles/${featuredArticle.slug}`} className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md group block">
                <img
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-[#FF8E26] text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                  Featured Article
                </span>
              </Link>

              {/* Right Article Information */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                    {featuredArticle.categoryLabel}
                  </span>
                  <Link href={`/articles/${featuredArticle.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading leading-tight hover:text-[#FF8E26] transition-colors">
                      {featuredArticle.title}
                    </h2>
                  </Link>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 pt-1 border-t border-gray-200/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF8E26]" />
                    {featuredArticle.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF8E26]" />
                    อ่านประมาณ {featuredArticle.readingTime}
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/articles/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-2xl transition-all shadow-md text-sm group"
                  >
                    <span>อ่านบทความ</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          )}

          {/* Article Grid Header */}
          <div className="space-y-3 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
              {activeCategory === "all" ? "All Articles" : ARTICLE_CATEGORIES.find(c => c.id === activeCategory)?.name}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 font-heading">
              คลังบทความน่ารู้
            </h2>
          </div>

          {/* Article Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4">
              <p className="text-gray-500 text-base">ไม่พบบทความในหมวดหมู่นี้</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="px-6 py-2.5 bg-[#FF8E26] text-white text-xs font-bold rounded-xl"
              >
                ชมบทความทั้งหมด
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Band */}
      <CTASection
        title="ปรึกษาปัญหาการนอนและเลือกที่นอนกับซ้อเป้"
        description="โรงงานผลิตเองโดยตรง พร้อมให้คำแนะนำจัดส่งฟรีทั่วไทย รับประกันสูงสุด 15 ปี"
      />
    </>
  );
}
