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
import { deleteTokenCookie } from "@/Utility/Authutils";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [{ token }, dispatch] = UseStatevalue();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const active =
    "flex justify-between  items-center bg-white text-buttoncolor  p-1 lg:p-2 rounded-md cursor-pointer ";
  const unactive =
    "flex justify-between  items-center   p-1 lg:p-2 rounded-md cursor-pointer bg-buttoncolor text-white";

  return (
    <>
      <div className=" h-[100vh]  sticky top-0   bg-buttoncolor rounded-tr-2xl p-4 w-full lg:w-60 lg:flex lg:flex-col justify-between">
        <div className="flex flex-col gap-8 p-1 lg:p-2 ">
          <div className="flex gap-2 items-center ">
            <Image className="h-16 w-32" src={Logo} />
          </div>
          <div className="flex flex-col gap-2 text-white">
            <Button
              onPress={() => router.push("/")}
              className={pathname == "/" ? active : unactive}
            >
              <div className="flex items-center gap-2">
                <AiFillHome />
                <p className=" text-xs font-medium cursor-pointer">Home</p>
              </div>
              <AiOutlineRight className="font-medium text-xs" />
            </Button>
            <Button
              onClick={() => router.push("/Profile")}
              className={pathname == "/Profile" ? active : unactive}
            >
              <div className="flex items-center gap-2">
                <IoQrCode />
                <p className=" text-xs font-medium cursor-pointer">
                  My QR Codes
                </p>
              </div>
              <AiOutlineRight className="font-medium text-xs" />
            </Button>
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
              onClick={() => router.push("/Profile/settings")}
              className={pathname == "/Profile/settings" ? active : unactive}
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
            onPress={() => router.push("/help-and-support")}
            className={pathname == "/help-and-support" ? active : unactive}
          >
            <div className="flex items-center gap-2">
              <IoIosHelpCircle />
              <p className="text-xs font-medium">Help & Support</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button>
          <Button
            onPress={onOpen}
            className="flex justify-between  items-center   p-1 lg:p-2 rounded-md cursor-pointer bg-buttoncolor text-white"
          >
            <div className="flex items-center gap-2">
              <MdOutlineLogout />
              <p className="text-xs font-medium">Logout</p>
            </div>
            <AiOutlineRight className="text-xs" />
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        isDismissable={false}
        placement={"center"}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Logout</ModalHeader>
              <ModalBody>
                <h6 className="">Do you want to logout?</h6>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  className="ring-buttoncolor text-buttoncolor"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="bg-buttoncolor text-white"
                  onPress={() => (
                    deleteTokenCookie(router),
                    dispatch({ type: "LOGOUT" }),
                    localStorage.clear(),
                    onClose(),
                    router.push("/")
                  )}
                >
                  Logout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
