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
} from "@/components/ui/sheet";
import Sidebarnav from "./Sidebarnav";
import Link from "next/link";
import Signinmodal from "../Login/Signinmodal";
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
import { useRouter } from "next/navigation";
import { GetProfile } from "@/Utility/Api/Users";

export default function App() {
  const [islogged, setislogin] = useState(false);
  const [data, setData] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  const getToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
      setislogin(true);
    }
    GetProfile().then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <Navbar className="p-1  w-full" maxWidth="full" shouldHideOnScroll>
        <NavbarBrand className="gap-2">
          <Sheet>
            <SheetTrigger>
              <TiThMenu className="lg:hidden md:block" />
            </SheetTrigger>
            <SheetContent side="left" className="">
              <SheetHeader>
                <SheetTitle className="flex  items-center gap-2">
                  <Image className="w-16 h-10" src={logo} />
                  QR-Angadi
                </SheetTitle>
                <SheetDescription>
                  <Sidebarnav />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Image
            className="hidden md:hidden lg:block lg:h-10 lg:w-24"
            src={logo}
          />
        </NavbarBrand>
        <NavbarContent className="hidden md:hidden lg:flex " justify="center">
          <Navtab />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {islogged ? (
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
                      className="ring-2 ring-buttoncolor  rounded-full"
                      src="https://i.pravatar.cc/150?u=a04258114e29026302d"
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
                        shortcut="⌘K"
                        onClick={() => router.push("/Profile")}
                      >
                        Dashboard
                      </DropdownItem>
                      <DropdownItem
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
                      </DropdownItem>
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
                    localStorage.clear(),
                    getToken(),
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
