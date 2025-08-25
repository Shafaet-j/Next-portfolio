"use client";
import CardPortfolio from '@/app/(routes)/portfolio/CardPortfolio';
import React, { useState } from 'react';

const FilterButton = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All"); // default active is "All"

  const handleFilter = (category) => {
    setActiveFilter(category); // ✅ update active button state

    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex gap-5 justify-end items-end mb-6">
        <button
          className={`hover:text-[#5C27FE] font-bold ${activeFilter === "All" ? "text-[#5C27FE]" : ""}`}
          onClick={() => handleFilter("All")}
        >
          All Portfolio
        </button>
        <button
          className={`hover:text-[#5C27FE] font-bold ${activeFilter === "Full-stack" ? "text-[#5C27FE]" : ""}`}
          onClick={() => handleFilter("Full-stack")}
        >
          Full-stack
        </button>
        <button
          className={`hover:text-[#5C27FE] font-bold ${activeFilter === "Frontend" ? "text-[#5C27FE]" : ""}`}
          onClick={() => handleFilter("Front-end")}
        >
          Front-end
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {filteredProjects.map((singleData) => (
          <CardPortfolio key={singleData._id} singleData={singleData} />
        ))}
      </div>
    </div>
  );
};

export default FilterButton;
