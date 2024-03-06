"use client";
import ProfileNav from "@/components/ProfileComponents/ProfileNav";
import Sidebar from "@/components/ProfileComponents/Sidebar";
import React, { useEffect } from "react";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const [{ token }] = UseStatevalue();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const protectedRoutes = [
      "/Profile",
      "/Analytics",
      "/gamification",
      "/QRcodesolution",
    ];
    if (
      protectedRoutes.includes(pathname)
     
    ) {
      if (token === null) {
        router.replace("/Login");
      }
    }
  }, [pathname, token]);

  return (
    <main className="flex sticky top-0">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <ProfileNav />
        {children}
      </div>
    </main>
  );
};

export default Layout;
