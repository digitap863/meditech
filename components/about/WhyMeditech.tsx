"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Reveal: fades/slides children in when scrolled into view ---------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
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
          ? "translate-y-0 opacity-100"
          : "translate-y-7 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Placeholder icon (replace with your own SVG / <Image>) ---------- */
function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="4" width="16" height="25" rx="1.5" />
      <path d="M19 12h8a1.5 1.5 0 0 1 1.5 1.5V29H19M9 10h1M13 10h1M9 15h1M13 15h1M9 20h1M13 20h1M7 29v-4h8v4M23.5 18h1M23.5 22.5h1" />
    </svg>
  );
}

/* ---------- Data ---------- */
const FEATURES = [
  {
    title: "Certified Team",
    text: "HTM 02-01 & ASSE Qualified professional.",
  },
  {
    title: "UAE-Wide Coverage",
    text: "Healthcare projects across the UAE",
  },
  {
    title: "Specialist Execution",
    text: "Medical, dental & laboratory infrastructure.",
  },
  {
    title: "End-to-End Delivery",
    text: "Supply, installation, testing & handover",
  },
];

/* ---------- Section ---------- */
export default function WhyMeditec() {
  return (
    <section
      id="why-meditec"
      className="bg-white px-4 py-10 sm:px-8 md:py-16 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="mb-1.5 block text-xs sm:text-[13px] font-semibold uppercase tracking-wide text-[#0a7fd0]">
            Why Meditec ?
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-semibold uppercase leading-tight sm:leading-[1.15] text-[#0f3a57]">
            A trusted partner for healthcare projects
          </h2>
        </Reveal>

        <div className="mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 lg:px-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={200 + i * 120} className="h-full">
              <article className="group flex h-full min-h-[150px] sm:min-h-[172px] flex-col rounded-2xl sm:rounded-[20px] bg-[#d4f4fb] p-5 sm:px-5 sm:pb-[30px] sm:pt-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[#c3eef8] hover:shadow-[0_16px_32px_-12px_rgba(10,127,208,0.3)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <BuildingIcon className="mb-4 sm:mb-6 h-8 w-8 sm:h-9 sm:w-9 text-[#12384f]" />
                <h3 className="mb-1.5 sm:mb-2 text-base sm:text-[18px] lg:text-[19px] font-semibold text-[#0a7fd0]">
                  {f.title}
                </h3>
                <p className="text-xs sm:text-[14px] leading-relaxed text-[#3d5a73]">
                  {f.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}