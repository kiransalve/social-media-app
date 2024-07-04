import Writepost from "@/app/components/Post/Writepost";
import Post from "@/app/components/Post/Post";
import MobileNavigation from "@/app/components/Sidebar/MobileNavigation";
import React from "react";

const Homepage = () => {
  return (
    <div className="">
      <div className="lg:hidden block">
        <MobileNavigation />
      </div>
      <div className="lg:block hidden overflow-scroll h-screen scroll-none ">
        <Writepost />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Homepage;
