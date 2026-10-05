import React from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md card-hover flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <Link href={`/articles/${article.slug}`} className="block relative aspect-[16/10] bg-gray-100 overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-[#FF8E26] text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
            {article.categoryLabel}
          </span>
        </Link>

        {/* Info */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#FF8E26]" />
              {article.publishedAt}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF8E26]" />
              {article.readingTime}
            </span>
          </div>

          <Link href={`/articles/${article.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 font-heading leading-snug hover:text-[#FF8E26] transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-6 h-6 rounded-full bg-amber-100 text-[#FF8E26] flex items-center justify-center font-bold">
            <User className="w-3.5 h-3.5" />
          </div>
          <span className="truncate max-w-[120px]">{article.author}</span>
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8E26] hover:text-[#E07A1B] transition-colors group/btn"
        >
          <span>อ่านต่อ</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
