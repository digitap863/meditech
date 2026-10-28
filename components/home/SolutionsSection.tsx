import SolutionCard, { SolutionItem } from "./SolutionCard";

export const solutionsData: SolutionItem[] = [
  {
    id: "mgps",
    number: "01",
    title: "MEDICAL GAS PIPELINE SYSTEM",
    description:
      "Central plants, manifolds, piping, AVSUs, alarms, outlets and downstream equipment.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "bhu",
    number: "02",
    title: "BED HEAD UNITS",
    description:
      "Custom configurations integrating medical gases, power, data, lighting and nurse call.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "pendants",
    number: "03",
    title: "MEDICAL PENDANTS",
    description:
      "ICU and operating-theatre pendants in manual, motorized and multi-arm configurations.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "nurse-call",
    number: "04",
    title: "NURSE CALL SYSTEMS",
    description:
      "Wired and wireless patient-call solutions for wards, clinics and care facilities.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "modular-ot",
    number: "05",
    title: "MODULAR OPERATING THEATERS",
    description:
      "Panel systems, laminar ceilings, doors, control panels, scrub sinks and integration.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "pneumatic-tube",
    number: "06",
    title: "PNEUMATIC TUBE SYSTEMS",
    description:
      "Secure internal transport for samples, medicines, blood products and documents.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "lab-gas",
    number: "07",
    title: "LABORATORY GAS SYSTEMS",
    description:
      "Manifolds, high-purity distribution, regulators, valves, alarms and bench outlets.",
    href: "/#solutions",
    showReadMore: true,
  },
  {
    id: "specialist-infra",
    number: "08",
    title: "SPECIALIST INFRASTRUCTURE",
    description:
      "Gas detection, hygienic cladding, lead lining, EMI/RF shielding and mortuary systems.",
    href: "/#solutions",
    showReadMore: true,
  },
];

interface SolutionsSectionProps {
  id?: string;
  className?: string;
  solutions?: SolutionItem[];
}

export default function SolutionsSection({
  id = "solutions",
  className = "",
  solutions = solutionsData,
}: SolutionsSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="solutions-heading"
      className={`relative w-full bg-[#FFFF] py-16 sm:py-20 lg:py-24 font-noto ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#00A3E0] mb-3 select-none">
            OUR SOLUTIONS
          </p>
          <h2
            id="solutions-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold uppercase text-[#063A64] tracking-tight leading-tight md:leading-[1.2]"
          >
            SPECIALIST SYSTEMS FOR
            <br className="hidden sm:inline" /> CRITICAL HEALTHCARE ENVIRONMENTS.
          </h2>
        </div>

        {/* 8 Solutions Grid: 4 columns x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-7 items-stretch">
          {solutions.map((item) => (
            <SolutionCard key={item.id} solution={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
