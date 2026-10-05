import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import FloatingContactBar from "@/components/FloatingContactBar";
import { getArticleBySlug, getRelatedArticles, ARTICLES_DATA } from "@/data/articles";
import { Calendar, Clock, User, ChevronRight, BookOpen, Quote, AlertCircle, ArrowRight } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "ไม่พบบทความ | Happiness Bedding",
    };
  }

  return {
    title: `${article.title} | Happiness Bedding`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Happiness Bedding`,
      description: article.excerpt,
      images: [article.coverImage],
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        {/* Breadcrumb Bar */}
        <div className="bg-[#FCFBF8] border-b border-gray-100 py-3.5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-[#FF8E26] transition-colors">
                หน้าแรก
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <Link href="/articles" className="hover:text-[#FF8E26] transition-colors">
                บทความทั้งหมด
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-none">
                {article.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Magazine Style Article Header */}
        <article className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            
            {/* Top Info */}
            <div className="space-y-4 text-center">
              <span className="inline-block px-4 py-1.5 bg-amber-50 text-[#FF8E26] text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200/60">
                {article.categoryLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading leading-tight max-w-3xl mx-auto">
                {article.title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pt-2 border-t border-b border-gray-100 py-3 max-w-md mx-auto">
                <span className="flex items-center gap-1.5 font-semibold text-gray-800">
                  <User className="w-3.5 h-3.5 text-[#FF8E26]" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FF8E26]" />
                  {article.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#FF8E26]" />
                  {article.readingTime}
                </span>
              </div>
            </div>

            {/* Large Cover Image */}
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 my-8">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content Container (Recommended Width: 720px - 800px / max-w-3xl) */}
            <div className="max-w-3xl mx-auto space-y-6 text-gray-800 text-base sm:text-lg leading-[1.85] font-normal">
              {article.content.map((block, idx) => {
                switch (block.type) {
                  case "heading":
                    return (
                      <h2
                        key={idx}
                        className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading pt-6 pb-1 border-b border-gray-100"
                      >
                        {block.text}
                      </h2>
                    );
                  case "paragraph":
                    return (
                      <p key={idx} className="text-gray-700 leading-[1.85]">
                        {block.text}
                      </p>
                    );
                  case "list":
                    return (
                      <ul key={idx} className="space-y-2.5 my-4 bg-amber-50/40 p-6 rounded-2xl border border-amber-100">
                        {block.items?.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
                            <span className="w-2 h-2 rounded-full bg-[#FF8E26] mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  case "quote":
                    return (
                      <blockquote key={idx} className="my-8 p-6 sm:p-8 bg-[#FCFBF8] rounded-3xl border-l-4 border-[#FF8E26] shadow-sm relative">
                        <Quote className="w-10 h-10 text-amber-200 absolute top-4 right-4 opacity-50" />
                        <p className="text-gray-900 italic font-medium text-lg sm:text-xl leading-relaxed relative z-10">
                          "{block.text}"
                        </p>
                        {block.author && (
                          <cite className="block text-xs font-bold text-[#FF8E26] uppercase tracking-wider mt-3 not-italic">
                            — {block.author}
                          </cite>
                        )}
                      </blockquote>
                    );
                  case "callout":
                    return (
                      <div key={idx} className="my-6 p-5 sm:p-6 bg-amber-50 rounded-2xl border border-amber-200/80 flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-[#FF8E26] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                          {block.text}
                        </p>
                      </div>
                    );
                  case "image":
                    return (
                      <figure key={idx} className="my-8 space-y-2">
                        <img src={block.url} alt={block.caption || "Article photo"} className="w-full rounded-2xl shadow-md" />
                        {block.caption && (
                          <figcaption className="text-center text-xs text-gray-500 italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  case "divider":
                    return <hr key={idx} className="my-8 border-gray-100" />;
                  default:
                    return null;
                }
              })}
            </div>

            {/* Author Signoff Box */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-gray-100">
              <div className="bg-[#FCFBF8] p-6 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#FF8E26] text-white flex items-center justify-center font-extrabold text-2xl font-heading flex-shrink-0 shadow-md">
                  SP
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-gray-900 text-base font-heading">
                    {article.author}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    ผู้เชี่ยวชาญด้านสรีระที่นอนและเจ้าของโรงงาน Happiness Bedding ประสบการณ์กว่า 20 ปี มุ่งมั่นช่วยคนไทยแก้ปัญหาปวดหลังด้วยที่นอนตรงจากผู้ผลิต
                  </p>
                </div>
              </div>
            </div>

          </div>
        </article>

        {/* RELATED ARTICLES SECTION */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-[#FCFBF8] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-wider">
                  More Articles
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-heading">
                  บทความที่คุณอาจสนใจ
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relArt) => (
                  <ArticleCard key={relArt.id} article={relArt} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PRE-FOOTER CTA SECTION */}
        <section className="py-16 bg-[#111111] text-white text-center border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
              <BookOpen className="w-4 h-4" />
              <span>Happiness Bedding Sleep Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              เลือกการพักผ่อน <br />
              <span className="text-[#FF8E26]">ที่เหมาะกับคุณ</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
              ค้นพบที่นอนเพื่อสุขภาพ โซฟาปรับไฟฟ้า และเตียงดีไซน์ที่ออกแบบมาเพื่อสรีระของคุณโดยเฉพาะ
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-2xl transition-all shadow-lg text-base group"
              >
                <span>ดูสินค้าของเรา</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
