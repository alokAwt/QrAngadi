import React from "react";
import Sideimage from "../../public/Slider1.png";
import Image from "next/image";
import logo from "../../public/qr-angadi.png";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RiQrCodeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@nextui-org/react";
import {
  SheetClose,
  
} from "@/components/ui/sheet"

function Sidebarnav() {
  return (
    <div className="w-full">
      <div className="h-auto  p-4 left-0 mx-auto flex flex-col justify-center items-center gap-4">
        <div className="w-full mx-auto">
        <SheetClose>

          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <MdDashboard />
              <span>
                <Link href={"/"}>Home</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </SheetClose>
        </div>
        <div className="w-full mx-auto">
          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <FaUserCircle />
              <span>
                <Link href={"/Aboutus"}>About Us</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
        <div className="w-full mx-auto">
          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <MdDashboard />
              <span>
                {" "}
                <Link href="/QRcodesolution">QR Code Solutions</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
        <div className="w-full mx-auto">
          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <MdDashboard />
              <span>
                {" "}
                <Link href="/gamification">Gamification</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
        <div className="w-full mx-auto">
          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <RiQrCodeFill />
              <span>
                <Link href="/Pricing">Pricing</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
        <div className="w-full mx-auto">
          <Button
            variant="solid"
            className="flex justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
          >
            <div className="flex justify-center items-center gap-2 text-white">
              <MdDashboard />
              <span>
                {" "}
                <Link href="Contactus">Contact Us</Link>
              </span>
            </div>
            <IoIosArrowForward className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebarnav;
