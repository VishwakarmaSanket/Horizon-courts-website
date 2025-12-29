import React from "react";

const Item = (props) => {
  return (
    <div className="item flex flex-col items-center justify-between mx-10">
      <h1 className="text-[#0D1A2D] text-4xl font-bold">{props.heading}</h1>
      <h2 className="text-[#0D1A2D] text-sm font-normal">{props.subheading}</h2>
    </div>
  );
};

export default Item;
