import React from "react";

const Card1 = () => {
  return (
    <div className="card1 aspect-square bg-[#0D1A2D] p-8 rounded-3xl flex flex-col justify-between shadow-sm">
      <p className="text-lg lg:text-xl font-normal text-[#F8FCFF] leading-snug">
        Professional hard courts 
        <span className="text-[#637286] block mt-1">
          with tournament-grade lighting & climate control. Play in 
          perfect conditions, in any season.
        </span>
      </p>
      <div className="flex items-center gap-3">
        <div className="btn bg-[#2DB4FF] h-7 w-14 p-1 rounded-full flex items-center justify-end cursor-pointer transition-transform hover:scale-105">
          <div className="circle bg-white h-5 w-5 rounded-full shadow-sm"></div>
        </div>
        <h1 className="text-[#637286] text-sm font-medium">Game Mode</h1>
      </div>
    </div>
  );
};

export default Card1;
