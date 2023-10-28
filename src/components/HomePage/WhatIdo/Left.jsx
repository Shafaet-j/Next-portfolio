"use client";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <div className="w-full md:order-2 text-left">
      <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
        What I Do
      </h3>
      <h2 className="mb-8 text-[34px] font-bold ">
        Crafting Exceptional <br />
        Web Experiences
      </h2>
      <p className="mb-6 font-sans text-xl">
        As a front-end developer, I specialize in creating stunning and
        user-friendly websites. My passion lies in writing clean, efficient code
        and ensuring the best possible user experiences with Responsiveness.
      </p>
    </div>
  );
};

export default Left;
