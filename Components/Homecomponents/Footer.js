"use client";

import { Button, Input } from "@nextui-org/react";
import { Footer } from "flowbite-react";
import Whatsapp from "../../public/Footer/whatsapp.svg";
import FB from "../../public/Footer/fb.png";
import Insta from "../../public/Footer/insta.png";
import twit from "../../public/Footer/twit.png";
import tweet from "../../public/Footer/tweet.png";
import YT from "../../public/Footer/YT.png";
import LinkedIn from "../../public/Footer/linked.png";
import Image from "next/image";
import Link from "next/link";

function Footernav() {
  return (
    <Footer className="bg-black text-white rounded-none mt-4 flex flex-col w-full px-3 md:px-0 ">
      <div className="">
        <div className="grid w-full py-4 justify-between sm:flex md:gap-60 sm:justify-between md:flex md:grid-cols-1 h-auto">
          <div className="flex flex-col justify-start items-start px-2">
            <div>
              <h6 className="text-2xl font-bold text-white">News Letter</h6>
              <p className="text-xs py-2 font-normal text-white w-80">
                Stay up to date on the latest features and releases by joining
                our news letter
              </p>
            </div>
            <div className="w-full mt-2 ">
              <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@Angadi.com"
              />
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                We’ll never share your details. Read our{" "}
                <Link
                  href="/Privacypolicy"
                  className="font-medium text-[#f48020] hover:underline dark:text-[#f48020]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="flex justify-end items-end mt-2">
                <Button className="rounded-full w-40 bg-[#f48020] text-black h-8">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-2 mt-4 md:ml-auto ">
              <Image className="h-8 w-8" src={LinkedIn} />
              <Image src={Whatsapp} className="h-8 w-8" />
              <Image className="h-8 w-8" src={FB} />
              <Image className="h-8 w-8" src={Insta} />
              <Image src={twit} className="h-8 w-8" />
              <Image src={tweet} className="h-8 w-8" />
              <Image src={YT} className="h-8 w-8" />
            </div>
          </div>
          <div className="grid grid-cols-3 p-2 mx-auto md:grid-cols-3 md:gap-24 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 mt-4">
            <div>
              <Footer.Title title="Products" className="mb-2 text-white" />
              <Footer.LinkGroup
                col
                className="flex flex-col justify-center items-start text-xs  gap-4 text-white no-underline hover:no-underline"
              >
                <Footer.Link className="hover:no-underline" href="#">
                  Static QR
                </Footer.Link>
                <Footer.Link href="#">Dyamic Qr</Footer.Link>
                <Footer.Link href="#">Scan Analytices</Footer.Link>
                <Footer.Link href="#">Multiple Types</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" className="mb-2 text-white" />
              <Footer.LinkGroup
                col
                className="flex flex-col justify-center text-xs items-start gap-4 text-white no-underline"
              >
                <Footer.Link href="#">QR Creation</Footer.Link>
                <Footer.Link href="#">Analytices</Footer.Link>
                <Footer.Link href="#">Game solutions</Footer.Link>
                <Footer.Link href="#">Product Reach out</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" className="mb-2 text-white" />
              <Footer.LinkGroup
                col
                className="flex flex-col justify-center text-xs items-start gap-4 text-white no-underline"
              >
                <Footer.Link className="no-underline" href="#">
                  News
                </Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Videos</Footer.Link>
                <Footer.Link href="#">FAQ's</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:flex sm:items-center sm:justify-between p-4 bg-[#f48020] ">
        <Footer.Copyright
          href="#"
          by="Mockup. All Rights Reserved.™"
          year={2024}
          className="text-black text-xs"
        />
        <div className="mt-4 flex text-xs gap-2 sm:mt-0 sm:justify-center  text-black">
          <Link href="/Privacypolicy">
            <p>Privacy Policy</p>
          </Link>
          <Link href="/Termsandconditions">
            <p>Terms of Service</p>
          </Link>
        </div>
      </div>
    </Footer>
  );
}

export default Footernav;
