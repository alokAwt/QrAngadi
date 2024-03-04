import React from "react";
import Image from "next/image";
import bg from "../../../public/gamification/bg.png";
function HowItWorks() {
  const data = [
    {
      head: "Sign up",
      text: "Begin your journey by registering with us and accessing our powerful coupon creation platform.",
    },
    {
      head: "Creation",
      text: "Craft eye-catching coupons that reflect your brand identity and resonate with your audience in just a few clicks.",
    },
    {
      head: "Share",
      text: "Spread the word about your enticing offers effortlessly by sharing your customized coupons across multiple platforms.",
    },
    {
      head: "Analyze",
      text: "Analyze the performance of your coupons to see what resonates best with your audience &optimize your marketing strategy accordingly.",
    },
  ];
  return (
    <div className="mb-20">
      <div className="flex justify-center items-center mb-20">
        <h6 className="font-bold text-3xl mt-8 text-center ">
          How it
          <span className="text-buttoncolor"> Works?</span>{" "}
        </h6>
      </div>
      <div className="flex gap-10 w-[75%] mx-auto items-center my-10 flex-wrap">
        <Image
          src={bg}
          style={{
            position: "absolute",
            zIndex: "0",
            left: "235px",
            width: "65%",
          }}
        />
        {data.map((info, index) => {
          return (
            <div
              className="relative overflow-hidden self-stretch flex-1 p-3  bg-white shadow-[0px_0px_20px_3px_#00000040] rounded-2xl z-[1]"
              key={index}
            >
              <span className="font-extrabold text-4xl absolute ms-auto bg-buttoncolor w-32 h-32 rounded-[50%] flex text-white left-[120px] top-[-50px]">
                <span className="top-[65px] left-[28px] relative">
                  {0 + (index + 1).toLocaleString()}
                </span>
              </span>
              <div className="flex flex-col mt-20">
                <div className="text-buttoncolor font-semibold">
                  {info.head}
                </div>
                <div className="text-[12px]">{info.text}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-20">
        <button className="px-16 mx-auto py-3 border-none bg-buttoncolor font-semibold text-white">
          Let's get started
        </button>
      </div>
    </div>
  );
}

export default HowItWorks;
