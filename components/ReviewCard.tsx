import React from "react";
import { Review } from "@/data/content";
import { Star, MapPin, CheckCircle2, Quote } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md card-hover flex flex-col justify-between relative overflow-hidden">
      <div className="space-y-4">
        {/* Rating stars & verified badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>ลูกค้าซื้อจริง</span>
          </div>
        </div>

        {/* Comment quote */}
        <div className="relative pt-1">
          <Quote className="w-8 h-8 text-amber-100 absolute -top-3 -left-2 -z-0 opacity-70" />
          <p className="text-gray-700 text-sm leading-relaxed relative z-10 italic">
            "{review.comment}"
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-gray-900 text-base font-heading">
            {review.customer_name}
          </h4>
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-[#F57C3D]" />
            <span>{review.location}</span>
          </div>
        </div>
        {review.product_name && (
          <span className="text-xs bg-amber-50 text-[#F57C3D] px-2.5 py-1 rounded-full font-medium border border-amber-200/50">
            {review.product_name}
          </span>
        )}
      </div>
    </div>
  );
}
