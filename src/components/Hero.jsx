import React from "react";
import Social from "./Social";
import bottom from "../assets/images/bottom.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-between h-[85vh] py-4 px-10 mb-10 bg-amber-200 bg-[url(./assets/images/img3.jpg)] bg-cover bg-center bg-no-repeat  rounded-3xl">
      <div className="top w-[80%] py-40 text-center flex flex-col items-center gap-6">
        <p className="text-5xl font-semibold">
          Unleash Your Inner Champion Today. <br />
          All In One Place.
        </p>
        <p className="text-xl">
          Join the ultimate tennis experience - where passion meets performance{" "}
          <br />
          and every swing brings you close to victory.
        </p>
        <div className="primary w-fit">
          <h1>Start your own journey</h1>
        </div>
      </div>
      <div className="bottom flex items-center justify-between w-full">
        <div className="left h-[58%] flex items-center justify-around gap-2">
          <img src={bottom} alt="img" className="h-full" />
          <p>
            Train with real professionals <br />
            Get the real results
          </p>
        </div>
        <div className="right flex items-center justify-between gap-4">
          <Social name="Instagram" />
          <Social name="Facebook" />
          <Social name="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
