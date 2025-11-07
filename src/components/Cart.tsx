import { twMerge } from "tailwind-merge";
import Rate from "./Rate";
import { IProduct } from "./types";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/constants/links";
import { Heart, ShoppingCart } from "iconsax-reactjs";
import { useState } from "react";

const Cart = ({ image, price, rating, title, id }: IProduct) => {
  const [isLike, setIsLike] = useState(false);
  const colorLists = [
    { classname: "bg-gray-800" },
    { classname: "bg-white" },
    { classname: "bg-gray-700" },
  ];
  return (
    <Link
      href={PAGES.ProductDetails(id)}
      className="group shadow-normal rounded-sm p-2 col-span-2 relative lg:col-span-2 overflow-hidden">
      <p className="absolute rounded-r-lg py-0.5 px-1 bg-secondary-100 text-secondary-400 text-xs font-light left-0 lg:text-base">
        -15%
      </p>
      <div className="min-h-[120px] border-b flex items-center justify-center p-4 relative">
        <div className="flex flex-col absolute right-2">
          <div className="flex flex-col gap-1">
            {colorLists.map((item, index) => (
              <p
                key={index}
                className={twMerge(
                  "w-2 h-2 rounded-full border border-gray-600",
                  item.classname
                )}
              />
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
        <h3 className="truncate group-hover:text-primary">{title}</h3>
        <div className="flex items-end justify-between mt-2">
          <div>
            <p className="line-through text-gray-400 text-[10px]  lg:text-sm font-normal">
              $ {price}
            </p>
            <p className="text-lg">$ {price * 0.5}</p>
          </div>
          <Rate rate={rating.rate} LogoClassName="fill-primary-500" />
        </div>
      </div>
      <div
        className="absolute bg-white bottom-[-60px] left-0 w-full flex justify-between px-3 py-2 transition-all duration-500 opacity-0
      group-hover:bottom-2 items-center group-hover:opacity-100">
        <button className="flex items-center gap-1 border border-blue-400 text-blue-500 rounded-lg px-3 py-1 text-sm">
          <ShoppingCart size={24} variant="Linear" className="stroke-primary" />{" "}
          Add to cart
        </button>

        <Heart
          size={24}
          onClick={() => setIsLike(!isLike)}
          variant="Bold"
          className={twMerge(
            "stroke-primary text-transparent hover:text-primary",
            isLike && "text-primary"
          )}
        />
      </div>
    </Link>
  );
};

export default Cart;
