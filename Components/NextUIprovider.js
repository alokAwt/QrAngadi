"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./Navbar";

export default function NextUIprovider({ children }) {
  return (
    <NextUIProvider>
      <main className="">
        <div className="">
          <Navbar />
          {children}
        </div>
      </main>
    </NextUIProvider>
  );
}
