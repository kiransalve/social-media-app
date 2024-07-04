import React from "react";
import { TbLetterK } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { VscBookmark } from "react-icons/vsc";
const Post = () => {
  return (
    <div className="">
      <div className="flex gap-2 items-start justify-between my-5 mx-2">
        <div className="">
          <TbLetterK className="text-[2rem] rounded-full w-10 h-10 border" />
        </div>
        <div className="">
          <div className="flex gap-2">
            <div className="font-bold">Kiran Salve</div>
            <div className="text-sm text-slate-500">@salvekiran</div>
            <div className="text-sm text-slate-500">10h</div>
          </div>
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem
            error nostrum facilis. Voluptatibus quas aspernatur provident
            ratione modi magni!
          </div>
          <div className="flex justify-between items-center pr-3 pt-2">
            <FaRegComment size={20} />
            <BiRepost size={24} />
            <FaRegHeart size={20} />
            <BiBarChart size={20} />
            <VscBookmark size={20} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Post;
