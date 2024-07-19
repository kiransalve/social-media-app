"use client";
import EditProfile from "@/app/components/Profile/EditProfile";
import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Profile = () => {
  const { profile } = useAuth();
  const [isEdit, setIsEdit] = useState(false);

  const createdAt = profile?.createdAt
    ? new Date(profile?.createdAt).toLocaleDateString("default", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : "Joining Date";

  const email = profile?.email || "kiran@gmail.com";

  return (
    <div>
      <div className="mx-4 mt-2">
        <div className="flex gap-10 items-center">
          <FaArrowLeftLong size={20} className="cursor-pointer" />
          <div>
            <div className="font-bold text-xl">{email}</div>
            <div className="text-sm">0 Post</div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-200 h-44 mt-2 relative">profileImage</div>
      <div className="flex justify-between mx-3">
        <div className="bg-slate-200 rounded-full relative -top-16 w-32 h-32 ">
          banner
        </div>
        <div className="mt-5">
          <button
            onClick={() => setIsEdit(true)}
            className="bg-blue-400 text-white rounded-2xl border m-2 p-2"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="relative left-7 -top-12 flex flex-col gap-5">
        <div>
          <div className="font-bold text-xl ">username</div>
          <div>Joining {createdAt}</div>
        </div>
        <div className="flex gap-4">
          <div>5 Followers</div>
          <div>5 Following</div>
        </div>
      </div>
      {isEdit && <EditProfile setIsEdit={setIsEdit} />}
    </div>
  );
};

export default Profile;
