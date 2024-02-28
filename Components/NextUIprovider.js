"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbarcomponets/Navbar";
import Footernav from "./Homecomponents/Footer";
import { Toaster } from "./ui/toaster";



export default function NextUIprovider({ children }) {
 
  return (
    <NextUIProvider>
      <main className="">
        <div className="">
         <Navbar />
          {children}
          <Toaster/>
          <Footernav/>
        </div>
      </main>
    </NextUIProvider>
  );
}
