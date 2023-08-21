import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className=" flex-col flex items-center">
        <span className=" card-bg px-6 py-1 rounded-2xl font-bold gradient-text">
          Education
        </span>
        <h2 className="text-2xl lg:text-5xl font-bold  mb-10 mt-5">
          Education & <span className=" text-primary">Experience</span>
        </h2>
      </div>
      <div className="wrapper">
        <div className="center-line" data-aos="zoom-in"></div>
        <div className="row row-1 group">
          <i
            className="icon fas fa-home hidden lg:block"
            data-aos="zoom-in"
          ></i>
          {/* <Fade up> */}
          <section className=" text-left mb-8">
            <div className="details">
              <h2 className=" text-2xl font-semibold">
                <span className=" text-primary">MERN</span> Stack
              </h2>
              <span className=" group-hover:text-primary duration-300 font-medium">
                2022 - 2023
              </span>
            </div>
            <p>Programming Hero</p>
            <p className=" mt-5 font-sans text-xl">
              In 2023, I successfully mastered various essential technologies in
              web development, including HTML, CSS, Tailwind CSS, React.js,
              JavaScript, MongoDB, and Node.js. This achievement equips me with
              the skills to build responsive user interfaces, create dynamic and
              interactive web applications, and effectively manage and store
              data. With expertise in the MERN stack, I am well-prepared to
              contribute to exciting projects and make a significant impact in
              the web development field.
            </p>
          </section>
          {/* </Fade> */}
        </div>
        <div className="row row-2 group">
          <i
            className="icon fas fa-home hidden lg:block"
            data-aos="zoom-in"
          ></i>
          {/* <Fade up> */}
          <section className=" text-left mb-8">
            <div className="details">
              <h2 className=" text-2xl font-semibold">
                Front end <span className=" text-primary">Wordpress</span>{" "}
                Development
              </h2>
              <span className=" group-hover:text-primary duration-300 font-medium">
                2021 - 2022
              </span>
            </div>
            <p>Programming Hero</p>
            <p className=" mt-5 font-sans text-xl">
              I am proficient in front-end WordPress development, utilizing
              HTML, CSS, and JavaScript to create visually appealing and
              interactive websites. With my skills in customizing WordPress
              themes and building responsive layouts, I excel at delivering
              user-friendly experiences that meet clients' specific needs."
            </p>
          </section>
          {/* </Fade> */}
        </div>
        <div className="row row-1 group">
          <i
            className="icon fas fa-home hidden lg:block"
            data-aos="zoom-in"
          ></i>
          {/* <Fade up> */}
          <section className=" text-left mb-8">
            <div className="details">
              <h2 className=" text-2xl font-semibold">
                Graphics design &{" "}
                <span className=" text-primary">Animation</span>
              </h2>
              <span className=" group-hover:text-primary duration-300 font-medium">
                2020 - 2021
              </span>
            </div>
            <p>IDB BISEW</p>
            <p className=" mt-5 font-sans text-xl">
              "I excel in graphics design and animation, creating captivating
              visuals with artistic flair. With expertise in design software and
              a keen eye for aesthetics, I craft stunning graphics and
              animations that make a lasting impact."
            </p>
          </section>
          {/* </Fade> */}
        </div>
        <div className="row row-2 group">
          <i
            className="icon fas fa-home hidden lg:block"
            data-aos="zoom-in"
          ></i>
          {/* <Fade up> */}
          <section className=" text-left mb-8">
            <div className="details">
              <h2 className=" text-2xl font-semibold">
                <span className=" text-primary">Economics</span>
              </h2>
              <span className=" group-hover:text-primary duration-300 font-medium">
                2014 - 2019
              </span>
            </div>
            <p>National University</p>
            <p className=" mt-5 font-sans text-xl">
              "I have completed my BSS (Honors) degree in Economics from
              Government MM College in Jessore. During my studies, I gained a
              solid foundation in macroeconomics, microeconomics, econometrics,
              statistics, and other relevant subjects"
            </p>
          </section>
          {/* </Fade> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
