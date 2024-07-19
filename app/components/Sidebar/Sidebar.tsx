"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaPenFancy, FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiFileListFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useAuth } from "@/context/AuthContext";

const Sidebar = () => {
  const router = useRouter();
  const { signOut, user } = useAuth();

  const handleLogout = async () => {
    signOut();
    router.push("/");
    console.log("logout");
  };

  const sidebarText = [
    { path: "/homepage", title: "Home", icon: <IoMdHome /> },
    { path: "/homepage/explore", title: "Explore", icon: <IoSearch /> },
    { path: "/homepage/list", title: "List", icon: <RiFileListFill /> },
    {
      path: `/homepage/profile`,
      title: "Profile",
      icon: <FaUser />,
    },
  ];
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
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={handleLogout}
      >
        <div className="text-[1.5rem] text-slate-600">
          <TbLogout2 />
        </div>
        <div className=" text-slate-600 xl:block hidden">Logout</div>
      </div>
      <div className="py-2 border text-center rounded-xl cursor-pointer bg-blue-400 text-white font-bold">
        Post
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-slate-200 rounded-full w-10 h-10 relative"></div>

        <div className="flex-col items-start hidden xl:flex text-sm">
          kiran salve
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
