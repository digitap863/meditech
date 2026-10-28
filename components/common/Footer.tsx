"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

import "swiper/css";
import Button from "./Button";

const quickLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/aboutus",
    },
    {
        label: "Solutions",
        href: "/#solutions",
    },
    {
        label: "Certifications",
        href: "/certification",
    },
    {
        label: "Projects",
        href: "/projects",
    },
    {
        label: "Blogs",
        href: "/blogs",
    },
    {
        label: "Careers",
        href: "/careers",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

const appointmentItems = Array.from({ length: 10 });

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden">
            {/* =====================================================
          MEDITEС LOGO
      ===================================================== */}
            <div className="flex items-end justify-center overflow-hidden bg-white px-4">
                <Image
                    src="/images/Meditec.png"
                    alt="Meditec"
                    width={530}
                    height={100}
                    className="h-auto w-[260px] sm:w-[380px] md:w-[529px] max-w-[90vw] translate-y-[6px] sm:translate-y-[8px] object-contain"
                />
            </div>

            {/* =====================================================
          APPOINTMENT MARQUEE
      ===================================================== */}
            <div className="overflow-hidden bg-[#0083C5]">
                <Swiper
                    modules={[Autoplay]}
                    loop
                    slidesPerView="auto"
                    spaceBetween={0}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    className="h-full"
                >
                    {appointmentItems.map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="!flex !w-auto items-center py-3 sm:py-4"
                        >
                            <div className="">
                                <a href="#contact">
                                    <Button variant="secondary" className="text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4">Book Appointment Now</Button>
                                </a>
                            </div>

                            {/* White separator */}
                            <span className="mx-3 sm:mx-5 h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 rounded-full bg-white" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
            <div className="min-h-[255px] bg-[#087EBD] px-4 sm:px-8 lg:px-10 py-8 sm:py-10 text-white">
                <div className="mx-auto max-w-7xl">
                    {/* ================= QUICK LINKS ================= */}
                    <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center">
                        {/* Quick Links Heading */}
                        <div className="flex shrink-0 items-center gap-2">
                            <span className="h-2 w-2 rounded-xs bg-white" />

                            <h2 className="text-lg sm:text-[24px] font-medium">
                                Quick Links
                            </h2>
                        </div>

                        {/* Navigation */}
                        <nav className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-1 md:justify-between gap-x-6 sm:gap-x-8 md:gap-x-4 gap-y-2.5 sm:gap-y-4 px-0 sm:px-4 md:px-6 lg:px-12 xl:px-20">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm sm:text-base md:text-[18px] text-white/85 transition-colors duration-200 hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* ================= CONTACT ================= */}
                    <div className="mt-8 sm:mt-12 flex flex-col items-center text-center space-y-2 pt-6 sm:pt-10 px-2">
                        <p className="text-xs sm:text-sm md:text-[18px] leading-relaxed text-white/85 max-w-2xl">
                            Office No. A4B, First Gulf Business Centre, Madina Mall,
                            Al Qusais, Dubai, UAE
                        </p>

                        <p className="text-xs sm:text-sm md:text-[18px] leading-relaxed text-white/85 break-words">
                            info@meditecengineering.com
                            <span className="mx-2">|</span>
                            sales@meditecengineering.com
                        </p>
                    </div>

                    {/* ================= SOCIALS ================= */}
                    <div className="mt-8 sm:mt-10 pb-6 sm:pb-10 flex justify-center gap-4 sm:gap-5">
                        <SocialLink
                            href="#"
                            label="Facebook"
                        >
                            <FaFacebookF />
                        </SocialLink>

                        <SocialLink
                            href="#"
                            label="X"
                        >
                            <FaXTwitter />
                        </SocialLink>

                        <SocialLink
                            href="#"
                            label="Instagram"
                        >
                            <FaInstagram />
                        </SocialLink>

                        <SocialLink
                            href="#"
                            label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </SocialLink>
                    </div>

                    {/* ================= COPYRIGHT ================= */}
                    <div className="mt-8 sm:mt-12 pt-4 border-t border-white/10 text-center sm:text-left">
                        <p className="text-xs sm:text-sm md:text-[16px] text-white/90">
                            © Copyright 2026 | Tapclone | All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="flex h-[43px] w-[43px] items-center justify-center rounded-full border border-white text-[20px] text-white transition-all duration-300 hover:bg-white hover:text-[#087EBD]"
        >
            {children}
        </Link>
    );
}
