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
    <section className="relative w-full overflow-hidden font-[family-name:var(--font-noto-sans)] min-h-[480px] sm:min-h-[560px] lg:h-[calc(100dvh-125px)] flex flex-col justify-between py-6 sm:py-8 lg:py-0">
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

      {/* Layer 2: LEFT blue (dense behind text, fades out by ~75% on desktop, full coverage on mobile) */}
      <div
        className="absolute inset-0 -z-10 block sm:hidden"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,80,170,0.95) 0%, rgba(0,92,185,0.92) 50%, rgba(0,70,150,0.97) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 hidden sm:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,86,179,0.96) 0%, rgba(0,98,190,0.88) 30%, rgba(0,110,210,0.50) 55%, rgba(0,110,210,0.12) 72%, transparent 85%)",
        }}
      />

      {/* Layer 3: RIGHT edge blue */}
      <div
        className="absolute inset-0 -z-10 hidden sm:block"
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
      <div className="relative z-10 flex-1 flex items-center w-full py-6 sm:py-8 lg:py-0">
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-8 lg:px-20">
          <div className="max-w-3xl flex flex-col items-start text-left">
            {/* Category */}
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#00e5ff] mb-2 sm:mb-3">
              ABOUT US
            </p>

            {/* Headline */}
            <h1 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl font-semibold uppercase text-white leading-[1.12] sm:leading-[1.2] md:leading-[1.25] tracking-tight mb-3 sm:mb-5 drop-shadow-md">
              Specialist Healthcare
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

            {/* Buttons */}
            {/* <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/#solutions"
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-[3px] border border-[#3fd0c4]/60 bg-[#0fa59f] px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_8px_20px_-8px_rgba(15,165,159,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12b8b1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <span className="relative z-10">Explore Our Solutions</span>
                <svg
                  viewBox="0 0 20 20"
                  className="relative z-10 h-4 w-0 -ml-2 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 10h12M11 5l5 5-5 5" />
                </svg>
                
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-all duration-700 group-hover:left-[150%]" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-white hover:border-white bg-[#004e9a]/30 hover:bg-white hover:text-[#005ea6] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-[3px] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                Start a Project
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom specialities strip */}
      <div className="relative z-10 w-full py-2.5 sm:py-4 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 text-center">
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