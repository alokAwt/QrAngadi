"use client";
import React, { useState, useEffect } from "react";
import MainComponent from "@/components/ProfileComponents/MainComponent";

const isBrowser = typeof window !== 'undefined';

const Page = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    if (isBrowser) {
      import('../../components/ProfileComponents/MainComponent').then((module) => {
      }).catch((error) => {
        console.error("Failed to load MainComponent:", error);
      });
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full px-4 ">
      <MainComponent />
    </div>
  );
};

export default Page;
