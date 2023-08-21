import React from "react";
import Left from "./Left";
import Right from "./Right";

const WhatIdo = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 items-center gap-7 md:gap-8 lg:gap-20 md:grid-cols-2">
        <Left />
        <Right />
      </div>
    </section>
  );
};

export default WhatIdo;
