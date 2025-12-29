import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";
import Button4 from "./Button4";
import Card6 from "./Card6";

const Section4 = () => {
  return (
    <div className="section4 bg-[#e6eff5] flex items-center justify-between gap-20 p-10 rounded-3xl">
      <div className="left p-4 flex flex-col items-start  w-1/2 ">
        <div className="top w-full h-1/2 px-4 py-10 flex flex-col justify-between bg-[#2EB3FF] rounded-3xl">
          <div className="s-full flex items-center justify-between">
            <div className="btn2 bg-linear-65 from-[#ffffff88] to-[#11111100] w-[16vw] h-[3vw] flex items-center justify-center rounded-3xl cursor-pointer hover:scale-105 duration-300">
              <h1 className="font-medium">Private & Group Lessons</h1>
            </div>
            <h1 className="text-4xl font-medium text-white">
              12K ₹{" "}
              <span className="text-sm text-white font-normal">/month</span>
            </h1>
          </div>
          <h1 className="text-white text-4xl font-medium mt-4 ">
            Pro Membership
          </h1>
          <div className="flex items-center gap-2 mt-4 mb-4">
            <Button1 name="8 group classes" />
            <Button1 name="4 group classes" />
            <Button1 name="2 private Lessons" />
            <Button1 name="club tournament access" />
          </div>
          {/* <div className="bottom flex items-center justify-between w-full">
              <p className="font-medium">
                Program designed for <br /> all ages and abilities
              </p>
              <div className="bg-[#0D1A2D] h-10 w-10 rounded-full flex items-center justify-center">
                <ArrowUpRight />
              </div>
            </div> */}
          <Button2 name="Buy Membership" />
        </div>
        <Card6 />
        <Card6 />
      </div>
      <div className="right w-1/2 flex flex-col items-start justify-center gap-4">
        <Button4 name="Membership" />
        <h1 className="text-xl text-[#0D1A2D] font-semibold">
          Three refined membership <br />
          plans - elevate your game
        </h1>
        <p className="text-[#637286] mb-4">
          Personalised benefits.Premium <br /> experience. One decision away.
        </p>
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="src\assets\images\section4.png"
            alt="img"
            className="h-full w-100 object-cover object-center rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
