"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vector from "../../public/Howworks/Howworks3.png";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineQrCode } from "react-icons/md";
import { GoSync } from "react-icons/go";
import { RiBarChartFill } from "react-icons/ri";
import { TbSquarePlus2 } from "react-icons/tb";
import QRtype from "../../public/Howworks/QRtype.png";
import Analytics from "../../public/Howworks/Analytics.png";
import Customize from "../../public/Howworks/Customize.png";
import Generate from "../../public/Howworks/Generate.png";

const Howworks = () => {
  const [Selectedimage, setSelectedImage] = useState(Vector);
  const images = [Vector, QRtype, Analytics, Customize, Generate]; 
  const [imageIndex, setImageIndex] = useState(0);


  

 

  const Active =
    "flex flex-row items-center ring-1 ring-buttoncolor p-2 rounded-md gap-2 cursor-pointer transition-all duration-700 ";
  const UnActive =
    "flex flex-row items-center gap-2 cursor-pointer p-2 transition-all duration-700";

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-16">
      <div className="">
        <h6 className="font-bold md:text-3xl lg:text-3xl text-2xl mt-8 text-center ">
          How <span className="text-buttoncolor">QR Angadi</span> works?
        </h6>
      </div>

      <div className="flex justify-center items-center md:gap-24 gap-12  mt-12 w-11/12 mx-auto flex-col-reverse md:flex-row">
        <div className="flex flex-col items-center gap-6 lg:gap-6 p-4 md:w-2/4 lg:w-2/4 w-full">
          <div
            onClick={() => setImageIndex(0)}
            className={imageIndex === 0 ? Active : UnActive}
          >
            <div
              className={
                imageIndex === 0
                  ? "flex justify-center items-center rounded-full bg-buttonopacitycolor"
                  : "flex justify-center items-center rounded-full"
              }
            >
              <FiLogIn
                className={
                  imageIndex === 0
                    ? "md:m-3 text-buttoncolor"
                    : "md:m-3 text-gray-500"
                }
                size={30}
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6
                className={
                  imageIndex === 0
                    ? "md:text-lg text-md font-semibold"
                    : "md:text-lg text-md font-semibold text-gray-500"
                }
              >
                Sign up & Create your Account.{" "}
              </h6>
              <p
                className={
                  imageIndex === 0
                    ? "text-xs md:w-96"
                    : "text-xs md:w-96 text-gray-500"
                }
              >
               Embark on your QR Angadi journey by signing up and creating your account today.
              </p>
            </div>
          </div>
          <div
            onClick={() => setImageIndex(1)}
            className={imageIndex === 1 ? Active : UnActive}
          >
            <div
              className={
                imageIndex === 1
                  ? "flex justify-center items-center rounded-full bg-buttonopacitycolor"
                  : "flex justify-center items-center rounded-full"
              }
            >
              <MdOutlineQrCode
                className={
                  imageIndex === 1
                    ? "md:m-3 text-buttoncolor"
                    : "md:m-3 text-gray-500"
                }
                size={30}
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6
                className={
                  imageIndex === 1
                    ? "md:text-lg text-md font-semibold"
                    : "md:text-lg text-md font-semibold text-gray-500"
                }
              >
                Choose your QR Code type.
              </h6>
              <p
                className={
                  imageIndex === 1
                    ? "text-xs md:w-96"
                    : "text-xs md:w-96 text-gray-500"
                }
              >
                Pick the right QR code for your needs. From websites to contact
                info or compliance docs, QR Angadi has it all.
              </p>
            </div>
          </div>
          <div
            onClick={() => setImageIndex(2)}
            className={imageIndex === 2 ? Active : UnActive}
          >
            <div
              className={
                imageIndex === 2
                  ? "flex justify-center items-center rounded-full bg-buttonopacitycolor"
                  : "flex justify-center items-center rounded-full"
              }
            >
              <GoSync
                className={
                  imageIndex === 2
                    ? "md:m-3 text-buttoncolor"
                    : "md:m-3 text-gray-500"
                }
                size={30}
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6
                className={
                  imageIndex === 2
                    ? "md:text-lg text-md font-semibold"
                    : "md:text-lg text-md font-semibold text-gray-500"
                }
              >
                Customize Your QR Code.
              </h6>
              <p
                className={
                  imageIndex === 2
                    ? "text-xs md:w-96"
                    : "text-xs md:w-96 text-gray-500"
                }
              >
                Customize its design with logos, colors, and patterns to align
                with your brand or personal style.
              </p>
            </div>
          </div>

          <div
            onClick={() => setImageIndex(3)}
            className={imageIndex === 3 ? Active : UnActive}
          >
            <div
              className={
                imageIndex === 3
                  ? "flex justify-center items-center rounded-full bg-buttonopacitycolor"
                  : "flex justify-center items-center rounded-full"
              }
            >
              <TbSquarePlus2
                className={
                  imageIndex === 3
                    ? "md:m-3 text-buttoncolor"
                    : "md:m-3 text-gray-500"
                }
                size={30}
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6
                className={
                  imageIndex === 3
                    ? "md:text-lg text-md font-semibold"
                    : "md:text-lg text-md font-semibold text-gray-500"
                }
              >
                Generate and Implement.
              </h6>
              <p
                className={
                  imageIndex === 3
                    ? "text-xs md:w-96"
                    : "text-xs md:w-96 text-gray-500"
                }
              >
                Generate your QR code with a click. Easily use it in your
                marketing or compliance materials.
              </p>
            </div>
          </div>

          <div
            onClick={() => setImageIndex(4)}
            className={imageIndex === 4 ? Active : UnActive}
          >
            <div
              className={
                imageIndex === 4
                  ? "flex justify-center items-center rounded-full bg-buttonopacitycolor"
                  : "flex justify-center items-center rounded-full"
              }
            >
              <RiBarChartFill
                className={
                  imageIndex === 4
                    ? "md:m-3 text-buttoncolor"
                    : "md:m-3 text-gray-500"
                }
                size={30}
              />
            </div>
            <div className="flex justify-start items-start flex-col gap-1 ">
              <h6
                className={
                  imageIndex === 4
                    ? "md:text-lg text-md font-semibold"
                    : "md:text-lg text-md font-semibold text-gray-500"
                }
              >
                Monitor with Analytics.
              </h6>
              <p
                className={
                  imageIndex === 4
                    ? "text-xs md:w-96"
                    : "text-xs md:w-96 text-gray-500"
                }
              >
                Track your QR code performance with our analytics dashboard.
                Gain insights on user engagement and geography to optimize your
                strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-2/4 lg:w-2/4 w-full">
          <Image
            className="w-96 h-96 transition-all duration-700"
            src={images[imageIndex]} 
            alt="vectorimage"
          />
        </div>
      </div>
    </div>
  );
};

export default Howworks;
