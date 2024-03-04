import React from "react";
import Image from "next/image";
import spinWheel from "../../../public/gamification/spinWheel.png";
import celeb from "../../../public/gamification/celeb.png";

function CreateCoupons() {
  return (
    <div
      className={`flex justify-center items-center  mx-auto gap-20 gap-y-3 flex-wrap my-10`}
    >
      {" "}
      <div className="flex flex-col flex-1 gap-3 max-w-[360px]">
        <div className="font-semibold text-4xl">
          Create, customize, share & analyze your own{" "}
          <span className="text-buttoncolor">coupons!</span>
        </div>
        <div>
          Create interactive marketing games online to boost conversions without
          any coding. It's your hassle-free gamification platform!
        </div>
        <div className="flex gap-5 flex-wrap">
          {" "}
          <button className="bg-buttoncolor max-w-[200px] py-2 px-6 text-white font-normal rounded-md">
            Create a game
          </button>{" "}
          <button className="text-buttoncolor max-w-[200px] py-2 px-6 border-1 border-buttoncolor rounded-md hover:text-white hover:bg-buttoncolor">
            My Dashboard
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={celeb}
          height={500}
          width={500}
          style={{ minWidth: "280px" }}
        />
        <Image
          src={spinWheel}
          height={200}
          width={200}
          style={{ position: "absolute" }}
        />
      </div>
    </div>
  );
}

export default CreateCoupons;
