import { Star1 } from "iconsax-reactjs";
import React from "react";
import StarComponent from "./StarComponent";
import { twMerge } from "tailwind-merge";

const Rate = ({
  rate,
  className,
  LogoClassName,
}: {
  rate: number;
  className?: string;
  LogoClassName: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex gap-0.5 items-center text-primary-500",
        className
      )}>
      <StarComponent className={LogoClassName} />
      <p className="font-medium text-sm">{rate}</p>
    </div>
  );
};

export default Rate;
