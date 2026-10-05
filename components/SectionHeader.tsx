import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlightedText,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center mx-auto";

  return (
    <div className={`max-w-3xl space-y-3 mb-12 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-block px-3.5 py-1 bg-amber-50 text-[#F57C3D] text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200/60">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333333] tracking-tight font-heading leading-tight">
        {title}{" "}
        {highlightedText && (
          <span className="text-[#F57C3D] inline-block">{highlightedText}</span>
        )}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
