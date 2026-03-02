import React from "react";
import Items from "./Items";

const Section2 = () => {
  return (
    <div className="section2 flex flex-col items-center py-12 gap-12 mb-16 bg-gray-50/50 rounded-3xl">
      <div className="top">
        <h1 className="text-[#0D1A2D] text-2xl lg:text-3xl font-semibold uppercase tracking-widest text-center">
          A few more facts about us in numbers
        </h1>
      </div>
      <Items />
    </div>
  );
};

export default Section2;
