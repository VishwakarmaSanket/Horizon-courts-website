import React from "react";
import { ArrowUpRight } from "lucide-react";

const Social = (props) => {
  return (
    <div className="social flex items-center justify-around gap-2">
      <h1>{props.name}</h1>
      <h1>
        <ArrowUpRight />
      </h1>
    </div>
  );
};

export default Social;
