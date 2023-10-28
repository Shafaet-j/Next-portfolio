"use client";
import { motion } from "framer-motion";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../../public/lottie.json";

const RightSide = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="lg:w-1/2 mt-10"
    >
      <Lottie animationData={animationData} loop autoplay />
    </motion.div>
  );
};

export default RightSide;
