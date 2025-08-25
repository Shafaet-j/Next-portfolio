import Link from "next/link";
import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-[#adbef8]">
      <div className="container mx-auto">
        <div className=" flex justify-center items-center flex-col gap-3 pt-5">
          {/* <img
            src={chanchal}
            className="w-16 rounded-[100%] h-16 border-4 border-[#5c27fe]"
            alt=""
          /> */}
          <div className="flex items-center gap-3">
            <Link target="_blank" href="https://www.facebook.com/ami.chanchal">
              <RiFacebookCircleLine className=" w-8 h-8  hover:text-[#5c27fe] duration-300" />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/shafaet01">
              <AiOutlineInstagram className=" w-8 h-8  hover:text-[#5c27fe] duration-300" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/ami.chanchal">
              <TiSocialTwitterCircular className=" w-8 h-8  hover:text-[#5c27fe] duration-300" />
            </Link>
          </div>
          <h3 className="  font-semibold">Developed By Shafaet Hossen</h3>
          <p className="  font-semibold">
            Copyright ©  {currentYear} - All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
