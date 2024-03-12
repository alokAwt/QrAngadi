"use client";
import ProfileNav from "@/components/ProfileComponents/ProfileNav";
import Sidebar from "@/components/ProfileComponents/Sidebar";
import React from "react";

const Layout = ({ children }) => {
 
  




 
  

  return (
    <main className="flex sticky top-0">
      <div className="hidden md:flex">
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
