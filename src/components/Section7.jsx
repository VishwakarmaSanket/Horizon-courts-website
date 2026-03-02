import React from "react";
import Button5 from "./Button5";
import Button6 from "./Button6";

const Section7 = () => {
  return (
    <div className="section7 w-full min-h-[400px] flex flex-col items-start justify-center gap-8 p-8 lg:p-16 bg-[url('/src/assets/images/img7.jpg')] bg-cover bg-center bg-no-repeat rounded-[2.5rem] relative overflow-hidden mb-16 shadow-lg">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-2xl flex flex-col items-start gap-8">
        <Button5 name="Join Now" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
          Get the Latest Updates, Special Offers, and Exclusive Event
          Invitations
        </h2>
        <div className="w-full max-w-md">
          <Button6 name="Enter your Email" />
        </div>
      </div>
    </div>
  );
};

export default Section7;
