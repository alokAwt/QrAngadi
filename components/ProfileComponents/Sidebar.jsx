"use client";
import React from "react";
import "./Sidebar.css";
import Image from "next/image";
import QR from "../../public/My_Qr.png";
import Logo from "../../public/QR_Angadi_logo.png";
import Create from "../../public/create.png";
import Bulk from "../../public/bulk.png";
import Upgrade from "../../public/upgrade.png";
import Settings from "../../public/settings.png";
import Help from "../../public/help.png";
import Logout from "../../public/logout.png";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { AiOutlineRight, AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiGoogletagmanager } from "react-icons/si";

import { IoQrCode } from "react-icons/io5";
import { TbSquarePlus2 } from "react-icons/tb";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";

export default function () {
  const pathname = usePathname();
  const router = useRouter();

  const active =
    "flex justify-between  items-center bg-buttonopacitycolor  p-1 lg:p-2 rounded-md cursor-pointer text-white";
  const unactive =
    "flex justify-between  items-center   p-1 lg:p-2 rounded-md cursor-pointer bg-buttoncolor text-white";

  return (
    <div className="hidden h-[100vh]  sticky top-0   bg-buttoncolor rounded-tr-2xl p-4 w-12 lg:w-60 lg:flex lg:flex-col justify-between">
      <div className="flex flex-col gap-8 p-1 lg:p-2 ">
        <div className="flex gap-2 items-center ">
          <Image className="h-16 w-32" src={Logo} />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <Button
            onClick={() => router.push("/")}
            className={pathname == "/" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <AiFillHome />
              <p className=" text-xs font-medium cursor-pointer">Home</p>
            </div>
            <AiOutlineRight className="font-medium text-xs" />
          </Button>
          <Button
            onClick={() => router.push("/")}
            className={pathname == "/" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <IoQrCode />
              <p className=" text-xs font-medium cursor-pointer">My QR Codes</p>
            </div>
            <AiOutlineRight className="font-medium text-xs" />
          </Button>
          {/* <Button
            onClick={() => router.push("/Addproperty")}
            className={pathname == "/Addproperty" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <TbSquarePlus2 />
              <p className="font-medium text-xs cursor-pointer">
                Create QR Code
              </p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button> */}
          {/* <Button
            onClick={() => router.push("/Bookings")}
            className={pathname == "/Bookings" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <BsFillBarChartFill />
              <p className="font-medium text-xs">Insights</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button> */}

          {/* <Button
            onClick={() => router.push("/BulkOperation")}
            className={pathname == "/BulkOperation" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <FaLayerGroup />
              <p className="text-xs font-medium">Bulk Operation</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button> */}
          <Button
            onClick={() => router.push("/Pricing")}
            className={pathname == "/Pricing" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <FaWandMagicSparkles />
              <p className="text-xs font-medium">Upgrade Plan</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button>
          <Button
            onClick={() => router.push("Profile/settings")}
            className={pathname == "Profile/settings" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <IoSettingsSharp />
              <p className="text-xs font-medium">Settings</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 bg-buttonopacitycolor ">
        <Button
          onClick={() => router.push("/Settings")}
          className={pathname == "/Settings" ? active : unactive}
        >
          <div
            className="flex items-center gap-2"
            onPress={() => router.push("/help-and-support")}
          >
            <IoIosHelpCircle />
            <p className="text-xs font-medium">Help & Support</p>
          </div>
          <AiOutlineRight className="text-xs" />
        </Button>
        <Button
          onClick={() => router.push("/")}
          className={pathname == "/" ? active : unactive}
        >
          <div className="flex items-center gap-2">
            <MdOutlineLogout />
            <p className="text-xs font-medium">Logout</p>
          </div>
          <AiOutlineRight className="text-xs" />
        </Button>
      </div>
    </div>
  );
}
