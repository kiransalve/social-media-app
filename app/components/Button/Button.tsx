import Link from "next/link";
import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
  bgcolor?: string;
  textcolor?: string;
  href?: string;
  onClick?: () => void;
  width?: string;
}
const Button: React.FC<ChildrenProps> = ({
  children,
  bgcolor,
  textcolor,
  href,
  onClick,
  width,
}) => {
  return (
    <div
      className={`${bgcolor ? `${bgcolor}` : ""} ${
        textcolor ? `${textcolor}` : ""
      } ${
        width ? width : "lg:w-80 w-60"
      }  h-10 rounded-2xl border flex items-center justify-center cursor-pointer`}
    >
      {href ? (
        <Link href={href}>{children}</Link>
      ) : (
        <button className="outline-none border-none" onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
