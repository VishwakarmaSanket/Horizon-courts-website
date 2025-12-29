import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
  return (
    <div className="cards flex items-center gap-6 mb-10">
      <Card1 />
      <Card2 />
      <Card1 />
      <Card2 />
    </div>
  );
};

export default Cards;
