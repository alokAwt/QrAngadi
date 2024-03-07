"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Navtab from "./Navtab";
import logo from "../../public/qr-angadi.png";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Sidebarnav from "./Sidebarnav";
import Link from "next/link";
import Signinmodal from "../Login/Signinmodal";
import { FaUserCircle } from "react-icons/fa";
import { deleteTokenCookie } from "@/Utility/Authutils";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Tabs, Tab  } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { GetProfile } from "@/Utility/Api/Users";
import { MdDashboard } from "react-icons/md";
import { RiQrCodeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";
import {usePathname } from 'next/navigation'


export default function App() {
  const [{token},dispatch]=UseStatevalue()
  const [selected, setSelected] =useState("Home");

  const pathname=usePathname()


  const [islogged, setislogin] = useState(false);
  const [data, setData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();


  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelected("Home");
        break;
      case "/Aboutus":
        setSelected("Aboutus");
        break;
      case "/QRcodesolution":
        setSelected("QRCodeSolutions");
        break;
      case "/Pricing":
        setSelected("Pricing");
        break;
      case "/Contactus":
        setSelected("Contactus");
        break;
      default:
        setSelected("Home");
    }
  }, [pathname]);
  
  
  

  

  const getToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
    dispatch({ type: 'SET_TOKEN', token })
      setislogin(true);
    }
    GetProfile().then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getToken();
  }, []);

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <>
      <Navbar className="p-1  w-full" maxWidth="full" shouldHideOnScroll>
        <NavbarBrand className="gap-2">
          <Sheet>
            <SheetTrigger>
              <TiThMenu className="lg:hidden md:hidden sm:block block" />
            </SheetTrigger>
            <SheetContent side="left" className="">
              <SheetHeader>
                <SheetTitle className="flex  items-center gap-2">
                  <Image className="w-16 h-10" src={logo} />
                  QR-Angadi 
                </SheetTitle>
                <SheetDescription>
                  <div className="w-full">
                    <div className="h-auto  p-4 left-0 mx-auto flex flex-col justify-center items-center gap-4">
                      <div className="w-full mx-auto">
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleNavigation("/")}
                            variant="solid"
                            className="flex h-10 justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
                          >
                            <div className="flex justify-center items-center gap-2 text-white">
                              <MdDashboard />
                              <span>Home</span>
                            </div>
                            <IoIosArrowForward className="text-white" />
                          </div>
                        </SheetClose>
                      </div>
                      <div className="w-full mx-auto">
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleNavigation("/Aboutus")}
                            variant="solid"
                            className="flex h-10 justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
                          >
                            <div className="flex justify-center items-center gap-2 text-white">
                              <MdDashboard />
                              <span>Aboutus</span>
                            </div>
                            <IoIosArrowForward className="text-white" />
                          </div>
                        </SheetClose>
                      </div>
                      <div className="w-full mx-auto">
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleNavigation("/QRcodesolution")}
                            variant="solid"
                            className="flex h-10 justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
                          >
                            <div className="flex justify-center items-center gap-2 text-white">
                              <MdDashboard />
                              <span>QR Code Solution</span>
                            </div>
                            <IoIosArrowForward className="text-white" />
                          </div>
                        </SheetClose>
                      </div>
                      <div className="w-full mx-auto">
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleNavigation("/Pricing")}
                            variant="solid"
                            className="flex h-10 justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
                          >
                            <div className="flex justify-center items-center gap-2 text-white">
                              <MdDashboard />
                              <span>Pricing</span>
                            </div>
                            <IoIosArrowForward className="text-white" />
                          </div>
                        </SheetClose>
                      </div>
                      <div className="w-full mx-auto">
                        <SheetClose className="w-full">
                          <div
                            onClick={() => handleNavigation("/Contactus")}
                            variant="solid"
                            className="flex h-10 justify-between items-center px-3 w-full bg-buttoncolor rounded-sm"
                          >
                            <div className="flex justify-center items-center gap-2 text-white">
                              <MdDashboard />
                              <span>Contactus</span>
                            </div>
                            <IoIosArrowForward className="text-white" />
                          </div>
                        </SheetClose>
                      </div>
                      
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Image
            className="hidden md:block lg:block lg:h-10 lg:w-24 md:h-8 md:w-24 sm:hidden "
            src={logo}
          />
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:hidden md:flex lg:flex "
          justify="center"
        >
          <div className="flex max-w-full flex-col ">
      <Tabs
        aria-label="Options"
        classNames={{
          tabList: "gap-8 md:w-full lg:w-full  relative rounded-full p-1  text-black ",
          cursor: "w-full bg-buttoncolor rounded-full   ",
          tab: " px-4 h-6 flex justify-center items-center w-auto text-black no-underline text-gray-400 ",
        }}
        variant=""
        selectedKey={selected}
        onSelectionChange={setSelected}
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
          key="Aboutus"
          title={
            <Link href="/Aboutus">
              <div className="flex items-center space-x-2  ">
                <span className="font-medium">About us</span>
              </div>
            </Link>
          }
        ></Tab>
        <Tab
          key="QRCodeSolutions"
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
          key="Contactus"
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
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {( token !==null) ? (
              <>
                <Dropdown
                  showArrow
                  radius="sm"
                  classNames={{
                    base: "before:bg-default-200", // change arrow background
                    content: "p-0 border-small border-divider bg-background",
                  }}
                >
                  <DropdownTrigger>
                    <Avatar
                     icon={<FaUserCircle className="text-4xl text-buttoncolor"/>}
                      className="ring-2 ring-buttoncolor  rounded-full"
                      size="md"
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Custom item styles"
                    // disabledKeys={["profile"]}
                    className="p-3"
                    itemClasses={{
                      base: [
                        "rounded-md",
                        "text-default-700",
                        "transition-opacity",
                        "data-[hover=true]:text-black",
                        "data-[hover=true]:bg-buttonopacitycolor",
                        "dark:data-[hover=true]:bg-buttonopacitycolor",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                      ],
                    }}
                  >
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                      <DropdownItem
                        isReadOnly
                        key="profile"
                        className="h-14 gap-2 bg-buttoncolor text-white"
                        // className="opacity-100"
                      >
                        <User
                          name={data?.Name}
                          description={data?.Email}
                          classNames={{
                            name: "text-white",
                            description: "text-white",
                          }}
                          avatarProps={{
                            size: "sm",
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                          }}
                        />
                      </DropdownItem>

                      <DropdownItem
                      className="mt-2"
                        onPress={() => router.push("/Profile")}
                        key="Profile"
                      >
                        Profile
                      </DropdownItem>

                      <DropdownItem
                        key="settings"
                        onPress={() => router.push("/Profile/settings")}
                      >
                        Settings
                      </DropdownItem>
                      {/* <DropdownItem key="new_project" endContent={""}>
                        Notification{" "}
                      </DropdownItem> */}
                    </DropdownSection>

                    <DropdownSection aria-label="Preferences" showDivider>
                      <DropdownItem
                        key="quick_search"
                        onClick={() => router.push("/Profile")}
                      >
                        Dashboard
                      </DropdownItem>
                      {/* <DropdownItem
                        isReadOnly
                        key="theme"
                        className="cursor-default"
                        endContent={
                          <select
                            className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-2 border-buttoncolor dark:border-default-200 bg-transparent text-default-500"
                            id="theme"
                            name="theme"
                          >
                            <option>System</option>
                            <option>Dark</option>
                            <option>Light</option>
                          </select>
                        }
                      >
                        Theme
                      </DropdownItem> */}
                    </DropdownSection>

                    <DropdownSection aria-label="Help & Feedback">
                      <DropdownItem
                        key="help_and_feedback"
                        onPress={() => router.push("/help-and-support")}
                      >
                        Help & support
                      </DropdownItem>
                      <DropdownItem onPress={onOpen} key="logout">
                        Log Out
                      </DropdownItem>
                    </DropdownSection>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <Signinmodal />
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>

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
                    dispatch({ type: 'LOGOUT'}),
                    localStorage.clear(),
                    getToken(),
                    onClose(),
                    router.push("/"),
                    router.refresh()
                    
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
