"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";
import NavLink from "./NavLinks";

interface SolutionItemData {
    _id: string;
    name: string;
    slug: string;
}

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [solutionsList, setSolutionsList] = useState<SolutionItemData[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Auto-hide navbar on scroll down, show on scroll up / top
    useEffect(() => {
        const threshold = 10;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            // Always show at the top of the page
            if (scrollY <= 20) {
                setIsVisible(true);
                lastScrollY.current = scrollY;
                return;
            }

            // Only update direction if scrolled more than threshold
            if (Math.abs(scrollY - lastScrollY.current) < threshold) {
                return;
            }

            // If scrolling down past header area -> hide
            if (scrollY > lastScrollY.current) {
                if (scrollY > 80) {
                    setIsVisible(false);
                    setIsDropdownOpen(false);
                }
            } else {
                // If scrolling up -> show
                setIsVisible(true);
            }

            lastScrollY.current = scrollY;
        };

        const onScroll = () => {
            if (isMobileMenuOpen) return;
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const fetchSolutionsList = async () => {
            try {
                const res = await fetch("/api/solutions");
                if (res.ok) {
                    const data = await res.json();
                    if (data.success && Array.isArray(data.solutions)) {
                        setSolutionsList(data.solutions);
                    }
                }
            } catch (e) {
                console.error("Failed to load solutions for dropdown:", e);
            }
        };
        fetchSolutionsList();
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu on press of Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobileMenuOpen]);

    // Matches the screenshot model
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/aboutus" },
        { name: "Solutions", path: "/#solutions" },
        { name: "Certifications", path: "/certification" },
        { name: "Projects", path: "/projects" },
    ];

    const allLinks = [
        ...navLinks,
        { name: "Blogs", path: "/blogs" },
        { name: "Careers", path: "/careers" },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
        setIsMobileSolutionsOpen(false);
    };

    const isSolutionsActive =
        pathname?.startsWith("/solutions") || pathname === "/#solutions";

    const shouldShow = isVisible || isMobileMenuOpen;

    return (
        <header
            className={`w-full font-noto font-[family-name:var(--font-noto-sans)] sticky top-0 z-50 shadow-xs transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen
                    ? "transform-none"
                    : shouldShow
                    ? "translate-y-0"
                    : "-translate-y-full pointer-events-none"
            }`}
        >
            {/* ================= TOP CONTACT BAR ================= */}
            <div className="w-full bg-[#063A64] text-white text-[12px] sm:text-[13px] py-1.5 sm:py-2 px-4 sm:px-6 lg:px-12 border-b border-white/10 hidden sm:block">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2">
                    {/* Left: Office Address */}
                    <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#00A3E0] shrink-0" />
                        <span className="truncate">Office No. A4B, Al Qusais, Dubai, UAE</span>
                    </div>

                    {/* Right: Phone & Email */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-[13px]">
                        <a
                            href="tel:+97145936064"
                            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#00A3E0] transition-colors"
                        >
                            <Phone className="h-3.5 w-3.5 text-[#00A3E0] shrink-0" />
                            <span>+971 4 593 6064</span>
                        </a>

                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <Mail className="h-3.5 w-3.5 text-[#00A3E0] shrink-0" />
                            <a
                                href="mailto:info@meditecengineering.com"
                                className="hover:text-[#00A3E0] transition-colors"
                            >
                                info@meditecengineering.com
                            </a>
                            <span className="text-white/40 hidden md:inline">|</span>
                            <a
                                href="mailto:sales@meditecengineering.com"
                                className="hover:text-[#00A3E0] transition-colors hidden md:inline"
                            >
                                sales@meditecengineering.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVBAR ================= */}
            <div className="w-full bg-white border-b border-slate-100">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between">
                    {/* Meditec Circular Badge Logo */}
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex items-center shrink-0"
                    >
                        <Image
                            src="/images/mediteclogo.png"
                            width={80}
                            height={80}
                            alt="Meditec Logo"
                            priority
                            className="h-11 sm:h-13 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation Links — Center */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
                        {navLinks.map((link) => {
                            if (link.name === "Solutions") {
                                return (
                                    <div
                                        key={link.path}
                                        className="relative py-2"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`text-[15px] font-medium leading-none flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 ${
                                                isSolutionsActive
                                                    ? "text-[#063A64] font-semibold"
                                                    : "text-slate-700 hover:text-[#0078BF]"
                                            }`}
                                        >
                                            {isSolutionsActive && (
                                                <span className="h-2 w-2 rounded-[1px] bg-[#063A64] shrink-0" />
                                            )}
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                                                    isDropdownOpen
                                                        ? "rotate-180 text-[#0078BF]"
                                                        : ""
                                                }`}
                                            />
                                        </Link>

                                        {/* Solutions Dropdown Menu */}
                                        {isDropdownOpen && (
                                             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 z-50">
                                                <div className="rounded-xl bg-white border border-slate-200 p-2 shadow-xl space-y-1">
                                                    {solutionsList.length > 0 ? (
                                                        solutionsList.map((sol) => (
                                                            <Link
                                                                key={sol._id}
                                                                href={`/solutions/${sol.slug}`}
                                                                onClick={() =>
                                                                    setIsDropdownOpen(false)
                                                                }
                                                                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#0078BF] text-[14px] font-medium transition-all group"
                                                            >
                                                                <span className="truncate pr-2">
                                                                    {sol.name}
                                                                </span>
                                                                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#0078BF] group-hover:translate-x-1 transition-all" />
                                                            </Link>
                                                        ))
                                                    ) : (
                                                        <div className="px-4 py-3 text-xs text-slate-400 text-center font-medium">
                                                            No solutions available
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <NavLink key={link.path} href={link.path}>
                                    {link.name}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <Link href="/contact">
                            <button className="bg-[#0771CB] hover:bg-[#0065A1] text-white font-medium text-[13px] tracking-wide px-5 py-2.5 rounded-[4px] flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-95 uppercase cursor-pointer">
                                <span>DISCUSS YOUR PROJECT</span>
                                <span className="text-sm font-bold">→</span>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 focus:outline-none transition-colors"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X size={26} strokeWidth={2} />
                        ) : (
                            <Menu size={26} strokeWidth={2} />
                        )}
                    </button>
                </div>
            </div>

            {/* ================= MOBILE MENU DRAWER ================= */}
            <div
                className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            <aside
                className={`lg:hidden fixed top-0 left-0 bottom-0 h-[100dvh] w-[85%] max-w-[340px] bg-white text-slate-800 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Accent top border */}
                <div className="h-1 w-full bg-[#0078BF]" />

                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/images/mediteclogo.png"
                            width={56}
                            height={56}
                            alt="Meditec Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                    <button
                        onClick={closeMobileMenu}
                        className="text-slate-500 p-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-all active:scale-95"
                        aria-label="Close menu"
                    >
                        <X size={20} strokeWidth={2} />
                    </button>
                </div>

                {/* Navigation Links List */}
                <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1">
                    {allLinks.map((link) => {
                        if (link.name === "Solutions") {
                            return (
                                <div key={link.path} className="space-y-1">
                                    <button
                                        onClick={() =>
                                            setIsMobileSolutionsOpen((prev) => !prev)
                                        }
                                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-slate-700 text-[15px] font-medium hover:bg-slate-100 transition-all text-left"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0078BF]" />
                                            {link.name}
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                                                isMobileSolutionsOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {isMobileSolutionsOpen && (
                                        <div className="pl-6 pr-2 py-1 space-y-1 bg-slate-50 rounded-xl">
                                            {solutionsList.length > 0 ? (
                                                solutionsList.map((sol) => (
                                                    <Link
                                                        key={sol._id}
                                                        href={`/solutions/${sol.slug}`}
                                                        onClick={closeMobileMenu}
                                                        className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-600 hover:text-[#0078BF] hover:bg-white text-xs font-medium transition-colors"
                                                    >
                                                        <span className="truncate pr-2">
                                                            {sol.name}
                                                        </span>
                                                        <ChevronRight className="h-3.5 w-3.5 text-[#0078BF] shrink-0" />
                                                    </Link>
                                                ))
                                            ) : (
                                                <div className="py-2 px-3 text-xs text-slate-400">
                                                    No solutions available
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        const isActive =
                            pathname === link.path ||
                            (link.path !== "/" &&
                                !link.path.startsWith("/#") &&
                                pathname?.startsWith(link.path));

                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={closeMobileMenu}
                                className={`flex items-center gap-2.5 py-3 px-4 rounded-xl text-[15px] font-medium transition-all ${
                                    isActive
                                        ? "bg-slate-100 text-[#063A64] font-semibold"
                                        : "text-slate-700 hover:bg-slate-50"
                                }`}
                            >
                                <span
                                    className={`w-1.5 h-1.5 rounded-full ${
                                        isActive ? "bg-[#063A64]" : "bg-[#0078BF]"
                                    }`}
                                />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer Section of Sidebar */}
                <div className="p-5 border-t border-slate-100 space-y-4 bg-slate-50">
                    <Link
                        href="/contact"
                        onClick={closeMobileMenu}
                        className="block w-full"
                    >
                        <button className="w-full bg-[#0078BF] hover:bg-[#0065A1] text-white font-medium text-xs tracking-wider py-3 px-4 rounded-md uppercase flex items-center justify-center gap-2 shadow-xs">
                            <span>DISCUSS YOUR PROJECT</span>
                            <span>→</span>
                        </button>
                    </Link>

                    <div className="space-y-2 pt-2 text-xs text-slate-600">
                        <a
                            href="tel:+97145936064"
                            className="flex items-center gap-2.5 hover:text-[#0078BF] transition-colors"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#0078BF] shrink-0" />
                            <span>+971 4 593 6064</span>
                        </a>
                        <a
                            href="mailto:info@meditecengineering.com"
                            className="flex items-center gap-2.5 hover:text-[#0078BF] transition-colors truncate"
                        >
                            <Mail className="w-3.5 h-3.5 text-[#0078BF] shrink-0" />
                            <span className="truncate">info@meditecengineering.com</span>
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Navbar;
