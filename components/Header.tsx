"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "หน้าแรก", path: "/" },
    { label: "สินค้า", path: "/products" },
    { label: "รีวิวลูกค้า", path: "/reviews" },
    { label: "บทความ", path: "/articles" },
    { label: "เกี่ยวกับเรา", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-white/10"
            : "bg-[#111111] py-3.5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Stitch Logo reproduction */}
            <Link href="/" className="group flex flex-col items-start focus:outline-none">
              <div className="flex items-center text-white font-extrabold text-2xl sm:text-3xl tracking-wider font-heading">
                <span>HAPPIN</span>
                <span className="e-bars" aria-hidden="true">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </span>
                <span>SS</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#888888] tracking-[0.45em] uppercase w-full text-right -mt-1 font-heading">
                BEDDING
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 py-1 ${
                      isActive ? "text-[#FF8E26]" : "text-gray-200 hover:text-[#FF8E26]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8E26] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setContactModalOpen(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#1a1a1a] hover:bg-[#FF8E26] text-white text-xs font-bold uppercase tracking-wider rounded border border-white/20 hover:border-[#FF8E26] transition-all duration-200 shadow-md cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>ติดต่อเรา</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => setContactModalOpen(true)}
                className="px-3.5 py-1.5 bg-[#FF8E26] text-white text-xs font-bold rounded hover:bg-[#E07A1B] transition-colors uppercase tracking-wider"
              >
                ติดต่อเรา
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161616] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? "bg-[#FF8E26]/15 text-[#FF8E26] border-l-4 border-[#FF8E26]"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#FF8E26] text-white font-bold rounded hover:bg-[#E07A1B] transition-colors text-center text-xs uppercase tracking-wider shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                <span>ติดต่อเรา (LINE / โทร)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
