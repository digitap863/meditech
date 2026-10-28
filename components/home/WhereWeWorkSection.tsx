"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface WorkSpaceItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

const TEMP_IMAGE = "/images/home/where-we-work-temp.jpg";

export const workSpacesData: WorkSpaceItem[] = [
  {
    id: "hospitals",
    title: "HOSPITALS",
    image: TEMP_IMAGE,
    href: "/projects#hospitals",
  },
  {
    id: "medical-centres",
    title: "MEDICAL CENTRES AND CLINIC",
    image: TEMP_IMAGE,
    href: "/projects#clinics",
  },
  {
    id: "laboratories",
    title: "LABORATORIES",
    image: TEMP_IMAGE,
    href: "/projects#laboratories",
  },
  {
    id: "plant-rooms",
    title: "INDUSTRIAL & PLANT ROOMS",
    image: TEMP_IMAGE,
    href: "/projects#plant-rooms",
  },
  {
    id: "specialist-renovation",
    title: "SPECIALIST RENOVATION",
    image: TEMP_IMAGE,
    href: "/projects#renovation",
  },
  {
    id: "operating-theatres",
    title: "OPERATING THEATRES",
    image: TEMP_IMAGE,
    href: "/projects#operating-theatres",
  },
  {
    id: "dental-practices",
    title: "DENTAL PRACTICES",
    image: TEMP_IMAGE,
    href: "/projects#dental",
  },
  {
    id: "rehab-daycare",
    title: "DAY SURGERY & REHAB",
    image: TEMP_IMAGE,
    href: "/projects#day-surgery",
  },
];

interface WhereWeWorkSectionProps {
  id?: string;
  className?: string;
  spaces?: WorkSpaceItem[];
}

export default function WhereWeWorkSection({
  id = "where-we-work",
  className = "",
  spaces = workSpacesData,
}: WhereWeWorkSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id={id}
      aria-labelledby="where-we-work-heading"
      className={`relative w-full bg-gradient-to-b from-white via-[#F8FBFE] to-white py-7 sm:py-8 lg:py-10 font-noto overflow-hidden ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className=" mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#00A3E0] mb-3 select-none">
            WHERE WE WORK
          </p>
          <h2
            id="where-we-work-heading"
            className="text-2xl sm:text-3xl md:text-4xl  font-semibold uppercase text-[#063A64] tracking-tight leading-tight md:leading-[1.2]"
          >
            HEALTH CARE SPACES.
            <br />
            ENGINEERED FOR REAL WORLD ENVIRONMENTS
          </h2>
        </div>

        {/* Swiper Carousel Container */}
        <div className="relative group/carousel px-2 sm:px-4">
          {!isMounted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pb-12 pt-2">
              {spaces.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col w-full h-full select-none rounded-xl"
                >
                  <article className="w-full h-full flex flex-col bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_10px_rgba(6,58,100,0.05)] overflow-hidden">
                    <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 80vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="h-[76px] sm:h-[84px] px-3.5 sm:px-4 py-2 flex items-center justify-center bg-white border-t border-slate-100/90 shrink-0">
                      <h3 className="text-center text-[13px] sm:text-[14px] lg:text-[15px] font-bold uppercase text-[#063A64] tracking-wide leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <>
              {/* Custom Left Arrow Button */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => swiperRef.current?.slidePrev()}
                className="hidden md:flex absolute -left-2 lg:-left-4 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#063A64] border border-slate-200/90 shadow-md hover:bg-[#063A64] hover:text-white hover:border-[#063A64] items-center justify-center transition-all duration-300 opacity-80 group-hover/carousel:opacity-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0]"
              >
                <ChevronLeft className="w-5 h-5 -translate-x-0.5" />
              </button>

              {/* Custom Right Arrow Button */}
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => swiperRef.current?.slideNext()}
                className="hidden md:flex absolute -right-2 lg:-right-4 top-[40%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 text-[#063A64] border border-slate-200/90 shadow-md hover:bg-[#063A64] hover:text-white hover:border-[#063A64] items-center justify-center transition-all duration-300 opacity-80 group-hover/carousel:opacity-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0]"
              >
                <ChevronRight className="w-5 h-5 translate-x-0.5" />
              </button>

              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                speed={750}
                grabCursor={true}
                autoplay={{
                  delay: 3800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                spaceBetween={20}
                slidesPerView={1.2}
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
                    slidesPerView: 3.1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
                className="!pb-12 !pt-2 [&_.swiper-wrapper]:items-stretch"
              >
                {spaces.map((item) => (
                  <SwiperSlide key={item.id} className="!h-auto flex">
                    <Link
                      href={item.href}
                      className="group flex flex-col w-full h-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0] rounded-xl"
                    >
                      <article className="w-full h-full flex flex-col bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_10px_rgba(6,58,100,0.05)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(6,58,100,0.12)] hover:border-[#00A3E0]/50">
                        {/* Card Image */}
                        <div className="relative aspect-[16/11] w-full shrink-0 overflow-hidden bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 80vw"
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                          {/* Subtle hover gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#063A64]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>

                        {/* Card Title Box - fixed uniform height so 1-line and 2-line titles produce identical card height */}
                        <div className="h-[76px] sm:h-[84px] px-3.5 sm:px-4 py-2 flex items-center justify-center bg-white border-t border-slate-100/90 shrink-0">
                          <h3 className="text-center text-[13px] sm:text-[14px] lg:text-[15px] font-bold uppercase text-[#063A64] tracking-wide leading-snug line-clamp-2 group-hover:text-[#00A3E0] transition-colors duration-200">
                            {item.title}
                          </h3>
                        </div>
                      </article>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-[4px] border border-[#063A64] text-[#063A64] bg-white hover:bg-[#063A64] hover:text-white transition-all duration-300 font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:shadow-md"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
