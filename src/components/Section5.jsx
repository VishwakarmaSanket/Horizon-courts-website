import React from "react";
import Button4 from "./Button4";
import Reactions from "./Reactions";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import card7 from "../assets/images/card7.jpg";

const Section5 = () => {
  return (
    <div className="section5 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-24 py-16 px-6 lg:px-12 mb-16 bg-slate-50 rounded-[3rem]">
      <div className="left flex flex-col justify-between w-full lg:w-1/2 gap-12">
        <div className="top flex flex-col items-start gap-8">
          <Button4 name="Feel our rhythm" />
          <blockquote className="text-2xl lg:text-3xl text-[#0D1A2D] font-semibold leading-snug italic">
            "As a busy mom who hadn't played since college, Horizount made my
            comeback magical. Coach Lisa transformed my slice into a weapon - now
            my husband refuses to play me."
          </blockquote>
          <Reactions />
        </div>
        <div className="bottom flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-4">
          <div className="flex flex-col">
            <h4 className="text-2xl text-[#0D1A2D] font-bold">Skylar Bennett</h4>
            <p className="text-lg text-[#637286] font-medium">Amateur Champion</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:scale-110 transition-transform cursor-pointer">
              <ArrowLeftCircle size={48} strokeWidth={1.5} className="text-[#0D1A2D]" />
            </button>
            <button className="hover:scale-110 transition-transform cursor-pointer">
              <ArrowRightCircle size={48} strokeWidth={1.5} className="text-[#0D1A2D]" />
            </button>
          </div>
        </div>
      </div>
      <div className="right flex flex-col gap-6 w-full lg:w-1/2 relative min-h-[400px]">
        <div className="flex justify-end absolute top-0 right-0 z-10 p-4">
          <h2 className="text-5xl font-bold text-[#0D1A2D]">
            01<span className="text-xl text-[#637286] font-light">/8</span>
          </h2>
        </div>
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img src={card7} alt="Skylar Bennett playing" className="h-full w-full object-cover transition-transform hover:scale-105 duration-1000" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
