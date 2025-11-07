import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./types";

const Button = ({ className, title }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "py-3 rounded-lg font-light text-white bg-primary cursor-pointer",
        className
      )}>
      {title}
    </button>
  );
};

export default Button;
