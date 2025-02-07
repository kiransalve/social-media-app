import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Twitter",
  description: "Social Media Clone - Twitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={poppins.className}>
          <div className="flex container mx-auto px-6">
            <div className="w-full">{children}</div>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
