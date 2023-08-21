import React from "react";
import { DiAndroid } from "react-icons/di";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoMdBrush } from "react-icons/io";

const Right = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:justify-end">
        <div className="grid grid-cols-1 gap-8">
          <div
            className="card-bg w-full p-8 rounded-xl flex gap-5"
            data-aos="fade-up"
          >
            <div>
              <MdOutlineLaptopMac size={60} color="#5C27FE" />
            </div>
            <h4 className=" text-xl font-medium">
              FrontEnd <br />
              Development
            </h4>
          </div>
          <div
            className="card-bg w-full p-8 rounded-xl flex gap-5 justify-self-end"
            data-aos="fade-up"
          >
            <div>
              <DiAndroid size={60} color="#5C27FE" />
            </div>
            <h4 className=" text-xl font-medium">
              BackEnd <br />
              Development
            </h4>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="card-bg w-full p-8 rounded-xl flex gap-5"
            data-aos="fade-up"
          >
            <div>
              <IoMdBrush size={60} color="#5C27FE" />
            </div>
            <h4 className=" text-xl font-medium">
              Fullstack <br />
              Development
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
