import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const EditProfile = ({
  setIsEdit,
}: {
  setIsEdit: (isEdit: boolean) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    city: "",
    birthdate: "",
  });
  const { user, updateProfile, profile } = useAuth();

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        bio: profile.bio || "",
        city: profile.city || "",
        birthdate: profile.birthdate
          ? new Date(profile.birthdate).toISOString().split("T")[0]
          : "",
      });
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProfile = () => {
    if (user && user.userId) {
      updateProfile(user.userId, formData);
      setIsEdit(false); // Close the edit modal after saving
    }
  };

  return (
    <div>
      <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center ">
        <div className="relative md:w-[38rem] md:h-[36rem] w-full h-full bg-white z-50 md:rounded-xl shadow-2xl md:p-0 p-3 overflow-scroll">
          <RxCross1
            size={20}
            onClick={() => setIsEdit(false)}
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
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div className="bg-slate-200 border w-32 h-32 rounded-full relative -top-16 left-4 flex items-center justify-center cursor-pointer">
            <label className="bg-slate-200 rounded-full relative w-32 h-32 cursor-pointer">
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>
          <div className="mx-5 flex flex-col gap-4 relative -top-12">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-3 relative w-full outline-blue-600"
              value={profile?.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bio"
              placeholder="Bio"
              className="border p-3 relative w-full outline-blue-600"
              value={profile?.bio}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="Location"
              className="border p-3 relative w-full outline-blue-600"
              value={profile?.city}
              onChange={handleChange}
            />
            <input
              type="date"
              name="birthdate"
              placeholder="10-11-1998"
              className="border p-3 relative w-full outline-blue-600"
              value={profile?.birthdate}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
