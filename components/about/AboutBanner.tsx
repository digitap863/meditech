"use client";

import Image from "next/image";

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

export default function AboutBanner() {
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
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Category */}
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#00e5ff] mb-2 sm:mb-3">
              ABOUT US
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold uppercase text-white leading-[1.25] sm:leading-[1.15] tracking-tight tracking-tight mb-3 sm:mb-5 drop-shadow-md">
              Specialist
              <br /> Healthcare
              <br />
              Infrastructure
              <br />
              Partner
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-md sm:max-w-lg font-normal leading-relaxed mb-6 sm:mb-8">
              Meditec Technical Services L.L.C delivers medical, dental and
              laboratory infrastructure systems from site survey and design
              coordination through supply, installation, testing, commissioning,
              documentation and handover.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom specialities strip */}
      <div className="relative z-10 w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-12">
        <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 text-center">
          {specialities.map((item, index) => (
            <div key={item} className="inline-flex items-center gap-1.5 sm:gap-3 md:gap-4">
              <span className="text-[9.5px] sm:text-xs font-medium text-[#48cae4] hover:text-white transition-colors tracking-wider uppercase cursor-default">
                {item}
              </span>
              {index < specialities.length - 1 && (
                <span className="text-white/30 text-[10px] sm:text-xs select-none" aria-hidden="true">
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