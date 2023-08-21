"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import TechnologyCard from "./TechnologyCard";
import technologyData from "./technologyData";

const Technology = () => {
  return (
    <section className="py-20">
      <div className="flex items-center flex-col">
        <span className="card-bg px-6 py-1 rounded-2xl font-bold gradient-text">
          Technology
        </span>
        <h1 className="text-2xl lg:text-5xl font-bold mb-10 mt-5 text-center">
          Technology <br /> I Know
        </h1>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {technologyData.map((tech, index) => (
            <SwiperSlide key={index}>
              <TechnologyCard
                title={tech.title}
                description={tech.description}
                icon={tech.icon}
                iconSize={tech.iconSize}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Technology;
