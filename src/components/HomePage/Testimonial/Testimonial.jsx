"use client";
import React from "react";
import testimonialData from "./data";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className=" container mx-auto skill-bg px-10 py-20 rounded-2xl">
      <div className=" flex-col flex items-center text-center">
        <span className=" card-bg px-6 py-1 rounded-2xl gradient-text font-bold">
          Testimonial
        </span>
        <h1 className="lg:text-5xl text-2xl font-bold mb-10 mt-5">
          What People Say <br /> About Me
        </h1>
      </div>

      <>
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {/* {testimonialData.map((data, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={data}></TestimonialCard>
            </SwiperSlide>
          ))} */}
          {testimonialData.map((data, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonial;
