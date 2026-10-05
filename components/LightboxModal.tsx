"use client";

import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  title?: string;
}

export default function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onSelectIndex,
  title,
}: LightboxModalProps) {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onSelectIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    onSelectIndex(nextIndex);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-black/90 rounded-3xl p-4 sm:p-6 flex flex-col items-center border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="w-full flex items-center justify-between pb-4 text-white border-b border-white/10">
          <div>
            <h4 className="text-lg font-bold font-heading">{title || "Happiness Bedding Gallery"}</h4>
            <span className="text-xs text-gray-400">
              รูปที่ {currentIndex + 1} จาก {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Container */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center py-4 my-2">
          <img
            src={currentImage}
            alt={title || "Product Image"}
            className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F57C3D] transition-colors border border-white/10 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#F57C3D] transition-colors border border-white/10 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Carousel */}
        {images.length > 1 && (
          <div className="w-full flex items-center justify-center gap-3 overflow-x-auto pt-3 border-t border-white/10 no-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                  idx === currentIndex
                    ? "border-[#F57C3D] scale-105 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
