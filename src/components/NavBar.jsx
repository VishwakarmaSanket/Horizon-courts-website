import React from "react";
import { ArrowUpRight } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="navbar flex items-center justify-between py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50 px-2 lg:px-4">
      <div className="left_nav">
        <h1 className="font-bold text-2xl text-[#0D1A2D] cursor-pointer tracking-tight">Horizon Courts</h1>
      </div>
      <div className="hidden lg:flex items-center justify-between gap-12">
        <a href="#" className="font-semibold text-sm text-[#0D1A2D] bg-[#F3F4F6] px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
          About us
        </a>
        <a href="#" className="font-medium text-sm text-[#0D1A2D] hover:text-[#2EB3FF] transition-colors">Services</a>
        <a href="#" className="font-medium text-sm text-[#0D1A2D] hover:text-[#2EB3FF] transition-colors">Coaches</a>
        <a href="#" className="font-medium text-sm text-[#0D1A2D] hover:text-[#2EB3FF] transition-colors">Events</a>
        <a href="#" className="font-medium text-sm text-[#0D1A2D] hover:text-[#2EB3FF] transition-colors">Contact</a>
      </div>
      <div className="right_nav">
        <button className="primary flex items-center justify-around gap-3 px-6 py-3 bg-[#0D1A2D] text-white rounded-full hover:bg-[#1A2E48] transition-all hover:shadow-lg active:scale-95 cursor-pointer">
          <span className="font-semibold text-sm">Book now</span>
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
