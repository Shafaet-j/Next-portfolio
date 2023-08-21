import React from "react";

const TechnologyCard = ({ title, description, icon, iconSize }) => {
  return (
    <div className="skill-bg px-8 py-8 rounded-xl relative group w-64 m-24 cursor-pointer mx-auto">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-left mt-5">{description}</p>
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#622ffe] to-[#b695ff] absolute -top-[5.5rem] flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-500 transform-gpu left-1/2 -translate-x-1/2">
        {icon({ size: iconSize, color: "white" })}
      </div>
    </div>
  );
};

export default TechnologyCard;
