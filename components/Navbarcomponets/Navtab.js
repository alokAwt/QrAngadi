"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default function Navtab() {
  return (
    <div className="flex max-w-full flex-col ">
      <Tabs
        aria-label="Options"
        classNames={{
          tabList: "gap-8 md:w-full lg:w-full  relative rounded-full p-1  text-black ",
          cursor: "w-full bg-buttoncolor rounded-full   ",
          tab: " px-4 h-6 flex justify-center items-center w-auto text-black no-underline text-gray-400 ",
        }}
        variant=""
      >
        <Tab
          key="Home"
          title={
            <Link href="/">
              <div className="flex items-center space-x-2 text-center">
                <span className="font-medium">Home</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="About us"
          title={
            <Link href="/Aboutus">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">About us</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="QR Code Solutions"
          title={
            <Link href="/QRcodesolution">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">QR Code Solutions</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="Pricing"
          title={
            <Link href="/Pricing">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">Pricing</span>
              </div>
            </Link>
          }
        ></Tab>
        {/* <Tab
          key="Profile"
          title={
            <Link href="/Profile">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">Profile</span>
              </div>
            </Link>
          }
        ></Tab> */}
        <Tab
          key="Contact us"
          title={
            <Link href="Contactus">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">Contact us</span>
              </div>
            </Link>
          }
        ></Tab>
      </Tabs>
    </div>
  );
}
