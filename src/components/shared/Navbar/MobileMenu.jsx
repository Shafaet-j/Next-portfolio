import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileMenu = () => {
  const pathname = usePathname();
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
    <ul className="card-bg px-7 py-5 rounded-xl text-left z-10 space-y-4 backdrop-blur-2xl">
      {navlinks.map(({ path, title }) => (
        <li key={path} className=" relative group nav-link">
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
  );
};

export default MobileMenu;
