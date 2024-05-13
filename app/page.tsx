import { FaTwitter } from "react-icons/fa";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className="flex lg:items-center item-start h-screen md:justify-around justify-start lg:flex-row flex-col py-5 gap-5">
      <div className="">
        <FaTwitter className="text-blue-600 lg:text-[25rem] text-[3rem]" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="md:text-[4rem] text-[3rem] font-bold">
          Happening Now
        </div>
        <div className="text-[2rem]">Join Today</div>
        <Button>Sign up with Google</Button>
        <Button>Sign up with Email ID</Button>

        <div className="relative lg:w-80 w-60 flex items-center justify-center">
          <div className="left-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
          <span className="">or</span>
          <div className="right-0 absolute border-[.9px] border-[whitesmoke] w-[45%]"></div>
        </div>
        <Button bgcolor="blue-600" textcolor="text-[#fff]">
          Create Account
        </Button>
        <div className="text-[12px] w-80 ">
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </div>
        <div className="">Already have an account?</div>
        <Button textcolor="text-[#1D9BF0]">Sign In</Button>
      </div>
    </div>
  );
}
