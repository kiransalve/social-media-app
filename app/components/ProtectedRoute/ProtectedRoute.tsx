"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaTwitter } from "react-icons/fa";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/"); // Redirect to signin page if not authenticated
    }
  }, [router]);

  if (isAuthenticated === null) {
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <FaTwitter className="text-blue-400 lg:text-[20rem] text-[4rem]" />
      </div>
    ); // Show a loading state while checking authentication
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
