"use client";
import React from "react";
import navLinks from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOME_ROUTE } from "@/constants/routes";

const NavLink = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="md:flex hidden gap-8">
        {navLinks.map((link) => {
        //   const isHome = link.route === HOME_ROUTE;
        //   const isActive = isHome
        //     ? pathname === HOME_ROUTE
        //     : pathname === link.route || pathname.startsWith(link.route );
        const isActive = pathname ===link.route || (link.route !== HOME_ROUTE && pathname.startsWith(link.route));
          return (
            <Link
              className={`text-gray-700 ${isActive ? "text-primary" : ""}  font-semibold  hover:text-primary`}
              key={link.route}
              href={link.route}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default NavLink;
