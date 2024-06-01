"use client";
import React, { useEffect } from "react";

const Profile = () => {
  const getProfile = async () => {
    const response = await fetch("api/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getProfile();
  }, []);
  return <div>Profile</div>;
};

export default Profile;
