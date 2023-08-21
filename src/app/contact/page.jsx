import Link from "next/link";
import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaPen,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="border-b-2 border-slate-800 lg:py-20 px-5 md:px-0">
      <div className="container mx-auto mt-16">
        <div className=" text-left lg:mt-20 mb-20">
          <h1 className="text-2xl lg:text-5xl mb-6">Contact</h1>
          <p>
            <span className=" mr-3 text-primary">
              <Link href="/">Home</Link>
            </span>
            |<span className=" ml-3">Contact</span>
          </p>
        </div>
        <div className=" lg:flex justify-between items-center">
          <div className="text-left lg:w-1/2 mb-10">
            <h3 className="mb-2 text-2xl font-medium text-[#5C27FE] lg:name-link relative lg:ml-7 lg:pl-3">
              Contact me
            </h3>
            <h2 className="text-2xl lg:text-5xl font-bold">
              Lets work togather
            </h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" flex items-center gap-6 mb-3">
              <span className="">
                <FaMapMarkerAlt color="#5C27FE"></FaMapMarkerAlt>
              </span>
              <span>Chuadanga, Bangladesh</span>
            </div>
            <div className=" flex items-center gap-6 mb-3">
              <span className="">
                <FaEnvelopeOpen color="#5C27FE"></FaEnvelopeOpen>
              </span>
              <span>Lbshaft01@gmail.com</span>
            </div>
            <div className=" flex items-center gap-6">
              <span className="">
                <FaPhone color="#5C27FE"></FaPhone>
              </span>
              <span>+8801925010214</span>
            </div>
          </div>
          <div className="shadow-2xl lg:w-1/2 mb-10">
            <form className=" space-y-5">
              <div className="form-control items-center relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full py-10 focus:bg-[#58547034] bg-transparent"
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
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
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
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
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
                  className="input input-bordered py-10 focus:bg-[#58547034] bg-transparent"
                />
                <FaPen
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaPen>
              </div>
              <div className="form-control relative">
                <textarea
                  className="textarea textarea-bordered py-10 focus:bg-[#58547034] bg-transparent"
                  placeholder="Message"
                ></textarea>
                <FaCommentAlt
                  size={20}
                  className=" absolute top-[36%] right-0 mr-5 opacity-40"
                ></FaCommentAlt>
              </div>
              <div className="form-control mt-6">
                <button className="rounded-md border border-[#5C27FE] bg-[#171F38] px-12 py-3 text-[#5C27FE] duration-300 hover:border-[#808DAD] hover:text-[#808DAD]">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
