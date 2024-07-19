import MobileNavigation from "@/app/components/Sidebar/MobileNavigation";
import React from "react";
import CreatePost from "@/app/components/Post/CreatePost";

const Homepage = () => {
  return (
    <div className="">
      <div className="lg:hidden block">
        <MobileNavigation />
      </div>
      <div className="lg:block hidden overflow-scroll h-screen scroll-none ">
        <CreatePost />
      </div>
    </div>
  );
};

export default Homepage;
