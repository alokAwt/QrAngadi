import Image from "next/image";
import React from "react";
import QR from "../../public/Aboutus/FourthQR.png";
import Icon1 from "../../public/Aboutus/Fourth.png";
import Icon2 from "../../public/Aboutus/Fourth2.png";
import Icon3 from "../../public/Aboutus/Fourth3.png";
import Icon4 from "../../public/Aboutus/Fourth4.png";

const Fourthcard = () => {
  return (
    <div className="w-full flex-col items-center justify-center gap-12 mt-12">
      <h6 className="font-bold text-3xl mt-8 text-center mb-8 ">
        What sets us<span className="text-buttoncolor"> apart? </span>
      </h6>

      <div className="flex flex-col w-full mx-auto justify-center items-center gap-4 mt-12">
        <div className="flex md:flex-row flex-col items-center justify-center mx-auto gap-8 border-1.5 border-gray-300 rounded-md p-8">
          <div>
            <Image className="w-32 h-24 object-contain" src={Icon1} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <h6 className="leading-5 font-bold text-lg ">
              Comprehensive Solutions
            </h6>
            <p className=" text-medium text-gray-700 font-medium leading-45 tracking-tighter text-justify">
              QR Angadi is more than just QR codes. We offer a complete solution
              for managing marketing assets and compliance documents, and more,
              as part of Angadi World Technologies Pvt Ltd.
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center mx-auto gap-8 border-1.5 border-gray-300 rounded-md p-8">
          <div>
            <Image className="w-32 h-24 object-contain" src={QR} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <h6 className="leading-5 font-bold text-lg ">Dynamic QR Codes</h6>
            <p className=" text-medium text-gray-700 font-medium leading-45 tracking-tighter text-justify">
              Unlock the unparalleled flexibility of dynamic QR codes, providing
              you the freedom to easily update content at any time, even after
              generating the code.
            </p>{" "}
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center mx-auto gap-8 border-1.5 border-gray-300 rounded-md p-8">
          <div>
            <Image className="w-32 h-24 object-contain" src={Icon2} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <h6 className="leading-5 font-bold text-lg ">
              Robust Security Measures{" "}
            </h6>
            <p className=" text-medium text-gray-700 font-medium leading-45 tracking-tighter text-justify">
              At QR Angadi, we prioritize the security of your data above all
              else. Our advanced measures ensure that your valuable information
              receives the utmost protection, giving you peace of mind.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center mx-auto gap-8 border-1.5 border-gray-300 rounded-md p-8">
          <div>
            <Image className="w-32 h-24 object-contain" src={Icon3} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <h6 className="leading-5 font-bold text-lg ">
              Analytics Dashboard{" "}
            </h6>
            <p className=" text-medium text-gray-700 font-medium leading-45 tracking-tighter text-justify">
              Access invaluable insights into QR code performance with our
              intuitive analytics dashboard, empowering strategic optimization.
            </p>
          </div>
        </div>
        <div className="flex  md:flex-row flex-col items-center justify-center mx-auto gap-8 border-1.5 border-gray-300 rounded-md p-8">
          <div>
            <Image className="w-32 h-24 object-contain" src={Icon4} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <h6 className="leading-5 font-bold text-lg ">
              Intuitive Customization{" "}
            </h6>
            <p className=" text-medium text-gray-700 font-medium leading-45 tracking-tighter text-justify">
              Personalise your QR codes effortlessly with our user-friendly
              customization tools. Add logos, colours, and patterns to align
              with your brand or personal style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourthcard;
