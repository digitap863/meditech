"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  href: string;
}

const DUMMY_IMAGE = "/images/home/where-we-work-temp.jpg";

export const featuredProjectsData: ProjectItem[] = [
  {
    id: "aster-hospital-1",
    title: "ASTER HOSPITAL",
    location: "Jumeirah, UAE",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#aster-hospital",
  },
  {
    id: "aster-hospital-2",
    title: "ASTER HOSPITAL",
    location: "Jumeirah, UAE",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#aster-hospital-2",
  },
  {
    id: "aster-hospital-3",
    title: "ASTER HOSPITAL",
    location: "Jumeirah, UAE",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#aster-hospital-3",
  },
  {
    id: "aster-hospital-4",
    title: "ASTER HOSPITAL",
    location: "Jumeirah, UAE",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#aster-hospital-4",
  },
  {
    id: "mediclinic-city",
    title: "MEDICLINIC CITY HOSPITAL",
    location: "Dubai Healthcare City, UAE",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#mediclinic",
  },
  {
    id: "burjeel-medical-city",
    title: "BURJEEL MEDICAL CITY",
    location: "MBZ City, Abu Dhabi",
    description: "Meditec Technical Services L.L.C Delivers Medical,",
    image: DUMMY_IMAGE,
    href: "/projects#burjeel",
  },
];

interface FeaturedProjectsSectionProps {
  id?: string;
  className?: string;
  projects?: ProjectItem[];
}

export default function FeaturedProjectsSection({
  id = "featured-projects",
  className = "",
  projects = featuredProjectsData,
}: FeaturedProjectsSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id={id}
      aria-labelledby="featured-projects-heading"
      className={`relative w-full bg-white py-7 sm:py-8 lg:py-10 font-noto overflow-hidden ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2
            id="featured-projects-heading"
            className="text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#063A64] tracking-wide"
          >
            FEATURED PROJECTS
          </h2>

          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-[3px] border border-[#063A64] text-[#063A64] bg-white hover:bg-[#063A64] hover:text-white transition-all duration-300 font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-xs hover:shadow-md"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Carousel / Grid Container */}
        <div className="relative group/carousel">
          {!isMounted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 pt-1">
              {projects.slice(0, 4).map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group flex flex-col w-full h-full select-none rounded-2xl"
                >
                  <article className="w-full h-full flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(6,58,100,0.04)] overflow-hidden">
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100/90 min-h-[120px] sm:min-h-[130px]">
                      <div>
                        <h3 className="text-[15px] sm:text-[16px] font-bold uppercase text-[#063A64] tracking-wide leading-snug truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
                          {project.location}
                        </p>
                      </div>
                      <div className="mt-3 pt-2.5 flex items-center justify-between gap-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 flex-1">
                          {project.description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[#063A64] shrink-0"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <Swiper
            modules={[Autoplay, Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={projects.length > 4}
            speed={750}
            grabCursor={true}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              480: {
                slidesPerView: 1.4,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 2.1,
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
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-10 !pt-1 [&_.swiper-wrapper]:items-stretch"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!h-auto flex">
                <Link
                  href={project.href}
                  className="group flex flex-col w-full h-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0] rounded-2xl"
                >
                  <article className="w-full h-full flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(6,58,100,0.04)] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(6,58,100,0.12)] hover:border-[#00A3E0]/50">
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#063A64]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Project Card Content - uniform height across all cards */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100/90 min-h-[120px] sm:min-h-[130px]">
                      <div>
                        {/* Title */}
                        <h3 className="text-[15px] sm:text-[16px] font-bold uppercase text-[#063A64] tracking-wide leading-snug group-hover:text-[#00A3E0] transition-colors duration-200 truncate">
                          {project.title}
                        </h3>

                        {/* Location */}
                        <p className="text-xs sm:text-[13px] text-slate-500 font-normal mt-0.5">
                          {project.location}
                        </p>
                      </div>

                      {/* Description & Circle Arrow Row */}
                      <div className="mt-3 pt-2.5 flex items-center justify-between gap-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 flex-1">
                          {project.description}
                        </p>

                        <div
                          aria-hidden="true"
                          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[#063A64] group-hover:border-[#00A3E0] group-hover:text-white group-hover:bg-[#00A3E0] transition-all duration-300 shrink-0"
                        >
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
