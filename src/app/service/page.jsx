import Link from "next/link";
import React from "react";
import wordpress from "../../../public/wordpress.png";
import frontend from "../../../public/frontend.png";
import backend from "../../../public/backend.png";
import figma from "../../../public/figma.png";
import psd from "../../../public/psd.png";
import fullstack from "../../../public/fullstack.png";
import Image from "next/image";

const Service = () => {
  return (
    <section className="border-b-2 border-slate-800 lg:py-10 px-5 md:px-0">
      <div className="container mx-auto">
        <div className=" text-left lg:mt-10 mb-20">
          <h1 className="text-xl lg:text-3xl mb-6">Services</h1>
          <p>
            <span className=" mr-3 text-primary">
              <Link href="/">Home</Link>
            </span>
            |<span className=" ml-3">Services</span>
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 gap-6 py-24">
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={wordpress} alt="wordpressIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              WordPress development
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={frontend} alt="wordpressIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              Front end React development
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={backend} alt="wordpressIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              Backend development
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={figma} alt="wordpressIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              Figma to React
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={psd} alt="psdIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              Psd to wordpress
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-center card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
            data-aos="fade-up"
          >
            <Image className="" src={fullstack} alt="fullstackIcon" />
            <h3 className="mb-3 text-xl gradient-text font-bold">
              Fullstack development
            </h3>
            <p className="text-[#808DAD] font-sans text-xl">
              At Thrive, we believe that focusing on a single technology,
              specifically WordPress, allows us to provide unparalleled
              expertise and service to our clients who use this platform. By
              dedicating our resources and continually refining our skills in
              WordPress, we have developed a deep understanding of its features,
              capabilities, and best practices.
            </p>
            <button className="lg:px-14 px-3 py-2 rounded border bg-gradient-to-r from-[#622ffe] to-[#b695ff] lg:text-xl relative gradient overflow-hidden">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
