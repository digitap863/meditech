"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  Clock3,
  CircleUserRound,
  ChevronRight,
} from "lucide-react";
import Button from "../common/Button";

export default function ProjectCTA() {
  return (
    <section id="contact" className="bg-white px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl">
        <div data-aos="zoom-in" className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-125 overflow-hidden rounded-2xl shadow-xl">
          {/* Background Image */}
          <Image
            src="/images/home/cta.jpg"
            alt=""
            fill
            sizes="(max-width: 1180px) 100vw, 1180px"
            className="object-cover"
          />

          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0078BF] via-[#0078BF]/40 to-[#0078BF]/20 opacity-90" />

          {/* Content */}
          <div className="relative z-10 flex min-h-[360px] sm:min-h-[440px] lg:min-h-125 gap-4 sm:gap-5 flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8 text-center">
            {/* Availability */}
            <div data-aos="fade-down" data-aos-delay="100" className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm text-white backdrop-blur-md">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#35D4E7] animate-pulse shrink-0" />
              <span>Available ~10AM to 08:30PM</span>
            </div>

            {/* Heading */}
            <h2 data-aos="fade-up" data-aos-delay="200" className="mt-1 sm:mt-3 max-w-[600px] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium uppercase leading-tight text-white">
              Let&apos;s Discuss Your
              <br />
              Next Project
            </h2>

            {/* Benefits */}
            <div data-aos="fade-up" data-aos-delay="300" className="mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-[16px] text-white">
                <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={1.5} />
                <span>Fast &amp; secure booking</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-[16px] text-white">
                <Clock3 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={1.5} />
                <span>Flexible time slots</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-[16px] text-white">
                <CircleUserRound className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" strokeWidth={1.5} />
                <span>In-person or virtual options</span>
              </div>
            </div>

            {/* Button */}
            <div data-aos="zoom-in" data-aos-delay="400" className="pt-2 sm:pt-4 w-full sm:w-auto flex justify-center">
              <Link href="/contact" className="w-full sm:w-auto flex justify-center">
                <Button variant="secondary" className="w-full sm:w-auto justify-center text-xs sm:text-sm py-2.5 sm:py-3 px-6 sm:px-8">Book An Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}