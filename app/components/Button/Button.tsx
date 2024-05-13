import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
  bgcolor?: string;
  textcolor?: string;
}
const Button: React.FC<ChildrenProps> = ({ children, bgcolor, textcolor }) => {
  return (
    <div
      className={`${bgcolor ? `bg-${bgcolor}` : ""} ${
        textcolor ? `${textcolor}` : ""
      } lg:w-80 w-60 h-10 rounded-2xl border flex items-center justify-center`}
    >
      <button className="">{children}</button>
    </div>
  );
};

export default Button;
