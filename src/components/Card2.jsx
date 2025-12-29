import React from "react";

const Card2 = () => {
  return (
    <div className="card2 flex items-center justify-center h-[24vw] w-[24vw] bg-[url(./assets/images/card2.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl">
      <div className="btn2 bg-linear-65 from-[#ffffff88] to-[#11111117] w-[16vw] h-[3vw] flex items-center justify-center rounded-3xl cursor-pointer hover:scale-105 duration-300">
        <h1 className="font-medium">Private & Group Lessons</h1>
      </div>
    </div>
  );
};

export default Card2;
