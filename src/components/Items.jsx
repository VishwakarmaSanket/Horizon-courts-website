import React from "react";
import Item from "./Item";

const Items = () => {
  return (
    <div className="bottom flex items-center justify-between gap-20 ">
      <Item heading="12000+" subheading="Hours Of Play Annualy" />
      <Item heading="89%" subheading="Player Retention Rate" />
      <Item heading="1200+" subheading="Active Members" />
      <Item heading="125+" subheading="Annual Tournaments" />
    </div>
  );
};

export default Items;
