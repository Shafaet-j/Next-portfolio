"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/service",
      title: "Services",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <header className="bg-transparent backdrop-blur-2xl z-50 sticky top-0">
      <nav className="container mx-auto nav flex h-[100px] items-center justify-between px-4 relative">
        <Link className="text-xl lg:text-3xl text-white font-bold" href="/">
          Shaft
        </Link>
        <ul className=" flex gap-10">
          {navlinks.map(({ path, title }) => (
            <li key={path} className="relative group nav-link">
              <Link
                className={`${
                  pathname === path
                    ? "text-[#5C27FE] font-bold text-base"
                    : "font-bold text-[#adbef8] group-hover:text-[#5C27FE] duration-300 text-base"
                }`}
                href={path}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
