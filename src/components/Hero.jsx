import React from "react";
import Social from "./Social";
import bottom from "../assets/images/bottom.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-between min-h-[70vh] py-12 px-8 mb-10 bg-amber-200 bg-[url('/src/assets/images/img3.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl relative overflow-hidden">
      <div className="top w-full md:w-[80%] lg:w-[60%] py-24 text-center flex flex-col items-center gap-6 z-10">
        <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-white">
          Unleash Your Inner Champion Today. All In One Place.
        </h1>
        <p className="text-lg lg:text-xl text-white/80 max-w-2xl">
          Join the ultimate tennis experience - where passion meets performance
          and every swing brings you close to victory.
        </p>
        <div className="primary w-fit mt-4">
          <button className="cursor-pointer">Start your own journey</button>
        </div>
      </div>
      <div className="bottom flex items-center justify-between w-full mt-auto">
        <div className="left flex items-center gap-4 bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
          <img src={bottom} alt="img" className="h-12 w-auto" />
          <p className="text-sm font-medium leading-tight">
            Train with real professionals <br />
            Get the real results
          </p>
        </div>
        <div className="right flex items-center gap-4">
          <Social name="Instagram" />
          <Social name="Facebook" />
          <Social name="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
