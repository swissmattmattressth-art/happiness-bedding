import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import ArticleCard from "@/components/ArticleCard";
import CTASection from "@/components/CTASection";
import FloatingContactBar from "@/components/FloatingContactBar";
import { PRODUCTS, REVIEWS, ARTICLES } from "@/data/content";
import { Truck, ShieldCheck, UserCheck, Award, ArrowRight, Bed, Sofa, BedDouble } from "lucide-react";

export const metadata = {
  title: "Happiness Bedding | ที่นอนเพื่อสุขภาพ สั่งทำตามสรีระ แก้ปวดหลัง โดยซ้อเป้",
  description: "โรงงานผลิตที่นอนเพื่อสุขภาพ Happiness Bedding โดยซ้อเป้ ประสบการณ์กว่า 20 ปี สั่งทำตามสรีระ แก้ปวดหลัง ปวดเอว จัดส่งฟรีทั่วไทย รับประกันคุณภาพระดับพรีเมียม",
};

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const featuredReviews = REVIEWS.slice(0, 3);
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Trust Bar */}
        <section className="py-10 bg-[#FCFBF8] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F57C3D] flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-heading">จัดส่งฟรีทั่วไทย</h4>
                  <p className="text-xs text-gray-500">รวดเร็ว ทันใจ ถึงหน้าบ้าน</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F57C3D] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-heading">รับประกันสูงสุด 15 ปี</h4>
                  <p className="text-xs text-gray-500">มั่นใจในคุณภาพการใช้งาน</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F57C3D] flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-heading">ที่ปรึกษาสรีระ</h4>
                  <p className="text-xs text-gray-500">ออกแบบเฉพาะคุณโดยซ้อเป้</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F57C3D] flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm font-heading">วัสดุเกรดพรีเมียม</h4>
                  <p className="text-xs text-gray-500">ยางพาราแท้และนวัตกรรมล่าสุด</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Product Categories"
              title="หมวดหมู่สินค้า"
              highlightedText="Happiness Bedding"
              description="เลือกชมสินค้าตามประเภทที่ต้องการ สั่งทำพิเศษตามสรีระเฉพาะบุคคลได้ตรงจุด"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1: Mattresses */}
              <Link
                href="/products#mattress"
                className="group bg-[#FCFBF8] p-8 rounded-3xl border border-gray-100 shadow-md card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F57C3D]/10 text-[#F57C3D] flex items-center justify-center group-hover:bg-[#F57C3D] group-hover:text-white transition-colors duration-300">
                    <Bed className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    ที่นอนเพื่อสุขภาพ
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    เสริมยางพาราแท้ 100% สั่งทำตามสรีระ ช่วยลดแรงกดทับ พยุงแนวกระดูกสันหลัง แก้ปวดหลังและปวดเอวอย่างได้ผล
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#F57C3D]">
                  <span>ดูสินค้าหมวดนี้</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Category 2: Sofas */}
              <Link
                href="/products#sofa"
                className="group bg-[#FCFBF8] p-8 rounded-3xl border border-gray-100 shadow-md card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F57C3D]/10 text-[#F57C3D] flex items-center justify-center group-hover:bg-[#F57C3D] group-hover:text-white transition-colors duration-300">
                    <Sofa className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    โซฟาปรับไฟฟ้า
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    โซฟาสั่งทำปรับเอนไฟฟ้า นุ่มสบาย หนังพรีเมียม สไตล์ Luxury มอบความผ่อนคลายระดับพรีเมียมในบ้านคุณ
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#F57C3D]">
                  <span>ดูสินค้าหมวดนี้</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Category 3: Beds */}
              <Link
                href="/products#bed"
                className="group bg-[#FCFBF8] p-8 rounded-3xl border border-gray-100 shadow-md card-hover flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#F57C3D]/10 text-[#F57C3D] flex items-center justify-center group-hover:bg-[#F57C3D] group-hover:text-white transition-colors duration-300">
                    <BedDouble className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 font-heading">
                    เตียงดีไซน์
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    เตียงนอนหรูหรา แข็งแรงทนทาน เลือกหัวเบาะและชนิดผ้าหุ้มได้ตามสไตล์ เข้ากับทุกห้องนอนได้อย่างสมบูรณ์แบบ
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#F57C3D]">
                  <span>ดูสินค้าหมวดนี้</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-[#F4F4F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Featured Products"
              title="สินค้าแนะนำ"
              highlightedText="ยอดนิยม"
              description="นวัตกรรมการนอนเพื่อสุขภาพ รองรับสรีระและกระดูกสันหลังได้อย่างดีเยี่ยม"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F57C3D] text-white font-bold rounded-2xl hover:bg-[#E0692B] transition-all shadow-lg hover:shadow-orange-500/20 text-base"
              >
                <span>ดูสินค้าทั้งหมดในแคตตาล็อก</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Customer Reviews"
              title="เสียงตอบรับจาก"
              highlightedText="ลูกค้าตัวจริง"
              description="ความประทับใจที่คุณวางใจได้ Happiness Bedding ดูแลการนอนของคนไทยมากว่า 20 ปี"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-colors text-sm"
              >
                <span>อ่านรีวิวทั้งหมด 500+ ท่าน</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Sleep Articles Highlights */}
        <section className="py-20 bg-[#FCFBF8] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Sleep & Health Knowledge"
              title="บทความน่ารู้เรื่อง"
              highlightedText="สุขภาพการนอน"
              description="เคล็ดลับการเลือกที่นอน การจัดท่านอน และการดูแลรักษาร่างกายจากซ้อเป้"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm shadow-xs"
              >
                <span>อ่านบทความทั้งหมด</span>
                <ArrowRight className="w-4 h-4 text-[#F57C3D]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Band */}
        <CTASection />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
