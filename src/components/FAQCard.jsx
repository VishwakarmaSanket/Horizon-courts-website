import React from "react";
import { CirclePlus } from "lucide-react";

const FAQCard = () => {
  return (
    <div className="faq w-full px-4 py-3 flex items-center justify-between gap-4 bg-white rounded-2xl">
      <h1 className="text-sm text-[#0D1A2D] font-medium">
        Whats the best membership for casual player
      </h1>
      <CirclePlus className="text-white fill-black" size={36} />
    </div>
  );
};

export default FAQCard;
