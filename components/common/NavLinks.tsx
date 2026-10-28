"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && !href.startsWith("/#") && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 transition-colors duration-200 text-[15px] ${
        isActive
          ? "text-[#063A64] font-semibold"
          : "text-slate-700 hover:text-[#0078BF] font-medium"
      } ${className || ""}`}
    >
      {isActive && (
        <span className="h-2 w-2 rounded-[1px] bg-[#063A64] shrink-0" />
      )}
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;