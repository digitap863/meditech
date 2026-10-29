"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Reveal: scroll-triggered fade + slide (left / right / up)           */
/* ------------------------------------------------------------------ */
const HIDDEN = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
} as const;

function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: keyof typeof HIDDEN;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${HIDDEN[from]} opacity-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100`
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Icons (inline SVG, colour = currentColor). Swap for your own assets */
/* ------------------------------------------------------------------ */
const svgBase = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const VisionIcon = ({ className = "" }) => (
  <svg {...svgBase} className={className}>
    <path d="M4 15V9a5 5 0 0 1 5-5h6M33 4h6a5 5 0 0 1 5 5v6M44 33v6a5 5 0 0 1-5 5h-6M15 44H9a5 5 0 0 1-5-5v-6" />
    <path d="M10 24s5.5-9 14-9 14 9 14 9-5.5 9-14 9-14-9-14-9Z" />
    <circle cx="24" cy="24" r="4.5" />
  </svg>
);

const MissionIcon = ({ className = "" }) => (
  <svg {...svgBase} className={className}>
    <circle cx="24" cy="24" r="16" />
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
    <path d="M24 2v6M24 40v6M2 24h6M40 24h6" />
  </svg>
);

/* Solid geometric glyphs for the 4 bottom cards */
const fillBase = { viewBox: "0 0 48 48", fill: "currentColor", "aria-hidden": true };

const GlyphHourglass = ({ className = "" }) => (
  <svg {...fillBase} className={className}>
    <path d="M7 5h34v6c-5 6-12 8-17 11-5-3-12-5-17-11V5Z" />
    <path d="M7 43V37c5-6 12-8 17-11 5 3 12 5 17 11v6H7Z" />
  </svg>
);

const GlyphStar = ({ className = "" }) => (
  <svg {...fillBase} className={className}>
    <path d="M24 2c1.5 11 9 19.500 22 22-13 2.500-20.500 11-22 22-1.500-11-9-19.500-22-22C15 21.500 22.500 13 24 2Z" />
  </svg>
);

const GlyphClover = ({ className = "" }) => (
  <svg viewBox="0 0 42 42" fill="currentColor" aria-hidden="true" className={className}>
    <path
      d="M10.65 0H0.150001V10.5C0.150001 15.847 4.14679 20.2606 9.31582 20.9161C4.07432 21.5044 8.86252e-07 25.9513 4.5897e-07 31.3501L0 41.8501H10.5C15.847 41.8501 20.2606 37.8531 20.9161 32.6842C21.5044 37.9258 25.9513 42 31.3501 42H41.8501V31.5C41.8501 26.153 37.8531 21.7394 32.6842 21.084C37.9258 20.4957 42 16.0487 42 10.65V0.15H31.5C26.153 0.149999 21.7394 4.14679 21.084 9.31582C20.4957 4.07432 16.0487 0 10.65 0Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const GlyphHalves = ({ className = "" }) => (
  <svg viewBox="0 0 42 42" fill="currentColor" aria-hidden="true" className={className}>
    <path
      d="M21 20.995C21.0027 9.3993 30.4037 1.01378e-06 42 0L42 42C30.4037 42 21.0027 32.6008 21 21.005C20.9973 32.6008 11.5962 42 0 42V1.83588e-06C11.5962 1.83588e-06 20.9973 9.3993 21 20.995Z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */
const PILLARS = [
  { title: "Certified Team", text: ["HTM 02-01 &", "ASSE Qualified"], Icon: GlyphHourglass },
  { title: "UAE-Wide Coverage", text: ["Healthcare Projects", "Across The UAE"], Icon: GlyphStar },
  { title: "Specialist Execution", text: ["Medical, Dental &", "Laboratory Infrastructure"], Icon: GlyphClover },
  { title: "End-to-End Delivery", text: ["Supply, Installation,", "Testing & Handover"], Icon: GlyphHalves },
];

/* shared glass-card look */
const glass =
  "rounded-lg border border-[#2f78d6]/60 bg-[#04408f]/80 shadow-[0_2px_0_rgba(80,150,240,0.35),0_18px_40px_-18px_rgba(0,20,80,0.6)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#4aa3ff] hover:bg-[#05479f]/90 hover:shadow-[0_22px_44px_-16px_rgba(0,160,255,0.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function WhyMeditecHero({
  bgImage = "/images/about/whyMeditech.png",
}: {
  bgImage?: string;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="why-meditech-hero"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#0a52c4] via-[#0a5ad2] to-[#0b62dc] px-4 py-10 sm:px-8 md:py-16 lg:px-14 text-white"
    >
      {/* Background photo on the left with blue overlay */}
      {bgImage && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] xl:w-[55%]">
            <Image
              src={bgImage}
              alt="Why Meditech Background"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover object-[center_35%] lg:object-[32%_45%] opacity-45 mix-blend-luminosity transition-transform duration-[9000ms] ease-out motion-reduce:transition-none ${
                mounted ? "scale-100" : "scale-105"
              }`}
            />
            {/* Blue tint and fade-out gradients to blend seamlessly with the section */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a52c4]/20 via-[#0a5ad2]/40 to-[#0a5ad2]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a52c4]/40 via-transparent to-[#0a52c4]/90" />
            <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-r from-transparent to-[#0a5ad2]" />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1180px]">
        {/* ---------------- Top: copy + vision/mission ---------------- */}
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left copy */}
          <div className="pt-0 lg:pt-8">
            <Reveal from="left">
              <span className="mb-2 block text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#22c7f2]">
                Why Meditec ?
              </span>
            </Reveal>
            <Reveal from="left" delay={100}>
              <h2 className="text-2xl sm:text-[30px] md:text-[32px] xl:text-[34px] font-semibold uppercase leading-tight sm:leading-[1.12]">
                Professional presentation builds technical trust
              </h2>
            </Reveal>
            <Reveal from="left" delay={200}>
              <p className="mt-3.5 sm:mt-4 max-w-[480px] text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.45] text-[#c9dcf6]">
                A clean company profile, quotation, website and handover package
                helps consultants and contractors see Meditec as dependable,
                standards-aware and organized before the first site visit.
              </p>
            </Reveal>
            <Reveal from="left" delay={300}>
              <a
                href="#services"
                className="group relative mt-6 sm:mt-9 inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-[3px] border border-[#3fd0c4]/60 bg-[#0fa59f] px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white shadow-[0_8px_20px_-8px_rgba(15,165,159,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#12b8b1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                <span className="relative z-10">Our Services</span>
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
                {/* shine sweep */}
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/25 transition-all duration-700 group-hover:left-[150%]" />
              </a>
            </Reveal>
          </div>

          {/* Right: vision + mission */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7">
            <Reveal from="right" delay={150}>
              <article className={`${glass} flex items-start gap-4 sm:gap-5 px-4 py-5 sm:px-6 sm:py-7`}>
                <VisionIcon className="h-9 w-9 sm:h-11 sm:w-12 shrink-0 text-[#1fb8d6]" />
                <div>
                  <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold leading-none">Vision</h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-[12.5px] leading-relaxed text-[#e3edfb]">
                    To create safer, smarter, and more reliable healthcare
                    environments through excellence in medical, dental, and
                    laboratory infrastructure solutions.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal from="right" delay={300}>
              <article className={`${glass} flex items-start gap-4 sm:gap-5 px-4 py-5 sm:px-6 sm:py-7`}>
                <MissionIcon className="h-9 w-9 sm:h-11 sm:w-12 shrink-0 text-[#1fb8d6]" />
                <div>
                  <h3 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold leading-none">Mission</h3>
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-[12.5px] leading-relaxed text-[#e3edfb]">
                    To deliver high-quality, standards-compliant healthcare
                    infrastructure through specialist expertise, innovative
                    engineering, and dependable end-to-end project execution —
                    supporting healthcare facilities in providing better patient
                    care.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>

        {/* ---------------- Bottom: 4 pillars ---------------- */}
        <ul className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:px-[3%]">
          {PILLARS.map(({ title, text, Icon }, i) => (
            <li key={title} className="h-full">
              <Reveal from="up" delay={200 + i * 120} className="h-full">
                <div className={`${glass} group flex h-full min-h-[105px] sm:min-h-[118px] flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 p-3.5 sm:px-5 sm:py-5 text-center sm:text-left`}>
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9 shrink-0 text-[#1fb8d6] transition-transform duration-500 ease-[cubic-bezier(.3,1.5,.5,1)] group-hover:rotate-[8deg] group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:transform-none" />
                  <div className="flex-1 text-center">
                    <h4 className="mx-auto max-w-[130px] text-xs sm:text-sm md:text-[16px] lg:text-[17px] font-semibold uppercase leading-tight text-[#22c7f2]">
                      {title}
                    </h4>
                    <p className="mt-1 sm:mt-2 text-[10.5px] sm:text-[12px] leading-tight sm:leading-[1.4] text-white/90">
                      {text[0]}
                      <br />
                      {text[1]}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}