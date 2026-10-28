"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ============================================================================
// Icons matching the reference image
// ============================================================================

function BadgeCheckIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0B3B60"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BuildingProjectsIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0B3B60"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Tall building outline */}
      <path d="M3 21V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v17" />
      {/* Right lower building outline */}
      <path d="M12 9h7a1 1 0 0 1 1 1v11" />
      {/* Baseline */}
      <path d="M2 21h20" />
      {/* Windows in left building */}
      <rect x="5.5" y="6" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="8.5" y="6" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="5.5" y="10" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="8.5" y="10" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="5.5" y="14" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="8.5" y="14" width="1.5" height="1.5" strokeWidth="1.2" />
      {/* Windows in right building */}
      <rect x="14.5" y="12" width="1.5" height="1.5" strokeWidth="1.2" />
      <rect x="17.5" y="12" width="1.5" height="1.5" strokeWidth="1.2" />
      {/* Door in right building */}
      <path d="M15 21v-3.5h2v3.5" />
    </svg>
  );
}

function StandardsGearIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0B3B60"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Gear */}
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      {/* Inner checkmark badge */}
      <circle cx="12" cy="12" r="4.2" strokeWidth="1.5" />
      <path d="m10.2 12 1.3 1.3 2.5-2.5" strokeWidth="1.6" />
    </svg>
  );
}

const stats = [
  {
    icon: BadgeCheckIcon,
    title: "10+",
    subtitle: "Years of Experience",
  },
  {
    icon: BuildingProjectsIcon,
    title: "100+",
    subtitle: "Healthcare Projects",
  },
  {
    icon: BuildingProjectsIcon,
    title: "UAE-Wide",
    subtitle: "Project Coverage",
  },
  {
    icon: StandardsGearIcon,
    title: "Standards-Based",
    subtitle: "Project Delivery",
  },
];

export default function AboutStory() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-6 sm:gap-8">
        {/* ── Section Heading ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col items-start"
        >
          <span className="font-roboto font-normal text-[#1A7FCB] uppercase text-xs mb-1 block">
            TRUSTED GAS SYSTEM SPECIALISTS
          </span>
          <h2 className="font-roboto font-semibold text-[#0B3B60] text-2xl sm:text-3xl lg:text-[36px] leading-tight sm:leading-[1.05] tracking-tight uppercase">
            EXCELLENCE IN HEALTHCARE <br />
            ENGINEERING
          </h2>
        </motion.div>

        {/* ── Two-column: Image left | Text right ── */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between gap-6 sm:gap-8 lg:gap-10">
          {/* LEFT: Image */}
          <motion.div
            className="w-full lg:w-[41%] shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
          >
            <div className="relative w-full aspect-[16/9] rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md">
              <Image
                src="/images/about/about-story.png"
                alt="Meditec modern healthcare facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 41vw"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT: Description paragraphs (justified on larger screens, readable on mobile) */}
          <motion.div
            className="w-full lg:w-[49.5%] flex flex-col gap-4 sm:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
          >
            <p className="font-roboto text-[#1E2A4A] text-[13.5px] sm:text-[14.5px] leading-relaxed sm:leading-[1.45] text-left sm:text-justify">
              Meditec Technical Services L.L.C. is a specialist provider of medical,
              dental, and laboratory infrastructure solutions across the UAE. We
              deliver end-to-end services, from site surveys and design coordination
              to supply, installation, testing, commissioning, documentation, and
              handover.
            </p>

            <p className="font-roboto text-[#1E2A4A] text-[13.5px] sm:text-[14.5px] leading-relaxed sm:leading-[1.45] text-left sm:text-justify">
              Our experienced team combines specialist expertise with a practical,
              project-focused approach to deliver dependable solutions tailored to
              each facility&apos;s requirements. From new installations to renovations
              and ongoing maintenance, we are committed to providing quality
              workmanship, long-term reliability, and seamless project execution.
            </p>

            {/* Divider aligned with the bottom */}
            <div className="h-px bg-[#C9D3E0] mt-4 lg:mt-auto" />
          </motion.div>
        </div>

        {/* ── Four Metrics Row ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 pt-3 sm:pt-4 lg:px-12"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 sm:gap-5">
                <div className="shrink-0 flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="font-roboto font-bold text-[#0B3B60] text-xl sm:text-[22px] leading-tight">
                    {item.title}
                  </span>
                  <span className="font-roboto font-normal text-[#5B6470] text-xs sm:text-sm leading-snug mt-0.5 sm:mt-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

