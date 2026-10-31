"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialities = [
  "MGPS",
  "BHU",
  "PENDANTS",
  "NURSE CALL",
  "MODULAR OT",
  "LAB GAS",
  "DENTAL",
  "PNEUMATIC TUBE",
  "SHIELDING",
  "SPECIALIST SYSTEMS",
];

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden font-[family-name:var(--font-noto-sans)] min-h-[calc(100dvh-250px)] sm:h-[calc(100dvh-125px)] flex flex-col justify-between py-6 sm:py-8 lg:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/home/Banner.png"
          alt="Modern surgical operating theatre and medical infrastructure"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Layer 2: LEFT blue (dense behind text, fades out by ~75%) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,86,179,0.96) 0%, rgba(0,98,190,0.88) 30%, rgba(0,110,210,0.50) 55%, rgba(0,110,210,0.12) 72%, transparent 85%)",
        }}
      />

      {/* Layer 3: RIGHT edge blue */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(270deg, rgba(0,80,170,0.75) 0%, rgba(0,90,185,0.40) 8%, rgba(0,90,185,0.12) 18%, transparent 30%)",
        }}
      />

      {/* Layer 4: BOTTOM blue blending into the ribbon */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,70,150,0.97) 0%, rgba(0,78,158,0.75) 10%, rgba(0,85,170,0.30) 22%, transparent 36%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center w-full py-4 sm:py-6 lg:py-0">
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl flex flex-col items-start text-left">
            {/* Category */}
            <p className="text-[11px] sm:text-xs md:text-sm font-normal uppercase tracking-[0.15em] text-[#00e5ff] mb-2.5 sm:mb-4">
              MEDICAL, DENTAL &amp; LABORATORY INFRASTRUCTURE SOLUTIONS
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-white leading-tight sm:leading-[1.15] tracking-tight mb-4 sm:mb-6 drop-shadow-md">
              Engineering
              <br />
              Healthcare
              <br />
              Environments
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-white/85 max-w-md sm:max-w-lg font-normal leading-relaxed mb-6 sm:mb-8">
              Specialist engineering, supply, installation, testing and
              commissioning for hospitals, clinics, laboratories and healthcare
              facilities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/#solutions"
                className="group inline-flex items-center justify-center gap-2 bg-[#00A3BF] hover:bg-[#008da6] text-white font-medium text-xs sm:text-sm px-6 sm:px-7 py-3 rounded shadow-lg shadow-teal-950/20 transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/90 hover:border-white bg-[#004e9a]/30 hover:bg-white hover:text-[#005ea6] text-white font-medium text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 rounded backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom specialities strip */}
      <div className="relative z-10 w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 md:gap-x-4 gap-y-1.5 sm:gap-y-2 text-center">
          {specialities.map((item, index) => (
            <div key={item} className="inline-flex items-center gap-2 sm:gap-3 md:gap-4">
              <span className="text-[10px] sm:text-xs font-medium text-[#48cae4] hover:text-white transition-colors tracking-wider uppercase cursor-default">
                {item}
              </span>
              {index < specialities.length - 1 && (
                <span className="hidden sm:inline text-white/30 text-xs select-none" aria-hidden="true">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}