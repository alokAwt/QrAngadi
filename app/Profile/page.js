"use client";
import React, { useState } from "react";
import Sidebar from "../../Components/ProfileComponents/Sidebar";
import MainComponent from "@/Components/ProfileComponents/MainComponent";
import Notification from "../../public/Notification.png";
import Image from "next/image";

const page = () => {
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

export default page;
