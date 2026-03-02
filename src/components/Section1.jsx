import React from "react";

const Section1 = () => {
  return (
    <div className="section1 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 py-8">
      <div className="text-sm font-semibold text-[#0D1A2D] px-4 py-2 border border-[#0d1a2d44] rounded-full w-fit uppercase tracking-wide">
        About Horizon
      </div>
      <p className="text-xl md:text-2xl font-medium text-[#0D1A2D] max-w-2xl leading-relaxed">
        At Horizon we don't just play tennis - we build champions. Since 2021, 
        our club has been a home for players of all levels, from eager 
        beginners to seasoned pros.
      </p>
    </div>
  );
};

export default Section1;
