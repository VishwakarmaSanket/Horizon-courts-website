import { SendHorizontal } from "lucide-react";

const Button6 = ({ name }) => {
  return (
    <div className="primary px-6 py-2 flex items-center justify-around gap-6 bg-[#0D1A2D] ">
      <h1 className="text-[#ffffff]">{name}</h1>
      <div className="text-[#ffffff] bg-[#2EB3FF] p-2 rounded-full">
        <SendHorizontal />
      </div>
    </div>
  );
};

export default Button6;
