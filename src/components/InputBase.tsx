import { twMerge } from "tailwind-merge";
import { InputProps } from "./types";

const InputBase = ({
  name,
  type,
  value,
  className,
  placeholder,
  title,
  icon,
}: InputProps) => {
  return (
    <div className="w-full">
      <p>{title}</p>
      <div
        className={twMerge(
          "px-4 py-3 flex justify-between rounded-sm",
          className
        )}>
        <input
          className={twMerge("rounded-sm w-full text-xs font-light")}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        {icon && icon}
      </div>
    </div>
  );
};

export default InputBase;
