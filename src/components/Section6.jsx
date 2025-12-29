import React from "react";
import Button3 from "./Button3";
import Button4 from "./Button4";
import FAQCard from "./FAQCard";
import img5 from "../assets/images/img5.jpg";

const Section6 = () => {
  return (
    <div className="section6 flex items-center justify-between px-16 py-10 bg-[#E6EFF5] rounded-3xl">
      <div className="left flex flex-col items-start justify-between gap-10 w-[50%]">
        <Button4 name="FAQ" />
        <img
          src={img5}
          alt=""
          className="h-[60vh] w-[80%] object-center object-cover rounded-3xl"
        />
        <h1 className="text-lg text-[#0D1A2D] font-medium">
          Still have some questions ?
        </h1>
      </div>
      <div className="right flex flex-col items-start justify-between gap-4 w-[50%]">
        <h1 className="text-xl text-[#0D1A2D] font-medium pr-10 mb-4">
          We've gathered the most frequently asked questions in one place. Find
          clear answers so nothing is left unclear.
        </h1>
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <div className="button mt-4">
          <Button3 name="Get in touch" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
