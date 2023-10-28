"use client";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

import Image from "next/image";
import Education from "./Education";
import Link from "next/link";
import about from "../../../public/about.png";

const Aboutpage = () => {
  return (
    <>
      <section className=" px-5 container mx-auto">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full text-left"
          >
            <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
              About me
            </h3>
            <h2 className="mb-8 text-2xl lg:text-4xl font-bold ">
              Hi, Im here <br />
              to help your next project
            </h2>
            <p className="mb-6 text-[#808DAD] font-sans text-xl">
              Hi, I'm Shafaet Hossen, a passionate and experienced web
              developer. With a strong foundation in front-end and back-end
              technologies.My journey in web development started with a deep
              fascination for crafting engaging user interfaces using React.
              Over time, I expanded my skills to encompass the full web
              development stack, including JavaScript, Node.js, and MongoDB.I am
              constantly exploring new technologies and staying up-to-date with
              industry trends to deliver cutting-edge solutions.
            </p>
            <ul className="mb-8 grid grid-cols-2 gap-4">
              <li className="">
                <span className="text-[#5C27FE]">
                  <GiCheckMark className=" inline" />
                </span>{" "}
                Problem Solving
              </li>
              <li className="">
                <span className="text-[#5C27FE]">
                  <GiCheckMark className=" inline" />
                </span>{" "}
                Front end Design
              </li>
              <li className="">
                <span className="text-[#5C27FE]">
                  <GiCheckMark className=" inline" />
                </span>{" "}
                Back end Design
              </li>
              <li className="">
                <span className="text-[#5C27FE]">
                  <GiCheckMark className=" inline" />
                </span>{" "}
                Illustration
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <Link href="/portfolio">
                <button className="lg:px-14 px-5 py-3 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] text-xl relative gradient overflow-hidden text-white">
                  My Portfolio
                </button>
              </Link>
              <a
                className="text-[#5C27FE] hover:text-[#808DAD] duration-300"
                href=""
              >
                Download C.V
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div>
              <Image placeholder="blur" src={about} alt="person" />
            </div>
          </motion.div>
        </div>
      </section>
      <section className=" border-b-2 border-slate-800">
        <Education />
      </section>
    </>
  );
};

export default Aboutpage;
