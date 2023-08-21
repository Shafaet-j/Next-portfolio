"use client";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie.json";

const RightSide = () => {
  return (
    <div className="lg:w-1/2 mt-10">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default RightSide;
