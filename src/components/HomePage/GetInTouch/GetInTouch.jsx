import React from "react";
import {
  FaCommentAlt,
  FaEnvelope,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaPen,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";

const GetInTouch = ({
  title,
  subTitle,
  description,
  location,
  email,
  phone,
  buttonText,
}) => {
  return (
    <section className="container mx-auto py-20">
      <div className=" flex flex-col items-center ">
        <span className=" card-bg px-6 py-1 rounded-2xl gradient-text font-bold">
          {title}
        </span>
        <h1 className="text-2xl lg:text-5xl font-bold mb-10 mt-5">
          {subTitle}
        </h1>
      </div>

      <div className=" lg:flex justify-between items-center">
        <div className="text-left lg:w-1/2 px-5 mb-9">
          <h3 className="mb-2 text-2xl font-medium text-[#5C27FE] lg:name-link relative lg:ml-7 lg:pl-3 text-left">
            Contact me
          </h3>
          <h2 className="lg:text-5xl text-2xl font-bold">{description}</h2>
          <p className="py-6 font-sans text-xl">{description}</p>
          <div className=" flex items-center gap-6 mb-3">
            <span className="">
              <FaMapMarkerAlt color="#5C27FE"></FaMapMarkerAlt>
            </span>
            <span>{location}</span>
          </div>
          <div className=" flex items-center gap-6 mb-3">
            <span className="">
              <FaEnvelopeOpen color="#5C27FE"></FaEnvelopeOpen>
            </span>
            <span>{email}</span>
          </div>
          <div className=" flex items-center gap-6">
            <span className="">
              <FaPhone color="#5C27FE"></FaPhone>
            </span>
            <span>{phone}</span>
          </div>
        </div>

        <div className="shadow-2xl lg:w-1/2 px-5">
          <form className=" space-y-5">
            <div className="form-control items-center relative">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full py-10 bg-transparent"
              />
              <FaUserCircle
                size={20}
                className=" absolute top-[36%] right-0 mr-5 opacity-40"
              ></FaUserCircle>
            </div>
            <div className="form-control relative">
              <input
                type="email"
                placeholder="email"
                className="input input-bordered py-10 bg-transparent"
              />
              <FaEnvelope
                size={20}
                className=" absolute top-[36%] right-0 mr-5 opacity-40"
              ></FaEnvelope>
            </div>
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered py-10 bg-transparent"
              />
              <FaPhone
                size={20}
                className=" absolute top-[36%] right-0 mr-5 opacity-40"
              ></FaPhone>
            </div>
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered py-10 bg-transparent"
              />
              <FaPen
                size={20}
                className=" absolute top-[36%] right-0 mr-5 opacity-40"
              ></FaPen>
            </div>
            <div className="form-control relative">
              <textarea
                className="textarea textarea-bordered py-10 bg-transparent"
                placeholder="Message"
              ></textarea>
              <FaCommentAlt
                size={20}
                className=" absolute top-[36%] right-0 mr-5 opacity-40"
              ></FaCommentAlt>
            </div>
            <div className="form-control mt-6">
              <button className="rounded-md border border-[#5C27FE] bg-[#171F38] px-12 py-3 text-[#5C27FE] duration-300 hover:border-[#808DAD] hover:text-[#808DAD]">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
