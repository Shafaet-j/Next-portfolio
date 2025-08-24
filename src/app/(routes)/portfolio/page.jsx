
import Link from "next/link";
import CardPortfolio from "./CardPortfolio";

import { getAllProject } from "@/action/projectData";

const Portfolio = async () => {

  const data = await getAllProject();
  console.log(data,"sdfsd")
  const projects = data.data



  return (
    <section className="border-b-2 border-slate-800 lg:py-10 px-5 md:px-0">
      <div className="container mx-auto">
        <div className=" text-left lg:mt-10 mb-20">
          <h1 className="text-xl lg:text-3xl mb-6">All Projects</h1>
          <p>
            <span className=" mr-3 text-primary">
              <Link href="/">Home</Link>
            </span>
            |<span className=" ml-3">Project</span>
          </p>
        </div>
        <div className=" lg:flex justify-between items-center my-6 text-left">
          <div>
            <h3 className="mb-3 text-2xl text-[#5C27FE] name-link relative ml-7 pl-3 font-medium">
              My Portfolio
            </h3>
            <h2 className="mb-8 lg:text-3xl font-bold text-xl">
              Some of my excelent work
            </h2>
          </div>
          {/* <div className=" flex gap-5 justify-center items-center">
            <button
              onClick={() => setActiveFilter("all")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "all" ? "text-[#5C27FE]" : ""
              }`}
            >
              All portfolio
            </button>
            <button
              onClick={() => setActiveFilter("full-stack")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "full-stack" ? "text-[#5C27FE]" : ""
              }`}
            >
              Full-stack
            </button>
            <button
              onClick={() => setActiveFilter("front-end")}
              className={`hover:text-[#5C27FE] font-bold ${
                activeFilter === "front-end" ? "text-[#5C27FE]" : ""
              }`}
            >
              Front-end
            </button>
          </div> */}
        </div>

        <div className=" grid lg:grid-cols-3 gap-6">
          {projects.map((singleData) => (
            <CardPortfolio key={singleData._id} singleData={singleData} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
