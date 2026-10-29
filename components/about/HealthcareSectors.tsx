"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SectorItem {
  id: string;
  title: string;
  image: string;
}

const DEFAULT_IMAGE = "/images/about/about-story.png";

const SECTORS: SectorItem[] = [
  {
    id: "medical-centres",
    title: "MEDICAL CENTRES",
    image: DEFAULT_IMAGE,
  },
  {
    id: "forensic-facilities",
    title: "FORENCIC FACILITIES",
    image: DEFAULT_IMAGE,
  },
  {
    id: "industrial-projects",
    title: "INDUSTRIAL PROJECTS",
    image: DEFAULT_IMAGE,
  },
  {
    id: "clinics",
    title: "CLINICS",
    image: DEFAULT_IMAGE,
  },
  {
    id: "universities",
    title: "UNIVERSITIES",
    image: DEFAULT_IMAGE,
  },
  {
    id: "laboratories",
    title: "LABORATORIES",
    image: DEFAULT_IMAGE,
  },
  {
    id: "hospitals",
    title: "HOSPITALS",
    image: DEFAULT_IMAGE,
  },
  {
    id: "operating-theatres",
    title: "OPERATING THEATRES",
    image: DEFAULT_IMAGE,
  },
];

export default function HealthcareSectors() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white py-10 sm:py-14 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Nav Controls */}
        <div className="relative mb-6 sm:mb-10 md:mb-12 text-center">
          <span className="block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0078BF]">
            OUR CORE MARKETS
          </span>
          <h2 className="mt-1.5 sm:mt-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold uppercase tracking-tight text-[#011540] leading-tight px-2">
            HEALTHCARE SECTORS WE SERVE
          </h2>

          {/* Navigation Arrows */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:absolute sm:right-0 sm:bottom-0 sm:mt-0">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#011540] shadow-xs transition-all duration-200 hover:border-[#0078BF] hover:bg-[#0078BF] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-[#011540] shadow-xs transition-all duration-200 hover:border-[#0078BF] hover:bg-[#0078BF] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel Container */}
        <div className="relative">
          {!isMounted ? (
            <div className="grid grid-cols-2 gap-3 pb-10 pt-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {SECTORS.slice(0, 6).map((sector) => (
                <div
                  key={sector.id}
                  className="flex w-full flex-col overflow-hidden rounded-md border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(1,21,64,0.04)]"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 18vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011540]/30 via-transparent to-transparent opacity-40" />
                  </div>
                  <div className="flex min-h-[52px] sm:min-h-[60px] items-center justify-center border-t border-[#EEF2F6] px-2 py-2.5 text-center sm:px-4 sm:py-4">
                    <h3 className="text-[11px] sm:text-[13px] md:text-[13.5px] font-semibold uppercase tracking-wider text-[#011540]">
                      {sector.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              speed={750}
              grabCursor={true}
              autoplay={{
                delay: 3200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              spaceBetween={12}
              slidesPerView={1.25}
              breakpoints={{
                320: {
                  slidesPerView: 1.25,
                  spaceBetween: 12,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 14,
                },
                640: {
                  slidesPerView: 2.75,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 18,
                },
                1024: {
                  slidesPerView: 4.5,
                  spaceBetween: 18,
                },
                1280: {
                  slidesPerView: 5.5,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              className="!pb-12 !pt-1"
            >
              {SECTORS.map((sector, index) => (
                <SwiperSlide key={`${sector.id}-${index}`} className="!h-auto flex">
                  <div className="group flex w-full flex-col overflow-hidden rounded-md border border-[#E2E8F0] bg-white shadow-[0_2px_8px_rgba(1,21,64,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#96D2F4] hover:shadow-[0_12px_28px_rgba(1,21,64,0.12)] cursor-pointer select-none">
                    {/* Image Container */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* Subtle bottom gradient tint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011540]/30 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-20" />
                    </div>

                    {/* Title Bar */}
                    <div className="flex min-h-[52px] sm:min-h-[60px] items-center justify-center border-t border-[#EEF2F6] px-2 py-2.5 text-center sm:px-4 sm:py-4">
                      <h3 className="text-[11px] sm:text-[13px] md:text-[13.5px] font-semibold uppercase tracking-wider text-[#011540] transition-colors duration-200 group-hover:text-[#0078BF]">
                        {sector.title}
                      </h3>
                    </div>
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
