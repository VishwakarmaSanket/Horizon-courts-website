import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card4 = () => {
  return (
    <div className="card4 p-4 flex flex-col items-start justify-between h-[24vw] w-[24vw] bg-[url(./assets/images/card4.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl">
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
  );
};

export default Card4;
