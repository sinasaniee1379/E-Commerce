"use client";
import { useGetProductQuery } from "@/api";
import Button from "@/components/Button";
import Footer from "@/components/layout/Footer";
import Rate from "@/components/Rate";
import Skeleton from "@/components/Skeleton";
import { IProduct } from "@/components/types";
import {
  ArrowDown2,
  DirectboxSend,
  DiscountShape,
  Heart,
  NotificationBing,
} from "iconsax-reactjs";
import Image from "next/image";
import { use, useState } from "react";
import { twMerge } from "tailwind-merge";
interface ProductProps {
  params: Promise<{ productId: string }>;
}
const Product = ({ params }: ProductProps) => {
  const infoList = [
    {
      title: "Brand",
      text: "Apple",
    },
    {
      title: "Model Name ",
      text: "Macbook Pro",
    },
    {
      title: "Screen Size",
      text: "13.3 Inches",
    },
    {
      title: "Hard Disk Size",
      text: "256 GB",
    },
    {
      title: "CPU Model",
      text: "core i5",
    },
  ];
  const tabs = [
    { title: "Technical Details", active: true },
    { title: "Similar Products", active: false },
    { title: "Comments", active: false },
  ];
  const tableInfo = [
    {
      title: "Display",
      text: "13.3-inch (diagonal) LED-backlit display with IPS technology",
      classname: "bg-gray-25 rounded-lg",
    },

    {
      title: "Graphics",
      text: "Apple 10-core GPU",
    },

    {
      title: "Processor",
      text: "Apple M2 chip",
      classname: "bg-gray-25 rounded-lg",
    },

    {
      title: "In the box",
      text: "67W USB-C Power Adapter, USB-C Charge Cable (2 m)",
    },
    {
      title: "Height",
      text: "0.61 inch (1.56 cm)",
      classname: "bg-gray-25 rounded-lg",
    },
    {
      title: "Width",
      text: "11.97 inches (30.41 cm)",
    },
  ];
  const [like, setLike] = useState(false);
  const { productId } = use(params);
  const { data, isPending } = useGetProductQuery(productId);
  const product: IProduct = data;
  return (
    <>
      <div className="relative lg:min-h-dvh">
        <div className="mt-4 px-4 lg:px-[5%] mb-6">
          <div className="flex text-xs lg:text-lg gap-1.5">
            <p>Home</p> {">"} <p>Products</p>
            {">"}{" "}
            <p className="text-primary font-light">
              {isPending ? (
                <Skeleton className="w-28 h-6" />
              ) : (
                product?.category
              )}
            </p>
          </div>
          <div className="relative mt-4">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="flex  absolute left-1 gap-2 lg:flex-col">
                <DirectboxSend
                  variant="Linear"
                  className="stroke-gray-500 size-4 lg:size-5"
                />
                <NotificationBing
                  variant="Linear"
                  className="stroke-gray-500 size-4 lg:size-5"
                />
                <Heart
                  variant="Linear"
                  className={twMerge(
                    "stroke-gray-500 size-4 lg:size-5",
                    like && "stroke-error fill-error"
                  )}
                  onClick={() => setLike(!like)}
                />
              </div>
              <div className="flex lg:col-span-4 xl:col-span-5 p-2 items-center justify-center">
                <Image
                  src={product?.image}
                  width={312}
                  height={200}
                  alt={product?.title}
                  className="w-80 h-52 object-contain"
                />
              </div>
              <div className="lg:col-span-4">
                {isPending ? (
                  <Skeleton className="h-6 w-full" />
                ) : (
                  <h2 className="text-base font-medium text-black mt-3">
                    {product?.title}
                  </h2>
                )}
                {isPending ? (
                  <Skeleton className="w-11 h-6" />
                ) : (
                  <Rate
                    rate={product?.rating.rate}
                    LogoClassName="fill-white"
                    className="bg-primary-500 text-white rounded-sm py-1 px-2 w-fit mt-3"
                  />
                )}
                <p className="h-px w-full bg-gray-75 mt-8 lg:hidden"></p>

                <div className="mt-3">
                  {infoList.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-xs font-medium lg:text-sm py-2">
                      <span className="flex items-center w-full">
                        <p className="w-2 h-2 rounded-full bg-gray-400"></p>
                        <p className="pl-4 text-gray-400">{item.title}</p>
                      </span>
                      <p className="w-full">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 xl:col-span-3 hidden lg:flex lg:flex-col p-6 shadow-light rounded-lg h-fit gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium">
                    ${" "}
                    {isPending ? (
                      <Skeleton className="w-28 h-6" />
                    ) : (
                      product?.price
                    )}
                  </p>
                  <span className="flex items-center gap-0.5">
                    <DiscountShape
                      size={24}
                      variant="Bold"
                      className="text-secondary-400"
                    />
                    <p className="text-secondary-400 text-base font-medium">
                      -12%
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <Button title="Buy Now" className="px-2" />
                  <Button
                    title="Add to Cart"
                    className="bg-transparent border-2 border-primary text-primary"
                  />
                </div>
              </div>
            </div>
            <div className="mt-14 lg:grid lg:grid-cols-12">
              <div className="lg:lg:col-span-9">
                <div className="flex lg:col-span-9">
                  {tabs.map((item, index) => (
                    <p
                      key={index}
                      className={twMerge(
                        "text-black border-b border-b-gray-100 pb-1 font-light w-full text-xs lg:text-lg text-center lg:text-left",
                        item.active && "text-primary border-b-primary"
                      )}>
                      {item.title}
                    </p>
                  ))}
                </div>
                <h4 className="text-sm lg:text-xl font-medium text-black mt-6">
                  Technical Details
                </h4>
                <div className="mt-3 ">
                  {tableInfo.map((item, index) => (
                    <div
                      className={twMerge(
                        "p-2 text-gray-400 text-xs lg:text-base lg:py-[18px] font-light flex items-center",
                        item.classname
                      )}
                      key={index}>
                      <p className="lg:flex-1/2">{item.title}</p>
                      <p className="text-gray-950  lg:flex-1/2 pl-4 lg:px-4">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 text-primary text-xs lg:text-sm font-normal flex items-center gap-3 w-full">
              <p>Show more</p>
              <ArrowDown2
                size="16"
                variant="Linear"
                className="stroke-primary"
              />
            </div>
          </div>
        </div>
        <div className="py-5 px-6 flex justify-between items-center bg-gray-50 sticky bottom-0 lg:hidden">
          <Button title="Buy Now" className="px-2" />
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-0.5">
              <DiscountShape
                size={24}
                variant="Bold"
                className="text-secondary-400"
              />
              <p className="text-secondary-400 text-sm font-medium">-12%</p>
            </span>
            <p className="text-xl font-medium">$ {product?.price}</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default Product;
