import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <section className=" lg:h-[90vh] mx-auto container flex justify-center ">
      <div className=" lg:flex items-center justify-between">
        <LeftSide />
        <RightSide />
      </div>
    </section>
  );
};

export default Banner;
