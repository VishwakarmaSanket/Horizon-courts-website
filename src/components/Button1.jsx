import React from "react";

const Button1 = ({ name }) => {
  return (
    <div className="text-xs font-normal text-white px-3 py-2 border border-white rounded-[50px] w-fit">
      {name}
    </div>
  );
};

export default Button1;
