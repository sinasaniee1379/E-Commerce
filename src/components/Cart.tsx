import { twMerge } from "tailwind-merge";
import Rate from "./Rate";
import { CartProps } from "./types";
import Image from "next/image";

const Cart = ({ image, price, rating, title }: CartProps) => {
  const colorLists = [
    { classname: "bg-gray-800" },
    { classname: "bg-white" },
    { classname: "bg-gray-700" },
  ];
  return (
    <div className="shadow-normal rounded-sm p-2 col-span-2 relative md:col-span-1">
      <p className="absolute rounded-r-lg py-0.5 px-1 bg-secondary-100 text-secondary-400 text-xs font-light left-0">
        -15%
      </p>
      <div className=" min-h-[120px] h- border-b flex items-center justify-center [border-image-source:linear-gradient(90deg,rgba(68,68,68,0.1)_0%,rgba(16,16,16,0.7)_54.17%,rgba(68,68,68,0.1)_99.47%)] [border-image-slice:1] p-4">
        <div className="flex flex-col absolute right-2">
          <div className="flex flex-col gap-1">
            {colorLists.map((item, index) => (
              <p
                key={index}
                className={twMerge(
                  "w-2 h-2 rounded-full border border-gray-600",
                  item.classname
                )}></p>
            ))}
          </div>
          <span className="text-gray-500 font-medium">+</span>
        </div>
        <Image
          width={132}
          height={104}
          className="w-[132px] h-[104px] object-contain"
          alt={title}
          src={image}
        />
      </div>

      <div className="mt-2">
        <h3 className="truncate">{title}</h3>
        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="line-through text-gray-400 text-[10px] font-normal">
              $ {price}
            </p>
            <p className="text">$ {price * 0.5}</p>
          </div>
          <Rate rate={rating.rate} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
