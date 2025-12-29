import React from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const Card5 = () => {
  return (
    <div className="card5 flex flex-col items-start justify-between h-[24vw] w-[24vw] rounded-3xl">
      <div className="top p-4 flex flex-col items-start justify-between h-1/2 w-full bg-[url(./assets/images/card5.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl">
        <div className="btn2 bg-linear-65 from-[#ffffff88] to-[#11111117] w-[16vw] h-[3vw] flex items-center justify-center rounded-3xl cursor-pointer hover:scale-105 duration-300">
          <h1 className="font-medium">Private & Group Lessons</h1>
        </div>
        <div className="bottom flex items-center justify-between w-full">
          <p className="font-medium">
            Program designed for <br /> all ages and abilities
          </p>
          <div className="bg-[#0D1A2D] h-10 w-10 rounded-full flex items-center justify-center">
            <ArrowUpRight />
          </div>
        </div>
      </div>
      <p className=" text-sm text-[#0D1A2D]">
        Step into a space built for <br /> players - to grow,compete <br /> and
        thrive
      </p>
      <div className="arrows flex items-center justify-center gap-2">
        <h1 className="text-[#0D1A2D]">
          <ArrowLeft />
        </h1>
        <h1 className="text-[#0D1A2D]">
          <ArrowRight />
        </h1>
      </div>
    </div>
  );
};

export default Card5;
