import React from "react";
import { TbLetterK } from "react-icons/tb";

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
        <div className="px-2 py-1 font-bold border rounded-lg bg-blue-400 text-white">
          <button className="">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
