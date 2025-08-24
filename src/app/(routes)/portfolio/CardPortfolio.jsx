import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CardPortfolio = ({ singleData }) => {
  const { images, title, info, _id, technology_used } = singleData;
  return (
    
      <div
        className="card-bg p-8 rounded-2xl space-y-5 hover:border-[#5c27fe] border-transparent border-2 group duration-500"
        data-aos="fade-up"
      >
        <h3 className="mb-3 text-xl gradient-text font-bold">{title}</h3>
        <p className="text-[#808DAD]">{info.slice(0, 80)}...</p>
        <ul className="flex items-center gap-1 flex-wrap">
          {technology_used.map((ele, ind) => (
            <span
              key={ind}
              className={`${ind % 2 ? "bg-gray-800" : "bg-gray-700"
                }  px-3 py-1 rounded-md flex `}
            >
              {ele}
            </span>
          ))}
        </ul>
        <div className=" relative overflow-hidden">
          <div className="">
            <figure className="">
              <Image
                className=" hover:object-bottom h-72 object-top object-cover w-full duration-[4s] rounded-lg"
                alt="portfolio"
                src={images[0]}
                width={500}
                height={400}
              />
            </figure>
          </div>
          <Link href={`/portfolio/${_id}`}>
            <button className="font-semibold text-2xl absolute -bottom-[55px] -right-[55px]  w-10 h-10 bg-[#5C27FE] group-hover:bottom-0 group-hover:right-0 duration-300 text-center rounded-tl-md hover:bg-[#171F38]  flex items-center justify-center">
              <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>
    
  );
};

export default CardPortfolio;
