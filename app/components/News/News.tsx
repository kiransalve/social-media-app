import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TbLetterK } from "react-icons/tb";
import Accounts from "./Accounts";
const News = () => {
  return (
    <div>
      <div className=" w-[350px] mx-auto relative">
        <div className="mt-2 ">
          <div className="absolute top-3 left-3">
            <IoSearchOutline className="" size={18} />
          </div>
          <input
            placeholder="Search"
            type="text"
            className="w-full border outline-none pl-10 rounded-2xl  h-[45px] "
          />
        </div>
        <div className="flex flex-col gap-2 border p-3 mt-2 rounded-xl">
          <div className="text-[20px] font-bold">Subscribe to Premium</div>
          <div className="">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </div>
          <button>Subscribe</button>
        </div>
        <div className="border p-3 mt-2 rounded-xl ">
          <div className="text-[20px] font-bold">Who to Follow</div>
          <hr className="mt-2" />
          <div className="overflow-scroll h-[400px] scroll-none ">
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
            <Accounts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
