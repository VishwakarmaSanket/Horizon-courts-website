import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Car } from "lucide-react";
import Card4 from "./Card4";
import Card5 from "./Card5";

const Section3 = () => {
  return (
    <div className="section3 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 p-8 lg:p-12 mb-16 bg-white border border-gray-100 rounded-3xl shadow-sm">
      <div className="left flex flex-col gap-6 max-w-lg">
        <div className="text-sm font-semibold text-[#0D1A2D] px-4 py-2 border border-[#0d1a2d44] rounded-full w-fit uppercase tracking-wide">
          Our Programs
        </div>
        <p className="text-xl lg:text-2xl font-medium text-[#0D1A2D] leading-relaxed">
          Explore our full range of coaching, training, and tennis experiences. 
          From first serve to match point, we've got the right program for you.
        </p>
        <div className="primary w-fit flex items-center gap-3 px-6 py-3 cursor-pointer hover:bg-opacity-90 transition-all">
          <span className="text-white font-medium">Explore More</span>
          <ArrowUpRight className="text-white w-5 h-5" />
        </div>
      </div>
      <div className="right flex flex-col md:flex-row gap-6 w-full lg:w-auto">
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
};

export default Section3;
