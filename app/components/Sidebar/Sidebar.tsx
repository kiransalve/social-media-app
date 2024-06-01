import React from "react";
import { CiUser } from "react-icons/ci";
import { FaLaptopCode, FaPenFancy, FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiFileListFill } from "react-icons/ri";
import { TbLetterK } from "react-icons/tb";
import Button from "../Button/Button";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const sidebarText = [
  { path: "/homepage", title: "Home", icon: <IoMdHome /> },
  { path: "/homepage/explore", title: "Explore", icon: <IoSearch /> },
  { path: "/homepage/message", title: "Message", icon: <MdOutlineMail /> },
  { path: "/homepage/list", title: "List", icon: <RiFileListFill /> },
  { path: "/homepage/profile", title: "Profile", icon: <FaUser /> },
];

const Sidebar = () => {
  return (
    <div className="px-4 py-3 flex flex-col gap-5 ">
      <div className="logo">
        <FaTwitter className="text-blue-400 text-[2rem]" />
      </div>
      <div className="navlinks">
        {sidebarText.map((item, index) => {
          return (
            <div className="py-3" key={index}>
              <Link className="flex items-center gap-4" href={item.path}>
                <div className="text-[1.5rem] text-slate-600">{item.icon}</div>
                <div className=" text-slate-600 xl:block hidden">
                  {item.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="rounded-full xl:rounded-none ">
        <Button width="w-[2.5rem] xl:w-[7rem]" bgcolor="bg-blue-400">
          <FaPenFancy color="white" className="xl:hidden block" size={20} />
          <div className="text-white font-bold hidden xl:block">Post</div>
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <TbLetterK className="text-[2rem] rounded-full w-10 h-10  bg-slate-200 border" />
        <div className="flex-col items-center hidden xl:flex text-sm">
          <p>Kiran Salve</p>
          <p>@salvekiran</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
