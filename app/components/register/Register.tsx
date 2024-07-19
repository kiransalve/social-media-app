"use client";
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="h-screen w-full absolute bg-black/50  top-0 left-0 flex justify-center items-center">
      <div className="relative md:w-[38rem] md:h-[36rem] w-full h-full flex justify-center items-center bg-white z-50 md:rounded-xl shadow-2xl md:p-0 p-3">
        <div className="">
          <div className="flex justify-between md:items-center items-start px-3 py-2">
            <RxCross1
              size={20}
              onClick={() => router.push("/")}
              className="cursor-pointer absolute top-5 left-5"
            />
            <div className="mx-auto">
              <FaTwitter className="text-blue-400 text-[2rem] md:text-[3rem]" />
            </div>
            <div className=""></div>
          </div>
          <div className="max-w-[24rem] mx-auto flex flex-col gap-5 my-3">
            <div className="text-[1.3rem] md:text-[1.8rem] font-bold">
              Create your account
            </div>
            <input
              className="rounded-md focus:placeholder:absolute focus:placeholder:text-blue-400 focus:placeholder:top-0 focus:placeholder:text-[13px] border-[2px] sm:w-80 w-64 focus:border-blue-400 md:py-4 py-2 px-2 focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              className="rounded-md focus:placeholder:absolute focus:placeholder:text-blue-400 focus:placeholder:top-0 focus:placeholder:text-[13px] border-[2px] sm:w-80 w-64 focus:border-blue-400 md:py-4 py-2 px-2 focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="leading-4 text-[13px] text-slate-500  lg:w-80 w-60">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>
            <div className="">
              <button
                className="rounded-button sm:w-80 w-64"
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
            <div className="">Already have an account?</div>
            <Link
              className="text-[#1D9BF0] rounded-button sm:w-80 w-64"
              href="/?signin=true"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
