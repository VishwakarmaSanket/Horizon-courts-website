import React from "react";

const Button5 = ({ name }) => {
  return (
    <div className="btn2 bg-linear-65 from-[#ffffff88] to-[#11111117] w-[16vw] h-[3vw] flex items-center justify-center rounded-3xl cursor-pointer hover:scale-105 duration-300">
      <h1 className="font-medium">{name}</h1>
    </div>
  );
};

export default Button5;
