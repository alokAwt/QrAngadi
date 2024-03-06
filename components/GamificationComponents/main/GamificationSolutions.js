"use client";
import React from "react";
import scratchNdWin from "../../../public/gamification/scratchNdWin.png";
import slotMachine from "../../../public/gamification/slotMachine.png";
import spin from "../../../public/gamification/spin.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

function GamificationSolutions() {
  const router = useRouter();
  const data = [
    {
      img: scratchNdWin,
      head: "Scratch & Win",
      text: "Transform your marketing strategy with personalized scratch & win cards, crafted and shared effortlessly.",
      to: "/scratch-card",
    },
    {
      img: spin,
      head: "Spin & Win",
      text: "Transform your marketing strategy with personalized spin & win wheel, crafted and shared effortlessly.",
      to: "/spin-wheel",
    },
    {
      img: slotMachine,
      head: "Slot Machine",
      text: "Transform your marketing strategy with personalized slot machine, crafted and shared effortlessly.",
      to: "/slot-machine",
    },
  ];
  return (
    <div className="mb-14">
      <div className="flex justify-center items-center mb-10">
        <h6 className="font-bold text-3xl mt-8 text-center ">
          Our Gamification
          <span className="text-buttoncolor"> Solutions.</span>{" "}
        </h6>
      </div>
      <div className="flex flex-col gap-16 mt-14">
        {data.map((info, index) => {
          return (
            <div
              className={`flex justify-center items-center w-[60%] mx-auto gap-20 gap-y-3 ${
                index % 2 == 0 ? "flex-wrap" : "flex-wrap-reverse"
              } `}
              key={index}
            >
              {index % 2 == 0 ? (
                <>
                  <div className="flex flex-col flex-1 gap-3 max-w-[360px]">
                    <div className="font-semibold text-4xl">{info.head}</div>
                    <div>{info.text}</div>
                    <button
                      className="bg-buttoncolor max-w-[200px] py-2 text-white font-semibold rounded-md"
                      onClick={() => {
                        router.push(`/gamification/${info.to}`);
                      }}
                    >
                      Create Now
                    </button>
                  </div>
                  <div>
                    <Image src={info.img} height={200} width={200} alt="" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Image src={info.img} height={200} width={200} alt="" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3 max-w-[360px]">
                    <div className="font-semibold text-4xl">{info.head}</div>
                    <div>{info.text}</div>
                    <button
                      className="bg-buttoncolor max-w-[200px] py-2 text-white font-semibold rounded-md"
                      onClick={() => {
                        router.push(`/gamification/${info.to}`);
                      }}
                    >
                      Create Now
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GamificationSolutions;
