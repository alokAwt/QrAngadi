"use client";
import React from "react";
import Web from "../../public/QRgenerate/Web.png";
import Videos from "../../public/QRgenerate/Videos.png";
import Media from "../../public/QRgenerate/Media.png";
import Share from "../../public/QRgenerate/Share.png";
import Textfile from "../../public/QRgenerate/Textfile.png";
import Mic from "../../public/QRgenerate/Mic.png";
import Location from "../../public/QRgenerate/Location.png";
import Pdf from "../../public/QRgenerate/Pdf.png";
import Image from "next/image";
import { Tabs, Tab } from "@nextui-org/react";
import QR from "../../public/QR.png";
import { IoIosArrowDown } from "react-icons/io";
import Linkdin from "../../public/Aboutus/Linkdin.png";
import Insta from "../../public/Aboutus/Insta.png";
import Music from "../../public/Aboutus/Music.png";
import Pintrest from "../../public/Aboutus/Pintrest.png";
import Youtube from "../../public/Aboutus/Youtube.png";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { MdInfo } from "react-icons/md";

const page = () => {
  const [selected, setSelected] = React.useState("STATIC");

  return (
    <div className="flex flex-col w-11/12 justify-center items-start mx-auto mt-12">
      <div>
        <h6 className="text-3xl font-bold ">
          Create your <span className="text-buttoncolor">Own</span> QR Code!
        </h6>
        <p className="text-sm font-medium mt-2">
          Easily generate personalized QR Codes in minutes with QR Angadi's QR
          Code Generator!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-8">
        <div className="flex flex-row flex-wrap justify-evenly items-center gap-2 bg-[#FF71431A] border-1 border-buttoncolor w-full rounded-sm border-opacity-50 p-2 px-2">
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Web} />
            </div>
            <p className="text-center text-xs">Website URL</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Videos} />
            </div>
            <p className="text-center text-xs">Videos</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Media} />
            </div>
            <p className="text-center text-xs">Images</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Share} />
            </div>
            <p className="text-center text-xs">Social Accounts</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Textfile} />
            </div>
            <p className="text-center text-xs">Text Files</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Mic} />
            </div>
            <p className="text-center text-xs">Audio Files</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Location} />
            </div>
            <p className="text-center text-xs">Location</p>
          </Button>
          <Button
            variant="light"
            className="flex flex-col justify-center items-center gap-1 h-auto py-2"
          >
            <div>
              <Image className="h-8 w-8 object-contain" src={Pdf} />
            </div>
            <p className="text-center text-xs">PDF Files</p>
          </Button>
        </div>

        <div className="flex flex-col justify-start items-start gap-2 p-4 w-full rounded-sm border-1 border-buttoncolor border-opacity-50 mt-4">
          <span className="text-xs ml-auto items-center flex gap-1">
            <MdInfo className="inline-block text-lg text-blue-700" />
            We Recommend you to choose the dynamic QR code if you want to track
            your performance and edit whenever you need.
          </span>
          <h6 className="text-xl font-bold">Enter QR details</h6>
          <div className="mb-6 mt-4 w-full">
            <label
              for="Enter your QR Name *"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your QR Name <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 "
              placeholder="Enter QR Name"
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter URL of webpage <span className="text-red-500">*</span>{" "}
              <span className="text-xs text-gray-500">
                (eg: https://www.designdaddie.com/)
              </span>
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-buttoncolor focus:border-buttoncolor block w-full p-2.5 d "
              placeholder="Enter webpage URL"
              required
            />
          </div>

          <h6 className="text-sm font-medium">
            QR Code type <span className="text-red-500">*</span>
          </h6>
          <div className="mt-4 w-96  ">
            <Tabs
              variant="bordered"
              fullWidth
              size="lg"
              aria-label="Tabs form"
              classNames={{
                tabList: " w-full  p-0 border-2 border-buttoncolor rounded-md",
                cursor: "w-full bg-buttoncolor rounded-sm ",
                tab: "  text-white  ",
                tabContent: "group-data-[selected=true]:text-white w-full",
              }}
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="STATIC" title="STATIC" className="w-full"></Tab>
              <Tab key="DYNAMIC" title="DYNAMIC"></Tab>
            </Tabs>

            <Button className="text-white bg-buttoncolor rounded-sm w-96 mt-4">
              GENERATE QR
            </Button>
          </div>
        </div>

        <div className="flex  items-start mt-4 w-full gap-8">
          <div className="flex flex-col justify-center items-start  gap-2 border-1 rounded-sm border-buttoncolor border-opacity-50 p-6 w-3/4">
            <h6 className="text-sm font-medium">Customize your QR Code</h6>
            <div className="w-full mx-auto mb-8">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                  tabList:
                    "gap-6 w-full relative rounded-none p-0 font-medium ",
                  cursor: "w-full bg-buttoncolor font-medium",
                  tab: "w-full  h-12",
                  tabContent: "group-data-[selected=true]:text-buttoncolor ",
                }}
              >
                <Tab
                  key="Pattern"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Pattern</span>
                    </div>
                  }
                />
                <Tab
                  key="Eyes"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Eyes</span>
                    </div>
                  }
                />
                <Tab
                  key="Colors"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Colors</span>
                    </div>
                  }
                />
                <Tab
                  key="Logo"
                  title={
                    <div className="flex items-center space-x-2">
                      <span>Logo</span>
                    </div>
                  }
                />
              </Tabs>
            </div>
          </div>

          {/* qrpreview */}
          <div className="flex flex-col justify-start items-center gap-2 w-2/5">
            <div className="shadow-lg w-96 h-96 flex justify-center items-center p-2 border-1 border-gray-300 rounded-sm">
              <Image className="w-full h-full" src={QR} />
            </div>
            <p className="text-xs  items-center flex gap-1">
              <span>
                <MdInfo className="inline-block text-lg text-blue-700" />
              </span>
              This is your Preview.
            </p>

            <Select
              color=""
              placeholder="Select Type"
              variant="flat"
              radius="sm"
              size="sm"
              className="text-sm mt-2 bg-white flex justify-center rounded-md border-buttoncolor border-2 items-center  w-full  text-buttoncolor"
            >
              <SelectItem className="text-buttoncolor" value="SVG">
                SVG
              </SelectItem>
              <SelectItem className="text-buttoncolor" value="Png">
                Png
              </SelectItem>
            </Select>

            <Button
              variant="solid"
              className="text-white bg-buttoncolor rounded-sm w-full"
            >
              Download
            </Button>
          </div>
        </div>

        {/* quick share */}

        <div className="flex flex-row justify-between gap-4 items-center p-4 rounded-sm w-full border-1 border-buttoncolor border-opacity-50 mt-4 ">
          <div className="flex flex-col gap-2 justify-start items-start">
            <div>
              <p className="text-xs font-bold">Quick Share</p>
            </div>
            <div className="flex justify-start items-center gap-2 ">
              <Image className="h-8 w-8" src={Linkdin} />
              <Image className="h-8 w-8" src={Pintrest} />
              <Image className="h-8 w-8" src={Insta} />
              <Image className="h-8 w-8" src={Music} />
              <Image className="h-8 w-8" src={Youtube} />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start w-2/4">
            <p className="text-xs font-bold">Copy Short URL</p>
            <div className="w-full h-10 border-1.5 rounded-md border-gray-300 flex justify-between gap-2 items-center px-4">
            <p className="truncate w-full text-gray-400 text-sm">https://qrangadidesign.com/hd87ebsodh</p>
              <Button
                variant="light"
                className="text-buttoncolor font-medium uppercase rounded-none"
              >
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
