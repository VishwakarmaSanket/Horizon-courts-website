import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Cards = () => {
  return (
    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <Card1 />
      <Card2 />
      <Card1 />
      <Card2 />
    </div>
  );
};

export default Cards;
