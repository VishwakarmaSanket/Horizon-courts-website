import React from "react";
import { Star } from "lucide-react";

const Reactions = () => {
  return (
    <div className="reaction flex items-center justify-center gap-2">
      <Star color="#FC970D" fill="#FC970D" />
      <Star color="#FC970D" fill="#FC970D" />
      <Star color="#FC970D" fill="#FC970D" />
      <Star color="#FC970D" fill="#FC970D" />
      <Star color="#FC970D" fill="#FC970D" />
      <Star color="#FC970D" />
      <h1 className="text-[#0A1D2D] text-2xl font-semibold">4 / 5</h1>
    </div>
  );
};

export default Reactions;
