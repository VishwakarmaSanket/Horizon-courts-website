import React from "react";
import Item from "./Item";

const Items = () => {
  return (
    <div className="bottom grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 w-full px-6 max-w-6xl">
      <Item heading="12000+" subheading="Hours Of Play Annually" />
      <Item heading="89%" subheading="Player Retention Rate" />
      <Item heading="1200+" subheading="Active Members" />
      <Item heading="125+" subheading="Annual Tournaments" />
    </div>
  );
};

export default Items;
