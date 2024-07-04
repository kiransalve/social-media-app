import React from "react";
import { FaLaptopCode, FaPenFancy, FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLetterK } from "react-icons/tb";
import { RiFileListFill } from "react-icons/ri";
import Link from "next/link";
import Post from "../Post/Writepost";

const sidebarText = [
  { path: "/homepage", title: "Home", icon: <IoMdHome /> },
  { path: "/homepage/explore", title: "Explore", icon: <IoSearch /> },
  { path: "/homepage/message", title: "Message", icon: <MdOutlineMail /> },
  { path: "/homepage/list", title: "List", icon: <RiFileListFill /> },
  { path: "/homepage/profile", title: "Profile", icon: <FaUser /> },
];

const MobileNavigation = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="absolute text-center left-[50%] top-2">
        <FaTwitter className="text-blue-400 text-[2rem] " />
      </div>
      <div className="absolute top-2 left-2">
        <TbLetterK className="text-[2rem] rounded-full w-10 h-10  bg-slate-200 border" />
        <div className="flex-col items-center hidden xl:flex text-sm">
          <p>Kiran Salve</p>
          <p>@salvekiran</p>
        </div>
      </div>
      <div className="navlinks flex absolute bottom-2 justify-around w-full">
        {sidebarText.map((item, index) => {
          return (
            <div className="py-3" key={index}>
              <Link className="flex  items-center gap-4" href={item.path}>
                <div className="text-[1.7rem] text-slate-600">{item.icon}</div>
                <div className=" text-slate-600 xl:block hidden">
                  {item.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <button className="rounded-[50%] bg-blue-400 p-3 border xl:rounded-none absolute bottom-[70px] right-3">
        <FaPenFancy color="white" className="xl:hidden block" size={20} />
        <div className="text-white font-bold hidden xl:block">Post</div>
      </button>
    </div>
  );
};

export default MobileNavigation;
