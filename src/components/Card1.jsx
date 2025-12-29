import React from "react";

const Card1 = () => {
  return (
    <div
      className="card1 h-[24vw] w-[24vw] bg-[#0D1A2D] py-10 px-6 rounded-3xl
          flex
          flex-col
          gap-8"
    >
      <p className="text-xl font-normal text-[#F8FCFF]">
        Profesional hard courts <br />
        <span className="text-[#637286]">
          with tournament -grade <br />
          lighting & climate control
          <br />
          play in -
        </span>
        perfect conditions,
        <br />
        in any season.
      </p>
      <div className="flex items-center gap-2">
        <div className="btn bg-[#2DB4FF] h-6 w-16 px-2 rounded-[50px] flex items-center justify-end cursor-pointer">
          <div className="circle bg-white h-4 w-4 rounded-full"></div>
        </div>
        <h1 className="text-[#637286]">Game Mode</h1>
      </div>
    </div>
  );
};

export default Card1;
