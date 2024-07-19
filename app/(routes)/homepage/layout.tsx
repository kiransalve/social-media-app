"use client";
import News from "@/app/components/News/News";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute";
import Sidebar from "@/app/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-6 mx-auto h-screen">
        <div className="lg:col-span-1 lg:block hidden">
          <Sidebar />
        </div>
        <div className="lg:col-span-3 md:col-span-5 col-span-6 border-r border-l w-full">
          {children}
        </div>
        <div className="lg:col-span-2 hidden lg:block mx-3">
          <News />
        </div>
      </div>
    </ProtectedRoute>
  );
}
