"use client";
import { Bag, HamburgerMenu, SearchNormal1, User } from "iconsax-reactjs";
import InputBase from "../InputBase";
import { useState } from "react";
import { PAGES } from "@/constants/links";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const Header = () => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  console.log(pathname);
  const header = [
    { title: "Home", link: PAGES.home },
    { title: "Products", link: PAGES.products },
    { title: "Blog", link: PAGES.faq },
    { title: "FAQ", link: PAGES.faq },
    { title: "Contact Us", link: PAGES.contactUs },
  ];
  return (
    <>
      <div className="gap-3 flex px-4 flex-col lg:hidden">
        <div className="flex items-center justify-between py-2 px-1">
          <HamburgerMenu variant="Linear" className="stroke-black" size={24} />
          <h2 className="text-primary-400 font-medium">Tech Heim</h2>
          <div className="flex gap-4 items-center">
            <Bag variant="Linear" className="stroke-black" size={24} />
            <User variant="Linear" className="stroke-black" size={24} />
          </div>
        </div>
        <InputBase
          name="search"
          value={search}
          type="text"
          placeholder="What can we help you to find ?"
          icon={
            <SearchNormal1
              variant="Outline"
              size={24}
              className="stroke-gray-400"
            />
          }
          setState={setSearch}
          className="bg-gray-75"
        />
      </div>
      <div className="hidden lg:flex lg:px-[5%] justify-center items-center py-7">
        <div className="flex gap-12">
          {header.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={twMerge(
                "text-lg font-light text-black border-b border-b-white p-2",
                pathname === item.link && "text-primary border-b-primary"
              )}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center absolute right-[5%]">
          <Bag variant="Linear" className="stroke-black" size={24} />
          <User variant="Linear" className="stroke-black" size={24} />
          <SearchNormal1 variant="Linear" className="stroke-black" size={24} />
        </div>
      </div>
    </>
  );
};

export default Header;
