"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  city: string;
  birthdate: string;
  createdAt: string;
  profileImage: string;
  bannerImage: string;
}

const Profile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: "",
    bio: "",
    city: "",
    birthdate: "",
    profileImage: "",
    bannerImage: "",
  });

  const getUserProfileData = useCallback(async () => {
    const response = await fetch("/api/profile");
    if (response.ok) {
      const data: UserProfile = await response.json();
      if (data) {
        setUser(data);
        setFormState({
          name: data.name,
          bio: data.bio,
          city: data.city,
          birthdate: formatDate(data.birthdate),
          profileImage: data.profileImage,
          bannerImage: data.bannerImage,
        });
      }
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  useEffect(() => {
    if (status === "authenticated") {
      getUserProfileData();
    }
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router, getUserProfileData]);

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const username = user?.name || user?.email?.split("@")[0] || "";

  const joiningDate = user
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "";

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const handleSaveProfile = async () => {
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data);
      setEditProfile(false);
      getUserProfileData();
    } else {
      console.error("Error while updating profile");
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileInputChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      type: "profile" | "banner"
    ) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event: any) => {
          const base64 = event.target.result;
          setFormState((prevState) => ({
            ...prevState,
            [type === "profile" ? "profileImage" : "bannerImage"]: base64,
          }));
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div>
        <div className="mx-4 mt-2">
          <div className="flex gap-10 items-center">
            <FaArrowLeftLong size={20} />
            <div>
              <div className="font-bold text-xl">{username}</div>
              <div className="text-sm">0 Post</div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-200 h-44 mt-2 relative">
          {formState.bannerImage && (
            <Image src={formState.bannerImage} fill alt="banner" />
          )}
        </div>
        <div className="flex justify-between mx-3">
          <div className="bg-slate-200 rounded-full relative -top-16 w-32 h-32 ">
            {formState.profileImage && (
              <Image
                src={formState.profileImage}
                fill
                alt="profile"
                className="rounded-full"
              />
            )}
          </div>
          <button
            className="bg-blue-400 text-white rounded-2xl border m-2 p-2"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
        <div className="relative left-7 -top-12 flex flex-col gap-5">
          <div>
            <div className="font-bold text-xl ">{username}</div>
            <div>Joining {joiningDate}</div>
          </div>
          <div className="flex gap-4">
            <div>5 Followers</div>
            <div>5 Following</div>
          </div>
        </div>
        {editProfile && (
          <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center ">
            <div className="relative md:w-[38rem] md:h-[36rem] w-full h-full bg-white z-50 md:rounded-xl shadow-2xl md:p-0 p-3 overflow-scroll">
              <RxCross1
                size={20}
                onClick={() => setEditProfile(false)}
                className="cursor-pointer absolute top-5 left-5"
              />
              <div className="flex justify-around items-center mt-5">
                <div className="text-xl font-bold ">Edit Profile</div>
                <button
                  className="rounded-xl border px-6 bg-blue-400 text-white py-1"
                  onClick={handleSaveProfile}
                >
                  Save
                </button>
              </div>
              <div className="bg-yellow-200 mt-4 h-40 flex items-center justify-center cursor-pointer">
                <label className="h-40 w-full relative cursor-pointer">
                  {formState.bannerImage && (
                    <Image src={formState.bannerImage} fill alt="banner" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileInputChange(e, "banner")}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="bg-slate-200 border w-32 h-32 rounded-full relative -top-16 left-4 flex items-center justify-center cursor-pointer">
                <label className="bg-slate-200 rounded-full relative w-32 h-32 cursor-pointer">
                  {formState.profileImage && (
                    <Image
                      src={formState.profileImage}
                      fill
                      alt="profile"
                      className="rounded-full"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileInputChange(e, "profile")}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="mx-5 flex flex-col gap-4 ">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  placeholder="Full Name"
                  onChange={handleInputChange}
                  className="border p-3 relative w-full outline-blue-600"
                />
                <input
                  type="text"
                  name="bio"
                  value={formState.bio}
                  placeholder="Bio"
                  onChange={handleInputChange}
                  className="border p-3 relative w-full outline-blue-600"
                />
                <input
                  type="text"
                  name="city"
                  value={formState.city}
                  placeholder="Location"
                  onChange={handleInputChange}
                  className="border p-3 relative w-full outline-blue-600"
                />
                <input
                  type="date"
                  name="birthdate"
                  max={getTodayDate()}
                  value={formState.birthdate}
                  placeholder="10-11-1998"
                  onChange={handleInputChange}
                  className="border p-3 relative w-full outline-blue-600"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
};

export default Profile;
