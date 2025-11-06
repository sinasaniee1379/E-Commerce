"use client";

import { useGetProductsQuery } from "@/api";
import Cart from "@/components/Cart";
import Rate from "@/components/Rate";
import { CartProps } from "@/components/types";
import { Setting4 } from "iconsax-reactjs";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const { data } = useGetProductsQuery();
  const products: CartProps[] = data;
  console.log(data);
  return (
    <div className="mt-4">
      <div className="flex gap-1.5">
        <p>Home</p> {">"} <p className="text-primary font-light">Products</p>
      </div>
      <div className="shadow-light bg-white rounded-lg py-3 px-2 font-light flex items-center w-[148px] gap-2 mt-4 text-black">
        <Setting4 size={16} className="stroke-gray-900" />
        <p>Filters</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6 lg:grid-cols-12">
        {products?.map((item) => (
          <Cart
            image={item.image}
            price={item.price}
            rating={item.rating}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
