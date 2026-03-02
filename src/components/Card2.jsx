import React from "react";

const Card2 = () => {
  return (
    <div className="card2 aspect-square flex items-center justify-center p-6 bg-[url('/src/assets/images/card2.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl shadow-sm overflow-hidden relative group">
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
      <div className="z-10 bg-white/40 backdrop-blur-md px-6 py-3 flex items-center justify-center rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 border border-white/40 shadow-lg">
        <h1 className="font-semibold text-sm lg:text-base text-[#0D1A2D]">Private & Group Lessons</h1>
      </div>
    </div>
  );
};

export default Card2;
