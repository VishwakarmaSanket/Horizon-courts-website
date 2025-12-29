import React from "react";
import Items from "./Items";

const Section2 = () => {
  return (
    <div className="section2 flex flex-col items-center py-4 gap-10 mb-10">
      <div className="top">
        <h1 className="text-[#0D1A2D] text-2xl font-medium">
          a few more facts about us in numbers
        </h1>
      </div>
      <Items />
    </div>
  );
};

export default Section2;
