'use client'
import Image from "next/image";
import React from "react";
import Brand1 from "../../public/Brand/Brand1.png";
import Brand2 from "../../public/Brand/Brand2.png";
import Brand3 from "../../public/Brand/Brand3.png";
import Brand4 from "../../public/Brand/Brand4.png";
import Brand5 from "../../public/Brand/Brand5.png";
import { Button } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import {  useRouter } from "next/navigation";

const Trustedcomp = () => {
  const router=useRouter()
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16 mx-auto ">
    <div className="flex flex-col justify-center items-center mx-auto mt-12">

      <div className="flex justify-center items-center">
        <h6 className="font-bold text-3xl mt-8 text-center ">
          <span className="text-buttoncolor">Trusted</span> Companies.
        </h6>
      </div>
      <div className="flex justify-center mt-8 items-center gap-12 py-6 w-11/12 flex-col md:flex-row">
        <Image className="w-auto h-12" src={Brand1} />
        <Image className="w-auto h-12" src={Brand2} />
        <Image className="w-auto h-12" src={Brand3} />
        <Image className="w-auto h-8" src={Brand4} />
        <Image className="w-auto h-12" src={Brand5} />
      </div>
    </div>
      <div className="flex justify-center items-center md:gap-12 gap-12 mt-12  md:p-0 p-2 mx-auto flex-col md:flex-row">
        <div className="flex flex-col justify-center gap-2 items-center mx-auto w-full ">
          <Button className="flex justify-between px-4 text-center h-20 bg-buttonopacitycolor rounded-sm md:w-96 w-full ">
            <span className="font-bold text-lg text-buttoncolor pt-6">
              QR Code Solutions
            </span>
            <span className="text-buttoncolor pb-6">
              <FaArrowRightLong />
            </span>
          </Button>
          <Button onPress={()=>router.push('/gamification')} className="flex justify-between px-4 text-center h-20 bg-buttonopacitycolor rounded-sm md:w-96 w-full">
            <span className="font-bold text-lg text-buttoncolor pt-6">
              Gamification Solutions
            </span>
            <span className="text-buttoncolor pb-6">
              <FaArrowRightLong />
            </span>
          </Button>
          <Button className="flex justify-between px-4 text-center h-20 bg-buttonopacitycolor rounded-sm md:w-96 w-full">
            <span className="font-bold text-lg text-buttoncolor pt-6">
              Compliance Solutions
            </span>
            <span className="text-buttoncolor pb-6">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>

        <div className="gap-4 flex flex-col justify-start md:mt-0 mt-4 p-1">
          <h6 className="md:text-3xl text-xl font-bold md:w-[23rem]  leading-9">
            Discover the <span className="text-buttoncolor">Perfect QR Code</span> for Your Business.
          </h6>
          <p className="md:w-[24rem] text-md font-medium text-gray-600 leading-6">
            Unlock the ideal QR code solution for your business needs. With our
            diverse range of options, find the perfect match to elevate your
            brand presence and drive customer engagement.
          </p>
          <div className="flex  items-center ">
            <Button className="rounded-sm w-auto bg-buttoncolor text-white font-medium">
              Learn More{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustedcomp;
