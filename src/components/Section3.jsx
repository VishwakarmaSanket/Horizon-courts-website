import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Car } from "lucide-react";
import Card4 from "./Card4";
import Card5 from "./Card5";

const Section3 = () => {
  return (
    <div className="section3 flex items-center justify-between p-10 mb-10">
      <div className="left flex flex-col gap-6">
        <div className="text-lg font-medium text-[#0D1A2D] px-3 py-2 border border-[#0d1a2d8a] rounded-[50px] w-fit">
          About Horizon
        </div>
        <p className="text-xl font-medium text-[#0D1A2D] mb-10">
          Explore our full range of coaching,
          <br /> training, and tennis experiences. From <br /> first serve to
          match point we've <br /> got the right program for you.
        </p>
        <div className="primary w-fit flex items-center justify-around gap-2">
          <h1 className="text-[#ffffff]">Explore More</h1>
          <h1 className="text-[#ffffff]">
            <ArrowUpRight />
          </h1>
        </div>
      </div>
      <Card4 />
      <Card5 />
    </div>
  );
};

export default Section3;
