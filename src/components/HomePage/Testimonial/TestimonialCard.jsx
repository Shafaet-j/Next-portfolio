import React from "react";

const TestimonialCard = ({ data }) => {
  console.log(data);
  return (
    <div className=" text-center">
      <div className=" flex items-center justify-center mb-5">
        {data?.icon({ size: data?.iconSize })}
      </div>
      <p className=" lg:text-lg text-white mb-5 font-sans w-3/4 mx-auto">
        {data?.subtitle}
      </p>
      <img
        className="inline-block object-cover h-14 w-14 rounded-full ring-2 ring-white mb-5"
        src={data?.image}
        alt=""
      />
      <h3 className=" text-xl font-bold text-white mb-5">{data?.name}</h3>
    </div>
  );
};

export default TestimonialCard;
