"use client";

import { useGetProductsQuery } from "@/api";
import AccordionComponent from "@/components/Accordion";
import Cart from "@/components/Cart";
import Footer from "@/components/layout/Footer";
import Skeleton from "@/components/Skeleton";
import { IProduct } from "@/components/types";
import { Accordion } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Setting4 } from "iconsax-reactjs";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const mockData = Array.from({ length: 8 });

export default function Products() {
  const [isFilter, setIsFilter] = useState(false);
  const accordionList = [
    {
      title: "Category",
      subCategories: [
        { title: "TV" },
        { title: "Laptop" },
        { title: "Mobile" },
        { title: "Audio" },
      ],
    },
  ];
  const { data, isPending } = useGetProductsQuery();
  const products: IProduct[] = data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div>
        <div className="mt-4 px-4 lg:px-[5%] lg:flex lg:gap-6 min-h-dvh">
          <div className="lg:flex lg:flex-col  lg:w-1/4 lg:max-w-sm">
            <div className="flex gap-1.5">
              <p>Home</p> {">"}{" "}
              <p className="text-primary font-light">Products</p>
            </div>
            <div className="hidden lg:block w-full">
              <Accordion type="single" collapsible className="w-full relative ">
                {accordionList.map((item, index) => (
                  <AccordionComponent
                    accordionTitle={item.title}
                    value={item.title}
                    classnameTrigger="text-black font-light "
                    classnameContent="text-black  flex flex-col gap-4 border-b border-b-gray-150 rounded-none"
                    key={index}>
                    {item.subCategories.map((subItem, idx) => (
                      <div className="flex items-center gap-4" key={idx}>
                        <Checkbox className="size-6 rounded-lg border-gray-500 border-2" />
                        <p>{subItem.title}</p>
                      </div>
                    ))}
                  </AccordionComponent>
                ))}
              </Accordion>
            </div>
            <div
              onClick={() => setIsFilter(true)}
              className="shadow-light bg-white rounded-lg py-3 px-2 font-light flex items-center w-[148px] gap-2 mt-4 text-black lg:hidden">
              <Setting4 size={16} className="stroke-gray-900" />
              <p>Filters</p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-4 gap-4 mt-6 lg:grid-cols-8">
              {isPending
                ? mockData.map((_, index) => (
                    <Skeleton
                      key={index}
                      className="col-span-2 w-full h-[186px]"
                    />
                  ))
                : currentItems?.map((item) => (
                    <Cart
                      id={item.id}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      title={item.title}
                      key={item.id}
                    />
                  ))}
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`size-11 text-black text-lg transition
              ${
                currentPage === i + 1 &&
                "text-primary border-b border-b-primary"
              }`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div
        className={twMerge(
          "absolute w-full h-screen bg-white top-0 left-0 px-6 -translate-x-full transform-all duration-500",
          isFilter && "translate-x-0"
        )}>
        <div className="flex justify-between items-center py-4 px-4">
          <p className="text-xl text-black">Filters</p>
          <p className="text-primary" onClick={() => setIsFilter(false)}>
            Clear all
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full relative lg:hidden">
          {accordionList.map((item, index) => (
            <AccordionComponent
              accordionTitle={item.title}
              value={item.title}
              classnameTrigger="text-black font-light "
              classnameContent="text-black  flex flex-col gap-4 border-b border-b-gray-150 rounded-none"
              key={index}>
              {item.subCategories.map((subItem, idx) => (
                <div className="flex items-center gap-4" key={idx}>
                  <Checkbox className="size-6 rounded-lg border-gray-500 border-2" />
                  <p>{subItem.title}</p>
                </div>
              ))}
            </AccordionComponent>
          ))}
        </Accordion>
      </div>
    </>
  );
}
