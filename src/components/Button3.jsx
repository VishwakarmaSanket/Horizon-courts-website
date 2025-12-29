import React from "react";
import { ArrowUpRight } from "lucide-react";

const Button3 = ({ name }) => {
  return (
    <div className="primary w-fit flex items-center justify-around gap-2 bg-[#637286]">
      <h1 className="text-[#ffffff]">{name}</h1>
      <h1 className="text-[#ffffff]">
        <ArrowUpRight />
      </h1>
    </div>
  );
};

export default Button3;
