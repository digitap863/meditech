"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// ============================================================================
// Design tokens (sampled from the reference image)
// ============================================================================
const CYAN = "#12C6F7"; // icon strokes + card titles
const CARD_BG = "#043A7F"; // used to mask lines behind icon badges

// ============================================================================
// Icons – thin line style, cyan, ~48px
// ============================================================================

type IconProps = { className?: string };

function CertifiedTeamIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Two heads on top */}
      <circle cx="16" cy="10" r="3.6" stroke={CYAN} strokeWidth="2" />
      <circle cx="29" cy="10" r="3.6" stroke={CYAN} strokeWidth="2" />
      {/* Bodies */}
      <path
        d="M8 22c0-3 2-5 5-5h6c3 0 5 2 5 5"
        stroke={CYAN}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 17h4c3 0 5 2 5 5"
        stroke={CYAN}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left side body outline */}
      <path
        d="M8 22v13c0 2 1.5 3.5 3.5 3.5H18"
        stroke={CYAN}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Plus badge */}
      <circle cx="33" cy="34" r="7.5" fill={CARD_BG} stroke={CYAN} strokeWidth="2.2" />
      <path
        d="M33 30v8M29 34h8"
        stroke={CYAN}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UaeCoverageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="22" cy="22" r="16" stroke={CYAN} strokeWidth="2.2" />
      <ellipse cx="22" cy="22" rx="7.5" ry="16" stroke={CYAN} strokeWidth="2" />
      <line x1="6" y1="22" x2="38" y2="22" stroke={CYAN} strokeWidth="2" />
      <path d="M9 13c8 3 20 3 26 0" stroke={CYAN} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="31" cy="27" r="1.8" fill={CYAN} />
      {/* Location ring */}
      <circle cx="37" cy="37" r="5.5" fill={CARD_BG} stroke={CYAN} strokeWidth="2.2" />
      <circle cx="37" cy="37" r="1.8" fill={CYAN} />
    </svg>
  );
}

function SpecialistExecutionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Top arrow */}
      <path
        d="M13 20a13 13 0 0 1 22-6"
        stroke={CYAN}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M36.5 7.5v7h-7"
        stroke={CYAN}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left arrow */}
      <path
        d="M9 26a13 13 0 0 0 11 13"
        stroke={CYAN}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M5 31l4-5 5 3"
        stroke={CYAN}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gear */}
      <circle cx="35" cy="34" r="5" fill={CARD_BG} stroke={CYAN} strokeWidth="2.2" />
      <circle cx="35" cy="34" r="1.8" fill={CYAN} />
      <path
        d="M35 26v3M35 39v3M27 34h3M40 34h3M29.5 28.5l2 2M38.5 37.5l2 2M29.5 39.5l2-2M38.5 30.5l2-2"
        stroke={CYAN}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EndToEndDeliveryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* Device */}
      <rect x="15" y="5" width="18" height="21" rx="5" stroke={CYAN} strokeWidth="2.2" />
      <rect x="21" y="11" width="6" height="5.5" rx="1.5" stroke={CYAN} strokeWidth="2" />
      {/* Hand */}
      <path
        d="M4 34h6.5l5 1.5h8c1.5 0 2.5 1 2.5 2s-1 2-2.5 2H17"
        stroke={CYAN}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 34l6.5-2.5c2-.8 4 0 6 .8l8 3 8-5c1.2-.8 2.5.6 1.6 1.7L34 43c-1 1.2-2.5 1.8-4 1.5L17 42H4"
        stroke={CYAN}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0 -3) scale(1 .92)"
      />
    </svg>
  );
}

// ============================================================================
// Data
// ============================================================================

interface FeatureCardItem {
  id: string;
  title: React.ReactNode;
  description: string;
  icon: React.ComponentType<IconProps>;
}

const featureCards: FeatureCardItem[] = [
  {
    id: "certified-team",
    title: <>Certified <br/>Team</>,
    description: "HTM 02-01 & ASSE Qualified",
    icon: CertifiedTeamIcon,
  },
  {
    id: "uae-coverage",
    title: "UAE-Wide Coverage",
    description: "Healthcare Projects Across The UAE",
    icon: UaeCoverageIcon,
  },
  {
    id: "specialist-execution",
    title: "Specialist Execution",
    description: "Medical, Dental & Laboratory Infrastructure",
    icon: SpecialistExecutionIcon,
  },
  {
    id: "end-to-end-delivery",
    title: "End-to-End Delivery",
    description: "Supply, Installation, Testing & Handover",
    icon: EndToEndDeliveryIcon,
  },
];

// ============================================================================
// Component
// ============================================================================

interface AboutSectionProps {
  id?: string;
  className?: string;
  bgImage?: string;
}

export default function AboutSection({
  id = "about",
  className = "",
  bgImage = "/images/home/about_section_bg.jpg",
}: AboutSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="about-section-heading"
      className={`relative isolate w-full overflow-hidden bg-[#0058C2] font-noto text-white py-14 lg:py-0 lg:min-h-[436px] lg:flex lg:items-center ${className}`}
    >
      {/* Background photo (only visible on the left, tinted blue) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[62%] -z-30">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          quality={90}
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover object-left"
        />
      </div>

      {/* Blue tint: translucent on the left, solid blue on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,88,194,0.84) 0%, rgba(0,88,194,0.88) 35%, rgba(0,88,194,0.97) 55%, #0058C2 64%, #0058C2 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:pl-[5.3%] lg:pr-[6.8%]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_476px] gap-8 sm:gap-10 lg:gap-[105px] items-center">
          {/* LEFT */}
          <div className="flex flex-col items-start text-left">
            <p className="text-xs font-normal uppercase leading-none text-[#12C6F7] mb-1.5">
              About Meditec
            </p>

            <h2
              id="about-section-heading"
              className="text-2xl sm:text-[30px] md:text-[35px] font-bold uppercase text-white leading-tight sm:leading-[39px] tracking-normal mb-3 sm:mb-3.5"
            >
              Engineering Healthcare
              <br />
              Environments.
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed sm:leading-[21px] font-normal mb-6 sm:mb-[34px]">
              Meditec Technical Services L.L.C delivers medical, dental and
              laboratory infrastructure systems from site survey and design
              coordination through supply, installation, testing, commissioning,
              documentation and handover.
            </p>

            <Link
              href="/aboutus"
              className="inline-flex items-center justify-center w-28 h-11 rounded-[3px] bg-[#0A9D93] hover:bg-[#088b82] text-white font-semibold text-xs uppercase transition-colors duration-200"
            >
              About Us
            </Link>
          </div>

          {/* RIGHT: 2x2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-[476px] lg:max-w-none">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="flex items-center min-h-[110px] sm:h-[118px] rounded-md pl-4 sm:pl-[24px] lg:pl-[30px] pr-3 sm:pr-4 py-3 sm:py-0"
                  style={{
                    background: `linear-gradient(180deg, #053B81 0%, ${CARD_BG} 100%)`,
                    border: "1px solid rgba(140, 185, 240, 0.4)",
                    boxShadow:
                      "0 3px 6px rgba(0, 20, 60, 0.25), inset 0 -1px 0 rgba(120, 170, 235, 0.25)",
                  }}
                >
                  <Icon className="w-10 h-10 sm:w-[52px] sm:h-[52px] shrink-0" />

                  <div className="flex-1 text-center pl-2">
                    <h3
                      className="text-sm sm:text-[15px] font-medium uppercase leading-snug sm:leading-[21px]"
                      style={{ color: CYAN }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white leading-snug sm:leading-[15px] mt-1.5 sm:mt-2 font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}