"use client";
import React, { useState } from "react";
import MainComponent from "@/components/ProfileComponents/MainComponent";
import dynamic from 'next/dynamic'



const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);


 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
   <div className="flex flex-col justify-center items-center mx-auto w-full px-4 ">
    <MainComponent/>
   </div>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false
})