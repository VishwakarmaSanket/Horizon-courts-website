import React from "react";
import Button3 from "./Button3";
import Button4 from "./Button4";
import FAQCard from "./FAQCard";
import img5 from "../assets/images/img5.jpg";

const Section6 = () => {
  return (
    <div className="section6 flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-24 p-8 lg:p-16 bg-[#E6EFF5] rounded-[2.5rem] mb-16 shadow-sm">
      <div className="left flex flex-col items-start justify-between w-full lg:w-[45%] gap-8">
        <div className="flex flex-col gap-8 w-full">
          <Button4 name="FAQ" />
          <div className="w-full aspect-[4/5] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-3xl shadow-lg">
            <img
              src={img5}
              alt="Tennis court facilities"
              className="h-full w-full object-center object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>
        <h3 className="text-2xl text-[#0D1A2D] font-bold mt-auto">
          Still have some questions?
        </h3>
      </div>
      <div className="right flex flex-col items-start w-full lg:w-[55%] gap-6 lg:pt-12">
        <h2 className="text-xl lg:text-2xl text-[#0D1A2D] font-semibold leading-relaxed mb-6">
          We've gathered the most frequently asked questions in one place. Find
          clear answers so nothing is left unclear.
        </h2>
        <div className="w-full flex flex-col gap-4">
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </div>
        <div className="button mt-8">
          <Button3 name="Get in touch" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
