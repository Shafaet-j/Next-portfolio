"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/2 text-left mt-10 px-5"
    >
      <h3 className="mb-2 text-2xl font-medium text-[#5C27FE] name-link relative ml-7 pl-3">
        Hello
      </h3>
      <h1 className="mb-4 font-bold w-full text-2xl lg:text-5xl">
        I'm Shafaet Hossen
      </h1>

      <h2 className="lg:text-5xl text-2xl mb-8 font-bold gradient-text">
        <Typewriter
          options={{
            strings: [
              "Front-end Developer",
              "JavaScript Developer",
              "MERN-Stack Developer",
              "React Developer",
              "Programmer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 34,
          }}
        />
      </h2>
      <p className=" mb-6 font-sans text-xl">
        I'm a passionate and experienced web developer. With a strong foundation
        in front-end and back-end technologies, I specialize in creating robust
        and user-friendly web applications.
      </p>

      <div className="flex items-center gap-5">
        <button className="lg:px-14 px-5 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
          Hire me
        </button>
        <a
          className="lg:px-14 px-5 py-2 rounded border bg-gradient-to-r from-[#46485F] to-[#b795ff04] lg:text-xl relative gradient overflow-hidden"
          href="https://drive.google.com/file/d/1UV6PQHoo3ZkHxWyanyAaUaYa72SK9M3c/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </motion.div>
  );
};

export default LeftSide;
