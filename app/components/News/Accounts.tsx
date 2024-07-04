import React from "react";
import { TbLetterK } from "react-icons/tb";
import Button from "../Button/Button";

const Accounts = () => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-between my-5 mx-2">
        <div className="flex gap-2 items-center justify-start">
          <TbLetterK className="text-[2rem] rounded-full w-10 h-10 border" />
          <div className="flex flex-col ">
            <div className="font-bold">Kiran Salve</div>
            <div className="text-sm text-slate-500">@salvekiran</div>
          </div>
        </div>

        <div className="">
          <Button
            width="w-[120px]"
            textcolor="text-white"
            bgcolor="bg-blue-400"
          >
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
