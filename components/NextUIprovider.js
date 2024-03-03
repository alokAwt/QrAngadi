"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbarcomponets/Navbar";
import Footernav from "./Homecomponents/Footer";
import { Toaster } from "./ui/toaster";
import {usePathname } from 'next/navigation'




export default function NextUIprovider({ children }) {
  const pathname=usePathname()


  console.log(pathname)
 
  return (
    <NextUIProvider>
      <main className="">
        <div className="">
        {(pathname === '/Profile' || pathname.startsWith('/Analytics') || pathname === '/Profile/settings' )   ? null : <Navbar />}
          {children}
          <Toaster/>
          {(pathname === '/Profile' || pathname.startsWith('/Analytics')|| pathname === '/Profile/settings') ? null : <Footernav/>}
        </div>
      </main>
    </NextUIProvider>
  );
}
