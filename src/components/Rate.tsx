import { Star1 } from "iconsax-reactjs";
import React from "react";
import StarComponent from "./StarComponent";

const Rate = ({ rate }: { rate: number }) => {
  return (
    <div className="flex items-center">
      <StarComponent />
      <p className="text-primary-500 font-medium text-sm">{rate}</p>
    </div>
  );
};

export default Rate;
