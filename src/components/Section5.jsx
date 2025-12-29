import React from "react";
import Button4 from "./Button4";
import Reactions from "./Reactions";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import card7 from "../assets/images/card7.jpg";

const Section5 = () => {
  return (
    <div className="section5 flex items-center justify-between gap-20 py-10 px-12 mb-10">
      <div className="left flex flex-col items-start justify-between gap-30 w-1/2">
        <div className="top flex flex-col items-start gap-4">
          <Button4 name="Feel our rhythm" />
          <h1 className="text-xl text-[#0D1A2D] font-medium">
            "As a busy mom who hadn't played since college, Horizount made my
            comeback magical. Coach Lisa transformed my slice into a weapon now
            my husband refuses to play me."
          </h1>
          <Reactions />
        </div>
        <div className="bottom flex items-center justify-between gap-100 w-1/2 mt-10">
          <div className="left flex flex-col items-start gap-1">
            <h1 className="text-2xl text-[#0D1A2D] font-semibold">
              Skylar Bennett
            </h1>
            <p className="text-lg text-[#637286] font-medium">
              Amateur Champion
            </p>
          </div>
          <div className="right flex items-center justify-end">
            <ArrowLeftCircle size={40} color="#0A1D2A" className="mr-4" />
            <ArrowRightCircle size={40} color="#0A1D2A" />
          </div>
        </div>
      </div>
      <div className="right flex flex-col  justify-center gap-4 w-1/2 ">
        <div className="flex flex-col items-end">
          <h1 className="text-6xl text-[#0A1D2A] font-medium ">
            01<span className="text-2xl text-[#637286]">/8</span>
          </h1>
        </div>

        <img src={card7} alt="" className="h-full rounded-3xl" />
      </div>
    </div>
  );
};

export default Section5;
