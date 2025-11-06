"use client";
import { Bag, HamburgerMenu, SearchNormal1, User } from "iconsax-reactjs";
import InputBase from "../InputBase";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="gap-3 flex  flex-col">
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
  );
};

export default Header;
