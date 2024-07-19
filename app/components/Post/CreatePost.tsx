"use client";
import React, { useEffect, useState } from "react";
import Writepost from "./Writepost";
import Post from "@/app/components/Post/Post";
interface User {
  _id: string;
  name: string;
  profileImage: string;
}

interface Post {
  _id: string;
  content: string;
  author: User;
  images: string[];
}

const CreatePost = () => {
  return (
    <>
      <Writepost />
      <Post />
    </>
  );
};

export default CreatePost;
