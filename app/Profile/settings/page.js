import React from "react";
import {Button, Divider} from "@nextui-org/react"
import { IoIosNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLanguage } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";
import { IoSyncCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaBug } from "react-icons/fa";







function page() {
  return (
    <div className="flex justify-start flex-col items-start gap-4 w-full p-4 ">
      <div>
        <h6 className="text-xl font-bold leading-7">Settings</h6>
        <p className="text-xs ">Notifications, Language, Help & Support, Bugs.</p>
      </div>
      <div className="flex justify-start flex-col items-start w-full gap-2">
        <p className="text-gray-500 text-md">General</p>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><IoIosNotifications size={24}/>Notification</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><TbLanguage size={24}/>App Language</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><IoMdHelpCircle size={24}/>Help & Support</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
      </div>
      <div className="flex justify-start flex-col items-start w-full gap-2">
        <p className="text-gray-500 text-md">Account</p>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><IoSyncCircle size={24}/>Change Account</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center text-red-600"><MdDelete  size={24}/>Delete Account</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center text-red-600"><MdLogout size={24}/>Logout</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
      </div>
      <div className="flex justify-start flex-col items-start w-full gap-2">
        <p className="text-gray-500 text-md">Feedback</p>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><VscFeedback size={24}/>Send feedback</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
        <div className="md:w-11/12">
          <Button className="flex justify-between items-center w-full rounded-none " variant="light"><span className="flex flex-row gap-2 items-center"><FaBug  size={24}/>Report a Bug</span><IoIosArrowForward/></Button>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default page;
