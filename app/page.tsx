"use client";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Register from "./components/register/Register";
import Signin from "./components/signin/Signin";
import { useEffect, useState } from "react";
import Link from "next/link";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: SearchParamProps) => {
  const siginModel = searchParams?.signin;
  const registerModel = searchParams?.register;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center ">
          <FaTwitter className="text-blue-400 lg:text-[20rem] text-[4rem]" />
        </div>
      ) : (
        <div className="flex lg:items-center item-start h-screen md:justify-around justify-start lg:flex-row flex-col py-5 gap-5 ">
          {siginModel && <Signin />}
          {registerModel && <Register />}
          <div className="">
            <FaTwitter className="text-blue-400 lg:text-[25rem] text-[3rem]" />
          </div>
          <div className="flex  flex-col gap-4">
            <div className="md:text-[4rem] text-[3rem] font-bold">
              Happening Now
            </div>
            <div className="text-[2rem]">Join Today</div>

            <div className="flex flex-col items-start justify-center gap-4">
              <button className="rounded-button flex items-center justify-center gap-2">
                <FaGoogle color="blue" className="" />
                Sign up with Google
              </button>
              <Link
                href={"/?register=true"}
                className="flex gap-2 items-center justify-center rounded-button"
              >
                <MdEmail color="blue" />
                Sign up with Email ID
              </Link>
              <div className="relative lg:w-80 w-60 flex items-center justify-center">
                <div className="left-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
                <span className="">or</span>
                <div className="right-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
              </div>
              <Link href="/?register=true" className="rounded-button">
                Create Account
              </Link>
              <div className="text-[12px] w-80 ">
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </div>

              <div className="">Already have an account?</div>
              <Link href="/?signin=true" className="rounded-button">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
