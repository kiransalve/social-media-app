"use client";
import React, { useEffect, useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [password, setPassword] = useState("");

  const emailValidation = /\S+@\S+\.\S+/.test(email);
  const passwordValidation = password.length > 5;

  const { signIn } = useAuth();
  useEffect(() => {
    if (!emailValidation) {
      setEmailEntered(false);
    }
  }, [email, emailValidation]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
    router.push("/homepage");
  };
  return (
    <>
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
                Sign in to Tweeter
              </div>

              <div className="flex items-center justify-center gap-2 rounded-button">
                <FaGoogle color="blue" />
                Sign up with Google
              </div>
              <Link href="/?register=true" className="rounded-button">
                <div className="flex items-center justify-center gap-2">
                  <MdEmail color="blue" />
                  Sign up with Email ID
                </div>
              </Link>
              <div className="relative lg:w-80 w-60 flex items-center justify-center">
                <div className="left-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
                <span className="">or</span>
                <div className="right-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
              </div>

              {!emailEntered && (
                <input
                  required
                  className="rounded-md focus:placeholder:absolute focus:placeholder:text-blue-400 focus:placeholder:top-0 focus:placeholder:text-[13px]  border-[2px] sm:w-80 w-64 focus:border-blue-400 md:py-4 py-2 px-2 focus:outline-none focus:shadow-outline"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              )}
              {emailEntered && email && (
                <input
                  required
                  className="rounded-md focus:placeholder:absolute focus:placeholder:text-blue-400 focus:placeholder:top-0 focus:placeholder:text-[13px]  border-[2px] sm:w-80 w-64 focus:border-blue-400 md:py-4 py-2 px-2 focus:outline-none focus:shadow-outline"
                  type="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              )}

              <div className="sm:w-80 w-64 rounded-button">
                {!emailEntered && (
                  <>
                    <button
                      onClick={() => {
                        emailValidation
                          ? setEmailEntered(true)
                          : setEmailEntered(false);
                      }}
                      className={"bg-white"}
                    >
                      <p className="">Next</p>
                    </button>
                  </>
                )}
                {emailEntered && (
                  <>
                    <button className="" onClick={handleSignIn}>
                      {passwordValidation ? (
                        "Sign in"
                      ) : (
                        <div
                          className="flex items-center justify-center gap-3 "
                          onClick={() => setEmailEntered(false)}
                        >
                          <FaArrowLeftLong className="cursor-pointer " />
                          Back
                        </div>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
