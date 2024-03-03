import Image from "next/image";
import React from "react";
import logo from "../../public/Aboutus/Angadilogo.png";

function Firstcard() {
  return (
    <div className="w-full flex-col items-center justify-center gap-8">
      <h6 className="font-bold text-3xl mt-8 text-center ">
        About <span className="text-buttoncolor">us</span>
      </h6>

      <div className="flex flex-col md:flex-row justify-around gap-12 items-center mt-12">
        <div>
          <Image className="w-[32rem] h-72 object-contain" src={logo} />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h6 className="font-semibold md:text-xl text-lg mb-4 md:w-[27rem] w-[20rem] ">A product of  <p className="text-buttoncolor">Angadi World Technologies Pvt Ltd</p></h6>
          <p className="text-[#0C0C0C] md:w-[27rem] w-[20rem] className=' text-lg  font-medium leading-45 tracking-tighter text-justify">
            We are passionate about unlocking the full potential of QR codes.
            Our mission is to provide an all-encompassing QR code solution that
            goes beyond the basics, empowering businesses and individuals to
            leverage the versatility of this transformative technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstcard;
