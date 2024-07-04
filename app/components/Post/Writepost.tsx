import React from "react";
import { TbLetterK } from "react-icons/tb";
import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import Button from "../Button/Button";
const Writepost = () => {
  return (
    <div>
      <div className="">
        <div className="mt-4">
          <div className="flex px-2 gap-2">
            <TbLetterK className="text-[2rem] rounded-full w-10 h-10  border" />
            <div className="w-full h-auto">
              <textarea
                rows={2}
                cols={2}
                placeholder="What is happening?"
                className="w-full outline-none overflow-hidden resize-none pt-2 pl-2"
              />
              <hr />
              <div className="flex items-center justify-between my-3  ">
                <div className="flex gap-4 text-blue-400">
                  <CiImageOn size={24} />
                  <AiOutlineFileGif size={24} />
                  <MdOutlineEmojiEmotions size={24} />
                </div>
                <Button width="w-[4rem] xl:w-[7rem]" bgcolor="bg-blue-400">
                  <div className="text-white font-bold">Post</div>
                </Button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Writepost;
