"use client";
import React, { useEffect, useState } from "react";
import { Badge, Avatar, Button } from "@nextui-org/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { GetProfile } from "@/Utility/Api/Users";
import { useRouter } from "next/navigation";
import { deleteTokenCookie } from "@/Utility/Authutils";
import { UseStatevalue } from "@/Utility/Contextfiles/StateProvider";


const ProfileNav = () => {
  const [profile, setProfile] = useState("");
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [{token},dispatch]=UseStatevalue()



  useEffect(() => {
    GetProfile().then((res) => {
      setProfile(res.data);
    });
  }, []);
  return (
    <>
    <nav className="h-12 w-full flex p-4 lg:p-6  items-center justify-between sticky top-0 z-10  bg-slate-100 border-b-1 border-gray-300">
      <div>
        <p className="text-xs text-gray-500 font-medium">
          {" "}
          Hello, {profile?.Name}{" "}
        </p>
        <p className="md:text-md text-xs font-semibold ">
          Let’s create QR Codes.
        </p>
      </div>
      <div className="flex items-center gap-2 p-1 ">
        <Badge
          isOneChar
          content={"5"}
          color="danger"
          shape="circle"
          placement="top-right"
        >
          <span className="h-8 w-8 ring-1 rounded-md flex justify-center items-center">
            {" "}
            <IoNotificationsOutline size={24} />
          </span>
        </Badge>

        <div className="flex items-center gap-2">
          <Avatar
            className="h-8 w-8 m-1"
            isBordered
            radius="sm"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
          <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <Button className="w-12" variant="light">
                {profile?.Name}{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </Button>
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
                    name={profile?.Name}
                    description={profile?.Email}
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
                  key="Profile"
                  onPress={() => router.push("/Profile")}
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
                  Notification
                </DropdownItem> */}
              </DropdownSection>

              <DropdownSection aria-label="Preferences" showDivider>
                <DropdownItem key="quick_search" shortcut="⌘K">
                  Dashboard
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Help & Feedback">
                <DropdownItem
                  key="help_and_feedback"
                  onPress={() => router.push("/help-and-support")}
                >
                  Help & Support
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  onPress={onOpen}
                >
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </nav>


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
};

export default ProfileNav;
