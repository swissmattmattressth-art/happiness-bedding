import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ContactCTA from "@/components/ContactCTA";
import FloatingContactBar from "@/components/FloatingContactBar";
import { CONTACT_INFO } from "@/config/contact";
import { Factory, HeartPulse, Award, ShieldCheck, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "เกี่ยวกับเรา | Happiness Bedding",
  description: "เรื่องราวของ Happiness Bedding โรงงานผลิตที่นอนเพื่อสุขภาพโดยซ้อเป้ ประสบการณ์บริหารงานกว่า 20 ปี ออกแบบเพื่อสรีระคนไทย แก้ปัญหาปวดหลังอย่างตรงจุด",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        {/* Page Hero Banner */}
        <section className="bg-[#111111] text-white py-16 sm:py-20 relative overflow-hidden border-b border-gray-800 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
            <span className="inline-block px-3.5 py-1 bg-amber-500/10 text-[#FF8E26] text-xs font-bold rounded-full border border-[#FF8E26]/20 uppercase tracking-widest">
              Know Our Story
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
              เบื้องหลังความสุข <span className="text-[#FF8E26]">แห่งการพักผ่อน</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              จุดเริ่มต้นของ Happiness Bedding และปณิธานในการผลิตที่นอนเพื่อสุขภาพที่ดีที่สุดสำหรับคนไทย
            </p>
          </div>
        </section>

        {/* Story Section - Sor Pae */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Owner Photo with Experience Badge */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#FF8E26] p-1.5 bg-white shadow-2xl group">
                  <img
                    src="/images/sor-pae.jpg"
                    alt="ซ้อเป้ Happiness Bedding"
                    className="w-full h-[420px] sm:h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-[#FF8E26] text-white p-6 rounded-3xl shadow-xl text-center space-y-1 border-4 border-white">
                    <span className="block text-4xl font-extrabold font-heading leading-none">
                      20+
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider block">
                      ปีแห่งประสบการณ์
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Owner Story Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-widest">
                    Happiness Bedding Founder
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading leading-tight">
                    เรื่องราวจาก <span className="text-[#FF8E26]">"ซ้อเป้"</span>
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                  <p>
                    จากประสบการณ์การบริหารโรงงานผลิตที่นอนมากว่า 20 ปี ซ้อเห็นปัญหาซ้ำๆ ของลูกค้าคือ{" "}
                    <strong className="text-gray-900 bg-amber-100/70 px-1.5 py-0.5 rounded">
                      "ซื้อที่นอนราคาแพงแต่กลับยังปวดหลัง"
                    </strong>{" "}
                    นั่นคือจุดเริ่มต้นของ Happiness Bedding ที่ซ้อตั้งใจสร้างขึ้นมา
                  </p>
                  <p>
                    เราไม่ได้ขายแค่ที่นอน แต่ซ้อตั้งใจช่วยให้คุณมีคุณภาพชีวิตที่ดีขึ้น ลดปัญหาปวดหลัง ปวดเอว ที่กวนใจมานาน โดยเฉพาะพี่ๆ เพื่อนๆ ในวัย 30-60 ปี ที่ต้องการการพักผ่อนที่มีคุณภาพจริงๆ
                  </p>
                </div>

                {/* Quote Box */}
                <div className="border-l-4 border-[#FF8E26] bg-amber-50/60 p-6 rounded-r-2xl text-gray-900 italic text-base sm:text-lg font-medium leading-relaxed">
                  "เพราะการลงทุนกับการนอน คือการลงทุนเพื่อสุขภาพที่คุ้มค่าที่สุด ซ้อดูแลทุกขั้นตอนเหมือนทำให้คนในครอบครัวใช้เอง ในราคาที่ทุกคนเข้าถึงได้จากโรงงานโดยตรงค่ะ"
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8E26]" />
                    <span>โรงงานผลิตเอง 100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8E26]" />
                    <span>ไม่ผ่านคนกลาง</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8E26]" />
                    <span>จัดส่งฟรีทั่วไทย</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3 Core Pillars Section */}
        <section className="py-20 bg-[#FCFBF8] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeader
              badge="Why Choose Us"
              title="3 เหตุผลที่ลูกค้าไว้วางใจ"
              highlightedText="Happiness Bedding"
              description="มาตรฐานระดับพรีเมียมจากผู้เชี่ยวชาญตัวจริง"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md text-center space-y-4 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                  <Factory className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">
                  มีโรงงานผลิตเอง
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  คุมคุณภาพได้ทุกขั้นตอน ตั้งแต่เลือกวัตถุดิบยางพารา การประกอบสปริง ไปจนถึงงานเย็บผ้าหุ้ม ปราศจากมาร์กอัปคนกลาง
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md text-center space-y-4 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">
                  ออกแบบตามสรีระ
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  เน้นแก้ปัญหาปวดหลัง ไม่ใช่แค่ความนุ่ม แต่ต้องพยุงแนวกระดูกสันหลังให้อยู่ในตำแหน่งสรีระธรรมชาติได้อย่างถูกต้อง
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md text-center space-y-4 card-hover">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#FF8E26] flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">
                  วัสดุเกรดพรีเมียม
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  คัดสรรยางพาราฉีดแท้ 100% สปริง Pocket Spring ความหนาแน่นสูง และผ้านุ่มป้องกันไรฝุ่น คุณภาพเทียบเท่าแบรนด์ชั้นนำ
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Location & Contact Box */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-[#FF8E26] uppercase tracking-widest flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Factory Location</span>
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading">
                  ที่ตั้งโรงงาน Happiness Bedding
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  พร้อมต้อนรับลูกค้าที่ต้องการทดลองนอนหรือปรึกษาเรื่องสเปกที่นอนโดยตรงกับซ้อเป้
                </p>
                <div className="space-y-3 pt-2 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FF8E26] flex-shrink-0 mt-0.5" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FF8E26] flex-shrink-0" />
                    <span>{CONTACT_INFO.phone}, {CONTACT_INFO.secondaryPhone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF8E26] flex-shrink-0" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FF8E26]/20 text-[#FF8E26] flex items-center justify-center">
                  <Factory className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-heading">จัดส่งฟรีทั่วประเทศไทย</h4>
                <p className="text-xs text-gray-400">
                  ไม่ว่าจะอยู่จังหวัดไหน ซ้อเป้จัดส่งตรงถึงหน้าบ้านพร้อมบริการยกเข้าห้องนอน
                </p>
                <a
                  href={CONTACT_INFO.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#FF8E26] hover:bg-[#E07A1B] text-white font-bold rounded-xl text-sm transition-colors shadow-md text-center"
                >
                  สอบถามเส้นทาง / นัดหมายเวลา
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reusable ContactCTA Component */}
        <ContactCTA />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
