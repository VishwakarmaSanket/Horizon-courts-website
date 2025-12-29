import React from "react";
import Button5 from "./Button5";
import Button6 from "./Button6";

const Section7 = () => {
  return (
    <div className="section7 w-full h-[50vh] flex flex-col items-start gap-10 p-10 py-12 bg-[url(./assets/images/img7.jpg)] bg-cover bg-center bg-no-repeat  rounded-3xl">
      <Button5 name="Join Now" />
      <h1 className="text-3xl font-medium pr-[56vw]">
        Get the Latest Updates, Special Offers, and Exclusive Event Invitations
      </h1>
      <Button6 name="Enter your Email" />
    </div>
  );
};

export default Section7;
