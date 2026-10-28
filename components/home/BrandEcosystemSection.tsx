"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export interface BrandCategoryItem {
  id: string;
  title: string;
  brands: string[];
}

export const brandCategoriesData: BrandCategoryItem[] = [
  {
    id: "mot-cleanroom",
    title: "MOT / Cleanroom Systems",
    brands: ["Infimed", "S-Cube", "Biox India", "Atena Lux"],
  },
  {
    id: "medical-gas",
    title: "Medical Gas Systems",
    brands: ["CPX Precision UK", "MMPL UK", "Busch Vacuum Solutions"],
  },
  {
    id: "bhu-pendants",
    title: "BHU & Pendants",
    brands: [
      "LM Medical Division",
      "Dodhys",
      "IHMS",
      "Amcare",
      "Zhenghua Medical",
    ],
  },
  {
    id: "nurse-call",
    title: "Nurse Call Systems",
    brands: ["Intercall", "Ackermann by Honeywell", "IndigoCare"],
  },
  {
    id: "lab-gas",
    title: "Laboratory Gas Systems",
    brands: ["Spectron", "GCE Group", "Rotarex", "Biox India"],
  },
  {
    id: "pneumatic-tube",
    title: "Pneumatic Tube Systems",
    brands: ["Sumetzberger", "Aerocom", "Telecom Tubes"],
  },
  {
    id: "specialist-detection",
    title: "Specialist & Detection Systems",
    brands: ["Crowcon", "Duerr Dental", "MTH Medical", "Atena Lux"],
  },
];

interface BrandEcosystemSectionProps {
  id?: string;
  className?: string;
  categories?: BrandCategoryItem[];
}

export default function BrandEcosystemSection({
  id = "associated-brands",
  className = "",
  categories = brandCategoriesData,
}: BrandEcosystemSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id={id}
      aria-labelledby="brand-ecosystem-heading"
      className={`relative w-full bg-gradient-to-b from-white via-[#F7FBFE] to-white py-7 sm:py-9 lg:py-10 font-noto overflow-hidden ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#00A3E0] mb-3 select-none">
            ASSOCIATED BRANDS
          </p>

          <h2
            id="brand-ecosystem-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold uppercase text-[#063A64] tracking-tight leading-tight md:leading-[1.2] mb-1"
          >
            BRAND AND PRODUCT ECOSYSTEM
          </h2>

          <p className="text-xs sm:text-sm  text-[#063A64]/75 max-w-xl mx-auto leading-relaxed font-normal">
            Meditec works with recognized manufacturers and system brands across
            medical gas, bed head units, pendants, nurse call, modular OT,
            laboratory gas, detection and specialist infrastructure systems.
          </p>
        </div>

        {/* Swiper Slider Track with Peeking Cards */}
        <div className="relative group/carousel -mx-2 sm:-mx-4 px-2 sm:px-4">
          {!isMounted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-11 pt-2">
              {categories.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[152px] sm:h-[160px] flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-[20px] bg-[#D6F4FC] border border-[#BDE8F5]/80 shadow-[0_2px_10px_rgba(6,58,100,0.04)] select-none"
                >
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0082BA] leading-snug mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#2C5270] leading-relaxed font-normal max-w-[90%]">
                    {item.brands.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              speed={750}
              grabCursor={true}
              autoplay={{
                delay: 3600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              spaceBetween={20}
              slidesPerView={1.25}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.8,
                  spaceBetween: 22,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 4.2,
                  spaceBetween: 24,
                },
              }}
              className="!pb-11 !pt-2 [&_.swiper-wrapper]:items-stretch"
            >
              {categories.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto flex">
                  <div className="group w-full h-[152px] sm:h-[160px] flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-[20px] bg-[#D6F4FC] border border-[#BDE8F5]/80 shadow-[0_2px_10px_rgba(6,58,100,0.04)] hover:bg-[#CBEEF9] hover:shadow-[0_8px_20px_rgba(0,163,224,0.14)] hover:-translate-y-1 transition-all duration-300 select-none">
                    {/* Category Title */}
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0082BA] leading-snug mb-2.5 group-hover:text-[#006EA0] transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Brands List */}
                    <p className="text-xs sm:text-[13px] text-[#2C5270] leading-relaxed font-normal max-w-[90%]">
                      {item.brands.join(" • ")}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}

