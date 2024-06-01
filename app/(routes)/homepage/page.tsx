import Post from "@/app/components/Post/Post";
import MobileNavigation from "@/app/components/Sidebar/MobileNavigation";
import React from "react";

const Homepage = () => {
  const handleLogout = async () => {
    const response = await fetch("api/user/logout");
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="">
      <div className="lg:hidden block">
        <MobileNavigation />
      </div>
      <div className="flex justify-around items-center h-10 px-5 border-b-2">
        <div>For you</div>
        <div>Following</div>
      </div>
      <Post />
    </div>
  );
};

export default Homepage;
