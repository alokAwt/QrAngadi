"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbarcomponets/Navbar";
import Footernav from "./Homecomponents/Footer";
import { Toaster } from "./ui/toaster";
import {usePathname } from 'next/navigation'




export default function NextUIprovider({ children }) {
  const pathname=usePathname()

 
  return (
    <NextUIProvider>
      <main className="">
        <div className="">
        {pathname==='/Profile' ?"":<Navbar />}
          {children}
          <Toaster/>
         {pathname==='/Profile' ?"":<Footernav/>}
        </div>
      </main>
    </NextUIProvider>
  );
}
