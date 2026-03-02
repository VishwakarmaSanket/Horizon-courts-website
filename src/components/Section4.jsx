import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button4 from "./Button4";
import Card6 from "./Card6";
import section4 from "../assets/images/section4.png";

const Section4 = () => {
  return (
    <div className="section4 bg-[#E6EFF5]/50 border border-[#E6EFF5] flex flex-col lg:flex-row items-stretch justify-between gap-12 p-8 lg:p-12 rounded-[2.5rem] mb-16 overflow-hidden shadow-sm">
      <div className="left flex flex-col items-stretch w-full lg:w-[60%] gap-8">
        <div className="membership-card p-10 flex flex-col justify-between bg-[#2EB3FF] rounded-3xl shadow-xl min-h-[400px]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full cursor-pointer hover:bg-white/30 transition-all">
              <span className="font-semibold text-white">Private & Group Lessons</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              12K ₹ <span className="text-lg font-light opacity-80">/month</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-4xl font-bold">Pro Membership</h3>
            <div className="flex flex-wrap items-center gap-3 mt-4 mb-8">
              <Button1 name="8 group classes" />
              <Button1 name="4 group classes" />
              <Button1 name="2 private Lessons" />
              <Button1 name="club tournament access" />
            </div>
          </div>
          <div className="w-full">
            <Button2 name="Buy Membership" className="w-full md:w-fit" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card6 />
          <Card6 />
        </div>
      </div>
      <div className="right w-full lg:w-[40%] flex flex-col items-start justify-between gap-10">
        <div className="flex flex-col gap-6">
          <Button4 name="Membership" />
          <h2 className="text-3xl font-bold text-[#0D1A2D] leading-tight">
            Three refined membership plans - elevate your game
          </h2>
          <p className="text-[#637286] text-lg max-w-sm leading-relaxed">
            Personalised benefits. Premium experience. One decision away.
          </p>
        </div>
        <div className="w-full h-full min-h-[300px] overflow-hidden rounded-3xl relative">
          <img
            src={section4}
            alt="img"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
