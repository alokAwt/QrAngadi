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
          tabList: "gap-6 md:w-full  relative rounded-full p-1  text-black ",
          cursor: "w-full bg-apptheme rounded-full  ",
          tab: " px-4 h-6 flex justify-center items-center w-auto   ",
        }}
        variant=""
      >
        <Tab
          key="Home"
          title={
            <Link href="/">
              <div className="flex items-center space-x-2 text-center">
                <span>Home</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="About us"
          title={
            <Link href="/Aboutus">
              <div className="flex items-center space-x-2  ">
                <span>About us</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="QR Code Solutions"
          title={
            <Link href="/QRcodesolution">
              <div className="flex items-center space-x-2  ">
                <span>QR Code Solutions</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="Pricing"
          title={
            <Link href="/Pricing">
              <div className="flex items-center space-x-2  ">
                <span>Pricing</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="Profile"
          title={
            <Link href="/Profile">
              <div className="flex items-center space-x-2  ">
                <span>Profile</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="Contact us"
          title={
            <Link href="Contactus">
              <div className="flex items-center space-x-2  ">
                <span>Contact us</span>
              </div>
            </Link>
          }
        ></Tab>
      </Tabs>
    </div>
  );
}
