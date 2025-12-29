import React from "react";
import { ArrowUpRight } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar flex items-center justify-between">
      <div className="left_nav">
        <h1 className="font-semibold text-xl text-[#0D1A2D]">Horizon Courts</h1>
      </div>
      <div className="mid_nav flex items-center justify-between gap-10">
        <h2 className="font-medium text-sm text-[#0D1A2D] border-[0.5px] border-[#0d1a2d96] px-2 py-1 rounded-[50px]">
          About us
        </h2>
        <h2 className="font-medium text-sm text-[#0D1A2D]">Services</h2>
        <h2 className="font-medium text-sm text-[#0D1A2D]">Coaches</h2>
        <h2 className="font-medium text-sm text-[#0D1A2D]">Events</h2>
        <h2 className="font-medium text-sm text-[#0D1A2D]">Contact</h2>
      </div>
      <div className="right_nav">
        <div className="primary flex items-center justify-around gap-2">
          <h1 className="text-[#ffffff]">Book now</h1>
          <h1 className="text-[#ffffff]">
            <ArrowUpRight />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
