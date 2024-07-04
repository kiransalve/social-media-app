"use client";
import { SessionProvider } from "next-auth/react";

const AppContext = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AppContext;
