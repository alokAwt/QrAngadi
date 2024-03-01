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
import paparPlane from "../../public/Footer/paper-plane.png";
import Image from "next/image";
import Link from "next/link";

function Footernav() {
  return (
    <Footer className="bg-black text-white rounded-none mt-4 flex flex-col w-full md:px-0 ">
      <div className="flex flex-wrap-reverse w-full justify-between max-sm:px-3 md:px-20 py-10 max-sm:p-5">
        {/* others */}
        <div className="grid grid-cols-3 p-2 md:grid-cols-3 md:gap-24 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title title="Services" className="mb-2 text-buttoncolor" />
            <Footer.LinkGroup
              col
              className="flex flex-col justify-center text-xs items-start text-white no-underline"
            >
              <Link href="/QRcodesolution">QR Solutions</Link>
              <Footer.Link href="#">Gamification Solutions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Resources" className="mb-2 text-buttoncolor" />
            <Footer.LinkGroup
              col
              className="flex flex-col justify-center text-xs items-start text-white no-underline"
            >
              <Link className="no-underline" href="/Aboutus">
                About Us
              </Link>
              <Link href={"/blog"}>Blog</Link>

              <Link href="/help-and-support">Help & Support</Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="mb-2 text-buttoncolor" />
            <Footer.LinkGroup
              col
              className="flex flex-col justify-center items-start text-xs text-white no-underline hover:no-underline"
            >
              <Link href="/Privacypolicy">Privacy Policy</Link>
              <Link href="/Termsandconditions">Terms and Conditions</Link>
            </Footer.LinkGroup>
          </div>
        </div>
        {/* subscribe */}
        <div className="flex flex-col justify-start items-start px-2 max-md:mt-5 max-w-[320px] mb-5">
          <div>
            <h6 className="text-2xl font-bold text-buttoncolor">
              Subscribe to Newsletter!
            </h6>
            <p className="text-[14px] py-2 font-normal text-white">
              Stay up to date on the latest features and releases by joining our
              newsletter.
            </p>
          </div>
          <div className="bg-[#5D5D5D] flex rounded-md w-full mt-3">
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              className="border-none outline-none bg-transparent placeholder-[#909090] text-white focus:border-none focus:outline-none focus:shadow-transparent flex-1"
              placeholder="Enter Mail"
              style={{
                width: "calc(100% - 50px)",
              }}
            />

            <button className="rounded-md  bg-buttoncolor text-black h-full w-[50px] flex justify-center items-center">
              <Image src={paparPlane} height={15} width={15} />
            </button>
          </div>
          {/* <div className="flex justify-evenly items-center gap-2 mt-4 md:ml-auto ">
              <Image className="h-8 w-8" src={LinkedIn} />
              <Image src={Whatsapp} className="h-8 w-8" />
              <Image className="h-8 w-8" src={FB} />
              <Image className="h-8 w-8" src={Insta} />
              <Image src={twit} className="h-8 w-8" />
              <Image src={tweet} className="h-8 w-8" />
              <Image src={YT} className="h-8 w-8" />
            </div> */}
        </div>
      </div>

      <div className="bg-buttoncolor min-h-[1px] w-[90%] mx-auto mt-5"></div>
      <div className="w-[90%] mx-auto text-white flex flex-wrap-reverse gap-y-3 pag-x-5 py-4 justify-center sm:justify-between">
        <Footer.Copyright
          // by="Mockup. All Rights Reserved.™"
          by="2024 QR Angadi - All rights reserved."
          year={2024}
          className="text-white text-xs "
        />
        <div className="flex text-xs sm:justify-center gap-2 text-white">
          <span className="font-semibold text-buttoncolor">Follow Us:</span>
          <Link href="#">
            <p>Instagram</p>
          </Link>
          <Link href="#">
            <p>Facebook</p>
          </Link>
          <Link href="#">
            <p>Linkedin</p>
          </Link>
          <Link href="#">
            <p>X</p>
          </Link>
          {/* <Link href="/Privacypolicy">
            <p>Privacy Policy</p>
          </Link>
          <Link href="/Termsandconditions">
            <p>Terms of Service</p>
          </Link> */}
        </div>
      </div>
    </Footer>
  );
}

export default Footernav;
