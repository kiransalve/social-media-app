"use client";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import Button from "./components/Button/Button";
import { MdEmail } from "react-icons/md";
import Register from "./components/register/Register";
import Signin from "./components/signin/Signin";
import { useEffect, useState } from "react";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const siginModel = searchParams?.signin;
  const registerModel = searchParams?.register;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full h-screen flex items-center justify-center ">
          <FaTwitter className="text-blue-400 lg:text-[20rem] text-[4rem]" />
        </div>
      )}

      {!loading && (
        <div className="flex lg:items-center item-start h-screen md:justify-around justify-start lg:flex-row flex-col py-5 gap-5 ">
          {siginModel && <Signin />}
          {registerModel && <Register />}

          <div className="">
            <FaTwitter className="text-blue-400 lg:text-[25rem] text-[3rem]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="md:text-[4rem] text-[3rem] font-bold">
              Happening Now
            </div>
            <div className="text-[2rem]">Join Today</div>

            <Button>
              <div className="flex items-center justify-center gap-2">
                <FaGoogle color="blue" />
                Sign up with Google
              </div>
            </Button>
            <Button href="/?register=true">
              <div className="flex items-center justify-center gap-2">
                <MdEmail color="blue" />
                Sign up with Email ID
              </div>
            </Button>

            <div className="relative lg:w-80 w-60 flex items-center justify-center">
              <div className="left-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
              <span className="">or</span>
              <div className="right-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
            </div>
            <Button
              bgcolor="bg-blue-400"
              textcolor="text-[#fff]"
              href="/?register=true"
            >
              Create Account
            </Button>
            <div className="text-[12px] w-80 ">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </div>

            <div className="">Already have an account?</div>
            <Button textcolor="text-[#1D9BF0]" href="/?signin=true">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
