"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href?: string;
  showReadMore?: boolean;
}

interface SolutionCardProps {
  solution: SolutionItem;
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const {
    number,
    title,
    description,
    href = "/#solutions",
    showReadMore = true,
  } = solution;

  return (
    <article className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white px-6 pb-6 pt-8 text-center shadow-[0_1px_2px_rgba(15,46,89,0.04),0_12px_32px_-12px_rgba(15,46,89,0.14)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_2px_4px_rgba(15,46,89,0.05),0_24px_40px_-16px_rgba(0,120,191,0.28)] focus-within:ring-2 focus-within:ring-[#0078BF]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-7 lg:px-8">
      {/* Top accent bar: grows on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-center scale-x-0 bg-gradient-to-r from-[#38bdf8] via-[#0078BF] to-[#38bdf8] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
      />

      {/* Number */}
      <span
        aria-hidden="true"
        className="select-none text-[44px] font-semibold leading-none tabular-nums tracking-tight text-[#38bdf8]/90 transition-colors duration-300 group-hover:text-[#0078BF]"
      >
        {number}
      </span>

      {/* Title: reserves two lines so descriptions start at the same height */}
      <h3 className="mt-5 flex min-h-[2.75rem] w-full items-center justify-center text-balance text-[15px] font-bold uppercase leading-snug tracking-wide text-[#063A64]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 w-full flex-1 text-pretty text-[13px] leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Read more: pinned to the bottom, whole card is clickable */}
      {showReadMore && (
        <div className="mt-6 w-full border-t border-slate-100 pt-4">
          <Link
            href={href}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0078BF] focus-visible:outline-none"
          >
            <span>Read more</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#0078BF] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </div>
      )}
    </article>
  );
}