import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between p-2 max-w-screen-xl mx-auto">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <span className=" text-lg font-medium hover:text-amber-500 sm:inline hidden">
            Home
          </span>
          <span className="text-2xl hover:text-amber-500 sm:hidden">
            <IoMdHome />
          </span>
        </Link>
        <Link href="/about">
          <span className=" text-lg font-medium hover:text-amber-500 sm:inline hidden">
            About
          </span>
          <span className="text-xl hover:text-amber-500 sm:hidden">
            <FaCircleInfo />
          </span>
        </Link>
      </div>
      <div className="flex gap-1 items-center">
        <Link href='/'>
          <span className=" text-lg bg-amber-500 py-1 px-3 font-bold rounded">
            IMDb
          </span>
        </Link>
        <span className="font-bold sm:inline hidden">Clone</span>
      </div>
    </div>
  );
};
export default Header;
