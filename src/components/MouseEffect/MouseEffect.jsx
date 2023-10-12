"use client";
import React, { useEffect, useState } from "react";

const MouseEffect = () => {
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTrailPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full pointer-events-none z-50">
      <div
        className="absolute w-[500px] h-[500px] blur-3xl mouse rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform ease-out"
        style={{ left: trailPosition.x, top: trailPosition.y }}
      />
    </div>
  );
};

export default MouseEffect;
