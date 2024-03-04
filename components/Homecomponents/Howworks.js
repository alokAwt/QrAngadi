import Image from "next/image";
import React from "react";
import Eclipse from "../../public/Howworks/Ellipse.png";
import qr from "../../public/Howworks/Howworks1.png";
import Vector from "../../public/Howworks/Howworks3.png";
import Icon1 from "../../public/Howworks/Howworks2.png";
import Icon2 from "../../public/Howworks/Howworks4.png";
import Icon3 from "../../public/Howworks/Howworks5.png";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineQrCode } from "react-icons/md";
import { GoSync } from "react-icons/go";
import { RiBarChartFill } from "react-icons/ri";
import { TbSquarePlus2 } from "react-icons/tb";

const Howworks = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16">
      <div className="">
        <h6 className="font-bold md:text-3xl lg:text-3xl text-2xl mt-8 text-center">
          How <span className="text-buttoncolor">QR Angadi</span> works?
        </h6>
      </div>

      <div className="flex justify-center items-center gap-12 lg:gap-12 mt-12 w-11/12 mx-auto flex-col-reverse md:flex-row">
        <div className="flex flex-col items-center gap-6 p-4 md:w-2/4 lg:w-2/4 w-full">
          {/* <div className="flex flex-row items-center  mx-auto gap-2 ">
              <div className="bg-buttoncolor p-2 rounded-full text-white  flex justify-center items-center">
                <FiLogIn />
              </div>
            <div className="flex justify-start items-start flex-col gap-1">
              <h6 className="md:text-lg text-md font-semibold ">
                Sign up & Create your Account.
              </h6>
              <p className="text-black text-xs md:w-96">
                Embark on your QR Angadi journey by signing up and creating your
                account today.
              </p>
            </div>
          </div> */}
          <div className="flex flex-row items-center gap-2">
            <div className="flex justify-center items-center rounded-full text-white">
              <FiLogIn className="md:m-3 text-buttoncolor" size={30} />
              {/* <Image className="h-16 w-16 p-3" src={qr} /> */}
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6 className="md:text-lg text-md font-semibold ">
                Choose your QR Code type.
              </h6>
              <p className=" text-xs md:w-96">
                Pick the right QR code for your needs. From websites to contact
                info or compliance docs, QR Angadi has it all.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex justify-center items-center">
              <MdOutlineQrCode className="md:m-3 text-gray-500" size={30} />
              {/* <Image className="h-16 w-16 p-3" src={qr} /> */}
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6 className="md:text-lg text-md font-semibold text-gray-500">
                Choose your QR Code type.
              </h6>
              <p className="text-gray-500 text-xs md:w-96">
                Pick the right QR code for your needs. From websites to contact
                info or compliance docs, QR Angadi has it all.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex justify-center items-center">
              <GoSync className="md:m-3 text-gray-500" size={30} />
              {/* <Image className="h-16 w-16 p-3" src={qr} /> */}
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6 className="md:text-lg text-md font-semibold text-gray-500">
                Customize Your QR Code.{" "}
              </h6>
              <p className="text-gray-500 text-xs md:w-96">
                Customize it’s design with logos, colors and patterns to align
                with your brand or personal style.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex justify-center items-center">
              <TbSquarePlus2 className="md:m-3 text-gray-500" size={30} />
              {/* <Image className="h-16 w-16 p-3" src={qr} /> */}
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6 className="md:text-lg text-md font-semibold text-gray-500">
                Generate and Implement.{" "}
              </h6>
              <p className="text-gray-500 text-xs md:w-96">
                Generate your QR code with a click. Easily use it in your
                marketing or compliance materials.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex justify-center items-center">
              <RiBarChartFill className="md:m-3 text-gray-500" size={30} />
              {/* <Image className="h-16 w-16 p-3" src={qr} /> */}
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6 className="md:text-lg text-md font-semibold text-gray-500">
                Monitor with Analytics.
              </h6>
              <p className="text-gray-500 text-xs md:w-96">
                Track your QR code performance with our analytics dashboard.
                Gain insights on user engagement and geography to optimize your
                strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/4 lg:w-2/4 w-full">
          <Image src={Vector} />
        </div>
      </div>
    </div>
  );
};

export default Howworks;
